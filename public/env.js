window.localhost
  = (location.hostname === 'localhost' || location.hostname === '127.0.0.1') 
  ? 'http://localhost:9000/'
  : 'http://utcms.dipstrategy.com/'

// window.localhost = `http://mandomcms.dipstrategy.com/`
window.baseUrl = `${localhost}api/`

var ext 
  = (location.hostname === 'localhost' || location.hostname === '127.0.0.1') 
  ? '.php'
  : ''

window.processEnv = {
  api: {
    login: `${baseUrl}login` + ext,

    homeBanner: `${baseUrl}home-banner` + ext,
    homeArticle: `${baseUrl}home-article` + ext,
    homeFeature: `${baseUrl}home-fitur` + ext,
    homeEditFeature: `${baseUrl}home-edit-fitur` + ext,
    homeEvent: `${baseUrl}home-event` + ext,

    articleDetail: `${baseUrl}detail-artikel` + ext,
  }
}