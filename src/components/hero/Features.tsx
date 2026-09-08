import img1 from "./../../assets/features_images/img1.jpg";
import img2 from "./../../assets/features_images/img2.jpg";
import img3 from "./../../assets/features_images/img3.jpg";

const featureImages = [
  {
    src: img1, // Now using your local image1
    alt: "Active Child",
    color: "bg-blue-50",
  },
  {
    src: img2, // Now using your local image2
    alt: "Independence",
    color: "bg-green-50",
  },
  {
    src: img3, // Now using your local image3
    alt: "Curiosity",
    color: "bg-orange-50",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-white flex flex-wrap justify-center gap-10 px-6">
      {featureImages.map((item, i) => (
        <div
          key={i}
          className={`group relative w-72 h-96 rounded-[2rem] overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${item.color}`}
        >
          {/* Image Container */}
          <div className="w-full h-full overflow-hidden">
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* Overlay to soften the image slightly */}
          <div className="absolute inset-0 bg-black/5 pointer-events-none group-hover:bg-transparent transition-colors"></div>
        </div>
      ))}
    </section>
  );
};

export default Features;