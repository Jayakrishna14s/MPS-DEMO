const Footer = () => {
  return (
    <div className="bg-[#035c67] p-2 md:p-4 lg:p-8">
      <div className="flex items-center justify-start m-2 md:m-4 lg:m-8 ">
        <img src="https://res.cloudinary.com/dkezdazmt/image/upload/v1735886587/Evernorth/white_logo.svg" />
      </div>
      <hr className="m-2 md:m-4 lg:m-8 " />
      <div className="p-2 md:p-4 lg:p-8 flex flex-col items-center justify-center text-white text-center">
        <div className="flex justify-center gap-4 mb-12">
          <a href="https://www.facebook.com/Evernorth/" target="_blank">
            <img src="https://res.cloudinary.com/dkezdazmt/image/upload/v1735888341/Evernorth/pgglffxrc7dsliffqpvh.svg" />
          </a>
          <a href="https://www.instagram.com/evernorth/" target="_blank">
            <img src="https://res.cloudinary.com/dkezdazmt/image/upload/v1735888341/Evernorth/fksrmgl2aanoigq8um5a.svg" />
          </a>
          <a href="https://www.linkedin.com/company/evernorth/" target="_blank">
            <img src="https://res.cloudinary.com/dkezdazmt/image/upload/v1735888650/Evernorth/linkedin_logo.svg" />
          </a>
          <a href="https://www.youtube.com/evernorth" target="_blank">
            <img src="https://res.cloudinary.com/dkezdazmt/image/upload/v1735888341/Evernorth/xtbz3wciplqnunyapd9m.svg" />
          </a>
        </div>
        <p className="w-[70%] text-gray-300 font-custom">
          © 2025 Evernorth Health, Inc. All rights reserved. One Express Way,
          St. Louis, MO 63121 All products and services are provided by or
          through operating subsidiaries or affiliates of Evernorth.
        </p>
      </div>
    </div>
  );
};

export default Footer;
