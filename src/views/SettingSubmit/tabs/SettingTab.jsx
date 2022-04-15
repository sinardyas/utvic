import React from "react";
import SettingCard from "../components/Card";

const SettingTab = (props) => {
  const { activeTab } = props;

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

  const response2 = {
    Status: 200,
    Message: "Success",
    Data: [
      {
        TahapPejuangId: 1,
        NamaPejuang: "LISA",
        StartDate: "2021-12-23",
        EndDate: "2021-12-23",
      },
      {
        TahapPejuangId: 2,
        NamaPejuang: "WINA",
        StartDate: "2021-12-23",
        EndDate: "2021-12-23",
      },
    ],
  };

  return (
    <div className="space-y-3">
      {activeTab === false &&
        response.Data.map((item, index) => {
          return <SettingCard key={index} data={item} activeTab={activeTab} />;
        })}
      {activeTab === true &&
        response2.Data.map((item, index) => {
          return <SettingCard key={index} data={item} activeTab={activeTab} />;
        })}
    </div>
  );
};

export default SettingTab;
