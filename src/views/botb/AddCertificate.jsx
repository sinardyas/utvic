import React, { useState, useEffect, useContext, useCallback } from "react";

import { useParams, useNavigate } from "react-router-dom";

import { api } from "../../boot/axios";
import { GlobalContext } from "../../store/global/Provider";

import Header from "../../components/Header";
import BreadcrumbsSection from "../../components/BreadcrumbsSection/BreadcrumbsSection";

import SelectInput, { transformToOptions } from "./_shared/SelectInput";
import FileInput from "../../components/FileInput";

import { ReactComponent as CertificateIcon } from "../../assets/images/certificate-icon.svg";
import { ReactComponent as EyeIcon } from "../../assets/images/eye.svg";

function useInputForm(defaultValue) {
  const [formValues, setFormValues] = useState(defaultValue || {});

  const handleChange = useCallback((e) => {
    const { id, value, type } = e.target;

    if (type === "file") {
      const { files } = e.target;
      const [file] = files;

      setFormValues((prevState) => ({
        ...prevState,
        [id]: file,
      }));

      return;
    }

    setFormValues((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  }, []);

  return [formValues, setFormValues, handleChange];
}

const AddCertificate = () => {
  const navigate = useNavigate();
  const params = useParams();

  const globalContext = useContext(GlobalContext);
  const [formValues, _, handleChange] = useInputForm({});
  const [getListSignatureRes, setGetListSignatureRes] = useState([
    {
      SignatureId: 2021,
      SignatureName: "Hardi",
      ImageUrl: "domain/upload/namafile",
    },
    {
      SignatureId: 2021,
      SignatureName: "Hardi",
      ImageUrl: "domain/upload/namafile",
    },
    {
      SignatureId: 2021,
      SignatureName: "Hardi",
      ImageUrl: "domain/upload/namafile",
    },
  ]);

  const [getMasterAreaRes, setGetMasterAreaRes] = useState([
    {
      Id: 1,
      Name: "Jakarta",
    },
    {
      Id: 2,
      Name: "Bandung",
    },
  ]);

  const [responses, setResponses] = useState([
    [
      {
        Id: 1,
        Name: "Jakarta",
      },
      {
        Id: 2,
        Name: "Bandung",
      },
    ],
    [
      {
        UserId: 1,
        UserName: "Farhan",
      },
      {
        UserId: 2,
        UserName: "Dika",
      },
    ],
  ]);

  const {
    api: { masterArea: masterAreaApi, addCertificate: addCertificateApi },
  } = window.processEnv;

  useEffect(() => {
    api({
      method: "POST",
      url: masterAreaApi,
      headers: {
        Auth: localStorage.getItem("Token"),
      },
      data: {
        Area: "Jakarta",
      },
    })
      .then((response) => {
        const { Status, Message, Data } = response.data;

        if (
          Status === 200 &&
          Data &&
          (Data.length || Object.keys(Data).length)
        ) {
          setGetMasterAreaRes(Data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const {
      api: { masterArea: masterAreaApi, masterUser: masterUserApi },
    } = window.processEnv;
    const { FetchGet } = globalContext;

    Promise.all([
      // FetchGet({
      //   url: masterAreaApi,
      //   errorText: "Error while fetch Master Area",
      // }),
      FetchGet({
        url: masterUserApi,
        errorText: "Error while fetch Master User",
      }),
    ]).then((responses) => {
      setResponses(responses);
    });
  }, [globalContext]);

  const postCertificate = () => {
    api({
      method: "POST",
      url: addCertificateApi,
      headers: {
        Auth: localStorage.getItem("Token"),
      },
      data: {
        InnovationId: params.innovationId,
        Peringkat: 1,
        UserId: formValues.namaPenerima,
        AreaId: formValues.area,
        Perstasi: formValues.prestasi,
        SignatureId: formValues.tandaTangan,
        Template:
          formValues &&
          formValues.makalahInovasi &&
          formValues.makalahInovasi.name,
      },
    })
      .then((response) => {
        const { Status } = response.data;

        if (Status === 200) {
          alert("Certificate added successfully!");
          navigate(-1);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const [areaRes, userRes] = responses;

  return (
    <div className="flex flex-col w-full items-center">
      <Header />
      <div className="hidden md:flex w-full bg-slate-200 px-52">
        <BreadcrumbsSection
          items={[
            {
              title: "Home",
              href: "/",
            },
            {
              title: "BOTB",
            },
            {
              title: "UTVIC",
              href: "/botb-main",
            },
            {
              title: "Add Certificate Manual",
            },
          ]}
        />
      </div>
      <div className="h-[50px]"></div>

      <div className="flex flex-col w-full md:w-8/12 gap-4 p-4">
        <div className="flex w-full gap-3">
          <CertificateIcon />
          <h1 className="text-2xl font-semibold">Form Add Certificate</h1>
        </div>
        <div className="flex flex-col md:flex-row w-full gap-2">
          <div className="flex flex-col w-full">
            <SelectInput
              labelText={"Nama penerima"}
              labelId={"namaPenerima"}
              placeholder={"Pilih nama penerima"}
              onChange={handleChange}
            >
              {transformToOptions(userRes, "UserId", "UserName")}
            </SelectInput>
          </div>
          <div className="flex flex-col w-full">
            <SelectInput
              labelText={"Area"}
              labelId={"area"}
              onChange={handleChange}
              placeholder={"Pilih area"}
            >
              {transformToOptions(areaRes, "Id", "Name")}
            </SelectInput>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <label>Prestasi</label>
          <textarea
            rows={6}
            placeholder="Masukkan prestasi kamu"
            id="prestasi"
            name="prestasi"
            onChange={handleChange}
            className="bg-slate-100 rounded-lg w-full p-4"
          ></textarea>
        </div>
        <div className="flex flex-col md:flex-row w-full gap-2">
          <div className="flex flex-col w-full">
            <SelectInput
              labelText={"Pilih Tanda Tangan"}
              labelId={"tandaTangan"}
              onChange={handleChange}
              placeholder={"Pilih tanda tangan"}
            >
              {transformToOptions(
                getListSignatureRes,
                "SignatureId",
                "SignatureName"
              )}
            </SelectInput>
          </div>
          <div className="flex flex-col w-full">
            <FileInput
              labelText={"Upload File Template Certificate"}
              labelId={"makalahInovasi"}
              placeholder={"Upload file"}
              onChange={handleChange}
              extensions={["pdf", "ppt"]}
              extensionInfo={"*File dapat berupa dokumen seperti"}
            />
          </div>
        </div>
        <div className="flex w-full gap-2 justify-between">
          <div className="flex gap-2">
            <button
              className="rounded-lg px-4 text-center py-2 text-white bg-[#D70C27]"
              onClick={() => navigate(-1)}
            >
              Cancel
            </button>
            <button
              className="rounded-lg w-[150px] text-center py-2 bg-[#FFCD00]"
              onClick={postCertificate}
            >
              Submit Certificate
            </button>
          </div>
          <button className="hidden md:block rounded-lg w-[150px] text-center text-white py-2 bg-[#008CFF]">
            Preview Certificate
          </button>
          <button className="block md:hidden rounded-lg px-2 text-center text-white bg-[#008CFF]">
            <EyeIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCertificate;
