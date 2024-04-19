import { useNavigate } from "react-router-dom";
import styles from "../AppHeader/AppHeader.module.css";
const AppHeader = () => {
  const navigate = useNavigate();

  const handlenavigatetoHome = () => {
    navigate("/");
  };

  const handlenavigatetoProjects = () => {
    navigate("/projects");
  };

  const handlenavigatetoContact = () => {
    navigate("/contact");
  };

  return (
    <header>
      <nav className={styles.navContainer}>
        <label className={styles.hamburgur} htmlFor="hamburgur">
          &#9776;
        </label>
        <input type="checkbox" id="hamburgur"></input>
        <div>
          <h1>Portfolio</h1>
        </div>
        <div className={styles.navItems}>
          <div onClick={handlenavigatetoHome}>Home</div>
          <div onClick={handlenavigatetoProjects}>Projects</div>
          <div onClick={handlenavigatetoContact}>Contact</div>
        </div>
      </nav>
    </header>
  );
};

export default AppHeader;
