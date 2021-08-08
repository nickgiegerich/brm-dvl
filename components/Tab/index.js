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
      <ul className=" border-b-2 border-green-500">
        {tabsData.map(({ tab }, idx) => (
          <li
            key={`Tab-li-${idx}`}
            className={`text-2xl md:px-5 md:py-2 transform ease-in duration-300 hover:scale-105 ${
              idx === activeTab
                ? "text-black bg-secondary border-t-2 border-l-2 border-r-2 border-b-4 border-green-500 shadow-2xl px-5"
                : "text-gray-800 border-t-2 border-l-2 border-r-2 border-gray-200 shadow-inner"
            }`}
            onClick={() => setActiveTab(idx)}
          >
            <p>{tab}</p>
          </li>
        ))}
      </ul>
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
