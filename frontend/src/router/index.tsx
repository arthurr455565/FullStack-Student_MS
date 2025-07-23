import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import AddStudent from '../pages/students/AddStudent';
import Dashboard from '../pages/dashboard/Dashboard';
import EditStudent from '../pages/students/EditStudent';
import HomePage from '../pages/home/HomePage';
import DeleteStudent from '../pages/students/DeleteStudent';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: 'add-student',
        element: <AddStudent />
      },
      {
      path: 'edit-student',
      element: <EditStudent/>
      },
      {
        path: 'delete-student',
        element: <DeleteStudent />
      },
    ],
  },
]);
