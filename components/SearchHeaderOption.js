import React from "react";
import { useRouter } from "next/router";

const SearchHeaderOption = ({ title, Icon, selected }) => {
  const router = useRouter();
  function selectTab(title) {
    router.push(
      `search?term=${router.query.term}&searchType=${
        title === "Images" ? "image" : ""
      }`
    );
  }
  return (
    <div
      onClick={() => selectTab(title)}
      className={`flex items-center space-x-1 border-b-4 border-transparent hover:cursor-pointer hover:text-blue-500 hover:border-blue-500 pb-2.5 ${
        selected && "text-blue-500 border-blue-500"
      }`}
    >
      <Icon className="h-4" />
      <p>{title}</p>
    </div>
  );
};

export default SearchHeaderOption;
