import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Register = () => {

    const {createUser} = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photURL = form.get('photoURL')
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password)
        createUser(email, password)
        .then(userCredentail => {
            const user = userCredentail.user;
            console.log(user)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div>
            <Navbar />

            <div className="hero min-h-screen bg-base-200">
        <div className="hero-content ">
            
          <div className="card shrink-0 w-full min-w-lg shadow-2xl bg-base-100">
          <h2 className="p-5 text-2xl font-bold">Plase Register </h2>
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your Full Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Provide your photo url here"
                  name="photoURL"
                  className="input input-bordered"
                  required
                />
              </div>
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
                <input className="btn btn-primary" type="submit"  value='Register'/>
              </div>
              <p>Already Registerd? <Link to='/login' className="underline text-red-500">Login here</Link></p>
            </form>
            
          </div>
        </div>
      </div>
        </div>
    );
};

export default Register;