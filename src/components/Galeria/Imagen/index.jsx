import styled from "styled-components";
import BotonIcono from "../../BotonIcono";

const Figure = styled.figure`
  width: ${(props) => (props.$expandida ? "90%" : "350px")};
  max-width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  & > img {
    max-width: 100%;
    border-radius: 20px 20px 0 0;
  }
  figcaption {
    background-color: #001634;
    border-radius: 0px 0px 20px 20px;
    color: white;
    box-sizing: border-box;
    padding: 12px;
    h3 {
      font-family: "GandhiSansBold";
    }
    h4 {
      flex-grow: 1;
    }
    h3,
    h4 {
      margin: 0;
      font-size: 16px;
    }
  }
`;

const Pie = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Imgen = ({
  foto,
  expandida = false,
  alSolicitarZoom,
  alternarFavorito,
}) => {

  const iconoFavorito = foto.favorita
    ? "/icons/favorito-activo.png"
    : "/icons/favorito.png";

  return (
    <Figure $expandida={expandida} id={`foto-${foto.id}`}>
      <img src={foto.path} alt={foto.alt} />
      <figcaption>
        <h3>{foto.titulo}</h3>
        <Pie>
          <h4>{foto.fuente}</h4>
          <BotonIcono onClick={() => alternarFavorito(foto)}>
            <img src={iconoFavorito} alt="Icono de favorito" />
          </BotonIcono>
          {!expandida && (
            <BotonIcono
              aria-hidden={expandida}
              onClick={() => alSolicitarZoom(foto)}
            >
              <img src="/icons/expandir.png" alt="Icono de expandir" />
            </BotonIcono>
          )}
        </Pie>
      </figcaption>
    </Figure>
  );
};
export default Imgen;
