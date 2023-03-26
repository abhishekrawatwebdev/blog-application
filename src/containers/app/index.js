import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from '../signup';
import Login from '../login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../../components/header';
import Home from '../home';
import Blogs from '../blogs';
import CreateBlog from '../create-blog';
import Error from '../Error';

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
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/blog:id" element={<Blogs />} />
                    <Route path="/create" element={<CreateBlog />} />
                    <Route path="/*" element={<Error />} />
                    {/* <Route path="/signup" element={<Signup />} /> */}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
