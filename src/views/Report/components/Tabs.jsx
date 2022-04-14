import React from "react";
import { Tab, Tabs as TabsContainer, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { ProgressTab, IssueTab, NextActionTab } from "./TabPanels";

const Tabs = (props) => {
  const { index, onTabChange } = props;

  return (
    <div>
      <TabsContainer
        defaultIndex={0}
        onSelect={(index) => onTabChange(index)}
        selectedTabClassName="bg-[#FFCD00] rounded-t-lg border-none p-4 "
      >
        <TabList className="border-0">
          <Tab>Progress</Tab>
          <Tab>Issue</Tab>
          <Tab>Next Action</Tab>
        </TabList>
        <TabPanel>
          <ProgressTab />
        </TabPanel>
        <TabPanel>
          <IssueTab />
        </TabPanel>
        <TabPanel>
          <NextActionTab />
        </TabPanel>
      </TabsContainer>
    </div>
  );
};

export default Tabs;
