import { useEffect, useState } from 'react';
import { useAuth } from '../AuthContext';

type Patient = {
  id: number;
  name: string;
  age: number;
  // Add more fields as needed for your patient data
};

const PatientList = () => {
  const { isLoggedIn } = useAuth();
  const [patients, setPatients] = useState<Patient[]>([]);

  useEffect(() => {
    // Check if the user is logged in before fetching patient data
    if (isLoggedIn) {
      // Simulating fetching patients from an API
      const fetchPatients = async () => {
        try {
          // Replace this with your API call to fetch patient data
          // For demonstration, creating a mock patient list
          const response = await fetch('https://api.example.com/patients');
          const data = await response.json();
          setPatients(data);
        } catch (error) {
          console.error('Error fetching patients:', error);
          // Handle error state or display a message to the user
        }
      };

      // Fetch patients when the component mounts
      fetchPatients();
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return <p>You do not have access to view patients.</p>;
  }

  return (
    <div>
      <h1>Patient List</h1>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>
            <p>Name: {patient.name}</p>
            <p>Age: {patient.age}</p>
            {/* Display other patient details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;
