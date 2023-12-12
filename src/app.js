
const App = () => {
    return (
      <div>
        <header>
          <h1>BeautyOfBeaches</h1>
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Beaches</a></li>
              <li><a href="#">Reviews</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </header>
  
        <main>
          <section id="categories">
            <h2>Categories</h2>
            <ul>
              <li><a href="#">Coral Beaches</a></li>
              <li><a href="#">White Sand Beaches</a></li>
              <li><a href="#">Family-Friendly</a></li>
              <li><a href="#">Adventure</a></li>
            </ul>
          </section>
  
          <section id="search">
            <h2>Search</h2>
            <form>
              <input type="text" placeholder="Search beaches..." />
              <button type="submit">Search</button>
            </form>
          </section>
        </main>
  
        <footer>
          <p>&copy; 2023 BeautyOfBeaches. All rights reserved.</p>
        </footer>
      </div>
    );
  };
  
  ReactDOM.render(<App />, document.getElementById("root"));