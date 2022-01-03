import React from "react";
import Link from "next/link";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">NextEvents</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href="/events">Alle Events abrufen</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
