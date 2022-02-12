/**
 * Transcript
 */
var url = "https://api.symbl.ai/v1/conversations/5050558592319488/messages";

// Set headers 
var headers = new Headers();

headers.append('Authorization', 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlFVUTRNemhDUVVWQk1rTkJNemszUTBNMlFVVTRRekkyUmpWQ056VTJRelUxUTBVeE5EZzFNUSJ9.eyJodHRwczovL3BsYXRmb3JtLnN5bWJsLmFpL3VzZXJJZCI6IjUwNTMyOTIwMzcwMTM1MDQiLCJpc3MiOiJodHRwczovL2RpcmVjdC1wbGF0Zm9ybS5hdXRoMC5jb20vIiwic3ViIjoiVk5pVElONkhITUdUa1ZTdmlvN05qSWd4Q1dsZUZ0M29AY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vcGxhdGZvcm0ucmFtbWVyLmFpIiwiaWF0IjoxNjQ0NjQ4NDExLCJleHAiOjE2NDQ3MzQ4MTEsImF6cCI6IlZOaVRJTjZISE1HVGtWU3ZpbzdOaklneENXbGVGdDNvIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.WW1oKYZqw9L2fZM7i8tM59aaYNq_kwDtnMeCxr7lU7hY5PzVPZCUzEmF2-T0ClsQnTU4Zawg-mVLJxDSfUDv6TQ9BMjXiLaLJFGOd7dBBob-ifhNjX8H9hnC2kaTaefGLfUq2CDs6kxOFnjz852HeP7mhBdM5EzVbycymCe4ut0antYRUtiXsCpvadkUR0rhlvdg_2RxqfF2og75Lt6otjUuQuV-k0fcK-wTyeCp91itz5y9YYlTSZkdmbBSRMK2lBTIxY7UM6Wfgcr4_35uEThs7QYg8Nhz0KD7BdPL_71niK6HBRiEnVofCONw4FnO8MkBS2_C16vF1w5lna5OuA');

var data = {
  method: "GET",
  headers: headers,
};

var request = new Request(url, data);
fetch(request)
  .then(response => {
    console.log('response', response);
    if (response.status >= 200 && response.status < 400) {
      return response.json();
    } else {
      throw new Error('Something went wrong on api server!');
    }
  })
  .then(response => {
    console.log('Success');
    // ...
  }).catch(error => {
    console.error(error);
  });