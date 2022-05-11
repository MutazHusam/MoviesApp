import {MovieDiv} from './style'
function Movie({ Title, ImgUrl }) {
  return (
    <MovieDiv>
        <img src={ImgUrl} alt=''/>
    </MovieDiv>
  );
}

export default Movie;
