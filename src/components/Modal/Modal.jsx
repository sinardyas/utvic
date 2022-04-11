import * as React from 'react';
import clsx from 'clsx';
import { styled } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';

const BackdropUnstyled = React.forwardRef((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx({ 'MuiBackdrop-open': open }, className)}
      ref={ref}
      {...other}
    />
  );
});


const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled(BackdropUnstyled)`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

export default function Modal({ open, onClose, children, ...props }) {
  return (
    <StyledModal
      open={open}
      onClose={onClose}
      BackdropComponent={Backdrop}
      BackdropProps={{
        open,
      }}
      {...props}
    >
      <div className={'focus-visible:outline-none'}>
        {children}
      </div>
    </StyledModal>
  );
}
