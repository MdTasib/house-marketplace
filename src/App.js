import { Routes, Route } from "react-router-dom";
import Explore from "./pages/Explore";
import Offers from "./pages/Offers";
import SingIn from "./pages/Singin";
import SingUp from "./pages/Singup";
import ForgetPassword from "./pages/ForgetPassword";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div>
			<h3>hello</h3>
			<Routes>
				<Route path='/' element={<Explore />} />
				<Route path='/offers' element={<Offers />} />
				<Route path='/profile' element={<SingIn />} />
				<Route path='/singin' element={<SingIn />} />
				<Route path='/singup' element={<SingUp />} />
				<Route path='/forget-password' element={<ForgetPassword />} />
			</Routes>
			<Navbar />
		</div>
	);
}

export default App;
