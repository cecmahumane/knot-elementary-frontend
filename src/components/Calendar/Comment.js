import React, { useState } from 'react'
import { useParams } from "react-router-dom";

export default function Comment() {
    const [comment, setComment] = useState('');
    const [show, setShow] = useState(false);
    const params = useParams()
    console.log(`here is params ${params.comments}`)

    function handleClick() {
        setShow(!show)
    }
    const appointments = [
        {
            appointmentID: '0',
            start: new Date(2023, 4, 16, 14, 0),
            end: new Date(2023, 4, 16, 14, 30),
            personID: null
        },
        {
            appointmentID: '1',
            start: new Date(2023, 4, 16, 14, 30),
            end: new Date(2023, 4, 16, 15, 0),
            personID: '8888'
        },
        {
            appointmentID: '2',
            start: new Date(2023, 4, 16, 15, 0),
            end: new Date(2023, 4, 16, 15, 30),
            personID: null
        },
        {
            appointmentID: '3',
            start: new Date(2023, 4, 16, 15, 30),
            end: new Date(2023, 4, 16, 16, 0),
            personID: null
        },
        {
            appointmentID: '4',
            start: new Date(2023, 4, 17, 14, 0),
            end: new Date(2023, 4, 17, 14, 30),
            personID: null
        },
        {
            appointmentID: '5',
            start: new Date(2023, 4, 17, 14, 30),
            end: new Date(2023, 4, 17, 15, 0),
            personID: null
        },
        {
            appointmentID: '6',
            start: new Date(2023, 4, 17, 15, 0),
            end: new Date(2023, 4, 17, 15, 30),
            personID: null
        },
        {
            appointmentID: '7',
            start: new Date(2023, 4, 17, 15, 30),
            end: new Date(2023, 4, 17, 16, 0),
            personID: null
        }
    ]
    const options = {
        hour: "numeric",
        minute: "numeric"
    }
    const selectedTime = appointments.filter(appointment => appointment.appointmentID === params.comments)
    console.log(selectedTime[0])
    return (
        <div className='bg-gray-200 h-screen flex flex-col justify-center items-center'>
            <div className='bg-gray-300 p-20 rounded-lg'>

                <div className='flex flex-col justify-center items-center'>
                    <div>Here is the time you reserved with the teacher</div>
                    <div className='bg-white m-4 p-6 rounded-lg'>
                        {selectedTime[0].start.toLocaleString("en-US", options)}-{selectedTime[0].end.toLocaleString("en-US", options)}
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center ">
                    <label>Do you have some thing you want to discuss with the teacher? Elaborate more here</label>
                    <textarea
                        onChange={e => setComment(e.target.value)}
                        name='comments'
                        rows="5"
                        col='5'
                        placeholder="Questions/comments..."
                        className='mt-4 rounded-lg'>
                    </textarea>
                    <button className='bg-blue-300 mt-8' onClick={handleClick}>Save</button>
                    {show && <p className='bg-white mt-4 border border-gray-400 px-10 py-4 rounded-lg'>{comment}</p>}



                </div>
            </div>
        </div>
    )
}