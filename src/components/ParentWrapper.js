import React, { useEffect, createContext, useState } from "react";
import Tabs from "./Tabs";

export const ApiContext = createContext();

const ParentWrapper = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://www.nbcnewyork.com/wp-json/nbc/v1/template/home')
            .then(function (response) {
                return response.json()
            }).then(function (response) {
                // handle success
                setData(response?.template_items?.items);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])

    return (
        <ApiContext.Provider value={data}>
            <div>
                <Tabs />
            </div>
        </ApiContext.Provider>
    )
}

export default ParentWrapper;