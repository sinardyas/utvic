import React from 'react'
// import NestedNav from './NestedNav'
import { GlobalContext } from '../../store/global/Provider'

import '../../styles/DrawerNav.scss'

class DrawerNavFunc extends React.Component {

  ToggleDrawer() {
    document.querySelector('html').classList.remove('drawer-nav-show')
  }

  render() {
    const { drawer } = this.props.context

    return (
      <>
        <div className={'drawer-main ' + (drawer ? 'show' : '')}>
          <div className='drawer-wrap'>
            <nav className='drawer-menu'>
              {/* <NestedNav /> */}
              test
            </nav>
          </div>
          <div
            className='bg'
            onClick={ () => this.ToggleDrawer() }
            ></div>
        </div>
      </>
    )
  }
}

const DrawerNav = function() {
  return (
    <GlobalContext.Consumer>
      {context => (
        <DrawerNavFunc context={context} />
      )}
    </GlobalContext.Consumer>
  )
}

export default DrawerNav