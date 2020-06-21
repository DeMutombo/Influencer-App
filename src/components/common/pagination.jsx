import React from "react";
import _ from "lodash";

const Pagination = (props) => {
  const { itemCount, pageSize, currentPage, onPageChange } = props;
  //   const pagesCount = itemCount / pageSize;
  const pagesCount = Math.ceil(itemCount / pageSize); // use Math.ceil to convert the floating pint number to the nearest interger
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination mt-3">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a
              onClick={() => onPageChange(page)}
              className="page-link"
              href="#"
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
