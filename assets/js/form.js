// // $(document).ready(function(){
// //     $("#contactbtn").click(function () {
// //         var data = {
// //             "name": "jahgsdjad",
// //             "email": "akjbd@gmail.com",
// //             "subject": "helloasjhkjas",
// //             "message":"ajdbakjsbkjabljsb"
// //         }
// //       $.post({url: "https://morning-wildwood-74823.herokuapp.com/api/contact", data,function(result){
// //           console.log("success");
// //       }});
// //     });
// //   });
// !(function($) {
//     "use strict";
   
    
//     var $cname = $('#name');
//     var $cemail = $('#email');
//     var $csubject = $('#subject');
//     var $cmessage = $('message');
//     $.ajax({ 
//         $("#contactbtn") . on ('click', function() {
            
//             var order = {
//                 name : $cname.val(),
//                 email: $cemail.val(),
//                 subject: $csubject.val(),
//                 message: $cmessage.val()
            
//             }; 
//             $.ajax({
//                 type: "POST",
//                 url: "https://morning-wildwood-74823.herokuapp.com/api/contact",
//                 data: order,
//                 success: function () {
//                     alert("success");
//                 },
//                 error:  function () {
//                     alert("failed");
//                 }
//             });
//     }),
//     });
// });
// $(document).ready(function () {
//     $("#save").click(function () {
//         var contact = new Object();
//         contact.name = $('#name').val();
//         contact.email = $('#email').val();
//         contact.subject = $('#subject').val();
//         contact.message = $('#message').val();
//         $.ajax({
//             url: 'https://morning-wildwood-74823.herokuapp.com/api/contact',
//             type: 'POST',
//             data: JSON.stringify(contact),
//             contentType: 'application/json; charset=utf-8',
//             dataType: 'json',
//             async: false,
//             success: function (data, textStatus, xhr) {
//                 console.log(data);
//             },
//             error: function (xhr, textStatus, errorThrown) {
//                 console.log('Error in Operation');
//             }
//         });
//     });
// });  