import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()


    const goToLogin = () => {
        navigate("/Login");
    };

    return (
        <button onClick={goToLogin}>Click</button>
    );
};
export default Home;