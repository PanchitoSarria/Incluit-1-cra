import Button from './components/Button';
import Icon from './components/Icon';
import './App.css';
import googlelogo from './images/google-logo.png'
import googleMic from './images/google-mic.png'
import lupa from './images/lupa.png'

function App() {
  const lang = window.location.pathname

  return (
    <div className="App">
      <section>
          <img src={googlelogo} alt="" />
        {lang === '/es' ? <p>España</p> : lang === '/ar' ? <p>Argentina</p> : <p>Global!</p>}
        <div>
          <form action="">

            <div className='search_wpr'>
              <input type="text" className='search_field'/>
              <Icon imgSrc={googleMic} iconStyling='icon--right'/>
              <Icon imgSrc={lupa} iconStyling='icon--left'/>
            </div>
            <div>
              <Button title='Buscar en Google'/>
              <Button title='Me siento con suerte'/>
            </div>
            <p>Ofrecido por Google en: {lang === '/es' ? <span>español</span> : lang === '/ar' ? <span>español argentino</span> : <span>Global!</span>}</p>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;