
import { useEffect } from 'react';
import './App.scss';
import firebase from './firebase';

const square = [
  {
    name: 'A Capella'
  },
  {
    name: 'Felix Siauw'
  },
  {
    name: 'Stuck With You'
  },
  {
    name: 'Dan + Shay'
  },
  {
    name: 'square5'
  },
  {
    name: 'square6'
  },
]

function App() {

  useEffect(() => {
    const messaging = firebase.messaging();

    messaging.requestPermission().then(() => {
      return messaging.getToken();
    }).then((token) => {
      console.log('Token: ', token);
    }).catch((error) => {
      console.log(error, 'error');
    })
  }, [])

  return (
    <div className="App">
      <div className="wrapper-container">
        <div className="wrapper-app">
          {
            square.map((item, idx) => {
              return (
                <div key={idx} className="square">
                  {item.name}
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
