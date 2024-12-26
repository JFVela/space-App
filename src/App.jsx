import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Cabezaera from "./components/Cabecera";
import BarraLateral from "./components/BarraLateral";
import Banner from "./components/Banner";
import banner from "./assets/banner.png";
import Galeria from "./components/Galeria";
import fotos from "./fotos.json";
import { useState } from "react";
import ModalZoom from "./components/ModalZoom";

const FondoGradiente = styled.div`
  background: linear-gradient(
    175deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  padding: 30px;
`;

const MainContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const ContenidoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const App = () => {
  const [fotosGaleria, setFotosGaleria] = useState(fotos);
  const [fotoSeleccionada, setFotoSeleccionada] = useState(null);

  const cerrarModal = () => setFotoSeleccionada(null); // Función para cerrar el modal

  const alternarFavorito = (foto) => {
    setFotosGaleria((prevFotos) =>
      prevFotos.map(
        (f) => (f.id === foto.id ? { ...f, favorita: !f.favorita } : f) // Mantener el resto igual
      )
    );

    // Si la foto seleccionada es la que se está modificando, también actualiza su estado
    if (fotoSeleccionada?.id === foto.id) {
      setFotoSeleccionada({ ...foto, favorita: !foto.favorita });
    }
  };

  return (
    <>
      <FondoGradiente>
        <GlobalStyles />
        <AppContainer>
          <Cabezaera />
          <MainContainer>
            <BarraLateral />
            <ContenidoGaleria>
              <Banner
                texto="La galería más completa de fotos del espacio"
                backgroundImage={banner}
              />
              <Galeria
                alSeleccionar={(foto) => setFotoSeleccionada(foto)}
                fotos={fotosGaleria}
                alternarFavorito={alternarFavorito}
              />
            </ContenidoGaleria>
          </MainContainer>
        </AppContainer>
        {/* Pasar la función cerrarModal como prop */}
        <ModalZoom
          foto={fotoSeleccionada}
          close={cerrarModal}
          alternarFavorito={alternarFavorito}
        />
      </FondoGradiente>
    </>
  );
};

export default App;
