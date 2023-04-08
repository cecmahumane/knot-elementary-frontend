import React from "react";
import { Link } from "react-router-dom";

export default function EventDetails({selectedDate, event_id, appointment_id, appointments}){
    
    // hardcode selectedData for now
   
    const options={
        hour: "numeric",
        minute: "numeric"
    }

    return(
        <>
        <div className="w-1/2  bg-red-100">
            <h2>{selectedDate.toDateString()}</h2>
            {appointments.map(appointment=>{
                // need to create appointment/conform
                const confirmLink=`/appointments/confirm?event_id=${event_id}&appointment_id=${appointment.id}`
                return (<ul>
                    <li className="pr-1">
                        {appointment.start.toLocaleString("en-US", options)}-{appointment.end.toLocaleString("en-US", options)}
                        {appointment.personID == null && <Link className="pl-2" to={confirmLink}>Select</Link>}
                    </li>
                </ul>)
            })}
            

        </div>
        
        
        </>
    )

}