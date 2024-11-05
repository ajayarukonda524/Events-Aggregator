 import React from 'react';
 import '../styles/StudentLogin.css'; // Make sure to create this CSS file and set the styles

const StudentLogin = () => {
   const handleLogin = (e) => {
   e.preventDefault();
     // Logic for handling login will go here
   };

  return (
     <div className="login-container">
       <div className="quote-section">
         <h3>"Education is the passport to the future, for tomorrow belongs to those who prepare for it today."</h3>
        <p>— Malcolm X</p>
      </div>

//       <div className="login-box">
//         <h2>Student Login</h2>
//         <form onSubmit={handleLogin}>
//           <div className="form-group">
//             <label>Email:</label>
//             <input type="email" required />
//           </div>
//           <div className="form-group">
//             <label>Password:</label>
//             <input type="password" required />
//           </div>
//           <button type="submit" className="login-button">Login</button>
//         </form>
//       </div>
//     </div>
   );
 };

 export default StudentLogin;
