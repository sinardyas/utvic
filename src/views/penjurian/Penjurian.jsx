import React, { useContext, useEffect, useState, useCallback } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { api } from "../../boot/axios";

import { GlobalContext } from "../../store/global/Provider";

import SelectInput, { transformToOptions } from "./_shared/SelectInput";

import Header from "../../components/Header";
import BreadcrumbsSection from "../../components/BreadcrumbsSection/BreadcrumbsSection";
import PageSpinner from "../../components/Spinner-1";

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
  width: "60vw",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  borderRadius: 4,
};

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

const ModalFeedback = ({ handleClose, handleSave, open, data }) => {
  const [formValues, _, handleChange] = useInputForm({
    Feedback: (data && data.Feedback) || "",
  });

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
            <span className="p-2 text-[#D58D49] bg-[#D58D49]/[.20] rounded-lg max-w-[80px] text-center">
              {data && data.InovationId}
            </span>
          </div>
          <div className="flex flex-col gap-2 w-6/12">
            <p>Area</p>
            <span className="p-2 bg-[#FFCD00]/[.20] rounded-lg max-w-[80px] text-black text-center">
              {data && data.Area}
            </span>
          </div>
        </div>
        <div className="flex justify-between mt-3">
          <div className="flex flex-col gap-2 w-full">
            <p>Judul</p>
            <p>{data && data.InnovationTitle}</p>
          </div>
        </div>
        <div className="flex justify-between mt-3">
          <div className="flex flex-col gap-2 w-full">
            <p className="font-bold">Feedback</p>
            <textarea
              rows="4"
              name="Feedback"
              id="Feedback"
              value={formValues.feedback}
              onChange={handleChange}
              className="bg-[#7D7D7D]/30 rounded-lg p-4"
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
          <button
            className="px-4 py-3 bg-[#FFCD00] text-black rounded-lg"
            onClick={() =>
              handleSave({
                InnovationId: data.InovationId,
                ...formValues,
              })
            }
          >
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
            <SelectInput
              labelText={"Makalah yang ingin diubah peringkatnya"}
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
        </div>
        <div className="flex justify-between mt-3">
          <div className="flex flex-col w-full">
            <SelectInput
              labelText={"Tentukan peringkat makalah"}
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
        <table className="rounded-xl my-4 w-full">
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
                  <SelectInput
                    labelId={"peringkat"}
                    placeholder={"Pilih peringkat"}
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
          src={
            (item && item.imageUrl) ||
            "https://api.lorem.space/image/house?w=80&h=90&hash=500B67FB"
          }
          className="rounded-xl"
          alt=""
        />
        <div className="flex flex-col">
          <span className="p-2 text-[#D58D49] bg-[#D58D49]/[.20] rounded-lg max-w-[80px]">
            {item && item.InnovationId}
          </span>
          <p className="font-semibold">Farhan Salim</p>
          <p className="text-gray-400">{item && item.InnovationTitle}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-[50px] h-[50px] bg-[#D70C27] flex items-center justify-center rounded-xl">
          <p class="text-white">{item && item.Score}</p>
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
          src={
            (item && item.ImageUrl) ||
            "https://api.lorem.space/image/house?w=80&h=90&hash=500B67FB"
          }
          className="rounded-xl"
          alt=""
        />
        <p className="font-semibold">{item && item.UserName}</p>
      </div>
      <div className="flex items-center gap-2">
        <Docking onClick={() => onDetailClick(true)} />
        <p>
          {item && item.Judging} / {item && item.TotalJudging}
        </p>
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
            <h1 className="font-semibold text-2xl">
              Peringkat {item && item.Peringkat}
            </h1>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <span className="p-2 text-[#D58D49] bg-[#D58D49]/[.20] rounded-lg">
                110000
              </span>
              <p className="text-gray-400">
                {item && item.InnovationTitle} | {item && item.Area}
              </p>
            </div>
          </div>
          <div className="flex gap-2 md:gap-4">
            <span className="bg-[#FFCD00] p-4 rounded-xl h-[50px] w-[50px]">
              {item && item.TotalPoint}
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
              onClick={() => handleOpenFeedback(item && item.InovationId)}
            >
              <RefreshIcon />
              <p className="font-semibold text-xs md:text-lg">Feedback</p>
            </div>
          </div>
        </div>

        <p className="font-semibold text-lg">Notes</p>
        <p>{item && item.Note}</p>
        <p className="font-semibold text-lg">Feedback</p>
        <p>{item && item.Feedback}</p>

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

const SideMenu = ({ menu, activeMenu, setActiveMenu }) => {
  return (
    <ul className="shadow-md">
      {menu.map((item, id) => (
        <li
          key={id}
          className={activeMenu === item.id ? "p-4 bg-[#FFCD00]" : "p-4"}
          onClick={() => setActiveMenu(item.id)}
        >
          {item.label}
        </li>
      ))}
    </ul>
  );
};

const Penjurian = () => {
  const menu = [
    {
      id: 3,
      label: "Settings Session dan Quota Penjurian",
    },
    {
      id: 4,
      label: "Settings Group Juri",
    },
    {
      id: 0,
      label: "Penjurian Lokal",
    },
    {
      id: 1,
      label: "Penjurian Nasional",
    },
    {
      id: 2,
      label: "Penjurian Grand Final",
    },
  ];
  const globalContext = useContext(GlobalContext);
  const [responses, setResponses] = useState([
    [
      {
        Id: 1,
        CategoryName: "Jakarta",
      },
      {
        Id: 2,
        CategoryName: "Bandung",
      },
    ],
  ]);

  const [getListDockingRes, setGetListDockingRes] = useState({
    LastDocking: "2022-10-30 12:12:12",
    Member: [
      {
        IdUser: "001",
        UserName: "Agatha",
        ImageUrl: "",
        TotalJudging: 15,
        Judging: 3,
        DataJudging: [
          {
            InovationId: 202103130,
          },
          {
            InovationId: 202103131,
          },
          {
            InovationId: 202103132,
          },
        ],
      },
      {
        IdUser: "001",
        UserName: "Agatha",
        TotalJudging: 15,
        Judging: 3,
        DataJudging: [
          {
            InovationId: 202103130,
          },
          {
            InovationId: 202103131,
          },
          {
            InovationId: 202103132,
          },
        ],
      },
      {
        IdUser: "001",
        UserName: "Agatha",
        TotalJudging: 15,
        Judging: 3,
        DataJudging: [
          {
            InovationId: 202103130,
          },
          {
            InovationId: 202103131,
          },
          {
            InovationId: 202103132,
          },
        ],
      },
    ],
  });

  const [getListHasilPenilaianRes, setGetListHasilPenilaianRes] = useState([
    {
      InovationId: 15,
      Peringkat: 1,
      InnovationTitle: "Lorem ipsum",
      Area: "Jakarta",
      TotalPoint: 12,
      Note: "Lorem ipsum",
      Feedback: "Lorem ipsum",
    },
    {
      InovationId: 15,
      Peringkat: 1,
      InnovationTitle: "Lorem ipsum",
      Area: "Jakarta",
      TotalPoint: 12,
      Note: "Lorem ipsum",
      Feedback: "Lorem ipsum",
    },
    {
      InovationId: 15,
      Peringkat: 1,
      InnovationTitle: "Lorem ipsum",
      Area: "Jakarta",
      TotalPoint: 12,
      Note: "Lorem ipsum",
      Feedback: "Lorem ipsum",
    },
  ]);

  const [getFeedbackPenjurianRes, setGetFeedbackPenjurianRes] = useState({
    InovationId: 15,
    InnovationTitle: "Lorem ipsum",
    Area: "Jakarta",
    Feedback: "Lorem ipsum",
  });

  const [getListInnovationPenjurianRes, setGetListInnovationPenjurianRes] =
    useState([
      {
        InnovationId: "001",
        CategoryId: "001",
        CategoryName: "LISA",
        InnovationTitle: "inovasi baru buat",
        imageUrl: "",
        Score: 20,
      },
      {
        InnovationId: "001",
        CategoryId: "001",
        CategoryName: "LISA",
        InnovationTitle: "inovasi baru buat",
        imageUrl: "",
        Score: 20,
      },
    ]);

  const [isLoading, setIsLoading] = useState(true);

  const [currentActiveTab, setActiveTab] = useState("Penilaian");
  const [currentActiveMenu, setActiveMenu] = useState(2);
  const [isDetailActive, setDetailActive] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [openChangeRank, setOpenChangeRank] = React.useState(false);
  const [openChangeRankBulk, setOpenChangeRankBulk] = React.useState(false);

  const [formValues, _, handleChange] = useInputForm({});

  const handleOpenFeedback = (id) => {
    getFeedbackPenjurianAction(id);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const handleOpenChangeRank = () => setOpenChangeRank(true);
  const handleCloseChangeRank = () => setOpenChangeRank(false);
  const handleOpenChangeRankBulk = () => setOpenChangeRankBulk(true);
  const handleCloseChangeRankBulk = () => setOpenChangeRankBulk(false);
  const onTabClick = (menuSelected) => {
    setActiveTab(menuSelected);
  };
  const {
    api: {
      masterKategoriInovasi: masterKategoriInovasiApi,
      getListDocking: getListDockingApi,
      getDetailListDocking: getDetailListDockingApi,
      getHasilPenilaian: getListHasilPenilaianApi,
      getFeedbackPenjurian: getFeedbackPenjurianApi,
      feedbackPenjurian: feedbackPenjurianApi,
      getInovasiPenjurian: getInovasiPenjurianApi,
    },
  } = window.processEnv;

  const getFeedbackPenjurianAction = (id) => {
    api({
      method: "POST",
      url: getFeedbackPenjurianApi,
      headers: {
        Auth: localStorage.getItem("Token"),
      },
      data: {
        InnovationId: id,
      },
    })
      .then((response) => {
        const { Status, Message, Data } = response.data;

        if (
          Status === 200 &&
          Data &&
          (Data.length || Object.keys(Data).length)
        ) {
          setGetFeedbackPenjurianRes(Data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleFeedbackSave = (formValue) => {
    api({
      method: "POST",
      url: feedbackPenjurianApi,
      headers: {
        Auth: localStorage.getItem("Token"),
      },
      data: formValue,
    })
      .then((response) => {
        const { Status, Message, Data } = response.data;

        if (
          Status === 200 &&
          Data &&
          (Data.length || Object.keys(Data).length)
        ) {
          alert(Data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const { FetchGet } = globalContext;

  useEffect(() => {
    Promise.all([
      FetchGet({
        url: masterKategoriInovasiApi,
        errorText: "Error while fetch Master Kategori Inovasi",
      }),
    ]).then((responses) => {
      setResponses(responses);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (currentActiveTab === "Docking") {
      api({
        method: "POST",
        url: getListDockingApi,
        headers: {
          Auth: localStorage.getItem("Token"),
        },
        data: {
          JudgingSessionId: "002",
          IsNasionalOrGrandFinal: currentActiveMenu,
        },
      })
        .then((response) => {
          const { Status, Message, Data } = response.data;

          if (
            Status === 200 &&
            Data &&
            (Data.length || Object.keys(Data).length)
          ) {
            setGetListDockingRes(Data);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }

    if (currentActiveTab === "Hasil Penilaian") {
      api({
        method: "POST",
        url: getListHasilPenilaianApi,
        headers: {
          Auth: localStorage.getItem("Token"),
        },
        data: {
          Filter: formValues && formValues.filter,
          Category: formValues && formValues.category,
          JudgingSessionId: "002",
          IsNasionalOrGrandFinal: currentActiveMenu,
        },
      })
        .then((response) => {
          const { Status, Message, Data } = response.data;

          if (
            Status === 200 &&
            Data &&
            (Data.length || Object.keys(Data).length)
          ) {
            setGetListHasilPenilaianRes(Data);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }

    if (currentActiveTab === "Penilaian") {
      api({
        method: "POST",
        url: getInovasiPenjurianApi,
        headers: {
          Auth: localStorage.getItem("Token"),
        },
        data: {
          Filter: formValues && formValues.filter,
          Category: formValues && formValues.category,
          JudgingSessionId: "002",
          JuriId: "001",
        },
      })
        .then((response) => {
          const { Status, Message, Data } = response.data;

          if (
            Status === 200 &&
            Data &&
            (Data.length || Object.keys(Data).length)
          ) {
            setGetListInnovationPenjurianRes(Data);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [currentActiveTab, formValues]);

  let [masterKategoriInovasiRes] = responses;

  // if (isLoading) {
  //   return <PageSpinner />;
  // }

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
              title: "Penjurian",
              href: "/penjurian",
            },
            {
              title: currentActiveTab,
            },
          ]}
        />
      </div>
      <div className="h-[50px]"></div>

      <TabMenu
        menuList={["Penilaian", "Docking", "Hasil Penilaian"]}
        menuActive={currentActiveTab}
        onTabClick={onTabClick}
      />

      <div className="h-[40px]"></div>

      {["Penilaian", "Hasil Penilaian"].includes(currentActiveTab) && (
        <div className="flex gap-4 w-full md:w-10/12 justify-center">
          <div className="flex w-6/12 flex-col">
            <SelectInput
              labelText={"Pilih Filter"}
              labelId={"filter"}
              placeholder={"Pilih filter"}
              onChange={handleChange}
            >
              {transformToOptions(
                masterKategoriInovasiRes,
                "CategoryName",
                "CategoryName"
              )}
            </SelectInput>
          </div>
          <div className="flex w-6/12 flex-col">
            <SelectInput
              labelText={"Pilih Kategori"}
              labelId={"category"}
              placeholder={"Pilih kategori"}
              onChange={handleChange}
            >
              {transformToOptions(
                masterKategoriInovasiRes,
                "CategoryName",
                "CategoryName"
              )}
            </SelectInput>
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
        {/* {!isDetailActive && ( */}
        <div className="hidden md:flex flex-col w-3/12">
          <SideMenu
            menu={menu}
            activeMenu={currentActiveMenu}
            setActiveMenu={setActiveMenu}
          />
        </div>
        {/* )} */}
        {currentActiveTab === "Penilaian" && (
          <div className="flex flex-col w-full md:w-9/12 p-2 gap-2">
            <p>List Inovasi</p>
            <ListInnovation
              innovationData={getListInnovationPenjurianRes}
              onDetailClick={setDetailActive}
            />
          </div>
        )}

        {currentActiveTab === "Docking" && (
          <div
            className={`flex flex-col w-full ${
              isDetailActive ? "md:w-full" : "md:w-9/12"
            } p-2`}
          >
            <div className="flex items-center gap-3">
              {!isDetailActive && (
                <DockingStatus
                  dateTime={getListDockingRes && getListDockingRes.LastDocking}
                />
              )}
            </div>
            <div className="flex flex-col gap-2">
              {!isDetailActive && (
                <ListDocking
                  dockingData={getListDockingRes && getListDockingRes.Member}
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
              hasilPenilaianData={getListHasilPenilaianRes}
              onDetailClick={setDetailActive}
              handleOpenFeedback={handleOpenFeedback}
              handleOpenChangeRank={handleOpenChangeRank}
            />
          </div>
        )}

        <ModalFeedback
          handleClose={handleClose}
          handleSave={handleFeedbackSave}
          open={open}
          data={getFeedbackPenjurianRes}
        />
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
