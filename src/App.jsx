import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Cabezaera from "./components/Cabecera";
import BarraLateral from "./components/BarraLateral";
import Banner from "./components/Banner";
import banner from "./assets/banner.png";
import Galeria from "./components/Galeria";
import { useEffect, useState } from "react";
import ModalZoom from "./components/ModalZoom";
import Cargando from "./components/Cargando";

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
  const [consulta, setconsulta] = useState("");
  const [fotosGaleria, setFotosGaleria] = useState([]);
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

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://localhost:3000/fotos");
      const data = await res.json();
      setFotosGaleria([...data]);
    };
    setTimeout(() => getData(), 5000);
  }, []);

  return (
    <>
      <FondoGradiente>
        <GlobalStyles />
        <AppContainer>
          <Cabezaera setconsulta={setconsulta} />
          <MainContainer>
            <BarraLateral />
            <ContenidoGaleria>
              {/* <p>La consulta actual es: {consulta}</p> */}
              <Banner
                texto="La galería más completa de fotos del espacio"
                backgroundImage={banner}
              />
              {fotosGaleria.length == 0 ? (
                <Cargando></Cargando>
              ) : (
                <Galeria
                  alSeleccionar={(foto) => setFotoSeleccionada(foto)}
                  fotos={fotosGaleria}
                  alternarFavorito={alternarFavorito}
                  consulta={consulta}
                />
              )}
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
