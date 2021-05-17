import React from 'react';

import "../css/homepage.scss";

import { Link } from 'react-router-dom';

export default function HomePage() {


    return (
        <div className="page homepage">
            <div className="main-menu">
                <Link to='/story/select'>View saved stories</Link>
                <button>Write a new story</button>
            </div>
        </div>
    )
}