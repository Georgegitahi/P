fetch("http://localhost:3000/carsData")
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
     fetch(`http://localhost:3000/carsData/${id}`)
         .then((response) => response.json())
         //.then(car => {
          .then((res)=>{
            //displayCar
            console.log(res);

            const update_container=document.getElementById("update_container")

            update_container.innerHTML=`

            
            <h4>update car posted</h4>
      <form  class="max-w-md mx-auto">
      <label for="name">name</label>
      <input type="text" value="${res.name}"id="name" name="name" required>
      <label for="name">model</label>
      <input type="text" value="${res.model}"id="Model" name="Model" required>
      <label for="name" > image URL</label>
      <input type="text" value="${res.imageURL}" id="image-url" name="image-url" required>
      
      
      <label for="description">Description</label>
      <input type="text" value"${res.Description}" id="Description" name="Description" ></input>
      <label for="name">Price</label>
      <input type="text" value"${res.price}"id="price" name="price">
      
      <button onClick="update_post(${id})" type="submit">Submit Changes </button>
    </form>
            
            
            
            
            
            
            
            `

          })


     }
          
             //update car

             function  update(id){

 
               // document.getElementById("car_form").addEventListener("submit" ,(event)=>{
               //      event.preventDefault()
                    const update_name =  document.getElementById("update_name").value;
                    const update_model =  document.getElementById("update_model").value;
                    const update_imageURL =  document.getElementById("update_image-url").value;
                    const update_description =  document.getElementById("update_Description").value;
                    const update_price =  document.getElementById("update_price").value;
               
                    //console.log(name,model,imageURL,description,price);
                    //const id =("update_container")
                    fetch(`http://localhost:3000/carsData${id}`,{
                         method:"PATCH",
                         //headers:{"content-Type":"application/JSON"},
                         body:JSON.stringify({
                              name:update_name,
                              model:update_model,
                              imageURL:update_imageURL,
                              description:update_description,
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
     fetch(`http://localhost:3000/carsData/${id}`,{
          method:"DELETE"
     })
     .then(data => data.json())
     .then(res => {
     for (const car of res) {
          renderOneCar(car)
          
     }
})
 console.log(  );


 // display single blog
function displaySingleBlog(id)
{
    fetch(`https://blog-javascript-p0ff.onrender.com/blogs/${id}`, {
    method:"GET"
    })
    .then((response)=> response.json())
    .then((data)=> {
        const single_blog = document.getElementById("single_blog")
        single_blog.innerHTML = `<div>
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
document.getElementById("car_form").addEventListener("submit" ,(event)=>{
     event.preventDefault()
     const name =  document.getElementById("name").value
     const model =  document.getElementById("Model").value
     const imageURL =  document.getElementById("image-url").value
     const Description =  document.getElementById("Description").value
     const price =  document.getElementById("price").value
    
     console.log(name,model,imageURL,Description,price,);
     fetch("http://localhost:3000/carsData",{
          method:"POST",
          headers:{"content-Type":"application/JSON"},
          body:JSON.stringify({
               name:name,
               Model:Model,
               imageURL:imageURL,
               Description:Description,
               price:price

          })
     })
.then(data => data.json())
.then(res => {
     for (const car of res) {
          renderOneCar(car)
          
     }
     alert("post added successfully")
})
 console.log(  );


} )









// // initial render 
// // get data and render cars to doms
function initialize(){
     carData.forEach(car=>renderOneCar(car));
     console.log(initialize);


}

// initialize();

