class App{
    constructor(){
  
    }
  
    getState(){
      var appStateRef  = database.ref('appState');
      appStateRef.on("value",function(data){
         appState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        appState: state
      });
    }
  
    async start(){
      if(appState === 0){
 console.log(appState)
       person = new Person();
        var personCountRef = await database.ref('personCount').once("value");
      
      
        if(personCountRef.exists()){
          personCount = personCountRef.val();
          person.getCount();
        }


        form = new Form()
        form.display();
      }
      if (appState === 1){
      
        


      }
    }



}