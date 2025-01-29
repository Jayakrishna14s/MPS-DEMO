import React, { useEffect, useState } from "react";
import Navbar from "/src/Components-Common/Navbar";
import { ReusableComponent } from "/src/routes/profile/components/ReusableComponent";
import { DependentComponent } from "/src/routes/profile/components/DependentComponent";
import FloatingForm from "/src/routes/profile/components/FloatingForm";
import DeleteDependent from "./components/DeleteDependent";
import UpdateDependent from "./components/UpdateDependent";
import AddDependent from "./components/AddDependent";

const Profile = () => {
  const [data, setData] = useState(null); // State to hold the data
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to track errors

  const [isFloatingFormOpen, setIsFloatingFormOpen] = useState(false);
  const [floatingFormType, setFloatingFormType] = useState("");
  const [dataSection, setDataSection] = useState("");

  const [deleteDependentForm, setDeleteDependentForm] = useState(false);
  const [dependentID, setDependentID] = useState("");

  const [updateDependentForm, setUpdateDependentForm] = useState(false);
  const [dependentData, setDependentData] = useState(null);

  const [addDependent, setAddDependent] = useState(false);

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://your-backend-api.com/data");
        setData(response.data); // Set the data from the response
        setLoading(false); // Set loading to false
      } catch (err) {
        setError(null); // Set error message in case of failure
        setLoading(true); // Set loading to false

        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };

    fetchData(); // Call the function to fetch data
  }, []); // Empty dependency array ensures this runs once when the component mounts

  // if (loading) {
  //   return <div>Loading...</div>; // Display loading text while data is being fetched
  // }

  // if (error) {
  //   return <div>Error: {error}</div>; // Display error message if something went wrong
  // }

  const profilePercentage = 70;

  const basicInfo = {
    // userID: "usr$14351610",
    id: "basicInfo",
    image:
      "https://res.cloudinary.com/dkezdazmt/image/upload/Evernorth/evernorth_logo",
    name: "Jayakrishna Paripelli",
    firstName: "Jayakrishna",
    lastName: "Paripelli",
    // username: "Jayakrishna14",
    memberID: "ENM$14351610",
  };

  const contactInfo = {
    id: "contactInfo",
    title: "Contact Information",
    countryCode: "91",
    phone: "9390107253",
    email: "krishna9502202491@gmail.com",
    location: "India",
  };

  const deliveryAddress = {
    id: "deliveryAddress",
    address: "SRR Thota",
    city: "Warangal",
    state: "Telangana",
    country: "India",
    postalCode: "506002",
  };

  const currentMedications = {
    id: "currentMedications",
    title: "Current Medications",
    medications: ["medicine-1", "medicine-2"],
  };

  // const history = {
  //   id: "history",
  //   title: "Prescription history",
  //   // prescriptionID: "",
  //   prescriptions: [],
  //   // prescription: "medicine",
  // };

  const healthConditions = {
    id: "healthConditions",
    title: "Health Conditions",
    condition1: "Condition-1",
    description1:
      "This is the description about the first condition and this is the description about the first cindition  about the first cindition",
    condition2: "Condition-2",
    description2:
      "This is the description about the first condition and this is the description about the first cindition  about the first cindition",
  };

  const paymentInfo = {
    id: "paymentInfo",
    isAvailable: true,
    title: "Payment Information",
    cardHolderName: "Jayakrishna",
    cardNumber: "98XXXXXXXXXXXXXX",
    expirationDate: "06/26",
    cvv: 765,
  };

  const subscription = {
    id: "subscription",
    title: "Current Plan",
    plan: "--",
  };

  const dependents = [
    {
      dependentID: "dpt$14351610",
      name: "KothapetChintuModel3",
      // username: "chintumodel",
      condition1: "Diabetes",
      description1:
        "a chronic disease that causes high levels of blood sugar, or glucose",
      condition2: "Diabetes",
      description2:
        "a chronic disease that causes high levels of blood sugar, or glucose",
      image:
        "https://res.cloudinary.com/dkezdazmt/image/upload/v1737904890/Evernorth/kothapetchintumodel.jpg",
    },

    // {
    //   dependentID: "dpt$14351699",
    //   name: "KothapetChintuModel1",
    //   username: "chintumodel",
    //   condition1: "Diabetes",
    //   description1:
    //     "a chronic disease that causes high levels of blood sugar, or glucose",
    //   condition2: "Diabetes",
    //   description2:
    //     "a chronic disease that causes high levels of blood sugar, or glucose",
    //   image:
    //     "https://res.cloudinary.com/dkezdazmt/image/upload/v1737904890/Evernorth/kothapetchintumodel.jpg",
    // },
    // {
    //   dependentID: "dpt$14351678",
    //   name: "KothapetChintuModel2",
    //   username: "chintumodel",

    //   condition1: "Diabetes",
    //   description1:
    //     "a chronic disease that causes high levels of blood sugar, or glucose",
    //   condition2: "Diabetes",
    //   description2:
    //     "a chronic disease that causes high levels of blood sugar, or glucose",
    //   image:
    //     "https://res.cloudinary.com/dkezdazmt/image/upload/v1737904890/Evernorth/kothapetchintumodel.jpg",
    // },
  ];

  const renderItem = (section) => (
    <div className="p-2">
      {Object.entries(section).map(([key, value]) =>
        key === "image" ? (
          <div className="flex justify-between" key={key}>
            <img src={value} className="h-[120px] w-[120px] rounded-full" />

            <img
              id={section.id}
              src="https://res.cloudinary.com/dkezdazmt/image/upload/v1737815518/Evernorth/edit.svg"
              className="h-[20px] hover:scale-110 transition duration-500"
              onClick={() => {
                setIsFloatingFormOpen(true);
                setFloatingFormType(section.id);
                setDataSection(basicInfo);
              }}
            />
          </div>
        ) : key === "name" ? (
          <div className="text-xl mt-2 font-semibold" key={key}>
            {value}
          </div>
        ) : key === "memberID" ? (
          <div className="text-xs" key={key}>
            @{value}
          </div>
        ) : key === "title" ? (
          <div className="flex justify-between items-center mb-4" key={key}>
            <span className="text-xl font-semibold">{value}</span>
            {section.id !== "subscription" &&
              section.id != "currentMedications" && (
                <img
                  id={section.id}
                  src="https://res.cloudinary.com/dkezdazmt/image/upload/v1737815518/Evernorth/edit.svg"
                  className="h-[20px] hover:scale-110 "
                  onClick={() => {
                    setIsFloatingFormOpen(true);
                    setFloatingFormType(section.id);
                    setDataSection(
                      section.id == "contactInfo"
                        ? contactInfo
                        : section.id == "healthConditions"
                        ? healthConditions
                        : paymentInfo
                    );
                  }}
                />
              )}
          </div>
        ) : key === "id" ||
          key === "firstName" ||
          key === "lastName" ||
          key === "countryCode" ||
          key === "cvv" ? (
          ""
        ) : key === "phone" || key === "email" || key === "location" ? (
          <div key={key} className="flex gap-4">
            <img
              src={
                key === "phone"
                  ? "https://res.cloudinary.com/dkezdazmt/image/upload/v1737818607/Evernorth/phone.svg"
                  : key === "email"
                  ? "https://res.cloudinary.com/dkezdazmt/image/upload/v1737818459/Evernorth/email.svg"
                  : key === "location"
                  ? "https://res.cloudinary.com/dkezdazmt/image/upload/v1737818673/Evernorth/location.svg"
                  : ""
              }
            />
            <span>{value}</span>
          </div>
        ) : key.startsWith("condition") ? (
          <div key={key} className="font-medium text-xl mt-4">
            {value}
          </div>
        ) : (
          <div key={key}>
            {Array.isArray(value) ? (
              value.length == 0 ? (
                <div className="flex justify-center h-[60px]">
                  <img src="https://res.cloudinary.com/dkezdazmt/image/upload/v1737902486/Evernorth/history.svg" />
                </div>
              ) : (
                value.map((item, index) => <div key={index}>{item}</div>)
              )
            ) : (
              <div>{value}</div>
            )}
          </div>
        )
      )}
    </div>
  );

  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar index={5} />

      {loading ? (
        <div className="h-screen flex justify-center mt-4 items-center ">
          <img
            src="https://res.cloudinary.com/dkezdazmt/image/upload/v1737912774/Evernorth/loading.svg"
            alt="Loading..."
            className="h-24"
          />{" "}
        </div>
      ) : (
        <div className="h-screen overflow-scroll flex justify-evenly gap-1 m-8 mb-16 ">
          <div
            id="left"
            className=" w-[30%] bg-[#f1f5f9] flex flex-col gap-4 p-2"
          >
            <ReusableComponent data={basicInfo} renderItem={renderItem} />
            <ReusableComponent data={contactInfo} renderItem={renderItem} />
            {/* <ReusableList data={basicInfo} renderItem={renderItem} /> */}
            <ReusableComponent
              data={currentMedications}
              renderItem={renderItem}
            />

            {/* <ReusableComponent data={subscription} renderItem={renderItem} /> */}

            {/* <ReusableComponent data={history} renderItem={renderItem} /> */}

            <br />
          </div>
          <div
            id="right"
            className=" w-[60%] bg-[#f1f5f9] flex flex-col gap-4 p-2"
          >
            <div className="border-[3px] flex justify-between border-[#035c67] bg-[#3EFFC055] shadow-lg text-[#035c67] rounded-md p-6 hover:scale-102">
              <div className="flex flex-col gap-2">
                <span className="text-xs  font-semibold">
                  Complete your profile
                </span>
                <h1 className="text-xl  font-bold">Add your missing details</h1>
              </div>
              <div className="h-[100%] aspect-[1/1]">
                <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#035c67"
                    strokeWidth="4"
                    strokeDasharray={`${profilePercentage}, 100`}
                  />
                  <text
                    x="18"
                    y="18"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="9"
                    fill="#035c67"
                    fontWeight="bold"
                  >
                    {profilePercentage}%
                  </text>
                </svg>
              </div>
            </div>
            <ReusableComponent
              data={healthConditions}
              renderItem={renderItem}
            />
            <ReusableComponent data={paymentInfo} renderItem={renderItem} />

            {/* <ReusableComponent data={subscription} renderItem={renderItem} /> */}
            <DependentComponent
              dependents={dependents}
              setDeleteDependentForm={setDeleteDependentForm}
              setDependentID={setDependentID}
              setUpdateDependentForm={setUpdateDependentForm}
              setDependentData={setDependentData}
              setAddDependent={setAddDependent}
            />
          </div>
        </div>
      )}

      {isFloatingFormOpen && (
        <FloatingForm
          setIsFloatingFormOpen={setIsFloatingFormOpen}
          floatingFormType={floatingFormType}
          dataSection={dataSection}
          deliveryAddress={
            floatingFormType === "contactInfo" ? deliveryAddress : null
          }
          // set
        />
      )}
      {isFloatingFormOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-20 backdrop-blur-sm z-40"></div>
      )}

      {deleteDependentForm && (
        <DeleteDependent
          dependentID={dependentID}
          setDeleteDependentForm={setDeleteDependentForm}
        />
      )}

      {deleteDependentForm && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-20 backdrop-blur-sm z-40"></div>
      )}

      {updateDependentForm && (
        <UpdateDependent
          dependentData={dependentData}
          setUpdateDependentForm={setUpdateDependentForm}
        />
      )}

      {updateDependentForm && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-20 backdrop-blur-sm z-40"></div>
      )}

      {addDependent && (
        <AddDependent
          memberID={basicInfo.memberID}
          setAddDependent={setAddDependent}
        />
      )}

      {addDependent && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-20 backdrop-blur-sm z-40"></div>
      )}
    </div>
  );
};

export default Profile;
