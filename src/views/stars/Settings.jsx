import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Setting from '../../assets/images/setting-icon.png'
import Date from '../../assets/images/calendar-admin.png'
import Calendar from '../../assets/images/calender.png'
import DatePickers from '../../components/DatePickers'
import { borderLeft } from '@mui/system';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1060,
  bgcolor: 'background.paper',

  boxShadow: 24,
  p: 4,
  

  borderLeft:'3px solid #FFCD00'
};

export default function Settings() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);


  return (
    <div className='flex flex-row gap-5'>
        <img src={Date} alt=".." width="48" height="48"/>
      
      <button onClick={handleOpen} className='bg-yellow-400 px-4 py-2  text-black font-semibold disabled:opacity-75'> 
      <div className="flex flex-row  gap-3 items-center">
      <div>
      <img src={Setting} alt=".." width="20" height="20" className='setting-img'/>
      </div>
      Setting Jumlah Seasonal Task 
      </div>
      </button>

      <button onClick={handleOpen2} className='bg-yellow-400 px-4 py-2  text-black font-semibold disabled:opacity-75'> 
      <div className="flex flex-row gap-3 items-center">
      <div>
      <img src={Setting} alt=".." width="20" height="20" className='setting-img'/>
      </div>
      Setting Point Basic Task 
      </div>

      
      
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
           
        <div className="flex flex-col py-10 px-10">
            <h2 className='font-bold'>Setting Jumlah Seasonal Task</h2>
            <div className="flex flex-row w-full mt-10 gap-3">
                <div className="flex flex-col w-full">
               
                <strong>Tahap Pejuang</strong>
                <select class="form-select mt-3" aria-label="Default select example">
                    <option selected>Pilih Tahap Pejuang</option>
                    <option value="1">Pilihan 1</option>
                    <option value="2">Pilihan 2</option>
                    <option value="3">Pilihan 3</option>
                </select>
                </div>
                <div className="flex flex-col w-full">
               
                <strong>Jumlah Task</strong>
                <input type="text" class="form-control mt-3" id="exampleFormControlInput1" placeholder="Masukan jumlah task"/>
                </div>
            </div>
            <div className="flex flex-row gap-4 pt-10">
         <button type='submit' className='bg-red-700 px-4 py-2 rounded-md text-white font-semibold disabled:opacity-75'> Cancel </button>
         <button type='submit' className='bg-yellow-400 px-4 py-2 rounded-md text-black font-semibold disabled:opacity-75'> Save </button>
       </div>
        </div>
       
        </Box>
      </Modal>


     
      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title2"
        aria-describedby="modal-modal-description2"
      >
        <Box sx={style}>
        <div className="flex flex-col py-10 px-10">
            <h2 className='font-bold'>Setting Point Basic Task</h2>
            <div className="flex flex-col w-full mt-5 gap-3">
            <div className="col-datepicker flex flex-row gap-5 pt-5">
        <div className='flex flex-col w-full'>
        <span className='pb-3 font-semibold'>Mulai</span>
        <div>
        <div class="form-group has-search">
    <span class="form-control-feedback pt-5 pl-3">
      <img src={Calendar} alt=".." />
    </span>
    <DatePickers/>
  </div>
     
      </div>
        </div>
        <div className='flex flex-col w-full'>
        <span className='pb-3 font-semibold'>Selesai</span>
        <div>
        <div class="form-group has-search">
    <span class="form-control-feedback pt-5 pl-3">
      <img src={Calendar} alt=".." />
    </span>
    <DatePickers/>
  </div>
      </div>
        </div>

      
      </div>
                <div className="flex flex-col w-full">
               
                <strong>Jumlah Task</strong>
                <input type="text" class="form-control mt-3" id="exampleFormControlInput1" placeholder="Masukan jumlah task"/>
                </div>
            </div>
            <div className="flex flex-row gap-4 pt-10">
         <button type='submit' className='bg-red-700 px-4 py-2 rounded-md text-white font-semibold disabled:opacity-75'> Cancel </button>
         <button type='submit' className='bg-yellow-400 px-4 py-2 rounded-md text-black font-semibold disabled:opacity-75'> Save </button>
       </div>
        </div>
        </Box>
      </Modal>

     
    </div>
  );
}