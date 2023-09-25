"use client";
import { useState, useEffect } from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Pagination from "./Pagination";

const cardData = [
  {
    id: 1,
    date: "August 5, 2020",
    readDuration: "4",
    title: "Creativo Para Jóvenes: a Designer’s UI/UX Complete Checklist.",
    href: "/",
  },
  {
    id: 2,
    date: "August 4, 2020",
    readDuration: "8",
    title: "The Highly Contemporary UI/UX Design from a Silicon Valley.",
    href: "/",
  },
  {
    id: 3,
    date: "August 3, 2020",
    readDuration: "4",
    title: "Definitive Guide to Make a Daily More Productive Working Flow.",
    href: "/",
  },
  {
    id: 4,
    date: "July 5, 2020",
    readDuration: "4",
    title: "Organic Food Isn’t Much Better For Your Future Health.",
    href: "/",
  },
  {
    id: 5,
    date: "August 4, 2020",
    readDuration: "8",
    title: "Ways of Lying to Yourself About Your New Relationship.",
    href: "/",
  },
  {
    id: 6,
    date: "July 3, 2020",
    readDuration: "4",
    title: "Definitive Guide to Make a Daily More Productive Working Flow.",
    href: "/",
  },
  {
    id: 7,
    date: "July 3, 2020",
    readDuration: "4",
    title: "Definitive Guide to Make a Daily More Productive Working Flow.",
    href: "/",
  },
  {
    id: 8,
    date: "August 4, 2020",
    readDuration: "8",
    title: "Ways of Lying to Yourself About Your New Relationship.",
    href: "/",
  },
  {
    id: 9,
    date: "August 3, 2020",
    readDuration: "4",
    title: "Definitive Guide to Make a Daily More Productive Working Flow.",
    href: "/",
  },
  {
    id: 10,
    date: "August 5, 2020",
    readDuration: "4",
    title: "Creativo Para Jóvenes: a Designer’s UI/UX Complete Checklist.",
    href: "/",
  },
  // More products...
];

export default function CardList() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalResults = cardData.length;
  const cardsPerPage = 5;

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  // Slice the data to display only the items for the current page
  const displayedData = cardData.slice(startIndex, endIndex);

  useEffect(() => {
    setCurrentPage(1);
  }, [totalResults]);

  const handlePageChange = (pageNo) => {
    setCurrentPage(pageNo);
  };
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 pt-24 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-1 xl:gap-x-8">
          {displayedData.map((card) => (
            <div key={card.id} className="group relative">
              <div className="aspect-h-1  w-full p-4 space-y-5 overflow-hidden rounded-md bg-gray-100 bg-opacity-50 lg:aspect-none group-hover:bg-gray-100 lg:h-40">
                <div className="flex justify-between align-middle ">
                  <div>
                    <h3 className="inline-block text-sm font-semibold text-gray-900">{card.date}</h3>
                    <span className="px-2 text-red-600 ">&#x2022;</span>
                    <span className="text-gray-700 text-sm">
                      {card.readDuration}
                      min read
                    </span>
                  </div>
                  <span className="font-extrabold ">
                    <ArrowUpRightIcon className="w-6 h-6 text-gray-900" />
                  </span>
                </div>

                <p className="text-xl font-bold text-gray-900">{card.title}</p>
                <div className="space-x-2">
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-semibold py-1 px-2 rounded">Digital</button>
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-semibold py-1 px-2 rounded">Marketing</button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
      <Pagination handlePageChange={handlePageChange} currentPage={currentPage} totalResults={totalResults} cardsPerPage={cardsPerPage} startIndex={startIndex} endIndex={endIndex} />
    </div>
  );
}
