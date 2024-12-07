import { NavLink } from "react-router-dom";
import useUsers from "../hooks/useUsers";

const User = () => {
    const [users] = useUsers();

    return users.map(({id, name, email}) => (
        <div key={id}>
            <h3><NavLink to={'/user/' + id}>{name} - {email}</NavLink></h3>
        </div>
    ));
}
export default User;