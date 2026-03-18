const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
      <div className="text-2xl font-bold text-blue-600">MIO</div>

      <div className="flex gap-6 text-gray-700 font-medium">
        <a href="#">Pedagogiikka</a>
        <a href="#">Varhaiskasvatus</a>
        <a href="#">Toiminta</a>
        <a href="#">Yhteystiedot</a>
      </div>

      <button className="bg-green-500 text-white px-4 py-2 rounded-full">
        Contact
      </button>
    </div>
  );
};

export default Navbar;