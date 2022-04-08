import React from "react";
import download from "../../../assets/images/download.svg";
import "../../../styles/FormPekerjaan.scss";

const FormAdmin = (props) => {
  const [value, setValue] = React.useState({
    nama: "Sundus Ardian",
    download: "",
    link: "https://youtu.be/P4mZAVagQps",
    nilai: 0,
  });

  return (
    <div className="form-user-container">
      <div className="space-y-2 lg:flex-[0_1_45%] flex-[0_1_100%] mb-4">
        <label htmlFor="nama" className="font-bold">
          Nama
        </label>
        <div className="form-user-field">
          <input
            type="text"
            className="form-user-input w-full"
            name="nama"
            id="nama"
            value={value.nama}
            // defaultValue={password}
            // onChange={this.OnChangeInput}
          />
          {/* {formIsDirty && !passwordIsValid && (
          <small className="text-red-500 italic">This field is required</small>
        )} */}
        </div>
      </div>
      <div className="space-y-2 lg:flex-[0_1_45%] flex-[0_1_100%] mb-4">
        <label htmlFor="" className="font-bold">
          Download File
        </label>
        <div className="form-user-field">
          <label htmlFor="upload" className="flex space-x-4 items-center">
            <img src={download} alt="upload" className="h-6" />

            <p className="text-sm text-gray-400">
              {value.download
                ? value.download
                : "Tidak ada file untuk download"}
            </p>
          </label>

          {/* {formIsDirty && !passwordIsValid && (
          <small className="text-red-500 italic">This field is required</small>
        )} */}
        </div>
      </div>

      <div className="space-y-2 lg:flex-[0_1_8%] hidden lg:block mb-4 ">
        <label htmlFor="nilai" className="font-bold">
          Nilai
        </label>
        <div className="p-4 rounded-md mb-4 bg-[#FFCD00]">
          <input
            type="number"
            className="focus:outline-none w-full text-center bg-[#FFCD00] "
            name="nilai"
            id="nilai"
            value={50}
          />
        </div>
      </div>

      <div className="space-y-2 flex-[0_1_100%] mb-4">
        <label htmlFor="LinkFile" className="font-bold">
          Link File
        </label>
        <div className="form-user-field">
          <input
            type="text"
            className="form-user-input w-full"
            name="LinkFile"
            id="LinkFile"
            value={value.link}
            // defaultValue={password}
            // onChange={this.OnChangeInput}
          />
          {/* {formIsDirty && !passwordIsValid && (
          <small className="text-red-500 italic">This field is required</small>
        )} */}
        </div>
      </div>
      <div className="space-y-2 flex-[0_1_100%] mb-4">
        <label htmlFor="note" className="font-bold">
          Note
        </label>
        <div className="form-user-field">
          <input
            type="text"
            className="form-user-input w-full"
            name="note"
            id="note"
            placeholder="Masukan note kamu"
            value={value.note}
            // defaultValue={password}
            // onChange={this.OnChangeInput}
          />
          {/* {formIsDirty && !passwordIsValid && (
          <small className="text-red-500 italic">This field is required</small>
        )} */}
        </div>
      </div>
    </div>
  );
};

export default FormAdmin;
