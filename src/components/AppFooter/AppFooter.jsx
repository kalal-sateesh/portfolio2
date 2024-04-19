import styles from "../AppFooter/AppFooter.module.css";
import LinkedIn from "../../../public/LinkedIn.png";
import Twitter from "../../../public/Twitter.png";
import Git from "../../../public/Git.png";
import call from "../../../public/call.png";
const AppFooter = () => {
  return (
    <>
      <footer className={styles.container}>
        <h1>Lets work together...</h1>
        <div className={styles.linksContainer}>
          <div className={styles.imageContainer}>
            <img src={LinkedIn} alt="Image" width="20px" height="20px" />
            <span>Linkedin</span>
          </div>
          <div className={styles.imageContainer}>
            <img src={Twitter} alt="Image" width="20px" height="20px" />
            <span>Twitter</span>
          </div>
          <div className={styles.imageContainer}>
            <span>@ Send Mail</span>
          </div>
        </div>
        <div className={styles.links}>
          <div className={styles.imageContainer}>
            <img src={Git} alt="Image" width="20px" height="20px" />
            <span>Github</span>
          </div>
          <div className={styles.imageContainer}>
            <img src={call} alt="Image" width="15px" height="20px" />
            <span>Call Me</span>
          </div>
        </div>
      </footer>
      <section className={styles.createdText}>
        Created By Do Some Coding
      </section>
    </>
  );
};

export default AppFooter;
