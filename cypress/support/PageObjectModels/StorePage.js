import {Common} from "../common/CommonFunctions.js";

const common = new Common();

export class StorePage {
    constructor() {
        this.women = "(//span[contains(string(),'Women')])[1]";
    }

    navigateToStorePage(){
        common.clickButton(this.women);
    }

    navigateToCategory(category){
        common.clickButton(`//a[text()='${category}']`)
    }

}