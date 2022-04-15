import moment from "moment";
import React from "react";
import CalendarIcon from "../../../assets/images/calender.png";
import EditIcon from "../../../assets/images/edit-setting.png";

const SettingInovasiCard = (props) => {
  const { data } = props;
  const onClickEdit = () => {
    console.log("edit clicked");
  };

  return (
    <div
      key={data.SettingInnovationId}
      className="shadow-lg rounded-md p-6 border-2 border-gray-200 border-l-[#FFCD00] hover:scale-[1.01] transition-all ease-in-out duration-75 flex justify-between items-center"
    >
      <div className="flex flex-col space-y-2">
        <div className="text-lg md:text-2xl">{data.SettingInnovationName}</div>
        <div className="flex space-x-10">
          <div className="flex ">
            <img src={CalendarIcon} alt="start-date" />
            <div className="ml-2 text-[#686E80]">
              {moment(data.StartDate).format("D MMM, YYYY")}
            </div>
          </div>

          <div className=" hidden md:flex">
            <img src={CalendarIcon} alt="start-date" />
            <div className="ml-2 text-[#686E80]">
              {moment(data.StartDate).format("D MMM, YYYY")}
            </div>
          </div>
        </div>
      </div>
      <div
        className="cursor-pointer bg-[#FFCD00] h-fit w-fit rounded-full"
        onClick={onClickEdit}
      >
        <img src={EditIcon} alt="edit" className="w-8 md:w-10" />
      </div>
    </div>
  );
};

export default SettingInovasiCard;
