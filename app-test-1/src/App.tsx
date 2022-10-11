import React from "react";
import { Formularios } from "./components/formularios";
//import { ObjetosLiterales } from "./typescript/ObjetosLiterales";
//import { TiposBasicos } from "./typescript/TiposBasicos";
//import { Contador } from "./components/Contador";
//import { ContadorHook } from "./components/ContadorHook";
//import { Login } from "./components/Login";
//import { Usuarios } from "./components/Usuarios";
const App = () => {
    return(
    <div>
      <h1>Introduccion a Type Script Whit React</h1><hr />
      {/*<TiposBasicos></TiposBasicos>*/}
      {/*<ObjetosLiterales></ObjetosLiterales>*/}
      {/*<Contador></Contador>*/}
      {/*<ContadorHook></ContadorHook>*/}
      {/*<Login></Login>*/}
      {/*<Usuarios></Usuarios>*/}
      {<Formularios></Formularios>}
    </div>
  )
}
export default App;
