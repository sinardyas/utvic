import React from "react";
import searchIcon from "../../../assets/images/search-form.png";
import trash from "../../../assets/images/trash.svg";

const Filter = (props) => {
  const { onChange, filterData, value, reset } = props;

  return (
    <div className="filter-form-container">
      <div className="filter-field-container">
        <label htmlFor="search">Search</label>
        <div className="filter-field">
          <img src={searchIcon} alt="search" />
          <input
            type="text"
            placeholder="Ketik yang ingin dicari"
            name="search"
            id="search"
            onChange={onChange}
            value={value.search}
          />
        </div>
      </div>

      <div className="filter-field-container">
        <label htmlFor="filter">Pilih Filter</label>
        <div className="filter-field">
          <select
            name="filter"
            className="filter-select"
            id="filter"
            placeholder="Pilih Filter"
            onChange={onChange}
            value={value.filter}
          >
            {filterData.map((item, index) => (
              <option key={index} value={item.value}>
                {item.item}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="filter-field-container">
        <label htmlFor="status">Select Status</label>
        <div className="filter-field">
          <input
            type="text"
            placeholder="Masukan Status"
            name="status"
            id="status"
            onChange={onChange}
            value={value.status}
          />
        </div>
      </div>
      <div className="hidden md:block cursor-pointer" onClick={reset}>
        <img src={trash} alt="reset filter" className="w-8" />
      </div>
    </div>
  );
};

export default Filter;
