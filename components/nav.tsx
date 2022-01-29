import styles from "../styles/components/nav.module.scss";

const Nav = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.logo}>
          <p>
            <a className={styles.logoTitle} href="">
              A4 IGCSE School (IGCSE New Class Timetable)
            </a>
          </p>
          <p className={styles.logoDescription}> Schedule for A4 IGCSE</p>
        </div>
        <div className={styles.itemContainer}>
          <a className={styles.item} href="">
            Time/Date
          </a>
          <a className={styles.item} href="">
            About A4
          </a>
          <a className={styles.item} href="">
            Trials
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
