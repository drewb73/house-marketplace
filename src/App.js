import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Explorer from './pages/Explorer'
import ForgotPassword from './pages/ForgotPassword'
import Offers from './pages/Offers'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'



function App() {
  return (
    <>
    {/* Creating Routes to various pages in App */}
    <Router>
      <Routes>
        <Route path='/' element={<Explorer />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
        <Route path='/offers' element={<Offers />} />
        <Route path='/profile' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sign-in' element={<SignIn />} />
      </Routes>
      <Navbar />
    </Router>
    </>
  );
}

export default App;
