import styled from "styled-components";
import Titulo from "../Titulo";
import Tag from "./Tag";
import Populares from "./Populares";
import Imagen from "./Imagen";

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

const Galeria = ({ fotos = [], alSeleccionar, alternarFavorito, consulta }) => {
  return (
    <>
      <Tag />
      <GaleriaContainer>
        <SeccionFluida>
          <Titulo>Navegue por la galeria</Titulo>
          <ImagenesContainer>
            {fotos
              .filter((foto) => {
                return (
                  consulta === "" ||
                  foto.titulo
                    .toLocaleLowerCase()
                    .normalize("NFD")
                    .replace(/\p{Diacritic}/gu, "")
                    .includes(
                      consulta
                        .toLocaleLowerCase()
                        .normalize("NFD")
                        .replace(/\p{Diacritic}/gu, "")
                    )
                );
              })
              .map((foto) => (
                <Imagen
                  alternarFavorito={alternarFavorito}
                  alSolicitarZoom={alSeleccionar}
                  key={foto.id}
                  foto={foto}
                />
              ))}
          </ImagenesContainer>
        </SeccionFluida>
        <Populares />
      </GaleriaContainer>
    </>
  );
};

export default Galeria;
