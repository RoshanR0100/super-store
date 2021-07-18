import Items from './Items';

const Home = ({items}) => {
    return (
      <div className="Home">  
        <header className="Home-header">
            <div>
              <h1 style={{margin:15}}>Super Store</h1>
              <h3>An online supermarket!</h3>
            </div>
            <br />
            <div margin="30">
              <Items />
            </div>
        </header>
      </div>
    );
  }

export default Home;