import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Review from './Component/Review/Review';
import Dashboard from './Component/Dashboard/Dashboard';
import Blog from './Component/Blog/Blog';
import Header from './Component/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/Review' element={<Review></Review>} ></Route>
        <Route path='/Dashboard' element={<Dashboard></Dashboard>} ></Route>
        <Route path='*' element={<Blog></Blog>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
