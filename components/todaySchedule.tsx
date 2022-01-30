import format from "date-fns/format";
import { useEffect, useState } from "react";

import { WEEKLY_SCHEDULE } from "../data/schedule";
import styles from "../styles/components/todaySchedule.module.scss";
import ScheduleGroup from "./scheduleGroup";

import type { ScheduleGroup as ScheduleGroupType } from "../models";

// to get today schedule from weekly schedule

const TodaySchedule = () => {
	const [todaySchedule, setTodaySchedule] = useState<ScheduleGroupType>();
	// const todaySchedule = state[0]
	// const setTodaySchedule = state[1]

	useEffect(() => {
		const todaySchedule = WEEKLY_SCHEDULE.find(
			// for example. Saturday
			(schedule) => schedule.title === format(new Date(), "EEEE")
		);
		setTodaySchedule(todaySchedule);
	}, []);

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Today</h2>
			<p>{format(new Date(), "PPPP")}</p>
			{todaySchedule ? (
				<ScheduleGroup
					title={todaySchedule.title}
					schedules={todaySchedule.schedules}
				/>
			) : (
				<p>Not found</p>
			)}
		</div>
	);
};

export default TodaySchedule;
