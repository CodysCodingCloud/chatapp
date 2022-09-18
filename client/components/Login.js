import React, { useState } from "react";
import { _login, attemptPasswordLogin } from "../store/authSlice";
import { useDispatch } from "react-redux";
export default function Login() {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const token = window.localStorage.getItem("token");
	function handleFormData(event) {
		let name = event.target.name;
		let value = event.target.value;
		setFormData({ ...formData, [name]: value });
	}
	const dispatch = useDispatch();
	function onSubmit(ev) {
		ev.preventDefault();
		try {
			console.log("comp", formData);

			dispatch(attemptPasswordLogin(formData));
		} catch (err) {
			setError(err);
		}
	}

	return (
		<form className="login-form" onSubmit={onSubmit}>
			<label>
				email
				<input
					name="email"
					type="test"
					value={formData.email}
					onChange={(e) => handleFormData(e)}
				></input>
			</label>
			<label>
				password
				<input
					name="password"
					type="test"
					value={formData.password}
					onChange={(e) => handleFormData(e)}
				></input>
			</label>
			<button type="submit">login</button>
		</form>
	);
}
