import React from "react";
import upload from "../../../assets/images/upload.png";
import link from "../../../assets/images/link.png";

const FormUser = () => {
  const [value, setValue] = React.useState({
    nama: "Sundus Ardian",
    file: {},
    link: "",
  });

  console.log(value.file);

  return (
    <div className="form-user-container">
      <div className="space-y-2 lg:flex-[0_1_49%] flex-[0_1_100%] mb-4">
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
      <div className="space-y-2 lg:flex-[0_1_49%] flex-[0_1_100%] mb-4">
        <label htmlFor="upload" className="font-bold">
          Upload File
        </label>
        <div className="form-user-field">
          <label htmlFor="upload" className="flex space-x-4 items-center">
            <img src={upload} alt="upload" className="h-6" />

            <p className="text-sm text-gray-400">
              {value.file && value.file.name ? value.file?.name : "Upload File"}
            </p>
          </label>
          <input
            type="file"
            hidden
            className="form-user-input w-full"
            name="upload"
            id="upload"
            onChange={(e) => setValue({ ...value, file: e.target.files[0] })}
          />

          {/* {formIsDirty && !passwordIsValid && (
          <small className="text-red-500 italic">This field is required</small>
        )} */}
        </div>
        <small className="">
          *Upload file dalam format gambar ({" "}
          <small className="text-red-400">jpeg, png </small>)
        </small>
      </div>
      <div className="space-y-2 flex-[0_1_100%] mb-4">
        <label htmlFor="link" className="font-bold">
          Link
        </label>
        <div className="form-user-field flex space-x-4">
          <img src={link} alt="link" />
          <input
            type="text"
            className="form-user-input w-full"
            name="link"
            id="link"
            value={value.link}
            // defaultValue={password}
            placeholder="Link"
            onChange={(e) => setValue({ ...value, link: e.target.value })}
          />
          {/* {formIsDirty && !passwordIsValid && (
          <small className="text-red-500 italic">This field is required</small>
        )} */}
        </div>
      </div>
    </div>
  );
};

export default FormUser;
