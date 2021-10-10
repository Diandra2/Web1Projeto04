import * as S from "./styles";
import logo from "assets/img//web 2 1.svg";

const Header = () => {
    return (
        <S.Header>

            <picture> 
                <img src={logo} alt="logo do site" />
            </picture>

            <text>
                <h1>
                    Receitas da Vovó 
                </h1>
            </text>
        </S.Header>
    );
}

export default Header