import { useParams } from "react-router-dom"
import useUser from "../hooks/useUser";

const UserSingle = () => {
    const { id } = useParams();
    const [user] = useUser(id);

    return <pre>{JSON.stringify(user)}</pre>
};

export default UserSingle;