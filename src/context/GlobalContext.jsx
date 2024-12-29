import { createContext, useEffect, useReducer, useState } from "react";
import React from "react";

export const GlobalContext = createContext();

const initialState = {
  consulta: "",
  fotosGaleria: [],
  fotoSeleccionada: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CONSULTA":
      return {
        ...state,
        consulta: action.payload,
      };
    case "SET_FOTOS_GALERIA":
      return {
        ...state,
        fotosGaleria: action.payload,
      };
    case "SET_FOTO_SELECCIONADA":
      return {
        ...state,
        fotoSeleccionada: action.payload,
      };
    case "ALTERNAR_FAVORITO":
      return {
        ...state,
        fotosGaleria: state.fotosGaleria.map((f) =>
          f.id === action.payload.id ? { ...f, favorita: !f.favorita } : f
        ),
        fotoSeleccionada:
          state.fotoSeleccionada?.id === action.payload.id
            ? {
                ...state.fotoSeleccionada,
                favorita: !state.fotoSeleccionada.favorita,
              }
            : state.fotoSeleccionada,
      };
    default:
      return state;
  }
};

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const [consulta, setconsulta] = useState("");
  // const [fotosGaleria, setFotosGaleria] = useState([]);
  // const [fotoSeleccionada, setFotoSeleccionada] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://localhost:3000/fotos");
      const data = await res.json();
      //setFotosGaleria([...data]);
      dispatch({ type: "SET_FOTOS_GALERIA", payload: data });
    };
    setTimeout(() => getData(), 5000);
  }, []);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
