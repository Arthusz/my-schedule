import { useState } from "react";

const State = () => {
	const [count, setCount] = useState(0);

	// exercise: decrease count by 1
	// count should not be less than 0

	return (
		<div id="container">
			<h1>State Lesson</h1>
			<p>{count}</p>
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				Increase
			</button>
		</div>
	);
};

export default State;
