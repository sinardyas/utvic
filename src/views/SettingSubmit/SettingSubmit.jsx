import React from "react";
import { useNavigate } from "react-router-dom";
import InovationModal from "./components/Modal";
import SettingTab from "./tabs/SettingTab";
import Header from "../../components/Header";

const SettingSubmitInovasi = () => {
  const navigate = useNavigate();
  const [tab, setTab] = React.useState(false);
  const [modalInovation, setModalInovation] = React.useState(false);

  const activeTabStyle = "bg-[#FFCD00] rounded-lg";

  const onClickAddNew = () => {
    setModalInovation(true);
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
        <SettingTab activeTab={tab} />
        <InovationModal
          open={modalInovation}
          activeTab={tab}
          handleClose={() => setModalInovation(false)}
          data={"INI MODAL"}
        />
      </div>
    </>
  );
};

export default SettingSubmitInovasi;
