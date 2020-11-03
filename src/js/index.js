//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

//render your react application
let contadorSegundos = 0;
let contadorMinutos = 0;

let minutos = 0;
let horas = 0;

setInterval(function() {
	contadorSegundos += 1;
	contadorMinutos += 1;

	if (contadorSegundos % 60 == 0) {
		minutos += 1;
		contadorSegundos = 0;
	}

	if (contadorMinutos % 3600 == 0) {
		horas += 1;
		minutos = 0;
		contadorMinutos = 0;
	}

	ReactDOM.render(
		<Home seconds={contadorSegundos} minutes={minutos} hours={horas} />,
		document.querySelector("#app")
	);
}, 1 * 1000);
