import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div className="min-h-screen">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold text-center">Student Management System</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
