import React, { useState } from 'react';


export default function (props) {


    return (
        <div className=''>
            <div className='bg-white rounded-lg flex flex-grow justify-between items-center py-8 px-4 text-xl'>
                <h2 className='mr-8'>{props.data.fName} {props.data.lName}</h2>
                <button className='bg-blue-300 text-white p-2' onClick={() => props.handleClick(props.data.children, props.data.id)}>View</button>


            </div>


        </div>
    )
}
