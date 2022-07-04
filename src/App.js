import { Routes, Route } from "react-router-dom";
import Explore from "./pages/Explore";
import Offers from "./pages/Offers";
import SignIn from "./pages/Signin";
import SignUp from "./pages/Signup";
import Profile from "./pages/Profile";
import ForgetPassword from "./pages/ForgetPassword";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Explore />} />
				<Route path='/offers' element={<Offers />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/sign-in' element={<SignIn />} />
				<Route path='/sign-up' element={<SignUp />} />
				<Route path='/forget-password' element={<ForgetPassword />} />
			</Routes>
			<Navbar />
		</div>
	);
}

export default App;
