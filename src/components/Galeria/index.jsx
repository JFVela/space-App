import styled from "styled-components";
import Titulo from "../Titulo";
import Tag from "./Tag";
import Populares from "./Populares";
import Imgen from "./Imagen";

const GaleriaContainer = styled.div`
  display: flex;
  gap: 24px;
`;
const SeccionFluida = styled.section`
  flex-grow: 1;
`;

const ImagenesContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 24px;
`;

const Galeria = ({ fotos = [], alSeleccionar, alternarFavorito }) => {
  return (
    <>
      <Tag />
      <GaleriaContainer>
        <SeccionFluida>
          <Titulo>Navegue por la galeria</Titulo>
          <ImagenesContainer>
            {fotos.map((foto) => {
              return (
                <Imgen
                  alternarFavorito={alternarFavorito}
                  alSolicitarZoom={alSeleccionar}
                  key={foto.id}
                  foto={foto}
                />
              );
            })}
          </ImagenesContainer>
        </SeccionFluida>
        <Populares />
      </GaleriaContainer>
    </>
  );
};

export default Galeria;
