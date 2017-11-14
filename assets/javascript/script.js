
$(document).ready(function() {

  $('select').material_select();


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

      });*/


    function initMap() {  
                          
            var uluru = {lat: 29.7604, lng: -95.3630556};
            var map = new google.maps.Map(document.getElementById('map'), {
              zoom: 12,
              center: uluru
            });
            var marker = new google.maps.Marker({
              position: uluru,
              map: map
            });
          }

  $(document).ready(function () {
        
       $('address').each(function () {
            var link = "<a href='http://maps.google.com/maps?q=" + encodeURIComponent( $(this).text() ) + "' target='_blank'>" + $(this).text() + "</a>";
            $(this).html(link);
        });
    });

    function initMap() {
                      
                         //  Dentist 3 locations
      var family = {
        info: '<strong>Lu Huan, DDS<br>\r\
              FAMILY DENTISTRY<br>\
              13145 Veterans Memorial Dr, Houston, TX 77014<br>\
              <a href="https://goo.gl/maps/jKNEDz4SyyH2">Get Directions</a>',
        lat: 29.978067,
        long: -95.4911
      };

     var artistic = {
        info: '<strong>Robert Edwin Sawyer, DDS</strong><br>\r\
              Artistic Dentistry<br>\r\
               1640 Fountain View Dr, Houston, TX 77057<br>\
              <a href="https://goo.gl/maps/QGUrqZPsYp92">Get Directions</a>',
        lat:  29.75059,
        long: -95.48642
      };

     var lakewood = {
        info: '<strong>Alia Chakaki, DDS </strong><br>\r\
            Lakewood Dentistry<br>\
            11550 Louetta Rd, Houston, TX 77070<br>\
            <a href="https://goo.gl/maps/PHfsWTvgKa92">Get Directions</a>',
        lat:  29.711448,
        long: -95.399986
      };


   
    // 3 location for cancer
        var anderson = {
        info: '<strong>Janice N. Cormier, MD</strong><br>\r\
              MD Anderson Cancer Center<br>\r\
              1515 Holcombe Blvd, Houston, TX 77030<br>\
              <a href="https://goo.gl/maps/QGUrqZPsYp92">Get Directions</a>',
        lat:  29.707228,
        long: -95.39719
      };

         var presicion = {
        info: '<strong>Tse-Kuan Yu, MD</strong><br>\r\
              Precision Cancer Center<br>\r\
              10405 Katy Fwy Dte 150E, Houston, TX 77024<br>\
              <a href="https://goo.gl/maps/QGUrqZPsYp92">Get Directions</a>',
        lat:  29.78263,
        long: -95.55446
      };

        var institute = {
        info: '<strong>Maria A. Scouros, MD</strong><br>\r\
              HOUSTON CANCER INSTITUTE PA<br>\r\
              1220 Blalock Rd Ste 300, Houston, TX 77055<br>\
              <a href="https://goo.gl/maps/QGUrqZPsYp92">Get Directions</a>',
        lat:  29.79026,
        long: -95.52101
      };

             //  3 location for lung doctor
        var northwest = {
        info: '<strong>Neeta Singla, MD</strong><br>\r\
              Pulmonary Clinic Of Northwest<br>\r\
              11720 FM 1960 Rd W, Houston, TX 77065<br>\
              <a href="https://goo.gl/maps/QGUrqZPsYp92">Get Directions</a>',
        lat:  29.92652,
        long: -95.595719
      };

         var northloop = {
        info: '<strong>Rajesh Rethnam, MD</strong><br>\r\
              Northwest Pulmonary Associates<br>\r\
               1631 North Loop W Ste 450, Houston, TX 77008<br>\
              <a href="https://goo.gl/maps/QGUrqZPsYp92">Get Directions</a>',
        lat:  29.812184,
        long: -95.430693
      };

          var fannin= {
        info: '<strong>Joseph Rosen, MD<br>\r\
              Houston Pediatric Pulmonary Associates<br>\r\
               7400 Fannin St Ste 1130, Houston, TX 77054<br>\
              <a href="https://goo.gl/maps/QGUrqZPsYp92">Get Directions</a>',
        lat:  29.69447,
        long: -95.40118
      };




     var locations = [  
          // dentist
          [family.info, family.lat, family.long, 0],
          [artistic.info, artistic.lat, artistic.long, 1],
          [lakewood.info, lakewood.lat, lakewood.long, 2],

         // cancer
          [anderson.info, anderson.lat, anderson.long, 3],
          [presicion.info, presicion.lat, presicion.long, 4],
          [institute.info, institute.lat, institute.long, 5],

         // pulmonary
          [northwest.info, northwest.lat, northwest.long, 6],
          [northloop.info, northloop.lat, northloop.long, 7],
          [fannin.info, fannin.lat, fannin.long, 8],
        ];






     var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: new google.maps.LatLng(29.7604, -95.3698),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });

     var infowindow = new google.maps.InfoWindow({});

     var marker, i;

     for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(locations[i][1], locations[i][2]),
          map: map
        });

       google.maps.event.addListener(marker, 'click', (function (marker, i) {
          return function () {
            infowindow.setContent(locations[i][0]);
            infowindow.open(map, marker);
          }
        })(marker, i));
      }
    }



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