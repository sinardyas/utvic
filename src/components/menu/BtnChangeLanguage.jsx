import React from 'react'
import { GlobalContext } from '../../store/global/Provider'

class BtnChangeLanguageFunc extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      languages: null,
      activeLanguage: null,
      html: null
    }
  }

  CollectLanguages() {
    return new Promise((resolve, reject) => {
      const {
        wording,
        language: activeLanguage
      } = this.props.context
  
      let languages = []
      Object.keys(wording).forEach(key => {
        languages.push({
          label: key.toUpperCase(),
          value: key,
          isActive: activeLanguage === key ? true : false
        })
      })
      this.setState(() => ({
        languages,
        activeLanguage
      }))

      resolve()
    })
  }

  OnClickBtnLanguage(val) {

    const {
      // UpdateContextValue,
      otherPageLanguage
    } = this.props.context

    if ( val.value !== localStorage.getItem('lang') ) {
      if ( otherPageLanguage === 'home' ) {
        // IF CHANGE FROM HOME PAGE
        localStorage.setItem('lang', val.value)
        window.location.reload()
      } else {
        localStorage.setItem('lang', val.value)
        let goToPage = otherPageLanguage.filter(el => el.id === val.value)[0].slug
        window.location.replace(`/${goToPage}`)

      }
    }
  }

  componentDidMount() {
    this.CollectLanguages()
      .then(() => {

        let html = []
        this.state.languages.forEach(el => {
          html.push(<li key={el.value}>
            <button
              className={el.isActive ? 'active' : ''}
              onClick={() => this.OnClickBtnLanguage(el)}
              >
              {el.label}
            </button>
          </li>)
        })

        this.setState(() => ({
          html
        }))
      })
  }

  render() {
    return (
      <ul className='button-languages-group hidden lg:flex flex-nowrap items-center'>
        {this.state.html}
      </ul>
    )
  }
}


const BtnChangeLanguage = function() {
  return (
    <GlobalContext.Consumer>
      {context => (
        <BtnChangeLanguageFunc context={context} />
      )}
    </GlobalContext.Consumer>
  )
}

export default BtnChangeLanguage