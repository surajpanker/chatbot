const { WebhookClient }  = require('dialogflow-fulfillment');
const mongoose = require('mongoose');
const Demand = mongoose.model('demand');
//const mongoose = require('mongoose');
const Cupon = mongoose.model('cupon');
module.exports=(app)=>{

app.post('/',async (req,res)=>{


const agent  = new WebhookClient({request:req,response:res});

function fallback(agent){
    agent.add('i did not get it');
    agent.add('i am sorry , can you try  again');
}
function snoopy(agent){

    agent.add('snoopy  fulfillment');
}


async function productsm(agent) {
  Demand.findOne({'products': agent.parameters.products}, function(err, products) {
      if (products !== null ) {
       console.log(products);

        products.counter++;
        products.save();
      } else {
          const demand = new Demand({products: agent.parameters.products});
          demand.save();
      }
  });
  let responseText = `You want to learn about ${agent.parameters.products}. 
  Here is a link to all of my courses: https://www.sociolla.com/gwp-product/7873-colorcentric-pouch.html`;
 Cupon.findOne({'coupon1': agent.parameters.products}, (coupon1)=>{

    if (coupon1 !==null ) {
      responseText = `You want to learn about ${agent.parameters.products}. 
      Here is a link to the course: ${coupon1.link}`;
  }

  });
  

  
  

  agent.add(responseText);
}

let intentmap =new Map();
intentmap.set('Default fallback intent', fallback);
intentmap.set('snoopy',snoopy);
intentmap.set('about products',productsm);
agent.handleRequest(intentmap);



});










}