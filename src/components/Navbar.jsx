export const Navbar = () => {
  return (
    <>
  <header className='h-auto hidden md:flex md:ml-19 md:pl-10 m-2 justify-between'>
    <a
      href=""
      className="flex items-center justify-center px-4 lg:px-6 xl:px-8"
    >
      <img
        className="w-20 h-20 object-contain rounded-full"
        src="https://www.sciastra.com/Assets/Images/newsciastra.jpg"
        alt=""
      />
    </a>
    <nav className="text-base lg:text-md flex justify-center ">
      <ul className="flex items-center justify-end">
        <li className="p-3 xl:p-6 active">
          <a href="#">
            <span>HOME</span>
          </a>
        </li>
        <li className="p-3 xl:p-8">
          <a href="#">
            <span>COURSES</span>
          </a>
        </li>
        <li className="p-3 xl:p-8">
          <a href="#">
            <span>SELECTION</span>
          </a>
        </li>
        <li className="p-3 xl:p-8">
          <a href="#">
            <span>BLOGS</span>
          </a>
        </li>
        <li className="p-3 xl:p-8">
          <a href="#">
            <span>MATERIALS</span>
          </a>
        </li>
        <li className="p-3 xl:p-8">
          <a href="">
            <span className="teams">TEAM</span>
          </a>
        </li>
        <li className="p-3 xl:p-6">
          <a href="#" className="flex items-center">
            <span>CONTACT US</span>
          </a>
        </li>
      </ul>
    </nav>
    <div className="flex items-center justify-center mr-4 px-4 lg:px-6 xl:px-8">
      <button className="nav-contact text-white p-1 rounded-full">
        LOGIN
      </button>
    </div>
  </header>
</>

  )
}
