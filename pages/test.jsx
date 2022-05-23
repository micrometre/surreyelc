import styles from "../styles/Home.module.css";
import TestComp from "../components/StyledComponent";
export function Home() {
  return (
      <div className={styles.homeContainer}>
        <TestComp/>
      </div>
  );
}

export default Home;
