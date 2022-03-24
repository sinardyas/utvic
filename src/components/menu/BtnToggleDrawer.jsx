import React from 'react'
import { GlobalContext } from '../../store/global/Provider'

class BtnToggleDrawerFunc extends React.Component {

  /* constructor(props) {
    super(props)
  } */

  static contextType = GlobalContext

  ToggleDrawer(currentVal) {
    currentVal = !currentVal
    // this.props.context.UpdateContextValue('drawer', currentVal)
    document.querySelector('html').classList.toggle('drawer-nav-show')
  }

  render() {
    const { drawer } = this.props.context

    return (
      <button className='inline-flex lg:hidden'>
        <i
          className='material-icons'
          onClick={ () => this.ToggleDrawer(drawer) }
          >menu</i>
      </button>
    )
  }
}

const BtnToggleDrawer = function() {
  return (
    <GlobalContext.Consumer>
      {context => (
        <BtnToggleDrawerFunc context={context} />
      )}
    </GlobalContext.Consumer>
  )
}


export default BtnToggleDrawer