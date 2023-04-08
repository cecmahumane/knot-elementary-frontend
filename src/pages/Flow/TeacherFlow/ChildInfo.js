import React from 'react';
import Sidebar from './Sidebar';
import { useParams } from "react-router-dom";


export default function ChildInfo() {
    let parents = [
        {
            id: '1',
            fName: 'foo',
            lName: 'bar',
            email: 'baz@gmail.com',
            children: [
                {
                    id: 1, fName: 'foo', lName: 'bar', time: '2023-4-14', comments: 'would like to discuss Math',
                    grades: {
                        math: 'A',
                        English: 'B',
                        Science: 'C'
                    }
                },
                {
                    id: 2, fName: 'Zoe', lName: 'bar', time: '2023-4-13', comments: 'would like to discuss Math',
                    grades: {
                        math: 'A',
                        English: 'B',
                        Science: 'C'
                    }
                },
                {
                    id: 2, fName: 'Ione', lName: 'bar', time: '2023-4-15', comments: 'would like to discuss Math',
                    grades: {
                        math: 'A',
                        English: 'B',
                        Science: 'C'
                    }
                }
            ]
        },

        {
            id: '2', fName: 'Jordan', lName: 'Lee', email: 'lee@gmail.com',
            children: [
                {
                    id: 1, fName: 'little J', lName: 'Lee', time: '2023-4-16', comments: 'would like to discuss Math',
                    grades: {
                        math: 'A',
                        English: 'B',
                        Science: 'C'
                    }
                },


            ]
        },
        {
            id: '3', fName: 'Ling', lName: 'Brown', email: 'Ling@gmail.com',
            children: [
                {
                    id: 1, fName: 'April', lName: 'Brown', time: '2023-4-17', comments: 'would like to discuss Math',
                    grades: {
                        math: 'A',
                        English: 'B',
                        Science: 'C'
                    }
                },
                {
                    id: 1, fName: 'H', lName: 'Brown', time: '2023-4-18', comments: 'would like to discuss English',
                    grades: {
                        math: 'A',
                        English: 'C',
                        Science: 'C'
                    }
                },

            ]
        }]

    const params = useParams()
    console.log(`here is ${params.parentId} and ${params.selected}`)
    const selectedChildren = parents.filter(parent => parent.id === params.parentId)
    console.log(selectedChildren[0].children)
    // const time = slectedChild[0].children.filter()
    // loop over an array of Object, finding mathcing keyvalue which is the fName, then getComputedStyle
    // time, comment, grades info
    const selectedChild = selectedChildren[0].children.filter(child => child.fName === params.selected)
    console.log(`here is selected child ${selectedChild[0].lName}`)


    return (
        <>
            <div className="h-screen bg-gray-200 flex space-x-8 justify-center items-center" >
                <Sidebar />
                <div className="flex-1 items-center justify-center bg-gray-400 space-y-4 rounded-lg">

                    <div className='text-white flex flex-col justify-center items-center p-6'>
                        <p className='mb-4'>Student Name: {params.selected}</p>

                        <p className='font-bold'>Time of the appointment</p>
                        <p className='bg-white mb-4 text-black rounded-lg h-16 w-40 flex justify-center items-center'>{selectedChild[0].time}</p>
                        <p className='font-bold'>Comment Subject</p>
                        <p className='bg-white text-black rounded-lg h-32 w-48 flex justify-center items-center text-center'>{selectedChild[0].comments}</p>
                    </div>



                </div>
                <div className="flex-1">
                    <div className='bg-white rounded-lg justify-between items-center py-8 px-4 text-2xl mr-4'>
                        <div className='text-black flex flex-col justify-center items-center p-10'>
                            <h2 className='mb-8'>Grades</h2>

                            <div className='bg-white text-black rounded-lg flex justify-center items-center border border-black p-10'>
                                <table className='border border-gray-400'>
                                    <thead className=''>
                                        <tr className='border border-black'>
                                            <th className='border border-gray-400'>Subject</th>
                                            <th>Current Quarter</th>

                                        </tr>
                                    </thead>
                                    <tbody className='border border-gray-400'>
                                        <tr className='border border-gray-400'>
                                            <td>Math</td>
                                            <td>{selectedChild[0].grades.math}</td>

                                        </tr>
                                        <tr className='border border-gray-400'>
                                            <td>English</td>
                                            <td>{selectedChild[0].grades.English}</td>

                                        </tr>
                                        <tr className='border border-gray-400'>
                                            <td>Science</td>
                                            <td>{selectedChild[0].grades.Science}</td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </>
    )
}