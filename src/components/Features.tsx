const features = [
  {
    title: "Aktiivinen lapsi",
    subtitle: "Active Child",
    color: "bg-blue-100",
  },
  {
    title: "Itsenäisyys",
    subtitle: "Independence",
    color: "bg-green-100",
  },
  {
    title: "Luonnollinen uteliaisuus",
    subtitle: "Curiosity",
    color: "bg-orange-100",
  },
];

const Features = () => {
  return (
    <div className="py-16 bg-white flex justify-center gap-8">
      {features.map((item, i) => (
        <div
          key={i}
          className={`w-64 p-6 rounded-3xl shadow-lg text-center ${item.color}`}
        >
          <div className="h-40 bg-gray-200 rounded-xl mb-4"></div>

          <h3 className="text-xl font-semibold">{item.title}</h3>
          <p className="text-gray-600">{item.subtitle}</p>

          <button className="mt-4 px-4 py-2 bg-white rounded-full shadow">
            →
          </button>
        </div>
      ))}
    </div>
  );
};

export default Features;