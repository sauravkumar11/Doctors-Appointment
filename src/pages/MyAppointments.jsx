import React, { useState } from 'react';

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      doctorName: "Dr. John Doe",
      speciality: "Cardiologist",
      date: "2025-05-01",
      time: "10:30 AM",
      status: "Confirmed",
    },
    {
      id: 2,
      doctorName: "Dr. Jane Smith",
      speciality: "Dermatologist",
      date: "2025-05-03",
      time: "02:00 PM",
      status: "Pending",
    },
    {
      id: 3,
      doctorName: "Dr. Emily Johnson",
      speciality: "Pediatrician",
      date: "2025-05-05",
      time: "11:00 AM",
      status: "Cancelled",
    },
    {
      id: 4,
      doctorName: "Dr. Michael Brown",
      speciality: "Orthopedic",
      date: "2025-05-07",
      time: "09:00 AM",
      status: "Confirmed",
    },
    {
      id: 5,
      doctorName: "Dr. Sarah Wilson",
      speciality: "Neurologist",
      date: "2025-05-09",
      time: "01:30 PM",
      status: "Pending",
    },
    {
      id: 6,
      doctorName: "Dr. David Lee",
      speciality: "ENT Specialist",
      date: "2025-05-11",
      time: "03:00 PM",
      status: "Confirmed",
    },
    {
      id: 7,
      doctorName: "Dr. Laura Martinez",
      speciality: "Gynecologist",
      date: "2025-05-13",
      time: "10:00 AM",
      status: "Cancelled",
    },
    {
      id: 8,
      doctorName: "Dr. James Anderson",
      speciality: "Oncologist",
      date: "2025-05-15",
      time: "12:00 PM",
      status: "Confirmed",
    },
    {
      id: 9,
      doctorName: "Dr. Patricia Thomas",
      speciality: "Psychiatrist",
      date: "2025-05-17",
      time: "04:00 PM",
      status: "Pending",
    },
    {
      id: 10,
      doctorName: "Dr. Robert Garcia",
      speciality: "Dentist",
      date: "2025-05-19",
      time: "11:30 AM",
      status: "Confirmed",
    },
  ]);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">My Appointments</h1>
      {appointments.length > 0 ? (
        <div className="flex flex-col gap-4">
          {appointments.map((appointment) => (
            <div
              key={appointment.id}
              className="border p-4 rounded-lg shadow-sm flex justify-between items-center"
            >
              <div>
                <p className="text-lg font-medium text-gray-800">
                  {appointment.doctorName}
                </p>
                <p className="text-sm text-gray-600">
                  {appointment.speciality}
                </p>
                <p className="text-sm text-gray-600">
                  {appointment.date} at {appointment.time}
                </p>
              </div>
              <div>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    appointment.status === "Confirmed"
                      ? "bg-green-100 text-green-600"
                      : appointment.status === "Pending"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {appointment.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">You have no appointments.</p>
      )}
    </div>
  );
};

export default MyAppointments;
