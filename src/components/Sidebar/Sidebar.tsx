import "./Sidebar.scss";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import LogoD from "../../assets/images/D.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComputer,
  faEnvelope,
  faGear,
  faGears,
  faHome,
  faUser,
  faUserGear,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faPagelines,
} from "@fortawesome/free-brands-svg-icons";

export default function Sidebar() {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img alt="logo" src={LogoD}></img>
        {/* <div id="logoSubtitle">Derek R-W</div> */}
      </Link>
      <nav>
        <NavLink
          end
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <FontAwesomeIcon
            id="homeLink"
            icon={faHome}
            color="#4d4d4e"
          ></FontAwesomeIcon>
        </NavLink>
        <NavLink
          end
          to="/about"
          className={({ isActive }) =>
            isActive ? "active about-link" : "about-link"
          }
        >
          <FontAwesomeIcon
            id="homeLink"
            icon={faUser}
            color="#4d4d4e"
          ></FontAwesomeIcon>
        </NavLink>
        <NavLink
          end
          to="/contact"
          className={({ isActive }) =>
            isActive ? "active contact-link" : "contact-link"
          }
        >
          <FontAwesomeIcon
            id="homeLink"
            icon={faEnvelope}
            color="#4d4d4e"
          ></FontAwesomeIcon>
        </NavLink>
        <NavLink
          end
          to="/skills"
          className={({ isActive }) =>
            isActive ? "active skills-link" : "skills-link"
          }
        >
          <FontAwesomeIcon
            id="homeLink"
            icon={faGears}
            color="#4d4d4e"
          ></FontAwesomeIcon>
        </NavLink>
        <NavLink
          end
          to="/projects"
          className={({ isActive }) =>
            isActive ? "active projects-link" : "projects-link"
          }
        >
          <FontAwesomeIcon
            id="homeLink"
            icon={faComputer}
            color="#4d4d4e"
          ></FontAwesomeIcon>
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/derek-reid-wilkinson-b20833228/"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
            ></FontAwesomeIcon>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.github.com/Reidwids"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e"></FontAwesomeIcon>
          </a>
        </li>
      </ul>
    </div>
  );
}
