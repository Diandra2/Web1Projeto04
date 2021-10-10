import { Home, Bolos, Carnes, Molhos } from "pages";
import { Link } from "react-router-dom";
import * as S from "./styles";

const Nav = () => {
    return (
        <S.Nav>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/Bolos">Bolos</Link>
                </li>
                <li>
                     <Link to="/Carnes">Carnes</Link> 
                </li>
                 <li>
                     <Link to="/Molhos">Molhos</Link>
                </li>
      
            </ul>
        </S.Nav>
    );
}

export default Nav