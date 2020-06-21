import React from "react";

const FollowBtn = (props) => {
  const { onFollow } = props;
  return (
    <button className="btn btn-primary" onClick={onFollow}>
      <i className="fa fa-user-plus follow_user"></i>
      <span>Follow</span>
    </button>
  );
};

export default FollowBtn;
