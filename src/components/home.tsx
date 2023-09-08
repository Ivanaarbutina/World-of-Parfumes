import adorable from "./../assets/adorable-young-model-smiling-colorful-flowers-high-quality-photo.jpg";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to World Of Perfumes</h1>
      <img src={adorable} className="home__main-img" />
    </div>
  );
};

export default Home;
