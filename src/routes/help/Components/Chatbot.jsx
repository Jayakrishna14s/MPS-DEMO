import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Chatbot = () => {
  // State for chat messages
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your assistant. How can I help you?", isBot: true },
  ]);
  const [input, setInput] = useState("");

  const endOfMessagesRef = useRef(null);

  // Simulate bot response
  const botReply = (userMessage) => {
    return `You said: "${userMessage}". Let me think about it! Let me think about it! `;
  };

  // Handle sending a message
  const sendMessage = () => {
    if (input.trim() !== "") {
      const userMessage = { text: input, isBot: false };
      const botMessage = { text: botReply(input), isBot: true };

      setMessages((prevMessages) => [...prevMessages, userMessage, botMessage]);
      setInput(""); // Clear the input field
    }
  };

  // Handle "Enter" key for sending a message
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <div className="chat-container mx-auto p-6 rounded-lg  flex flex-col h-full w-[80%] ">
        <div className="chat-window flex-1 overflow-y-scroll  p-4 rounded-lg  ">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.isBot ? "justify-start" : "justify-end"
              } mb-4`}
            >
              <div
                className={`rounded-lg p-3 ${
                  message.isBot
                    ? "bg-gray-200 text-gray-800"
                    : "bg-green-500  text-white"
                } max-w-xs`}
              >
                {message.text}
              </div>
            </div>
          ))}

          <div ref={endOfMessagesRef} />
        </div>

        <div className="input-area mt-4 flex ">
          <Link
            to="/FAQs"
            className="bg-black text-white px-4 py-2 rounded-full shadow-md hover:bg-gray-600 flex items-center"
            target="_blank"
          >
            FAQs
          </Link>

          <input
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            className="flex-1 p-3 border rounded-l-lg focus:outline-none ml-2 border-1 border-[#035c67]"
          />

          <button
            onClick={sendMessage}
            className="bg-[#035c67] text-white px-4 py-3 rounded-r-lg hover:bg-[#035c67bb] border-2 border-[#035c67] "
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
