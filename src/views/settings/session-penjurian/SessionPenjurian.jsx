import React, { Component } from 'react'
import { CalendarIcon, EditIcon, TrashIcon } from '../../../assets/images/icons';
import ButtonAdd from '../components/ButtonAdd';
import DateFnsAdapter from "@date-io/date-fns";
import { Modal } from '@mui/material';
import { Box } from '@mui/system';
import DatePickers from '../components/FormDatePickers';


const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 2,
};
const ModalAddSession = ({ handleClose, open }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style} className='w-3/4 p-4 px-4 py-4 mx-auto bg-white border border-gray-200 rounded shadow md:rounded-none md:border-l-2 md:border-l-yellow-400'>
                <div class="text-3xl font-semibold text-black">Add Session Penjurian</div>

                <div class="mt-10 space-y-6">
                    <div class="flex flex-col">
                        <label for="atas" class="text-xl font-semibold">Masukan Tipe Penjurian</label>
                        <input name="atas" placeholder="Masukan Tipe Penjurian" class="mt-2 rounded border bg-gray-100 py-4 pl-2 pr-10 text-gray-400 focus:outline-none md:pr-32" />
                    </div>

                    <div class="gap-4 md:flex md:justify-between">
                        <div class="flex flex-col md:w-1/2">
                            <DatePickers name="mulai" label="Mulai" />
                        </div>

                        <div class="flex flex-col md:w-1/2">

                            <DatePickers name="selesai" label="Selesai" />
                        </div>
                    </div>
                </div>
                <div class="mt-5 flex justify-start gap-3">
                    <button class="rounded-md bg-red-500 px-8 py-3 font-sans text-xl text-white" onClick={handleClose}>Cancel</button>
                    <button class="rounded-md bg-yellow-400 px-8 py-3 font-sans text-xl text-black">Save</button>
                </div>

            </Box>
        </Modal>
    );
};


const SessionPenjurian = () => {

    const [open, setOpen] = React.useState(false);
    const [openAddSession, setOpenAddSession] = React.useState(false);

    const handleClose = () => setOpen(false);
    const handleOpenAddSession = () => setOpenAddSession(true);
    const handleCloseAddSession = () => setOpenAddSession(false);


    const respData = {
        "Status": 200,
        "Message": "Sukses",
        "Data": [
            {
                "JudgingSessionId": '001',
                "JudgingSessionName": "Penjurian Lokal",
                "StartDate": "2021-10-01",
                "EndDate": "2021-12-01"
            },
            {
                "JudgingSessionId": '002',
                "JudgingSessionName": "Penjurian Nasional",
                "StartDate": "2021-10-01",
                "EndDate": "2021-12-01"
            },
            {
                "JudgingSessionId": '003',
                "JudgingSessionName": "Penjurian Grand Final",
                "StartDate": "2021-10-01",
                "EndDate": "2021-12-01"
            }
        ]
    };

    const getDateFormat = (date) => {
        const dateFns = new DateFnsAdapter();
        const initialDateFnsDate = dateFns.date(date);
        const year = dateFns.format(initialDateFnsDate,'year');
        const month = dateFns.format(initialDateFnsDate,'monthShort');
        const day = dateFns.format(initialDateFnsDate,'dayOfMonth');
        return day+' '+month+', '+year;
    }


    return (
        <div>
            <ButtonAdd
                onClick={handleOpenAddSession}
                label="Add Session"
            />

            <div class="mt-10 space-y-5">
                {
                    respData.Data.map((v, i) =>
                        <div
                            class="flex items-center justify-between space-y-2 rounded border border-gray-200 bg-white py-6 px-4 shadow">
                            <div class="flex flex-col gap-2">
                                <div class="text-2xl text-black">{v.JudgingSessionName}</div>
                                <div class="flex items-center justify-start gap-2 font-sans text-xl text-gray-500">
                                    <span>
                                        <img src={CalendarIcon} alt="calendar" className='w-6 h-6' />
                                    </span>
                                    <span>{getDateFormat(v.StartDate)}</span>
                                </div>
                            </div>
                            <div class="flex md:flex-row flex-col gap-2">
                                <button class="p-2">
                                    <img src={EditIcon} alt="edit-icon" className='w-6 h-6' />
                                </button>
                                <button class="rounded-full bg-yellow-400 p-2 shadow hover:cursor-pointer">
                                    <img src={TrashIcon} alt="delete" className='w-6 h-6' />
                                </button>
                            </div>
                        </div>
                    )
                }
            </div>
            <ModalAddSession
                handleClose={handleCloseAddSession}
                open={openAddSession}
            />
        </div>
    )
}
export default SessionPenjurian;