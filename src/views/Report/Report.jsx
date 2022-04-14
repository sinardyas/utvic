import React from "react";
import Tabs from "./components/Tabs";
import Info from "./components/Info";
import "../../styles/Report.scss";
import Header from "../../components/Header";

const Report = () => {
  const [tabIndex, setTabIndex] = React.useState(0);
  const onTabChange = (index) => {
    setTabIndex(index);
  };

  return (
    <>
      <div className="mb-2 md:mb-20">
        <Header />
      </div>
      <div className="flex container space-y-10 lg:px-24 py-5 flex-wrap md:space-y-0 justify-between">
        <div className="md:flex-[0_1_48%] flex-[0_1_100%]">
          <Info index={tabIndex} />
        </div>
        <div className="md:flex-[0_1_48%] flex-[0_1_100%]">
          <Tabs index={tabIndex} onTabChange={onTabChange} />
        </div>
      </div>
    </>
  );
};

export default Report;
