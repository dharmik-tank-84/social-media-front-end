import React from "react";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from "@mui/icons-material/Label";
import RoomIcon from "@mui/icons-material/Room";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import "./share.css";

const Share = () => {
  return (
    <>
      <div className="share">
        <div className="shareWrapper">
          <div className="shareTop">
            <img
              src="/assets/person/1.jpeg"
              className="shareProfileImg"
              alt=""
            />
            <input
              type="text"
              className="shareInput"
              placeholder="what's in your mind safak?"
            />
          </div>
          <hr className="shareHr" />
          <div className="shareBottom">
            <div className="shareOptions">
              <div className="shareOption">
                <PermMediaIcon className="shareIcon" htmlColor="tomato" />
                <span className="shareOptionText">Photo or Video</span>
              </div>
              <div className="shareOption">
                <LabelIcon className="shareIcon" htmlColor="blue" />
                <span className="shareOptionText">Tag</span>
              </div>
              <div className="shareOption">
                <RoomIcon className="shareIcon" htmlColor="green" />
                <span className="shareOptionText">Location</span>
              </div>
              <div className="shareOption">
                <EmojiEmotionsIcon
                  className="shareIcon"
                  htmlColor="goldenrod"
                />
                <span className="shareOptionText">Feelings</span>
              </div>
            </div>
            <button className="shareButton">Share</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Share;
