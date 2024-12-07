import { useEffect, useState } from "react";

const useUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const json = await response.json();
            setUsers(json);
        };

        fetchData();
    }, []);

    return [users];
};

export default useUsers;