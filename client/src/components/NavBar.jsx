import React from 'react';

const Navbar = () => {
  const token = localStorage.getItem("token")
  console.log(token)
  const role = localStorage.getItem("role")
  console.log(role)
// navbar bien stylé

  return (
    
    <nav className="bg-gray-800 p-2">
      <div className="container mx-auto flex items-center justify-between flex-wrap">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <a href="#" className="font-semibold text-xl tracking-tight">CDM</a>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
          <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Home
            </a>
            {token && role === "admin" &&   <a href="/dashboard" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Dashboard
            </a>   
              }
           {token && role === "client" && <a href="/profile" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Client
              </a>
              }

           {/* tester if  tocken existe afficher login et register sinon afficher logout */}
            {!token && <a href="/login" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Login
            </a>
            }
            {!token && <a href="/register" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
              Register
            </a>
            }
            {token && 
            <button className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("role");
              localStorage.removeItem("id");
              window.location.href = "/";
            }}
             >   
              Logout
            
            </button>
            }

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
