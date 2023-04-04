import React from "react";
import Profilephoto from "./profile-pic.jpg";
import Avatar from "@mui/material/Avatar";
import { Container, Typography } from "@mui/material";

function Biography() {
    return(
        <>
        <Container maxWidth="md" sx={{marginTop:20}}>
        <Avatar src={Profilephoto} alt="Sueli Campos" sx={{width:250, height:250, margin:"auto" }}/>   
            <Typography variant="h3" color="textPrimary">Sueli Campos</Typography>
            <Typography variant="p" color="textSecondary">Graduada em Marketing, atuou por 25 anos em Promoção & Merchandising, empresária há 15 anos no segmento de franquias, onde especializou-se nas relações franqueadora/franqueado. Consultora em formatação e suporte para micro franquias e negócios. Ministra palestras e workshops sobre empreendedorismo, gestão de negócio, liderança e trabalho em equipe. Apresentadora do quadro Franquia em Foco – No programa de Tv Agora que São Elas, pela NGT canal 48 e 12.1 na Capital e RJ canal 26,para outros estados acesse www.redengt.com.br Co-Autora no livro: Treinamentos Comportamentais – Ed.Ser Mais – onde aborda a importância do desenvolvimento de habilidades e competências para alta performance de equipes. Co Autora na Série Quais de Mim Você Procura – Ed. Agora que São Elas – Onde aborda o Universo feminino, histórias de inspiração de 50 mulheres empreendedoras.</Typography>
        </Container>
        </>

    );
}

export default Biography;