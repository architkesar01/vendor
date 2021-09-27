

class Form{
    constructor(){
        this.input = createInput("Name");
        this.location=createInput("Location")
        this.button = createButton('Enter');
        this.title = createElement('h2');
        this.title1 = createElement('h2');  
        this.greeting = createElement('h2');
    this.reset= createButton("reset")
        this.x = document.getElementById('output')
        this.buyer = createButton('Buyer');
        this.seller = createButton('seller')
      this.type=createElement("h4")
    }
hide(){
    this.input.hide();
    this.location.hide();
    this.button.hide();  
    this.title.hide();
}


display(){
   
    this.title.html("Farry Wala" )
    this.title.style('color', 'white');
    this.title1.style('color', 'white');
    this.title.position(displayWidth/2,displayHeight/2-300)
    this.title1.html("Selling MADE Easy")
    this.title1.position(displayWidth/2-20,displayHeight/2-250)
    this.input.position(displayWidth/2,displayHeight/2-150);
    this.button.position(displayWidth/2,displayHeight/2+40);
    this.location.position(displayWidth/2,displayHeight/2-80)
  this.reset.position(displayWidth/2+200,displayHeight/2-80)
   

  this.buyer.position(displayWidth/2+60,displayHeight/2);
  this.seller.position(displayWidth/2,displayHeight/2);




  this.buyer.mousePressed(()=>{
      
    this.buyer.hide();
    this.seller.hide();

    person.name = this.input.value();
   
    personCount+=1;
    person.index = personCount;
    person.update();
    person.updateCount(personCount);
  

    this.greeting.html("Type: Buyer")
    this.type.position(displayWidth/3,displayHeight)
    });



    
this.seller.mousePressed(()=>{

    this.buyer.hide();
    this.seller.hide();

    person.name = this.input.value();
   
    personCount+=1;
    person.index = personCount;+
    person.update();
    person.updateCount(personCount);
    

    this.greeting.html("Type: Seller")
    this.type.position(displayWidth/3,displayHeight/2)
    });


    this.button.mousePressed(()=>{
       
  
        console.log(appState)
   this.input.hide();
    this.location.hide();
    this.button.hide();

    person.name = this.input.value();
   
    personCount+=1;
    person.index = personCount;
    person.update();
    person.updateCount(personCount);
    this.greeting.html("Hello " + person.name)
    this.greeting.position(displayWidth/2, displayHeight/2+20);

    
    app = new App();
    app.getState();
    app.start();
 app.update(1);
    });




    this.reset.mousePressed(()=>{

        app = new App();
        app.getState();
        app.start();
     app.update(0);
    });
    }

}