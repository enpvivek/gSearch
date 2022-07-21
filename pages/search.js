import Head from "next/head";
import React from "react";
//import { GetServerSideProps } from "next";
import SearchHeader from "../components/SearchHeader";
import Response from "../Response";

const search = ({ results }) => {
  console.log(results);
  return (
    <div>
      <Head>
        <title>Search Page</title>
      </Head>

      {/* Search Header */}
      <SearchHeader />

      {/* Search Results */}
    </div>
  );
};

export default search;

export async function getServerSideProps(context) {
  const mockData = true;
  const data = mockData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${
          process.env.GSEARCH_API_KEY
        }&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${
          context.query.searchType && "&searchType=image"
        }`
      ).then((response) => response.json());
  return {
    props: {
      results: data,
    },
  };
}
