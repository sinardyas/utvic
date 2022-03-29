import {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import Read from './Read'
import Create from './Create'
import List from './List'
import UpdateBanner from './UpdateBanner'
import ArtikelKu from './ArtikelKu'
import ValidasiArtikel from './Validasi'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

const Article = function() {

  let { type } = useParams()
  const navigate = useNavigate()

  const [child, SetChild] = useState(null)


  useEffect(() => {

    switch (type) {

      // ARTICLE LIST
      case undefined:
      case 'all':
        return SetChild((
          
          <List />
        ))
      case 'my':
        return SetChild((
          
          <ArtikelKu />
        ))
      

      // READ DETAIL
      case 'read':
      default:
        return SetChild((
          <Read />
        ))

      // CREATE
      case 'create':
        return SetChild((
          <Create />
        ))

        case 'update':
        return SetChild((
          <UpdateBanner />
        ))

        case 'validate':
        return SetChild((
          <ValidasiArtikel />
        ))

      // // ERROR - NOT FOUND
      // default:
      //   navigate('/404', {replace: true})
      //   break;
    }

  }, [])

  return (child)
}

export default Article