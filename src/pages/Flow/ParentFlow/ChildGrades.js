import React from 'react'
import Sidebar from './Sidebar'

const ChildGrades = () => {

    let teacher = { fName: 'Super', lName: 'Teacher' };
    let grades = { eng: 'A', geo: 'A', math: 'B', pe: 'A', sci: 'C+' }


    return (
        <div className="bg-gray-200 flex">
            <Sidebar />

            <div className='mx-auto my-auto text-center'>

                <div className='bg-white rounded-lg flex space-x-40 flex-grow items-center py-6 text-xl'>
                    <h2 className='pl-9'>{teacher.fName} {teacher.lName}</h2>
                    <button className='bg-blue-300 text-white p-2 mr-4 ml-10 rounded-full' >Book Appt. </button>
                </div>
                <div className="my-4 grid grid-cols-3 grid-rows-2 gap-4">
                    <div className="bg-white rounded-lg p-4 flex-col">
                        <div >
                            English
                        </div>
                        <div>
                            {grades.eng}
                        </div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                        <div>
                            Geography
                        </div>
                        <div>
                            {grades.geo}
                        </div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                        <div>
                            Math
                        </div>
                        <div>
                            {grades.math}
                        </div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                        <div>
                            Physical Education
                        </div>
                        <div>
                            {grades.pe}
                        </div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                        <div>
                            Science
                        </div>
                        <div>
                            {grades.sci}
                        </div>
                    </div>
                    {/* <div className="bg-white rounded-lg p-4">6</div> */}
                </div>
                
            </div>
        </div>
    )
}

export default ChildGrades