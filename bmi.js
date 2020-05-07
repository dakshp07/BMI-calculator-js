$(".submit").on("click",function even(){
    if ($(".wt").val()=="" && $(".ht").val()=="")
    {
        alert("Please Fill The Fields");
    }
    else
    {
        var weigth=$(".wt").val();
        var height=$(".ht").val();
        var bmi=weigth/(height*height);
        $(".BMI").val(bmi);
        if ($(".BMI").val()<25)
        {
            $(".mean").val("Brilliant!!!");

        }
        if($(".BMI").val()>25 && $(".BMI").val()<=29)
        {
            $(".mean").val("You Can Do Better!!!");
        }
        if($(".BMI").val()>=30)
        {
            $(".mean").val("Start Doing Exercise!!!");
        }
        
    }
});
$(".clear").on("click",function odd(){
    location.reload(false);
});