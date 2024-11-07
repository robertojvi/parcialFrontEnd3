import React from "react";
import './Card.css';

const Card = ({ input1, input2, input3, input4 }) => {
	return (
		<div
			className="card-wrapper"
		>
			<div className="card-container">
            <h2>Información Ingresada</h2>
			<p>
				<strong>Nombre:</strong> {input1}
			</p>
			<p>
				<strong>Apellidos:</strong> {input2}
			</p>
            <p>
				<strong>Lenguaje de Programacion:</strong> {input3}
			</p>
            <p>
				<strong>Proyecto:</strong> {input4}
			</p>
            </div>
		</div>
	);
};

export default Card;
