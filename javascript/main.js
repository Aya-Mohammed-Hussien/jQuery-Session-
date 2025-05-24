//show hide toggle
// $(".test").show(1000);
// $(".test").hide(1000);
// $(".test").toggle(1000);
// slideUP slideDown slideToggle
// $(".test").slideUp(1000);
// $(".test").slideDown(1000);
// $(".test").slideToggle(1000)
//fadeIn fadeOut fadeToggle
// $(".test").fadeIn(10000)
// $(".test").fadeTo(5000 , 0.7); //0.7 is the opacity i want the element to have and in this case display:none is not an indicator

//animate (have 2 params the first one is object(this object is not a css property it takes only numeric values) in which i put the properties to be changed , the second one is the time i ms )
// $(".test").animate({ width: "100%", height: "100vh", opacity: "0.5" }, 1000);

// jQuery methods for events
// $(".test").click(function(){
//     console.log("Helloooo")
// })

// $("button").click(function(){
//     console.log("Clicked")
// })

// $("button").click(function(){
//     // console.log("Clicked")
//     // $(".test").toggle(1000);
//     $(".test").slideToggle(1000)
// })

// to apply any jQuery Method on any element even without selecting it by jQuery , we can use $() and write any js selector inside and then  apply the jQuery Method
// when you apply 2 effects on 2 different elements (effects start at the same time)
// but if you apply it on the same element , they will be executed sequentialy and jQuery supports chaining as long as we applay the different effects on the same element 
// $("button").click(function () {
//   // e.target or this
//   // e.target === this
//   // console.log("Clicked");
//   // any jQuery method may take another parameter (callback function) that function will be executed when the main function finishs
//   $(this).fadeOut(3000, function () {
//     $(".test").slideToggle(1000);
//   });
// });

// $(".test").hide(1000);
// $(".test").show(1000);
// $(".test").toggle(1000);
// $(".test").toggle(1000);


//Exercise 
// $("section").animate({width:"100%"} , 1000).animate({height:"100vh"} , 1000 , function (){
//     $(".container > h3").show(1000 , function(){
//         $("p").fadeIn(1000 , function (){
//             $(".col-md-4").slideDown(1000 , function(){
//                 $("h3").show(1000)
//             });
//         }
//         );
//     });
// })



// jQuery Methods => Functions we can apply on any element selected by jQuery 
// 1- Getters / setters 
//  html()    html("Content")
//  text()    text("content")
//  attr(the name of attr)   attr(the name of attr , the new value)
//  val()      val(new value)
//  css(name of property)    css(name od property , new value)

// $(".test").html("<h2>Hello World</h2>");
// console.log($(".test").html())

// $(".test").text("<h2>Hello World</h2>");
// console.log($(".test").text())

// console.log( $("img").attr("src"))
// $("img").attr("src" , "../images/meal-4.jpg")

// $("input").val("Aya Updated222");
// console.log($("input").val());

// console.log($(".test").css("backgroundColor"));
// $(".test").css("backgroundColor" , "red")