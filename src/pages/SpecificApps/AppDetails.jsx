
import CardDetails from '../../components/cardsholder/CardDetails'
import { useLoaderData, useParams } from 'react-router'

function AppDetails() {
    const appdata=useLoaderData()
    const {id}=useParams()
    const parsedId= parseInt(id)
    
    const singleApp = appdata.find(app=>app.id === parsedId)
  
    
    

  return (
    <div>
      <CardDetails singleApp={singleApp}></CardDetails>
    </div>
  )
}

export default AppDetails
