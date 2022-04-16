import { Modal } from '@mui/material';
import { Box } from '@mui/system';
import React, {  } from 'react'
import { EditIcon , FolderIcon, TrashIcon} from '../../../assets/images/icons';
import FormInput from '../../../components/FormInput';
import FormSelect from '../../../components/FormSelect';
import ButtonAdd from '../components/ButtonAdd';


const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 2,
};

const listJuri = [
    {
        "value": "'001'",
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
const ModalAddMakalah = ({ handleClose, open }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style} className='w-3/4 p-4 px-4 py-4 mx-auto bg-white border border-gray-200 rounded shadow md:rounded-none md:border-l-2 md:border-l-yellow-400'>
                <div class="text-3xl font-semibold text-black">Jumlah Makalah per Group</div>

                <div class="mt-10 space-y-6">
                    <div class="gap-4 md:flex md:justify-between">
                        <div class="flex flex-col md:w-1/2">
                            <FormSelect name="kat_utama" label="Kategori Utama" placeholder="Pilih Kategori Utama" data={listKatUtama} />
                        </div>

                        <div class="flex flex-col md:w-1/2">
                            <FormSelect name="sub_kat" label="Pilih Sub Kategori " placeholder="Pilih Sub Kategori" data={listSubKatUtama} />
                        </div>
                    </div>


                    <div class="flex flex-col">
                        <FormInput name="jum_makalah" label="Jumlah Makalah" placeholder="Masukan Jumlah Makalah" />
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

const JumlahMakalah = () => {

    const [open, setOpen] = React.useState(false);
    const [openAddMakalah, setOpenAddMakalah] = React.useState(false);

    const handleClose = () => setOpen(false);
    const handleOpenAddMakalah = () => setOpenAddMakalah(true);
    const handleCloseAddMakalah = () => setOpenAddMakalah(false);

    const respDAta = {
        "Status": 200,
        "Message": "Sukses",
        "Data": [
            {
                "JumlahMakalahId": '001',
                "Category": "LISA",
                "SubCategory": "Poeple & Culture",
                "JumlahMakalah": 30
            },
            {
                "JumlahMakalahId": '002',
                "Category": "LISA",
                "SubCategory": "Operational",
                "JumlahMakalah": 30
            },
            {
                "JumlahMakalahId": '002',
                "Category": "LISA",
                "SubCategory": "Bussiness Model",
                "JumlahMakalah": 30
            }]
    };


    return (
        <div>
            <ButtonAdd 
                onClick={handleOpenAddMakalah}
                label="Add Jumlah Makalah"
            />

            <div class="mt-10 space-y-5">
                {
                    respDAta.Data.map((v, i) =>
                <div class="flex items-center justify-between rounded border border-gray-200 bg-white py-4 px-4 shadow md:rounded-none md:border-l-2 md:border-l-yellow-400">
                    <div class="flex flex-col gap-2">
                        <div class="flex gap-4 font-semibold">
                            <div class="text-2xl text-black">{v.Category}</div>
                            <div class="text-2xl text-black">26/50</div>
                        </div>
                        <div class="gap-4 md:flex">
                            <div class="text-xl text-gray-800">{v.SubCategory}</div>
                            <div class="flex items-center justify-start gap-2 font-sans text-xl text-gray-500">
                                <span>
                                   <img src={FolderIcon} alt="view" className='w-6 h-6' />
                                </span>
                                <span>{v.JumlahMakalah} Makalah</span>
                            </div>
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
            <ModalAddMakalah
                handleClose={handleCloseAddMakalah}
                open={openAddMakalah}
            />
        </div>
    )
}
export default JumlahMakalah;