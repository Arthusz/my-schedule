import styles from "../styles/components/scheduleGroup.module.scss";

type Schedule = {
	name: string;
	time: string;
};

type ScheduleGroupProps = {
	title: string;
	schedules: Array<Schedule>;
};

const ScheduleGroup = (props: ScheduleGroupProps) => {
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
