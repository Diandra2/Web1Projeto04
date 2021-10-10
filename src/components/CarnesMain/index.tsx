import * as S from "./styles";
import carnes1 from "assets/img//carnes1.svg";
import carnes2 from "assets/img//carnes2.svg";
import carnes3 from "assets/img//carnes3.svg";
import carnes4 from "assets/img//carnes4.svg";

const CMain = () => {
    return (
        <S.CMain>
            <img src={carnes1} alt="imagem 1" />
            <img src={carnes2} alt="imagem 2" />
            <img src={carnes3} alt="imagem 3" />
            <img src={carnes4} alt="imagem 4" />
        </S.CMain>
    );
}

export default CMain;