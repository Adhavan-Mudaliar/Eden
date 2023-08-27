import { css } from "styled-components"
import { Interpolation } from "styled-components/dist/types";

export const mobile = (props:Interpolation<any>)=>{
    return css`
    @media only screen and (max-width: 426px){
         ${props}
    }
    `;
}