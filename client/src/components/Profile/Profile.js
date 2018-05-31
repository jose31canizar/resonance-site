import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
// import ReactSpinner from "react-spinjs";
import NavBarData from "../../data/navbar.json";

import "./Profile.styl";

import SVG from "../../assets/svg";

import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    email: state.email,
    username: state.username,
    firstName: state.firstName,
    lastName: state.lastName,
    favorite_bands: state.favorite_bands,
    loggedIn: state.loggedIn,
    posts: state.posts,
    id: state.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch({ type: "LOGOUT_USER" }),
    loadUserData: id => dispatch({ type: "LOAD_USER_DATA", id: id }),
    loadPostData: id => dispatch({ type: "LOAD_POST_DATA", id: id })
  };
};

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    if (this.props.id) {
      this.props.loadUserData(this.props.id);
      this.props.loadPostData(this.props.id);
    }
  }
  render() {
    const {
      email,
      username,
      firstName,
      lastName,
      posts,
      favorite_bands
    } = this.props;
    return (
      <div class="profile">
        <NavBar
          data={NavBarData[0]}
          openSignUpForm={this.openSignUpForm}
          width={this.props.width}
          loggedIn={this.props.loggedIn}
          logout={this.props.logout}
        />
        <div class="profile-header">
          <div class="profile-info">
            <h2>
              {firstName} {lastName}
            </h2>
            <p>email: {email}</p>
            <p>@{username}</p>
            <div class="favorite-bands">
              {favorite_bands ? (
                favorite_bands.map((band, i) => <p class="band">{band}</p>)
              ) : (
                <div />
              )}
            </div>
          </div>
          <div class="profile-posts">
            {posts ? (
              posts.map((post, i) => (
                <div class="post">
                  <div class="top-bar">
                    <div class="profile-image" />
                    <p class="name">
                      {firstName} {lastName}
                    </p>
                    <SVG name="TripleDot" />
                  </div>
                  <div class="song-image" />
                  <div class="song-info">
                    <h2>{post.title}</h2>
                    <h2>{post.artist}</h2>
                    <h3>{post.album}</h3>
                    <p class="source">Listen from {post.source}</p>
                  </div>
                  <p class="caption">{post.caption}</p>
                  <div class="action-bar">
                    <div>
                      <SVG name="Like" />
                      <p>{post.likes ? post.likes : "0"}</p>
                    </div>
                    <div>
                      <SVG name="Repost" />
                      <p>{post.reposts ? post.reposts : "0"}</p>
                    </div>
                    <div>
                      <a href={post.link}>
                        <SVG name="Navigate" />
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
