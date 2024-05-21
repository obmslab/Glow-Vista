import { useState } from "react";

const Profile = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Your login logic here (e.g., check credentials, set loggedIn state)
    setLoggedIn(true);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Your signup logic here (e.g., store user data, set loggedIn state)
    setLoggedIn(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Profile Page</h1>
      {loggedIn ? (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Welcome, {username}!</h2>
          <p>Email: {email}</p>
          <p>Bio: {bio}</p>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row gap-8">
          <form onSubmit={handleLogin} className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-4">Login</h2>
            <div className="mb-4">
              <label
                htmlFor="loginUsername"
                className="block text-gray-700 font-semibold mb-2"
              >
                Username:
              </label>
              <input
                type="text"
                id="loginUsername"
                name="loginUsername"
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="loginPassword"
                className="block text-gray-700 font-semibold mb-2"
              >
                Password:
              </label>
              <input
                type="password"
                id="loginPassword"
                name="loginPassword"
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
            >
              Login
            </button>
          </form>
          <form onSubmit={handleSignup} className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-4">Signup</h2>
            <div className="mb-4">
              <label
                htmlFor="signupUsername"
                className="block text-gray-700 font-semibold mb-2"
              >
                Username:
              </label>
              <input
                type="text"
                id="signupUsername"
                name="signupUsername"
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="signupEmail"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email:
              </label>
              <input
                type="email"
                id="signupEmail"
                name="signupEmail"
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="signupBio"
                className="block text-gray-700 font-semibold mb-2"
              >
                Bio:
              </label>
              <textarea
                id="signupBio"
                name="signupBio"
                rows="4"
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
                onChange={(e) => setBio(e.target.value)}
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
            >
              Signup
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Profile;
