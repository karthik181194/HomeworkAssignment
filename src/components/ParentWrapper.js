import React, { useEffect, createContext, useState } from "react";
import Tabs from "./Tabs";
import _ from 'lodash';

export const ApiContext = createContext();

const ParentWrapper = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = () => {
            fetch('https://www.nbcnewyork.com/wp-json/nbc/v1/template/home')
                .then(response => response.json())
                .then(response => {
                    // handle success
                    if (!_.isEqual(data, response?.template_items?.items)) {
                        setData(response?.template_items?.items);
                    }
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        }
        if (data.length === 0) {
            fetchData();
        }
        const intervalCall = setInterval(() => {
            fetchData();
        }, (30 * 60 * 1000)); // 30 minutes interval
        return () => {
            // clean up
            clearInterval(intervalCall);
        };
    }, [data])

    return (
        <ApiContext.Provider value={data}>
            <div>
                <Tabs />
            </div>
        </ApiContext.Provider>
    )
}

export default ParentWrapper;