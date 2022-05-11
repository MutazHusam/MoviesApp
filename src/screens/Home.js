import ComponentsContainer from "../components/ComponentsContainer";
import Header from "../components/Header";
import HeroComponent from "../components/HeroComponent";
import Movie from "../components/Movie";
import img1 from "../assets/img1.jpg"
import Button from "../components/Button";

function Home() {
    return <>
    <Header/>
    <HeroComponent Title={'Title'} Description={"This is just description to get from the api"}/>
    <ComponentsContainer Title={'Popular Movies'}>
        <Movie ImgUrl={img1}/>
        <Movie ImgUrl={img1}/>
        <Movie ImgUrl={img1}/>
        <Movie ImgUrl={img1}/>
        <Movie ImgUrl={img1}/>
        <Movie ImgUrl={img1}/>
        <Movie ImgUrl={img1}/>
        <Movie ImgUrl={img1}/>
    </ComponentsContainer>
    <Button Text={'Load more...'}/>
    </>;
  }
  
  export default Home;