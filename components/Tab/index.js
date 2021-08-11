import React, { useEffect, useState } from "react";

export const Tab = ({ children, active = 0 }) => {
  const [activeTab, setActiveTab] = useState(active);
  const [tabsData, setTabsData] = useState([]);

  useEffect(() => {
    let data = [];
    React.Children.forEach(children, (element) => {
      if (!React.isValidElement(element)) return;

      const {
        props: { tab, children },
      } = element;
      data.push({ tab, children });
    });

    setTabsData(data);
  }, [children]);

  return (
    <div className="w-screen">
      <div className="grid grid-cols-3 gap-2 w-screen bg-gray-100">
        {tabsData.map(({ tab }, idx) => (
          <div
            key={`Tab-Grid-${idx}`}
            className={`text-center text-black text-lg md:text-2xl rounded-t-md py-8 cursor-pointer transform ease-in duration-100 font-montserrat font-bold ${
              idx === activeTab ? "bg-brown " : "bg-primary shadow-inner"
            }`}
            onClick={() => setActiveTab(idx)}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 text-left max-w-8xl mx-auto">
        {tabsData[activeTab] && tabsData[activeTab].children}
      </div>
    </div>
  );
};

const TabPane = ({ children }) => {
  return { children };
};

Tab.TabPane = TabPane;
