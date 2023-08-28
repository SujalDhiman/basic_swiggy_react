import "./header.css"
import { Link } from "react-router-dom";

function Header(){
    return (
        <div className="head">
            <div className="left">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7dxyk4_uUW3vKfn0-ll5Tk11hIL2pUxhpvA&usqp=CAU" alt="Logo" height={"70px"}/>
            </div>
            <div className="mid">
                <Link to="/body"><li>Home</li> </Link>
                <li>Contact Us</li>
                <li>About Us</li>
                <li>Shop</li>
            </div>
            <div className="right">
                <li>Log In</li>
                <li>Sign Up</li>
            </div>
        </div>
    )
}

export default Header;