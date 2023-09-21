import React, { useState } from 'react';
import ItemList from './ItemList';
import UserList from './UserList';

const Admin = () => {
  const [selectedOption, setSelectedOption] = useState('itemlist'); // Default to 'itemlist'

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const headingStyle = {
    cursor: 'pointer', // Set the cursor to a pointer
  };

  return (
    <div className="container " style={{ backgroundColor: "#00ADB5", color: "#222831", height: "100vh"}} >
      <h4 style={{borderBottom: "2px solid black"}} className='item-center'>Admin Panel</h4>
      <div className="row">
        <div className="col-md-3 " style={{borderRight: "2px solid black", backgroundColor: "#393E46", color: "#EEEEEE", height: "44.9vh"}}>
          <div className="admin">
            <div className="row admin-row" >
              <div className="column-1 col-md-12 " >

                <h5
                  style={selectedOption === 'itemlist' ? { ...headingStyle, fontWeight: 'bold' } : headingStyle}
                  onClick={() => handleOptionClick('itemlist')}
                >
                  <i className="mx-3 fa-solid fa-table-columns"></i>Item List
                </h5>
                <h5
                  style={selectedOption === 'userlist' ? { ...headingStyle, fontWeight: 'bold' } : headingStyle}
                  onClick={() => handleOptionClick('userlist')}
                >
                  <i className="mx-3 fa-solid fa-users"></i> Users List
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          {/* Render the selected component here */}
          {selectedOption === 'itemlist' && <ItemList />}
          {selectedOption === 'userlist' && <UserList />}
        </div>
      </div>
    </div>
  );
};

export default Admin;
