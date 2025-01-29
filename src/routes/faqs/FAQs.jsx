import React from "react";
import Header from "/src/routes/faqs/components/Header";
import Questions from "/src/routes/faqs/components/Questions";
import Footer from "/src/Components-Common/Footer";

const FAQs = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header className="flex-none" />
      <div className="flex-1 flex flex-col overflow-scroll bg-transparent">
        <Questions />
        <Footer />
      </div>
    </div>
  );
};

export default FAQs;
