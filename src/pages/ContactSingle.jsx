import { useParams } from "react-router-dom";

const ContactSingle = () => {
    const { id } = useParams();
    return <h1>{id}</h1>
}
export default ContactSingle;