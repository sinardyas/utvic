import React, { useState } from 'react'

const Tabs = (props) => {
    const [toggleTab, setToggleTab] = useState(0);

    const toggleTabButton = (i) => {
        setToggleTab(i);
    }

    return (
        <div className="flex items-center justify-center my-8 space-x-8">
            {props.data.map((v, i) =>
                <button type='button' onClick={(e) => toggleTabButton(i)} className={`snap-start whitespace-nowrap rounded-md bg-yellow-400 px-4 py-6 text-xl ${toggleTab === i ? 'tabs active-tab' : 'tabs'} `}>
                    {v.label}
                </button>
            )}

        </div>
    )
}

export default Tabs