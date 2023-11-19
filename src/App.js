import logo from './logo.svg';
import './App.css';
import Tabs from './tabs';
import React, {useState, useEffect } from 'react';

const App = () => {
  const [currentTab, setCurrentTab] = useState('Companies');
  const [jsonData, setJsonData] = useState([]);
  const [searchWords, setSearchWords] = useState([]);
  const [webPages, setWebPages] = useState([]);
  const [htmlTags, setHtmlTags] = useState([]);

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

  useEffect(() => {
    fetch('/webPages.json')
    .then((response) => response.json())
    .then((data) => setWebPages(data))
    .catch((error) => console.error('Error fetching SearcWords data:' , error));
  }, []);

  useEffect(() => {
    fetch('/htmlTags.json')
    .then((response) => response.json())
    .then((data) => setHtmlTags(data))
    .catch((error) => console.error('Error fetching SearcWords data:' , error));
  }, []);

  return (
    <div>
      <Tabs
        tabs={['Companies', 'SearchWords', 'WebPages', 'HtmlTags']} 
        defaultTab="Companies"
        onTabChange={handleTabChange}
        />
        {currentTab === 'Companies' && <CompaniesTab jsonData={jsonData} />}
        {currentTab === 'SearchWords' && <SearchWordsTab searchWords={searchWords}/>}
        {currentTab === 'WebPages' && <WebPagesTab webPages={webPages}/>}
        {currentTab === 'HtmlTags' && <HtmlTagsTab htmlTags={htmlTags}/>}
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

const WebPagesTab = ({webPages}) => {
  return (
    <div>
      <h1>WebPages</h1>
      <ul>
        {webPages.map((page, index) => (
          <li key={index}>
            <a href={page.url} target="_blank" rel="noopener noreferrer">
              {page.name} 
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const HtmlTagsTab = ({htmlTags}) => {
  return (
    <div>
      <h1>HtmlTags</h1>
      <ul>
        {htmlTags.map((tag, index) => (
          <li key={index}> {tag} </li>
        ))}
      </ul>
    </div>
  );
};

export default App;