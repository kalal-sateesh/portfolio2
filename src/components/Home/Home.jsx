import styles from "../Home/Home.module.css";
import profileImg from "../../../public/profileImg.png";
import Projects from "../Projects/Projects";
const Home = () => {
  return (
    <>
      <section className={styles.profileContainer}>
        <div className={styles.profile}>
          <div className={styles.imageContainer}>
            <img src={profileImg} alt="Profilepic" width="100%" height="100%" />
          </div>
        </div>
        <div className={styles.introText}>
          <div className={styles.intro}>
            <div>
              <span>
                <b>Hi</b>, I am <span className={styles.name}>John Doe</span>
              </span>
            </div>
            <div>
              <span className={styles.Cname}>Frontend Developer</span>
            </div>
          </div>
        </div>
      </section>
      <Projects />
    </>
  );
};

export default Home;
