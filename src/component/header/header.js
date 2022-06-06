import { Link } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import SearchBar from "../seacrh/search";
export default function Header() {
    const {bgColor, changeColor} = useTheme();
    return (
        <header className="header" style={{background: bgColor, color : "black"}}>
            <div className="container">
                <Link className="logo" to="/">SV BLOG</Link>
                <SearchBar />
                <nav className="nav">
                    <ul>
                        <li><Link to="/">Anasayfa</Link></li>
                        <li><Link to="/create">Yeni Yazı</Link></li>
                    </ul>
                </nav>
            </div>
        </header>

    )
}
