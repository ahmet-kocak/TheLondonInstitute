import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import { Admin, Individual, Institutional, Register, Login, PasswordForgot, PasswordReset, Page404 } from './pages'
import { Auth, Dashboard } from './layouts'
import { BASE_URL, AUTH_URL } from './store/base';
import './assets/global.scss';



export default function App() {

	const recaptchaRef = useRef();

	const { isAuthenticated, isAdmin, token } = useSelector(state => state?.authReducer)

	const page = window.location.pathname.split('/')[1]

	return (
		<BrowserRouter>

			<Routes>

				<Route path='/*' element={<Auth />} >
					********
				</Route>

				<Route path='/*' ****** /> : <Navigate replace to="/" />} >
					********
				</Route>

			</Routes>

			<ReCAPTCHA ref={recaptchaRef} size="invisible" ******** />

		</BrowserRouter>
	);
}