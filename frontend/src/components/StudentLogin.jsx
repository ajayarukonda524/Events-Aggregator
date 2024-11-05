import React from 'react';

const StudentLogin = ({ handleLogin }) => {
   const onSubmit = (e) => {
      e.preventDefault();
      handleLogin(); // Call the login handler passed from App
   };

   return (
      <div>
         <h2>Student Login</h2> {/* Correctly closed the h2 tag */}
         <form onSubmit={onSubmit}>
            <div>
               <label>Email:</label>
               <input type="email" required />
            </div>
            <div>
               <label>Password:</label>
               <input type="password" required />
            </div>
            <button type="submit">Login</button>
         </form>
      </div>
   );
};

export default StudentLogin;
