import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
  
    const handleAddStudent = () => {
      navigate('/add-student');
    };

    const handleEditStudent = () => {
      navigate('/edit-student');
    };

    const handledelete = () => {
      navigate('/delete-student');
    };

    return(
      <>
        {/* Card 1 */}
        <div className="rounded-2xl bg-white p-6 shadow-md">
          <h2 className="text-xl font-semibold text-gray-700">Total Students</h2>
          <p className="mt-2 text-3xl font-bold text-blue-600">120</p>
        </div>

        {/* Buttons for Add and Edit Student */}
        <div className="mt-4 mb-4 flex justify-center items-center space-x-4">
          <div className="bg-blue-100 p-4 rounded-lg shadow-md">
            <button onClick={handleAddStudent} type="button">
              Add Student
            </button>
          </div>
          
          <div className="bg-blue-100 p-4 rounded-lg shadow-md">
            <button onClick={handleEditStudent} type="button">
              Edit Student Detail
            </button>
          </div>
          
          <div className="bg-blue-100 p-4 rounded-lg shadow-md">
            <button onClick={handledelete} type = 'button'>
              Delete Student
            </button>
          </div>
        </div>
      </>
    )

}

export default Dashboard;