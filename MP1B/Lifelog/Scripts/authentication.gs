function doGet(e) {
  // Get the email and password from the query parameters
  var email = e.parameter.email;
  var password = e.parameter.password;

  // Get the active spreadsheet
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();

  // Get the range of email and password columns
  var emailColumn = sheet.getRange("A:A").getValues(); // Assuming email is in column A
  var passwordColumn = sheet.getRange("B:B").getValues(); // Assuming password is in column B

  // Loop through the email and password columns to check for a match
  for (var i = 0; i < emailColumn.length; i++) {
    if (emailColumn[i][0] == email && passwordColumn[i][0] == password) {
      return ContentService.createTextOutput("Login successful").setMimeType(ContentService.MimeType.TEXT);
    }
  }

  // If no match found, return failure message
  return ContentService.createTextOutput("Invalid email or password").setMimeType(ContentService.MimeType.TEXT);
}
