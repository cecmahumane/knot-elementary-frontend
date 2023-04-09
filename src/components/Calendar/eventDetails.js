import React from "react";
import { Link } from "react-router-dom";


export default function EventDetails({ selectedDate, event_id, appointments }) {

    // hardcode selectedData for now
    const options = {
        hour: "numeric",
        minute: "numeric"
    }

    // things to do 1. when link to the comment Component, selected time should be passed down 
    return (
        <>
            <div className="  bg-gray-300 ml-20 rounded-lg p-20">
                <h2 className="mb-6"><span className="text-blue-700">Here are available slots for </span> <span className="border border-blue-300 p-10 bg-white rounded-lg">{selectedDate.toDateString()}</span></h2>
                {appointments.map(appointment => {
                    // need to create appointment/conform
                    // const confirmLink = `/appointments/confirm?event_id=${event_id}&appointment_id=${appointment.id}`
                    return (<ul className="bg-white rounded-lg mb-4 p-8 flex items-center justify-center">
                        <li className="pr-1">
                            {appointment.start.toLocaleString("en-US", options)}-{appointment.end.toLocaleString("en-US", options)}
                            {appointment.personID == null && <Link className="p-8 bg-gray-300 rounded-lg ml-4 hover:bg-blue-300" to={`/calendar/${appointment.appointmentID}`}>Select</Link>}
                        </li>
                    </ul>)
                })}


            </div>


        </>
    )

}

