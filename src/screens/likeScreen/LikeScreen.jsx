import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Col } from "react-bootstrap";
import { getLikeVideos } from "../../redux/actions/videos.action";
import InfiniteScroll from "react-infinite-scroll-component";
import Videos from "../../components/video/Video";

const Likescreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLikeVideos());
  }, [dispatch]);
  const { videos, loading } = useSelector((state) => state.likeVideos);

  return (
    <Container>
      <InfiniteScroll
        dataLength={videos.length}
        hasMore={true}
        loader={
          <div className="spinner-border text-danger d-block mx-auto"></div>
        }
        className="row"
      >
        {!loading
          ? videos.map((video) => (
              <Col lg={3} md={4}>
                <Videos video={video} key={video.id} />
              </Col>
            ))
          : <p className="videoLoading">Chargement</p>}
      </InfiniteScroll>
    </Container>
  );
};

export default Likescreen;
