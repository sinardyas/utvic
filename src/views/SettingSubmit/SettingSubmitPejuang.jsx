import React, { useState } from "react";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SelectUnstyled, {
  selectUnstyledClasses,
} from "@mui/base/SelectUnstyled";

import Header from "../../components/Header";
import BreadcrumbsSection from "../../components/BreadcrumbsSection/BreadcrumbsSection";
import Button from "../../components/Button";
import DatePickers from "../../components/DatePickers";

import SelectInput, { transformToOptions } from "./_shared/SelectInput";

import { ReactComponent as CertificateIcon } from "../../assets/images/certificate-icon.svg";
import { ReactComponent as CertificateIcon2 } from "../../assets/images/certificate-icon.svg";
import { ReactComponent as DocDownloadIcon } from "../../assets/images/document-download.svg";
import { ReactComponent as EditIcon } from "../../assets/images/edit.svg";
import Calendar from "../../assets/images/calender.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60vw",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  borderRadius: 4,
};

const TabMenu = ({ menuList, menuActive, onTabClick }) => {
  const baseClass = "p-3 font-semibold cursor-pointer";
  const activeClass = "bg-[#FFCD00] rounded-xl " + baseClass;

  return (
    <div className="flex gap-4 md:gap-16">
      {menuList.map((item, id) => (
        <div
          key={id}
          className={menuActive === item ? activeClass : baseClass}
          onClick={() => onTabClick(item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

const ListInnovation = ({ innovationData, handleOpenAddCertificate }) => {
  return innovationData.map((item, id) => (
    <>
      <div
        key={id}
        className="flex justify-between items-center gap-4 w-full border-[1px] shadow-lg py-6 px-4"
      >
        <div className="flex items-center gap-4">
          <div className="flex flex-col gap-3">
            <div className="flex justify-between">
              <p className="font-semibold">{item}</p>
              <div className="w-[20px] h-[20px] bg-[#50BD88] flex md:hidden items-center justify-center rounded-full"></div>
            </div>
            <p className="flex gap-3 text-gray-400">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-calendar"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </span>
              <span>19 Jan, 2022</span>
            </p>
            <div className="flex md:hidden items-end gap-4">
              <CertificateIcon2
                className="cursor-pointer"
                onClick={() => handleOpenAddCertificate()}
              />
              <DocDownloadIcon
                className="flex cursor-pointer"
                onClick={() => console.log("Download Cliked!")}
              />
            </div>
          </div>
        </div>
        <div className="hidden md:flex items-end gap-4">
          <div className="hidden w-[50px] h-[50px] bg-[#FFCD00] md:flex items-center justify-center rounded-full">
            <EditIcon />
          </div>
        </div>
      </div>
    </>
  ));
};

const SelectDropdown = ({ placeholder }) => {
  return (
    <div className="w-full">
      <FormControl
        sx={{
          m: 0,
          width: "100%",
          "&.Mui-focused": {
            outline: "none",
          },
        }}
      >
        <SelectUnstyled
          multiple
          displayEmpty
          value={[]}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>{placeholder}</em>;
            }

            return selected.join(", ");
          }}
        >
          <MenuItem disabled value="">
            <em>Placeholder</em>
          </MenuItem>
          {[1, 2, 3, 4].map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </SelectUnstyled>
      </FormControl>
    </div>
  );
};

const ModalAddNew = ({ handleClose, open }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <h1 className="text-2xl font-bold">Session Pejuang</h1>
        <div className="flex flex-col my-4">
          <SelectInput
            labelText={"Nama Pejuang"}
            labelId={"namaPejuang"}
            placeholder={"Pilih tipe"}
          >
            {transformToOptions(
              [
                { Id: 1, Name: 1 },
                { Id: 2, Name: 2 },
                { Id: 3, Name: 3 },
                { Id: 4, Name: 4 },
              ],
              "Id",
              "Name"
            )}
          </SelectInput>
        </div>
        <div className="flex gap-4 my-4">
          <div className="w-full">
            <label className="font-semibold">Mulai</label>
            <div class="form-group has-search">
              <span class="form-control-feedback custom pt-5 pl-3">
                <img src={Calendar} alt=".." />
              </span>
              <DatePickers />
            </div>
          </div>
          <div className="w-full">
            <label className="font-semibold">Selesai</label>
            <div class="form-group has-search">
              <span class="form-control-feedback custom pt-5 pl-3">
                <img src={Calendar} alt=".." />
              </span>
              <DatePickers />
            </div>
          </div>
        </div>
        <div className="flex mt-3 gap-3">
          <button
            className="px-4 py-3 bg-red-500 text-white rounded-lg"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button className="px-4 py-3 bg-[#FFCD00] text-black rounded-lg">
            Save
          </button>
        </div>
      </Box>
    </Modal>
  );
};

const Utvic = () => {
  const [currentActiveTab, setActiveTab] = useState("Setting Submit Pejuang");
  const [openAddNew, setOpenAddNew] = React.useState(false);

  const onTabClick = (menuSelected) => {
    setActiveTab(menuSelected);
  };

  const handleOpenAddNew = () => setOpenAddNew(true);
  const handleCloseAddNew = () => setOpenAddNew(false);

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
              title: currentActiveTab,
            },
          ]}
        />
      </div>
      <div className="h-[50px]"></div>

      <TabMenu
        menuList={["Setting Submit Inovasi", "Setting Submit Pejuang"]}
        menuActive={currentActiveTab}
        onTabClick={onTabClick}
      />

      <div className="h-[40px]"></div>

      <div className="flex w-full md:w-8/12 gap-4 p-4">
        {currentActiveTab === "Setting Submit Inovasi" && (
          <div className="flex flex-col w-full gap-4"></div>
        )}

        {currentActiveTab === "Setting Submit Pejuang" && (
          <>
            <div className="flex flex-col w-full gap-3">
              <div>
                <Button
                  className="border-[1px] border-black px-4"
                  backgroundCss="bg-white"
                  colorCss="text-black"
                  onClick={() => handleOpenAddNew()}
                >
                  Add New
                </Button>
              </div>
              <ListInnovation innovationData={["WINA", "WITA", "RITA"]} />
            </div>
          </>
        )}
      </div>

      <ModalAddNew open={openAddNew} handleClose={handleCloseAddNew} />
    </div>
  );
};

export default Utvic;
