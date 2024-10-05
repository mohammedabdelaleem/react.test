
function App() {
  return (  

  
    <>
  <header className="hide-for-mobile">
    <h1>
      Courses <sup style={{ color: "rgb(243, 40, 40)" }}>4</sup> Arab
    </h1>
    <ul className="flex">
      <li className="main-list">
        <a
          className="main-link"
          target="_blank"
          href="https://courses4arab.com/html-full-course.html"
        >
          HTML
        </a>
        <ul className="sub-list">
          <li>
            <a href="#">Full Course</a>
          </li>
          <li>
            <a href="#">Crash Course</a>
          </li>
          <li>
            <a href="#">Learn at 1h</a>
          </li>
        </ul>
      </li>
      <li className="main-list">
        <a
          className="main-link"
          target="_blank"
          href="https://courses4arab.com/css.html"
        >
          CSS
        </a>
        <ul className="sub-list">
          <li>
            <a href="#">Full Course</a>
          </li>
          <li>
            <a href="#">CSS Examples</a>
          </li>
          <li className="mini-projects">
            <a href="#">
              Mini Projects <span className="plus">+</span>
            </a>
            <ul className="sub-sub-list">
              <li>
                <a href="#">Project 1</a>
              </li>
              <li>
                <a href="#">Project 2</a>
              </li>
              <li>
                <a href="#">Project 3</a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li className="main-list">
        <a
          className="main-link"
          target="_blank"
          href="https://courses4arab.com/javascript.html"
        >
          Java Script
        </a>
        <ul className="sub-list sub-of-js">
          <li>
            <a href="#">commig soon🔥</a>
          </li>
        </ul>
      </li>
    </ul>
  </header>
  <header className="show-for-mobile">
    <h1>
      Courses <sup style={{ color: "rgb(243, 40, 40)" }}>4</sup> Arab
    </h1>
    <label className="abslute" htmlFor="burger">
      <i className="fa-solid fa-bars" />
    </label>
    <input id="burger" type="checkbox" />
    <div className="show-on-click">
      <div className="main-div">
        <label htmlFor="html">
          HTML <i className="fa-solid fa-plus" />
        </label>
        <input type="checkbox" id="html" />
        <ul className="sub-div">
          <li>
            <a href="#">Full Course</a>
          </li>
          <li>
            <a href="#">Crash Course</a>
          </li>
          <li>
            <a href="#">Learn at 1h</a>
          </li>
        </ul>
      </div>
      <div className="main-div">
        <label htmlFor="css">
          CSS <i className="fa-solid fa-plus" />
        </label>
        <input type="checkbox" id="css" />
        <ul className="sub-div">
          <li>
            <a href="#">Full Course</a>
          </li>
          <li>
            <a href="#">CSS Examples</a>
          </li>
          <li>
            <label className="mini-projects" htmlFor="mini">
              Mini Projects
              <i className="fa-solid fa-plus mini-project-plus" />
            </label>
            <input id="mini" type="checkbox" />
            <ul className="sub-sub-div">
              <li>
                <a href="#">Project 1</a>
              </li>
              <li>
                <a href="#">Project 2</a>
              </li>
              <li>
                <a href="#">Project 3</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="main-div">
        <label htmlFor="js">
          Java Script <i className="fa-solid fa-plus" />
        </label>
        <input type="checkbox" id="js" />
        <ul className="sub-div">
          <li>
            <a href="#">commig soon &nbsp;🔥</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
  <main>
    Responsive Drop-down <br />
    Menu Bar
    <br />
    HTML &amp; CSS only <br />
  </main>
  <footer className="fixed">
    <p>
      Designed By Eng Mohammed Abdelaleem
      <span>
        <i className="fa-regular fa-copyright" />
        &nbsp;
        <i className="fa-solid fa-heart" />
      </span>
    </p>
  </footer>
</>

  );
}

export default App;
