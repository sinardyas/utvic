import React, { useState, useEffect, useContext, useCallback } from "react";

import { useParams, useNavigate } from "react-router-dom";

import SelectInput, { transformToOptions } from "./_shared/SelectInput";

import { api } from "../../boot/axios";
import { GlobalContext } from "../../store/global/Provider";

import Header from "../../components/Header";
import TextInput from "../../components/TextInput";
import BreadcrumbsSection from "../../components/BreadcrumbsSection/BreadcrumbsSection";

import { ReactComponent as CertificateIcon } from "../../assets/images/certificate-icon.svg";

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

  const globalContext = useContext(GlobalContext);

  const [formValues, _, handleChange] = useInputForm({});
  const [responses, setResponses] = useState([
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

  const {
    api: { masterArea: masterAreaApi, addWinner: addWinnerApi },
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
      FetchGet({
        url: masterUserApi,
        errorText: "Error while fetch Master User",
      }),
    ]).then((responses) => {
      setResponses(responses);
    });
  }, [globalContext]);

  const postWinner = () => {
    console.log(formValues);
    api({
      method: "POST",
      url: addWinnerApi,
      headers: {
        Auth: localStorage.getItem("Token"),
      },
      data: {
        UserId: formValues && formValues.namaPemenang,
        AreaId: formValues && formValues.area,
        Perstasi: formValues && formValues.prestasi,
        JudulInovasi: formValues && formValues.judulInovasi,
      },
    })
      .then((response) => {
        const { Status } = response.data;

        if (Status === 200) {
          alert("Winner added successfully!");
          navigate(-1);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const [userRes] = responses;

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
              title: "Add Winner",
            },
          ]}
        />
      </div>
      <div className="h-[50px]"></div>

      <div className="flex flex-col w-full md:w-8/12 gap-4 p-4">
        <div className="flex w-full gap-3">
          <CertificateIcon />
          <h1 className="text-2xl font-semibold">Form Add Winner</h1>
        </div>

        <div className="h-[20px]"></div>

        <div className="flex flex-col md:flex-row w-full gap-2">
          <div className="flex flex-col w-full">
            <SelectInput
              labelText={"Nama Pemenang"}
              labelId={"namaPemenang"}
              placeholder={"Pilih nama pemenang"}
              onChange={handleChange}
            >
              {transformToOptions(userRes, "UserId", "UserName")}
            </SelectInput>
          </div>
          <div className="flex flex-col w-full">
            <SelectInput
              labelText={"Area"}
              labelId={"area"}
              placeholder={"Pilih area"}
              onChange={handleChange}
            >
              {transformToOptions(getMasterAreaRes, "Id", "Name")}
            </SelectInput>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full gap-2">
          <div className="flex flex-col w-full">
            <TextInput
              labelText={"Judul Inovasi"}
              labelId={"judulInovasi"}
              onChange={handleChange}
              placeholder={"Masukkan judul inovasi"}
            />
          </div>
          <div className="flex flex-col w-full">
            <TextInput
              labelText={"Prestasi"}
              labelId={"prestasi"}
              onChange={handleChange}
              placeholder={"Masukkan prestasi"}
            />
          </div>
        </div>

        <div className="h-[20px]"></div>

        <div className="flex w-full gap-2 justify-between">
          <div className="flex gap-2">
            <button
              className="rounded-lg px-4 text-center py-2 text-white bg-[#D70C27]"
              onClick={() => navigate(-1)}
            >
              Cancel
            </button>
            <button
              className="rounded-lg px-4 text-center py-2 bg-[#FFCD00]"
              onClick={postWinner}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCertificate;
