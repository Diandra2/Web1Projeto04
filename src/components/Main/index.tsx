import * as S from "./styles";
import img1 from "assets/img//img 1..1.svg";
import img2 from "assets/img//img 1..2.svg";
import img3 from "assets/img//img 1..3.svg";
import paes from "assets/img//paes.svg";
import img5 from "assets/img//img 2..2.svg";
import img6 from "assets/img//img 2..3.svg";


const Main = () => {
    return (
        <S.Main>

            <img src={img1} alt="imagem 1" />
            <img src={img2} alt="imagem 2" />
            <img src={img3} alt="imagem 3" />
            <img src={paes} alt="imagem 4" />
            <img src={img5} alt="imagem 5" />
            <img src={img6} alt="imagem 6" />






        </S.Main>
    );
}

export default Main;