import { Link } from "react-router-dom"
const Foot = ({ text }) => {
    return (
        <footer>
            <p>{text}</p>
            <Link to="/about">about</Link>

        </footer>
    )
}

export default Foot