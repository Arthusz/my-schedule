import React, { useState } from "react";

const State = () => {
	const [count, setCount] = useState(0);
	const [note, setNote] = useState("Default Note");
	const [notes, setNotes] = useState<string[]>([]);
	const [error, setError] = useState("");

	const onIncrease = function () {
		setCount(count + 1);
	};

	const onDecrease = () => {
		if (count > 0) setCount(count - 1);
		else console.log("Cannot decrease below 0");
	};

	const onChangeNote = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNote(e.target.value);
	};

	const onResetNote = () => {
		setNote("");
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// "  example string  " --> trimmed "example string"
		if (note.trim() === "") {
			setError("Note cannot be empty");
			return;
		}
		setError("");
		setNotes([...notes, note]);
	};

	return (
		<div id="container">
			<h1>State Lesson</h1>

			<h2>Button Count</h2>

			<p>{count}</p>
			<button onClick={onIncrease}>Increase</button>
			<button onClick={onDecrease}>Decrease</button>

			<hr />

			<h2>Input - Notes</h2>
			<h3>Saved Notes:</h3>

			<ul>
				{notes.map((note, index) => (
					<li key={index}>{note}</li>
				))}
			</ul>
			<p>Current Note: {note}</p>
			<form onSubmit={onSubmit}>
				<label htmlFor="noteInput">Note:</label>
				<input
					type="text"
					name="noteInput"
					id="noteInput"
					value={note}
					onChange={onChangeNote}
				/>
				<span style={{ color: "red" }}>{error}</span>
				<button onClick={onResetNote} type="button">
					Reset note
				</button>
				<button type="submit">Add note</button>
			</form>
		</div>
	);
};

export default State;
