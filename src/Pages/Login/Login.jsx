import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {

    const {signInUser} = useContext(AuthContext);
    const location = useLocation();
    console.log(location)

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form  = new FormData(e.currentTarget)
        const email = form.get('email');
        const password = form.get('password');
        signInUser(email, password)
        .then(userCredential => {
            const user = userCredential.user;
            console.log(user)

            // navigate after login
            navigate(location?.state ? location.state : '/');
        })
        .catch(error => {
            console.log(error.message)
        })
    }

  return (
    <div>
      <Navbar />

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content ">
            
          <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
          <h2 className="p-5 text-2xl font-bold">Plase Login </h2>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your Email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit"  value='Login'/>
              </div>
              <p>Do not have an account? <Link to='/register' className="underline text-red-500">Register here</Link></p>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
