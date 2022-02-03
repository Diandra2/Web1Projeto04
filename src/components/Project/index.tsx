import { IProject } from "Interface/receita.interface";
import * as S from "./styles";

const Project = ({ children }: IProject) => {
  return <S.Section>{children}</S.Section>;
};

export default Project;