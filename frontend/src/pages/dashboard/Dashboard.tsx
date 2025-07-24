import { Link } from 'react-router-dom';
import { useState , useEffect} from "react"
import {getStudents} from "../../services/StudentService";
import type { Student } from "../../services/StudentService";

const Dashboard = () => {

  const [allStudents, setAllStudents] = useState<Student[]>([]);

  useEffect(()=>{

    const fetchStudent = async () => {
      
      const data = await getStudents()
      console.log(data)
      setAllStudents(data)
    }

    fetchStudent();

  },[])

    return(
      <>
        {/* Card 1 */}
        <div className="rounded-2xl bg-white p-6 shadow-md">
          <h2 className="text-xl font-semibold text-gray-700">Total Students</h2>
          <p className="mt-2 text-3xl font-bold text-blue-600">{allStudents.length}</p>
        </div>

        {/* Buttons for Add and Edit Student */}
        <div className="mt-4 mb-4 flex justify-center items-center space-x-4">
          <div className="bg-blue-100 p-4 rounded-lg shadow-md">
            <Link to={"/add-student"}>
            Add Student
            </Link>
          </div>     
        </div>
        <div>
          {allStudents.map((student) => (
            <div key={student.id} className = "p-4 border-b border-gray-200">
              <div>ID: {student.id} </div>
              <div className = "flex gap-4 mt-4">Name: {student.name} </div>
              <div>Roll No: {student.rollNumber} </div>
              <div>Email: {student.email} </div>
              <div>DOB: {new Date(student.dateOfBirth).toLocaleDateString()} </div>
              <div>Age: {student.age} </div>
              <div>Gender: {student.gender}</div>
              <div>Address: {student.address} </div>
              <div>Phone No: {student.phoneNumber} </div>
              
              <div className = "flex gap-4 mt-2">
              <Link to = {`/edit-student/${student.id}`} className = "text-blue-500 hover:underline">
              Edit
              </Link>
              <Link to = {`/delete-student/${student.id}`} className = "text-blue-500 hover:underline">
              Delete
              </Link> 
              </div>
            </div>
          ))}
        </div>
        
      </>
    )
}

export default Dashboard;