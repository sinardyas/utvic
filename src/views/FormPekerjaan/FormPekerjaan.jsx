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

  return (
    <>
      <div className="mb-2 md:mb-20">
        <Header />
      </div>
      <div className="form-pekerjaan-container">
        <div className="form-pekerjaan-header">
          <div className="__title">
            <img src={Certif} alt="form-pekerjaan" />
            <p className="">
              {isAdmin ? "Validasi PEJUANG" : "Form Pengisian Pekerjaan"}
            </p>
          </div>
          <BackButton style="hidden md:flex" />
        </div>
        <InfoSection />
        {isAdmin ? <FormAdmin /> : <FormUser />}

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
