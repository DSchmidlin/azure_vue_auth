# azure_vue_auth
This is an example Vue app that uses Azure B2C for user Authentication.

# Background
Building on the example from Sergey Migalnikov [Using Vuejs with Azure Active Directory B2C](https://www.sergeydotnet.com/vuejs-with-azure-ad-b2c/) I have created this example project that leverages the Vuex store instead of adding it directly to the Vue app through a prototype.  Additionally the [active-directory-b2c-javascript-msal-singlepageapp](https://github.com/Azure-Samples/active-directory-b2c-javascript-msal-singlepageapp/blob/master/index.html) project from @github/Azure-Samples was also a big help in getting this to work.

# Setup
Once you clone this repo you will need the following pieces of information added to your .env.local file and they can be found in your Azure AD B2C setup.
- Your application id
- Your Resource Name
- Your B2C Flow Name
- A Read scope

## Application id
Once you have created an application in Azure AD B2C you can find your application id under the 'Applications' section.

[](docs/apiexample.png)
