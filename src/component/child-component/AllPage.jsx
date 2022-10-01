import React from 'react';

import Intro from'./Intro'
import About from'./About';
import Features from'./Features';
import Join from'./Join';
function AllPage() {
    return (
        <div>
            <Intro/>
                <About />
                <Features />
                <Join/>
        </div>
    );
}

export default AllPage;