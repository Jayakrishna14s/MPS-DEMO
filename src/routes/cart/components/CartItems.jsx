import React from "react";

const CartItems = () => {
  const cartItems = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dkezdazmt/image/upload/v1737921754/Evernorth/lipitor.png",
      price: 23.7,
      name: "Lipitor",
      description: "It is a drug and also a drug",
      deliveryExpectancy: "Thu October 18",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dkezdazmt/image/upload/v1737921754/Evernorth/lipitor.png",
      price: 23.5,
      name: "Lipitor",
      description: "It is a drug and also a drug",
      deliveryExpectancy: "Thu October 18",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dkezdazmt/image/upload/v1737921754/Evernorth/lipitor.png",
      price: 19.6,
      name: "Lipitor",
      description: "It is a drug and also a drug",
      deliveryExpectancy: "Thu October 18",
    },
  ];
  return (
    <div className=" w-[80%] m-4 p-8  ">
      <h1 className="font-bold text-3xl text-center bg-white py-4 underline rounded-lg shadow-md">
        My Cart
      </h1>
      <ul className="flex flex-col gap-4 my-8">
        {cartItems.map((item) => {
          return (
            <li
              key={item.id}
              className="bg-white p-4 shadow-lg flex gap-8 rounded-lg"
            >
              <img
                src="https://res.cloudinary.com/dkezdazmt/image/upload/v1737921754/Evernorth/lipitor.png"
                className="h-[250px] w-[250px] rounded-lg"
              />
              <div className="flex flex-col w-full p-2">
                <div className="flex justify-between items-center">
                  <h1 className="font-bold text-xl">{item.name}</h1>
                  <span className="flex items-center gap-4">
                    <img
                      src="https://res.cloudinary.com/dkezdazmt/image/upload/v1737924542/Evernorth/truck.svg"
                      className="h-[25px] inline"
                    />

                    <span>
                      {" "}
                      Delivery by |{" "}
                      <span className="text-[#3EFF66] font-semibold">
                        {item.deliveryExpectancy}
                      </span>
                    </span>
                  </span>
                </div>

                <p className="mt-4 mb-8">{item.description}</p>
                <span className="my-8 font-semibold text-2xl">
                  ${item.price}
                </span>

                <div className="flex-grow"></div>

                <button className="text-left ">
                  {" "}
                  <span className="p-2 px-4 bg-gray-200 rounded-md hover:scale-100 transition duration-1000 hover:bg-gray-300">
                    REMOVE
                  </span>
                </button>
              </div>
            </li>
          );
        })}

        {cartItems.length == 0 && (
          <li className="flex flex-col items-center justify-center bg-white p-8 h-[200px]">
            <img
              src="https://res.cloudinary.com/dkezdazmt/image/upload/v1737902486/Evernorth/history.svg"
              className="h-[100px]"
            />
            <span>No items</span>
          </li>
        )}
      </ul>

      {cartItems.length > 0 && (
        <div className="p-2 bg-white rounded-lg shadow-lg flex justify-between items-center">
          <span>
            &nbsp;&nbsp; Total : &nbsp; &nbsp;$
            <span className="font-semibold">
              {cartItems
                .reduce((total, item) => total + item.price, 0)
                .toFixed(2)}
            </span>
          </span>
          <button className="bg-orange-400 p-2 font-semibold rounded-lg hover:scale-105 hover:bg-orange-300">
            Place Order
          </button>
        </div>
      )}

      <br />
      <br />
    </div>
  );
};

export default CartItems;
