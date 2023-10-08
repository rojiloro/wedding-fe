import React from "react";

function Pagination({ totalPosts, postsPerPage }) {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <>
    <div>
      pagination
    </div>
      <div>
        {pages.map((page, index) => (
          <button className="bg-red-600 text-white text-2xl" key={index}>
            {page}
          </button>
        ))}
      </div>
    </>
  );
}

export default Pagination;
