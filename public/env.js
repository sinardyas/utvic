window.localhost =
  location.hostname === "localhost" || location.hostname === "127.0.0.1"
    ? "http://localhost:9000/"
    : "http://utcms.dipstrategy.com/";

// window.localhost = `http://mandomcms.dipstrategy.com/`
window.baseUrl = `${localhost}api/`;

var ext =
  location.hostname === "localhost" || location.hostname === "127.0.0.1"
    ? ".php"
    : "";

window.processEnv = {
  api: {
    login: `${baseUrl}login` + ext,

    homeBanner: `${baseUrl}home-banner` + ext,
    homeArticle: `${baseUrl}home-article` + ext,
    homeFeature: `${baseUrl}home-fitur` + ext,
    homeEditFeature: `${baseUrl}home-edit-fitur` + ext,
    homeEvent: `${baseUrl}home-event` + ext,

    articleDetail: `${baseUrl}detail-artikel` + ext,
    masterArea: `${baseUrl}master-area` + ext,
    masterTipeProyek: `${baseUrl}master-tipe-proyek` + ext,
    masterKategoriInovasi: `${baseUrl}master-kategori-inovasi` + ext,
    masterSubkategoriInovasi: `${baseUrl}master-subkategori-inovasi` + ext,
    masterTemaInovasi: `${baseUrl}master-tema-inovasi` + ext,
    masterReferensi: `${baseUrl}master-referensi` + ext,
    masterMetodologiProyek: `${baseUrl}master-metodologi-proyek` + ext,
    masterFasilitator: `${baseUrl}master-fasilitator` + ext,
    masterUser: `${baseUrl}master-user` + ext,
    masterTipeInovasi: `${baseUrl}master-tipe-inovasi` + ext,
    createInnovation: `${baseUrl}create-innovation` + ext,
    permissionDocument: `${baseUrl}permission-document` + ext,
    deleteDocument: `${baseUrl}delete-document` + ext,
    getDocument: `${baseUrl}get-document` + ext,

    getListDocking: `${baseUrl}get-list-docking` + ext,
    getDetailListDocking: `${baseUrl}detail-list-docking` + ext,
    getHasilPenilaian: `${baseUrl}get-hasil-penilaian` + ext,
    getFeedbackPenjurian: `${baseUrl}get-feedback-penjurian` + ext,
    feedbackPenjurian: `${baseUrl}feedback-penjurian` + ext,
    getInovasiPenjurian: `${baseUrl}get-inovasi-penjurian` + ext,
    getUtvic: `${baseUrl}get-utvic` + ext,
    getSiteByPejuang: `${baseUrl}get-site-by-pejuang` + ext,
    getCabangByPejuang: `${baseUrl}get-cabang-by-pejuang` + ext,
    getHoByPejuang: `${baseUrl}get-ho-by-pejuang` + ext,
    addCertificate: `${baseUrl}add-certificate` + ext,
    addWinner: `${baseUrl}add-winner` + ext,
  },
};
