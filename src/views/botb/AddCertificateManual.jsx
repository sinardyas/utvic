import React, { useState } from "react";

import { useParams, useNavigate } from "react-router-dom";

import SelectInput, { transformToOptions } from "./_shared/SelectInput";

import Header from "../../components/Header";
import FileInput from "../../components/FileInput";
import BreadcrumbsSection from "../../components/BreadcrumbsSection/BreadcrumbsSection";

import { ReactComponent as CertificateIcon } from "../../assets/images/certificate-icon.svg";
import { ReactComponent as EyeIcon } from "../../assets/images/eye.svg";
import { ReactComponent as DocumentIcon } from "../../assets/images/document-icon.svg";
import { ReactComponent as CategoryIcon } from "../../assets/images/category.svg";
import { ReactComponent as Signalicon } from "../../assets/images/signal.svg";

const AddCertificate = () => {
  const navigate = useNavigate();
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
              title: "Add Certificate Grand Final",
            },
          ]}
        />
      </div>
      <div className="h-[50px]"></div>

      <div className="flex flex-col w-full md:w-8/12 gap-4 p-4">
        <div className="flex w-full gap-6">
          <CertificateIcon />
          <h1 className="text-lg md:text-2xl font-semibold">
            Form Add Certificate Grand Final
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="flex gap-6">
            <DocumentIcon />
            <div className="flex flex-col">
              <p className="font-semibold">Judul Inovasi</p>
              <p className="text-[#7D7D7D]">Re-Implementasi Inovation Video</p>
            </div>
          </div>
          <div className="flex gap-6">
            <CategoryIcon />
            <div className="flex flex-col">
              <p className="font-semibold">Kategori</p>
              <p className="text-[#7D7D7D]">LISA</p>
            </div>
          </div>
          <div className="flex gap-6">
            <Signalicon />
            <div className="flex flex-col">
              <p className="font-semibold">Peringkat</p>
              <p className="text-[#7D7D7D]">Pertingkat satu Grand Final</p>
            </div>
          </div>
        </div>

        <div className="h-[30px]"></div>

        <div className="flex flex-col md:flex-row w-full gap-2">
          <div className="flex flex-col w-full">
            <SelectInput
              labelText={"Pilih Tanda Tangan"}
              labelId={"tandaTangan"}
              placeholder={"Pilih tanda tangan"}
            >
              {transformToOptions(
                [{ CategoryName: "asd" }],
                "CategoryName",
                "CategoryName"
              )}
            </SelectInput>
          </div>
          <div className="flex flex-col w-full">
            <FileInput
              labelText={"Upload File Template Certificate"}
              labelId={"makalah-inovasi"}
              placeholder={"Upload file"}
              // onChange={handleChange}
              extensions={["pdf", "ppt"]}
              extensionInfo={"*File dapat berupa dokumen seperti"}
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
            <button className="rounded-lg w-[150px] text-center py-2 bg-[#FFCD00]">
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
