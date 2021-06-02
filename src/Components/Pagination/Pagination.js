import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({
    total_number,
    per_page,
    currentPage,
    setCurrentPage,
}) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(total_number / per_page); i++) {
        pageNumbers.push(i);
    }
    return (
        <div className="pagination">
            <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
            >
                Prev
            </button>
            <div>
                {pageNumbers.map((x) => (
                    <Link
                        onClick={() => setCurrentPage(x)}
                        className={currentPage === x ? "active" : undefined}
                    >
                        {x}
                    </Link>
                ))}
            </div>
            <button
                disabled={currentPage === Math.ceil(total_number / per_page)}
                onClick={() => setCurrentPage(currentPage + 1)}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
