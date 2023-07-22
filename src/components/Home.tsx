const Home = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse items-center">
        <img
          src="https://i.postimg.cc/sXZ2t098/home.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
          alt="Book Catalog Hero"
        />
        <div className="text-center lg:text-left lg:ml-12">
          <h1 className="text-5xl font-bold">Welcome to Book Haven!</h1>
          <p className="py-6 lg:mr-20">
            Discover a world of fascinating books and captivating stories.
            Whether you're a bookworm, a casual reader, or a curious explorer,
            we've got something for everyone. Browse our extensive collection
            and immerse yourself in the joy of reading.
          </p>
          <button className="btn btn-warning">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
