import { users } from "../data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const UserCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div className="px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Top Community Users</h2>
      <Slider {...settings}>
        {users.map(user => (
          <div key={user.id} className="px-3">
            <div className="bg-white rounded-lg shadow p-4 text-center">
            <img
  src={user.avatar || "https://via.placeholder.com/150"}
  alt={user.name}
  className="w-24 h-24 mx-auto rounded-full object-cover"
/>
              <h3 className="mt-4 text-lg font-semibold">{user.name}</h3>
              <p className="text-sm text-gray-600">{user.bio}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default UserCarousel;