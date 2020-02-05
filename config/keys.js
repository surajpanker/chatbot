  if(proces.env.NODE_ENV==='production')
    {
        
       module.export = require('./prod');
        
    }
else{
    module.export =require('./dev')
    
    
}