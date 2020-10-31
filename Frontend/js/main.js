let index=0;
let chosenUser=-1;
function showData(data1,dataidx)
{
    chosenUser=-1;
    if(data1.hasOwnProperty(dataidx.toString()))
    {
        let data=JSON.parse(JSON.stringify(data1[dataidx.toString()]));
        document.getElementById("terminal").innerHTML=  "<img class='carImage' src='"+data.picture+"'></img>"+ "<br>Car ID: "+ data.id +"</br>"+ "<br>Vehicle Type: "+data.vehicleType+"</br>"+
        "<br>Brand: "+data.brand+"</br>" + "<br>Model: " + data.model + "</br>" + "<br>Construction Year: " + data.constructionYear + "</br>" + "<br>Fuel Type: " + data.fuelType + "</br>" +
        "<br>Number of seats: " + data.numberOfSeats + "</br>" +"<br>Price per day: "+data.pricePerDay + "</br>" + "<br>Count: "+data.count+"</br>";
        return true;
    }
    else
    {
        document.getElementById("terminal").innerHTML = "<br>There arent more cars in this direction</br>";
        return false;
    }
}
function next(data)
{
    index++;
    let result = showData(data,index);
    if(result===false)
    {
        index--;
        showData(data,index);
    }
}
function prev(data)
{
    index--;
    let result = showData(data,index);
    if(result===false)
    {
        index++;
        showData(data,index);
    }
}
function deleteCur(data)
{
    let request = new XMLHttpRequest();
    request.open('DELETE', 'http://localhost:3000/vehicle/'+data[index.toString()].id);
    request.onload = function() {
        if(request.status==200)
        {
            test();
        }
    }
    request.send();
}
let globalData;
function test()
{
    let request = new XMLHttpRequest();

    request.open('GET', 'http://localhost:3000/vehicle',true);
    request.onload = function() {
        globalData = JSON.parse(this.response);
        if(request.status>=200&&request.status<400)
        {
            index=0;
            showData(globalData,0);
        }
    }
    request.send();
}
function addVehicle()
{
    let request = new XMLHttpRequest();
    request.open('POST', 'http://localhost:3000/vehicle/create');
    request.setRequestHeader('Content-Type', 'application/json');
    request.onload = function(){
        if(request.status>=200&&request<400)test();
        else document.getElementById("terminal").innerHTML="Error! Is there an empty field?";
    }
    const body = {
        vehicleType:document.getElementById("vehtype").value,
        brand:document.getElementById("brand").value,
        model:document.getElementById("model").value,
        constructionYear:document.getElementById("constYear").value,
        fuelType: document.getElementById("fuelType").value,
        numberOfSeats: document.getElementById("numberOfSeats").value,
        pricePerDay: document.getElementById("pricePerDay").value,
        count: document.getElementById("count").value,
        picture: document.getElementById("pictureLink").value,

    };
    request.send(JSON.stringify(body));
}
function editVehicle()
{
    let request = new XMLHttpRequest();
    request.open('PATCH', 'http://localhost:3000/vehicle/'+globalData[index].id+'/'+document.getElementById("editItem").value+"/"+document.getElementById("value").value);
    request.setRequestHeader('Content-Type', 'application/json');
    request.onload = function(){
        test();
    }
    request.send();
}
function createCustomer()
{
    let request = new XMLHttpRequest();
    request.open('POST','http://localhost:3000/customer/create');
    request.setRequestHeader('Content-Type','application/json');
    request.onload=function(){

    }
    const body = {
        email:document.getElementById("email").value,
        telephone:document.getElementById("telephone").value,
        fullName:document.getElementById("fullName").value,
    }
    request.send(JSON.stringify(body));
}
function getCustomer()
{
    let request = new XMLHttpRequest();
    request.open('GET','http://localhost:3000/customer/'+document.getElementById("getEmail").value);
    request.onload = function(){
        if(request.status<200||request.status>=400)
        {
            document.getElementById("terminal").innerHTML="Error";
        }
        else
        {
            const userData = JSON.parse(this.response);
            document.getElementById("terminal").innerHTML="<br>Customer Data:</br>"+"<br>Customer ID: "+userData.id+"</br><br>Email: "
            +userData.email+"</br><br>Full Name: "+userData.fullName+"</br><br>Telehone: "+userData.telephone+"</br><br>Rental Events: "+JSON.stringify(userData.rentalEvents)+"</br>";
            chosenUser = userData.id;
        }
    }
    request.send();
}
function editCustomer()
{
    if(chosenUser==-1)
    {
        alert("Please choose a customer");
        return 0;      
    }
    let request = new XMLHttpRequest();
    request.open('PATCH','http://localhost:3000/customer/'+chosenUser.toString()+"/"+document.getElementById("editUser").value+"/"+document.getElementById("valUser").value);
    request.onload = function(){
        if(request.status<200||request.status>=400)
        {
            document.getElementById("terminal").innerHTML="Error";
        }
        else
        {
            const userData = JSON.parse(this.response);
            document.getElementById("terminal").innerHTML="<br>Customer Data:</br>"+"<br>Customer ID: "+userData.id+"</br><br>Email: "
            +userData.email+"</br><br>Full Name: "+userData.fullName+"</br><br>Telehone: "+userData.telephone+"</br>";
            chosenUser = userData.id;
        }
    }
    request.send();
}
function deleteCustomer()
{
    if(chosenUser==-1)
    {
        alert("Please choose a customer");
        return 0;      
    }
    let request = new XMLHttpRequest();
    request.open('DELETE','http://localhost:3000/customer/'+chosenUser.toString());
    request.onload = function(){
        if(request.status<200||request.status>=400)
        {
            document.getElementById("terminal").innerHTML="Error";
        }
    }
    request.send();
    index=0;
    showData(globalData,0);

}
function rentACar()
{
    if(chosenUser==-1)
    {
        alert("Please choose a user");
        return 0;
    }
    let request = new XMLHttpRequest();
    request.open('POST','http://localhost:3000/rental/'+chosenUser.toString()+"/"+document.getElementById("rentcarid").value+"/"+document.getElementById("period").value+"/false");
    request.onload = function(){
        if(request.status<200||request.status>=400)
        {
            document.getElementById("terminal").innerHTML="Error";
        }
        else
        {
            if(confirm(this.response))
            {
                let request2 = new XMLHttpRequest();
                request2.open('POST','http://localhost:3000/rental/'+chosenUser.toString()+"/"+document.getElementById("rentcarid").value+"/"+document.getElementById("period").value+"/true");
                request2.onload = function(){
                    if(request2.status<200||request2.status>=400)
                    {
                        document.getElementById("terminal").innerHTML="Error2";
                    }
                    else
                    {
                        alert(this.response);
                    }
                }
                request2.send();
            }
        }
        
    }
    request.send();
}
