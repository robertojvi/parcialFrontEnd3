import React, { useState } from "react";
import Card from "./Card";
import "./Formulario.css";

const Formulario = () => {
	const [input1, setInput1] = useState("");
	const [input2, setInput2] = useState("");
	const [input3, setInput3] = useState("");
	const [input4, setInput4] = useState("");
	const [error, setError] = useState(false);
	const [submitted, setSubmitted] = useState(false);

	const handleInput1Change = (e) => {
		setInput1(e.target.value);
	};

	const handleInput2Change = (e) => {
		setInput2(e.target.value);
	};

	const handleInput3Change = (e) => {
		setInput3(e.target.value);
	};

	const handleInput4Change = (e) => {
		setInput4(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Validación de input1: mínimo 3 caracteres y sin espacios al comienzo
		if (input1.trim().length < 3 || input1.startsWith(" ")) {
			setError(true);
			setSubmitted(false);
			return;
		}

		// Validación de input2: al menos 6 caracteres
		if (input2.length < 6) {
			setError(true);
			setSubmitted(false);
			return;
		}

		// Validación de input3: mínimo 1 caracter y sin espacios al comienzo
		if (input1.trim().length < 1 || input3.startsWith(" ")) {
			setError(true);
			setSubmitted(false);
			return;
		}

		// Validación de input4: al menos 6 caracteres
		if (input4.length < 6) {
			setError(true);
			setSubmitted(false);
			return;
		}

		// Si las validaciones son correctas
		setError(false);
		setSubmitted(true);
	};

	return (
		<div className="form-wrapper">
			<div className="form-container">
				<form onSubmit={handleSubmit}>
					<div>
						<label htmlFor="input1">Ingresa tu Nombre: </label>
						<input
							type="text"
							id="input1"
							value={input1}
							onChange={handleInput1Change}
						/>
					</div>
					<div>
						<label htmlFor="input2">Ingresa tus Apellidos: </label>
						<input
							type="text"
							id="input2"
							value={input2}
							onChange={handleInput2Change}
						/>
					</div>
					<div>
						<label htmlFor="input3">Lenguaje de Programación Preferido: </label>
						<input
							type="text"
							id="input3"
							value={input3}
							onChange={handleInput3Change}
						/>
					</div>
					<div>
						<label htmlFor="input4">Nombra un proyecto realizado: </label>
						<input
							type="text"
							id="input4"
							value={input4}
							onChange={handleInput4Change}
						/>
					</div>
					<button type="submit">Enviar</button>
				</form>

				{error && (
					<h3 style={{ color: "red" }}>
						Por favor verifica que la información ingresada sea correcta
					</h3>
				)}

				{submitted && (
					<Card
						input1={input1}
						input2={input2}
						input3={input3}
						input4={input4}
					/>
				)}
			</div>
		</div>
	);
};

export default Formulario;
