import React, { Component } from "react";
import { Link } from "react-router-dom";

import DataService from "../../services/dataService";
import RedirectionService from "../../services/redirectionService";
import Search from "../common/search";

class People extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            searchString: "",
            matchedUsers: []
        };

        this.getData = new DataService();
        this.redirect = new RedirectionService();

        this.initBind();
    }

    initBind() {
        this.catchSearch = this.catchSearch.bind(this);
        this.filterResults = this.filterResults.bind(this);
        this.getImg = this.getImg.bind(this);
    }

    componentDidMount() {
        this.getData.getUsersData((users) => {
            this.setState({
                users,
                matchedUsers: users
            });

        }, (error) => {
            console.log(error);
        });
    }

    catchSearch(searchString) {
        this.setState({
            searchString
        });
    }

    filterResults(searchedString) {
        const users = this.state.users;
        let matchedUsers = [];

        matchedUsers = users.filter((user) => {
            let userName = user.name.toLowerCase();
            let searchString = searchedString.toLowerCase();

            return userName.includes(searchString);
        });

        this.setState({
            matchedUsers
        });
    }

    getImg(avatarUrl) {
        if (!avatarUrl) {
            return "http://via.placeholder.com/318x318?text=No%20User%20Image";
        } else {
            return avatarUrl;
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <Search dispatch={this.catchSearch} filterResults={this.filterResults} placeholder="Search Users" />
                <div className="row">
                    {this.state.matchedUsers.map((user) => {
                        return (
                            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4" key={user.id} >
                                <div className="card peoplePageCard">
                                    <img className="card-img-top userImg" src={this.getImg(user.avatarUrl)} alt="People " />
                                    <div className="card-body ">
                                        <Link to={`profile/${user.id}`} className="peopleCardBody">
                                            <h4 className="card-title">{user.name}</h4>
                                        </Link>
                                        <p>{user.aboutShort}</p>
                                    </div>
                                    <p className="card-text">{user.lastPostDate ? `Last post on ${new Date(user.lastPostDate).toLocaleDateString()} at ${new Date(user.lastPostDate).toLocaleTimeString()}` : "User has not posted anything yet"}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default People;