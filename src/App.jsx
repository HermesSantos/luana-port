import 'bootstrap/dist/css/bootstrap.min.css';
import { MainBody } from './components/main/main';
import { TheNavbar } from './components/navbar/navbar';

function App() {

  return (
    <div className="App">
      <TheNavbar/>
      <MainBody/>
    </div>
  )
}

export default App
