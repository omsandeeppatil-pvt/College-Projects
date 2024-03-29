function doGet(e) {

  var data1 = e.parameter.data1;
  var data2 = e.parameter.data2;
  var data3 = e.parameter.data3;
  var data4 = e.parameter.data4;
  var data5 = e.parameter.data5;
  var data6 = e.parameter.data6;

  var currentDate = new Date();

  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('emotions');

  sheet.appendRow([currentDate, data1,data2,data3,data4,data5,data6]);
  
  return ContentService.createTextOutput("Data added successfully.");
}
