import styled from "styled-components";
import ItemNavegacion from "./ItemNavegacion";

const ListaEstilizada = styled.div`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const BarraLateral = () => {
  return (
    <aside>
      <nav>
        <ListaEstilizada>
          <ItemNavegacion
            iconActivo="icons/home1.png"
            IconoInactivo="icons/home2.png"
            activo
          >
            Inicio
          </ItemNavegacion>
          <ItemNavegacion
            iconActivo="icons/view1.png"
            IconoInactivo="icons/view2.png">
            Más Vistas
          </ItemNavegacion>
          <ItemNavegacion
            iconActivo="icons/like1.png"
            IconoInactivo="icons/like2.png">
            Más Me Gusta
          </ItemNavegacion>
          <ItemNavegacion
            iconActivo="icons/new1.png"
            IconoInactivo="icons/new2.png">
            Nuevas
          </ItemNavegacion>
          <ItemNavegacion
            iconActivo="icons/amazing1.png"
            IconoInactivo="icons/amazing2.png">
            Sorpréndeme
          </ItemNavegacion>
        </ListaEstilizada>
      </nav>
    </aside>
  );
};

export default BarraLateral;
