import React,{ useState, useEffect }from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })

    });
    const data = await res.json();
    if (data.error) {
      window.alert(data.error);
      
    } else {
      // window.alert("Login Success");
      // console.log(data);
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);
      localStorage.setItem("id", data._id);
    //  test  admin ou client 
      if (data.role === "admin") {
        window.location.href = "/dashboard";
      }
      if (data.role === "client") {
        window.location.href = "/profile";
      }
    
      

    }
  };


  return (
    <div>
      <div class="relative flex h-full w-full">
  <div class="h-screen w-1/2 bg-black">
    <div class="mx-auto flex h-full w-2/3 flex-col justify-center text-white xl:w-1/2">
      <div>
        <p class="text-2xl">Login|</p>
        <p>please login to continue|</p>
      </div>
      <div class="my-6">
        <button class="flex w-full justify-center rounded-3xl border-none bg-white p-1 text-black hover:bg-gray-200 sm:p-2"><img src="https://freesvg.org/img/1534129544.png" class="mr-2 w-6 object-fill" />Sign in with Google</button>
      </div>
      <div>
        <fieldset class="border-t border-solid border-gray-600">
          <legend class="mx-auto px-2 text-center text-sm">Or login via our secure system</legend>
        </fieldset>
      </div>
      <div class="mt-10">
        <form onSubmit={login} >
          <div>
            <label class="mb-2.5 block font-extrabold" for="email">Email</label>
            <input type="email" id="email" name='email'
             class="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30" 
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="mail@user.com" />
          </div>
          <div class="mt-4">
            <label class="mb-2.5 block font-extrabold" for="email">Password</label>
            <input type="password" id="email" name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            class="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow" />
          </div>
          <div class="mt-4 flex w-full flex-col justify-between sm:flex-row">
          
         
            <div>
              <a href="#" class="text-sm hover:text-gray-200">Forgot password</a>
            </div>
          </div>
          <div class="my-10">
            <button class="w-full rounded-full bg-orange-600 p-5 hover:bg-orange-800"
            type='submit'>Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div class="h-screen w-1/2 bg-blue-600">
    <img src="https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="h-full w-full" />
  </div>
</div>
    </div>
  )
}

export default Login
