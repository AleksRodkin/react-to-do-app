function App() {
  return (
    <div className="wrapper clear p-30">
      <div className="header d-flex justify-between">
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
      </div>
      <div className="tasks-container">
        <div class="task-open"></div>
        <div>
          <input type="checkbox" id="coding" name="interest" value="coding" />
          <label for="coding">Coding</label>
        </div>
        <div>
          <input type="checkbox" id="music" name="interest" value="music" />
          <label for="music">Music</label>
        </div>
      </div>
    </div>
  );
}

export default App;
