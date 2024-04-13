import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";


const Home = () => {
    return (
        <div>
            <Header />
            <Navbar />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border">
                    <LeftSideNav />
                </div>
                <div className="md:col-span-2 border">
                    <h2 className="text-2xl">News comming Soon</h2>
                </div>
                <div className="border">
                    <RightSideNav />
                </div>
            </div>
        </div>
    );
};

export default Home;