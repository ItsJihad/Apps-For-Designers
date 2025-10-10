import React from 'react'

function Noapps() {
  return (
    <div>
      <div class="flex flex-col items-center justify-center h-screen text-center p-5">
        <img src={'./src/assets/AppError.png'} />
          
      
        <h2 class="text-2xl font-semibold mt-3">OPPS!! APP NOT FOUND</h2>
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
  )
}

export default Noapps
