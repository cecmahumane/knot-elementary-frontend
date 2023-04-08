import React, { useState } from "react"
import Sidebar from './Sidebar'
import ParentInfo from './ParentInfo'
import ChildrenToSelect from "./ChildrenToSelect"

export default function TeacherView() {
    let parents = [
        {
            id: 1,
            fName: 'foo',
            lName: 'bar',
            email: 'baz@gmail.com',
            children: [
                {
                    id: 1, fName: 'foo', lName: 'bar', time: '2022-4-14', comments: 'would like to discuss Math',
                    grades: {
                        math: 'A',
                        English: 'B',
                        Science: 'C'
                    }
                },
                {
                    id: 2, fName: 'Zoe', lName: 'bar', time: '2022-4-14', comments: 'would like to discuss Math',
                    grades: {
                        math: 'A',
                        English: 'B',
                        Science: 'C'
                    }
                },
                {
                    id: 2, fName: 'Ione', lName: 'bar', time: '2022-4-14', comments: 'would like to discuss Math',
                    grades: {
                        math: 'A',
                        English: 'B',
                        Science: 'C'
                    }
                }
            ]
        },
        {
            id: 2, fName: 'Jordan', lName: 'Lee', email: 'lee@gmail.com',
            children: [
                {
                    id: 1, fName: 'little J', lName: 'Lee', time: '2022-4-14', comments: 'would like to discuss Math',
                    grades: {
                        math: 'A',
                        English: 'B',
                        Science: 'C'
                    }
                },


            ]
        },
        {
            id: 3, fName: 'Ling', lName: 'Brown', email: 'Ling@gmail.com',
            children: [
                {
                    id: 1, fName: 'April', lName: 'Brown', time: '2022-4-14', comments: 'would like to discuss Math',
                    grades: {
                        math: 'A',
                        English: 'B',
                        Science: 'C'
                    }
                },
                {
                    id: 1, fName: 'H', lName: 'Brown', time: '2022-4-14', comments: 'would like to discuss Math',
                    grades: {
                        math: 'A',
                        English: 'B',
                        Science: 'C'
                    }
                },

            ]
        }]

    // save fName and then pass the fName to the ChildrenToSelect component as props to render children name
    const [children, setChildren] = useState([])
    const [parentId, setParentId] = useState('')
    function handleClick(children, parentId) {
        const names = children.map(child => child.fName)
        setChildren(names)
        setParentId(parentId)

    }

    return (
        <>
            <div className="h-screen bg-gray-200 flex space-x-8 justify-center items-center" >
                <Sidebar />
                <div className="flex-1 items-center justify-center border-gray-300 space-y-4">

                    {parents.map(parent => (
                        <ParentInfo data={parent} handleClick={handleClick} />
                    ))}



                </div>
                <div className="flex-1">
                    <div className='bg-white rounded-lg justify-between items-center py-8 px-4 text-2xl mr-4'>
                        <ChildrenToSelect data={children} parentId={parentId} />
                    </div>
                </div>


            </div>

        </>

    )
}

