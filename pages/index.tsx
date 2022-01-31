import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home: NextPage = () => {
	const router = useRouter();

	useEffect(() => {
		router.push("/schedules");
	}, []);

	return <div>Should not reach here.</div>;
};

export default Home;
