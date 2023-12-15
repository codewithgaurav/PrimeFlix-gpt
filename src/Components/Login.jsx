import { Link } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignIn, setSignIn] = useState(true);

  const handleClick = () => {
    setSignIn(!isSignIn);
  };

  return (
    <div className="bg-gradient-to-b from-black">
      <Header />
      <div className="absolute">
        <img src={import.meta.env.VITE_NETFLIX_BG_IMG} alt="Background-logo" />
      </div>
      <form
        className=" absolute
       left-1/2 top-1/2 m-auto w-3/12 -translate-x-1/2 -translate-y-1/2 bg-[#120F0A] p-12 text-white opacity-95"
      >
        <div>
          <h1 className="mx-2 text-3xl">
            {isSignIn ? "Sign In" : "Sign up  "}
          </h1>
          {!isSignIn && (
            <input
              type="text"
              placeholder="Full Name"
              role="textbox"
              className="m-2 mb-8 block w-80 rounded-sm bg-[#333333] p-2"
            />
          )}
          <input
            type="text"
            placeholder="Email or phone number"
            role="textbox"
            className="m-2 my-8 block w-80 rounded-sm bg-[#333333] p-2 "
          />

          <input
            type="password"
            placeholder="Password"
            role="textbox"
            className="m-2 mb-8 block w-80 rounded-sm bg-[#333333] p-2"
          />
          {!isSignIn && (
            <input
              type="password"
              placeholder="Confirm password"
              role="textbox"
              className="m-2 mb-8 block w-80 rounded-sm bg-[#333333] p-2"
            />
          )}
          <button
            type="button"
            className="m-2 h-11 w-80 rounded-[4px] bg-[#E50914] text-base font-medium"
            onClick={() => handleClick()}
          >
            {isSignIn ? "Sign In" : "Sign up  "}
          </button>
          {isSignIn && (
            <div className="mx-2 flex justify-between">
              <div>
                <input type="checkbox" id="remember_me" />
                <label htmlFor="remember_me">Remember me </label>
              </div>
              <Link to="/loginHelp">Need Help?</Link>
            </div>
          )}
          <div className="new-to-netflix mx-2 mt-16">
            <p>
              {isSignIn ? "New to Netflix? " : " "}
              <b
                className="cursor-pointer text-xl hover:underline"
                onClick={() => handleClick()}
              >
                {isSignIn ? "Sign up now." : "Already a User. Please sign in."}
              </b>
            </p>
            {isSignIn && (
              <span>
                <p className="text-xs font-thin">
                  Sign in is protected by Google reCAPTCHA to ensure you're not
                  a bot.
                </p>
              </span>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
