import React from "react";
import { useNavigate } from "react-router-dom";
import InovationModal from "./components/Modal";
import InovasiTab from "./tabs/InovasiTab";
import Header from "../../components/Header";

const SettingSubmitInovasi = () => {
  const response = {
    Status: 200,
    Message: "Success",
    Data: [
      {
        SettingInnovationId: 1,
        SettingInnovationName: "Inovasi Baru",
        StartDate: "2021-12-23",
        EndDate: "2021-12-23",
      },
      {
        SettingInnovationId: 2,
        SettingInnovationName: "Innovastra",
        StartDate: "2021-12-23",
        EndDate: "2021-12-23",
      },
    ],
  };

  const navigate = useNavigate();
  const [tab, setTab] = React.useState(false);
  const [modalInovation, setModalInovation] = React.useState(false);

  const activeTabStyle = "bg-[#FFCD00] rounded-lg";

  const onClickAddNew = () => {
    tab ? console.log("USER ADD NEW CLICKED") : setModalInovation(true);
  };

  return (
    <>
      <div className="mb-2 md:mb-20">
        <Header />
      </div>
      <div className="container space-y-8 py-4 lg:px-32">
        <div className="flex space-x-3 items-center justify-center">
          <div
            className={`${
              tab ? "" : activeTabStyle
            }  px-3 py-2 md:py-4 cursor-pointer text-sm md:text-lg text-center font-bold`}
            onClick={() => setTab(false)}
          >
            Setting Submit Inovasi
          </div>
          <div
            className={`${
              tab ? activeTabStyle : ""
            }  px-3 py-2 md:py-4 cursor-pointer text-sm md:text-lg text-center font-bold`}
            onClick={() => setTab(true)}
          >
            Setting Submit Pejuang
          </div>
        </div>
        <div className="">
          <div
            className="cursor-pointer w-28 h-10 border border-black flex items-center justify-center rounded-lg font-bold"
            onClick={onClickAddNew}
          >
            Add New
          </div>
        </div>
        {tab === false && <InovasiTab data={response.Data} />}
        {tab === true && <div />}
        <InovationModal
          open={modalInovation}
          handleClose={() => setModalInovation(false)}
          data={"INI MODAL"}
        />
      </div>
    </>
  );
};

export default SettingSubmitInovasi;
