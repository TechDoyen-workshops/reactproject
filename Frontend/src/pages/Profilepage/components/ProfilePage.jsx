import React, { useState, useEffect } from "react";
import axios from "axios";
import bcrypt from "bcryptjs"; 
import { useLocation } from 'react-router-dom';

function ProfilePage() {
  const [username, setUsername] = useState("");
  const [dob, setDob] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState(""); // New password field
  const [confirmPassword, setConfirmPassword] = useState(""); // Confirm password field
  const [isEditing, setIsEditing] = useState(false); // Toggle between edit/view mode
  const [showPasswordFields, setShowPasswordFields] = useState(false); // Toggle password fields visibility

  // Retrieve email from local storage
  const email = localStorage.getItem('userEmail');

  // Fetch user data when the component mounts
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/selectuserbyemail`, {
          params: { email: email }
        });
        setUsername(response.data.username);
        setDob(response.data.dob);
        setMobile(response.data.number);
      } catch (error) {
        console.error("Error fetching user data:", error);
        alert("Error fetching user data.");
      }
    };

    if (email) {
      fetchUserData();
    } else {
      alert("Email not found in local storage.");
    }
  }, [email]);

  const handleSave = async () => {
    if (password && password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    let hashedPassword = null;
    if (password) {
      // Hash the password using bcrypt before sending it
      const salt = bcrypt.genSaltSync(10); // Generate salt with 10 rounds
      hashedPassword = bcrypt.hashSync(password, salt); // Hash the password
    }

    try {
      const response = await axios.post('http://localhost:3001/updateuser', {
        username: username,
        dob: dob,
        number: mobile,
        email: email,
        password: hashedPassword, // Send hashed password if provided
      });

      if (response.status === 200) {
        setIsEditing(false); // Switch back to view mode
        alert("Profile saved successfully!");
      } else {
        alert("Failed to save profile. Please try again.");
      }
    } catch (error) {
      console.error("Error saving profile:", error);
      alert("Error saving profile.");
    }
  };

  const handleEdit = () => {
    setIsEditing(true); // Switch to edit mode
  };

  const handleCancel = () => {
    setIsEditing(false); // Cancel edit mode
    setShowPasswordFields(false); // Hide password fields
  };

  const togglePasswordFields = () => {
    setShowPasswordFields(!showPasswordFields); // Toggle password field visibility
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-6">
      <div className="max-w-lg w-full bg-white shadow-md rounded-lg overflow-hidden">
        <div className="bg-cover bg-center h-40 bg-pink-500"></div>

        <div className="p-6">
          <div className="flex justify-center -mt-16">
            <img
              className="w-32 h-32 object-cover rounded-full border-4 border-white"
              src="https://via.placeholder.com/150"
              alt="Profile"
            />
          </div>

          <div className="text-center mt-4">
            <h2 className="text-2xl font-semibold text-gray-800">{username || 'Loading...'}</h2>
          </div>

          <div className="mt-6">
            {!isEditing ? (
              <>
                <div className="mb-4">
                  <p><strong>Username:</strong> {username}</p>
                </div>
                <div className="mb-4">
                  <p><strong>Email:</strong> {email}</p>
                </div>
                <div className="mb-4">
                  <p><strong>Date of Birth:</strong> {dob}</p>
                </div>
                <div className="mb-4">
                  <p><strong>Mobile Number:</strong> {mobile}</p>
                </div>

                <button
                  onClick={handleEdit}
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Edit
                </button>
              </>
            ) : (
              <>
                <div className="mb-4">
                  <label className="block text-gray-700">Username</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="mt-1 px-4 py-2 border rounded-lg w-full text-gray-700 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    value={email}
                    readOnly // Make email read-only
                    className="mt-1 px-4 py-2 border rounded-lg w-full text-gray-700 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700">Date of Birth</label>
                  <input
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="mt-1 px-4 py-2 border rounded-lg w-full text-gray-700 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700">Mobile Number</label>
                  <input
                    type="tel"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    className="mt-1 px-4 py-2 border rounded-lg w-full text-gray-700 focus:outline-none focus:border-blue-500"
                  />
                </div>

                {/* Change Password Link */}
                <div className="mb-4">
                  <button
                    onClick={togglePasswordFields}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    {showPasswordFields ? "Hide Password Fields" : "Change Password"}
                  </button>
                </div>

                {/* Password Fields, visible only if showPasswordFields is true */}
                {showPasswordFields && (
                  <>
                    <div className="mb-4">
                      <label className="block text-gray-700">New Password</label>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-1 px-4 py-2 border rounded-lg w-full text-gray-700 focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-gray-700">Confirm Password</label>
                      <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="mt-1 px-4 py-2 border rounded-lg w-full text-gray-700 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </>
                )}

                <div className="flex gap-4">
                  <button
                    onClick={handleSave}
                    className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleCancel}
                    className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
