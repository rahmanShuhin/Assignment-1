import React, { createContext, useEffect, useState } from "react";
export const loadData = createContext();

export const DataContext = (props) => {
    const [data, setData] = useState([]);
    const [profile, setProfile] = useState(2);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((json) => setData(json));
    }, []);
    return (
        <loadData.Provider value={[data, profile]}>
            {props.children}
        </loadData.Provider>
    );
};
