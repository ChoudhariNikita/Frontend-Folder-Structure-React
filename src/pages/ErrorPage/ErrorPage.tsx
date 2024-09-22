import React from "react";
import "./ErrorPage.css";
import Button from "../../components/common/Buttons/Button";
import { useNavigate } from "react-router-dom";
import { ERROR_TITLE, ERROR_MESSAGE } from "../../constants/index"; 

const ErrorPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="error-page">
            <h1 className="error-page__title">{ERROR_TITLE}</h1>
            <p className="error-page__text">{ERROR_MESSAGE}</p>
            <Button onClick={() => navigate("/")} className="button-primary">Back to Home</Button>
        </div>
    );
};

export default ErrorPage;
