import React from "react";
import trash from "../../../assets/images/trash1.svg";

const FilterAddNew = (props) => {
  return (
    <div className="flex md:justify-between flex-wrap">
      <div className="form-add flex-[0_1_100%] md:flex-[0_1_47.5%]">
        <label htmlFor="filter">Filter</label>
        <select name="filter" id="filter" className="form-add-field">
          <option value="filter 1">filter 1</option>
          <option value="filter 2">filter 2</option>
          <option value="filter 3">filter 3</option>
        </select>
      </div>
      <div className="form-add flex-[0_1_100%] md:flex-[0_1_47.5%]">
        <label htmlFor="kategori">Kategori</label>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            id="kategori"
            name="kategori"
            className="form-add-field w-full "
          />
          <img src={trash} alt="delete" />
        </div>
      </div>
    </div>
  );
};

export default FilterAddNew;
