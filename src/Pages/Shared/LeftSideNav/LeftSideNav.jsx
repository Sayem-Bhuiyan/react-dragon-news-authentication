import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect( () => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    } , [])

    return (
        <div>
            <h2 className="text-3xl mb-5">All Categroy</h2>
            <div className="space-y-3">
                {
                    categories.map((category, idx) => <Link 
                    key={idx}
                    to= {`/categroy/${category.id}`}
                    className="ml-4 text-xl block "
                    >{category.name}</Link>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;