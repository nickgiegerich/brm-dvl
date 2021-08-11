import styles from "../../styles/Navigation.module.css";
import Link from "next/link";

export const DesktopNavigation = (props) => {
  return (
    <>
      <nav
        style={{ position: props.position, height: "fit-content" }}
        className={styles.navItems}
      >
        <ul className="font-medium">
          <Link href="/">
            <li className="bg-gradient-to-r from-secondary to-secondary bg-growing-underline">
              Home
            </li>
          </Link>
          <Link href="/team/providers">
            <li className="bg-gradient-to-r from-secondary to-secondary bg-growing-underline">
              Providers
            </li>
          </Link>
          <Link href="/newpatients">
            <li className="bg-gradient-to-r from-secondary to-secondary bg-growing-underline">
              New Patients
            </li>
          </Link>
          <Link href="/services">
            <li className="bg-gradient-to-r from-secondary to-secondary bg-growing-underline">
              Services
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
};
