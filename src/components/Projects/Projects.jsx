import styles from "../Projects/Projects.module.css";
import Project1 from "../../../public/Project1.png";
import Project2 from "../../../public/Project2.png";
import Project3 from "../../../public/Project3.png";
import Project4 from "../../../public/Project4.png";
import Project5 from "../../../public/Project5.png";
import Project6 from "../../../public/Project6.png";
import Project7 from "../../../public/Project7.png";
import Project8 from "../../../public/Project8.png";
import Project9 from "../../../public/Project9.png";
const Projects = () => {
  const images = [
    Project1,
    Project2,
    Project3,
    Project4,
    Project5,
    Project6,
    Project7,
    Project8,
    Project9,
  ];

  const list = images.map((ele, index) => {
    return (
      <div key={index} className={styles.card}>
        <img src={ele} alt="Images" width="100%" height="100%" />
      </div>
    );
  });

  return (
    <section className={styles.projects}>
      <div className={styles.projectsText}>PROJECTS</div>
      <div className={styles.cardContainer}>{list}</div>
    </section>
  );
};

export default Projects;
