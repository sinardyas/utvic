import {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import AdminPage from './Admin'
import UserPage from './User'


const BotbStar = function() {

  let { type } = useParams()
  const navigate = useNavigate()

  const [child, SetChild] = useState(null)


  useEffect(() => {

    switch (type) {

      // ARTICLE LIST
      case undefined:
      case 'admin':
        return SetChild((
          
          <AdminPage />
        ))
    

      // CREATE
     
        case 'user':
        return SetChild((
          <UserPage />
        ))

     

      // // ERROR - NOT FOUND
      // default:
      //   navigate('/404', {replace: true})
      //   break;
    }

  }, [])

  return (child)
}

export default BotbStar