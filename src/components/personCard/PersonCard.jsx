import React from "react";
import { useSelector } from "react-redux";
import "./style.scss";
import Img from "../lazyLoadImage/Img";
import PosterFallback from "../../assets/no-poster.png";
import { useNavigate } from "react-router-dom";

const PersonCard = ({ data, fromSearch }) => {
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();
  const posterUrl = data.profile_path
    ? url.poster + data.profile_path
    : PosterFallback;
  return (
    <div className="personCard" onClick={() => navigate(`/${data.id}`)}>
      <div className="posterBlock">
        <Img className="posterImg" src={posterUrl} />
        {!fromSearch}
      </div>
      <div className="textBlock">
        <span className="title">{data.name}</span>
      </div>
    </div>
  );
};

export default PersonCard;
