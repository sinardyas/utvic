
import Breadcrumbs from '@mui/material/Breadcrumbs';
import React, { Component } from 'react'
import '../../styles/Makalah.scss'

import Link from '@mui/material/Link';
import Header from '../../components/Header';
import DrawerNav from '../../components/menu/DrawerNav';
import AllArea from './TopFiveArea';
import TopFiveArea from './AllArea';



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
                'name': 'top-5',
                'label': 'Top 5 Area'
            }, {
                'name': 'all-dashboard',
                'label': 'All Dashboard'
            }
        ];

        const toggleTabButton = (i) => {
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
                                <Link
                                    underline="hover"
                                    color="inherit"

                                    className='font-bold'
                                >
                                    {this.state.toggleTab ? 'All Dashboard' : 'Top 5 Area'}
                                </Link>

                            </Breadcrumbs>
                        </div>
                    </div>
                </div>

                <div className='container'>

                    <div className="flex items-center justify-center my-8 space-x-8">
                        {tabItem.map((v, i) =>
                            <button type='button' onClick={() => toggleTabButton(i)} className={this.state.toggleTab === i ? 'tabs active-tab' : 'tabs'} data-target={"tab-content-" + v.name}>
                                {v.label}
                            </button>
                        )}

                    </div>

                    <div className={this.state.toggleTab === 0 ? 'tab-content tab-content-active' : 'tab-content'}>
                        <AllArea />
                    </div>
                    <div className={this.state.toggleTab === 1 ? 'tab-content tab-content-active' : 'tab-content'}>
                        <TopFiveArea />
                    </div>

                </div>
            </div>
        )
    }
}
