import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { VITE_NETFLIX_LOGO } from "../utils/constants";

const Header = () => {
  const navigator = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleClick = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        navigator("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            displayName: displayName,
            email: email,
            photoURL: photoURL,
          }),
        );
        navigator("/browse");
      } else {
        dispatch(removeUser());
        navigator("/");
      }
    });
    // unscribing from onAuthStateChanged event when Header component unloads/unmounts.
    return () => unsubscribe();
  }, []);

  return (
    <div className=" absolute z-10 flex w-full justify-between bg-gradient-to-b from-black px-1 py-1">
      <img className="w-48" src={VITE_NETFLIX_LOGO} alt="logo " />
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
