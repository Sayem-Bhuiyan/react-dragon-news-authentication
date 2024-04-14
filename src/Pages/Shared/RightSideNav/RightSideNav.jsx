import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';
import { getAuth } from "firebase/auth";
import app from "../../../firebase/firebase.config";



const RightSideNav = () => {
    const googleProvider = new GoogleAuthProvider()
    const auth = getAuth(app)

    const handleGoogleSignIn = ()=> {
        signInWithPopup(auth, googleProvider)
        .then(userCredential => {
            const user  = userCredential.user;
            console.log(user)
        })
        .catch(error => {
            console.log(error)
        })
    }
  return (
    <div>
      <div className="p-4">
        <h2 className=" font-semibold text-xl mb-4">Login With</h2>
        <button onClick={handleGoogleSignIn} className="btn btn-outline w-full mb-2">
          <FaGoogle />
          Login in with Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub />
          Login in with Github
        </button>
      </div>
      <div className="p-4 mb-6">
        <h2 className="text-xl font-semibold">Find Us on</h2>
        <a className="p-4 flex items-center gap-2 text-base border rounded-t-lg" href="#">
            <FaFacebook />
            Facebook
        </a>
        <a className="p-4 flex items-center gap-2 text-base border-x " href="#">
            <FaTwitter />
            Facebook
        </a>
        <a className="p-4 flex items-center gap-2 text-base border rounded-b-lg" href="#">
            <FaInstagram />
            Facebook
        </a>
      </div>
      {/* Q Zone */}
      <div className="p-4">
        <h2 className="text-xl font-semibold">Q Zone</h2>
            <img src={qZone1} alt="" />
            <img src={qZone2} alt="" />
            <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
