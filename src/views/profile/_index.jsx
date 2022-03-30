import {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Read from './Read'
import UpdateProfile from './Update'


const Profile = function() {

  let { type } = useParams()
  const navigate = useNavigate()

  const [child, SetChild] = useState(null)


  useEffect(() => {

    switch (type) {

      // ARTICLE LIST
      case undefined:
      case 'read':
        return SetChild((
          
          <Read />
        ))
    

      // CREATE
     
        case 'update':
        return SetChild((
          <UpdateProfile />
        ))

     

      // // ERROR - NOT FOUND
      // default:
      //   navigate('/404', {replace: true})
      //   break;
    }

  }, [])

  return (child)
}

export default Profile