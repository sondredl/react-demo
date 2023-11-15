import logo from './logo.svg';
import './App.css';
import YourComponent from './jsonData';
import React ,  {useState} from 'react';
import Tabs from './tabs';

const App = () => {
  const [currentTab, setCurrentTab] = useState('Companies');

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <div>
      <Tabs
        tabs={['Companies', 'OtherTab1', 'OtherTab2']} 
        defaultTab="Companies"
        onTabChange={handleTabChange}
        />
        {currentTab === 'Companies' && <CompaniesTab />}
        {currentTab === 'OtherTab1' && <OtherTab1 />}
        {currentTab === 'OtherTab2' && <OtherTab2 />}
      </div>
  );
};

const CompaniesTab = () => {
  // The content of the "Companies" tab
  return (
    <div>
      <h1>Companies</h1>
      {/* Your existing code for displaying companies */}
    </div>
  );
};

const OtherTab1 = () => {
  // The content of the "OtherTab1" tab
  return <div>Content for OtherTab1</div>;
};

const OtherTab2 = () => {
  // The content of the "OtherTab2" tab
  return <div>Content for OtherTab2</div>;
};

export default App;