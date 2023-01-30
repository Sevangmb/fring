import Carousel from "./components/Carousel";
import React from 'react';

const App = () => {
    return (
      <React.Fragment>
        <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 65 }}>
            <Carousel>
              <img src="https://via.placeholder.com/1600x800" alt="placeholder" />
              <img src="https://via.placeholder.com/1600x800" alt="placeholder" />
              <img src="https://via.placeholder.com/1600x800" alt="placeholder" />
            </Carousel>
        </div>
        <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 0 }}>
            <Carousel>
              <img src="https://via.placeholder.com/1600x800" alt="placeholder" />
              <img src="https://via.placeholder.com/1600x800" alt="placeholder" />
              <img src="https://via.placeholder.com/1600x800" alt="placeholder" />
            </Carousel>
        </div> 
      </React.Fragment>       
    )
}

export default App