import { Link } from "react-router-dom"
import './NotFound.css'

export const NotFound = () =>{
    return(
        <div className="notfound">
            <h1>404 Not Found</h1>
            <Link to="/">Click me to go back</Link>
        </div>
    )
}