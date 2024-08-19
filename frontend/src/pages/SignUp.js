import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const API_URL = window.location.origin.replace("3000", "5000");

export default function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(validatePassword()){
      signup();
    }
  };

  const validatePassword = () => {
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\*])(?=.{8,})/

    if (!passwordPattern.test(password)) {
      toast.error(
        "Password must contain at least 8 characters, including at least 1 number and 1 includes both lower and uppercase letters and special characters for example #,?,!"
      );
      return false;
    }
    return true;
  };

  const signup = async () => {
    console.log("Sign up function called");
    try {
      const response = await fetch(`${API_URL}/api/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: userName,
          fullname: fullName,
          email: email,
          password: password,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success(data.message);
        setFullName("");
        setEmail("");
        setUserName("");
        setPassword("");
        console.log(data);
        navigate("/signin");
      } else {
        toast.error(data.error);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* Main container */}
      <ToastContainer />
      <div className="flex w-full max-w-4xl rounded-lg overflow-hidden justify-center">
        {/* Signup form container */}
        <div className="w-full md:w-1/2 p-8 md:border-gray-300 md:rounded-lg">
          <div className="flex flex-col items-center">
            <img
              className="h-15 mb-6"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXkbGJWJSc6kNJTguH7SRIRcL_tCYcWpaZhw&s"
              alt="logo"
            ></img>
            <p className="text-gray-600 text-base text-center my-5">
              A place for people to share your experiences in the form of photos
              and videos!🙂
            </p>

            <form className="space-y-4 w-full" onSubmit={handleSubmit}>
              <input
                className="block w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring focus:ring-gray-100 text-base"
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
                required
              ></input>
              <input
                className="block w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring focus:ring-gray-100 text-base"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              ></input>
              <input
                className="block w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring focus:ring-gray-100 text-base"
                type="text"
                placeholder="Username"
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                required
              ></input>
              <input
                className="block w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring focus:ring-gray-100 text-base"
                type="text"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              ></input>
              <p className="text-gray-500 text-sm text-center my-5">
                By signing up you agree to our <a href="/terms">Terms</a> and{" "}
                <a href="/privacy">Privacy conditions</a>
              </p>
              <button
                className="block w-full bg-blue-500 text-white font-semibold py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                type="submit"
              >
                Sign Up
              </button>
            </form>
            <div className="flex items-center my-4 w-full">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="px-4 text-gray-">OR</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
            <button>Continue with google</button>
            <div>
              <p>
                Have an account? <Link to={"/signin"}>Log In</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
