import { Key, ReactChild, ReactFragment, ReactPortal, useCallback, useEffect, useState } from "react";
import { Header, Nav, Main, Footer, Loading } from "components"; 
import * as S from "./style";
import { apiReceita } from "services/data";
import { IProjectData } from "Interface/receita.interface";
import { isTemplateExpression } from "typescript";
import Project from "components/Project";
import Receita from "services/data/Receita";


const Home = () => {
const [receita, setreceita] = useEffect<IReceitaData[]>();
const [isLoading, setIsLoading] = useState(true);


    useEffect (() => {
       async function fetchdata() {
        const response = await apiReceita.index()
        setreceita(response.data);
        setIsLoading(false);
        }
        fetchdata()
    }, [] )

    return (
        <>
        
           {isLoading ? (
        <Loading />
      ) : (
        <>

            <Header/>
            <Nav/>
            <Main/>

            {receita && receita.map((item: { id: Key | null | undefined; user: { email: string; }; receita: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) => (
             <Receita key={item.id} >
                <h4>{item.user.email.split("@")[0]}</h4>
                <p>{item.receita}</p>
            </Receita>
        ))}
            <Footer/>
            </>
      )}
    </>
  );
};

export default Home;