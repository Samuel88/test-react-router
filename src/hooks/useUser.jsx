import { useEffect, useState } from "react";

const useUser = (id) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
            const json = await response.json();
            setUser(json);
        };

        fetchData();
    }, [id]);

    return [user];
};

export default useUser;