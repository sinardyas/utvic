import React from "react";
import download from "../../../assets/images/document-download.svg";

const MIIP_Card = (props) => {
  const array = new Array(8).fill("hey");

  const {} = props;
  const project =
    "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80";

  return (
    <div className="card-section-container">
      {array.map((item, index) => (
        <div className="card-section" key={index}>
          <div className="card-section-image">
            <img src={project} alt="project" />
          </div>
          <div className="card-section-content">
            <div className="card-section-content-top">
              <div className="flex items-center space-x-3">
                <p className="h-8 px-1 bg-[#D58D49]/20 text-[#D58D49] flex items-center rounded-md">
                  001234
                </p>
                <span className={`w-8 h-8 rounded-md bg-green-500`}></span>
              </div>
              <div className="cursor-pointer">
                <img src={download} alt="download" />
              </div>
            </div>

            <p className="text-xl font-bold">Lisa</p>

            <div className="flex justify-between items-end flex-wrap">
              <div className="flex-[0_1_100%] xl:flex-[0_1_50%]">
                <p className="text-black/60 ">inovasi pembersihan</p>
              </div>
              <div className="flex flex-[0_1_100%] xl:flex-[0_1_50%] justify-end">
                <p className="bg-blue-400 px-2 py-2 rounded-md text-sm text-white hover:bg-blue-600 cursor-pointer w-fit">
                  Laporan Makalah
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MIIP_Card;
