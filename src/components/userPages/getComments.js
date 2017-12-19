import React, { Component } from "react";
import { Link } from "react-router-dom";

class GetComments extends Component {
    render() {
        const comments = this.props.comments;
        return (
            <div>
                {comments.map((comment) => {
                    return (
                        <div key={comment.id} className="card-block row commentCard">
                            <div className="col-4 col-lg-4">
                                <Link to={`/profile/${comment.authorId}`}>
                                    <p style={{fontSize: "1.8em", textAlign: "left", paddingLeft: "50px", marginBottom: "5px"}}>{comment.authorName}</p>
                                </Link>
                                <p style={{fontSize: "1.3em", textAlign: "left", paddingLeft: "50px"}}>{new Date(comment.dateCreated).toLocaleDateString()} at {new Date(comment.dateCreated).toLocaleTimeString()}</p>
                            </div>
                            <div className="col-4 col-lg-8">
                                <p style={{fontSize: "1.5em", textAlign: "left"}}> {comment.body}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default GetComments;