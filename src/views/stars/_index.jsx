import {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import TaskList from './index'
import AddTask from './AddTask'


const Profile = function() {

  let { type } = useParams()
  const navigate = useNavigate()

  const [child, SetChild] = useState(null)


  useEffect(() => {

    switch (type) {

      // ARTICLE LIST
      case undefined:
      case 'task':
        return SetChild((
          
          <TaskList />
        ))

        case 'add':
        return SetChild((
          
          <AddTask />
        ))
    

      // CREATE
     
        

     

      // // ERROR - NOT FOUND
      // default:
      //   navigate('/404', {replace: true})
      //   break;
    }

  }, [])

  return (child)
}

export default Profile