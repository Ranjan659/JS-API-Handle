function requestCheck(){

    
        var element = document.getElementById("loader");
        element.classList.add("loader");
        var element1 = document.getElementById("loader1");
        element1.classList.add("loader");
        

        var el2 = document.getElementById("buttonText");
        el2.classList.add("hi");
     let name = document.getElementById('name').value.toLowerCase();
     if(name === 'first' || name === 'last' || name === 'title'){

getName(name) ;
    }   
               
               else {
                document.getElementById("demo1").innerHTML = "Invalid input";

                var element2 = document.getElementById("buttonText").innerHTML = "Request Again";
                element.classList.remove("loader");
                el2.classList.remove("hi");
               }

   
          
}
function getName(name){
     const NameHttp = new XMLHttpRequest();
 const NameUrl = 'https://randomuser.me/api/?inc=name&noinfo';
 NameHttp.open('GET',NameUrl);
 NameHttp.send();


    NameHttp.onreadystatechange = (e) =>{
        let n = JSON.parse(NameHttp.responseText);
           
         if (NameHttp.readyState == 4 && NameHttp.status == 200) {

            let ResultName =""
                if(name === 'first'){
                     ResultName = n.results[0].name.first;
                }
               else if(name === 'last'){
                 ResultName = n.results[0].name.last;
               }
               else {
                 ResultName = n.results[0].name.title;
               }

getLocation(ResultName);

        }
}
}
function getLocation(ResultName){
    var myLocation = document.getElementsByName('Location-radio'); 
            const LocationHttp = new XMLHttpRequest();
            const LocationUrl = 'https://randomuser.me/api/?inc=location&noinfo';
            LocationHttp.open('GET',LocationUrl);
            LocationHttp.send();

            LocationHttp.onreadystatechange = (e) =>{
                let l = JSON.parse(LocationHttp.responseText);
         if (LocationHttp.readyState == 4 && LocationHttp.status == 200) {
                let Location = "";                  
            
                if(myLocation[0].checked) 
                     Location = l.results[0].location.street;
                else if(myLocation[1].checked)
                    Location = l.results[0].location.city;
                else if(myLocation[2].checked) 
                     Location = l.results[0].location.state
 
getImage(ResultName,Location);


            
        }
            } 
}
function getImage(ResultName,Location){
         const ImageHttp = new XMLHttpRequest();
            const ImageUrl = 'https://randomuser.me/api/?inc=picture&noinfo';
            ImageHttp.open('GET',ImageUrl);
            ImageHttp.send();

                var e = document.getElementById("Image");
                var result = e.options[e.selectedIndex].value;
                ImageHttp.onreadystatechange = (e)=>{
                        let i= JSON.parse(ImageHttp.responseText);
                        if (ImageHttp.readyState == 4 && ImageHttp.status == 200) {       
                                var ImageResult = "";
                        if(result === 'large'){
                             ImageResult = i.results[0].picture.large;
                        }
                        else if(result === 'medium'){
                             ImageResult = i.results[0].picture.medium;
                        }
                        else if(result === 'thumbnail'){
                             ImageResult = i.results[0].picture.thumbnail;
                        }
                document.getElementById("demo2").innerHTML = ResultName;
                document.getElementById("demo3").innerHTML
                        =  Location ;

                        var Image = [
                          '<img src=' + ImageResult + '>'
                        ].join('\n');

document.getElementById("demo1").innerHTML = Image;


        var element = document.getElementById("loader");
        var element1 = document.getElementById("loader1");
        
        var el2 = document.getElementById("buttonText");
               el2.innerHTML = "Request Again";
                element.classList.remove("loader");
                element1.classList.remove("loader");
                el2.classList.remove("hi");
                }  
        }

}