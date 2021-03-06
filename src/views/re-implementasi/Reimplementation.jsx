import React, { useCallback, useMemo } from "react";
import project from "../../assets/images/project.svg";
import "../../styles/Reimplementasi.scss";
import "../../styles/MIIP.scss";
import Filter from "../MIIP/components/Filter";
import Card from "./components/Card";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

const Reimplementation = () => {
  const navigate = useNavigate();
  const initialState = {
    search: "",
    filter: "",
    status: "",
  };
  const [filterParam, setFilterParam] = React.useState(initialState);

  const filterData = [
    {
      item: "filter 1",
      value: "filter 1",
    },
    {
      item: "filter 2",
      value: "filter 2",
    },
    {
      item: "filter 3",
      value: "filter 3",
    },
  ];

  const onChangeFilter = useCallback(
    (e) => {
      const { name, value } = e.target;
      setFilterParam({ ...filterParam, [name]: value });
    },
    [filterParam]
  );

  const resetFilter = useCallback(() => {
    setFilterParam(initialState);
  }, [filterParam]);

  return (
    <>
      <div className="mb-2 md:mb-20">
        <Header />
      </div>
      <div className="miip-container">
        <div className="title">
          <img src={project} alt="miip" />
          <p className="text-xl md:text-2xl font-bold">Re-Implementasi</p>
        </div>
        <Filter
          onChange={onChangeFilter}
          filterData={filterData}
          value={filterParam}
          reset={resetFilter}
        />
        <div
          className="flex justify-between items-center"
          onClick={() => navigate("add")}
        >
          <p className="export">Tambah Inovasi</p>
        </div>

        <Card />
      </div>
    </>
  );
};

export default Reimplementation;
