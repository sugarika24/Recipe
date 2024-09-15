import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import LoginPage from './Pages/Login'; // Ensure file name matches
import ProfilePage from './Pages/ProfilePage'; // Ensure file name matches
import CreatePage from './Pages/Create'; // Ensure file name matches
import Home from './Pages/Home';
import Register from './Pages/Register';
import CategoryList from './Pages/CategoryList';
import RecipePage from './Pages/Recipe'; // Ensure file name matches
import AboutUs from './Pages/AboutUs';
import Edit from './Pages/Edit';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profilepage" element={<ProfilePage />} />
        <Route path="/categories" element={<CategoryList />} />
        <Route path="/create-recipe" element={<CreatePage />} />
        <Route path="/recipe" element={<RecipePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
