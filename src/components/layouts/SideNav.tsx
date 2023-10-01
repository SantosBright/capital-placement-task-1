import { ReactComponent as HamburgerIcon } from "../../images/icons/hamburger.svg";
import homeIcon from "../../images/icons/home.png";
import taskIcon from "../../images/icons/task.png";
import "./styles.css";

type Props = {};

const SideNav = (props: Props) => {
  return (
    <div className="sidebar">
      <div>
        <button className="hamburger-btn nav-icon">
          <HamburgerIcon />
        </button>
        <div>
          <button className="nav-icon nav-item">
            <img src={homeIcon} alt="home icon" />
          </button>
          <button className="nav-icon nav-item">
            <img src={taskIcon} alt="task icon" />
          </button>
        </div>
      </div>
      <div className="logo">NT</div>
      <div></div>
    </div>
  );
};

export default SideNav;
