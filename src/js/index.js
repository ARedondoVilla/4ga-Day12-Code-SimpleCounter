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
let contador = 0;

setInterval(function() {
	contador += 1;
	console.log("Otro segundo", contador);
	let name = "Hello Rigo!";

	let time;

	if (contador == 1) {
		time = "segundo";
	} else {
		time = "segundos";
	}
	ReactDOM.render(
		<Home seconds={contador} texto={name} formato={time} />,
		document.querySelector("#app")
	);
}, 1 * 1000);
