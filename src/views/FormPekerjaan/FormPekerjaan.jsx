import React, { useState } from "react";
import "../../styles/FormPekerjaan.scss";
import Certif from "../../assets/images/menu/certif.png";
import InfoSection from "./components/InfoSection";
import FormAdmin from "./components/FormAdmin";
import FormUser from "./components/FormUser";
import Header from "../../components/Header";

const FormPekerjaan = () => {
  const [isAdmin, setIsAdmin] = useState(true);

  const BackButton = ({ style }) => {
    return <div className={`back-button ${style}`}>Kembali</div>;
  };

  const data = {
    IsAdmin: "01",
    ParameterId: 2,
    PejuangId: 1,
    AreaId: 1,
    UserId: 123,
    UploadFile: "Nama File",
    Link: "",
    Note: "lorem ipsum",
    Nilai: 20,
  };

  const response = {
    Status: 200,
    Message: "Sukses",
    Data: {
      AreaId: 1,
      Detail: [
        {
          Ranking: 1,
          Area: "Jakarta",
          "LDRMandiri&OnlineGenba": {
            ParamenterPejuangId: 1,
            ValueName: "LDR Mandiri & Online Genba",
            Poin: 20,
            Color: "#20310",
          },
          MIIP: {
            ParamenterPejuangId: 1,
            ValueName: "MIIP",
            Poin: 20,
          },
          "Re-ImplementasiInovationVideo": {
            ParamenterPejuangId: 1,
            valuename: "Re-Implementasi Inovation video",
            Poin: 0,
            Color: "#20310",
          },
          TotalProject: {
            ParamenterPejuangId: 1,
            valuename: "TotalProject",
            Poin: 20,
          },
        },
      ],
    },
  };

  return (
    <>
      <div className="mb-2 md:mb-20">
        <Header />
      </div>
      <div className="form-pekerjaan-container">
        <div className="form-pekerjaan-header">
          <div className="__title">
            <img src={Certif} alt="form-pekerjaan" />
            <div className="">
              {isAdmin ? "Validasi PEJUANG" : "Form Pengisian Pekerjaan"}
            </div>
          </div>
          <BackButton style="hidden md:flex" />
        </div>
        <InfoSection />
        {isAdmin ? <FormAdmin data={data} /> : <FormUser data={data} />}

        <div className="form-pekerjaan-footer">
          <div className="flex space-x-4">
            <button
              className="base-button cancel-button"
              onClick={() => setIsAdmin(true)}
            >
              Cancel
            </button>
            <button
              className="base-button submit-button"
              onClick={() => setIsAdmin(false)}
            >
              Submit
            </button>
          </div>
          <BackButton style="flex md:hidden" />
        </div>
      </div>
    </>
  );
};

export default FormPekerjaan;
