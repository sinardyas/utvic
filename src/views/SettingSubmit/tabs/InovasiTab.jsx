import React from "react";
import SettingInovasiCard from "../components/Card";

const InovasiTab = (props) => {
  const { data } = props;
  return (
    <div className="space-y-3">
      {data.map((item, index) => {
        return <SettingInovasiCard key={index} data={item} />;
      })}
    </div>
  );
};

export default InovasiTab;
