export class Order {
    constructor(sFrom) {
      this.OrderState = {
        WELCOMING: () => {
          let aReturn = [];
          this.stateCur = this.OrderState.ORDER;
          aReturn.push("Welcome to Chatime! Would you like get started on an order for today?");
          return aReturn;
        },
        ORDER: (sInput) => {
          let aReturn = [];
          this.stateCur = this.OrderState.SIZE;
          if (sInput.toLowerCase().startsWith('y')){
            aReturn.push("Sounds great!");
            aReturn.push("What size drink would you like to order: regular [+0.00], or large [+0.70]?");
          }
          else {
            aReturn.push("No worries, see you soon!");
            this.isDone = true;
          }
          return aReturn;
        },

        SIZE: (sInput) =>{
          let aReturn = [];
          this.stateCur = this.OrderState.DRINK;
          if (sInput.toLowerCase().startsWith('r')){
            aReturn.push("Regular [+0.00] drink size selected.");
            this.Size = "regular";
            this.Cost = this.Cost + 0;
          }
          else if (sInput.toLowerCase().startsWith('l')){
            aReturn.push("Large [+0.70] drink size selected.");
            this.Size = "large";
            this.Cost = this.Cost + 0.70;
          }
          else {
            aReturn.push("Sorry, that's not a menu option. Your order will proceed as a regular sized milk tea.");
            this.Cost = this.Cost + 0;
          }
          aReturn.push("Which drink would you like? We have matcha, roasted, taro, brown sugar, jasmine jade, earl grey, and black milk teas");
          return aReturn;  
        },
        DRINK: (sInput) =>{
          let aReturn = [];
          this.stateCur = this.OrderState.MILK;
          if (sInput.toLowerCase().startsWith('r')){
            aReturn.push("Roasted milk tea selected.");
            this.Drink = "Roasted Milk Tea";
            this.Cost = this.Cost + 6;
          }
          else if (sInput.toLowerCase().startsWith('t')){
            aReturn.push("Taro milk tea selected");
            this.Drink = "Taro Milk Tea";
            this.Cost = this.Cost + 6;
          }
          else if (sInput.toLowerCase().startsWith('e')){
            aReturn.push("Earl grey milk tea selected.");
            this.Drink = "Earl Grey Milk Tea";
            this.Cost = this.Cost + 6;
          }
          else if (sInput.toLowerCase().startsWith('m')){
            aReturn.push("Matcha milk tea selected.");
            this.Drink = "Matcha Milk Tea";
            this.Cost = this.Cost + 6;
          }
          else if (sInput.toLowerCase().startsWith('b')){
            aReturn.push("Brown sugar milk tea selected.");
            this.Drink = "Brown Sugar Milk Tea";
            this.Cost = this.Cost + 7;
          }
          else if (sInput.toLowerCase().startsWith('j')){
            aReturn.push("Jasmine jade milk tea selected.");
            this.Drink = "Jasmine Jade Milk Tea";
            this.Cost = this.Cost + 6;
          }
          else {
            aReturn.push("Sorry, that's not a possible menu option. Your order will proceed as a black milk tea.");
          }
          aReturn.push("What type of milk would you like?");
          aReturn.push("We have Whole [+0.00], Almond [+0.70], Oat [+0.70] or Soy [+0.70] milk");
          return aReturn;
        },
        MILK: (sInput) =>{
          let aReturn = [];
          this.stateCur = this.OrderState.TOPPING;
          if (sInput.toLowerCase().startsWith('w')){
            aReturn.push("Whole milk option selected.");
            this.Milk = "whole",
            this.Cost = this.Cost + 0.00;
          }
          else if (sInput.toLowerCase().startsWith('a')){
            aReturn.push("Almond milk option selected.");
            this.Milk = "almond",
            this.Cost = this.Cost + 0.70;
          }
          else if (sInput.toLowerCase().startsWith('o')){
            aReturn.push("Oat milk option selected.");
            this.Milk = "oat";
            this.Cost = this.Cost + 0.70;
          }
          else if (sInput.toLowerCase().startsWith('s')){
            aReturn.push("Soy milk option selected.");
            this.Milk = "soy";
            this.Cost = this.Cost + 0.70;
          }
          else {
            this.Milk = "none";
            this.Cost = this.Cost + 0.00;
            aReturn.push("Sorry that's not a possible dairy or dairy alternative option. Your order will proceed with no dairy.");
          }
          aReturn.push("What toppings would you like to add?");
          aReturn.push("We have Tapioca [+0.70], Pudding [+0.70], Grass Jelly [+0.70], Sago [+0.70], Crystal Pearl [+0.70] or No toppings [+0.00]?");
          return aReturn;
        },
        TOPPING: (sInput) =>{
          let aReturn = [];
          this.stateCur = this.OrderState.SUGAR;
          if (sInput.toLowerCase().startsWith('t')){
            aReturn.push("Tapioca topping selected.");
            this.Top = "tapioca";
            this.Cost = this.Cost + 0.70;
          }
          else if (sInput.toLowerCase().startsWith('p')){
            aReturn.push("Pudding topping selected.");
            this.Top = "pudding";
            this.Cost = this.Cost + 0.70;
          }
          else if (sInput.toLowerCase().startsWith('g')){
            aReturn.push("Grass jelly topping selected.");
            this.Top = "grass jelly";
            this.Cost = this.Cost + 0.70;
          }
          else if (sInput.toLowerCase().startsWith('s')){
            aReturn.push("Sago topping selected.");
            this.Top = "sago";
            this.Cost = this.Cost + 0.70;
          }
          else if (sInput.toLowerCase().startsWith('c')){
            aReturn.push("Crystal pearl topping selected.");
            this.Top = "crystal pearl";
            this.Cost = this.Cost + 0.70;
          }
          else{
            aReturn.push("No toppings were selected. Your order will proceed with no toppings.");
          }
          aReturn.push("What sugar level would you like?");
          aReturn.push("We have 100% (regular) sugar, 80% sugar, 50% (half) sugar, 30% sugar, or 0% (no) sugar");
          return aReturn;
        },
        SUGAR: (sInput) =>{
          let aReturn = [];
          this.stateCur = this.OrderState.ICE;
          if(sInput.startsWith('8')){
            aReturn.push("80% sugar level selected.");
            this.Sugar = "80% sugar";
          }
          else if (sInput.startsWith('5')|| sInput.toLowerCase().startsWith('h')){
            aReturn.push("50% sugar level selected.");
            this.Sugar = "50% sugar";
          }
          else if (sInput.startsWith('3')){
            aReturn.push("30% sugar level selected.");
            this.Sugar = "30% sugar";
          }
          else if (sInput.toLowerCase().startsWith('0') || sInput.toLowerCase().startsWith('z')){
            aReturn.push("0% sugar level selected.");
            this.Sugar = "0% sugar";
          }
          else {
            this.Sugar = "100% (regular) sugar";
            aReturn.push("Your order will proceed with 100% (regular) sugar");
          }
          aReturn.push("Would you like to customize the ice level or temperature of your drink?");
          aReturn.push("We have options for regular ice, less ice, no ice, and a hot version of this drink.");
          return aReturn;
        },
        ICE: (sInput) => {
          let aReturn = [];
          this.stateCur = this.OrderState.FINALIZE;
          if (sInput.toLowerCase().startsWith('l')){
            aReturn.push("Less ice selected.");
            this.Ice = "Less ice";
          }
          else if (sInput.toLowerCase().startsWith('n')){
            aReturn.push("No ice selected.");
            this.Ice = "No ice";
          }
          else if (sInput.toLowerCase().startsWith('h')){
            aReturn.push("Hot drink selected.");
            this.Ice = "Hot drink";
          }
          else {
              this.Ice = "Regular ice";
              aReturn.push("Your order will proceed with the regular level of ice.");
          }
          aReturn.push("Thanks for ordering today! Would you like to add a BakeCode croissant for $5.00?");
          return aReturn;
        },
        FINALIZE: (sInput) =>{
          let aReturn = [];
          this.stateCur = this.OrderState.RESERVING;
          if (sInput.toLowerCase().startsWith('y')){
            this.BakeCode = true;
            this.Cost = this.Cost + 5;
            aReturn.push("Thank you, proceeding with your order confirmation.");
          }
          else if (sInput.toLowerCase().startsWith('n')){
            this.BakeCode = false;
            this.Cost = this.Cost + 0;
            aReturn.push("Thank you, proceeding with your order confirmation.");
          }
          else {
            aReturn.push("Sorry that's not a valid response. Your order will proceed with no croissant add-ons.");
          }
          aReturn.push("Your order is ready to send. To confirm your order type 'yes', to cancel your order type 'no'");
          return aReturn;
        },
        RESERVING: (sInput) => {
          let aReturn = [];
          this.stateCur = this.OrderState.CONFIRM;
          if (sInput.toLowerCase().startsWith('y') || this.BakeCode == true){
            aReturn.push(`Your SMS order of ${this.Size} ${this.Drink} with ${this.Milk} milk, ${this.Top}, and a BakeCode croissant are reserved. Your total for this order is $${this.Cost}0`);
            aReturn.push("This is a confirmation of your order number: 002-028-2025. Press 'Y' to acknowledge this message.")
          }
          else if (sInput.toLowerCase().startsWith('n') || this.BakeCode == true){
            aReturn.push(`Please confirm your SMS order of ${this.Size} ${this.Drink} with ${this.Milk} milk, ${this.Top}, and a BakeCode croissant. Your total for this order is $${this.Cost}0`);
            aReturn.push("Reply with 'Verify' to confirm your order.");
          }
          else if (sInput.toLowerCase().startsWith('y') || this.BakeCode == false){
            aReturn.push(`Your SMS order of ${this.Size} ${this.Drink} with ${this.Milk} milk, ${this.Top} is reserved. Your total for this order is $${this.Cost}0`); 
            aReturn.push("This is a confirmation of your order number: 002-028-2025. Press 'Y' to acknowledge this message.");
          }
          else if (sInput.toLowerCase().startsWith('n') || this.BakeCode == false){
            aReturn.push(`Please confirm your SMS order of ${this.Size} ${this.Drink} with ${this.Milk} milk, ${this.Top}. Your total for this order is $${this.Cost0}`);
            aReturn.push("Reply with 'Verify' to confirm your order.");
          }
          else {
            aReturn.push("Sorry, there seems to be a problem with your order confirmation. We apologize for the inconvenience and recommend you visit our Waterloo store in-person to resolve this issue.");
            aReturn.push("The address for our Waterloo location is 255 King St North Unit 9.");
          }
          return aReturn;
        },
        CONFIRM: (sInput) => {
          let aReturn = [];
          this.isDone = true;
          if (sInput.toLowerCase().startsWith('y')) {
            aReturn.push("Your order will be ready for pick up in approximately 10 minutes.");
            aReturn.push("Please pick your order at our Waterloo location at 255 King St North Unit 9");
            this.stateCur = this.OrderState.CONFIRM;
          } 
          else if (sInput.toLowerCase().startsWith('v')) {
            aReturn.push("Your order is confirmed and you are ready to proceed.");
            aReturn.push("This is a confirmation of your order number: 002-028-2025.");
          } 
          else {
            aReturn.push("Thanks for trying out Chatime's SMS ordering system");
            aReturn.push("You can also order in person at our Waterloo location at 255 King St North Unit 9");
            aReturn.push("We'll see you next time")
          }
          return aReturn;
        },
      };
  
      this.stateCur = this.OrderState.WELCOMING;
      this.isDone = false;
      this.BakeCode = false;
      this.Milk = "no";
      this.Size = "regular";
      this.Drink = "black milk tea";
      this.Sugar = "100% (regular)";
      this.Ice = "regular";
      this.Cost = 0;
      this.Top = "no toppings";

    }
    handleInput(sInput) {
      return this.stateCur(sInput);
    }
    isDone() {
      return this.isDone;
    }
  }