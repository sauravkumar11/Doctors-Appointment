import React, { useState } from 'react';
import { assets } from '../assets/assets';

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Saurav Kumar",
    image: assets.profile_pic,
    email: "Sauravkumar@gmail.com",
    phone: "(+91) - 8271617669",
    address: "801110 Paliganj, Patna, Bihar-INDIA",
    dob: "11 Feb 2005",
    gender: "Male"
  });

  const [isEditable, setIsEditable] = useState(false);

  const handleSave = () => {
    setIsEditable(false);
    console.log("Updated User Data:", userData);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <div className="text-center">
        <img
          src={userData.image}
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mt-10"
        />
        <h1 className="text-center text-2xl font-bold mt-4 mx-auto">
          {isEditable ? (
            <input
              type="text"
              value={userData.name}
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
              className="border px-4 py-2 rounded w-80 mx-auto mt-4"
            />
          ) : (
            userData.name
          )}
        </h1>
      </div>
      <div className="mt-6">
        <div className="flex flex-col gap-4">
          {[
            { label: "Email", type: "email", value: userData.email, key: "email" },
            { label: "Phone", type: "text", value: userData.phone, key: "phone" },
            { label: "Address", type: "textarea", value: userData.address, key: "address" },
            { label: "Date of Birth", type: "date", value: userData.dob, key: "dob" },
            { label: "Gender", type: "select", value: userData.gender, key: "gender" }
          ].map((field) => (
            <div key={field.key}>
              <label className="block text-gray-700 font-medium">{field.label}</label>
              {isEditable ? (
                field.type === "textarea" ? (
                  <textarea
                    value={field.value}
                    onChange={(e) =>
                      setUserData({ ...userData, [field.key]: e.target.value })
                    }
                    className="border px-4 py-2 rounded w-full"
                  />
                ) : field.type === "select" ? (
                  <select
                    value={field.value}
                    onChange={(e) =>
                      setUserData({ ...userData, [field.key]: e.target.value })
                    }
                    className="border px-4 py-2 rounded w-full"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                ) : (
                  <input
                    type={field.type}
                    value={field.value}
                    onChange={(e) =>
                      setUserData({ ...userData, [field.key]: e.target.value })
                    }
                    className="border px-4 py-2 rounded w-full"
                  />
                )
              ) : (
                <p className="text-gray-600">{field.value}</p>
              )}
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <button
            onClick={isEditable ? handleSave : () => setIsEditable(true)}
            className="bg-primary text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-all duration-300"
          >
            {isEditable ? "Save" : "Edit Profile"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
