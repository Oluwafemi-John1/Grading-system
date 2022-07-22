function gradeMe(){
    var scoreOfUser = Number(userScore.value)
    var songfail = new Audio ("audio/AUD-20200714-WA0013.m4a")
    var songpass = new Audio ("audio/AUD-20200621-WA0012.m4a")
    var songaverage = new Audio ("audio/AUD-20200616-WA0019.mp3")
    var songcredit = new Audio ("audio/AUD-20200617-WA0066.mp3")
    var songgood = new Audio ("audio/mixkit-crowd-in-church-applauding-484.wav")
    var songexcellent = new Audio ("audio/mixkit-ending-show-audience-clapping-478.wav")

    if (scoreOfUser==""){
        J.value = "INVALID"
    }
    else if(scoreOfUser>=0 && scoreOfUser<40) {
        // alert(display.value)
        J.value = "F - Fail🥴"
        // alert("Fail")
        songfail.play()
        J.style.color = "red"
    }
    else if(scoreOfUser>=40 && scoreOfUser<45){
        J.value = "E - Pass😔"
        songpass.play()
        J.style.color = "crimson"
        // alert("Pass")
    }
    else if(scoreOfUser>=45 && scoreOfUser<50){
        J.value = "D - Average😬"
        songaverage.play()
        J.style.color = "orange"
        // alert("Average")
    }
    else if(scoreOfUser>=50 && scoreOfUser<60){
        J.value = "C - Credit🤔"
        songcredit.play()
        J.style.color = "chartreuse"
        // alert("Credit")
    }
    else if(scoreOfUser>=60 && scoreOfUser<70){
        J.value = "B - Good🙂"
        songgood.play()
        J.style.color = "green"
        // alert("Good")
    }

    else if(scoreOfUser>=70 && scoreOfUser<=100){
        J.value = "A - Excellent😀"
        songexcellent.play()
        J.style.color = "green"
        // alert("Excellent")
    }
   
    else{
        J.value = "Not recognised"
        J.style.color = "black"
        // alert("Unrecognised")
    }
    }