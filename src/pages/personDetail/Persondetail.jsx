import React from "react";
import "./style.scss";
import useFetch from "../../hooks/useFetch";
import Info from "../personDetail/info/Info";

const Persondetail = ({}) => {
  // const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/person/${id}`);
  return (
    <div>
      <Info video={data?.results?.[0]} crew={credits?.crew} />
      {/* <VideosSection data={data} loading={loading} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id} /> */}
    </div>
  );
};

export default Persondetail;
