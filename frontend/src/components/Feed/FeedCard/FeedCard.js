import React from "react";
import {
  FaHeart,
  FaRegComment,
  FaRegPaperPlane,
  FaBookmark,
  FaRegSmile,
  FaPaperPlane,
  FaRegSave,
  FaRegBookmark,
} from "react-icons/fa";

const FeedCard = ({ feed }) => {
  return (
    <div className="w-full mx-auto mb-6 bg-white p-4 rounded-lg">
      {/* Profile Picture , Username , Time  */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-x-3">
          <a href="" className="flex items-center">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300 ">
              <img
                src={feed.profileImg}
                alt="john_doe"
                className="w-full h-full object-cover"
              ></img>
            </div>
          </a>
          <div className="flex items-center gap-x-2">
            <p className="text-black text-sm font-medium">{feed.username}</p>
            <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
            <p className="text-black text-sm">{feed.time}</p>
          </div>
        </div>
      </div>
      {/* Post Image */}
      <div className="w-full max-h-[75vh] overflow-hidden rounded-lg mb-3">
        <img
          src={feed.postImg}
          alt="Enjoying the sunset!"
          className="w-full h-full object-cover"
        ></img>
      </div>

      {/* UserAction - Like, comment, share and save */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-x-3">
          <button className="text-black">
            <FaHeart />
          </button>
          <button className="text-black">
            <FaRegComment />
          </button>
          <button className="text-black">
            <FaPaperPlane />
          </button>
        </div>
        {/* <div> */}
        <button className="text-black">
          <FaRegBookmark />
        </button>
        {/* </div> */}
      </div>

      {/* Like Count  */}
      <div className="flex items-center gap-x-2 text-base text-black font-medium my-2">
        {feed.likeCount} likes
      </div>

      {/* Caption  */}
      <div className="w-full text:sm text-black font-thin mb-2">
        <a href="" className="text-black-600 font-medium">{feed.username}</a> {feed.caption}
      </div>

      {/* Comment count  */}
      <div className="w-full text-sm text-gray-600 font-thin mb-2">
        <a href="" className="text-gray-600 font-normal"> View all {feed.commentCount} comments</a>
      </div>

      {/* Add Comment  */}
      <div className="w-full flex items-center justify-between border-b border-gray-300 pt-2">
        <input type="text" placeholder="Add a comment ..." className="w-full bg-transparent border-none outline-none text-sm text-gray-600 py-2"/>
        <div className="text-black">
          <FaRegSmile/>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
