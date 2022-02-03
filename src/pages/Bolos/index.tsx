import { useCallback, useEffect, useState } from "react";
import { Header, Nav, Main, Footer, Loading, CarnesMain } from "components"; 
import * as S from "./style";
import { apiCarnes } from "services/data";
import { ICarnesData } from "Interface/Carnes.interface";
import { isTemplateExpression } from "typescript";
import { IBolosData } from "Interface/bolos.interface";


const Carnes = () => {
    const Home = () => {
        const [Bolos, setBolos] = useEffect<IBolosData[]>();
        const [isLoading, setIsLoading] = useState(true);
        
        
            useEffect (() => {
               async function fetchdata() {
                const response = await apiBolos.index()
                setBolos(response.data);
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
      
      export default    Bolos}