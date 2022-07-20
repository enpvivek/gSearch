import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import { SearchIcon, MicrophoneIcon } from "@heroicons/react/solid";

export default function Home() {
  return (
    <div>
      <Head>
        <title>G-Search</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />

      {/* Body */}
      <form className="flex flex-col items-center mt-40">
        <Image
          width="300"
          height="100"
          objectFit="cover"
          alt="google-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
        />

        <div className="flex mt-5  w-full max-w-[90%] sm:max-w-sl lg:max-w-3xl px-5 py-2.5 border border-gray-300 rounded-full hover:shadow-lg focus-within:shadow-lg">
          <SearchIcon className="h-5 text-gray-500 mr-3" />
          <input type="text" className="flex-grow focus:outline-none"></input>
          <MicrophoneIcon className="h-5  text-gray-500" />
        </div>
        <div className="flex flex-col sm:flex-row mt-8 space-y-2 w-[50%] sm:space-y-0 sm:space-x-4 justify-center">
          <button className="btn"> Google Search</button>
          <button className="btn">{`I'm Feeling Lucky`}</button>
        </div>
      </form>

      {/* Footer */}
    </div>
  );
}
