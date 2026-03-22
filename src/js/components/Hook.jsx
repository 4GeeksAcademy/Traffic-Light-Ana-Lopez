import React, { useState, useEffect, useContext } from "react"; //primer paso: importar el estado 

export const Hook = () => {

    // estado para la sombra
    const [sombra, setSombra] = useState("");

    const conSombra = () => {

        // si NO tiene sombra → se la añadimos
        if (sombra === "") {
            setSombra("sombra-amarilla");
        } else {
            // si ya tiene sombra → se la quitamos
            setSombra("");
        }
    };

    return (
        <>
            <h2>Botón con sombra</h2>

            <button 
                className={"btn btn-success " + sombra} 
                onClick={conSombra}
            >
                Click me
            </button>
        </>
    );
};