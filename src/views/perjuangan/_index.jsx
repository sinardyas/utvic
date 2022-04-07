import {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import SettingParameter from './SettingParameter'



const BotbStar = function() {

  let { type } = useParams()
  const navigate = useNavigate()

  const [child, SetChild] = useState(null)


  useEffect(() => {

    switch (type) {

      // ARTICLE LIST
      case undefined:
      case 'setting':
        return SetChild((
          
          <SettingParameter />
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

export default BotbStar