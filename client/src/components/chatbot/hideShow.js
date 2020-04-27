import React ,{Component}from 'react';
import chatbot from './ChatBot';
class HideShow extends Component
{
    constructor(props){
        super(props);
       // this.hide_show =this.hide_show.bind(this);
      }
 _hide_show(){
const hsid = document.getElementById(".chatbot1");

if(hsid.style.display === "none")
{
    hsid.style.display="block";
}
else{
    hsid.style.display="none";
}




 }
render(){


    return 
    <div style={{float:'left',position:'absolute'}}>
         <button onClick={this._hide_show()}> for chatting</button>
       
    </div>;
}

      
 
 
 


}




export default hide_show;