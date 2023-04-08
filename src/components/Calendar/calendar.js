import React from "react";
import CalendarFrame from './CalendarFrame'
import EventDetails from './eventDetails'
import Button from "../Button";
import { format } from "date-fns";

// will be replaced by backend data, mockdata here
const mockData = {
    title: 'Welcome to the Parent-Teacher Conference!',
    // sorted by start date
    //Attention: month is 0 indexed
    appointments: [
        {
            start: new Date(2023, 3, 16, 14, 0),
            end: new Date(2023, 4, 16, 14, 30),
            personID: null
        },
        {
            start: new Date(2023, 3, 16, 14, 30),
            end: new Date(2023, 3, 16, 15, 0),
            personID: '8888'
        },
        {
            start: new Date(2023, 3, 16, 15, 0),
            end: new Date(2023, 3, 16, 15, 30),
            personID: null
        },
        {
            start: new Date(2023, 3, 16, 15, 30),
            end: new Date(2023, 3, 16, 16, 0),
            personID: null
        },
        {
            start: new Date(2023, 3, 17, 14, 0),
            end: new Date(2023, 3, 17, 14, 30),
            personID: null
        },
        {
            start: new Date(2023, 3, 17, 14, 30),
            end: new Date(2023, 3, 17, 15, 0),
            personID: null
        },
        {
            start: new Date(2023, 3, 17, 15, 0),
            end: new Date(2023, 3, 17, 15, 30),
            personID: null
        },
        {
            start: new Date(2023, 3, 17, 15, 30),
            end: new Date(2023, 3, 17, 16, 0),
            personID: null
        },
    ]

}
export default function Calendar({ data = mockData }) {
    const [currentDate, setCurrentDate] = React.useState(new Date());


    const handleSetToday = () => setCurrentDate(new Date());
    console.log(currentDate)

    const selectedAppointments = data.appointments.filter(appointment => appointment.start.getFullYear() === currentDate.getFullYear() &&
        appointment.start.getMonth() === currentDate.getMonth() &&
        appointment.start.getDate() === currentDate.getDate()
    )


    return (
        <div className="bg-gray-200 h-screen flex flex-col justify-center p-20 gap-y-4 ">

            <h1 className="text-center mb-10 font-medium text-2xl">{data.title}</h1>
            <div className="flex mt-16">


                <div className="mt-16 flex flex-col items-center gap-8">
                    <div className="flex flex-col items-center gap-4">
                        <p>
                            <strong>Selected Date: </strong>
                            {format(currentDate, "dd LLLL yyyy")}

                        </p>


                        <Button onClick={handleSetToday}>Today</Button>
                    </div>

                    <CalendarFrame value={currentDate} onChange={setCurrentDate} appointments={data.appointments} />
                </div>
                <EventDetails appointments={selectedAppointments} selectedDate={currentDate} />
            </div>
        </div>
    )
}