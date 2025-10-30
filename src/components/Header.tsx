const Header: React.FC = () => {
  return (
    <header className="header d-flex justify-between mb-30">
      <div className="header__text">
        <h1>To-DO-DO-DO</h1>
        <p>Кликните дважды на пункт для редактирования</p>
      </div>
      <div className="header__buttons d-flex align-center">
        <ul className="d-flex justify-center">
          <li className="mr-30">Контакты</li>
          <li className="mr-30">Справка</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;