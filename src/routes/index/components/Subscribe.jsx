import { useState } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";

const Subscribe = () => {
  const [subscribedButtonElement, setSubscribedButtonElement] = useState(0);
  const [focusMessage, setFocusMessage] = useState(false);

  async function handleSubscribe(email) {
    const taskID = uuid();
    const data = {
      taskID: taskID,
      email: email,
    };

    // Fetching the task
    /*
    const PRODUCER_SPRING = `${import.meta.env.VITE_PRODUCER_SPRING_URL}`;

    const producer_response = await axios.post(
      PRODUCER_SPRING + "/producer/subscribe",
      data
    );

    console.log(
      "Status = " +
        producer_response.status +
        "  Response = " +
        producer_response.data
    );

    // Receiving the feedback
    console.log(taskID);

    const FEEDBACK_SPRING = `${import.meta.env.VITE_FEEDBACK_SPRING_URL}`;

    const feedback_response = await axios.get(
      // FEEDBACK_SPRING + `/feedback/subscribe?taskID=${taskID}`
      FEEDBACK_SPRING + "/feedback/subscribe",
      { params: { taskID: taskID } }
    );

    console.log(
      "Status = " +
        feedback_response.status +
        " Response = " +
        feedback_response.data
    );

    if (feedback_response.data) {
      setSubscribedButtonElement(2);
      document.getElementById("message").innerHTML = "Mail sent !!";
    } else {
      setSubscribedButtonElement(3);
      document.getElementById("message").innerHTML =
        "Mail attempt failed, Retry again !!";
    }*/

    // additional 
      setTimeout(() => {
         setSubscribedButtonElement(3);
          document.getElementById("message").innerHTML =
            "Mail attempt failed, Retry again !!";
      }, 3000);
    
  }

  function Subscribe(event) {
    event.preventDefault();
    // console.log(document.getElementById("subscribe-email").value);

    // email validation

    let SubscribeEmail = document.getElementById("subscribe-email").value;
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!regex.test(SubscribeEmail)) {
      document.getElementById("message").innerHTML =
        !focusMessage && "Invalid Email Format";
      return;
    }

    // email sending
    setSubscribedButtonElement(1);
    document.getElementById("message").innerHTML =
      !focusMessage && "An email being sent!!";

    handleSubscribe(SubscribeEmail);

    return;
  }

  return (
    <div className="flex items-center justify-center w-full aspect-[3/1]">
      <div className="w-[85%] rounded-lg bg-[url('https://res.cloudinary.com/dkezdazmt/image/upload/v1735828411/svgnq5g9ukslzwcynvlh.jpg')] bg-cover bg-center aspect-[3/1] p-2 md:p-4 lg:p-8">
        <div className="bg-[#035c67] w-[35%] h-full rounded-md flex flex-col justify-center gap-4 p-2 md:p-4 lg:p-8">
          <h1 className="text-3xl text-white font-medium">
            Join our Subscription service
          </h1>
          <p className="text-white">
            Evernorth brings the power of wonder and relentless innovation to
            create world-class pharmacy, care and benefit services.
          </p>
          <form className="relative flex items-center">
            <input
              id="subscribe-email"
              name="subscribe-email"
              type="email"
              placeholder="yourmail@gmail.com"
              disabled={subscribedButtonElement != 0}
              className={`w-[90%] rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#3EFFC0] focus:border-[#3EFFC0] p-2 pr-32  ${
                subscribedButtonElement != 0 ? "text-gray-300" : ""
              }`}
              onFocus={() => setFocusMessage(true)}
              onBlur={() => setFocusMessage(false)}
            />
            <button
              onClick={Subscribe}
              disabled={subscribedButtonElement != 0}
              id="subscribe-btn"
              className="text-[#035c67] absolute right-[10%] bg-[#3EFFC0] px-4 py-2 rounded hover:bg-[#aaa] w-[30%] h-full flex items-center justify-center overflow-hidden"
            >
              {subscribedButtonElement == 0 && <span>Subscribe</span>}
              {subscribedButtonElement == 1 && (
                <img src="https://res.cloudinary.com/dkezdazmt/image/upload/v1735902824/Evernorth/MSG_LOADING.gif" />
              )}
              {subscribedButtonElement == 2 && (
                <img
                  src="https://res.cloudinary.com/dkezdazmt/image/upload/v1735902854/Evernorth/MSG_SENT.svg"
                  className="h-full"
                />
              )}
              {subscribedButtonElement == 3 && (
                <img
                  src="https://res.cloudinary.com/dkezdazmt/image/upload/v1736511579/Evernorth/email-fail.svg"
                  className="h-full"
                />
              )}
            </button>
          </form>

          <p
            id="message"
            className="w-[90%] text-center h-[10px] text-sm text-gray-300"
          >
            {focusMessage && ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
