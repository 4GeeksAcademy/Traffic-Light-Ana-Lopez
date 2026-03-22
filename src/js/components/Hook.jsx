import React, { useState, useEffect, useContext } from "react"; //primer paso: importar el estado 


export const Hook = () => {

    // guardamos qué botón tiene sombra
    const [sombra, setSombra] = useState("");

    const conSombra = (boton) => {

        if (sombra === boton) {
            setSombra(""); // quitar sombra si ya estaba
        } else {
            setSombra(boton); // poner sombra a ese botón
        }
    };

    return (
        <>

            <div className="container px-4 text-center">
                <div className="row gx-5">
                    <div className="col">
                        <div className="p-3"><button
                            className={"btn btn-danger " + (sombra === "btn1" ? "sombra-amarilla" : "")}
                            onClick={() => conSombra("btn1")}
                        >
                        </button>
                        </div>
                    </div>
                    <div clasNames="col">
                        <div className="p-3"><button
                            className={"btn btn-warning " + (sombra === "btn2" ? "sombra-amarilla" : "")}
                            onClick={() => conSombra("btn2")}
                        >
                        </button></div>
                    </div>
                    <div className="col">
                        <div className="p-3"> <button
                            className={"btn btn-success " + (sombra === "btn3" ? "sombra-amarilla" : "")}
                            onClick={() => conSombra("btn3")}
                        >
                        </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};