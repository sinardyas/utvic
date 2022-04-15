import { Modal } from "@mui/material";
import React, { useState } from "react";
import CalendarIcon from "../../../assets/images/calender.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const InovationModal = (props) => {
  const { open, handleClose, activeTab } = props;

  const initialState = {
    StartDate: null,
    EndDate: null,
  };

  const [body, setBody] = useState(initialState);

  const onChangeName = (e) => {
    setBody({ ...body, [e.target.name]: e.target.value });
  };

  const endDateOnChange = (date) => {
    if (date.getTime() < body.StartDate.getTime()) {
      return alert("End date must be greater than start date");
    }

    setBody({ ...body, EndDate: date });
  };

  const checkIfObjectKeysAreEmpty = (obj) => {
    if (
      (obj.NamaPejuang !== undefined &&
        obj.NamaPejuang !== null &&
        obj.NamaPejuang !== "") ||
      (obj.SettingInnovationName !== undefined &&
        obj.SettingInnovationName !== null &&
        obj.SettingInnovationName !== "")
    ) {
      return Object.values(obj).every((x) => !!x);
    }
  };

  const handleSubmit = () => {
    if (!checkIfObjectKeysAreEmpty(body)) {
      return alert("Please fill all the fields");
    }
    console.log(body);
  };

  const handleCloseModal = () => {
    setBody(initialState);
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleCloseModal}>
      <div className="container md:max-w-2xl md:px-6 md:py-6 bg-white py-4 shadow-neutral-300 outline-none absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] rounded-lg">
        <div className="space-y-4 md:space-y-8">
          <div className="text-lg font-bold">{`Session ${
            activeTab ? "Pejuang" : "Submit Inovasi"
          }`}</div>

          <div className="flex flex-wrap md:justify-between space-y-3 px-2">
            <div className="flex flex-col w-full">
              <label htmlFor="tipe-inovasi" className="font-bold ">
                {activeTab ? "Nama Pejuang" : "Masukkan Tipe Inovasi"}
              </label>
              <div className="p-4 bg-gray-200 rounded-md">
                <input
                  type="text"
                  name={activeTab ? "NamaPejuang" : "SettingInnovationName"}
                  value={
                    activeTab ? body?.NamaPejuang : body?.SettingInnovationName
                  }
                  onChange={onChangeName}
                  id="tipe-inovasi"
                  placeholder="Masukkan Tipe "
                  className="focus:outline-none bg-inherit w-full placeholder:text-gray-600 text-sm"
                />
              </div>
            </div>

            <div className="flex flex-col w-full md:flex-[0_1_48%] flex-[0_1_100%]">
              <label htmlFor="start-date" className="font-bold">
                Mulai
              </label>
              <div className="p-4 bg-gray-200 rounded-md flex">
                <img src={CalendarIcon} alt="start" />
                <DatePicker
                  selected={body.StartDate}
                  onChange={(date) => setBody({ ...body, StartDate: date })}
                  className="ml-2 bg-inherit w-full text-gray-600 text-sm focus:outline-none cursor-pointer"
                  placeholderText="Pilih Periode"
                />
              </div>
            </div>

            <div className="flex flex-col w-full md:flex-[0_1_48%] flex-[0_1_100%]">
              <label htmlFor="end-date" className="font-bold">
                Selesai
              </label>
              <div className="p-4 bg-gray-200 rounded-md flex">
                <img src={CalendarIcon} alt="start" />
                <DatePicker
                  selected={body.EndDate}
                  onChange={(date) => endDateOnChange(date)}
                  className="ml-2 bg-inherit w-full text-gray-600 text-sm focus:outline-none cursor-pointer"
                  placeholderText="Pilih Periode"
                />
              </div>
            </div>
          </div>

          <div className="flex space-x-4">
            <div
              onClick={handleCloseModal}
              className="w-20 h-10 flex justify-center items-center rounded-md bg-[#D70C27] text-white cursor-pointer"
            >
              Cancel
            </div>
            <div
              onClick={handleSubmit}
              className="w-20 h-10 flex justify-center items-center rounded-md bg-[#FFCD00] text-black cursor-pointer"
            >
              Save
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default InovationModal;
