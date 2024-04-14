import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const News = () => {
    return (
        <div>
            <Header />
            <div className="grid  grid-cols-1 md:grid-cols-4">
                <div className="col-span-3">

                </div>
                <div>
                    <RightSideNav />
                </div>

            </div>
        </div>
    );
};

export default News;