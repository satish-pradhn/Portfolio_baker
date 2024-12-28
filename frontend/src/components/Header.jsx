import logo from "../assets/react.svg";
const Header = function () {
  return (
    <>
      {/*Navbar*/}
      <div className="font-poppins nav container  mx-auto px-4 py-2 sm:text-sm md:text-base lg:text-lg">
        {/* Flex Container*/}
        <div className="flex flex-row justify-between items-center">
          {/* Logo */}
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          {/*Menu Items*/}
          <div className="hidden md:flex flex-row space-x-6">
            <a href=""> Bio</a>
            <a href=""> Gallery</a>
            <a href=""> Get in touch</a>
          </div>
        </div>
      </div>

      {/* Button*/}
    </>
  );
};
export default Header;
