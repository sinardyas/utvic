import React from "react";
import "../../../styles/FormPekerjaan.scss";
import IconParameter from "../../../assets/images/parameter-icon.svg";
import IconPejuang from "../../../assets/images/tahap-pejuang.svg";
import IconInovasi from "../../../assets/images/area-inovasi.svg";

const InfoSection = () => {
  const [data, setData] = React.useState([
    {
      title: "Parameter",
      content: "",
      icon: IconParameter,
    },
    {
      title: "Tahap Pejuang",
      content: "",
      icon: IconPejuang,
    },
    {
      title: "Area Inovasi",
      content: "",
      icon: IconInovasi,
    },
  ]);

  return (
    <div className="info-section-container">
      {data.map((item, index) => {
        return (
          <div className="info-section" key={index}>
            <div className="info-section-title">
              <div className="info-section-icon">
                <img src={item.icon} alt="icon" />
              </div>
              <p>{item.title}</p>
            </div>
            <div className="info-section-content">
              <p>{item.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default InfoSection;
