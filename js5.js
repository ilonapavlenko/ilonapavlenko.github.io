window.addEventListener("DOMContentLoaded", function (event)
{
    console.log("DOM fully loaded and parsed");
    function calculate()
    {
        var count = document.getElementById("count").value;
        var price = document.getElementById("price").value;
        var res = document.getElementById("result");

        var err=/^(?!(0))\d+$/;
        if(count.match(err)===null || price.match(err)===null)
        {
            alert("Неккоректный ввод");
            res.innerHTML="Ошибка";
        }
        else
        {
            res.innerHTML = price*count;
        }
    }
    var b = document.getElementById("button1");
    b.addEventListener("click", calculate);
}
);
