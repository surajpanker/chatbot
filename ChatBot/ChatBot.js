'use strict';

//for deploying dialogflow
const dialogflow = require('dialogflow');
const config = require('../config/keys');
// convert javscript object to proto struct
const structjson =require('./utils');
const projectID = config.googleProjectID;

const credentials={
    client_email: config.googleClientEmail,
     private_key: config.googlePrivateKey
}
const sessionClient = new dialogflow.SessionsClient({projectID,credentials});  //for deploying heroku
const sessionPath = sessionClient.sessionPath(config.googleProjectID,config.dialogFlowSessionID);


module.exports ={
    //added empty object parameter
    textQuery: async function(text,parameters={}){
        
        
    let self =module.exports;
        //we access another module method
      // The text query request.
     const request = 
           {
    session: sessionPath,
    queryInput: {
      text: {
        // The query to send to the dialogflow agent
        text:text,//text must be parameters
        // The language used by the client (en-US)
        languageCode: config.dialogFlowSessionLanguageCode,
      },
    },
    queryParams:{
        payload:{
            data:parameters
        }
    }           
               
  };
 // if intent matching throw query result other wise it give not intent match
          let responses =await sessionClient.detectIntent(request);
            responses= await self.handleAction(responses);
           return responses;
    },
    eventQuery: async function(event,parameters={}){
        
        
    let self =module.exports;
        //we access another module method
      // The text query request.
     const request = 
           {
    session: sessionPath,
    queryInput: {
      event: {
        // The query to send to the dialogflow agent
        name:event,//text must be parameters
        // The language used by the client (en-US)
          parameters:structjson.jsonToStructProto(parameters),
        languageCode: config.dialogFlowSessionLanguageCode,
      },
    }           
  };
 // if intent matching throw query result other wise it give not intent match
      let responses =await sessionClient.detectIntent(request);
            responses= await self.handleAction(responses);
           return responses;
    },
    
    
    

    
    handleAction: function(responses)
    {   
                return responses;

    }
}