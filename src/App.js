import logo from './logo.svg';
import './App.css';
// import './companies.json';
// import './searchWords.json';
// import YourComponent from './jsonData';
// import SerchWordsComponent from './searchWords';
// import companies from './companies.json';
// import React ,  {useState} from 'react';
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

  // useEffect(() => {
  //   fetch('/searchWords.json')
  //   .then((response) => {
  //     console.log('Response: ', response);
  //     return response.json();
  //   })
  //   .then((data) => {
  //     console.log('Data: ', data)
  //     setSearchWords(data);
  //   })
  //   .catch((error) => console.error('Error fetching SearcWords data:' , error));
  // }, []);
  useEffect(() => {
  // Fetch searchWords data
  fetch('/searchWords.json', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then((response) => response.json())
    .then((data) => setSearchWords(data))
    .catch((error) => console.error('Error fetching searchWords data:', error));
}, []);
  // useEffect(() => {
  //   fetch('/searchWords.json')
  //   .then((response) => response.json())
  //   .then((data) => setSearchWords(data))
  //   .catch((error) => console.error('Error fetching SearcWords data:' , error));
  // }, []);

  return (
    <div>
      <Tabs
        tabs={['Companies', 'SearchWords', 'OtherTab2']} 
        defaultTab="Companies"
        onTabChange={handleTabChange}
        />
        {currentTab === 'Companies' && <CompaniesTab jsonData={jsonData} />}
        {currentTab === 'SearchWords' && <SearchWordsTab searchWords={searchWords}/>}
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

const SearchWordsTab = ({searchWords}) => {
  // The content of the "OtherTab1" tab
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

const OtherTab2 = () => {
  // The content of the "OtherTab2" tab
  return <div>Content for OtherTab2</div>;
};

export default App;