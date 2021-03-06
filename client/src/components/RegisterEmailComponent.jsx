import React, { useState } from "react";

function RegisterEmailComponent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  // const [array, setArray] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

	// const user = {
	// 	username: username,
	// 	password: password,
	// 	email: email,
	// }
	// setArray(array.concat(user));
	// console.log(array);
  };

  return (
    <div>
      <h1>Register</h1>
      <form action="" method="post" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Name</label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="confirm_password">Confirm Password</label>
          <input
            type="password"
            name="confirm_password"
            id="confirm_password"
          />
        </div>

        <div>
          <button onSubmit={handleSubmit}>Register</button>
        </div>
      </form>
    </div>
  );
}

export default RegisterEmailComponent;
