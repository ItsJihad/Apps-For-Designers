import React from 'react'
import CardDetails from '../../components/cardsholder/CardDetails'
import { useLoaderData, useParams } from 'react-router'

function AppDetails() {
    
    const { id } = useParams(); // ✅ call the function
  const parsedId = parseInt(id, 10); // always specify radix
  const appdata = useLoaderData();
  const singleApp = appdata.find(app => app.id === parsedId);

  console.log(singleApp);
    
    

  return (
    <div>
      <CardDetails singleApp={singleApp}></CardDetails>
    </div>
  )
}

export default AppDetails
