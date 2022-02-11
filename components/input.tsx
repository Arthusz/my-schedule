import { HTMLInputTypeAttribute } from "react";
import { useField } from "formik";

import styles from "../styles/components/input.module.scss";

type InputProps = {
	name: string;
	label: string;
	type?: HTMLInputTypeAttribute;
};

const Input = ({ name, label, type = "text" }: InputProps) => {
	const [field, meta] = useField(name);

	return (
		<>
			<div className={styles.container}>
				{label && <label htmlFor={name}>{label}</label>}
				<input type={type} id={name} className={styles.input} {...field} />
				<p className={styles.error}>{meta.touched && meta.error}</p>
			</div>
		</>
	);
};

export default Input;
