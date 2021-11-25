import React from 'react';
import "./style.scss";

const index = () => {
    return (
        <header>
            <div className="logo">GDev</div>
            <div>
                <div className="input-group">
                    <input type="text"  name="search" placeholder="search here..."/>
                    <div className="input-btn">
                        search here
                    </div>
                </div>
            </div>
        </header>
    )
}

export default index
