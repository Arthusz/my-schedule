import { WEEKLY_SCHEDULE } from "../data/schedule";
import styles from "../styles/components/weeklySchedule.module.scss";
import ScheduleGroup from "./scheduleGroup";

const WeeklySchedule = () => {
	return (
		<div className={styles.container}>
			<h2>Weekly Schedule</h2>
			{WEEKLY_SCHEDULE.map((schedule, i) => (
				<ScheduleGroup
					key={i}
					title={schedule.title}
					schedules={schedule.schedules}
				/>
			))}
		</div>
	);
};

export default WeeklySchedule;
