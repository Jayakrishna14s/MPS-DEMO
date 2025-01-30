import React, { useState } from "react";
import RawFAQs from "/src/routes/faqs/components/RawFAQs";

const Questions = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const questionsPerPage = 8;

  const handleNextPage = () => {
    if (currentPage < Math.ceil(RawFAQs().length / questionsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = RawFAQs().slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  );

  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="flex flex-col ">
      <main className="flex-grow  p-6 my-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-10 ">
          Frequently Asked Questions
        </h1>
        <div className="max-w-4xl mx-auto">
          {currentQuestions.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 py-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                <h2 className="text-lg font-medium">{faq.question}</h2>
                <button className="text-gray-500 transform transition-transform duration-300">
                  {activeIndex === index ? "▲" : "▼"}
                </button>
              </div>
              {activeIndex === index && (
                <p className="mt-2 text-lg">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center my-8 space-x-2">
          <button
            className={`py-2 px-4 rounded border ${
              currentPage === 1
                ? "text-gray-400 border-gray-300 cursor-not-allowed"
                : "text-gray-800 border-gray-400"
            }`}
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            « Previous
          </button>
          {Array.from(
            { length: Math.ceil(RawFAQs().length / questionsPerPage) },
            (_, i) => (
              <button
                key={i}
                className={`py-2 px-4 rounded-full border ${
                  currentPage === i + 1
                    ? "bg-[#3EFFC0] text-white"
                    : "text-gray-800 border-gray-400"
                }`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            )
          )}
          <button
            className={`py-2 px-4 rounded border ${
              currentPage === Math.ceil(RawFAQs().length / questionsPerPage)
                ? "text-gray-400 border-gray-300 cursor-not-allowed"
                : "text-gray-800 border-gray-400"
            }`}
            onClick={handleNextPage}
            disabled={
              currentPage === Math.ceil(RawFAQs().length / questionsPerPage)
            }
          >
            Next »
          </button>
        </div>
      </main>
    </div>
  );
};

export default Questions;
