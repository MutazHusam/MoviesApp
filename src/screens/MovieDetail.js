import ComponentsContainer from "../components/ComponentsContainer";
import Header from "../components/Header";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import MoviePath from "../components/MoviePath";
import MovieContainer from "../components/MovieContainer";
import HeroDetail from "../components/HeroDetail";
import Card from "../components/Card";

function MovieDetail() {
  return (
    <>
      <Header />
      <MoviePath MovieName={"Movie Name"} />
      <HeroDetail>
        <MovieContainer
          MovieImgUrl={img2}
          MovieName={"Movie Name"}
          SubTitle={"Polt"}
          Description={`Luca and his friend Alberto experience an unforgettable summer on the Italian Riviera, But all the fun threatened by a deeply-held secret: tho are sea monsters from another world just below the water's surface.`}
          Ratio={"82"}
          DIRECTOR={"Enrico Casarosa"}
        ></MovieContainer>
      </HeroDetail>
      <ComponentsContainer Title={"Actors"}>
        <Card ImgUrl={img1} ActorName={"Actor Name"} />
        <Card ImgUrl={img1} ActorName={"Actor Name"} />
        <Card ImgUrl={img1} ActorName={"Actor Name"} />
        <Card ImgUrl={img1} ActorName={"Actor Name"} />
        <Card ImgUrl={img1} ActorName={"Actor Name"} />
      </ComponentsContainer>
    </>
  );
}

export default MovieDetail;
