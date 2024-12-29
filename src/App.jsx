import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Cabezaera from "./components/Cabecera";
import BarraLateral from "./components/BarraLateral";
import Banner from "./components/Banner";
import banner from "./assets/banner.png";
import Galeria from "./components/Galeria";
import ModalZoom from "./components/ModalZoom";
import GlobalContextProvider from "./context/GlobalContext";

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

  return (
    <>
      <FondoGradiente>
        <GlobalStyles />
        <GlobalContextProvider>
          <AppContainer>
            <Cabezaera />
            <MainContainer>
              <BarraLateral />
              <ContenidoGaleria>
                <Banner
                  texto="La galería más completa de fotos del espacio"
                  backgroundImage={banner}
                />
                <Galeria />
              </ContenidoGaleria>
            </MainContainer>
          </AppContainer>
          <ModalZoom />
        </GlobalContextProvider>
      </FondoGradiente>
    </>
  );
};

export default App;
