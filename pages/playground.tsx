// import { useState } from "react";

// import styles from "../styles/pages/playground.module.scss";

// const Playground = () => {
// 	const [name, setName] = useState("");
// 	const [password, setPassword] = useState("");

// 	return (
// 		<div>
// 			<form
// 				className={styles.container}
// 				onSubmit={(e) => {
// 					e.preventDefault();
// 					console.log(name, password);
// 				}}
// 			>
// 				<label htmlFor="name">Name</label>
// 				<input
// 					type="text"
// 					name="name"
// 					value={name}
// 					onChange={(e) => {
// 						const value = e.target.value;
// 						setName(value);
// 					}}
// 					autoComplete="username"
// 				/>
// 				<label htmlFor="password">Password</label>
// 				<input
// 					type="password"
// 					autoComplete="new-password"
// 					aria-autocomplete="list"
// 					name="password"
// 					value={password}
// 					onChange={(e) => {
// 						const value = e.target.value;
// 						setPassword(value);
// 					}}
// 				/>
// 				<button type="submit">Submit</button>
// 			</form>
// 		</div>
// 	);
// };

// export default Playground;

import React from "react";
import { Formik, Field, Form } from "formik";

import styles from "../styles/pages/playground.module.scss";

const Playground = () => {
  return (
    <div>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          name: "",
          password: "",
        }}
        onSubmit={console.log}
      >
        <Form className={styles.container}>
          <label htmlFor="name">Name</label>
          <Field id="name" name="name" placeholder="Jane" />

          <label htmlFor="password">Password</label>
          <Field id="password" name="password" placeholder="Doe" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Playground;
