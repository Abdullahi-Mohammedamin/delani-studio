$(function(){

    $("#col-md-4-1").click(function(){
        $(".hidden1").slideToggle(1600) 
        $(".img1").slideToggle(1600)       
    });

    $("#col-md-4-2").click(function(){
        $(".hidden2").slideToggle(1600)
        $(".img2").slideToggle(1600)
    });
    
    $("#col-md-4-3").click(function(){
        $(".hidden3").slideToggle(1600)
        $(".img3").slideToggle(1600)
    });

    $(".work4-image").hover(function(){
        $("#work4-overlay").toggle()
        $("#work4-img").toggle()
    });

    $(".work3-image").hover(function(){
        $("#work3-overlay").toggle()
        $("#work3-img").toggle()
    });

    $(".work2-image").hover(function(){
        $("#work2-overlay").toggle()
        $("#work2-img").toggle()
    });

    $(".work1-image").hover(function(){
        $("#work1-overlay").toggle()
        $("#work1-img").toggle()
    });

    $(".work5-image").hover(function(){
        $("#work5-overlay").toggle()
        $("#work5-img").toggle()
    });

    $(".work6-image").hover(function(){
        $("#work6-overlay").toggle()
        $("#work6-img").toggle()
    });

    $(".work7-image").hover(function(){
        $("#work7-overlay").toggle()
        $("#work7-img").toggle()
    });

    $(".work8-image").hover(function(){
        $("#work8-overlay").toggle()
        $("#work8-img").toggle()
    });
    
});
    
       /* $("form#form34A").submit(function(event){
          // event.preventDefault();
          var name = $("input#MERGE1").val();
          var email = $("input#MERGE0").val();
          var message = $("textarea#comment").val();
          if ($("input#MERGE1").val() && $("input#MERGE0").val()){
            alert (name + ", we have received your message. Thank you for reaching out to us.");
          }
          else {
            alert("Please enter your name and email!");
          }
    
        });








});
