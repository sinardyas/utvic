import * as React from 'react'
import MenuUnstyled from '@mui/base/MenuUnstyled'
import MenuItemUnstyled, {
  menuItemUnstyledClasses,
} from '@mui/base/MenuItemUnstyled'
import PopperUnstyled from '@mui/base/PopperUnstyled'
import { styled } from '@mui/system'

const blue = {
  100: '#DAECFF',
  200: '#99CCF3',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
}

const grey = {
  100: '#E7EBF0',
  200: '#E0E3E7',
  300: '#CDD2D7',
  400: '#B2BAC2',
  500: '#A0AAB4',
  600: '#6F7E8C',
  700: '#3E5060',
  800: '#2D3843',
  900: '#1A2027',
}

const StyledListbox = styled('ul')(
  () => `
  box-sizing: border-box;
  min-width: 265px;
  background: #fff;
  border: 0.4px solid #D9DCDE;
  border-radius: 10px;
  color: ${grey[900]};
  overflow: auto;
  box-shadow: 0px 9px 20px rgba(0, 0, 0, 0.1);
  `,
)

const DropdownItem = styled(MenuItemUnstyled)(
  () => `
  list-style: none;
  padding: 16px 20px;
  cursor: default;
  
  &:last-of-type {
    border-bottom: none;
  }

  &.${menuItemUnstyledClasses.focusVisible} {
    outline: 1px solid ${blue[200]};
    background-color: ${grey[100]};
    color: ${grey[900]};
  }

  &.${menuItemUnstyledClasses.disabled} {
    color: ${grey[400]};
  }

  &:hover:not(.${menuItemUnstyledClasses.disabled}) {
    background-color: ${grey[100]};
    color: ${grey[900]};
  }
  `,
)

const Popper = styled(PopperUnstyled)`
  z-index: 1;
`

export default function Dropdown ({
  actions,
  open,
  onClose,
  anchorEl,
  listboxId,
  ...restProps
}) {
  const { componentsProps } = restProps
  const { listbox, ...restComponentsProps } = componentsProps || {}
  return (
    <MenuUnstyled
      actions={actions}
      open={open}
      onClose={onClose}
      anchorEl={anchorEl}
      components={{ Root: Popper, Listbox: StyledListbox }}
      componentsProps={{
        listbox: {
          className: 'divide-y',
          id: listboxId,
          ...listbox
        },
        ...restComponentsProps,
      }}
      {...restProps}
    >
    </MenuUnstyled>
  )
}

Dropdown.Item = DropdownItem

//
// export default function UnstyledMenuSimple() {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const isOpen = Boolean(anchorEl);
//   const buttonRef = React.useRef(null);
//   const menuActions = React.useRef(null);
//
//   const handleButtonClick = (event) => {
//     if (isOpen) {
//       setAnchorEl(null);
//     } else {
//       setAnchorEl(event.currentTarget);
//     }
//   };
//
//   const handleButtonKeyDown = (event) => {
//     if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
//       event.preventDefault();
//       setAnchorEl(event.currentTarget);
//       if (event.key === 'ArrowUp') {
//         menuActions.current?.highlightLastItem();
//       }
//     }
//   };
//
//   const close = () => {
//     setAnchorEl(null);
//     buttonRef.current.focus();
//   };
//
//   const createHandleMenuClick = (menuItem) => {
//     return () => {
//       console.log(`Clicked on ${menuItem}`);
//       close();
//     };
//   };
//
//   return (
//     <div>
//       <TriggerButton
//         type="button"
//         onClick={handleButtonClick}
//         onKeyDown={handleButtonKeyDown}
//         ref={buttonRef}
//         aria-controls={isOpen ? 'simple-menu' : undefined}
//         aria-expanded={isOpen || undefined}
//         aria-haspopup="menu"
//       >
//         Language
//       </TriggerButton>
//
//       <MenuUnstyled
//         actions={menuActions}
//         open={isOpen}
//         onClose={close}
//         anchorEl={anchorEl}
//         components={{ Root: Popper, Listbox: StyledListbox }}
//         componentsProps={{ listbox: { id: 'simple-menu' } }}
//       >
//         <DropdownItem onClick={createHandleMenuClick('English')}>
//           English
//         </DropdownItem>
//         <DropdownItem onClick={createHandleMenuClick('中文')}>中文</DropdownItem>
//         <DropdownItem onClick={createHandleMenuClick('Português')}>
//           Português
//         </DropdownItem>
//       </MenuUnstyled>
//     </div>
//   );
// }
