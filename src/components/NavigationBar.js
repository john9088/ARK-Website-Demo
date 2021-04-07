import React from 'react'

const Navigation = () => {
    return(
        <>
            <nav class="navbar navbar-expand-md">
                <a class="navbar-brand" href="#">Ark</a>
                 <button
                    class="navbar-toggler navbar-dark"
                    type="button"
                    data-toggle="collapse"
                    data-target="#main-navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="main-navigation">
                    <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#News">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contact">Contact</a>
                    </li>
                    </ul>
                </div>
            </nav>
        </>
    )
} 

export default Navigation