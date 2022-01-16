import img1 from "../../../PostFeed/components/Feed/FeedPeopleImages/4.jpg";

const PostRightBarBirthItem = () => {
  return (
    <div className="FriendsBirthdays1">
      <div className="FriendsBirthdaysListItems">
        <div className="shareTop">
          <div className="shareProfileImg">
            <img src={img1} alt="" />
          </div>
          <div className="shareInput">
            <p className="MainTitle">Sherlock Holmes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostRightBarBirthItem;
