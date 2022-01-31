import Head from "next/head";

import Nav from "../components/nav";
import TodaySchedule from "../components/todaySchedule";
import WeeklySchedule from "../components/weeklySchedule";
import { WEEKLY_SCHEDULE } from "../data/schedule";
import styles from "../styles/pages/schedule.module.scss";

const Schedule = () => {
	return (
		<div>
			<Head>
				<title>Schedule - ZTM Schedule</title>
			</Head>
			<Nav />
			<div className={styles.container}>
				<TodaySchedule />
				<WeeklySchedule scheduleGroups={WEEKLY_SCHEDULE} />
			</div>
		</div>
	);
};

export default Schedule;
