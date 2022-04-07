import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../store/global/Provider'
import Button from '@mui/material/Button';
import PageSpinner from '../../components/Spinner-1'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import InputUnstyled from '@mui/base/InputUnstyled';
import SelectUnstyled, { selectUnstyledClasses } from '@mui/base/SelectUnstyled';
import OptionUnstyled, { optionUnstyledClasses } from '@mui/base/OptionUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import Delete from '../../assets/images/delete_search.png';
import { styled } from '@mui/system';
import SearchLogo from '../../assets/images/search-form.png'

const blue = {
  100: '#DAECFF',
  200: '#80BFFF',
  400: '#3399FF',
  600: '#0072E5',
};

const grey = {
  50: '#F3F6F9',
  100: '#E7EBF0',
  200: '#E0E3E7',
  300: '#CDD2D7',
  400: '#B2BAC2',
  500: '#A0AAB4',
  600: '#6F7E8C',
  700: '#3E5060',
  800: '#2D3843',
  900: '#1A2027',
};

const StyledInputElement = styled('input')(
  ({ theme }) => `
  width: 100%;
  font-size: 0.875rem;
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  line-height: 1.5;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : grey[100]};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
  border-radius: 5px;
  padding: 12px 12px;

  &:hover {
    background: ${theme.palette.mode === 'dark' ? '' : grey[100]};
    border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }

  &:focus {
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[100]};
  }
`,
);

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  return (
    <InputUnstyled components={{ Input: StyledInputElement }} {...props} ref={ref} />
  );
});

const StyledButton = styled('button')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  width: 100%;
  background: ${theme.palette.mode === 'dark' ?  grey[900] : grey[100]};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
  border-radius: 5px;
  
  padding: 10px;
  text-align: left;
  line-height: 1.5;
  padding: 12px 12px;
  color: ${theme.palette.mode === 'dark' ? grey[500] : grey[500]};

 

  &:hover {
    background: ${theme.palette.mode === 'dark' ? '' : grey[100]};
    border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }

  &.${selectUnstyledClasses.focusVisible} {
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[100]};
  }

  &.${selectUnstyledClasses.expanded} {
    &::after {
      content: '▴';
    }
  }

  &::after {
    content: '▾';
    float: right;
  }
  `,
);

const StyledListbox = styled('ul')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 5px;
  margin: 10px 0;
  min-width: auto;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
  border-radius: 5px;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  overflow: auto;
  outline: 0px;

  
  `,
);

const StyledOption = styled(OptionUnstyled)(
  ({ theme }) => `
  list-style: none;
  padding: 5px;
  border-radius: 5px;
  padding: 12px 12px;
  cursor: default;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionUnstyledClasses.selected} {
    background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
    color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
  }

  &.${optionUnstyledClasses.highlighted} {
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }

  &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
    background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
    color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
  }

  &.${optionUnstyledClasses.disabled} {
    color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }
  `,
);

const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
`;

const CustomSelect = React.forwardRef(function CustomSelect(props, ref) {
  const components = {
    Root: StyledButton,
    Listbox: StyledListbox,
    Popper: StyledPopper,
    ...props.components,
  };

  return <SelectUnstyled {...props} ref={ref} components={components} />;
});
  
  
  class Child extends React.Component {
  
    render() {
      return <>
      
    
        <section className="section-body pt-10 pb-10">
          
          <div className="container">
            <div className="col-search flex lg:flex-row gap-3">
                <div className='hidden md:flex flex flex-col w-full'>
                    <span className='pb-3 font-semibold'>Search</span>
                    <div class="form-group has-search">
    <span class="form-control-feedback pt-3 pl-3">
      <img src={SearchLogo} alt=".." width="24px" height="24px"/>
    </span>
    <input type="text" class="form-control" placeholder="Ketik yang ingin dicari"/>
  </div>
            </div>
            <div className='flex flex-col w-full'>
            <span className='pb-3 font-semibold'>Filter</span>
            <div>
            <CustomSelect defaultValue={10}>
        <StyledOption value={10}>Pilih filter yang diinginkan</StyledOption>
        <StyledOption value={20}>filter 1</StyledOption>
        <StyledOption value={30}>filter 2</StyledOption>
      </CustomSelect>
      </div>
      </div>
      <div className="flex flex-row gap-3 w-full">
      <div className='flex flex-col w-full'>
                    <span className='pb-3 font-semibold'>Kategori</span>
          <div>
            <CustomInput aria-label="Search"  type="search"/>
            </div>
            </div>
      <div className='flex items-center pt-8'>

        <img src={Delete} alt="..." />

      </div>
      </div>

          </div>
          </div>
        </section>
  
      
      
     
      </>
    }
  }
  
  
  
  
  const Search = function({...props}) {
    let { type, option } = useParams()
    const navigate = useNavigate()
  
    return (
      <GlobalContext.Consumer>
        {context => (
          <Child 
            {...props}
            context={context}
            navigate={navigate}
            pageType={type}
            pageOption={option}
            />
        )}
  
  
      </GlobalContext.Consumer>
  
      
    );
  }
  
  export default Search