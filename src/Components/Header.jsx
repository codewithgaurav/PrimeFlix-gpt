import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

const Header = () => {
  const navigator = useNavigate();
  const user = useSelector((store) => store.user);

  const handleClick = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigator("/");
      })
      .catch((error) => {
        // An error happened.
        navigator("/error");
      });
  };

  return (
    <div className=" absolute z-10 flex w-full justify-between bg-gradient-to-b from-black px-1 py-1">
      <img
        className="w-48"
        src={import.meta.env.VITE_NETFLIX_LOGO}
        alt="logo "
      />
      {user && (
        <div className="flex p-2">
          <img
            className="mx-2 my-auto h-8 w-8"
            src={user.photoURL}
            alt="user_icon"
          />
          <button
            className="font-bold text-white hover:underline"
            onClick={() => handleClick()}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
