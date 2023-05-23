import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import "./style.scss";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import useFetch from "../../../hooks/useFetch";
import Genres from "../../../components/genres/Genres";
import Img from "../../../components/lazyLoadImage/Img.jsx";
import avatar from "../../../assets/avatar.png";

const Info = ({ data }) => {
  const [show, setShow] = useState(false);
  const { mediaType, id } = useParams();
  const { url } = useSelector((state) => state.home);
  const _genres = data?.genres?.map((g) => g.id);

  return (
    <div className="detailsBanners">
      {!loading ? (
        <>
          {!!data && (
            <React.Fragment>
              <div className="backdrop-img">
                <Img src={url.backdrop + data.backdrop_path} />
              </div>
              <div className="opacity-layer"></div>
              <ContentWrapper>
                <div className="content">
                  <div className="left">
                    {data.poster_path ? (
                      <Img
                        className="posterImg"
                        src={url.backdrop + data.poster_path}
                      />
                    ) : (
                      <Img className="posterImg" src={avatar} />
                    )}
                  </div>
                  <div className="right">
                    <div className="title">
                      {`${data.name || data.title} (${dayjs(
                        data?.release_date
                      ).format("YYYY")})`}
                    </div>
                    <div className="subtitle">{data.tagline}</div>
                    <Genres data={_genres} className="genres" />

                    <div className="overview">
                      <div className="heading">Biography</div>
                      <div className="description">{data.overview}</div>
                    </div>
                  </div>
                </div>
              </ContentWrapper>
            </React.Fragment>
          )}
        </>
      ) : (
        <div className="detailsBannerSkeleton">
          <ContentWrapper>
            <div className="left skeleton"></div>
            <div className="right">
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
            </div>
          </ContentWrapper>
        </div>
      )}
    </div>
  );
};

export default Info;
