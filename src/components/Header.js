function Header() {
  return (
    <header className="header d-flex justify-between">
      <div className="header__text">
        <h1>To-DO-DO-DO</h1>
      </div>
      <div className="header__buttons d-flex align-center">
        <ul className="d-flex justify-center">
          <li className="mr-30">1</li>
          <li className="mr-30">2</li>
          <li className="">3</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;