import { useEffect, useState } from "react"


export const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState<number>();

    useEffect(() => {
        setWindowWidth(window.innerWidth);
    }, []);

    return windowWidth;
}

