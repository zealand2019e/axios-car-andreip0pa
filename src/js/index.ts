import axios,{
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index"

//url for the rest webservice at Azure
let carWebUrl: string = "https://webapicar20190326034339.azurewebsites.net/api/cars/";

//create a click eventlistener at "Add" button
let AddCarButton: HTMLButtonElement = <HTMLButtonElement> document.getElementById("addButton");
AddCarButton.addEventListener('click',addCar);

//we need to code the axios post in this method
function addCar():void{

    //Steps to do a axios post

    //step 1 we need to get the data from the html page (text input fields)

    //step 2 we need to create a json object with the data

    //step 3 we need to do the axios post call with the data to the webservice

    //step 4 we need to check if the data is stored  

}