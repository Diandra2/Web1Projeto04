import * as S from "./styles";
import bolo1 from "assets/img//bolo1.svg";
import bolo2 from "assets/img//bolo2.svg";
import bolo3 from "assets/img//bolo3.svg";
import bolo4 from "assets/img//bolo4.svg";

const BMain = () => {
    return (
        <S.BMain>
            <img src={bolo1} alt="imagem 1" />
            <img src={bolo2} alt="imagem 2" />
            <img src={bolo3} alt="imagem 3" />
            <img src={bolo4} alt="imagem 4" />
        </S.BMain>
    );
}

export default BMain;