import React, { useState } from 'react';

const Tabs = ({ tabs, defaultTab, onTabChange }) => {
    const [activeTab, setActiveTab] = useState(defaultTab);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        onTabChange(tab);
    };

    return (
        <div>
            <div className="tab-list">
                {tabs.map((tab) => (
                    <div
                        key={tab}
                        className={`tab ${activeTab === tab ? 'active' : ''}`}
                        onClick={() => handleTabClick(tab)}
                    >
                        {tab}
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Tabs;