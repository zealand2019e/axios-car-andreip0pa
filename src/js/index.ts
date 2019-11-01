import axios,{
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index"


interface Icar{
id:number
vendor:string
model:string
price:number

}
//url for the rest webservice at Azure
let carWebUrl: string = "https://webapicar20190326034339.azurewebsites.net/api/cars/";

//create a click eventlistener at "Add" button
let AddCarButton: HTMLButtonElement = <HTMLButtonElement> document.getElementById("addButton");
AddCarButton.addEventListener("click",addCar);

let DelButton:HTMLButtonElement=<HTMLButtonElement> document.getElementById("deleteSomeButton");
DelButton.addEventListener("click",deleteCar);

let GetAllButton:HTMLButtonElement=<HTMLButtonElement>document.getElementById("getAllButton");
GetAllButton.addEventListener("click",seeAll);





function deleteCar():void{
    let DeleteId=(<HTMLInputElement>document.getElementById("deleteId")).value;
console.log("id is"+DeleteId)
axios.delete<Icar>(carWebUrl+DeleteId+"/").then((response:AxiosResponse)=>{
 console.log("deleted yes");
 
}).catch((response:AxiosResponse)=>{
    console.log("no delete");
})
}

function seeAll():void{
    let result:string;
axios.get<Icar[]>(carWebUrl).then((response:AxiosResponse<Icar[]>)=>{
    response.data.forEach((car:Icar)=>{
        if(car==null){
            result="<li>Null element</li>"
        }
        else{
            result="<li>"+car.id+" "+car.model+" "+car.price+" "+car.vendor+"</li><br>";
        }

        document.getElementById("carList").innerHTML+=result;


    })
})

}

    
//we need to code the axios post in this method
function addCar():void{

    let cmodel=(<HTMLInputElement>document.getElementById('addModel')).value;
    let cvendor=(<HTMLInputElement>document.getElementById('addVendor')).value;
    let cprice=(<HTMLInputElement>document.getElementById('addPrice')).value;
    axios.post<Icar>(carWebUrl,{model:cmodel,vendor:cvendor,price:cprice})
    .then(function(response:AxiosResponse){
        console.log(response.status+" "+response.statusText);
    })
    .catch(function(error:AxiosError){
        console.log(error);
    });

    //Steps to do a axios post

    //step 1 we need to get the data from the html page (text input fields)

    //step 2 we need to create a json object with the data

    //step 3 we need to do the axios post call with the data to the webservice

    //step 4 we need to check if the data is stored  

}

