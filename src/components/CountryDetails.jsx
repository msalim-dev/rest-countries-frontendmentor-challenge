import { Link, useParams } from "react-router-dom"
import data from '../data.json'

export default function CountryDetails() {
  const { countryName } = useParams();
  const country = data.find(country => country.name == countryName);

  return (
    <div className="container px-5 mx-auto pb-10">
      <Link to="/" className="inline-flex items-center gap-2.5 rounded-sm py-2 px-6 mx-auto my-14 bg-gray-900 shadow-2xl">
        <svg className="block w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M244 400 100 256l144-144M120 256h292" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48px"/></svg>
        Back
      </Link>

      <div className="grid gap-14 md:grid-cols-2">
        <img src={country.flag} className="block max-w-full" />
        <div>
          <h1 className="font-bold text-2xl mb-8">{country.name}</h1>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <div><b>Native Name:</b> { country.nativeName }</div>
              <div><b>Population:</b> { country.population }</div>
              <div><b>Region:</b> { country.region }</div>
              <div><b>Sub Region:</b> { country.subregion }</div>
              <div><b>Captial:</b> { country.capital }</div>
            </div>

            <div className="flex flex-col gap-1.5">
              <div><b>Top Level Domain:</b> {country.topLevelDomain}</div>
              <div><b>Currencies:</b> {country.currencies.map(currency => currency.name).join(', ')}</div>
              <div><b>Languages:</b> { country.languages.map(lang => lang.name).join(', ') }</div>
            </div>

            {country.borders && (
              <div className="col-span-full lg:flex justify-between gap-5">
                <h3 className="font-bold text-lg max-lg:mb-3 min-w-max">Border Countries:</h3>
                <div className="flex flex-wrap gap-2">
                  {country.borders.map(border => <div kry={border} className="rounded-sm py-1 px-8 bg-gray-900 shadow-2xl">{ border }</div>)}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
