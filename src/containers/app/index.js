import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from '../signup';
import Login from '../login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../../components/header';
import Home from '../home';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <ToastContainer />
                <Routes>
                    <Route  path="/login" index element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/" index element={<Home />} />
                    {/* <Route path="/signup" element={<Signup />} /> */}
                    {/* <Route path="/signup" element={<Signup />} /> */}
                    {/* <Route path="/signup" element={<Signup />} /> */}
                    {/* <Route path="/signup" element={<Signup />} /> */}
                    {/* <Route path="/signup" element={<Signup />} /> */}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
