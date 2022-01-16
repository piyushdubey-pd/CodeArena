import img1 from "../../../PostFeed/components/Feed/FeedPeopleImages/4.jpg";

const QueryRightTopContributorsItem = () => {
  return (
    <div className="TopContributors1">
      <div className="TopContributorsListItems">
        <div className="shareTop">
          <div className="shareProfileImg">
            <img src={img1} alt="" />
          </div>
          <div className="shareInput">
            <p className="MainTitle">Mahendra Singh Dhoni</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueryRightTopContributorsItem;