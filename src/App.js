import { Routes, Route } from "react-router-dom";
import Explore from "./pages/Explore";
import Offers from "./pages/Offers";
import SignIn from "./pages/Signin";
import SignUp from "./pages/Signup";
import Profile from "./pages/Profile";
import ForgetPassword from "./pages/ForgetPassword";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./components/PrivateRoute";
import Category from "./pages/Category";
import CreateListing from "./pages/CreateListing";
import Listing from "./pages/Listing";
import Contact from "./pages/Contact";
import EditListing from "./pages/EditListing";

function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Explore />} />
				<Route path='/offers' element={<Offers />} />
				<Route path='/profile' element={<PrivateRoute />}>
					<Route path='/profile' element={<Profile />} />
				</Route>
				<Route path='/sign-in' element={<SignIn />} />
				<Route path='/sign-up' element={<SignUp />} />
				<Route path='/forgot-password' element={<ForgetPassword />} />
				<Route path='/create-listing' element={<CreateListing />} />
				<Route path='/edit-listing/:listingId' element={<EditListing />} />
				<Route path='/category/:categoryName' element={<Category />} />
				<Route
					path='/category/:categoryName/:listingId'
					element={<Listing />}
				/>
				<Route path='/contact/:landlordId' element={<Contact />} />
			</Routes>
			<Navbar />
			<ToastContainer />
		</div>
	);
}

export default App;
