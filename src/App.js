 
import './App.scss';
import {Content} from './components/content'
import {SideBar} from './components/sidebar'
import {Navbar} from './components/navbar'
function App() {
  return (
    <section className='main-section'>
  <Navbar/>
     <Content/>

    </section>
  );
}

export default App;
