import Head from "next/head";
import Nav from "../components/nav";
import TodaySchedule from "../components/todaySchedule";
import styles from "../styles/pages/schedule.module.scss";
import WeeklySchedule from "../components/weeklySchedule";

const Schedule = () => {
  return (
    <div>
      <Head>
        <title>Schedule - Subsplease</title>
      </Head>
      <Nav />
      <div className={styles.container}>
        <TodaySchedule />
        <WeeklySchedule />
      </div>
    </div>
  );
};

export default Schedule;
