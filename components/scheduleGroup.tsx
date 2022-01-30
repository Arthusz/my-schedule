import type { ScheduleGroup as ScheduleGroupType } from "../models";
import styles from "../styles/components/scheduleGroup.module.scss";

const ScheduleGroup = (props: ScheduleGroupType) => {
	return (
		<div>
			<h2 className={styles.title}>{props.title}</h2>
			<div className={styles.container}>
				{props.schedules.map((schedule, i) => (
					<div className={styles.item} key={i}>
						<span>{schedule.name}</span>
						<span>{schedule.time}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default ScheduleGroup;
