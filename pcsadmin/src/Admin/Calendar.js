import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useEffect, useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios'
import Sidebar from './Dsidebar'
import Nav from './Dnav'
import Footer from './Dfooter'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import { useNavigate } from "react-router-dom";
import { width } from "@mui/system";

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
    const navigate = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/')
        }
    })
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
        let a = data.data.map((res) => ({ title: res.a_reason, date: new Date(res.date), time: res.time }))
        setAllEvents(a);
    }
    return (
        <div className="wrapper">
            <Sidebar />
            <div className="wrapper">
                <div className="main">
                    <Nav />
                    <main className="content">
                        <div className="container-fluid p-0" width="300px">
                           <div style={{width:'1000px'}}>
                            <FullCalendar
                                plugins={[dayGridPlugin]}
                                events={allEvents}
                                localizer={localizer}
                                width={100}
                            />
                            </div> 
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>
        </div>

    );
}
export default Calander
