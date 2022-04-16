import React, { useContext, useState, useCallback, useEffect } from "react";

import SelectInput, { transformToOptions } from "./_shared/SelectInput";

import { api } from "../../boot/axios";
import { GlobalContext } from "../../store/global/Provider";

import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import BreadcrumbsSection from "../../components/BreadcrumbsSection/BreadcrumbsSection";
import { ReactComponent as CertificateIcon } from "../../assets/images/certificate-icon.svg";
import { ReactComponent as CertificateIcon2 } from "../../assets/images/certificate-icon.svg";
import { ReactComponent as DocDownloadIcon } from "../../assets/images/document-download.svg";
import { ReactComponent as TrashIcon } from "../../assets/images/trash.svg";
import CertifIcon from "../../assets/images/menu/certif.png";

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
      <div className="bg-[#FFCD00] rounded-full w-[150px] text-center py-2">
        Peringkat {item && item.Peringkat}
      </div>
      <div
        key={id}
        className="flex justify-between items-center gap-4 w-full border-[1px] border-[#ccc] border-l-2 border-l-[#FFCD00] p-2 px-4"
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
          <div className="flex flex-col gap-3">
            <div className="flex justify-between">
              <p className="font-semibold">Farhan Salim</p>
              <div className="w-[20px] h-[20px] bg-[#50BD88] flex md:hidden items-center justify-center rounded-full"></div>
            </div>
            <p className="text-gray-400">{item && item.InovationTitle}</p>
            <div className="flex md:hidden items-end gap-4">
              <img
                alt=""
                src={CertifIcon}
                onClick={() =>
                  handleOpenAddCertificate(item && item.InovationId)
                }
              />
              <DocDownloadIcon
                className="flex cursor-pointer"
                onClick={() => console.log("Download Cliked!")}
              />
            </div>
          </div>
        </div>
        <div className="hidden md:flex items-end gap-4">
          <div
            className="hidden md:flex cursor-pointer"
            onClick={() => handleOpenAddCertificate(item && item.InovationId)}
          >
            <CertificateIcon />
          </div>
          <div className="hidden w-[20px] h-[20px] bg-[#50BD88] md:flex items-center justify-center rounded-full"></div>
          <div
            className="hidden md:flex cursor-pointer"
            onClick={() => console.log("Download Cliked!")}
          >
            <DocDownloadIcon />
            Download
          </div>
        </div>
      </div>
    </>
  ));
};

const TabContentMenu = ({ menu, menuActive, onChangeMenu, children }) => {
  return (
    <>
      <div className="flex">
        {menu.map((item, id) => (
          <div
            key={id}
            className={`${
              item === menuActive ? "bg-[#FFCD00]" : ""
            } rounded-t-lg w-[150px] text-center py-2`}
            onClick={() => onChangeMenu(item)}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="flex flex-col w-full p-4 border-[1px] border-[#ccc] rounded-b-lg">
        {children}
      </div>
    </>
  );
};

const Utvic = () => {
  const navigate = useNavigate();
  const globalContext = useContext(GlobalContext);
  const [currentActiveTab, setActiveTab] = useState("UTVIC");
  const [currentActivePejuangMenu, setActivePejuangMenu] = useState("WITA");
  const [currentActivePejuangSubmenu, setActivePejuangSubmenu] =
    useState("Site");

  const [formValues, _, handleChange] = useInputForm({
    filter: "",
    category: "",
  });

  const [getUtvicRes, setGetUtvicRes] = useState([
    {
      year: 2021,
      Category: "LISA",
      SubCategory: "people",
      Data: [
        {
          Peringkat: 1,
          InovationId: 2002311,
          InovationTitle: "Ceritanya inovasi",
          ImageUrl: "{DOMAIN}/upload/namafile.jpg",
          IsCert: true,
        },
        {
          Peringkat: 2,
          InovationId: 2002311,
          InovationTitle: "Ceritanya inovasi",
          ImageUrl: "{DOMAIN}/upload/namafile.jpg",
          IsCert: true,
        },
        {
          Peringkat: 3,
          InovationId: 2002311,
          InovationTitle: "Ceritanya inovasi",
          ImageUrl: "{DOMAIN}/upload/namafile.jpg",
          IsCert: true,
        },
      ],
    },
    {
      year: 2022,
      Category: "LISA",
      SubCategory: "people",
      Data: [
        {
          Peringkat: 1,
          InovationId: 2002311,
          InovationTitle: "Ceritanya inovasi",
          ImageUrl: "{DOMAIN}/upload/namafile.jpg",
          IsCert: true,
        },
        {
          Peringkat: 2,
          InovationId: 2002311,
          InovationTitle: "Ceritanya inovasi",
          ImageUrl: "{DOMAIN}/upload/namafile.jpg",
          IsCert: true,
        },
        {
          Peringkat: 3,
          InovationId: 2002311,
          InovationTitle: "Ceritanya inovasi",
          ImageUrl: "{DOMAIN}/upload/namafile.jpg",
          IsCert: true,
        },
      ],
    },
  ]);

  const [getListRes, setGetListRes] = useState([
    {
      Ranking: 1,
      AreaId: 1,
      AreaName: "Jakarta",
    },
    {
      Ranking: 1,
      AreaId: 1,
      AreaName: "Jakarta",
    },
  ]);

  const onTabClick = (menuSelected) => {
    setActiveTab(menuSelected);
  };

  const {
    api: {
      masterKategoriInovasi: masterKategoriInovasiApi,
      getUtvic: getUtvicApi,
      getSiteByPejuang: getSiteByPejuangApi,
      getCabangByPejuang: getCabangByPejuangApi,
      getHoByPejuang: getHoByPejuangApi,
    },
  } = window.processEnv;

  useEffect(() => {
    if (currentActiveTab === "UTVIC") {
      api({
        method: "POST",
        url: getUtvicApi,
        headers: {
          Auth: localStorage.getItem("Token"),
        },
        data: {
          Filter: formValues.filter,
          Category: formValues.category,
        },
      })
        .then((response) => {
          const { Status, Message, Data } = response.data;

          if (
            Status === 200 &&
            Data &&
            (Data.length || Object.keys(Data).length)
          ) {
            setGetUtvicRes(Data);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [currentActiveTab, formValues]);

  const onChangSubMenu = (currentMenu) => {
    let baseUrl = "";
    if (currentMenu === "Site") baseUrl = getSiteByPejuangApi;
    if (currentMenu === "Cabang") baseUrl = getCabangByPejuangApi;
    if (currentMenu === "HO") baseUrl = getHoByPejuangApi;

    api({
      method: "POST",
      url: baseUrl,
      headers: {
        Auth: localStorage.getItem("Token"),
      },
      data: {
        PejuangId: "01",
        AreaId: "01",
      },
    })
      .then((response) => {
        const { Status, Message, Data } = response.data;

        if (
          Status === 200 &&
          Data &&
          (Data.length || Object.keys(Data).length)
        ) {
          setGetListRes(Data);
        }
      })
      .catch((error) => {
        console.error(error);
      });

    setActivePejuangSubmenu(currentMenu);
  };

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
              title: currentActiveTab,
            },
          ]}
        />
      </div>
      <div className="h-[50px]"></div>

      <TabMenu
        menuList={["UTVIC", "Innovastra", "Pejuang", "Star"]}
        menuActive={currentActiveTab}
        onTabClick={onTabClick}
      />

      <div className="h-[40px]"></div>

      <div className="flex flex-col w-full md:w-8/12 gap-4 p-4">
        {["UTVIC"].includes(currentActiveTab) && (
          <div className="flex gap-4 w-full md:w-10/12 justify-center">
            <div className="flex w-6/12 flex-col">
              <SelectInput
                labelText={"Pilih Filter"}
                labelId={"filter"}
                placeholder={"Pilih filter"}
                onChange={handleChange}
              >
                {transformToOptions(
                  [{ CategoryName: "asd" }],
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
                  [{ CategoryName: "asd" }],
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
        {currentActiveTab === "UTVIC" &&
          getUtvicRes.map((item, id) => (
            <div key={id} className="flex flex-col w-full gap-4">
              <p>Best Innovation Project {item && item.year}</p>
              <div className="flex flex-col w-full p-4 gap-4 border-[1px] border-[#ccc] rounded-lg">
                <p>Best {item && item.Category}</p>
                <ListInnovation
                  innovationData={item && item.Data}
                  handleOpenAddCertificate={(e) =>
                    navigate("/botb/add-certificate/" + e)
                  }
                />
              </div>
            </div>
          ))}

        {currentActiveTab === "Pejuang" && (
          <div className="flex flex-col w-full">
            <TabContentMenu
              menu={["WITA", "RITA", "FITA"]}
              menuActive={currentActivePejuangMenu}
              onChangeMenu={(e) => setActivePejuangMenu(e)}
            >
              <TabContentMenu
                menu={["Site", "Cabang", "HO"]}
                menuActive={currentActivePejuangSubmenu}
                onChangeMenu={onChangSubMenu}
              >
                <table className="rounded-xl my-4">
                  <thead>
                    <tr className="bg-black text-white">
                      <th className="p-4 rounded-tl-md">Ranking</th>
                      <th className="p-4">Area</th>
                    </tr>
                  </thead>
                  <tbody>
                    {getListRes.map((item, id) => (
                      <tr>
                        <td className="p-4 text-center">
                          {item && item.Ranking}
                        </td>
                        <td className="p-4 text-center">
                          {item && item.AreaName}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </TabContentMenu>
            </TabContentMenu>
          </div>
        )}
      </div>
    </div>
  );
};

export default Utvic;
