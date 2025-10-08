import React from 'react'

function NavBar() {
  return (
    <div>
      
      <header>
  <div class="shadow bg-white py-1">
    <div class="navbar w-11/12 mx-auto">
     
      <div class="navbar-start">
        
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              ></path>
            </svg>
          </div>

          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-3"
          >
            <li>
              <a
                aria-current="page"
                class="text-gray-500 font-semibold active"
                href="/"
                data-discover="true"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="18"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 
                       2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 
                       0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 
                       7v-5h4v5h-4zm2-15.586 6 6V15l.001 
                       5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 
                       0-2 .897-2 2v5H6v-9.586l6-6z"
                  ></path>
                </svg>
                Home
              </a>
            </li>

            <li>
              <a
                class="text-gray-500 font-semibold"
                href="/apps"
                data-discover="true"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M255.9 120.9l9.1-15.7c5.6-9.8 
                       18.1-13.1 27.9-7.5 9.8 5.6 13.1 
                       18.1 7.5 27.9l-87.5 151.5h63.3c20.5 
                       0 32 24.1 23.1 40.8H113.8c-11.3 0-20.4-9.1-20.4-20.4 
                       0-11.3 9.1-20.4 20.4-20.4h52l66.6-115.4-20.8-36.1c-5.6-9.8-2.3-22.2 
                       7.5-27.9 9.8-5.6 22.2-2.3 27.9 7.5l8.9 15.7z"
                  ></path>
                </svg>
                Apps
              </a>
            </li>

            <li>
              <a
                class="text-gray-500 font-semibold"
                href="/installations"
                data-discover="true"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    d="M20 17H4V5h8V3H4c-1.11 0-2 
                       .89-2 2v12a2 2 0 0 0 2 2h4v2h8v-2h4c1.1 
                       0 2-.9 2-2v-3h-2v3z"
                  ></path>
                  <path
                    d="m17 14 5-5-1.41-1.41L18 
                       10.17V3h-2v7.17l-2.59-2.58L12 
                       9z"
                  ></path>
                </svg>
                Installation
              </a>
            </li>
          </ul>
        </div>

         
        <a href="/" data-discover="true">
          <div class="flex items-center gap-2">
            <img alt="" class="w-12" src="/assets/logo-D9NHcesw.png" />
            <h2 class="text-xl text-secondary uppercase font-semibold">
              HERO<span>.IO</span>
            </h2>
          </div>
        </a>
      </div>

      
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1 gap-5">
          <li>
            <a
              aria-current="page"
              class="text-gray-500 font-semibold active"
              href="/"
              data-discover="true"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 13h1v7c0 1.103.897 2 2 
                     2h12c1.103 0 2-.897 2-2v-7h1a1 1 
                     0 0 0 .707-1.707l-9-9a.999.999 
                     0 0 0-1.414 0l-9 9A1 1 0 
                     0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 
                     6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 
                     0-2 .897-2 2v5H6v-9.586l6-6z"
                ></path>
              </svg>
              Home
            </a>
          </li>

          <li>
            <a
              class="text-gray-500 font-semibold"
              href="/apps"
              data-discover="true"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M255.9 120.9l9.1-15.7c5.6-9.8 
                     18.1-13.1 27.9-7.5 9.8 5.6 13.1 
                     18.1 7.5 27.9l-87.5 151.5h63.3c20.5 
                     0 32 24.1 23.1 40.8H113.8c-11.3 
                     0-20.4-9.1-20.4-20.4 0-11.3 
                     9.1-20.4 20.4-20.4h52l66.6-115.4-20.8-36.1c-5.6-9.8-2.3-22.2 
                     7.5-27.9 9.8-5.6 22.2-2.3 27.9 7.5l8.9 15.7z"
                ></path>
              </svg>
              Apps
            </a>
          </li>

          <li>
            <a
              class="text-gray-500 font-semibold"
              href="/installations"
              data-discover="true"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  d="M20 17H4V5h8V3H4c-1.11 
                     0-2 .89-2 2v12a2 2 0 0 0 2 
                     2h4v2h8v-2h4c1.1 0 
                     2-.9 2-2v-3h-2v3z"
                ></path>
                <path
                  d="m17 14 5-5-1.41-1.41L18 
                     10.17V3h-2v7.17l-2.59-2.58L12 
                     9z"
                ></path>
              </svg>
              Installation
            </a>
          </li>
        </ul>
      </div>

      
      <div class="navbar-end">
        <a
          class="btn btn-secondary bg-gradient-to-r from-violate-500 to-blue-500"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 0C3.58 0 0 3.58 0 
                 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 
                 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 
                 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 
                 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 
                 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 
                 2 .27c1.53-1.04 2.2-.82 
                 2.2-.82.44 1.1.16 1.92.08 
                 2.12.51.56.82 1.27.82 
                 2.15 0 3.07-1.87 3.75-3.65 
                 3.95.29.25.54.73.54 
                 1.48 0 1.07-.01 1.93-.01 
                 2.2 0 .21.15.46.55.38A8.01 
                 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
            ></path>
          </svg>
          Contribute
        </a>
      </div>
    </div>
  </div>
</header>


    </div>
  )
}

export default NavBar
