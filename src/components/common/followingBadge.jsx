import React from "react";

const FollowingBadge = (props) => {
  const { following, onShowFollowing } = props;
  return (
    <button
      onClick={onShowFollowing}
      type="button"
      className="btn btn-primary mb-3 mr-3"
    >
      Following <span className="badge badge-light">{following.length}</span>
    </button>
  );
};

export default FollowingBadge;
