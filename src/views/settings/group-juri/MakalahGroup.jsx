import React, { Component } from 'react';
import { TrashIcon, ArrangeSquare } from '../../../assets/images/icons';
// import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
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

const listKatUtama = [
    {
        "value": "kat1",
        "label": "Kategori - 1"
    },
    {
        "value": "kat2",
        "label": "Kategori - 2"
    },
    {
        "value": "kat3",
        "label": "Kategori - 3"
    },
]
const listSubKatUtama = [
    {
        "value": "subkat1",
        "label": "Sub Kategori - 1"
    },
    {
        "value": "subkat2",
        "label": "Sub Kategori - 2"
    },
    {
        "value": "subkat3",
        "label": "Sub Kategori - 3"
    },
]
const listMakalah = [
    {
        "value": "001",
        "label": "Makalah-1"
    },
    {
        "value": "002",
        "label": "Makalah-2"
    },
    {
        "value": "003",
        "label": "Makalah-3"
    },
]

const ModalChangeMakalah = ({ handleClose, open }) => {
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
                            <FormSelect onSelect={() => console.log("OK")} name="kat_utama" label="Makalah yang ingin dipindahkan" placeholder="Pilih Sub Kategori Utama" data={listKatUtama} />
                        </div>

                        <div class="flex flex-col md:w-1/2">
                            <FormSelect name="sub_kat" label="Group untuk dipindahkan " placeholder="Pilih Group" data={listSubKatUtama} />
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

const ModalDeleteMakalah = ({ handleClose, open }) => {
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

                        <div class="flex flex-col w-full">
                            <FormSelect name="makalah" label="Makalah yang ingin dihapus " placeholder="Pilih Makalah" data={listMakalah} />
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

const MakalahGroup = () => {

    const [open, setOpen] = React.useState(false);
    const [openChangeMakalah, setOpenChangeMakalah] = React.useState(false);
    const [openDeleteMakalah, setOpenDeleteMakalah] = React.useState(false);

    const handleClose = () => setOpen(false);
    const handleOpenChangeMakalah = () => setOpenChangeMakalah(true);
    const handleCloseChangeMakalah = () => setOpenChangeMakalah(false);
    const handleOpenDeleteMakalah = () => setOpenDeleteMakalah(true);
    const handleCloseDeleteMakalah = () => setOpenDeleteMakalah(false);




    const respData = {
        "Status": 200,
        "Message": "Sukses",
        "Data": [
            {
                "CategoryGroupId": '001',
                "CategoryId": '001',
                "CategoryName": "LISA",
                "SubCategory": "Poeple & Culture",
                "JumlahMakalah": 30
            },
            {
                "CategoryGroupId": '001',
                "CategoryId": '001',
                "CategoryName": "LISA",
                "SubCategory": "Operational",
                "JumlahMakalah": 30
            },
            {
                "CategoryGroupId": '001',
                "CategoryId": '001',
                "CategoryName": "LISA",
                "SubCategory": "Bisnis Model",
                "JumlahMakalah": 30
            }
        ]
    };



    return (
        <div>

            <div class="mt-10 space-y-5">
                {
                    respData.Data.map((v, i) =>
                        <div class="flex items-center justify-between rounded border border-gray-200 bg-white py-4 px-4 shadow md:rounded-none md:border-l-2 md:border-l-yellow-400">
                            <div class="flex flex-col gap-2">
                                <div class="flex gap-4 font-semibold">
                                    <div class="text-2xl text-black">{v.CategoryName}</div>
                                </div>
                                <div class="gap-4 md:flex">
                                    <div class="text-xl text-gray-800">{v.SubCategory}</div>
                                    <div class="flex items-center justify-start gap-2 font-sans text-xl text-gray-500">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder-minus">
                                                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                                                <line x1="9" y1="14" x2="15" y2="14"></line>
                                            </svg>
                                        </span>
                                        <span>{v.JumlahMakalah} Quota</span>
                                    </div>
                                </div>
                            </div>
                            <div class="flex  md:flex-row md:justify-between flex-col gap-2">
                                <button class="p-2" onClick={handleOpenChangeMakalah}>
                                    <img src={ArrangeSquare} alt="" className='w-6 h-6' />
                                </button>
                                <button class="rounded-full bg-yellow-400 p-2 shadow hover:cursor-pointer"
                                onClick={handleOpenDeleteMakalah} >
                                    <img src={TrashIcon} alt="" className='w-6 h-6' />
                                </button>
                            </div>
                        </div>
                    )
                }

            </div>
            <ModalChangeMakalah
                handleClose={handleCloseChangeMakalah}
                open={openChangeMakalah}
            />
            <ModalDeleteMakalah
                handleClose={handleCloseDeleteMakalah}
                open={openDeleteMakalah}
            />
        </div>
    )
}

export default MakalahGroup;