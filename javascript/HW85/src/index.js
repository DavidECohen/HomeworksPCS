import $ from "jquery";

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        data.forEach(user => {
            $(`<div id="name">

         <h4>${user.name}</h4> 
         <h5>${user.website}</h5>
         <h6>${user.company.name}</h6>
        <hr>
        
           </div>`).appendTo('#row').click(() => {
                document.getElementById("card").innerHTML = "";
                fetch('https://jsonplaceholder.typicode.com/posts?userId=' + user.id)
                    .then(response => response.json())
                    .then(post => {
                        post.forEach(poster => {
                            // console.log(poster.id),

                            $(`<div>      
  
           <h4>${poster.body}<button id="button${poster.id}"> show comments.. </button><br></h4>


                                                    </div>`).appendTo('#card')

                            $(`#button${ poster.id }`).click(
                                function() {
                                    $(`#button${ poster.id }`).html("hide comments");
                                    if ($(`#button${ poster.id }`).value = "show comments..") {
                                        fetch('https://jsonplaceholder.typicode.com/comments?postId=' + poster.id)
                                            .then(response => response.json())
                                            .then(c => {
                                                c.forEach(comment => {
                                              $(` <div>
                                    
                                                <h4> ${ comment.body } </h4>       
                                    
                                    
                                                </div>`).appendTo('#footer')
                                                })
                                            })
                                    } else {
                                        $(`<div style="display:none"></div>`)
                                    }
                                   




                                    //         fetch('https://jsonplaceholder.typicode.com/comments?postId=' + poster.id)
                                    //         .then(response => response.json())
                                    //         .then(c => {
                                    //             c.forEach(comment => {
                                    //                 $(` <div>

                                    //         <h4> ${ comment.body } </h4>       

                                    //         </div>`).appendTo('#footer')
                                    //             })
                                    //         })
                                    //     },
                                    // );





                                    // function setter() {
                                    //     document.getElementById(`#button${ poster.id }`).innerText = 'hide comments'

                                    //     setter();

                                    //  $(`#button${ poster.id }`).click(setter());
                                })


                        });
                    });

            });

        });

    });

//     if ($(`#button${ poster.id }`).html == "show comments..") {
//         fetch('https://jsonplaceholder.typicode.com/comments?postId=' + poster.id)
//             .then(response => response.json())
//             .then(c => {
//                 c.forEach(comment => {
//                     //console.log(c, comment.body)
//                     $(` <div>

//         <h4> ${ comment.body } </h4>       


//         </div>`).appendTo('#footer')
//                 })
//             })
//     } else { document.getElementById('#footer') = '' }
//     // flag = false
// );



//