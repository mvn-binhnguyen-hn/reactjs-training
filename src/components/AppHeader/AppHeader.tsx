import React from "react";
import { Link } from "react-router-dom";
import logo from "logo.svg";
import styles from "./AppHeader.module.scss";

const AppHeader = () => {
    return (
        <div className={styles.wrapper}>
            <img src={logo} alt="logo" className={styles.logo} />
            <ul className={styles.navbar}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
            </ul>
        </div>
    );
};

export default AppHeader;
