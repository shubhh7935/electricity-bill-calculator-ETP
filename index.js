function CalculateBill(){
  var name = document.getElementById("name").value;
  var month = document.getElementById("month").value;
  var units = document.getElementById("units").value;
  var cost = document.getElementById("cost").value;

  var TotalCost = units*cost;

  var bill = name + "your electricity bill for "+ month + " is " + TotalCost + "Rs.";

  document.getElementById("result").innerHTML = bill

}

