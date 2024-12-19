import { Link } from "react-router-dom"

const Navbar = () =>{
    return(
        <header>
            <div className="container">
                <Link to = "/api/projects">
                    <h1>PROJECTS</h1>
                </Link>
            </div>
        </header>
    )
}

export default Navbar