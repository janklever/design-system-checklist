import React, { useState, useCallback } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import classnames from "classnames";
import s from "./Header.module.css";

const Header = ({ tCore }) => {
  const router = useRouter();
  const [active, setActive] = useState(false);
  const navClassName = classnames(s.nav, active && s["active"]);
  const burgerClassName = classnames(s.burger, active && s["active"]);

  const toggleMenu = useCallback((flag) => {
    setActive((prev) => {
      const nextActive = flag === undefined ? !prev : flag;
      document.body.style.overflow = nextActive ? "hidden" : "auto";
      return nextActive;
    });
  }, []);

  const closeMenu = useCallback(() => toggleMenu(false), []);

  const navigate = (e, to) => {
    e.preventDefault();
    closeMenu();
    router.push(to);
  };

  const handleLanguageChange = (e) => {
    closeMenu();
    router.push(router.basePath, router.asPath, { locale: e.target.value });
  };

  return (
    <header className={s.container}>
      <span className={s.logo}>
        <Link href="/" onClick={closeMenu}>
          Design System Checklist
        </Link>
      </span>

      <nav className={navClassName}>
        <ul>
          <li className={s.item}>
            <Link href="/sobre" onClick={closeMenu}>
              {tCore.about}
            </Link>
          </li>
          <li className={s.item}>
            <Link href="/compartilhar" onClick={closeMenu}>
              {tCore.share}
            </Link>
          </li>
          <li className={s.item}>
            <a
              href="https://designsystemchecklist.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* {tCore.contribute} */}
              Versão em inglês ↗
            </a>
          </li>
        </ul>
      </nav>

      <button className={burgerClassName} onClick={() => toggleMenu()}>
        <span className={s.line} />
        <span className={s.line} />
        <span className={s.line} />
      </button>
    </header>
  );
};

export default Header;
