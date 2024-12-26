import styled from "styled-components";

const Titulo = styled.h2`
  font-size: 32px;
  font-weight: 400;
  color: #7B78E5;
  text-align: ${props => props.$align ? props.$align : "left"};
`;

export default Titulo;