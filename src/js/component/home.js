import React from "react";

//create your first component
export function Home(props) {
	// console.log(props);

	return (
		<>
			<div className="box">
				<div className="contador">
					<i className="far fa-clock fa-5x" />
				</div>

				<div className="contador">
					<h1>Horas</h1>
					<h1>{props.hours}</h1>
				</div>
				<div className="contador">
					<h1>Minutos</h1>
					<h1>{props.minutes}</h1>
				</div>
				<div className="contador">
					<h1>Segundos</h1>
					<h1>{props.seconds}</h1>
				</div>
			</div>
		</>
	);
}
