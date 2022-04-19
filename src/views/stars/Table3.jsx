import React from 'react';
import MUIDataTable from "mui-datatables";
import { ThemeProvider } from '@mui/material/styles';
import { withStyles } from 'tss-react/mui';
import { createTheme } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import clsx from 'clsx';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import Green from '../../assets/images/checklist-green.png'
import Red from '../../assets/images/checklist-red.png'

const muiCache = createCache({
  key: 'mui-datatables',
  prepend: true,
});

const customStyles = theme => ({
 
  GreyLine: {
    '& td': { backgroundColor: theme.palette.grey[300] },
    
  },
  NameCell: {
    fontWeight: 900,
    color : 'white',
    align : 'center',
    justifyContent :'center'
  },
});

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      denseTable: false,
      vertical: true,
    };
  }

  getMuiTheme = () =>
    createTheme({
      components: {
        MUIDataTable: {
          styleOverrides: {
            root: {
              backgroundColor: 'rgba(125, 125, 125, 0.1)',
            },
            paper: {
              boxShadow: 'none',
            },
          },
        },
      
        MuiTableCell: {
          styleOverrides: {
            head: {
              backgroundColor: '#000000',
         
          
            },
            sortAction: {
              
                  color: "#ffffff" // or whatever you need
               
             }, 
            sortActive: {
              color: "#ffffff"  // whatever you need
            }
          },
        },
        MuiSvgIcon:{
            styleOverrides: {
                root: {
                    color: '#ffffff',
               
                  },
                 

            },
        },
        MuiButton:{
          styleOverrides: {
              root: {
                  color: '#ffffff',
             
                },
               

          },
      },
        MuiTouchRipple:{
            styleOverrides: {
                root: {
                    color: '#ffffff',
               
                  },
                 

            },
        },

        MUIDataTableHeadCell: {
            sortAction: {
              data : {
                color: "white" // or whatever you need
              }, 
              }, 
          }, 
          MuiTableSortLabel: {
            active: {
              color: 'green' // your color here
            }
          },
     
        MUIDataTableSelectCell: {
          styleOverrides: {
            headerCell: {
              backgroundColor: 'rgba(0, 0, 0, 0.1)',
            },
          },
        },
        MuiTableFooter: {
          styleOverrides: {
            root: {
              '& .MuiToolbar-root': {
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
              },
            },
          },
        },
      },
    });

  toggleDenseTable = event => {
    this.setState({
      denseTable: event.target.checked,
    });
  };

  toggleResponsive = event => {
    this.setState({
      vertical: !!event.target.checked,
    });
  };

  render() {
    const columns = [
      {
       
        name: 'Nomor',
        options: {
          filter: true,
          setCellProps: value => {
            return {
             
              style: {
                borderRight: '1px solid #BCBCBC',
              
              },
            };
          },
          setCellHeaderProps: value => {
            return {
             
              style: {
            
                borderRight: '1px solid #BCBCBC',
                color: '#FFFFFF',
              },
            };
          },
        },
      },
      {
        name: 'Nama',
        options: {
            filter: true,
            setCellProps: value => {
              return {
               
                style: {
                  borderRight: '1px solid #BCBCBC',
                
                },
              };
            },
            setCellHeaderProps: value => {
              return {
             
                style: {
              
                  borderRight: '1px solid #BCBCBC',
                },
              };
            },
          },
      

      },
      {
        name: 'Pertanyaan 1',
        options: {
            filter: true,
            setCellProps: value => {
              return {
             
                style: {
                  borderRight: '1px solid #BCBCBC',
                
                },
              };
            },
            setCellHeaderProps: value => {
              return {
                className: clsx({
                  [this.props.classes.NameCell]: true,
                }),
                style: {
              
                  borderRight: '1px solid #BCBCBC',
                },
              };
            },
          },
      },
      {
        name: 'Pertanyaan 2',
        options: {
            filter: true,
            setCellProps: value => {
              return {
             
                style: {
                  borderRight: '1px solid #BCBCBC',
                
                },
              };
            },
            setCellHeaderProps: value => {
              return {
                className: clsx({
                  [this.props.classes.NameCell]: true,
                }),
                style: {
              
                  borderRight: '1px solid #BCBCBC',
                },
              };
            },
          },
      },
      {
        name: 'Pertanyaan 3',
        options: {
            filter: true,
            setCellProps: value => {
              return {
             
                style: {
                  borderRight: '1px solid #BCBCBC',
                
                },
              };
            },
            setCellHeaderProps: value => {
              return {
                className: clsx({
                  [this.props.classes.NameCell]: true,
                }),
                style: {
              
                  borderRight: '1px solid #BCBCBC',
                },
              };
            },
          },
      },
      {
        name: 'Pertanyaan 4',
        options: {
            filter: true,
            setCellProps: value => {
              return {
             
                style: {
                  borderRight: '1px solid #BCBCBC',
                
                },
              };
            },
            setCellHeaderProps: value => {
              return {
                className: clsx({
                  [this.props.classes.NameCell]: true,
                }),
                style: {
              
                  borderRight: '1px solid #BCBCBC',
                },
              };
            },
          },
      },
      {
        name: 'Pertanyaan 5',
        options: {
            filter: true,
            setCellProps: value => {
              return {
             
                style: {
                  borderRight: '1px solid #BCBCBC',
                
                },
              };
            },
            setCellHeaderProps: value => {
              return {
                className: clsx({
                  [this.props.classes.NameCell]: true,
                }),
                style: {
              
                  borderRight: '1px solid #BCBCBC',
                },
              };
            },
          },
      },
      
 
      
    ];

    const data = [
    
     
    
    
      [1, 
        'Joni Dalton 1', 
        <img src={Red} alt=".." width='24' height='24'/>,
        <img src={Green} alt=".." width='24' height='24'/>, 
        <img src={Red} alt=".." width='24' height='24'/>,
        <img src={Green} alt=".." width='24' height='24'/>, 
        <img src={Red} alt=".." width='24' height='24'/> 
      ],
      [
        2, 
        'Joni Dalton 2', 
        <img src={Red} alt=".." width='24' height='24'/>,
        <img src={Green} alt=".." width='24' height='24'/>, 
        <img src={Red} alt=".." width='24' height='24'/>,
        <img src={Green} alt=".." width='24' height='24'/>, 
        <img src={Red} alt=".." width='24' height='24'/> 
      ],
      [
        3, 
        'Joni Dalton 3', 
        <img src={Red} alt=".." width='24' height='24'/>,
        <img src={Green} alt=".." width='24' height='24'/>, 
        <img src={Red} alt=".." width='24' height='24'/>,
        <img src={Green} alt=".." width='24' height='24'/>, 
        <img src={Red} alt=".." width='24' height='24'/> 
      ],
      [
        4, 
        'Joni Dalton 4', 
        <img src={Red} alt=".." width='24' height='24'/>,
        <img src={Green} alt=".." width='24' height='24'/>, 
        <img src={Red} alt=".." width='24' height='24'/>,
        <img src={Green} alt=".." width='24' height='24'/>, 
        <img src={Red} alt=".." width='24' height='24'/> 
      ],
      [
        5, 
        'Joni Dalton 5', 
        <img src={Red} alt=".." width='24' height='24'/>,
        <img src={Green} alt=".." width='24' height='24'/>, 
        <img src={Red} alt=".." width='24' height='24'/>,
        <img src={Green} alt=".." width='24' height='24'/>, 
        <img src={Red} alt=".." width='24' height='24'/> 
      ],
      [
        6, 
        'Joni Dalton 6', 
        <img src={Red} alt=".." width='24' height='24'/>,
        <img src={Green} alt=".." width='24' height='24'/>, 
        <img src={Red} alt=".." width='24' height='24'/>,
        <img src={Green} alt=".." width='24' height='24'/>, 
        <img src={Red} alt=".." width='24' height='24'/> 
      ],
      [
        7, 
        'Joni Dalton 7', 
        <img src={Red} alt=".." width='24' height='24'/>,
        <img src={Green} alt=".." width='24' height='24'/>, 
        <img src={Red} alt=".." width='24' height='24'/>,
        <img src={Green} alt=".." width='24' height='24'/>, 
        <img src={Red} alt=".." width='24' height='24'/>  
      ],
    
     
    ];

    const options = {
      filter: true,
      filterType: 'dropdown',
      responsive: this.state.vertical ? 'vertical' : 'standard',
      fixedHeader: false,
      fixedSelectColumn: false,
      rowHover: false,
      searchOpen: false,
      filter: false,
      viewColumns: false,
      selectToolbarPlacement: "none",
      print: false,
      download: false,
      search: false,
      selectableRows: false,
      pagination: false,
      setRowProps: (row, dataIndex, rowIndex) => {
        return {
          className: clsx({
            [this.props.classes.BusinessAnalystRow]: row[1] === 'Business Analyst',
            [this.props.classes.GreyLine]: rowIndex % 2 === 0 && row[1] !== 'Business Analyst',
          }),
          style: { border: '2px solid #BCBCBC' },
        };
      },
      setTableProps: () => {
        return {
          padding: this.state.denseTable ? 'none' : 'default',

          // material ui v4 only
          size: this.state.denseTable ? 'small' : 'medium',
        };
      },
    };

    return (
      <CacheProvider value={muiCache}>
        <ThemeProvider theme={this.getMuiTheme()}>
          
          <MUIDataTable  data={data} columns={columns} options={options} />
        </ThemeProvider>
      </CacheProvider>
    );
  }
}

export default withStyles(Example, customStyles, { name: 'ExampleCardjs' });