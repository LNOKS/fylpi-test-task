import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { PropertyFilters } from "../api/properties";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import debounce from "lodash/debounce";

interface SearchBarProps {
  onSearch: (filters: Partial<PropertyFilters>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState<Partial<PropertyFilters>>({});
  const [initialSearchDone, setInitialSearchDone] = useState(false);

  useEffect(() => {
    const urlFilters: Partial<PropertyFilters> = {};
    searchParams.forEach((value, key) => {
      if (value) urlFilters[key as keyof PropertyFilters] = value;
    });
    setFilters(urlFilters);
    setInitialSearchDone(false);
  }, [searchParams]);

  useEffect(() => {
    if (!initialSearchDone) {
      onSearch(filters);
      setInitialSearchDone(true);
    }
  }, [filters, onSearch, initialSearchDone]);

  const debouncedSearch = useMemo(
    () =>
      debounce((newFilters: Partial<PropertyFilters>) => {
        onSearch(newFilters);
      }, 300),
    [onSearch]
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);

    if (name === "location") {
      debouncedSearch(newFilters);
    } else {
      onSearch(newFilters);
    }
  };

  return (
    <form className="flex flex-wrap gap-3 mt-8 w-full max-w-[1160px] max-md:max-w-full">
      <div className="flex gap-1.5 items-center p-3 text-base rounded border border-solid border-slate-500 min-h-[48px] text-slate-500">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a042350ae2e94d8075527de72d16246925ea89b5145c126ca19d1ff3841c890?placeholderIfAbsent=true&apiKey=56c0f2b286ae4dc7814105de2da1dd55"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
        <input
          type="text"
          name="location"
          placeholder="Bundesland, Ort oder Postleitzahl"
          onChange={handleInputChange}
          value={filters.location || ""}
          className="gap-1.5 self-stretch my-auto w-60 text-ellipsis"
        />
      </div>
      <div className="relative flex gap-1.5 justify-between items-center p-3 text-base whitespace-nowrap rounded border border-solid border-slate-500 text-neutral-700">
        <select
          name="type"
          onChange={handleInputChange}
          value={filters.type || ""}
          className="appearance-none gap-1.5 self-stretch my-auto text-ellipsis w-[78px] pr-8"
        >
          <option value="">Typ</option>
          <option value="Haus">Haus</option>
          <option value="Wohnung">Wohnung</option>
        </select>
        <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
      </div>
      <div className="relative flex gap-1.5 justify-between items-center p-3 text-base whitespace-nowrap rounded border border-solid border-slate-500 min-h-[48px] text-neutral-700">
        <select
          name="minPrice"
          onChange={handleInputChange}
          value={filters.minPrice || ""}
          className="appearance-none gap-1.5 self-stretch my-auto text-ellipsis w-[78px] pr-8"
        >
          <option value="">Min Preis</option>
          <option value="100000">100.000 €</option>
          <option value="200000">200.000 €</option>
          <option value="300000">300.000 €</option>
        </select>
        <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
      </div>
      <div className="relative flex gap-1.5 justify-between items-center p-3 text-base whitespace-nowrap rounded border border-solid border-slate-500 min-h-[48px] text-neutral-700">
        <select
          name="maxPrice"
          onChange={handleInputChange}
          value={filters.maxPrice || ""}
          className="appearance-none gap-1.5 self-stretch my-auto text-ellipsis w-[78px] pr-8"
        >
          <option value="">Max Preis</option>
          <option value="200000">200.000 €</option>
          <option value="300000">300.000 €</option>
          <option value="400000">400.000 €</option>
        </select>
        <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
      </div>
      <div className="relative flex gap-1.5 justify-between items-center p-3 text-base whitespace-nowrap rounded border border-solid border-slate-500 min-h-[48px] text-neutral-700">
        <select
          name="minRooms"
          onChange={handleInputChange}
          value={filters.minRooms || ""}
          className="appearance-none gap-1.5 self-stretch my-auto text-ellipsis w-[78px] pr-8"
        >
          <option value="">Min Zimmer</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
        </select>
        <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
      </div>
      <div className="relative flex gap-1.5 justify-between items-center p-3 text-base whitespace-nowrap rounded border border-solid border-slate-500 min-h-[48px] text-neutral-700">
        <select
          name="maxRooms"
          onChange={handleInputChange}
          value={filters.maxRooms || ""}
          className="appearance-none gap-1.5 self-stretch my-auto text-ellipsis w-[78px] pr-8"
        >
          <option value="">Max Zimmer</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5+</option>
        </select>
        <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
      </div>
      <button
        type="submit"
        className="flex justify-between items-center p-3 w-12 h-12 rounded border border-solid border-slate-500 min-h-[48px]"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5271c91fcac7e0cc43cf908b0146ebafdb40de391e1ed1071b2bbebde09055a0?placeholderIfAbsent=true&apiKey=56c0f2b286ae4dc7814105de2da1dd55"
          alt="Search"
          className="object-contain self-stretch my-auto w-6 aspect-square"
        />
      </button>
    </form>
  );
};

export default SearchBar;
