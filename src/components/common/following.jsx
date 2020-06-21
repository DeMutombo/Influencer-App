import React from "react";
import UnFollowBtn from "./unFollowBtn";
import Pagination from "./pagination";

const Following = (props) => {
  const { following } = props;
  return (
    <div className="">
      {following.map((folowi) => (
        <div className="influencer-tab" key={folowi.userId}>
          <div className="profile">
            <img src={folowi.profilePicture} alt="profile" />
          </div>
          <div className="details">
            <p className="user-name">@{folowi.username}</p>
            <span className="bio">{folowi.name}</span>
          </div>
          <UnFollowBtn />
        </div>
      ))}
    </div>
  );
};

export default Following;
