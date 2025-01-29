const About = () => {
  return (
    <div className="flex gap-10 items-center bg-gray-100 shadow-md">
      <div className="bg-[url('https://res.cloudinary.com/dkezdazmt/image/upload/v1735889266/Evernorth/Evernorth__about.jpg')] bg-cover bg-center flex justify-center items-center w-[40%] aspect-[1/1]"></div>

      <div className="flex flex-col w-[60%] p-6">
        <h1 className="text-2xl font-bold pr-6">About Evernorth</h1>
        <p className="text-xl text-justify pr-6">
          At Evernorth® Health Services, we work hand in hand with plans,
          providers and patients to find solutions to health care’s greatest and
          most complex challenges. From affordability, to predictability, to
          simplicity of care—we exist to solve the problems others don’t, won’t
          or can’t.
        </p>

        <br />
        <br />
        <br />

        <h1 className="text-2xl font-bold pr-6">Our mission</h1>
        <p className="text-xl text-justify pr-6">
          At Evernorth® Health Services, we work hand in hand with plans,
          providers and patients to find solutions to health care’s greatest and
          most complex challenges. From affordability, to predictability, to
          simplicity of care—we exist to solve the problems others don’t, won’t
          or can’t.
        </p>
      </div>
    </div>
  );
};

export default About;
