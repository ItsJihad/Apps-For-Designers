import { NavLink } from "react-router";

export default function Header() {
  const Activetoggle = ({ isActive }) =>
    `font-bold font-[poppins] transition-all duration-200 ${
      isActive
        ? "text-transparent bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text" 
        : "text-gray-800 hover:text-violet-600"
    }`;

  const tablinks = (
    <ul
      tabIndex={0}
      className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow gap-3 lg:flex"
    >
      <li>
        <NavLink to="/" className={Activetoggle}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/apps" className={Activetoggle}>
          Apps
        </NavLink>
      </li>
      <li>
        <NavLink to="/installation" className={Activetoggle}>
          Installation
        </NavLink>
      </li>
    </ul>
  );

  const pclinks = (
    <ul className="menu menu-horizontal px-1 gap-5">
      <li>
        <NavLink to="/" className={Activetoggle}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/apps" className={Activetoggle}>
          Apps
        </NavLink>
      </li>
      <li>
        <NavLink to="/installation" className={Activetoggle}>
          Installation
        </NavLink>
      </li>
    </ul>
  );

  return (
    <header>
      <div className="shadow bg-white py-1">
        <div className="navbar w-11/12 mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              {tablinks}
            </div>

            <NavLink to="/" className="flex items-center gap-2">
              <img alt="Logo" className="w-12" src={"/assets/logo.png"} />
              <h2 className="text-xl uppercase font-semibold text-purple-700">
                Realtime<span> Hype</span>
              </h2>
            </NavLink>
          </div>

          <div className="navbar-center hidden lg:flex">{pclinks}</div>

          <div className="navbar-end">
            <a
              href="https://github.com/itsjihad"
              target="_blank"
              rel="noreferrer"
              className="btn text-white bg-gradient-to-r from-violet-500 to-blue-500 flex items-center rounded gap-2"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"></path>
              </svg>
              Contribute
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
