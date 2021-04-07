import React from "react";
import "./Header.css";

const Header = () => {
    return(
        <div className="header">
            <div className="header-content">
                <div className="title">
                    TomatoTimer
                </div>
                <div className="buttons">
                    <button>These</button>
                    <button>Buttons</button>
                    <button>Don't</button>
                    <button>Work</button>
                </div>
            </div>
        </div>
    )
}

export default Header;