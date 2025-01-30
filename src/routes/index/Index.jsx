import Navbar from "/src/routes/index/components/Navbar";
import About from "/src/routes/index/components/About";
import Services from "/src/routes/index/components/Services";
import Subscribe from "/src/routes/index/components/Subscribe";
// import Footer from "/src/routes/index/components/Footer";
import Guide from "/src/routes/index/components/Guide";
import Footer from "/src/Components-Common/Footer.jsx";

const Index = () => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <div>
          <Navbar />
        </div>
        <div className="overflow-scroll">
          <section id="about">
            <About />
          </section>
          <br />
          <section id="services">
            <Services />
          </section>
          <section id="subscribe" className="my-16">
            <Subscribe />
          </section>

          <Footer />
        </div>
        <Guide />
      </div>
    </>
  );
};

export default Index;
