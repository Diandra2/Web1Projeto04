import {createGlobalStyle} from "styled-components"

export default createGlobalStyle`
* {
    margin: 0%;
    padding: 0;
    outline: 0%;
    box-sizing: border-box;
}
body {
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
}
`
export const colors = {
   beige : "#FEF1AF",
   black : "#0C0C0C",
   orange : "#E6A451",
   beigeback : "#E6A451"
}