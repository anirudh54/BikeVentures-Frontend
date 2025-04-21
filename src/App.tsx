import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
            <h1 className="text-3xl font-bold text-blue-600 mb-4">Tailwind Test</h1>
            <p className="text-gray-600">If you see this styled text, Tailwind is working!</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              Test Button
            </button>
          </div>
        </div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold text-gray-900">
                Welcome to BikeVentures
              </h1>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
