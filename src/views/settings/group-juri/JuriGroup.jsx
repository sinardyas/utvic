import { Modal } from '@mui/material';
import { Box } from '@mui/system';
import React, { Component } from 'react'
import { UserIcon } from '../../../assets/images/icons';
import FormSelect from '../../../components/FormSelect';


const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 2,
};

const listJuri = [
    {
        "value": "001",
        "label": "Juri-1"
    },
    {
        "value": "002",
        "label": "Juri-2"
    },
    {
        "value": "003",
        "label": "Juri-3"
    },
]

const ModalChangeGroup = ({ handleClose, open }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style} className='w-3/4 p-4 px-4 py-4 mx-auto bg-white border border-gray-200 rounded shadow md:rounded-none md:border-l-2 md:border-l-yellow-400'>
                <div class="text-3xl font-semibold text-black">Pindah Makalah</div>

                <div class="mt-10 space-y-6">
                    <div class="items-center gap-4 md:flex md:justify-between">
                        <div class="flex md:w-1/2">
                            <span class="text-xl font-semibold text-black">Kategori Utama :</span>
                            <span class="text-xl font-semibold text-black">LISA</span>
                        </div>
                        <div class="flex md:w-1/2">
                            <span class="text-xl font-semibold text-black">Sub Kategori :</span>
                            <span class="text-xl font-semibold text-black">People & Culture</span>
                        </div>
                    </div>

                    <div class="gap-4 md:flex md:justify-between">
                        <div class="flex flex-col md:w-1/2">
                            <FormSelect name="lead_juri" label="Pilih Leader Juri" placeholder="Nama Juri" data={listJuri} />
                        </div>

                        <div class="flex flex-col md:w-1/2">
                            <FormSelect name="juri" label="Pilih Juri " placeholder="Nama Juri" data={listJuri} />
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


const JuriGroup = () => {

    const [open, setOpen] = React.useState(false);
    const [openChangeGroup, setOpenChangeGroup] = React.useState(false);

    const handleClose = () => setOpen(false);
    const handleOpenChangeGroup = () => setOpenChangeGroup(true);
    const handleCloseChangeGroup = () => setOpenChangeGroup(false);
    
        return (
            <div>
                <div class="mt-10 space-y-5">
                    <div class="flex items-center justify-between rounded border border-gray-200 bg-white py-4 px-4 shadow md:rounded-none md:border-l-2 md:border-l-yellow-400">
                        <div class="flex w-3/4 flex-col gap-2">
                            <div class="flex gap-4 font-semibold">
                                <div class="text-2xl text-black">Lisa</div>
                            </div>
                            <div class="gap-4 md:flex">
                                <div class="text-xl text-gray-800">People & Culture</div>
                            </div>
                        </div>
                        <div class="flex w-1/4 justify-end">
                            <button class="rounded-full bg-yellow-400 shadow hover:cursor-pointer mr-4"
                            onClick={handleOpenChangeGroup}
                            >
                                <img src={UserIcon} alt="group-icon" className='w-7 h-7' srcset="" />
                            </button>
                        </div>
                        <span class="whitespace-nowrap text-xl font-semibold text-gray-600">10 Juri</span>
                    </div>
                    <ModalChangeGroup
                        handleClose={handleCloseChangeGroup}
                        open={openChangeGroup}
                    />
                </div>
            </div>
        )
}
    
export default JuriGroup;