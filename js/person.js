class Person
 {
    constructor(){
      this.index = null;
      this.answer = 0;
      this.name = null;
    }
  
    getCount(){
      var personCountRef = database.ref('personCount');
      personCountRef.on("value",(data)=>{
        personCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        personCount: count
      });
    }
  
    update(){
      var personIndex = "persons/person" + this.index;
      database.ref(personIndex).set({
        name:this.name,
        answer:this.answer
      });
    }
  
    static getPlayerInfo(){
      var personInfoRef = database.ref('persons');
      personInfoRef.on("value",(data)=>{
        allPersons = data.val();
      })
    }
  }
  