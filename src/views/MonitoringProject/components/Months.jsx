import React from "react";
import EditIcon from "../../../assets/images/edit-setting.png";
import CalendarIcon from "../../../assets/images/calender.png";
import TrashIcon from "../../../assets/images/trash1.svg";

const ListMonths = (props) => {
  const { data } = props;
  return (
    <div className="px-[16px] sm:w-full lg:w-[496px]">
      <div className="grid gap-4 grid-cols-2">
        {data.map((item, idx) => (
          <div
            key={idx}
            className={`p-4 cursor-pointer bg-[${item.Color}] rounded-md`}
          >
            <img src={CalendarIcon} alt="icon-calendar" />
            <div className="flex items-center justify-between lg:mt-6 mt-8">
              <div>
                <p className="text-white text-[14px]">{item.MonthName}</p>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src={EditIcon}
                  alt="icon-edit"
                  className="h-5 cursor-pointer"
                />
                <img
                  src={TrashIcon}
                  alt="icon-trash"
                  className="h-5 cursor-pointer"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListMonths;
