export default function Navigation() {
  return (
    <nav className="container">
      <div className="logo">
        <img src="/images/brand_logo.png" alt="logo"></img>
      </div>
      <ul>
        <li href="#" className=" btn-hover">
          Menu
        </li>
        <li href="#" className=" btn-hover">
          Location
        </li>
        <li href="#" className=" btn-hover">
          About
        </li>
        <li href="#" className=" btn-hover">
          Contact
        </li>
      </ul>
      <button> Login</button>
    </nav>
  );
}
