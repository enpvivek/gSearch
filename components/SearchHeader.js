import Image from "next/image";
import React, { useRef } from "react";
import { useRouter } from "next/router";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import User from "./User";

const SearchHeader = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);
  function search(event) {
    event.preventDefault();
    const term = searchInputRef.current.value;
    if (!term.trim()) {
      return;
    }
    router.push(`/search?term=${term.trim()}`);
  }
  return (
    <header className="sticky top-0 bg-white">
      <div className="w-full flex p-5 items-center">
        <Image
          width="120"
          height="40"
          objectFit="contain"
          alt="google-logo"
          onClick={() => router.push("/")}
          className="cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
        />
        <form className="flex border border-gray-200 rounded-full shadow-lg px-6 py-2.5 ml-10 mr-5 flex-grow max-w-3xl items-center">
          <input
            type="text"
            defaultValue={router.query.term}
            ref={searchInputRef}
            className="w-full focus:outline-none"
          />
          <XIcon
            onClick={() => (searchInputRef.current.value = "")}
            className="h-7 text-gray-500 cursor-pointer sm:mr-3 "
          />
          <SearchIcon
            onClick={search}
            className="h-6 hidden sm:inline-flex text-blue-500 cursor-pointer pl-4  border-l-2 border-gray-300 mr-3"
          />
          <MicrophoneIcon className="h-6 hidden sm:inline-flex text-blue-500 cursor-pointer" />
          <button onClick={search} type="submit" hidden></button>
        </form>
        <User className="ml-auto whitespace-nowrap" />
      </div>
    </header>
  );
};

export default SearchHeader;
