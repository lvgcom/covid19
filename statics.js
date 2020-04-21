var data = "";
$(document).ready(function() {
  getHealthData();
});
/**
 *Gets data from API
 **/
function getHealthData() {
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "https://www.hpb.health.gov.lk/api/get-current-statistical",
    data: {
      action: "get_data"
    },
    success: function(response) {
      //getting value from server
      var value = response.data;

      data = "<h5>local_total_cases :</h5><b>" + value['local_total_cases'] +"<h5> Hospital :</h5><b>" + value['local_total_number_of_individuals_in_hospitals'] + "</b><br/><h5>local_deaths :</h5><b> " + value['local_deaths'] + "</b><br/><h5> local_new_deaths : </h5><b>" + value['local_new_deaths'] + "</b><br/><h5>local_recovered : </h5> <b>" + value['local_recovered'] + "</b><br/><h5>local_new_cases :</h5> <b>" + value['local_new_cases'] + "</b>";
      //putting values in div with id="data"
      $("#data").html(data);
      //adding value separately 
      $("#somedate").text(value['update_date_time'])
      $("#sometotal").text(value['local_total_cases'])
      $("#someactive").text(value['local_active_cases'])
          
      $("#somenew").text(value['local_new_cases'])
      $("#somehos").text(value['local_total_number_of_individuals_in_hospitals'])
      $("#somedeath").text(value['local_deaths'])
      $("#somerecover").text(value['local_recovered'])
        }
  });
}
