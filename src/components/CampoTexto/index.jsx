import styled from "styled-components";
import search from "./search.png";
import { useContext, useRef } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const ContainerEstilizado = styled.div`
  position: relative;
  display: inline-block;
  width: 566px;
`;

const CampoTextoEstilizado = styled.input`
  height: 56px;
  padding: 12px 50px 12px 16px; /* Ajustamos espacio derecho para la lupa */
  border-radius: 10px;
  border: 2px solid #c98cf1;
  background: transparent;
  box-sizing: border-box;
  width: 100%; /* Para que use el ancho completo del contenedor */
  color: #d9d9d9;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
`;

const IconoLupa = styled.img`
  position: absolute;
  top: 50%; /* Centrado vertical */
  right: 12px; /* Separación al borde derecho */
  transform: translateY(-50%); /* Centrado vertical ajustado */
  max-width: 30px;
`;

const CampoTexto = () => {
  const cajaConsulta = useRef(null);
  const { dispatch } = useContext(GlobalContext);

  return (
    <ContainerEstilizado>
      <CampoTextoEstilizado
        ref={cajaConsulta}
        type="text"
        placeholder="Busca una foto"
      />
      <IconoLupa
        src={search}
        alt="ícono de lupa"
        onClick={() => {
          dispatch({
            type: "SET_CONSULTA",
            payload: cajaConsulta.current.value,
          });
        }}
      />
    </ContainerEstilizado>
  );
};

export default CampoTexto;
