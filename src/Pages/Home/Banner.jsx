import { Link } from "react-router-dom";

const Banner = () => {
    const bannerData = {
        title: 'Welcome to Task Management',
        subtitle: 'Stay organized and track your tasks efficiently',
        image: 'https://i.ibb.co/LSD2bjN/airfocus-f2-C59x5uvn8-unsplash.jpg',
      };
      
  const { title, subtitle, image } = bannerData;

  return (
    <div
      className="relative text-white py-20 bg-gray-800"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '670px',
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-60"
        style={{ height: '670px' }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col justify-center items-center align-middle mt-32">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-lg mb-6">{subtitle}</p>
          <Link to='/signup' className="block px-6 py-3 rounded-full bg-gradient-to-r from-yellow-600 to-yellow-400 text-center text-white">Get Started</Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
