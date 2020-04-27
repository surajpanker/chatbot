import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ChatBot from './chatbot/ChatBot';
//import Landing from './pages/Landing';
import About from './pages/About';
import Shop from './shop/Shop';
import Header from './Header';

const App = () => {

    return (
          
        <div>

        <BrowserRouter >
             
<Route exact path="/about" component={About} />


<Route exact path="/shop" component={Shop} />
         <Header  />

        <ChatBot/>
          </BrowserRouter>
        </div>
        
    )
}

export default App;















                   
 /*
 const App = () => {
    return (
        <div className='container'>
        <BrowserRouter>
             
<Route exact path="/about" component={About} />

<Route exact path="/" component={Landing}/>

<Route exact path="/shop" component={Shop} />
         <Header/>

        <ChatBot/>
          </BrowserRouter>
        </div>
    )
}

export default App;
*/
                   
