import React from "react";
import _ from "lodash";

function Pagination({ reposCount, onPageChange, currentPage, pageSize }) {
    const pagesCount = Math.ceil(reposCount / pageSize);
    if (pagesCount === 1) return null;

    const pages = _.range(1, pagesCount + 1);
    // const pages [];
    // for (let i = 0; i < pagesCount; i++) {
    //     pages.push(i + 1);
    // }
    return (
        <nav aria-label="...">
            <ul className="pagination pagination-sm">
                {pages.map((page) => {
                    const itemClass =
                        page === currentPage
                            ? "page-item  active"
                            : "page-item ";
                    return (
                        <li
                            key={page}
                            className={itemClass}
                            aria-current="page"
                        >
                            <span
                                style={{ cursor: "pointer" }}
                                onClick={() => onPageChange(page)}
                                className="page-link"
                            >
                                {page}
                            </span>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default Pagination;
