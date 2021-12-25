import { useState, useEffect } from "react";

const useScreenSize = (): {width: number, height: number} => {
    const [size, setSize] = useState({width: 0, height: 0 });

    useEffect(() => {
        setSize({ width: window.innerWidth, height: window.innerHeight});
        window.addEventListener('resize', e => {
            setSize({ width: window.innerWidth , height: window.innerHeight});
        });
    }, []);

    return size;
};

export default useScreenSize;