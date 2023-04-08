import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function ChildrenToSelect({ data, parentId }) {
    const defaultSelectValue = "Select a name"
    const [selected, setSelected] = useState(defaultSelectValue)



    return (
        <div className='flex flex-col items-center justify-center bg-gray-300 rounded-lg '>


            <label htmlFor="Name" className='pt-2'>Please Select A Name</label>
            <select
                name="children"
                defaultValue={selected}
                style={{ color: selected === defaultSelectValue ? "gray" : "black" }}
                onChange={e => setSelected(e.target.value)}
                className='flex w-1/3 p-2 m-5 bg-gray-200 rounded-lg'
            >
                <option className='text-sm bg-gray-200'>Select a name</option>
                {data.map(child => (
                    <option className='text-sm bg-gray-200'>{child}</option>
                ))}
            </select>

            <p className='mt-10 text-lg'>You Selected: {selected}</p>

            <button className='bg-blue-300 p-1'>
                <Link to={`/teacher/${parentId}/${selected}`}>OK</Link>
            </button>
        </div>
    )
}