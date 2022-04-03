import React from "react";
import InfoIcon from "../../assets/images/circle-info.svg";
import Certif from "../../assets/images/menu/certif.png";
import Header from "../../components/Header";
import "../../styles/DetailPenilaianPejuang.scss";

const DetailPenilaianPejuang = () => {
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

  const data = response.Data.Detail[0];
  const colorCondition = (value) => value > 0;

  const ButtonBack = ({ style }) => (
    <div className={`${style} button-back`}>Kembali</div>
  );

  return (
    <div className="">
      <div className="mb-2 md:mb-20">
        <Header />
      </div>
      <div className="container-detail-penilaian-pejuang">
        <div className="header-detail-penilaian">
          <div className="title-page-container">
            <img src={Certif} alt="pejuang" className="w-10 " />
            <p className="text-xl md:text-3xl font-bold">
              Detail Penilaian Pejuang
            </p>
          </div>

          <ButtonBack style="lg:flex hidden" />
        </div>
        <div className="flex flex-col md:px-10 lg:flex-row">
          <div className="py-2 md:flex-[3] flex flex-wrap justify-center items-center">
            <div className={`card justify-center`}>
              <p className="card-title">Ranking</p>
              <p className="card-content">{data.Ranking}</p>
            </div>

            <div className={`card justify-center`}>
              <p className="card-title ">Area</p>
              <p className="card-content">{data.Area}</p>
            </div>

            <div className={`card justify-between`}>
              <div className="flex justify-between items-center">
                <img src={InfoIcon} alt="info" className="w-6 h-6" />
                <div
                  className={`h-4 w-4 ${
                    colorCondition(data["LDRMandiri&OnlineGenba"].Poin)
                      ? "bg-green-500"
                      : "bg-red-500"
                  } rounded-full`}
                ></div>
              </div>
              <div className="flex justify-between items-end">
                <div className="">
                  <p className="card-title ">
                    {data["LDRMandiri&OnlineGenba"].ValueName}
                  </p>
                  <p>
                    {data["LDRMandiri&OnlineGenba"].Poin
                      ? data["LDRMandiri&OnlineGenba"].Poin
                      : "-"}
                  </p>
                </div>
                <div className="hidden md:block">edit</div>
              </div>
            </div>

            <div className={`card justify-center`}>
              <p className="card-title ">MIIP</p>
              <p className="card-content">{data.MIIP.Poin}</p>
            </div>

            <div className={`card justify-between`}>
              <div className="flex justify-between items-center">
                <img src={InfoIcon} alt="info" className="w-6 h-6" />
                <div
                  className={`h-4 w-4 ${
                    colorCondition(data["Re-ImplementasiInovationVideo"].Poin)
                      ? "bg-green-500"
                      : "bg-red-500"
                  } rounded-full`}
                ></div>
              </div>
              <div className="flex justify-between items-end">
                <div className="">
                  <p className="card-title ">
                    {data["Re-ImplementasiInovationVideo"].valuename}
                  </p>
                  <p>
                    {data["Re-ImplementasiInovationVideo"].Poin
                      ? data["Re-ImplementasiInovationVideo"].Poin
                      : "-"}
                  </p>
                </div>
                <div className="hidden md:block">edit</div>
              </div>
            </div>

            <div className={`card justify-center`}>
              <p className="card-title ">Total Project</p>
              <p className="card-content">{data.TotalProject.Poin}</p>
            </div>
          </div>
          <div className="px-3 py-4  md:flex-1  flex items-center justify-between ">
            <div className="flex-[0_1_48%] md:flex-[0_1_30%] sm:ml-1 md:ml-2  lg:flex-[0_1_100%] h-32 lg:h-full p-4 rounded-md bg-[#FFCD00] flex flex-col justify-center">
              <div className="mx-auto">
                <p className="text-xl font-bold lg:text-3xl opacity-70">
                  Total Score
                </p>
                <p className="text-6xl font-bold lg:text-8xl opacity-75">
                  95.5
                </p>
              </div>
            </div>
            <ButtonBack style="lg:hidden flex h-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPenilaianPejuang;
