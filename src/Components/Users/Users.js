import React, { useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowPerPage, setRowPerPage] = useState(3);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((json) => setUsers(json));
    }, []);

    let lastIndex = currentPage * rowPerPage;
    let firstIndex = lastIndex - rowPerPage;
    const handleRowPerPage = (e) => {
        if (e.target.value !== "all") {
            setCurrentPage(1);
            setRowPerPage(parseInt(e.target.value));
            localStorage.setItem("row-per-page", parseInt(e.target.value));
        } else {
            setCurrentPage(1);
            setRowPerPage(users.length);
            localStorage.setItem("row-per-page", users.length);
        }
    };
    useEffect(() => {
        if (localStorage.getItem("row-per-page")) {
            setRowPerPage(localStorage.getItem("row-per-page"));
        } else {
            localStorage.setItem("row-per-page", 3);
        }
    }, []);
    return (
        <div className="users">
            <h2>Total Users :</h2>
            <table>
                <tr>
                    <th>
                        <span>Name </span>
                        <span>
                            Sort By:
                            <select name="sort">
                                <option value="DEFAULT">DEFAULT</option>
                                <option value="ASC">ASC</option>
                                <option value="DESC">DESC</option>
                            </select>
                        </span>
                    </th>
                    <th>
                        <span>Email</span>
                        <span>
                            Sort By:
                            <select name="sort">
                                <option value="DEFAULT">DEFAULT</option>
                                <option value="ASC">ASC</option>
                                <option value="DESC">DESC</option>
                            </select>
                        </span>
                    </th>
                    <th>Website</th>
                </tr>

                {users.slice(firstIndex, lastIndex).map((x) => (
                    <tr>
                        <td>{x.name}</td>
                        <td>{x.email}</td>
                        <td>{x.website}</td>
                    </tr>
                ))}
                <tr>
                    <td>
                        <Pagination
                            total_number={users.length}
                            per_page={rowPerPage}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        ></Pagination>
                    </td>
                    <td>
                        Rows Per Page :&nbsp;
                        <select
                            name="row"
                            onChange={(e) => handleRowPerPage(e)}
                            value={rowPerPage}
                        >
                            <option value="3">3</option>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="all">All</option>
                        </select>
                    </td>
                    <td>
                        {`${firstIndex + 1} - ${
                            lastIndex > users.length ? users.length : lastIndex
                        }`}{" "}
                        of {`${users.length}`}
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default Users;
