import * as S from "./styles";
import { Link } from "react-router-dom";
import redesocial from "assets/img/redesocial.png";

const Footer = () => {
    return (
        <S.Footer>

            <div> &copy; CopyLeft </div>
                <picture>
            
                    <S.A href="https://facebook.com/" target="_blank">
                        <img src={redesocial} alt="Instagram e Facebook" />
                    </S.A>

                </picture>
      </S.Footer>
    );
}

export default Footer