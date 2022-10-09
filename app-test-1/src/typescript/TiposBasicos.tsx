import React from "react";

export const TiposBasicos = () => {
    const CONombre: string  = "Carlos";
    const COApellidos: string = "Ochoa";
    const COnoControl: number = 17401034;
    const COrechaReg: Date = new Date();
    let COExperiencia = 10;
    let COActivo: boolean = true;
    let COPasatiempos: String[] = ['Ciclismo','Escuchar musica','Salir en RZR'];
    let COLibros = [];
    COLibros.push(706);
    COLibros.push(true);
    COLibros.push('El Principito');

    return(
        <>
        <h3>Tipos basicos</h3>
        {CONombre},
        <br />
        {COApellidos},
        <br />
        {COnoControl},
        <br />
        {COrechaReg.toString()},
        <br />
        {COExperiencia},
        <br />
        {(COActivo) ? 'Activo' : 'No Activo'},
        <br />
        Libros : {COLibros[0]},
                    {(COLibros[1]) ? 'Activo' : 'No Activo'},
                    {COLibros[2]}
        </>
    )
}