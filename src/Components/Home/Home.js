import React, { useContext, useState } from "react";
import Card from "../Card/Card";
import { loadData } from "../Context/DataContext";

const Home = () => {
    const [load, setLoad] = useState(10);
    const [data] = useContext(loadData);

    console.log(data);
    return (
        <div className="home">
            <div className="home__posts">
                {data.slice(0, load).map((x) => (
                    <Card x={x}></Card>
                ))}
            </div>

            <div>
                {data.length !== load && (
                    <button
                        className="button__basic"
                        onClick={() => setLoad(load + 10)}
                    >
                        Load more
                    </button>
                )}
            </div>
        </div>
    );
};

export default Home;
