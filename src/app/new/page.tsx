"use client";

import React from "react";

const pages = [1, 2, 4];
const limitOptions = [5, 10, 15, 20, 25, 30];

export default function Home() {
  const [A, setA] = React.useState(999);
  const [B, setB] = React.useState(0);

  const [skip, setSkip] = React.useState(0);
  const [limit, setLimit] = React.useState(15);

  const handleLimitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLimit(parseInt(e.target.value));
  };

  const handleSkipChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSkip(parseInt(e.target.value));
  };

  const fetchData = React.useCallback(async () => {
    console.log("fetching data with limit", limit, "and skip", skip);
  }, [limit, skip]);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <React.Fragment>
      <div className=" py-24 flex justify-center">
        <div className="w-1/3 bg-white shadow-md p-4 rounded-md">
          <div className="text-2xl text-gray-800">Todo List</div>
          <hr className="my-5"></hr>
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-12 gap-[2rem]">
              {pages.map((page) => (
                <div
                  key={page}
                  className="border col-span-3 min-h-[100px] transition-all duration-300 rounded-md hover:shadow-md hover:cursor-pointer p-4"
                >
                  <p className="text-green-500">Todo {page}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center mt-8">
            <div>
              <label htmlFor="limit" className="text-gray-800">
                Limit:
              </label>
              <select
                name="limit"
                id="limit"
                className="px-2 py-1 bg-gray-200 rounded-md focus:outline-none"
                value={limit}
                onChange={handleLimitChange}
              >
                {limitOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="skip" className="text-gray-800">
                Skip:
              </label>
              <select
                name="skip"
                id="skip"
                className="px-2 py-1 bg-gray-200 rounded-md focus:outline-none"
                value={skip}
                onChange={handleSkipChange}
              >
                {pages.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
