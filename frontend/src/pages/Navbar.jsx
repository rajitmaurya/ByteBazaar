const Navbar = () => {
  return (
    <nav className="flex justify-between px-10 py-4 bg-[#222] text-white">
      <h2>myProject</h2>
      <div>
        <button className="ml-4 px-3 py-2 bg-[#444] text-white border-none cursor-pointer hover:bg-[#555] rounded">
          Home
        </button>
        <button className="ml-4 px-3 py-2 bg-[#444] text-white border-none cursor-pointer hover:bg-[#555] rounded">
          Products
        </button>
        <button className="ml-4 px-3 py-2 bg-[#444] text-white border-none cursor-pointer hover:bg-[#555] rounded">
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar;