import './App.css';
import Content from './Content';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <body>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
                            aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About me</a>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <main className="container">

                        <Content className="row"/>

                    </main>
                </body>

            </header>
        </div>
    );
}

export default App;
