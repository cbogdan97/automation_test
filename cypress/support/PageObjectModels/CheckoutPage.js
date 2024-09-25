import {Common} from "../common/CommonFunctions.js";

const common = new Common();

export class StorePage {
    constructor() {
        this.women = "(//span[contains(string(),'Women')])[1]";
        this.men = "(//span[contains(string(),'Men')])[1]";
        this.tees = "(//a[contains(string(),'Tees')])[4]";
    }

    navigateToStorePage(){
        common.clickButton(this.women);
    }

    navigateToCategory(category){
        common.clickButton(`//a[text()='${category}']`)
    }







}