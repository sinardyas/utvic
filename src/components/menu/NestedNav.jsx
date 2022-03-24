import React from 'react'
import { GlobalContext } from '../../store/global/Provider'
import { Link } from "react-router-dom"
// import { api } from '../../boot/axios'


class ListItem extends React.Component {

  static contextType = GlobalContext

  constructor(props) {
    super(props)

    this.state = {

    }

    this.gridRef = React.createRef()
    this.toggleChildren = this.toggleChildren.bind(this);
  }

  toggleChildren() {
    this.gridRef.current.classList.toggle( 'show' )
  }

  UpdateContextValue() {
    this.props.context.UpdateContextValue('resetPage', true)
  }

  render() {

    let children = null;

    const { item } = this.props

    let hasChildren

    if (item.children && item.children.length) {
      hasChildren = true

      children = (
        <div className='children'>
          <ul>
            {
              item.children.map((item, index) => (
                <ListItem
                  item={item}
                  key={index}
                  indexed={index}
                  history={ this.props.history }
                  hasChildren={true}
                  context={this.props.context}
                  />
              ))
            }
          </ul>
        </div>
      )
    }
 
    return (
      <li
        ref={this.gridRef}
        className={ 'relative ' + (hasChildren ? 'has-children' : '') }
        >
        <div className='link flex items-center'>
          <Link
            to={item.url}
            className='inline-block whitespace-nowrap'
            onClick={ () => this.UpdateContextValue() }
            >
            {item.name}
          </Link>
          {
            hasChildren && 
            <i
              className='icon material-icons'
              onClick={ this.toggleChildren }
              >expand_more</i>
          }
        </div>
        {children}
      </li>
    )
  }
}

class NestedNavFunc extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      allMenu: this.props.context.allMenu,
      showMenu: false,
    }
  }

  componentDidMount() {
/*     this.props.context.FetchGet({
      url: `${window.baseUrl}${this.props.context.language}/menu/all`,
      errorText: 'Error while fetch menu'
    })
    .then(response => {
      this.props.context.UpdateContextValue('allMenu', response)
      this.setState((state, props) => ({
        showMenu: true
      }))
    })
    .catch(error => {
      console.error('error:', error)
    }) */
  }

  render() {

    return (

      <GlobalContext.Consumer>
      {
        context => (
          <ul className='nav'>
            <Link
              to='/test-error'
              className='mr-5 text-red-500'
              >
              Test error page
            </Link>
            {
              this.props.context.allMenu.map((item, index) => (
                <ListItem
                item={ item }
                key={ index }
                indexed={ index }
                history={ this.props.history }
                context={context}
              />
              ))
            }
          </ul>

        )
      }
    </GlobalContext.Consumer>



    )

    /* return this.state.showMenu
      ? <>
        <ul className='nav'>
            {
              this.props.context.allMenu.map((item, index) => (
                <ListItem
                  item={ item }
                  key={ index }
                  indexed={ index }
                  history={ this.props.history }
                />
              ))
            }
          </ul>
      </>
      : <>loading menu {this.state.showMenu}</> */
  }
}

const NestedNav = function() {
  return (
    <GlobalContext.Consumer>
      {context => (
        <NestedNavFunc context={context} />
      )}
    </GlobalContext.Consumer>
  )
}

export default NestedNav