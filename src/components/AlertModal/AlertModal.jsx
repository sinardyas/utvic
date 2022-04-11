import React from 'react'
import Modal from '../Modal'

function AlertModal ({ open, onClose, children, ...props }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      {...props}
    >
      <div className={'my-6 bg-white py-6 px-12 rounded-lg'}>
        {children}
      </div>
    </Modal>
  )
}

AlertModal.Title = ({ className = '', ...props }) => {
  return (
    <div
      className={`mb-3 font-semibold text-2xl text-center ${className}`}
      {...props}
    />
  )
}


AlertModal.Body = ({ className = '', ...props }) => {
  return (
    <div
      className={`text-lg text-center my-3 ${className}`}
      {...props}
    />
  )
}


AlertModal.Footer = ({ className = '', ...props }) => {
  return (
    <div
      className={`flex justify-center gap-3 ${className}`}
      {...props}
    />
  )
}

export default AlertModal
