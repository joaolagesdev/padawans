import Typography from "@material-ui/core/Typography/Typography";
import React from "react";

const TextContentMain: React.FC = () => {
  return (
    <>
      <Typography paragraph>Seja bem-vindo!</Typography>
      <Typography paragraph>
        Você acabou de acessar o teste realizado pelo João Artur para o programa
        de estágio <strong>FRAMEWORK PADAWANS!</strong>
      </Typography>
      <Typography paragraph>
        <strong>NAVEGUE</strong> pela <strong>BARRA LATERAL</strong> à esquerda para acessar o menu da
        aplicação.
      </Typography>
    </>
  );
};

export default TextContentMain;
