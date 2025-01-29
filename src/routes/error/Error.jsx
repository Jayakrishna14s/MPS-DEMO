import Footer from "/src/Components-Common/Footer.jsx";

const Error = () => {
  return (
    <>
      <div className="flex flex-col h-screen justify-between">
        <div>
          <nav className="bg-white">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <a className="flex items-center space-x-3 rtl:space-x-reverse hover:scale-105">
                <img
                  src="https://res.cloudinary.com/dkezdazmt/image/upload/v1735488122/Evernorth/evernorth.svg"
                  className="h-8"
                  alt="Flowbite Logo"
                />
              </a>

              <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button
                  type="button"
                  onClick={() => (window.location.href = "/login")}
                  className="text-white bg-[#035c67] hover:bg-[#035] focus:ring-[#3EFFC0] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center"
                >
                  Login
                </button>
              </div>
            </div>
          </nav>
        </div>

        <div className="flex flex-col items-center justify-center ">
          <h1 className="text-6xl font-bold text-[#035c67] my-4">ERROR 404</h1>
          <a href="/" className="text-[#035]">
            <u>Back to home</u>
          </a>
        </div>
        <div className="overflow-scroll">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Error;
