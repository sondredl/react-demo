import React, {useState, useEffect } from 'react';
import companies from './companies.json';

const YourComponent = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(() =>{
        fetch('/companies.json')
        .then((response) => response.json())
        .then((data) => setCompanies(data))
        .catch((error) => console.error('Error fetching JSON data:', error));
    }, []);
    return (
        <diiv>
            <h1>
                JsonData
            </h1>
            <ul>
                {companies.map((company, index) => (
                    <li key={index}>{company} </li>
                ))}
            </ul>
        </diiv>
    );
};

export default YourComponent;