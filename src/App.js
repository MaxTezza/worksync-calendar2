import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import './index.css';

function App() {
  const [events, setEvents] = useState([
    {
      title: 'Team Meeting',
      date: '2025-07-28',
      color: '#3B82F6', // blue
      private: false,
    }
  ]);

  const handleDateClick = (info) => {
    const title = prompt('Enter task title:');
    const isPrivate = window.confirm('Should this task be private?');
    const color = prompt('Enter a color (e.g. red, green, blue):', 'gray');

    if (title) {
      const newEvent = {
        title,
        date: info.dateStr,
        color,
        private: isPrivate,
      };
      setEvents([...events, newEvent]);
    }
  };

  return (
    <div className="p-4 bg-gray-900 text-white min-h-screen dark">
">
      <h1 className="text-2xl font-bold mb-4">WorkSync Calendar</h1>

      <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-800 text-white">
          <h2 className="font-semibold mb-2">🎯 Daily Goals</h2>
          <textarea className="w-full border rounded p-2" rows="4" placeholder="Write your goals..."></textarea>
        </div>
        <div className="bg-gray-800 text-white">
          <h2 className="font-semibold mb-2">🗓️ Weekly Goals</h2>
          <textarea className="w-full border rounded p-2" rows="4" placeholder="Write your goals..."></textarea>
        </div>
        <div className="bg-gray-800 text-white">
          <h2 className="font-semibold mb-2">📆 Monthly Goals</h2>
          <textarea className="w-full border rounded p-2" rows="4" placeholder="Write your goals..."></textarea>
        </div>
      </div>

      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          start: 'prev,next today',
          center: 'title',
          end: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        events={events}
        dateClick={handleDateClick}
        eventContent={(arg) => (
          <div>
            <b>{arg.event.title}</b>
            {arg.event.extendedProps.private && <span className="ml-2 text-xs text-red-500">(Private)</span>}
          </div>
        )}
      />
    </div>
  );
}

export default App;
