import logo from './logo.svg';
import './App.css';
import Tabs from './tabs';
import React, {useState, useEffect } from 'react';

const App = () => {
  const [currentTab, setCurrentTab] = useState('Companies');
  const [jsonData, setJsonData] = useState([]);
  const [searchWords, setSearchWords] = useState([]);

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  useEffect(() => {
    fetch('/companies.json')
    .then((response) => response.json())
    .then((data) => setJsonData(data))
    .then((error) => console.error('Error fetching JSON data:' , error));
  }, []);

  useEffect(() => {
    fetch('/searchWords.json')
    .then((response) => response.json())
    .then((data) => setSearchWords(data))
    .catch((error) => console.error('Error fetching SearcWords data:' , error));
  }, []);

  return (
    <div>
      <Tabs
        tabs={['Companies', 'SearchWords']} 
        defaultTab="Companies"
        onTabChange={handleTabChange}
        />
        {currentTab === 'Companies' && <CompaniesTab jsonData={jsonData} />}
        {currentTab === 'SearchWords' && <SearchWordsTab searchWords={searchWords}/>}
      </div>
  );
};

const CompaniesTab = ({jsonData}) => {
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

const SearchWordsTab = ({searchWords}) => {
  return (
    <div>
      <h1>SearchWords</h1>
      <ul>
        {searchWords.map((searchWord, index) => (
          <li key={index}>{searchWord}</li>
        ))}
      </ul>
    </div>
  );
};


export default App;