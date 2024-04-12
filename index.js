fetch("https://p-1-ie0q.onrender.com/carsData")
.then(data => data.json())
.then(res => {
     for (const car of res) {
          renderOneCar(car)
          
     }
})
 console.log(  );

// fetch("http://localhost:3000/carsData")
//   .then(response => {
//     // Handle response here (e.g., parse JSON, check status code)
//     console.log(response);
//   })
//   .catch(error => {
//     // Handle fetch error here
//     console.error('Error fetching data:', error);

//   });


// const requestOptions = {
//      method: "GET",
//      redirect: "follow"
//    };
   
//    fetch("http://localhost:3000/carsData", requestOptions)
//      .then((response) => response.json())
//      .then((result) => {
//           console.log(result);renderOneCar(result)
//      })
//      .catch((error) => console.error(error));


 

// posting cars to attract buyers 

 //Dom Manipulator Function 
 function renderOneCar(car){
 //build car
    let card = document.createElement("li")//creates a new list item 
    card.className="card";//setting the class name 
     //populate the card with car details
     //let image ="  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuyWLTjG8y7WUxTm1LWauJqyNYjjX_VvTrPw&s"
 
     card.innerHTML=`


    <h1>Post Car </h>
    <img src ="${car.imageURL}">
     <div class="flex justify-between my-5">
     <i onClick="deleteCar(${car.id})"class="fa fa-trash" aria-hidden="true"></i>
     <i onClick=" editCar(${car.id})"class="fa fa-pencil" aria-hidden="true"></i>
     <i onClick="commentCar(${car.id})"class="fa fa-comments" aria-hidden="true"></i>
     </div>
    <div class ="content">
     <h4> ${car.name}</h4>
    
     <p>${car.model}</p>
     <p>
     $<span class="car-price">${car.price}</span>
     </p>
     <p>${car.Description}</p>


    
     </div>
          `;
          //log the constructed card to the console for debugging
   console.log(card);

   //add cars to the dom
   document.querySelector("#car_data").appendChild(card);

 }


//  //update function
//  function editCar(id) {
//      fetch(http://localhost:3000/carsData/${id}`)
//      .then(data => data.json())
//      .then(res => {
//           for (const car of res) {
//                renderOneCar(car)
               
//           }
//      })
//       console.log(  );
       
     
//  }

//update function
function editCar(id) {
     fetch(`https://p-1-ie0q.onrender.com/carsData/${id}`)
         .then((response) => response.json())
         //.then(car => {
          .then((res)=>{
            //displayCar
            console.log(res);

            const updateContainer=document.getElementById("updateContainer")

            updateContainer.innerHTML=`

            
            <h4>update car posted</h4>
            <div>
      
    
      <input type="text" value="${res.name}" placeholder="Enter name">
      
      <input type="text" value="${res.model}"placeholder="Enter model">
     
      <input type="text" value="${res.imageURL}" placeholder="Enter imageURL">
      
      
     
      <input type="text" value"${res.Description}" placeholder="Enter Description" >
    
      <input type="text" value"${res.price}" placeholder="Enter price">
      
      <button onClick="update(${id})" type="submit">Submit Changes </button>
      </div>
    
    `
})
}
                //update car
               function  update(id){
                     //document.getElementById("car_form").addEventListener("submit" ,(event)=>{
                     //event.preventDefault()
                    const update_name =  document.getElementById("update_name").value;
                    const update_model =  document.getElementById("update_model").value;
                    const update_imageURL =  document.getElementById("update_image-url").value;
                    const update_description =  document.getElementById("update_Description").value;
                    const update_price =  document.getElementById("update_price").value;
               
                    //console.log(name,model,imageURL,description,price);
                    //const id =("update_container")
                    fetch(`https://p-1-ie0q.onrender.com/carsData/${id}`,{
                         method:"PATCH",
                         //headers:{"content-Type":"application/JSON"},
                         body:JSON.stringify({
                              name:update_name,
                              model:update_model,
                              imageURL:update_imageURL,
                              Description:update_Description,
                              price:update_price
                
                         }),
                         headers: {
                              "Content-Type": "application/json",
                          }
                    })
               .then((response) => response.json())
               // .then(res => {
                    .then((data)=>{
                    alert("post updated successfully")
               })
                console.log( update_name );
               
               
               
               
                  
          
       }
     




      

             

            


// delete function
function deleteCar(id)
{
     fetch(`https://p-1-ie0q.onrender.com/carsData/${id}`,{
          method:"DELETE"
     })
     .then(data => data.json())
     .then(res => {
     for (const car of res) {
          renderOneCar(car)
          
     }
})
 console.log( id );


 // display single blog
function displaySingleBlog(id)
{
    fetch(`https://p-1-ie0q.onrender.com/carsData/${id}`, {
    method:"GET"
    })
    .then((response)=> response.json())
    .then((data)=> {
        const single_blog = document.getElementById("single_blog")
        single_blog.innerHTML = `
        <div>
        <img src="${data.imageURL}"
        <h6>${data.name}</h6>
        <p>${data.description}</p>
        $<span class="car-price">${data.price}</span>
        <p>${data.model}</p>

      </div>`

        console.log(data)
    })
}





//  Swal.fire({
//      title: "Are you sure?",
//      text: "You won't be able to revert this!",
//      icon: "warning",
//      showCancelButton: true,
//      confirmButtonColor: "#3085d6",
//      cancelButtonColor: "#d33",
//      confirmButtonText: "Yes, delete it!"
//    }).then((result) => {
//      if (result.isConfirmed) {
//        Swal.fire({
//          title: "Deleted!",
//          text: "Your file has been deleted.",
//          icon: "success"
//        });
//      }
//    });


}
// Add Car
      const addcarform=document.getElementById("addcarform")
      carform.addEventListener("submit" ,function(event){
     event.preventDefault();
     const name =  document.getElementById("name").value;
     const model =  document.getElementById("model").value;
     const imageURL =  document.getElementById("image-url").value;
     const Description =  document.getElementById("Description").value;
     const price =  document.getElementById("price").value
    
     // console.log(name,model,imageURL,Description,price,);
     fetch("https://p-1-ie0q.onrender.com/carsData",{
          method:"POST",
          headers:{"content-Type":"application/JSON"},
          body:JSON.stringify({
               name:name,
               model:model,
               imageURL:imageURL,
               Description:Description,
               price:price

          }),

          headers: {
               "Content-Type": "application/json",
          }
     })
.then(data => response.json())
.then(data => {
     // for (const car of res) {
     //      renderOneCar(car)
          
     // }
     alert("post added successfully")
})
 console.log( name," ",model," ",imageURL," ",Description," ",price);


})









// // initial render 
// // get data and render cars to doms
function initialize(){
     carData.forEach(car=>renderOneCar(car));
     console.log(initialize);


}

// initialize();


