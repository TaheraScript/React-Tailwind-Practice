import { use, useState } from "react";
import type { CountryType } from "../type/CountryType";
import Country from "../Country/country";
import "./countries.css";

export interface CountriesProps {
  countriesPromise: Promise<CountryType[]>;
}

export default function Countries({ countriesPromise }: CountriesProps) {
  const [visitedCountries, SetVisitedCountries] = useState<CountryType[]>([]);
  const [visitedFlags, setVisitedFlags] = useState<string[]>([]);

  const countries = use(countriesPromise);

  const handleVisitedCountry = (country: CountryType): void => {
    //bad way to check object/array best way for string or number
    // if (visitedCountries.includes(country)) {
    //   const remainingCountry = visitedCountries.filter(c => c !== country)
    //   SetVisitedCountries(remainingCountry)
    // } 
    
    //good way for object
    const exists = visitedCountries.find(c => c.ccn3.ccn3 === country.ccn3.ccn3);
    if(exists){
        const remainingCountry = visitedCountries.filter(c => c.ccn3.ccn3 !== country.ccn3.ccn3)
        SetVisitedCountries(remainingCountry)
    }
    else {
      const newVisitedCountries = [...visitedCountries, country];
      SetVisitedCountries(newVisitedCountries);
    }
  };
  const handleVisitedFlags = (flag: string): void => {
    if (visitedFlags.includes(flag)) {
      const remainingFlags =visitedFlags.filter(f => f !== flag)
      setVisitedFlags(remainingFlags)
    } else {
      const newVisitedFlags = [...visitedFlags, flag];
      setVisitedFlags(newVisitedFlags);
    }
  };

  return (
    <div>
      <h2>Countries : {countries.length}</h2>
      <h4>Visited Countries : {visitedCountries.length}</h4>
      <h4>Flags of Countries : {visitedFlags.length}</h4>
      <div>
        <ul>
            {
                visitedCountries.map(country => <li key ={country.ccn3.ccn3}>{country.name.common}</li>)
            }
        </ul>
      </div>
      <div className="visited-flags">
        {
            visitedFlags.map((flag,index) => <img key ={index}src={flag} alt="Visited Flag"/>)
        }
      </div>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.ccn3.ccn3}
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}
          ></Country>
        ))}
      </div>
    </div>
  );
}
