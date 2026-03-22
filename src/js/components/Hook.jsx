import React, { useState, useEffect, useContext } from "react"; 

export const Hook = () => {

    
    const [sombra, setSombra] = useState("");

    const conSombra = (boton) => {

        if (sombra === boton) {
            setSombra("");
        } else {
            setSombra(boton); git 
        }
    };

    return (
        <>
            <div className="text-center bg-dark hang">
            </div>
            <div className="container text-center bg-dark main p-3 rounded-3">
                <div className="row">
                    <div className="col p-2">
                        <div className><button
                            className={"btn btn-danger rounded-circle "  + (sombra === "btn1" ? "sombra-amarilla" : "")}
                            onClick={() => conSombra("btn1")}
                            style={{ width: "80px", height: "80px" }}
                        >
                        </button>
                        </div>
                    </div>
                    <div clasNames="col p-2">
                        <div className><button
                            className={"btn btn-warning rounded-circle " + (sombra === "btn2" ? "sombra-amarilla" : "")}
                            onClick={() => conSombra("btn2")}
                            style={{ width: "80px", height: "80px" }}
                        >
                        </button></div>
                    </div>
                    <div className="col p-2">
                        <div className> <button
                            className={"btn btn-success rounded-circle " + (sombra === "btn3" ? "sombra-amarilla" : "")}
                            onClick={() => conSombra("btn3")}
                            style={{ width: "80px", height: "80px" }}
                        >
                        </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};