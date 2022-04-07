import React, { useState } from "react";

import Header from "../../components/Header";

import { ReactComponent as ItalicIcon } from "../../assets/images/italic_icon.svg";

const TabMenu = ({ menuList, menuActive, onTabClick }) => {
  const baseClass = "p-4 font-semibold cursor-pointer";
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

const SideMenu = ({ activeMenu, setActiveMenu }) => {
  return (
    <ul className="shadow-md">
      {[
        "Settings Session dan Quota Penjurian",
        "Settings Group Juri",
        "Penjurian Lokal",
        "Penjurian Nasional",
        "Penjurian Grand Final",
      ].map((item, id) => (
        <li
          key={id}
          className={activeMenu === id ? "p-4 bg-[#FFCD00]" : "p-4"}
          onClick={() => setActiveMenu(id)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

const ListInnovationDescription = () => {
  return [1, 2, 3, 4].map((item, id) => (
    <div
      key={id}
      className="flex justify-between items-center gap-4 w-full border-[1px] border-[#ccc] border-l-2 border-l-[#FFCD00] p-2 px-4"
    >
      <div className="flex flex-col items-center gap-4 border-r-[1px] border-r-[#ccc] pr-8 w-3/12">
        <div className="flex gap-3 items-center justify-start w-10/12">
          <div className="text-black bg-[#FFCD00] p-4 rounded-lg w-[60px]">
            25%
          </div>
          <p className="text-sm w-[40px]">Winning Concept</p>
        </div>
        <textarea
          rows={3}
          className="bg-slate-100 rounded-lg w-10/12"
        ></textarea>
      </div>
      <div className="flex items-center gap-2">
        <ItalicIcon className="w-[200px]" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </p>
      </div>
    </div>
  ));
};

const ListInnovationInput = () => {
  return [1, 2, 3, 4].map((item, id) => (
    <div
      key={id}
      className="flex justify-between items-center gap-4 w-full border-[1px] border-[#ccc] border-l-2 border-l-[#FFCD00] p-2 px-4"
    >
      <div className="flex flex-col items-center gap-4 w-3/12">
        <div className="text-black bg-[#FFCD00] p-4 rounded-lg w-[60px]">
          25%
        </div>
        <p className="text-sm w-[40px]">Winning Concept</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex gap-4 items-center">
          <p className="w-6/12">
            1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <input className="bg-gray-300 rounded-lg w-6/12 h-[50px]"></input>
        </div>
        <div className="flex gap-4 items-center">
          <p className="w-6/12">
            2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <input className="bg-gray-300 rounded-lg w-6/12 h-[50px]"></input>
        </div>
      </div>
    </div>
  ));
};

const TotalScore = () => {
  return (
    <div className="flex flex-col items-start gap-4 w-full border-[1px] border-[#ccc] border-l-2 border-l-[#FFCD00] py-4 px-8">
      <p>Total Score</p>
      <textarea rows={3} className="bg-slate-100 rounded-lg w-full"></textarea>
    </div>
  );
};

const Penilaian = () => {
  const [currentActiveTab, setActiveTab] = useState("Penilaian");
  const [currentActiveMenu, setActiveMenu] = useState(2);
  const [isDetailActive, setDetailActive] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [openChangeRank, setOpenChangeRank] = React.useState(false);
  const [openChangeRankBulk, setOpenChangeRankBulk] = React.useState(false);

  const handleOpenFeedback = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenChangeRank = () => setOpenChangeRank(true);
  const handleCloseChangeRank = () => setOpenChangeRank(false);
  const handleOpenChangeRankBulk = () => setOpenChangeRankBulk(true);
  const handleCloseChangeRankBulk = () => setOpenChangeRankBulk(false);

  const onTabClick = (menuSelected) => {
    setActiveTab(menuSelected);
  };

  return (
    <div className="flex flex-col w-full items-center">
      <Header />
      <div className="h-[100px]"></div>

      <TabMenu
        menuList={["Profil Inovasi", "Analisis", "Ide", "Result", "Penilaian"]}
        menuActive={currentActiveTab}
        onTabClick={onTabClick}
      />

      <div className="h-[40px]"></div>

      <div className="flex w-full md:w-10/12 gap-4">
        <div className="hidden md:flex flex-col w-3/12">
          <SideMenu
            activeMenu={currentActiveMenu}
            setActiveMenu={setActiveMenu}
          />
        </div>
        <div className="flex flex-col w-full md:w-9/12 p-2 gap-2">
          <div className="flex flex-col gap-4 border-[1px] border-[#ccc] w-full p-4 rounded-lg">
            <div className="flex justify-between">
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-xl">LISA</p>
                <p className="text-lg">People & Culture</p>
                <div className="flex gap-2 items-center">
                  <span className="p-2 gap-4 text-[#D58D49] bg-[#D58D49]/[.20] rounded-lg max-w-[80px]">
                    110000
                  </span>
                  <p className="text-gray-400">
                    Inovasi Pembersihan Unit | Jakarta
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 justify-between items-end">
                <p>&nbsp;</p>
                <p className="font-semibold text-2xl">Ibnu Prasetyo</p>
                <p className="text-md text-gray-400">
                  *nilai berupa raneg 1-5 dan dapat berupa Decimal
                </p>
              </div>
            </div>
            <hr />
            {currentActiveMenu === 2 && <ListInnovationDescription />}
            {currentActiveMenu === 4 && <ListInnovationInput />}
            <TotalScore />
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Penilaian;
