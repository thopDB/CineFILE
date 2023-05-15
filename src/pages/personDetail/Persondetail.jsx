import React from "react";
import { useParams } from "react-router-dom";
import "./style.scss";

import useFetch from "../../hooks/useFetch";
import DetailsBanner from "../details/detailsBanner/DetailsBanner";

const Persondetail = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );

  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
      {/* <VideosSection data={data} loading={loading} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id} /> */}
    </div>
  );
};

export default Persondetail;
