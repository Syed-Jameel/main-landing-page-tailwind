"use client"
import { useState, useEffect } from "react";
import { blogData } from "@/components/blog1/blogData"
import BlogLists from "@/components/blog1/BlogLists"
import Pagination from "@/components/common/Pagination"
import UserProfile from "@/components/blog1/UserProfile";
import FollowMe from "@/components/blog1/FollowMe";
import FeaturedPosts from "@/components/blog1/FeaturedPosts";
import Nav from "@/components/blog2/Nav";
import Navbar2 from "@/components/navbar/Navbar2";

export default function Page() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalBlogs = blogData.length;
    const blogsPerPage = 6;

    // Calculate the index range for the current page
    const startIndex = (currentPage - 1) * blogsPerPage;
    const endIndex = startIndex + blogsPerPage;

    // Slice the data to display only the items for the current page
    const displayedData = blogData.slice(startIndex, endIndex);

    useEffect(() => {
        setCurrentPage(1);
    }, [totalBlogs]);

    const handlePageChange = (pageNo) => {
        setCurrentPage(pageNo);
    };

    return (
        <>
            <header>
                <Navbar2 />
            </header>
            <main>
                <div className=" px-6 py-4 sm:px-8 sm:py-4 ">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-10">
                        <div className="col-span-3">
                            <Nav />
                        </div>

                        <div className="col-span-6">
                            <BlogLists blogData={displayedData} />
                            <Pagination handlePageChange={handlePageChange} currentPage={currentPage} totalBlogs={totalBlogs} blogsPerPage={blogsPerPage} startIndex={startIndex} endIndex={endIndex} />
                        </div>

                        <div className=" col-span-3 space-y-10">
                            <UserProfile />
                            <FollowMe />
                            <FeaturedPosts />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
