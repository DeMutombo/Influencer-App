import React from "react";

const FollowingBadge = (props) => {
  const { following, isFollowing, onShowFollowing } = props;
  return (
    <button
      onClick={onShowFollowing}
      type="button"
      className="btn btn-primary mb-3 mr-3"
    >
      {following.length >= 1 && isFollowing === true
        ? "Hide Influencer"
        : "Show Following"}
      <span className="badge badge-light ml-2">{following.length}</span>
    </button>
  );
};

export default FollowingBadge;
