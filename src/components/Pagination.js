import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from "@heroicons/react/20/solid";

export default function Pagination({ handlePageChange, currentPage, totalResults, cardsPerPage, startIndex, endIndex }) {
  const totalPages = Math.ceil(totalResults / cardsPerPage); //Math.ceil -> 1.1 as 2
  // Calculate the range of displayed results
  const startRange = startIndex + 1;
  const endRange = endIndex <= totalResults ? endIndex : totalResults;

  return (
    <>
      {totalResults > cardsPerPage && (
        <div className="mx-auto max-w-2xl px-4 py-2 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
          <div className="w-full flex items-center justify-between  bg-white px-0 sm:px-0 py-3 ">
            <div className="flex flex-1 justify-between md:hidden">
              <p onClick={() => handlePageChange(currentPage > 1 ? currentPage - 1 : currentPage)} className="cursor-pointer relative inline-flex items-center  bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:text-red-600">
                <ChevronDoubleLeftIcon className="h-5 w-5" aria-hidden="true" />
              </p>
              <p onClick={() => handlePageChange(currentPage < totalPages ? currentPage + 1 : currentPage)} className="cursor-pointer relative ml-3 inline-flex items-center  bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:text-red-600 ">
                <ChevronDoubleRightIcon className="h-5 w-5" aria-hidden="true" />
              </p>
            </div>
            <div className="hidden md:flex md:flex-1 md:items-center md:justify-between md:flex-col lg:flex-row space-y-2">
              <div>
                <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                  <p onClick={() => handlePageChange(currentPage > 1 ? currentPage - 1 : currentPage)} className="cursor-pointer relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-900 ring-0 ring-inset ring-gray-0 hover:bg-gray-200 focus:z-20 focus:outline-offset-0">
                    <span className="sr-only">Previous</span>
                    <ChevronDoubleLeftIcon className="h-5 w-5" aria-hidden="true" />
                  </p>
                  {Array.from({ length: totalPages }, (_, index) => (
                    <p key={index} onClick={() => handlePageChange(index + 1)} className={`cursor-pointer relative z-10 inline-flex items-center ${index + 1 === currentPage ? "bg-gray-900 hover:bg-gray-700  text-gray-100" : " text-gray-700"} px-4 py-2 text-sm font-semibold focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 hover:bg-gray-300 hover:text-white`}>
                      {index + 1}
                    </p>
                  ))}
                  <p onClick={() => handlePageChange(currentPage < totalPages ? currentPage + 1 : currentPage)} className="cursor-pointer relative inline-flex items-center border-0 outline-0 rounded-r-md px-2 py-2 text-gray-900 ring-0 ring-inset ring-gray-0 hover:bg-gray-200 focus:z-20 focus:outline-offset-0">
                    <span className="sr-only">Next</span>
                    <ChevronDoubleRightIcon className="h-5 w-5" aria-hidden="true" />
                  </p>
                </nav>
              </div>
              <div>
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">{startRange}</span> to <span className="font-medium">{endRange}</span> of <span className="font-medium">{totalResults}</span> results
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
