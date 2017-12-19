import React, { Component } from "react";

import DataService from "../../services/dataService";
import RedirectionService from "../../services/redirectionService";

class RenderPost extends Component {
    constructor(props) {
        super(props);

        this.bindInit();

        this.dataService = new DataService();
        this.redirectionService = new RedirectionService();
    }

    bindInit() {
        this.renderDeleteButton = this.renderDeleteButton.bind(this);
        this.processVideoUrl = this.processVideoUrl.bind(this);
        this.deletePost = this.deletePost.bind(this);
    }

    renderDeleteButton() {
        const isMyPost = this.props.isMyPost();

        if (isMyPost) {
            return <input className="btn btn-success btn-lg profileButton" type="button" value="Delete Post" onClick={this.deletePost} />;
        }
    }

    deletePost() {
        const postId = this.props.postId;
        this.dataService.deletePost(postId, (response) => {
            this.redirectionService.redirect("feed");
        }, (error) => {
            console.log(error);
        });
    }

    processVideoUrl(video) {
        const videoEndPart = video.split("=")[1];
        return (
            <iframe width="90%" height="550px" className="videoPostStyle" src={`https://www.youtube.com/embed/${videoEndPart}`} frameBorder="0" allowFullScreen></iframe>
        );
    }
    render() {
        const singlePost = this.props.singlePost;
        return (
            <div>
                <h1 className="card-title profileName">{singlePost.userDisplayName}</h1>
                <p>{new Date(singlePost.dateCreated).toLocaleDateString()} at {new Date(singlePost.dateCreated).toLocaleTimeString()}</p>
                <p>{singlePost.text ? <p>{singlePost.text}</p> : singlePost.imageUrl ? <img src={singlePost.imageUrl} className="renderImgStyle"/> : singlePost.videoUrl ? this.processVideoUrl(singlePost.videoUrl) : "no content detected"}</p>
                {this.renderDeleteButton()}
            </div>
        );
    }
}

export default RenderPost;