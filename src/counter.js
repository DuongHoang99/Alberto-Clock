import { useEffect, useState } from "react";
import { IoPeople } from "react-icons/io5";

export default function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {

        const storeCount = localStorage["pageVisit"];

        if (storeCount) {
            setCount(Number(storeCount) || 0);
        }

        setCount((prevPageViews) => {
            const newPageViews = prevPageViews + 1;
            localStorage.setItem('pageVisit', newPageViews);
            return newPageViews;
        });

        console.log(`count = ${localStorage["pageVisit"]}`);
    }, []);



    return (
        <div style={{fontSize:"17px", color:"black" }}> <IoPeople />{count} </div>

    )
}