import React from "react"

export default function StudentInfo ({ data }) {
    // const [childName, setChildName] = React.useState([])


    return (
            <div className='ml-auto mr-auto bg-white w-1/3 rounded-lg flex flex-grow justify-between items-center py-4 px-4 text-xl'>
                <h2 className='pl-9'>{data.fName} {data.lName}</h2>
                <button className='bg-blue-300 text-white p-2 mr-4 rounded-full' >View</button>


            </div>
  

        
    )
}
