import { Link } from "react-router-dom";

export default function CountryCard({flag, name, population, region, capital}) {
  return (
    <Link to={`/${name}`} className="flex flex-col rounded-lg overflow-hidden bg-gray-900 shadow-lg">
      <img src={flag} />

      <div className="mt-auto py-6 px-8">
        <h2 className="font-bold text-xl mb-5">{name}</h2>
        <div><b>Population:</b> { population }</div>
        <div><b>Region:</b> { region }</div>
        <div><b>Capital:</b> { capital }</div>
      </div>
    </Link>
  );
}
