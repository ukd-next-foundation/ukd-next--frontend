import cls from "./avbar.module.scss";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";

function Navbar() {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <nav className={cls.nav}>
      <ul className="menu">
        <li className={`${cls.menu_item} `}>
          <NavLink
            to={"profile"}
            className={({ isActive }) => (isActive ? cls.active : "")}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_781_416"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="28"
                height="28"
              >
                <rect width="28" height="28" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_781_416)">
                <path
                  d="M6.82492 19.95C7.81659 19.1917 8.92492 18.5938 10.1499 18.1563C11.3749 17.7188 12.6583 17.5 13.9999 17.5C15.3416 17.5 16.6249 17.7188 17.8499 18.1563C19.0749 18.5938 20.1833 19.1917 21.1749 19.95C21.8555 19.1528 22.3853 18.2486 22.7645 17.2375C23.1437 16.2264 23.3333 15.1472 23.3333 14C23.3333 11.4139 22.4242 9.21182 20.6062 7.39376C18.7881 5.57571 16.586 4.66668 13.9999 4.66668C11.4138 4.66668 9.21172 5.57571 7.39367 7.39376C5.57561 9.21182 4.66659 11.4139 4.66659 14C4.66659 15.1472 4.85617 16.2264 5.23534 17.2375C5.6145 18.2486 6.14436 19.1528 6.82492 19.95ZM13.9999 15.1667C12.8527 15.1667 11.8853 14.7729 11.0978 13.9854C10.3103 13.1979 9.91659 12.2306 9.91659 11.0833C9.91659 9.93612 10.3103 8.96876 11.0978 8.18126C11.8853 7.39376 12.8527 7.00001 13.9999 7.00001C15.1471 7.00001 16.1145 7.39376 16.902 8.18126C17.6895 8.96876 18.0833 9.93612 18.0833 11.0833C18.0833 12.2306 17.6895 13.1979 16.902 13.9854C16.1145 14.7729 15.1471 15.1667 13.9999 15.1667ZM13.9999 25.6667C12.386 25.6667 10.8694 25.3604 9.44992 24.7479C8.03047 24.1354 6.79575 23.3042 5.74575 22.2542C4.69575 21.2042 3.8645 19.9695 3.252 18.55C2.6395 17.1306 2.33325 15.6139 2.33325 14C2.33325 12.3861 2.6395 10.8695 3.252 9.45001C3.8645 8.03057 4.69575 6.79584 5.74575 5.74584C6.79575 4.69584 8.03047 3.86459 9.44992 3.25209C10.8694 2.63959 12.386 2.33334 13.9999 2.33334C15.6138 2.33334 17.1305 2.63959 18.5499 3.25209C19.9694 3.86459 21.2041 4.69584 22.2541 5.74584C23.3041 6.79584 24.1353 8.03057 24.7478 9.45001C25.3603 10.8695 25.6666 12.3861 25.6666 14C25.6666 15.6139 25.3603 17.1306 24.7478 18.55C24.1353 19.9695 23.3041 21.2042 22.2541 22.2542C21.2041 23.3042 19.9694 24.1354 18.5499 24.7479C17.1305 25.3604 15.6138 25.6667 13.9999 25.6667ZM13.9999 23.3333C15.0305 23.3333 16.0027 23.1827 16.9166 22.8813C17.8305 22.5799 18.6666 22.1472 19.4249 21.5833C18.6666 21.0195 17.8305 20.5868 16.9166 20.2854C16.0027 19.984 15.0305 19.8333 13.9999 19.8333C12.9694 19.8333 11.9971 19.984 11.0833 20.2854C10.1694 20.5868 9.33325 21.0195 8.57492 21.5833C9.33325 22.1472 10.1694 22.5799 11.0833 22.8813C11.9971 23.1827 12.9694 23.3333 13.9999 23.3333ZM13.9999 12.8333C14.5055 12.8333 14.9235 12.6681 15.2541 12.3375C15.5846 12.007 15.7499 11.5889 15.7499 11.0833C15.7499 10.5778 15.5846 10.1597 15.2541 9.82918C14.9235 9.49862 14.5055 9.33334 13.9999 9.33334C13.4944 9.33334 13.0763 9.49862 12.7458 9.82918C12.4152 10.1597 12.2499 10.5778 12.2499 11.0833C12.2499 11.5889 12.4152 12.007 12.7458 12.3375C13.0763 12.6681 13.4944 12.8333 13.9999 12.8333Z"
                  fill="#666666"
                />
              </g>
            </svg>
          </NavLink>
        </li>

        <li className={cls.menu_item}>
          <NavLink
            to={"schedule"}
            className={({ isActive }) => (isActive ? cls.active : "")}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_781_420"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_781_420)">
                <path
                  d="M12 19.5C11.2 18.8667 10.3333 18.375 9.4 18.025C8.46667 17.675 7.5 17.5 6.5 17.5C5.8 17.5 5.1125 17.5917 4.4375 17.775C3.7625 17.9583 3.11667 18.2167 2.5 18.55C2.15 18.7333 1.8125 18.725 1.4875 18.525C1.1625 18.325 1 18.0333 1 17.65V5.6C1 5.41667 1.04583 5.24167 1.1375 5.075C1.22917 4.90833 1.36667 4.78333 1.55 4.7C2.31667 4.3 3.11667 4 3.95 3.8C4.78333 3.6 5.63333 3.5 6.5 3.5C7.46667 3.5 8.4125 3.625 9.3375 3.875C10.2625 4.125 11.15 4.5 12 5V17.1C12.85 16.5667 13.7417 16.1667 14.675 15.9C15.6083 15.6333 16.55 15.5 17.5 15.5C18.1 15.5 18.6875 15.55 19.2625 15.65C19.8375 15.75 20.4167 15.9 21 16.1V4.1C21.25 4.18333 21.4958 4.27083 21.7375 4.3625C21.9792 4.45417 22.2167 4.56667 22.45 4.7C22.6333 4.78333 22.7708 4.90833 22.8625 5.075C22.9542 5.24167 23 5.41667 23 5.6V17.65C23 18.0333 22.8375 18.325 22.5125 18.525C22.1875 18.725 21.85 18.7333 21.5 18.55C20.8833 18.2167 20.2375 17.9583 19.5625 17.775C18.8875 17.5917 18.2 17.5 17.5 17.5C16.5 17.5 15.5333 17.675 14.6 18.025C13.6667 18.375 12.8 18.8667 12 19.5ZM14 14.5V5L19 0V10L14 14.5ZM10 16.125V6.225C9.45 5.99167 8.87917 5.8125 8.2875 5.6875C7.69583 5.5625 7.1 5.5 6.5 5.5C5.88333 5.5 5.28333 5.55833 4.7 5.675C4.11667 5.79167 3.55 5.96667 3 6.2V16.125C3.58333 15.9083 4.1625 15.75 4.7375 15.65C5.3125 15.55 5.9 15.5 6.5 15.5C7.1 15.5 7.6875 15.55 8.2625 15.65C8.8375 15.75 9.41667 15.9083 10 16.125Z"
                  fill="#666666"
                />
              </g>
            </svg>
          </NavLink>
        </li>

        <li className={cls.menu_item}>
          <NavLink
            to={"subjects"}
            className={({ isActive }) => (isActive ? cls.active : "")}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_781_424"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_781_424)">
                <path
                  d="M10 14H14V12H10V14ZM10 11H18V9H10V11ZM10 8H18V6H10V8ZM8 18C7.45 18 6.97917 17.8042 6.5875 17.4125C6.19583 17.0208 6 16.55 6 16V4C6 3.45 6.19583 2.97917 6.5875 2.5875C6.97917 2.19583 7.45 2 8 2H20C20.55 2 21.0208 2.19583 21.4125 2.5875C21.8042 2.97917 22 3.45 22 4V16C22 16.55 21.8042 17.0208 21.4125 17.4125C21.0208 17.8042 20.55 18 20 18H8ZM8 16H20V4H8V16ZM4 22C3.45 22 2.97917 21.8042 2.5875 21.4125C2.19583 21.0208 2 20.55 2 20V6H4V20H18V22H4Z"
                  fill="#666666"
                />
              </g>
            </svg>
          </NavLink>
        </li>
        <li className={cls.menu_item}>
          <NavLink
            to={"news"}
            className={({ isActive }) => (isActive ? cls.active : "")}
          >
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V0L1.675 1.675L3.325 0L5 1.675L6.675 0L8.325 1.675L10 0L11.675 1.675L13.325 0L15 1.675L16.675 0L18.325 1.675L20 0V16C20 16.55 19.8042 17.0208 19.4125 17.4125C19.0208 17.8042 18.55 18 18 18H2ZM2 16H9V10H2V16ZM11 16H18V14H11V16ZM11 12H18V10H11V12ZM2 8H18V5H2V8Z"
                fill="#666666"
              />
            </svg>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
