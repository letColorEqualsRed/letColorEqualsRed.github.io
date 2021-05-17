import React from 'react';

import { Link } from 'react-router-dom';

export default function SelectStoryPage() {

    return (
        <div>
            <h1>Select a Story</h1>
            <Link to="/story/view">Demo Story</Link>
        </div>
    )
}