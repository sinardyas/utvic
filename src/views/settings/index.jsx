
import Breadcrumbs from '@mui/material/Breadcrumbs';
import React, { Component, useContext } from 'react'
import '../../styles/Makalah.scss'

import Link from '@mui/material/Link';
import Header from '../../components/Header';
import DrawerNav from '../../components/menu/DrawerNav';
import FormSelect from '../../components/FormSelect';
// import from './sessionPenjurian'
import SessionPenjurian from './session-penjurian/SessionPenjurian';
import QuotaPenjurian from './session-penjurian/QuotaPenjurian';
import JumlahMakalah from './session-penjurian/JumlahMakalah';
import { GlobalContext } from '../../store/global/Provider';



export default class index extends Component {

    constructor(props) {
        super(props);

        this.state = {
            toggleTab: 0,
            toggleSideMenu: 0
        }
    }

    static contextType = GlobalContext


render() {
    const tabItem =
        this.state.toggleSideMenu === 0 ?
            ([
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
            ])
            : ([
                {
                    'name': 'makalah-group',
                    'label': 'Makalah per Group'
                }, {
                    'name': 'juri-group',
                    'label': 'Pilih Juri untuk Group'
                }
            ])
        ;

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

    const toggleSideMenu = (i, e) => {
        this.setState(
            {
                toggleSideMenu: i
            }
        )
    }


    // const Profile =  () => {
    //     let { page } = useParams()
    //     const navigate = useNavigate()
    //     return (
    //         <GlobalContext.Consumer>
    //             {context => (
    //                 <Child
    //                     context={context}
    //                     page={page}
    //                     navigate={navigate}
    //                 />
    //             )}
    //         </GlobalContext.Consumer>
    //     )
    // }
    console.log(this.context.kamu);

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
                    <FormSelect name="setting_type" placeholder="Setting Type" formheader="true" data={listType} />
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
                        {listType.map((v, i) =>
                            <button className={this.state.toggleSideMenu === i ? 'side-menu-active' : 'side-menu'} onClick={() => toggleSideMenu(i)}>{v.label}</button>
                        )}
                        <div className="h-2"></div>
                    </div>
                    <div className="md:w-[85vw]">
                        {this.state.toggleSideMenu === 0 ?
                            (<>
                                {/* Session Juri */}
                                <div className={this.state.toggleTab === 0 ? 'tab-content tab-content-active' : 'tab-content'}>
                                    <SessionPenjurian />
                                </div>
                                <div className={this.state.toggleTab === 1 ? 'tab-content tab-content-active' : 'tab-content'}>
                                    <QuotaPenjurian />
                                </div>
                                <div className={this.state.toggleTab === 2 ? 'tab-content tab-content-active' : 'tab-content'}>
                                    <JumlahMakalah />
                                </div>
                            </>
                            ) : (
                                <>
                                    {/* Group JUri */}
                                    <div className={this.state.toggleTab === 0 ? 'tab-content tab-content-active' : 'tab-content'}>
                                        <SessionPenjurian />
                                    </div>
                                    <div className={this.state.toggleTab === 1 ? 'tab-content tab-content-active' : 'tab-content'}>
                                        <QuotaPenjurian />
                                    </div>
                                    <div className={this.state.toggleTab === 2 ? 'tab-content tab-content-active' : 'tab-content'}>
                                        <JumlahMakalah />
                                    </div>
                                </>
                            )
                        }
                    </div>
                </div>

            </div>
        </div >
    )
}
}
