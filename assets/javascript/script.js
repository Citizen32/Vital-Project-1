
$(document).ready(function() {

  $('select').material_select();

    // FOR GENDER SELCTION CREATE AND IF/ELSE STATEMENT
    // 


// SEARCH BUTTON=============================================================================//

  $("#submitBtn").on("click", function(e) {

    e.preventDefault(); // so we dont submit the form and reload the page


// FIRST ROW CALL =================================================================================//
    var apiKey = "5b1a0079012c3623a29adf4df12cf74e";
    var practice = $("#practices").val();
    var queryURL = "https://api.betterdoctor.com/2016-03-01/practices?name=" + practice + "&location=tx-houston&skip=0&limit=5&user_key=5b1a0079012c3623a29adf4df12cf74e"

    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {

        console.log(response.data[0].name);
        console.log(response.data)



      // Chaining several jQuery methods to achieve the following:
         var firstRowTds = $(".responsive-table") // Get a reference to the table as a jQuery object
          .children() // Get all of table's immediate children as an array
          .eq(1) // Get element at the first index of this returned array (the <tbody>)
          .children("tr") // Get an array of all <tr> children inside the returned <tbody>
          .eq(0) // Get the 0th child of this returned array (the first <tr>)
          .children("td"); // Get an array of all <td> children inside the returned <tr>

      // Setting the inner text of each <td> in the firstRowTds array
          firstRowTds.eq(0).text(response.data[0].doctors[0].profile.first_name + ", " + response.data[0].doctors[0].profile.last_name);
          console.log(response.data[0].doctors[0].profile.first_name + ", " + response.data[0].doctors[0].profile.last_name);

          firstRowTds.eq(1).text(response.data[0].doctors[0].specialties[0].description); // this is an object array
          console.log(response.data[0].doctors[0].specialties[0].description);

          firstRowTds.eq(2).text(response.data[0].phones[0].number);
          console.log(response.data[0].phones[0].number);

          firstRowTds.eq(3).text(response.data[0].visit_address.street + ", " + response.data[0].visit_address.zip);

        });


// SECOND ROW CALL ==================================================================================//
    var apiKey = "5b1a0079012c3623a29adf4df12cf74e";
    var practice = $("#practices").val();
    var queryURL = "https://api.betterdoctor.com/2016-03-01/practices?name=" + practice + "&location=tx-houston&skip=0&limit=5&user_key=5b1a0079012c3623a29adf4df12cf74e"

    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {

        console.log(response.data[1].name);
        console.log(response.data)

        var secondRowTds = $(".responsive-table")
          .children() 
          .eq(1)
          .children("tr")
          .eq(1)
          .children("td");

          secondRowTds.eq(0).text(response.data[1].doctors[0].profile.first_name + ", " + response.data[1].doctors[0].profile.last_name);
          console.log(response.data[1].doctors[0].profile.first_name + ", " + response.data[1].doctors[0].profile.last_name);

          secondRowTds.eq(1).text(response.data[1].doctors[0].specialties[0].description); // this is an object array
          console.log(response.data[1].doctors[0].specialties[0].description);

          secondRowTds.eq(2).text(response.data[1].phones[0].number);
          console.log(response.data[1].phones[0].number);

          secondRowTds.eq(3).text(response.data[1].visit_address.street + ", " + response.data[1].visit_address.zip);

      });


// THIRD ROW CALL ===================================================================================//
    var apiKey = "5b1a0079012c3623a29adf4df12cf74e";
    var practice = $("#practices").val();
    var queryURL = "https://api.betterdoctor.com/2016-03-01/practices?name=" + practice + "&location=tx-houston&skip=0&limit=5&user_key=5b1a0079012c3623a29adf4df12cf74e"

    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {

      console.log(response.data[2].name);
      console.log(response.data)
      
      var thirdRowTds = $(".responsive-table")
        .children()
        .eq(1)
        .children("tr")
        .eq(2)
        .children("td");

        thirdRowTds.eq(0).text(response.data[2].doctors[0].profile.first_name + ", " + response.data[2].doctors[0].profile.last_name);
        console.log(response.data[2].doctors[0].profile.first_name + ", " + response.data[2].doctors[0].profile.last_name);

        thirdRowTds.eq(1).text(response.data[2].doctors[0].specialties[0].description); // this is an object array
        console.log(response.data[2].doctors[0].specialties[0].description);

        thirdRowTds.eq(2).text(response.data[2].phones[0].number);
        console.log(response.data[2].phones[0].number);

        thirdRowTds.eq(3).text(response.data[2].visit_address.street + ", " + response.data[2].visit_address.zip);

      });






// GENDER PATH: ======================== response.data[0].doctors[0].profile.gender//
var url = 'https://api.betterdoctor.com/2016-03-01/practices?name=%22dentist%22&location=tx-houston&skip=0&limit=5&user_key=5b1a0079012c3623a29adf4df12cf74e';

fetch(url)
  .then(function(data){
    return data.json()
  })
.then(function(response){
  var arr  = response.data;
  for(var i = 0; i < arr.length; i++){
    var profile = arr[i].doctors[0].profile;
    filterMale(profile);
  }
});


var males = [];
var females = [];


function filterMale(profile){
  
  for(var status in profile){
    if(profile[status] === "male"){
      males.push(profile)
    } else if(profile[status] === 'female'){
      females.push(profile)
    } 
  }
  
  console.log(females);
  console.log(males);
}
 



  });
// ZIP CODE SELECTOR=============================================================================//



});