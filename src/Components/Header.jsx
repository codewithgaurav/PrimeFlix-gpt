const Header = () => {
  return (
    <div className=" absolute z-10 w-full bg-gradient-to-b from-black px-8 py-8">
      <img
        className="w-48"
        src={import.meta.env.VITE_NETFLIX_LOGO}
        alt="logo "
      />
    </div>
  );
};

export default Header;
