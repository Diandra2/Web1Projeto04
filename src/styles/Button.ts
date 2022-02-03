import { ButtonProps } from "Interface/style.interface";
import styled, { css } from "styled-components";
import { colors } from "./GlobalStyle";

const colorVariations = {
  default: css`
    background-color: ${colors.beigeback};
    outline: 0.2rem outset ${colors.beigeback};
  `,
  edit: css`
    background-color: ${colors.beigeback};
    outline: 0.2rem outset ${colors.beigeback};
  `,
  remove: css`
    background-color: ${colors.beigeback};
    outline: 0.2rem outset ${colors.beigeback};
  `
}

const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  margin: auto;
  border: 0;
  border-radius: 0.3rem;
  color: ${colors.beigeback};
  font-weight: bold;
  padding: 0.3rem;
  cursor: pointer;
  svg {
    width: 2rem;
    height: 2rem;
  }
  ${(props) => colorVariations[props.bgColor || "default"]}
`

export default Button;