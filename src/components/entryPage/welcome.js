import React from "react";

const Welcome = () => {
    return (
        <div className="welcomeStyle">
            <h1 style={{fontSize: "2em", marginBottom: "10%"}}>Welcome to BitBook</h1>
            <p style={{marginBottom:"10%", fontSize:"1.5em"}}>Note: If you dont want to waste time registering you can use this account: Email- guest@home.com, Password - welcome</p>
            <p style={{fontSize:"1.5em"}}>BitBook is a Simple Social Media Network.
Users can register/login. The central page is feed, which shows posts by all users. Posts can be filtered by type. Feed page also utillizes infinite scroll. Users are allowed to create, delete and make a comment on posts. There is search function which allows users to find a another user or to search within posts. Profile has edit function, users can upload files from their PC or set a video/image link. Users can preview/enlarge images with a simple click on an image posts.</p>
        </div>
    );
};

export default Welcome;