import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import PrivateRoute from './components/PrivateRoute'
import Navbar from './components/Navbar'
import Explorer from './pages/Explorer'
import ForgotPassword from './pages/ForgotPassword'
import Offers from './pages/Offers'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import Category from './pages/Category'



function App() {
  return (
    <>
    {/* Creating Routes to various pages in App */}
    <Router>
      <Routes>
        <Route path='/' element={<Explorer />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
        <Route path='/offers' element={<Offers />} />
        <Route path='/category/:categoryName' element={<Category />} />

        //Private routes only accessed by loggedin viewers
        <Route path='/profile' element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
        </Route>

        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sign-in' element={<SignIn />} />
      </Routes>
      <Navbar />
    </Router>

    <ToastContainer />
    </>
  );
}

export default App;
