
import Breadcrumbs from '@mui/material/Breadcrumbs';
import React, { Component } from 'react'
import '../../styles/Makalah.scss'

import Link from '@mui/material/Link';
import Header from '../../../components/Header';
import DrawerNav from '../../../components/menu/DrawerNav';
import FormSelect from '../../../components/FormSelect';
import SessionPenjurian from '.';
import QuotaPenjurian from '../QuotaPenjurian';
import JumlahMakalah from './JumlahMakalah';


export default class index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            toggleTab: 0
        }
    }

    render() {
        const tabItem = [
            {
                'name': 'session-penjurian',
                'label': 'Session Penjurian'
            }, {
                'name': 'quota-penjurian',
                'label': 'Quota Penjurian'
            }, {
                'name': 'jumlah-makalah',
                'label': 'Jumlah Makalah per Group'
            }
        ];
        const listType = [
            {
                'name': 'setting-session-penjurian',
                'label': 'Setting Session dan Quouta Penjurian'
            }, {
                'name': 'setting-group-juri',
                'label': 'Setting Group Juri'
            }, {
                'name': 'juri-lokal',
                'label': 'Penjurian Lokal'
            }, {
                'name': 'juri-nasional',
                'label': 'Penjurian Nasional'
            }, {
                'name': 'juri-final',
                'label': 'Penjurian Final'
            }
        ];

        const toggleTabButton = (i, e) => {
            this.setState(
                {
                    toggleTab: i
                }
            )
        }

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


                <div className='space-from-header py-[1rem] bg-slate-200'>
                    <div className="container">
                        <div role="presentation" className='pt-3'>
                            <Breadcrumbs aria-label="breadcrumb" >
                                <Link underline="hover" color="inherit" href="/" className='font-bold'>
                                    Home
                                </Link>
                                <Link underline="hover" color="inherit" href="/makalah" className='font-bold'>
                                    Pilih Makalah
                                </Link>
                                <Link
                                    underline="hover"
                                    color="inherit"

                                    className='font-bold'
                                >
                                    Mandatory
                                </Link>

                            </Breadcrumbs>
                        </div>
                    </div>
                </div>

                <div className='container mt-4'>

                    <div className="md:hidden">
                        <FormSelect name="setting_type" placeholder="Setting Type" formheader="true" data={listType}/>
                    </div>
                    <div className="scroll-menu mt-5 md:justify-center flex snap-x scroll-pl-6 gap-4 overflow-x-auto">
                        {tabItem.map((v, i) =>
                            <button type='button' onClick={(e) => toggleTabButton(i)} className={`snap-center whitespace-nowrap rounded-md bg-yellow-400 px-4 py-6 text-xl ${this.state.toggleTab === i ? 'tabs active-tab' : 'tabs'} `} data-target={"tab-content-" + v.name}>
                                {v.label}
                            </button>
                        )}

                    </div>

                    <div className="md:flex md:justify-between md:gap-2">
                        <div className='hidden md:block md:w-[15vw] mt-32 space-y-4 bg-white shadow h-fit'>
                            {listType.map((v) =>
                            <button className='text-slate-700 py-2 px-4'>{v.label}</button>
                            )}
                            {/* <button className='bg-yellow-400 text-black font-semibold px-4 py-2'>Setting Session dan Quota Penjurian</button>
                            <button className=' text-slate-700 py-2 px-4'>Penjurian Lokal</button>
                            <button className=' text-slate-700 py-2 px-4'>Penjurian Nasional</button>
                            <button className=' text-slate-700 py-2 px-4'>Penjurian Grand Final</button> */}
                            <div className="h-2"></div>
                        </div>
                        <div className="md:w-[85vw]">
                            <div className={this.state.toggleTab === 0 ? 'tab-content tab-content-active' : 'tab-content'}>
                                <SessionPenjurian />
                            </div>
                            <div className={this.state.toggleTab === 1 ? 'tab-content tab-content-active' : 'tab-content'}>
                                <QuotaPenjurian />
                            </div>
                            <div className={this.state.toggleTab === 2 ? 'tab-content tab-content-active' : 'tab-content'}>
                                <JumlahMakalah />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
