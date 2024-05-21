import Link from "next/link"
import { LuBird } from "react-icons/lu";

const Header  = () => {
    return (
        <header>
            <div  className="company-name"><LuBird />Malinur</div>
            <nav>
                <Link href={"/"}>Home</Link>
                <Link href={"/pages/reviews"}>Reviews</Link>
                <Link href={"/pages/teachers"}>Teachers</Link>
            </nav>
        </header>
    )
} 
export default Header