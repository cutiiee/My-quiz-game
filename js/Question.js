class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here");
   //Create a input box to enter the number

    this.input2 = createInput("Enter Correct Option No");
    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.question = createElement("h3");
    this.option1 = createElement("h4");
    this.option2 = createElement("h4");
    this.option3 = createElement("h4");
    this.option4 = createElement("h4");
    this.message = createElement("h2");

  }

  hide(){
    this.message.hide();
    this.title.hide();
    this.input1.hide();
    this.input2.hide();
    this.button.hide();
    //Add hide() for questions, options & input box


  }

  display(){
    this.title.html("My quiz form");
    this.title.position(350, 0);
    
    this.question.position(120,100);
    this.question.html("I am tall when I am young, I am small when I am old, Who am I? ");

    this.option1.position(120,130);
    this.option1.html("1: Height")


    this.option2.position(120,155);
    this.option2.html("2: Candle")

    this.option3.position(120,178);
    this.option3.html("3: Paper");

    this.option4.position(120,200);
    this.option4.html("4: Fruit");



    //Create html() and position() for each question, input and answers.

    this.input1.position(150, 270);
    this.input2.position(320,270);
    this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
    
    this.input1.hide();
    this.input2.hide();
    this.button.hide();
    
    
    this.message.position(200,250);
    this.message.html("Thanks for answering your resoponse has been submitted")
    
    
    

    })


  }
}
