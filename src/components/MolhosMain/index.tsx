import * as S from "./styles";
import molhos1 from "assets/img//molhos1.svg";
import molhos2 from "assets/img//molhos2.svg";
import molhos3 from "assets/img//molhos3.svg";
import molhos4 from "assets/img//molhos4.svg";


const MMain = () => {
    return (
        <S.MMain>

            <img src={molhos1} alt="imagem 1" />
            <img src={molhos2} alt="imagem 2" />
            <img src={molhos3} alt="imagem 3" />
            <img src={molhos4} alt="imagem 4" />
            

        </S.MMain>
    );
}

export default MMain;