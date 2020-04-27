import Logo from './images/dance.gif';
import {withRouter} from 'react-router-dom';
import React, { Component } from 'react';
import axios from "axios/index";
import Cookies from 'universal-cookie';
import {v4 as uuid} from 'uuid';
import Message from './Message';
import Card from './Card';
import QuickReplies from './QuickReplies';
const cookies = new Cookies();//its global because cookies intialoze before anything.
class Chatbot extends Component {
  messagesEnd;
   talkInput;//for autofocus


    constructor(props) {
         super(props);
      // This binding is necessary to make `this` work in the callback
        this._handleInputKeyPress = this._handleInputKeyPress.bind(this);
        //for we pass this -> _handleQuickReply() as parameter so we have to bind this
        this._handleQuickReplyPayload=this._handleQuickReplyPayload.bind(this);
        this.show =this.show.bind(this);
        this.hide =this.hide.bind(this);

        this.state = {
            messages: [],
            showBot:true,
            shopWelcomeSent:false
        };
        //for intialize cookie if it is not availble
        if(cookies.get('userID')===undefined){
            
            
            cookies.set('userID',uuid(),{ path:'/'});
        }
        
        console.log(cookies.get('userID'));
    }

    async df_text_query (text) {
        let says = {
            speaks: 'user',
            msg: {
                text : {
                    text: text
                }
            }
        }
        this.setState({ messages: [...this.state.messages, says]});
        //this.setState.messages.pop();
        try
{
        const res = await axios.post('/api/df_text_query',  {text: text , userID:cookies.get('userID')});

        for (let msg of res.data.fulfillmentMessages) {
           // console.log(JSON.stringify(msg));
           let  says = {
                speaks: 'bot',
                msg: msg
            }
            this.setState({ messages: [...this.state.messages, says]});
            
        }}
        catch(e){


             let says={
                 speaks:'bot',
                 msg:{
                     text:"i have trouble to connect "
                 }

             }
   this.state({
  messages:[...this.state.messages,says]
   });
   let that = this;

  setTimeout(function(){

    that.setState({ showBot: false});

  },2000);


        }
       
    };


    async df_event_query(eventName) {
 try
        {const res = await axios.post('/api/df_event_query',  {event: eventName,userID:cookies.get('userID')});

        for (let msg of res.data.fulfillmentMessages) {
            let says = {
                speaks: 'bot',
                msg: msg
            }

            this.setState({ messages: [...this.state.messages, says]});
        }
    }
catch(e)
{
    let says={
        speaks:'bot',
        msg:{
            text:"i have trouble to connect "
        }
    }
    this.state({messages:[...this.state.messages,says]});
let that =this;
setTimeout(function(){
    that.state({showBot:false});

},2000);


}
    }
    //for Quick reply
    _handleQuickReplyPayload(event,payload,text){
              event.preventDefault();
              event.stopPropagation();
        
         switch(payload){

            case 'more_products _description': 
                                              this.df_event_query('DisscountProduct');   
                                              break;

            case 'more_products':
                                 this.df_event_query('More_info');
                                 break;


            case 'dealsunday':
                               this.df_event_query('dealsundaya');
                               break;
            case 'dealsaturday':
                                this.df_event_query('dealsaturdayb');
                                break;
         
            case 'dealfriday':
                                this.df_event_query('dealfridayc');
                                break;
                     
            case 'training_yes':
                              this.df_event_query('shop_recommendation');
                              break;          
    
            default: 
                    this.df_text_query(text);
                    break;
                                               
         }

   
      
    
    }
 //for creating gallery
    renderCards(cards){
        
        return  cards.map(  (card,i)=><Card  key={i} payload={card.structValue} /> );
    }
     renderOneMessage(message, i) {

        if (message.msg && message.msg.text && message.msg.text.text) {
            return <Message key={i} speaks={message.speaks} text={message.msg.text.text}/>;
        } else if (message.msg && message.msg.payload.fields.cards) { //message.msg.payload.fields.cards.listValue.values

            return <div key={i}>
                <div className="card-panel grey lighten-5 z-depth-1">
                    <div style={{overflow: 'hidden'}}>
                        <div className="col s2">
                            <a href="/" className="btn-floating btn-large waves-effect waves-light red">{message.speaks}</a>
                        </div>
                        <div style={{ overflow: 'auto', overflowY: 'scroll'}}>
                            <div style={{ height: 300, width:message.msg.payload.fields.cards.listValue.values.length * 270}}>
                                {this.renderCards(message.msg.payload.fields.cards.listValue.values)}
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
   

}
else if(message.msg && message.msg.payload && message.msg.payload.fields&& message.msg.payload.fields.quick_replies){ 

  return <QuickReplies
      text = {message.msg.payload.fields.text?message.msg.payload.fields.text:null}
      key  = {i}
      replyClick={this._handleQuickReplyPayload}
      speaks = {message.speaks}
      payload ={message.msg.payload.fields.quick_replies.listValue.values}
  />

}



}
    
    
    
    
   
    renderMessages(returnedMessages) {
        if (returnedMessages) {
            return returnedMessages.map((message, i) => {
                return this.renderOneMessage(message,i);
                }
            )
        } else {
            return null;
        }
    }

   
    
     _handleInputKeyPress(e) {
        if (e.key === 'Enter') {
            this.df_text_query(e.target.value);
            e.target.value = '';
        }

    }
    resolveAfterXSeconds(x) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(x);
            }, x * 1000);
        })
    }


      async componentDidMount()
    {
        
        this.df_event_query('welcome');
       
        if( window.location.pathname ==='/shop' && !this.state.shopWelcomeSent){
            await this.resolveAfterXSeconds(2);
            this.df_event_query('Welcome_Sociolla');
            this.setState({shopWelcomeSent:true,showBot:true});
        }
      this.props.history.listen(()=>{
          console.log('listening');
    
        if(this.props.history.location.pathname ==='/shop'&& !this.state.shopWelcomeSent){
        this.df_event_query('Welcome_Sociolla');
        this.setState({shopWelcomeSent:true,showBot:true});

        }
    }
        );

    }
    
    
   
     componentDidUpdate()
    {
        this.messagesEnd.scrollIntoView({behaviour:"smooth"});
        if(this.talkInput){this.talkInput.focus();}
  //because every time we refresh page so it directly talk the use without using mouse 
    }
   show(event){

    event.preventDefault();
    event.stopPropagation();
    this.setState({showBot:true});

   }
   hide(event){
    event.preventDefault();
    event.stopPropagation();
    this.setState({showBot:false});
      }





    render() {
if(this.state.showBot){    
    return (
        <div style={{ minHeight: 500, maxHeight: 470, width:400, position: 'absolute', bottom: 0, right: 0, border: '1px solid lightgray'}}>            
            <nav>
  <div className="nav-wrapper">
<a className="brand-logo" href="/

 ">  Chatbot</a>

<ul id="nav-mobile" className="right hide-on-med-and-down">
    <li>
     <a href="/" onClick={this.hide}>Close</a>
    </li>
</ul>
  </div>

            </nav>
            <div id="chatbot" style={{height: 400, width: '100%', overflow: 'auto'}} >
             
                {this.renderMessages(this.state.messages)}
              <div   ref={(el)=>{
                         this.messagesEnd=el;}} 
                         
                    style={{float:'left' ,clear:"both"}}>
                   
                  </div> 
                   
            </div>
            <div className=" col s12" >
                <input style={{margin: 0, paddingLeft: '1%', paddingRight: '1%', width: '98%'}}   onKeyPress={this._handleInputKeyPress}  placeholder="type a message:" 
                ref={(input) => { this.talkInput = input; }} autoFocus/>
            </div>

            
        </div>
    );
 }
      else{

        return (


            

<ul style={{ position:"absolute" ,right:0,bottom:0}} >
<li class="collection-item avatar">
  <img src={Logo} alt={ 'altText' } class="conatiner" onClick={this.show} style={{height:100,width:100}}>
  </img>
</li>
  
<div   ref={(el)=>{
                         this.messagesEnd=el;}} 
                         
                    >
                   
                  </div> 
</ul>

         );





      }  





        
    }
}

export default withRouter(Chatbot);