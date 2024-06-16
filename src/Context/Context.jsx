import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";

// Definimos el estado inicial
const initialState = {
  dentists: [],
  theme: "light", // o "dark"
};

// Creamos el contexto
const DentistContext = createContext(initialState);

// Reducer para manejar las acciones del contexto
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DENTISTS":
      return {
        ...state,
        dentists: action.payload,
      };
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // URL de la API
  const url = "https://jsonplaceholder.typicode.com/users";

  // Obtenemos los datos de los dentistas al montar el componente
  useEffect(() => {
    axios(url)
      .then((res) => {
        dispatch({ type: "SET_DENTISTS", payload: res.data });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <DentistContext.Provider value={{ state, dispatch }}>
      {children}
    </DentistContext.Provider>
  );
};

// Hook para usar el contexto
export const useDentistContext = () => {
  return useContext(DentistContext);
};

export default ContextProvider;
