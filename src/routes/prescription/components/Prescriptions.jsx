import React from "react";

const PrescriptionCard = ({ prescription }) => {
  return (
    <li className="list-none bg-[#f1f5f9] p-4 shadow-lg rounded-md hover:scale-105 transition duration-1000 border-2 border-gray-200">
      <h1 className="text-center font-medium underline mb-4">
        {prescription.condition}
      </h1>

      <div className="flex justify-between text-sm text-[#035c67]">
        <span>
          <strong>Start Date:</strong> {prescription.startDate}
        </span>
        <span>
          <strong>End Date:</strong> {prescription.endDate}
        </span>
      </div>

      <div className="">
        <h2>
          <strong>Hospital:</strong> {prescription.hospital}
        </h2>
        <h2>
          <strong>Doctor:</strong> {prescription.doctor}
        </h2>
      </div>
      <div className="mb-4">
        <h2 className="font-semibold">Medications:</h2>

        <div className="h-[100px] overflow-scroll  p-2 rounded scrollbar overflow-x-hidden scrollbar-thin scrollbar-thumb-black scrollbar-track-transparent">
          {prescription.medications.length === 0 && (
            <p className="text-orange-400 "> No Medications</p>
          )}
          {prescription.medications.map((medication, index) => {
            return (
              <div key={index} className="flex justify-between ">
                <span>
                  {index + 1}. &nbsp; {medication.name}
                </span>
                <span>{medication.dosage}</span>
                <span>{medication.frequency}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-between">
        <button className="bg-green-200 hover:bg-green-300 p-2 px-4 rounded-lg flex gap-2 items-center">
          <img
            src="https://res.cloudinary.com/dkezdazmt/image/upload/v1737955835/Evernorth/view.svg"
            className="w-[25px]"
            alt="View Icon"
          />
          <span>View</span>
        </button>
        <button className="bg-blue-200 hover:bg-blue-300 p-2 px-4 rounded-lg flex gap-2 items-center">
          <img
            src="https://res.cloudinary.com/dkezdazmt/image/upload/v1737923528/Evernorth/gmaps.svg"
            className="w-[20px]"
            alt="Locate Icon"
          />
          <span>Locate</span>
        </button>
      </div>
    </li>
  );
};

const Prescriptions = () => {
  const currentPrescriptions = [
    {
      id: 1,
      condition: "High Cholesterol",
      startDate: "2025-01-01",
      endDate: "2025-06-01",
      hospital: "City Hospital",
      doctor: "Dr. John Smith",
      medications: [
        // { name: "Lipitor", dosage: "10mg", frequency: "Once a day" },
      ],
      //   location: "Shamshabad",
      //   view: "form-id",
    },
    {
      id: 2,
      condition: "Diabetes",
      startDate: "2025-02-01",
      endDate: "2025-07-01",
      hospital: "Health Clinic",
      doctor: "Dr. Jane Doe",
      medications: [
        { name: "Metformin", dosage: "500mg", frequency: "Twice a day" },
        { name: "Metformin", dosage: "500mg", frequency: "Twice a day" },

        { name: "Metformin", dosage: "500mg", frequency: "Twice a day" },

        { name: "Metformin", dosage: "500mg", frequency: "Twice a day" },
        { name: "Metformin", dosage: "500mg", frequency: "Twice a day" },
        { name: "Metformin", dosage: "500mg", frequency: "Twice a day" },
        { name: "Metformin", dosage: "500mg", frequency: "Twice a day" },
      ],
    },
  ];

  const olderPrescriptions = [
    {
      id: 1,
      condition: "High Cholesterol",
      startDate: "2025-01-01",
      endDate: "2025-06-01",
      hospital: "City Hospital",
      doctor: "Dr. John Smith",
      medications: [
        { name: "Lipitor", dosage: "10mg", frequency: "Once a day" },
      ],
    },
    {
      id: 2,
      condition: "Diabetes",
      startDate: "2025-02-01",
      endDate: "2025-07-01",
      hospital: "Health Clinic",
      doctor: "Dr. Jane Doe",
      medications: [
        { name: "Metformin", dosage: "500mg", frequency: "Twice a day" },
      ],
    },
    {
      id: 3,
      condition: "Pain Management",
      startDate: "2025-03-01",
      endDate: "2025-04-01",
      hospital: "General Hospital",
      doctor: "Dr. Emily Brown",
      medications: [
        { name: "Ibuprofen", dosage: "200mg", frequency: "As needed" },
      ],
    },
    {
      id: 4,
      condition: "Pain Management",
      startDate: "2025-03-01",
      endDate: "2025-04-01",
      hospital: "General Hospital",
      doctor: "Dr. Emily Brown",
      medications: [
        { name: "Ibuprofen", dosage: "200mg", frequency: "As needed" },
      ],
    },
    {
      id: 5,
      condition: "Pain Management",
      startDate: "2025-03-01",
      endDate: "2025-04-01",
      hospital: "General Hospital",
      doctor: "Dr. Emily Brown",
      medications: [
        { name: "Ibuprofen", dosage: "200mg", frequency: "As needed" },
      ],
    },
  ];

  return (
    <div className="w-full">
      {/* current */}
      <div className="m-8 p-8 rounded-lg bg-white shadow-lg">
        <h1 className="font-semibold  text-2xl  mb-4 ml-2">Current</h1>
        <ul className="grid grid-cols-3 gap-8">
          {currentPrescriptions.map((prescription) => (
            <PrescriptionCard
              key={prescription.id}
              prescription={prescription}
            />
          ))}

          {/* {currentPrescriptions.length === 0 && (
            <img
              src="https://res.cloudinary.com/dkezdazmt/image/upload/v1737902486/Evernorth/history.svg"
              className="w-[60px] pl-2"
            />
          )} */}
          <div className="flex flex-col justify-center items-center gap-2">
            <img
              src="https://res.cloudinary.com/dkezdazmt/image/upload/v1737899776/add.svg"
              className="h-[80px] hover:scale-110 transition duration-1000 "
            />
            <p>Add a prescription</p>
          </div>
        </ul>
      </div>
      {/* older */}

      <div className="m-8 p-8 rounded-lg bg-white shadow-lg">
        <h1 className="font-semibold  text-2xl  mb-4 ml-2">Older</h1>
        <ul className="grid grid-cols-3 gap-8">
          {olderPrescriptions.map((prescription) => (
            <PrescriptionCard
              key={prescription.id}
              prescription={prescription}
            />
          ))}

          {olderPrescriptions.length === 0 && (
            <img
              src="https://res.cloudinary.com/dkezdazmt/image/upload/v1737902486/Evernorth/history.svg"
              className="w-[60px] pl-2"
            />
          )}
        </ul>
      </div>
    </div>
  );
};

export default Prescriptions;
