import React from "react";
import FilterAddNew from "./components/FilterAddNew";
import Header from "../../components/Header";
import Table from "./components/Table";
import project from "../../assets/images/project.svg";

const AddNewReimplementation = (props) => {
  return (
    <>
      <div className="mb-2 md:mb-20">
        <Header />
      </div>
      <div className="container xl:px-36">
        <div className="flex md:mb-6 items-center">
          <img src={project} alt="reimplementasi" className="md:h-14 h-10;" />
          <h2 className="text-xl md:text-2xl font-bold">Re-Implementasi</h2>
        </div>

        <FilterAddNew />

        <Table />
      </div>
    </>
  );
};

export default AddNewReimplementation;
