import React, { Component } from "react";
import { Link } from "react-router-dom";

class GetComments extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const comments = this.props.comments;
        return (
            <div>
                {comments.map((comment) => {
                    return (
                        <div key={comment.id} className="card-block row commentCard">
                            <div className="col-4 col-lg-4">
                                <Link to={`/profile/${comment.authorId}`}>
                                    <p style={{fontSize: "1.2em", textAlign: "left", paddingLeft: "50px", marginBottom: "5px"}}>{comment.authorName}</p>
                                </Link>
                                <p style={{fontSize: "1em", textAlign: "left", paddingLeft: "50px"}}>{comment.dateCreated}</p>
                            </div>
                            <div className="col-4 col-lg-8">
                                <p style={{fontSize: "1.2em", textAlign: "left"}}> {comment.body}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default GetComments;