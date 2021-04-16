// materialize-css imports
import 'materialize-css/dist/css/materialize.min.css';
import Footer from './components/Footer';

// component imports
import ImageCanvas from './components/ImageCanvas';
import Nav from './components/Nav';
import Toolbar from './components/Toolbar';

const App = () => {
    return (
        <>
            <Nav />
            <ImageCanvas />
            <Toolbar />
            <Footer />
        </>
    );
};

export default App;
