$(document).ready(
    function () {
        // global variables
        var beerAlc = 0.54
        var wineAlc = 0.6
        var shotAlc = 0.6
        var alcAbsorp = 7.5
        var absorbRate = 0.015

        // add event handlers
        $("#submitButton").click(calcBac)


        // all functions (program logic)
        function calcBac() {

            //get beer
            var totalBeer = parseInt($("#numBeers").val());

            //get wine
            var totalWine = parseInt($("#numWine").val());

            //get shots
            var totalShot = parseInt($("#numShots").val());

            //get weight
            var totalWeight = parseInt($("#numWeight").val());

            //get hours
            var totalHours = parseInt($("#numHours").val());

            //calculate alcohol total

            var alcTotal = (totalBeer * beerAlc) + (totalWine * wineAlc) + (totalShot * shotAlc)

            //calc absorption rate

            var absorbAlc = alcTotal * alcAbsorp

            //divide by weight
            var weightAlc = absorbAlc / totalWeight

            //subtract for absorption

            var alcAbsorption = weightAlc - (totalHours * absorbRate);

            //display BAC
            $("#totalBAC").text(alcAbsorption.toFixed(3));

            //show in styles
            $(".display").show();


        }


    }
);