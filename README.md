# angular-cors-adal-o365-node sample <br>


This sample demonstrates:<BR>
1-a single page application (SPA) using Angular and ADAL.js (Active Directory Authentication Library) to authenticate against AAD (Azure Active Directory) <BR>
2-Obtaining an access token and calling a Node js web api that will validate that token against AAD <BR>
3-Then, from the client code, the app does a CORS call to OneDrive for business using the File REST API <BR>



<BR>

Setting things up: <BR>

1-Make sure you have a valid Office 365 subscription <BR>
2-In Azure, create a web application in the same Azure Active Directory used by your Office 365 subscription<BR>
3-In that application, go to the configuration tab and click at "add application" at the "permissions to other applications" section. Add Office 365 SharePoint Online and check the "Run file search queries as a user" delegated permissions. Then save the application<BR>
4-Download the application's manifest and change the oauth2AllowImplicitFlow to true. Then upload the manifest back. This will enable CORS in our scenario<BR>
5-Make sure the redirect URI set for this application matches the URL where this website will run. For example, if you run as localhost:1337 (which is how this Visual Studio project is configured), make sure the reply URL also looks like "http://localhost:1337"<BR>
6-Copy the client ID from this app in the Azure Portal and use it both in the angularApp.js, replacing the current client ID value in the ADAL setting and also in the config.js in the audience value. The first setting is done so your Angular JS app can authenticate. The second setting is so your Node.JS web api can validate that token.<BR>
7-In config.js, set the authority correctly: For example, if your tenant is "mycompany.onmicrosoft.com" then the authority should be: https://login.microsoftonline.com/mycompany.onmicrosoft.com <BR>
8-Likewise, in the angularApp.js set the tenant value accordingly.For example, if your tenant is "mycompany.onmicrosoft.com" then the tenant setting should be: mycompany.onmicrosoft.com <BR>
9-Still in the angularApp.js, setup the url for your OneDrive for business. For example, if your tenant is "mycompany.onmicrosoft.com" then likely your OneDrive for Business "my" folder should be on: https://mycompany-my.sharepoint.com/_api/ (this may differ depending on your settings. For additional info, go to sharepoint.com and logon with your admin account, then check the SharePoint admin settings) <BR>
10-in searchSvc.js, you also need to make the same setting for the baseUri variable. If your sharepoint my folder is at 'https://mycompany-my.sharepoint.com/_api/' then the base Uri should be 'https://mycompany-my.sharepoint.com/_api/me/' <BR>
11-Make sure the user you will use to run this demo has a valid O365 license assigned to it. Under the Office 365 administrator portal, check the list of users, select the user and make sure a license is assigned.<BR>










