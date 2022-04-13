import * as React from 'react';
import { styled } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../../styles/stars.scss';
import Edit from "../../assets/images/edit-admin.png"
import Delete from "../../assets/images/delete.png"

import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';



export default function CustomizedAccordions() {
 
    const Accordion = styled((props) => (
        <MuiAccordion disableGutters elevation={0} square {...props} />
      ))(({ theme }) => ({
        borderRadius:'8px'
      }));
      
      const AccordionSummary = styled((props) => (
        <MuiAccordionSummary
          expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
          {...props}
        />
      ))(({ theme }) => ({
        backgroundColor:
          theme.palette.mode === 'dark'
            ? '#FFCD00'
            : '#FFCD00',
            '& .MuiAccordionSummary-expandIconWrapper': {
              backgroundColor:'#000000',
              borderRadius:'50%'
              },
        '& .MuiSvgIcon-fontSizeMedium' : {
            color:'#FFFFFF',
        },

         
       
      }));
      
      const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
        padding: theme.spacing(2),
        borderTop: '1px solid rgba(0, 0, 0, 0.1)',
      }));
  return (
    <div >
       
      <Accordion className='mt-3'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <div className="flex flex-row justify-between w-11/12">
            <h2 className='font-semibold'>WINA - 4 Quiz</h2>
            <h2 className='font-semibold'>100 Point</h2>
            </div>
        </AccordionSummary>
        <AccordionDetails>
        <button type='submit' className='bg-yellow-400 px-4 py-2 rounded-md text-black font-semibold disabled:opacity-75'> Add Quiz </button>
        <div className='list-settingadmin pt-3'>
        <div class="p-6 bg-slate-100 rounded-xl border-solid border-2 border-slate-200 w-full">
            <div className="flex flex-row justify-between w-full">
                <div className="flex flex-col w-full pt-1">
                    <p className='font-bold'>Quiz 1</p>
                </div>
                <div className="flex flex-row gap-5 justify-between items-center">
                    <div>
                        <img src={Edit} alt=".." width="24" height="24" />
                    </div>
                    <div>
                        <img src={Delete} alt=".." width="47" height="47" />
                    </div>
                </div>
            </div>
        </div>
        <div class="p-6 bg-slate-100 rounded-xl border-solid border-2 border-slate-200 w-full">
            <div className="flex flex-row justify-between w-full">
                <div className="flex flex-col w-full pt-1">
                    <p className='font-bold'>Quiz 1</p>
                </div>
                <div className="flex flex-row gap-5 justify-between items-center">
                    <div>
                        <img src={Edit} alt=".." width="24" height="24" />
                    </div>
                    <div>
                        <img src={Delete} alt=".." width="47" height="47" />
                    </div>
                </div>
            </div>
        </div>
        <div class="p-6 bg-slate-100 rounded-xl border-solid border-2 border-slate-200 w-full">
            <div className="flex flex-row justify-between w-full">
                <div className="flex flex-col w-full pt-1">
                    <p className='font-bold'>Quiz 1</p>
                </div>
                <div className="flex flex-row gap-5 justify-between items-center">
                    <div>
                        <img src={Edit} alt=".." width="24" height="24" />
                    </div>
                    <div>
                        <img src={Delete} alt=".." width="47" height="47" />
                    </div>
                </div>
            </div>
        </div>
        <div class="p-6 bg-slate-100 rounded-xl border-solid border-2 border-slate-200 w-full">
            <div className="flex flex-row justify-between w-full">
                <div className="flex flex-col w-full pt-1">
                    <p className='font-bold'>Quiz 1</p>
                </div>
                <div className="flex flex-row gap-5 justify-between items-center">
                    <div>
                        <img src={Edit} alt=".." width="24" height="24" />
                    </div>
                    <div>
                        <img src={Delete} alt=".." width="47" height="47" />
                    </div>
                </div>
            </div>
        </div>
        </div>
         
        </AccordionDetails>
      </Accordion>
    
    </div>
  );
}