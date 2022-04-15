import React from "react";
import DeleteIcon from "../../../assets/images/delete.png";

const Table = (props) => {
  const [selectedInovation, setSelectedInovation] = React.useState([]);
  const dataInovation = [
    {
      id: 1,
      name: "Inovasi 1",
    },
    {
      id: 2,
      name: "Inovasi 2",
    },
  ];

  const onSelectInovation = (e) => {
    const value = e.target.value;

    if (+value < 1) {
      return;
    }

    const selected = selectedInovation.filter((item) => item.id === +value);
    const item = dataInovation.find((el) => el.id === +value);

    if (selected.length > 0) {
      return;
    }

    setSelectedInovation([...selectedInovation, item]);
  };

  const deleteTableData = (val) => {
    const newData = selectedInovation.filter((item) => item.id !== val);
    setSelectedInovation(newData);
  };

  return (
    <div className="">
      <div className="form-add">
        <label htmlFor="makalah" className="font-bold">
          Makalah
        </label>
        <select
          name="makalah"
          id="makalah"
          className="form-add-field text-gray-600"
          //   onSelect={onSelectInovation}
          onChange={onSelectInovation}
          defaultValue=""
        >
          <option value="" disabled>
            Pilih Makalah
          </option>
          {dataInovation.map((item) => {
            return (
              <option key={item.id} value={item.id}>
                {item.id} - {item.name}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <p className="font-bold mb-5">Makalah Dipilih</p>
        <div className="table-container">
          <div className="table-header">
            <div className="table-header-field flex-[0_1_10%] border-l-0">
              No
            </div>
            <div className="table-header-field flex-[0_1_20%]">ID Makalah</div>
            <div className="table-header-field flex-[0_1_70%]">
              Judul Inovasi
            </div>
          </div>
          {selectedInovation.length === 0 && (
            <div className="table-body">
              <div className="table-body-field border-l-0 flex-[0_1_10%]">
                -
              </div>
              <div className="table-body-field flex-[0_1_20%]">-</div>
              <div className="table-body-field flex-[0_1_70%]">-</div>
            </div>
          )}
          {selectedInovation.length > 0 &&
            selectedInovation.map((inovation, index) => (
              <div
                key={index}
                className={`table-body ${
                  index % 2 === 0 ? "bg-gray-200" : "bg-gray-300"
                }`}
              >
                <div className="table-body-field flex-[0_1_10%] ">
                  {index + 1}
                </div>
                <div className="table-body-field flex-[0_1_20%] border-x border-gray-100">
                  {inovation?.id}
                </div>
                <div className="table-body-field flex-[0_1_70%] px-4">
                  <div className="w-full text-center">{inovation?.name}</div>
                  <div
                    className=""
                    onClick={() => deleteTableData(inovation.id)}
                  >
                    <img
                      src={DeleteIcon}
                      alt="delete"
                      className="w-8 cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Table;
