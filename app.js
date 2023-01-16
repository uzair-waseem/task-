



$(document).ready(function(){
    $("#inp").click(function(){
 let input = document.getElementById("input").value;
let inp = document.getElementById("inp");


window.fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${input}`)
    .then(result => result.json())
    .then(result => {
        // let obj = result.data;
        // let myJson = JSON.stringify(obj);
        // document.write(myJson);
        // document.write(JSON.parse(myJson))

        // console.log(result.data);
        let container = document.getElementById("container");
        let html = '';

        result.meals.forEach(element => {
            // document.write(element.t1 + "vs" + element.t2 + "<br/>" + element.status + "<br/>" + element.matchType)

            html += `  
            <div class= "col-lg-4 col-md-4 col-12 col-sm-6">


            <div class="card " ">
 <img src="${element.strMealThumb}" class="card-img-top" >
 <div class="card-body">
     <h5 class="card-title"> ${element.strMeal}  </h5>
   
 </div>

</div>

</div>


`

        }




        )

        container.innerHTML = html



            ;



    })
    .catch(err => {
        console.log("An error occured. Please check your code", err);
    });


    });
  });