import React, { Component } from "react";
import Followers from "../data/follower-suggestions.json";
import FollowBtn from "./common/followbtn";
import FollowingBadge from "./common/followingBadge";
import Following from "./common/following";
import Pagination from "./common/pagination";
import { paginate } from "./Utils/paginate";
import "../style.css";

class Influencers extends Component {
  state = {
    influencers: Followers,
    following: [],
    pageSize: 5,
    currentPage: 1,
    isFollowing: false,
  };

  handleFollow = (influencer) => {
    const newFollow = this.state.following;
    newFollow.push({ ...influencer });

    const follows = this.state.influencers.filter(
      (followed) => followed.userId !== influencer.userId
    );
    this.setState({ following: newFollow });
    this.setState({ influencers: follows });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleShowFollowing = () => {
    this.setState({ isFollowing: !this.state.isFollowing });
    console.log(this.state.isFollowing);
  };

  render() {
    const {
      influencers: allInfluencers,
      following,
      currentPage,
      pageSize,
    } = this.state;
    if (allInfluencers.length === 0)
      return (
        <div className="search">
          <h4 className="mb-3"> Search for your favorite influencers </h4>
          <span className="m-3">
            <input type="text" placeholder="Type a name" />
            <i className="fa fa-search button"></i>
          </span>
          <h6 className="m-3">
            {" "}
            You are Currently following {following.length} Influencers{" "}
          </h6>
          <Following
            following={following}
            onFollow={() => this.handleFollow(allInfluencers)}
          />
        </div>
      );

    const influencers = paginate(allInfluencers, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-md-6 ml-md-auto">
          <div className="brownBox">
            <FollowingBadge
              following={following}
              onShowFollowing={() => this.handleShowFollowing()}
            />
            {influencers.map((influencer) => (
              <div className="influencer-tab" key={influencer.userId}>
                <div className="profile">
                  <img src={influencer.profilePicture} alt="profile" />
                </div>
                <div className="details">
                  <p className="user-name">@{influencer.username}</p>
                  <span className="bio">{influencer.name}</span>
                </div>
                <FollowBtn onFollow={() => this.handleFollow(influencer)} />
              </div>
            ))}
            <Pagination
              itemCount={allInfluencers.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
        <div className="col-md-6 ml-md-auto">
          <div className="brownBox">
            {this.state.isFollowing && (
              <Following
                following={following}
                onFollow={() => this.handleFollow(allInfluencers)}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Influencers;
