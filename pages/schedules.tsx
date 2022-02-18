import Head from "next/head";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useSWR from "swr";

import Nav from "../components/nav";
import TodaySchedule from "../components/todaySchedule";
import WeeklySchedule from "../components/weeklySchedule";
import { hideLoading, showLoading } from "../store/features/loadingSlice";
import styles from "../styles/pages/schedule.module.scss";

import type { ScheduleGroup } from "../models";

const Schedule = () => {
	const { data, error } = useSWR<ScheduleGroup[]>("/schedules");
	const dispatch = useDispatch();

	useEffect(() => {
		if (!data) dispatch(showLoading());
		else dispatch(hideLoading());
	}, [data]);

	return (
		<div>
			<Head>
				<title>Schedule - ZTM Schedule</title>
			</Head>
			<Nav />
			<div className={styles.container}>
				{!data ? (
					<div>Loading...</div>
				) : (
					<>
						<TodaySchedule scheduleGroups={data} />
						<WeeklySchedule scheduleGroups={data} />
					</>
				)}
			</div>
		</div>
	);
};

export default Schedule;
