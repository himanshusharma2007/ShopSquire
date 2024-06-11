import { Link, useNavigate } from "react-router-dom";
import {
  db,
  auth,
  doc,
  getDoc,
  setDoc,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "../firebase/firebase";
import Header from "../components/Header";
import { useAuth } from "../hooks/UseAuth.jsx";
import { LiaBackwardSolid } from "react-icons/lia";
import { IoIosLogOut } from "react-icons/io";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
const handleLogOut = async ({
  setIsLoggedIn,
  setcartProducts,
  setWishedProducts,
  setIsLoggedOut,
  wishedProducts,
  cartProducts,
}) => {
  setIsLoggedOut(true);
  setIsLoggedIn(false);
  const user = auth.currentUser;
  if (user) {
    await setDoc(doc(db, "usersProducts", user.uid), {
      wishedProducts,
      cartProducts,
    });
  }
  setcartProducts(null);
  setWishedProducts(null);
};
const Login = ({
  setWishedProducts,
  setcartProducts,
  wishedProducts,
  cartProducts,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loging, setLoging] = useState(false);
  const { isLoggedIn, setIsLoggedIn, setIsLoggedOut, setIsSignedUp } =
    useAuth();
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      setLoging(true);
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = result.user;

      // Fetch user data from Firestore
      const userDoc = await getDoc(doc(db, "usersProducts", user.uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        setcartProducts(userData.cartProducts || []);
        setWishedProducts(userData.wishedProducts || []);
      } else {
        setcartProducts([]);
        setWishedProducts([]);
      }

      // Store the user's login state in Firestore
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
      });
      setIsLoggedOut(false);
      setIsLoggedIn(true);
      setIsSignedUp(false);
      setLoging(false);
      navigate("/");
    } catch (error) {
      console.error("Error during sign in: ", error);
      setError(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setLoging(true);
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Fetch user data from Firestore
      const userDoc = await getDoc(doc(db, "usersProducts", user.uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        setcartProducts(userData.cartProducts || []);
        setWishedProducts(userData.wishedProducts || []);
      } else {
        setcartProducts([]);
        setWishedProducts([]);
      }

      // Store the user's login state in Firestore
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
      });
      setIsLoggedOut(false);
      setIsLoggedIn(true);
      setIsSignedUp(false);

      setLoging(false);
      navigate("/");
    } catch (error) {
      console.error("Error during Google sign in: ", error);
      setError(error.message);
    }
  };

  return (
    <div className=" mt-[8vh] h-[92vh]  Lora flex flex-col justify-center items-center md:bg-gray-100 relative">
      <Header hide />
      {isLoggedIn ? (
        <div className="flex flex-col Lora space-y-3 p-2 justify-center items-center">
          <h1 className="text-3xl md:w-[60%] text-center">
            You already have Logged in. Do you want to Log out?
          </h1>
          <div className="btns flex gap-2 justify-center items-center md:w-[50%]">
            <button
              onClick={() => navigate("/")}
              className="flex gap-3 justify-center items-center bg-blue-500 w-full hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300 text-nowrap"
            >
              <LiaBackwardSolid fontSize="30px" /> Go Back
            </button>
            <button
              onClick={() =>
                handleLogOut({
                  setIsLoggedIn,
                  setcartProducts,
                  setWishedProducts,
                  setIsLoggedOut,
                  wishedProducts,
                  cartProducts,
                })
              }
              className="flex gap-3  justify-center items-center bg-red-500 w-full hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300 "
            >
              Logout <IoIosLogOut fontSize="30px" />
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg md:shadow-lg p-8 w-full max-w-sm">
          <div className="text-3xl text-blue-500 border-b-2 border-b-blue-500 mb-6 font-medium">
            Login
          </div>
          <form onSubmit={handleEmailLogin}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
              />
            </div>
            <div className="mb-4 relative">
              <label
                htmlFor="password"
                className="block text-gray-700 font-bold mb-2"
              >
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
              />
              <button
                type="button"
                className="absolute right-0 top-10 px-3 flex items-center text-gray-600 focus:outline-none"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path>
                  </svg>
                ) : (
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                )}
              </button>
            </div>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <div className="flex flex-col items-center justify-between w-full space-y-2 mt-4">
              <button
                type="submit"
                className="bg-blue-500 w-full hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300 "
                disabled={loging}
              >
                Login
              </button>

              <div className="flex items-center">
                <div className="border-t border-gray-300 flex-grow mr-3"></div>
                <div className="text-gray-600">OR</div>
                <div className="border-t border-gray-300 flex-grow ml-3"></div>
              </div>
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="bg-red-500 w-full hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors duration-300 flex items-center justify-center"
                disabled={loging}
              >
                <FaGoogle className="mr-2" />
                Sign in with Google
              </button>
              <p className="text-gray-600 text-center">
                Don't have an account?{" "}
                <Link to="/signup" className="text-blue-500 font-bold">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
export { handleLogOut };
