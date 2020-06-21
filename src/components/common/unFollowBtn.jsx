import React from "react";

const UnFollowBtn = (props) => {
  const { onFollow } = props;
  return (
    <button className="btn btn-danger" onClick={onFollow}>
      <i className="fa fa-user-times follow_user"></i>
      <span>Unfollow</span>
    </button>
  );
};

export default UnFollowBtn;
