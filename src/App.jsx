import { useState } from "react"
import data from './data.json'
import CountryCard from "./components/CountryCard";
import { useDeferredValue } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  const deferredSearch = useDeferredValue(searchTerm);

  const filteredCountries = data.filter(country => {
    const matchesSearch = country.name.toLowerCase().includes(deferredSearch.toLowerCase());
    const matchesRegion = selectedRegion ? country.region === selectedRegion : true;
    return matchesSearch && matchesRegion;
  });

  return (
    <>
      <div className="container px-5 mx-auto my-10 flex justify-between items-center">
        <div className="w-full max-w-96 relative">
          <svg className="block w-6 absolute top-1/2 inset-s-2.5 -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64Z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32px"/><path d="M338.29 338.29 448 448" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32px"/></svg>
          <input
            className="bg-gray-900 h-11 rounded-sm w-full ps-12 pe-1.5 shadow-lg"
            type="search"
            placeholder="Search for a country..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          className="bg-gray-900 h-11 rounded-sm px-3 shadow-lg"
          onChange={e => setSelectedRegion(e.target.value)}
        >
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      <div className="container mx-auto grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-20 px-5">
        {filteredCountries.map(country => (
          <CountryCard
            key={country.name}
            flag={country.flag}
            name={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        ))}
      </div>
    </>
  )
}

export default App
