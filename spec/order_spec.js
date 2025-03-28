import { Order } from '../Order.js'

describe("Tests all stages of an order", function() {
    it("test hello", function() {
        const oOrder = new Order("002-028-2025");
        const aResults = oOrder.handleInput("hello");
        expect(aResults[0]).toBe("Welcome to Chatime! Would you like get started on an order for today?")
    });
    it("test start order", function() {
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        expect(aResults[0]).toBe("Sounds great!")
    });
    it("test defer order", function() {
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("no");
        expect(aResults[0]).toBe("No worries, see you soon!")
    });
    it("test size regular", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("regular");
        expect(aResults1[0]).toBe("Regular [+0.00] drink size selected.")
    });
    it("test size large", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("large");
        expect(aResults1[0]).toBe("Large [+0.70] drink size selected.")
    });
    it("test drink type - regular matcha", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("regular");
        const aResults2 = oOrder.handleInput("matcha milk tea");
        expect(aResults2[0]).toBe("Matcha milk tea selected.")
    });
    it("test drink type - large matcha", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("large");
        const aResults2 = oOrder.handleInput("matcha milk tea");
        expect(aResults2[0]).toBe("Matcha milk tea selected.")
    });
    it("test drink type - regular roasted", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("regular");
        const aResults2 = oOrder.handleInput("roasted milk tea");
        expect(aResults2[0]).toBe("Roasted milk tea selected.")
    });
    it("test drink type - large roasted", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("large");
        const aResults2 = oOrder.handleInput("roasted milk tea");
        expect(aResults2[0]).toBe("Roasted milk tea selected.")
    });
    it("test drink type - regular taro", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("regular");
        const aResults2 = oOrder.handleInput("taro milk tea");
        expect(aResults2[0]).toBe("Taro milk tea selected")
    });
    it("test drink type - large taro", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("large");
        const aResults2 = oOrder.handleInput("taro milk tea");
        expect(aResults2[0]).toBe("Taro milk tea selected")
    });
    it("test drink type - regular earl grey", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("regular");
        const aResults2 = oOrder.handleInput("earl grey milk tea");
        expect(aResults2[0]).toBe("Earl grey milk tea selected.")
    });
    it("test drink type - large earl grey", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("large");
        const aResults2 = oOrder.handleInput("earl grey milk tea");
        expect(aResults2[0]).toBe("Earl grey milk tea selected.")
    });
    it("test drink type - regular b/s", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("regular");
        const aResults2 = oOrder.handleInput("brown sugar milk tea");
        expect(aResults2[0]).toBe("Brown sugar milk tea selected.")
    });
    it("test drink type - large b/s", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("large");
        const aResults2 = oOrder.handleInput("brown sugar milk tea");
        expect(aResults2[0]).toBe("Brown sugar milk tea selected.")
    });
    it("test drink type - regular jasmine", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("regular");
        const aResults2 = oOrder.handleInput("jasmine jade milk tea");
        expect(aResults2[0]).toBe("Jasmine jade milk tea selected.")
    });
    it("test drink type - large jasmine", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("large");
        const aResults2 = oOrder.handleInput("jasmine jade milk tea");
        expect(aResults2[0]).toBe("Jasmine jade milk tea selected.")
    });
    it("test whole milk - regular matcha", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("regular");
        const aResults2 = oOrder.handleInput("matcha milk tea");
        const aResults3 = oOrder.handleInput("whole");
        expect(aResults3[0]).toBe("Whole milk option selected.")
    });
    it("test whole milk - large matcha", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("large");
        const aResults2 = oOrder.handleInput("matcha milk tea");
        const aResults3 = oOrder.handleInput("whole");
        expect(aResults3[0]).toBe("Whole milk option selected.")
    });
    it("test almond milk - regular matcha", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("regular");
        const aResults2 = oOrder.handleInput("matcha milk tea");
        const aResults3 = oOrder.handleInput("almond");
        expect(aResults3[0]).toBe("Almond milk option selected.")
    });
    it("test almond milk - large matcha", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("large");
        const aResults2 = oOrder.handleInput("matcha milk tea");
        const aResults3 = oOrder.handleInput("almond");
        expect(aResults3[0]).toBe("Almond milk option selected.")
    });
    it("test oat milk - regular matcha", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("regular");
        const aResults2 = oOrder.handleInput("matcha milk tea");
        const aResults3 = oOrder.handleInput("oat");
        expect(aResults3[0]).toBe("Oat milk option selected.")
    });
    it("test oat milk - large matcha", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("large");
        const aResults2 = oOrder.handleInput("matcha milk tea");
        const aResults3 = oOrder.handleInput("oat");
        expect(aResults3[0]).toBe("Oat milk option selected.")
    });
    it("test soy milk - regular matcha", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("regular");
        const aResults2 = oOrder.handleInput("matcha milk tea");
        const aResults3 = oOrder.handleInput("soy");
        expect(aResults3[0]).toBe("Soy milk option selected.")
    });
    it("test soy milk - large matcha", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("large");
        const aResults2 = oOrder.handleInput("matcha milk tea");
        const aResults3 = oOrder.handleInput("soy");
        expect(aResults3[0]).toBe("Soy milk option selected.")
    });
    it("test pearl topping", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("large");
        const aResults2 = oOrder.handleInput("matcha milk tea");
        const aResults3 = oOrder.handleInput("whole");
        const aResults4 = oOrder.handleInput("tapioca");
        expect(aResults4[0]).toBe("Tapioca topping selected.")
    });
    it("test pudding topping", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("large");
        const aResults2 = oOrder.handleInput("matcha milk tea");
        const aResults3 = oOrder.handleInput("whole");
        const aResults4 = oOrder.handleInput("pudding");
        expect(aResults4[0]).toBe("Pudding topping selected.")
    });
    it("test grass jelly topping", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("large");
        const aResults2 = oOrder.handleInput("matcha milk tea");
        const aResults3 = oOrder.handleInput("whole");
        const aResults4 = oOrder.handleInput("grass jelly");
        expect(aResults4[0]).toBe("Grass jelly topping selected.")
    });
    it("test sago topping", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("large");
        const aResults2 = oOrder.handleInput("matcha milk tea");
        const aResults3 = oOrder.handleInput("whole");
        const aResults4 = oOrder.handleInput("sago");
        expect(aResults4[0]).toBe("Sago topping selected.")
    });
    it("test crystal pearl topping", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("large");
        const aResults2 = oOrder.handleInput("matcha milk tea");
        const aResults3 = oOrder.handleInput("whole");
        const aResults4 = oOrder.handleInput("crystal pearl");
        expect(aResults4[0]).toBe("Crystal pearl topping selected.")
    });
    it("test 80% sugar", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("large");
        const aResults2 = oOrder.handleInput("roasted milk tea");
        const aResults3 = oOrder.handleInput("whole");
        const aResults4 = oOrder.handleInput("pearl");
        const aResults5 = oOrder.handleInput("80% sugar");
        expect(aResults5[0]).toBe("80% sugar level selected.")
    });
    it("test 50% sugar", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("large");
        const aResults2 = oOrder.handleInput("roasted milk tea");
        const aResults3 = oOrder.handleInput("whole");
        const aResults4 = oOrder.handleInput("pudding");
        const aResults5 = oOrder.handleInput("50% sugar");
        expect(aResults5[0]).toBe("50% sugar level selected.")
    });
    it("test 30% sugar", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("large");
        const aResults2 = oOrder.handleInput("roasted milk tea");
        const aResults3 = oOrder.handleInput("whole");
        const aResults4 = oOrder.handleInput("grass jelly");
        const aResults5 = oOrder.handleInput("30% sugar");
        expect(aResults5[0]).toBe("30% sugar level selected.")
    });
    it("test no sugar", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("large");
        const aResults2 = oOrder.handleInput("roasted milk tea");
        const aResults3 = oOrder.handleInput("whole");
        const aResults4 = oOrder.handleInput("sago");
        const aResults5 = oOrder.handleInput("0% sugar");
        expect(aResults5[0]).toBe("0% sugar level selected.")
    });
    it("test less ice", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("large");
        const aResults2 = oOrder.handleInput("roasted milk tea");
        const aResults3 = oOrder.handleInput("whole");
        const aResults4 = oOrder.handleInput("pearl");
        const aResults5 = oOrder.handleInput("80% sugar");
        const aResults6 = oOrder.handleInput("less ice");
        expect(aResults6[0]).toBe("Less ice selected.")
    });
    it("test no ice", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("large");
        const aResults2 = oOrder.handleInput("roasted milk tea");
        const aResults3 = oOrder.handleInput("whole");
        const aResults4 = oOrder.handleInput("pudding");
        const aResults5 = oOrder.handleInput("50% sugar");
        const aResults6 = oOrder.handleInput("no ice");
        expect(aResults6[0]).toBe("No ice selected.")
    });
    it("test regular ice", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("large");
        const aResults2 = oOrder.handleInput("roasted milk tea");
        const aResults3 = oOrder.handleInput("whole");
        const aResults4 = oOrder.handleInput("grass jelly");
        const aResults5 = oOrder.handleInput("30% sugar");
        const aResults6 = oOrder.handleInput("regular ice");
        expect(aResults6[0]).toBe("Your order will proceed with the regular level of ice.")
    });
    it("test hot drink", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("large");
        const aResults2 = oOrder.handleInput("roasted milk tea");
        const aResults3 = oOrder.handleInput("whole");
        const aResults4 = oOrder.handleInput("sago");
        const aResults5 = oOrder.handleInput("0% sugar");
        const aResults6 = oOrder.handleInput("hot drink");
        expect(aResults6[0]).toBe("Hot drink selected.")
    });
    it("test w/ croissant", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("large");
        const aResults2 = oOrder.handleInput("brown sugar milk tea");
        const aResults3 = oOrder.handleInput("whole");
        const aResults4 = oOrder.handleInput("pudding");
        const aResults5 = oOrder.handleInput("50% sugar");
        const aResults6 = oOrder.handleInput("no ice");
        const aResults7 = oOrder.handleInput("Yes");
        expect(aResults7[0]).toBe("Thank you, proceeding with your order confirmation.")
    });
    it("test w/o croissant", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("large");
        const aResults2 = oOrder.handleInput("brown sugar milk tea");
        const aResults3 = oOrder.handleInput("whole");
        const aResults4 = oOrder.handleInput("grass jelly");
        const aResults5 = oOrder.handleInput("30% sugar");
        const aResults6 = oOrder.handleInput("hot drink");
        const aResults7 = oOrder.handleInput("No");
        expect(aResults7[0]).toBe("Thank you, proceeding with your order confirmation.")
    });
    it("test confirm Y", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("large");
        const aResults2 = oOrder.handleInput("brown sugar milk tea");
        const aResults3 = oOrder.handleInput("whole");
        const aResults4 = oOrder.handleInput("pudding");
        const aResults5 = oOrder.handleInput("50% sugar");
        const aResults6 = oOrder.handleInput("no ice");
        const aResults7 = oOrder.handleInput("Yes");
        const aResults8 = oOrder.handleInput("Yes");
        expect(aResults8[0]).toBe("Your SMS order of large Brown Sugar Milk Tea with whole milk, pudding, and a BakeCode croissant are reserved. Your total for this order is $13.40")
    });
    it("test confirm C", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("large");
        const aResults2 = oOrder.handleInput("brown sugar milk tea");
        const aResults3 = oOrder.handleInput("whole");
        const aResults4 = oOrder.handleInput("pudding");
        const aResults5 = oOrder.handleInput("50% sugar");
        const aResults6 = oOrder.handleInput("no ice");
        const aResults7 = oOrder.handleInput("No");
        const aResults8 = oOrder.handleInput("No");
        expect(aResults8[0]).toBe("Please confirm your SMS order of large Brown Sugar Milk Tea with whole milk, pudding, and a BakeCode croissant. Your total for this order is $8.40")
    });
    it("test confirm order p/u", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("large");
        const aResults2 = oOrder.handleInput("brown sugar milk tea");
        const aResults3 = oOrder.handleInput("whole");
        const aResults4 = oOrder.handleInput("pudding");
        const aResults5 = oOrder.handleInput("50% sugar");
        const aResults6 = oOrder.handleInput("no ice");
        const aResults7 = oOrder.handleInput("Yes");
        const aResults8 = oOrder.handleInput("Yes");
        const aResults9 = oOrder.handleInput("Yes");
        expect(aResults9[0]).toBe("Your order will be ready for pick up in approximately 10 minutes.")
    });
    it("test confirm order p/u", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("large");
        const aResults2 = oOrder.handleInput("brown sugar milk tea");
        const aResults3 = oOrder.handleInput("whole");
        const aResults4 = oOrder.handleInput("pudding");
        const aResults5 = oOrder.handleInput("50% sugar");
        const aResults6 = oOrder.handleInput("no ice");
        const aResults7 = oOrder.handleInput("No");
        const aResults8 = oOrder.handleInput("Yes");
        const aResults9 = oOrder.handleInput("Verify");
        expect(aResults9[0]).toBe("Your order is confirmed and you are ready to proceed.")
    });
});