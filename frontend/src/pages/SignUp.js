import React from 'react';

export default function SignUp() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* Main container */}
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

            <form className="space-y-4 w-full">
              <input
                className="block w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring focus:ring-gray-100 text-base"
                type="text"
                placeholder="Full Name"
              ></input>
              <input
                className="block w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring focus:ring-gray-100 text-base"
                type="text"
                placeholder="Email"
              ></input>
              <input
                className="block w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring focus:ring-gray-100 text-base"
                type="text"
                placeholder="Username"
              ></input>
              <input
                className="block w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring focus:ring-gray-100 text-base"
                type="text"
                placeholder="Username"
              ></input>
              <p className="text-gray-500 text-sm text-center my-5">
                By signing up you agree to our <a href="/terms">Terms</a> and{' '}
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
                Have an account?<a href="">Log In</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
