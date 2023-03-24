import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useEffect, useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios'
import { TimePicker } from "antd";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!


const locales = {
    "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [{
    title: "appointment 1",
    date: "2023-03-23",
    time: "2:30"
},
{
    title: "appointment 2",
    date: "2023-03-26",
    time: "06:30"
}]

function Calander() {
    const [allEvents, setAllEvents] = useState(events);
    const [newEvent, setNewEvent] = useState({ a_reason: "", date: "", time: "" });

    useEffect(() => {
        getAllAppoitment();
    }, []);


    const getAllAppoitment = async () => {
        const { data } = await axios.get(`http://localhost:5000/api/doctor/appointment`,
            {
                method: "GET",
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': ' Bearer ' + localStorage.getItem("token")
                }
            });
        console.log(data);
        let a=data.data.map((res)=>({title:res.a_reason,date:new Date(res.date),time:res.time}))
        setAllEvents(a);
    }
    return (
        <div className="App">
           
        <FullCalendar
        plugins={[ dayGridPlugin]}
        events={allEvents}
        eventBackgroundColor="red"
      />
      
      </div>
    );
}
export default Calander
