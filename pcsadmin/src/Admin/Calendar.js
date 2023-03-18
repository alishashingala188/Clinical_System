import React,{useEffect,useState} from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import axios from "axios";
function Calendar() {
  const [appointment, setAppointment] = useState([]);
  useEffect(() => {
    getAllAppoitment();
  }, []);
      const getAllAppoitment = async () => {
        const { data } = await axios.get('http://localhost:5000/api/doctor/appointment', {
        method: "GET",
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': ' Bearer ' + localStorage.getItem("token")
        }
      })
      setAppointment(data);
    }

    const events={
     appointment
    
    }
     
  return (
    <div>
      <Fullcalendar 
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today prev,next", // will normally be on the left. if RTL, will be on the right
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay", // will normally be on the right. if RTL, will be on the left
        }}
        height={"90vh"}
        eventColor='blue'
         events={appointment}
        
      />
    </div>
  );
}
export default Calendar;