import React from "react";
import Detail from "./components/Detail";
import ListMonths from "./components/Months";

const MonitoringProject = () => {
  const response = {
    Status: 200,
    Message: "Sukses",
    Data: {
      InovasiId: "2001",
      Pejuang: "LISA",
      Judul: "Inovasi Pembersihan Unit",
      Deskripsi: "Lorem ipsum",
      TotalProgres: 80,
      SDSI: true,
      Month: [
        {
          MonthName: "Januari",
          Color: "#4DCC8C",
          Progres: {
            persenProgres: 10,
            desc: "lorem",
          },
          Issue: "Lorem",
          NextAction: "Lorem",
        },
        {
          MonthName: "Februari",
          Color: "#4DCC8C",
          Progres: {
            persenProgres: 10,
            desc: "lorem",
          },
          Issue: "Lorem",
          NextAction: "Lorem",
        },
      ],
    },
  };

  return (
    <div className="w-full block h-full">
      <div className=" lg:flex sm:block justify-center sm:p-10 gap-2 h-full">
        <Detail data={response.Data} />
        <ListMonths data={response.Data.Month} />
      </div>
    </div>
  );
};

export default MonitoringProject;
