import { useCallback, useEffect, useState } from "react";
import { Header, Nav, Main, Footer, Loading, CarnesMain } from "components"; 
import * as S from "./style";
import { apiCarnes } from "services/data";
import { ICarnesData } from "Interface/Carnes.interface";
import { isTemplateExpression } from "typescript";


const Carnes = () => {
    const Home = () => {
        const [Carnes, setCarnes] = useEffect<ICarnesData[]>();
        const [isLoading, setIsLoading] = useState(true);
        
        
            useEffect (() => {
               async function fetchdata() {
                const response = await apiCarnes.index()
                setCarnes(response.data);
                setIsLoading(false);
                }
                fetchdata()
            }, [] )
    return (
        <>
        {isLoading ? (
                <Loading />
                
        ) :(
            <>
            <Header/>
            <Nav/>
            <CarnesMain/>
            <Footer/>
            </>
            )}
          </>
        );
      };
      
      export default Carnes}
