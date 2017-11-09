
$(document).ready(function() {

  $('select').material_select();


// PRACTICE SELECTOR=============================================================================//

  $("#submitBtn").on("click", function(e) {

    e.preventDefault(); // so we dont submit the form and reload the page

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
      firstRowTds.eq(0).text(response.data[0].name);

      firstRowTds.eq(1).text(response.data[0].phones.number); // this is an object array

      firstRowTds.eq(2).text(response.data.email);
    });

    /*var secondRowTds = $("table")
        .children()
        .eq(1)
        .children("tr")
        .eq(1)
        .children("td");

      secondRowTds.eq(0).text(response.data[0]).name;

      secondRowTds.eq(1).text(response.data);

      secondRowTds.eq(2).text(response.data);
    });*/


  });
// ZIP CODE SELECTOR=============================================================================//




// GENDER SELECTOR===============================================================================//






});