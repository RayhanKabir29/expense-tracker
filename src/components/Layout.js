import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="App">
      <div className="header">
        <h1>Expense Tracker</h1>
      </div>

      <div className="main">
        <div className="container"> {children}</div>
      </div>

      <div className="footer">&copy;2025 Kabir</div>
    </div>
  );
};

export default Layout;
