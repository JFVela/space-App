import styled from "styled-components";
import Titulo from "../Titulo";
import Tag from "./Tag";
import Populares from "./Populares";
import Imagen from "./Imagen";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import Cargando from "../Cargando";

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

const Galeria = () => {
  //const { fotosGaleria, consulta, alternarFavorito, setFotoSeleccionada } =useContext(GlobalContext);
  const { state } = useContext(GlobalContext);

  return state.fotosGaleria.length === 0 ? (
    <Cargando></Cargando>
  ) : (
    <>
      <Tag />
      <GaleriaContainer>
        <SeccionFluida>
          <Titulo>Navegue por la galeria</Titulo>
          <ImagenesContainer>
            {state.fotosGaleria
              .filter((foto) => {
                return (
                  state.consulta === "" ||
                  foto.titulo
                    .toLocaleLowerCase()
                    .normalize("NFD")
                    .replace(/\p{Diacritic}/gu, "")
                    .includes(
                      state.consulta
                        .toLocaleLowerCase()
                        .normalize("NFD")
                        .replace(/\p{Diacritic}/gu, "")
                    )
                );
              })
              .map((foto) => (
                <Imagen key={foto.id} foto={foto} />
              ))}
          </ImagenesContainer>
        </SeccionFluida>
        <Populares />
      </GaleriaContainer>
    </>
  );
};

export default Galeria;
