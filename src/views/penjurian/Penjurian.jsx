import React, { useState } from "react";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import Header from "../../components/Header";
import { ReactComponent as PlayCircle } from "../../assets/images/play-circle.svg";
import { ReactComponent as Docking } from "../../assets/images/docking.svg";
import { ReactComponent as MessageIcon } from "../../assets/images/message.svg";
import { ReactComponent as RefreshIcon } from "../../assets/images/refresh-square-2.svg";
import { ReactComponent as TrashIcon } from "../../assets/images/trash.svg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  borderRadius: 4,
};

const DockingStatus = ({ dateTime }) => (
  <>
    <PlayCircle />
    <div className="flex flex-col">
      <p>Last Docking</p>
      <p>{dateTime}</p>
    </div>
  </>
);

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
        <Select
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
        </Select>
      </FormControl>
    </div>
  );
};

const ModalFeedback = ({ handleClose, open }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <h1 className="text-2xl font-bold">Feedback Inovasi</h1>
        <div className="flex justify-between mt-3">
          <div className="flex flex-col gap-2 w-6/12">
            <p>ID Makalah</p>
            <span className="p-2 text-[#D58D49] bg-[#D58D49]/[.20] rounded-lg max-w-[80px]">
              110000
            </span>
          </div>
          <div className="flex flex-col gap-2 w-6/12">
            <p>Area</p>
            <span className="p-2 bg-[#FFCD00]/[.20] rounded-lg max-w-[80px] text-black">
              Jakarta
            </span>
          </div>
        </div>
        <div className="flex justify-between mt-3">
          <div className="flex flex-col gap-2 w-full">
            <p>Judul</p>
            <p>Inovasi Pembersihan Udara</p>
          </div>
        </div>
        <div className="flex justify-between mt-3">
          <div className="flex flex-col gap-2 w-full">
            <p className="font-bold">Feedback</p>
            <textarea
              rows="4"
              className="bg-[#7D7D7D]/30 rounded-lg"
            ></textarea>
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

const ModalChangeRank = ({ handleClose, open }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <h1 className="text-2xl font-bold">Perubahan Peringkat</h1>
        <div className="flex justify-between mt-3">
          <div className="flex flex-col gap-2 w-6/12">
            <p>ID Makalah</p>
            <span className="p-2 text-[#D58D49] bg-[#D58D49]/[.20] rounded-lg max-w-[80px]">
              110000
            </span>
          </div>
          <div className="flex flex-col gap-2 w-6/12">
            <p>Area</p>
            <span className="p-2 bg-[#FFCD00]/[.20] rounded-lg max-w-[80px] text-black">
              Jakarta
            </span>
          </div>
        </div>
        <div className="flex justify-between mt-3">
          <div className="flex flex-col w-full">
            <p className="font-bold">Makalah yang ingin diubah peringkatnya</p>
            <SelectDropdown />
          </div>
        </div>
        <div className="flex justify-between mt-3">
          <div className="flex flex-col w-full">
            <p className="font-bold">Tentukan peringkat makalah</p>
            <SelectDropdown />
          </div>
        </div>
        <div className="flex justify-between mt-3">
          <div className="flex flex-col gap-2 w-full">
            <p className="font-bold">Notes</p>
            <textarea
              rows="4"
              className="bg-[#7D7D7D]/30 rounded-lg"
            ></textarea>
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

const ModalChangeRankBulk = ({ handleClose, open }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <h1 className="text-2xl font-bold">Perubahan Peringkat</h1>
        <table className="rounded-xl my-4">
          <thead>
            <tr className="bg-black text-white">
              <th className="p-4 rounded-tl-md">Peringkat</th>
              <th className="p-4">ID Makalah</th>
              <th className="p-4">Judul Inovasi</th>
              <th className="p-4 rounded-tr-md">Ubah Peringkat</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4].map((item, id) => (
              <tr>
                <td className="p-4 text-center">The Sliding Mr. Bones</td>
                <td className="p-4 text-center">Malcolm Lockyer</td>
                <td className="p-4 text-center">1961</td>
                <td className="p-4 text-center">
                  <SelectDropdown placeholder={"Pilih Peringkat"} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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

const ListInnovation = ({ innovationData, onDetailClick }) => {
  return innovationData.map((item, id) => (
    <div
      key={id}
      className="flex justify-between items-center gap-4 w-full border-[1px] border-[#ccc] border-l-2 border-l-[#FFCD00] p-2 px-4"
    >
      <div className="flex items-center gap-4">
        <img
          src="https://api.lorem.space/image/house?w=80&h=90&hash=500B67FB"
          className="rounded-xl"
          alt=""
        />
        <div className="flex flex-col">
          <span className="p-2 text-[#D58D49] bg-[#D58D49]/[.20] rounded-lg max-w-[80px]">
            110000
          </span>
          <p className="font-semibold">Farhan Salim</p>
          <p className="text-gray-400">Inovasi Pembersihan Unit</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-[50px] h-[50px] bg-[#D70C27] flex items-center justify-center rounded-xl">
          <p class="text-white">10</p>
        </div>
      </div>
    </div>
  ));
};

const ListDocking = ({ dockingData, onDetailClick }) => {
  return dockingData.map((item, id) => (
    <div
      key={id}
      className="flex justify-between items-center gap-4 w-full border-[1px] border-[#FCFCFC] border-l-2 border-l-[#FFCD00] p-2"
    >
      <div className="flex items-center gap-4">
        <img
          src="https://api.lorem.space/image/house?w=80&h=90&hash=500B67FB"
          className="rounded-xl"
          alt=""
        />
        <p className="font-semibold">Farhan Salim</p>
      </div>
      <div className="flex items-center gap-2">
        <Docking onClick={() => onDetailClick(true)} />
        <p>6 / 15</p>
      </div>
    </div>
  ));
};

const ListInnovationMarkedUnMarked = ({
  onBackClick,
  markedInnovation,
  unmarkedInnovation,
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center">
        <p className="font-semibold">List inovasi yang sudah dinilai</p>
        <button
          className="border-[1px] border-black px-4 py-2 rounded-lg"
          onClick={() => onBackClick(false)}
        >
          Back
        </button>
      </div>
      <table className="rounded-xl my-4">
        <thead>
          <tr className="bg-black text-white">
            <th className="p-4 rounded-tl-xl">No</th>
            <th className="p-4">ID Makalah</th>
            <th className="p-4 rounded-tr-xl">Judul Inovasi</th>
          </tr>
        </thead>
        <tbody>
          {markedInnovation.map((item, id) => (
            <tr>
              <td className="p-4 text-center">The Sliding Mr. Bones</td>
              <td className="p-4 text-center">Malcolm Lockyer</td>
              <td className="p-4 text-center">1961</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="h-[50px]"></div>
      <p className="font-semibold">List inovasi yang belum dinilai</p>
      <table className="rounded-xl my-4">
        <thead>
          <tr className="bg-black text-white">
            <th className="p-4 rounded-tl-xl">No</th>
            <th className="p-4">ID Makalah</th>
            <th className="p-4 rounded-tr-xl">Judul Inovasi</th>
          </tr>
        </thead>
        <tbody>
          {unmarkedInnovation.map((item, id) => (
            <tr>
              <td className="p-4 text-center">The Sliding Mr. Bones</td>
              <td className="p-4 text-center">Malcolm Lockyer</td>
              <td className="p-4 text-center">1961</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const ListHasilPenilaian = ({
  hasilPenilaianData,
  onDetailClick,
  handleOpenFeedback,
  handleOpenChangeRank,
}) => {
  return hasilPenilaianData.map((item, id) => (
    <div key={id} className="flex">
      <div className="flex flex-col gap-4 w-full shadow-md p-4 rounded-xl">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-2xl">Peringkat {id + 1}</h1>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <span className="p-2 text-[#D58D49] bg-[#D58D49]/[.20] rounded-lg">
                110000
              </span>
              <p className="text-gray-400">
                Inovasi Pembersihan Unit | Jakarta
              </p>
            </div>
          </div>
          <div className="flex gap-2 md:gap-4">
            <span className="bg-[#FFCD00] p-4 rounded-xl h-[50px] w-[50px]">
              20
            </span>
            <div
              className="flex flex-col items-center cursor-pointer gap-2"
              onClick={handleOpenChangeRank}
            >
              <MessageIcon />
              <p className="break-all text-center font-semibold text-xs md:text-lg">
                Ubah <br />
                Peringkat
              </p>
            </div>
            <div
              className="flex flex-col items-center cursor-pointer gap-3"
              onClick={handleOpenFeedback}
            >
              <RefreshIcon />
              <p className="font-semibold text-xs md:text-lg">Feedback</p>
            </div>
          </div>
        </div>

        <p className="font-semibold text-lg">Notes</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo{" "}
        </p>
        <p className="font-semibold text-lg">Feedback</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo{" "}
        </p>

        <div className="flex md:hidden w-full justify-center gap-2">
          <div className="w-[50px] h-[50px] bg-[#008CFF] rounded-xl"></div>
          <div className="w-[50px] h-[50px] bg-[#008CFF] rounded-xl"></div>
        </div>
      </div>
      <div className="hidden md:flex flex-col justify-center gap-3 ml-3">
        <div className="w-[50px] h-[50px] bg-[#008CFF] rounded-xl"></div>
        <div className="w-[50px] h-[50px] bg-[#008CFF] rounded-xl"></div>
      </div>
    </div>
  ));
};

const Penjurian = () => {
  const [currentActiveTab, setActiveTab] = useState("Penilaian");
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
        menuList={["Penilaian", "Docking", "Hasil Penilaian"]}
        menuActive={currentActiveTab}
        onTabClick={onTabClick}
      />

      <div className="h-[40px]"></div>

      {["Penilaian", "Hasil Penilaian"].includes(currentActiveTab) && (
        <div className="flex gap-4 w-full md:w-10/12 justify-center">
          <div className="flex w-6/12 flex-col">
            <p class="font-semibold">Pilih Filter</p>
            <SelectDropdown />
          </div>
          <div className="flex w-6/12 flex-col">
            <p class="font-semibold">Kategori</p>
            <SelectDropdown />
          </div>
          <div className="flex items-end pb-5 pl-4">
            <button>
              <TrashIcon />
            </button>
          </div>
        </div>
      )}

      <div className="h-[20px]"></div>

      {["Hasil Penilaian"].includes(currentActiveTab) && (
        <div className="flex gap-4 w-full md:w-9/12 justify-end">
          <button
            className="border-[1px] border-black px-4 py-3 rounded-md"
            onClick={handleOpenChangeRankBulk}
          >
            Ubah Peringkat
          </button>
        </div>
      )}

      <div className="flex w-full md:w-10/12 gap-4">
        <div className="hidden md:flex flex-col w-3/12">
          <ul className="shadow-md">
            <li className="p-4">Settings Session dan Quota Penjurian</li>
            <li className="p-4">Settings Group Juri</li>
            <li className="p-4 bg-[#FFCD00]">Penjurian Lokal</li>
            <li className="p-4">Penjurian Nasional</li>
            <li className="p-4">Penjurian Grand Final</li>
          </ul>
        </div>
        {currentActiveTab === "Penilaian" && (
          <div className="flex flex-col w-full md:w-9/12 p-2 gap-2">
            <p>List Inovasi</p>
            <ListInnovation
              innovationData={[1, 2, 3]}
              onDetailClick={setDetailActive}
            />
          </div>
        )}

        {currentActiveTab === "Docking" && (
          <div className="flex flex-col w-full md:w-9/12 p-2">
            <div className="flex items-center gap-3">
              {!isDetailActive && (
                <DockingStatus dateTime={"03/03/2022 12:12:12"} />
              )}
            </div>
            <div className="flex flex-col gap-2">
              {!isDetailActive && (
                <ListDocking
                  dockingData={[1, 2, 3]}
                  onDetailClick={setDetailActive}
                />
              )}

              {isDetailActive && (
                <ListInnovationMarkedUnMarked
                  onBackClick={setDetailActive}
                  markedInnovation={[1, 2, 3, 4]}
                  unmarkedInnovation={[1, 2, 3]}
                />
              )}
            </div>
          </div>
        )}

        {currentActiveTab === "Hasil Penilaian" && (
          <div className="flex flex-col w-full md:w-9/12 p-2">
            <ListHasilPenilaian
              hasilPenilaianData={[1, 2, 3]}
              onDetailClick={setDetailActive}
              handleOpenFeedback={handleOpenFeedback}
              handleOpenChangeRank={handleOpenChangeRank}
            />
          </div>
        )}

        <ModalFeedback handleClose={handleClose} open={open} />
        <ModalChangeRank
          handleClose={handleCloseChangeRank}
          open={openChangeRank}
        />
        <ModalChangeRankBulk
          open={openChangeRankBulk}
          handleClose={handleCloseChangeRankBulk}
        />
      </div>
    </div>
  );
};

export default Penjurian;
