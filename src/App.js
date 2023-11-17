import logo from './logo.svg';
import './App.css';
import YourComponent from './jsonData';
// import companies from './companies.json';
// import React ,  {useState} from 'react';
import Tabs from './tabs';
import React, {useState, useEffect } from 'react';

const App = () => {
  const [currentTab, setCurrentTab] = useState('Companies');
  const [jsonData, setJsonData] = useState([]);

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  useEffect(() => {
    fetch('/companies.json')
    .then((response) => response.json())
    .then((data) => setJsonData(data))
    .then((error) => console.error('Error fetching JSON data:' , error));
  }, []);

  return (
    <div>
      <Tabs
        tabs={['Companies', 'OtherTab1', 'OtherTab2']} 
        defaultTab="Companies"
        onTabChange={handleTabChange}
        />
        {currentTab === 'Companies' && <CompaniesTab jsonData={jsonData} />}
        {currentTab === 'OtherTab1' && <OtherTab1 />}
        {currentTab === 'OtherTab2' && <OtherTab2 />}
      </div>
  );
};

const CompaniesTab = ({jsonData}) => {
  // The content of the "Companies" tab
  return (
    <div>
      <h1>Companies</h1>
            <ul>
                {jsonData.map((company, index) => (
                    <li key={index}>{company} </li>
                ))}
            </ul>
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