import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Guide = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
          @keyframes shake {
            0%, 100% {
              transform: translateY(0);
            }
            25% {
              transform: translateY(-3px);
            }
            50% {
              transform: translateY(0px);
            }
            75% {
              transform: translateY(3px);
            }
          }
        `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="fixed z-50 bottom-14 right-16">
      <div className="rounded-full flex items-center justify-center text-white h-12 w-12 bg-white border-2 border-black shadow-lg animate-[shake_0.5s_ease-in-out_infinite]">
        <img
          onClick={() => navigate("/help")}
          src="https://res.cloudinary.com/dkezdazmt/image/upload/v1738232551/Evernorth/chatbot.svg"
          className="w-[30px]"
        />
      </div>
    </div>
  );
};

export default Guide;
