import { Breadcrumbs, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import React from 'react'
import Link from '@mui/material/Link'
import Header from '../../components/Header'
import DrawerNav from '../../components/menu/DrawerNav'
import FormSelect from '../../components/FormSelect'
import { ChampionIcon } from '../../assets/images/icons'
import { createBrowserHistory } from "history";


const CreateForm = () => {
  const History = createBrowserHistory();

  const dataUser = {
    "Status": 200,
    "Message": "Success",
    "Data": [
      {
        "UserId": "0000111",
        "AreaName": "JAKARTA",
        "Email": "farhan2@gmail.com",
        "Name": "Agat322",
        "PhoneNumber": "089518828538",
        "ProfilePicture": "http://Domain/upload/image/Default.jpeg",
        "Position": "Teknisi",
        "MasaKerja": "10 Tahun",
        "Role": [
          {
            "RoleId": 1,
            "RoleName": "General User"
          },
          {
            "RoleId": 2,
            "RoleName": "Innovation Champion"
          }
        ],
      },
      {
        "UserId": "0000222",
        "AreaName": "JAKARTA",
        "Email": "farhan2@gmail.com",
        "Name": "Agat255",
        "PhoneNumber": "089518828538",
        "ProfilePicture": "http://Domain/upload/image/Default.jpeg",
        "Position": "Teknisi",
        "MasaKerja": "10 Tahun",
        "Role": [
          {
            "RoleId": 1,
            "RoleName": "General User"
          },
          {
            "RoleId": 2,
            "RoleName": "Innovation Champion"
          }
        ],
      }
    ]
  }

  const userList = dataUser.Data.map((item) => {
    return {
      "value": item.UserId,
      "label": item.Name
    };
  });



  // console.log(dataUser);

  return (
    <div>
      {
        !!localStorage.getItem('Token')
          ? (
            <>
              <Header />
              <DrawerNav />
            </>
          )
          : <></>
      }


      <div className='space-from-header py-[1rem] bg-slate-200 hidden md:block'>
        <div className="container">
          <div role="presentation" className='pt-3'>
            <Breadcrumbs aria-label="breadcrumb" >
              <Link underline="hover" color="inherit" href="/" className='font-bold'>
                Home
              </Link>
              <Link underline="hover" color="inherit" href="/champion" className='font-bold'>
                Inovation Champion
              </Link>
              <Link
                underline="hover"
                color="inherit"

                className='font-bold'
              >
                Create
              </Link>

            </Breadcrumbs>
          </div>
        </div>
      </div>

      <div class="container mx-auto w-full p-4">
        <div className="flex items-center gap-2">
          <img src={ChampionIcon} alt="" className='w-12 h-12' />
          <div class="text-2xl font-semibold text-black">Create Inovation Champion</div>
        </div>
        <div className="flex flex-col w-full gap-4 mt-5 md:flex-row ">
          <div className="flex flex-col md:w-1/2">
            <FormSelect name="user" label="Pilih User" placeholder="Pilih User" data={userList} />
          </div>
          <div className='flex flex-col md:w-1/2'>
            <label className='text-xl font-semibold'>Status</label>
            <RadioGroup
              defaultValue="1"
              name="radio-buttons-group"
              className='flex'
            >
              <div className="flex gap-6 py-4">
                <FormControlLabel value="1" control={<Radio />} label="Aktif" />
                <FormControlLabel value="0" control={<Radio />} label="Non Aktif" />
              </div>
            </RadioGroup>
          </div>
        </div>
        <div class="mt-5 flex justify-start gap-3">
          <button class="rounded-md bg-red-400 px-8 py-3 font-sans text-xl text-white" onClick={() => History.back()}>Cancel</button>
          <button class="rounded-md bg-yellow-400 px-8 py-3 font-sans text-xl text-black">Save</button>
        </div>
      </div>
    </div>
  )
}

export default CreateForm