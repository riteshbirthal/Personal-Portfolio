function doPost(e) {
    try {
      const data = JSON.parse(e.postData.contents);
      const { name, email, message } = data;
      
      // Save data to Google Sheet
      const sheet = SpreadsheetApp.openById("YOUR_SPREADSHEET_ID").getSheetByName("Sheet1");
      sheet.appendRow([new Date(), name, email, message]);
      
      // Send confirmation email
      MailApp.sendEmail({
        to: email,
        subject: "Thank you for contacting us",
        htmlBody: `<p>Hi ${name},</p><p>Thanks for reaching out. We'll get back to you soon.</p>`
      });
      
      return ContentService.createTextOutput(JSON.stringify({ status: 'success' }))
        .setMimeType(ContentService.MimeType.JSON);
    } catch (error) {
      return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: error.message }))
        .setMimeType(ContentService.MimeType.JSON);
    }
  }
  