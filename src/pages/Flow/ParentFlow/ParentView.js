import React from 'react'
import Sidebar from './Sidebar'
import StudentInfo from './StudentInfo'
import {nanoid} from 'nanoid'

const ParentView = () => {
  
    let students = [
        {
            id: 1, fName: 'foo', lName: 'bar', email: 'baz@gmail.com',
            children: [
                { id: 1, fName: 'foo', lName: 'bar' },
                { id: 2, fName: 'foo', lName: 'bar' }
            ]
        },
        {
            id: 2, fName: 'Jordan', lName: 'Lee', email: 'lee@gmail.com',
            children: [
                { id: 1, fName: 'little J', lName: 'Lee' },

            ]
        }]
  
    return (
    <div className="bg-gray-200 flex justify-center " >
                <Sidebar />
                <div className="flex-1 my-60 space-y-8">

                    {students.map(student => (
                        <StudentInfo 
                            data={student} 
                            key={nanoid()}
                        />
                    ))}



                </div>
                {/* <div className="flex-1">
                    
                </div> */}


            </div>
  )
}

export default ParentView