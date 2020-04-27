'use strict';

//for deploying dialogflow
const dialogflow = require('dialogflow');
const config = require('../config/keys');
// convert javscript object to proto struct
const structjson =require('./utils.js');
const projectID = config.googleProjectID;
//for cookies here 
const projectId=config.googleProjectID;
const sessionId=config.dialogFlowSessionID;
const mongoose =require('mongoose')
const Registration = mongoose.model('registration');
const credentials={
    client_email: config.googleClientEmail,
     private_key: config.googlePrivateKey,
};
const sessionClient = new dialogflow.SessionsClient({projectID,credentials});  //for deploying heroku
//const sessionPath = sessionClient.sessionPath(config.googleProjectID,config.dialogFlowSessionID); if not working then change //"const->let"


module.exports =
    {
    //added empty object parameter
    textQuery: async function(text,userID,parameters={})
    {
        
        
        let self =module.exports;
        
        let sessionPath = sessionClient.sessionPath(projectId,sessionId+userID); ////for unique seassion and cookies

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
          let responses   =   await sessionClient.detectIntent(request);
              responses   =   await self.handleAction(responses);
           return responses;
    },
    eventQuery: async function(event,userID,parameters={}){
        
        
    let self =module.exports;
                let sessionPath = sessionClient.sessionPath(projectId,sessionId+userID); //for unique seassion and cookies

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
        
            responses=  self.handleAction(responses);
           return responses;
    }
    ,
        handleAction:function(responses)
                     {   
                      let self =module.exports;
                      let queryResult = responses[0].queryResult;
                      switch(queryResult.action){
                         case 'Recommendproductsyes':
                                                     if(queryResult.allRequiredParamsPresent)
                                                     {
                                                      
                                                    //  console.log(queryResult.parameters.address);
                                                    // console.log(queryResult.parameters.name);
                                                      // console.log(queryResult.parameters.phone);

                                                         self.saveRegistration(queryResult.parameters.fields);


                                                          
                                                     }
                                                     break;
                                                      
                      }
                       return responses;
                     }
,
saveRegistration:async function(fields){
 const registration = new Registration({name:fields.name.stringValue,
  address:fields.address.stringValue,
  phone:fields.phone.stringValue
 });
try{
  let log = await registration.save();
  console.log(log);


}
catch(err){
console.log(err)
}





}    

}