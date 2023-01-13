import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-gray-300 p-4">
      <h2 className="text-lg font-medium text-center mb-4">Menu</h2>
      <nav>
        <ul className="list-none">
          <li className="mb-2 hover:bg-gray-400">
            <a href="#" className="block p-2">Home</a>
          </li>
          <li className="mb-2 hover:bg-gray-400">
            <a href="#" className="block p-2">Users</a>
          </li>
          <li className="mb-2 hover:bg-gray-400">
            <a href="#" className="block p-2">Settings</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
