import type { ScheduleGroup as ScheduleGroupType } from "../models";
import styles from "../styles/components/weeklySchedule.module.scss";
import ScheduleGroup from "./scheduleGroup";

type WeeklyScheduleProps = {
  scheduleGroups: ScheduleGroupType[];
};

const WeeklySchedule = (props: WeeklyScheduleProps) => {
  const { scheduleGroups } = props;

  return (
    <div className={styles.container}>
      <h2>Weekly Schedule</h2>
      {scheduleGroups.map((group, i) => (
        <ScheduleGroup
          key={i}
          title={group.title}
          schedules={group.schedules}
        />
      ))}
    </div>
  );
};

export default WeeklySchedule;
