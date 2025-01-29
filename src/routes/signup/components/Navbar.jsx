const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a className="flex items-center space-x-3 rtl:space-x-reverse hover:scale-105">
          <img
            src="https://res.cloudinary.com/dkezdazmt/image/upload/v1735488122/Evernorth/evernorth.svg"
            className="h-8"
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
