'use strict';

// class APIService {
//   constructor (Restangular, ToastService){
//     //  Content negotiation
//     let headers = {
//       'Content-Type': 'application/json'
//     };
//     return Restangular.withConfig((RestangularConfigurer)=>{
//       RestangularConfigurer
//         .setBaseUrl('/api/')
//         .setDefaultHeaders(headers)
//         .setErrorInterceptor((response)=>{
//           /*  Display Error message if server response was :
//            422 = Unprocessable Entity (WebDAV; RFC 4918)
//            OR
//            401 = Unauthorized (RFC 7235)
//            */
//           if(response.status === 422 || response.status === 401 ){
//             for (let error in response.data.errors){
//               return ToastService.error('Error', response.data.errors[error][0]);
//             }//end-for
//           }//end-if
//           /*
//            if server response is : 500 =  Internal Server Error
//            */
//           if (response.status === 500 ){
//             return ToastService.error('Error', response.statusText);
//           }
//         })
//
//       ;
//     });
//
//   }
// }
// angular.module('mokaApp')
//   .service('API', APIService);
