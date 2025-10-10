import React from "react";
import { Link } from "react-router";

function Errorpage() {
  return (
    <div>
      <div class="flex flex-col items-center justify-center h-screen text-center p-5">
        <img src={'/assets/error404.png'} />
          
        <h1 class="text-6xl font-extrabold text-primary mt-5">404</h1>
        <h2 class="text-2xl font-semibold mt-3">Oops, page not found!</h2>
        <p class="opacity-70 mt-2 max-w-md">
          The page you are looking for is not available.
        </p>
        <div class="mt-6 flex gap-3">
          <Link to={'/'}
              
            class="btn btn-primary text-white shadow-lg"
            
          >
            Go Back
         
          </Link>
         
          
        </div>
      </div>
    </div>
  );
}

export default Errorpage;
