function setTitleBar() {
    let wkrName = document.getElementById("wkrName").value;
    let wkrNum = document.getElementById("wkrNum").value;
    document.getElementById("title-bar").innerHTML = ("PGCS Rating Form - " + wkrName + " : " + wkrNum);
}

function setMonthTitles() {
    //duplicate months being reported
    let m1 = document.getElementById("m1Set").value;
    if (m1 != "Select One") {
        document.getElementById("m1Dupe").innerHTML = m1;
        document.getElementById("m1Dupe2").innerHTML = m1;
        document.getElementById("m1Dupe3").innerHTML = m1;
        document.getElementById("m1Dupe4").innerHTML = m1;
    } else {
        document.getElementById("m1Dupe").innerHTML = "Month 1";
        document.getElementById("m1Dupe2").innerHTML = "Month 1"
    }
    let m2 = document.getElementById("m2Set").value;
    if (m2 != "Select One") {
        document.getElementById("m2Dupe").innerHTML = m2;
        document.getElementById("m2Dupe2").innerHTML = m2;
        document.getElementById("m2Dupe3").innerHTML = m2;
        document.getElementById("m2Dupe4").innerHTML = m2;
    } else {
        document.getElementById("m2Dupe").innerHTML = "Month 2";
        document.getElementById("m2Dupe2").innerHTML = "Month 2"
    }
    let m3 = document.getElementById("m3Set").value;
    if (m3 != "Select One") {
        document.getElementById("m3Dupe").innerHTML = m3;
        document.getElementById("m3Dupe2").innerHTML = m3;
        document.getElementById("m3Dupe3").innerHTML = m3;
        document.getElementById("m3Dupe4").innerHTML = m3;
    } else {
        document.getElementById("m3Dupe").innerHTML = "Month 3";
        document.getElementById("m3Dupe2").innerHTML = "Month 3"
    }
    let m4 = document.getElementById("m4Set").value;
    if (m4 != "Select One") {
        document.getElementById("m4Dupe").innerHTML = m4;
        document.getElementById("m4Dupe2").innerHTML = m4;
        document.getElementById("m4Dupe3").innerHTML = m4;
        document.getElementById("m4Dupe4").innerHTML = m4;
    } else {
        document.getElementById("m4Dupe").innerHTML = "Month 4";
        document.getElementById("m4Dupe2").innerHTML = "Month 4"
    }
    let m5 = document.getElementById("m5Set").value;
    if (m5 != "Select One") {
        document.getElementById("m5Dupe").innerHTML = m5;
        document.getElementById("m5Dupe2").innerHTML = m5;
        document.getElementById("m5Dupe3").innerHTML = m5;
        document.getElementById("m5Dupe4").innerHTML = m5;
    } else {
        document.getElementById("m5Dupe").innerHTML = "Month 5";
        document.getElementById("m5Dupe2").innerHTML = "Month 5"
    }
    let m6 = document.getElementById("m6Set").value;
    if (m6 != "Select One") {
        document.getElementById("m6Dupe").innerHTML = m6;
        document.getElementById("m6Dupe2").innerHTML = m6;
        document.getElementById("m6Dupe3").innerHTML = m6;
        document.getElementById("m6Dupe4").innerHTML = m6;
    } else {
        document.getElementById("m6Dupe").innerHTML = "Month 6";
        document.getElementById("m6Dupe2").innerHTML = "Month 6"
    }
    let m7 = document.getElementById("m7Set").value;
    if (m7 != "Select One") {
        document.getElementById("m7Dupe").innerHTML = m7;
        document.getElementById("m7Dupe2").innerHTML = m7;
        document.getElementById("m7Dupe3").innerHTML = m7;
        document.getElementById("m7Dupe4").innerHTML = m7;
    } else {
        document.getElementById("m7Dupe").innerHTML = "Month 7";
        document.getElementById("m7Dupe2").innerHTML = "Month 7"
    }
    let m8 = document.getElementById("m8Set").value;
    if (m8 != "Select One") {
        document.getElementById("m8Dupe").innerHTML = m8;
        document.getElementById("m8Dupe2").innerHTML = m8;
        document.getElementById("m8Dupe3").innerHTML = m8;
        document.getElementById("m8Dupe4").innerHTML = m8;
    } else {
        document.getElementById("m8Dupe").innerHTML = "Month 8";
        document.getElementById("m8Dupe2").innerHTML = "Month 8"
    }
    let m9 = document.getElementById("m9Set").value;
    if (m9 != "Select One") {
        document.getElementById("m9Dupe").innerHTML = m9;
        document.getElementById("m9Dupe2").innerHTML = m9;
        document.getElementById("m9Dupe3").innerHTML = m9;
        document.getElementById("m9Dupe4").innerHTML = m9;
    } else {
        document.getElementById("m9Dupe").innerHTML = "Month 9";
        document.getElementById("m9Dupe2").innerHTML = "Month 9"
    }
    let m10 = document.getElementById("m10Set").value;
    if (m10 != "Select One") {
        document.getElementById("m10Dupe").innerHTML = m10;
        document.getElementById("m10Dupe2").innerHTML = m10;
        document.getElementById("m10Dupe3").innerHTML = m10;
        document.getElementById("m10Dupe4").innerHTML = m10;
    } else {
        document.getElementById("m10Dupe").innerHTML = "Month 10";
        document.getElementById("m10Dupe2").innerHTML = "Month 10"
    }
    let m11 = document.getElementById("m11Set").value;
    if (m11 != "Select One") {
        document.getElementById("m11Dupe").innerHTML = m11;
        document.getElementById("m11Dupe2").innerHTML = m11;
        document.getElementById("m11Dupe3").innerHTML = m11;
        document.getElementById("m11Dupe4").innerHTML = m11;
    } else {
        document.getElementById("m11Dupe").innerHTML = "Month 11";
        document.getElementById("m11Dupe2").innerHTML = "Month 11"
    }
    let m12 = document.getElementById("m12Set").value;
    if (m12 != "Select One") {
        document.getElementById("m12Dupe").innerHTML = m12;
        document.getElementById("m12Dupe2").innerHTML = m12;
        document.getElementById("m12Dupe3").innerHTML = m12;
        document.getElementById("m12Dupe4").innerHTML = m12;
    } else {
        document.getElementById("m12Dupe").innerHTML = "Month 12";
        document.getElementById("m12Dupe2").innerHTML = "Month 12"
    }
}

// TODAYS DATE

/*function setDateField() {
var tD = new Date();
var datestr = (tD.getMonth()+ 1) + "/" + tD.getDate() + "/" + tD.getFullYear();
document.getElementById("reviewDate").innerHTML = datestr;
}*/


// --------------------
// Interactivity - GENERAL USE
// --------------------
// let okButton = document.getElementById('ok-button');
// okButton.addEventListener('click', runPgcsReport ());

function runPgcsReport() {
    "use strict";

//check for NW reduction amount

    console.log("======= NEW RUN ======");
// --------------------
// PREPARE FOR USE
// --------------------
//ACCURACY
//SET New Worker Reduction Amounts

//Reset SNAP Counters
    let acc1 = 0;
    let acc2 = 0;
    let acc3 = 0;
    let acc4 = 0;
    let acc5 = 0;
    let acc6 = 0;
    let acc7 = 0;
    let acc8 = 0;
    let acc9 = 0;
    let acc10 = 0;
    let acc11 = 0;
    let acc12 = 0;
    let caseReview1 = 0;
    let caseReview2 = 0;
    let caseReview3 = 0;
    let caseReview4 = 0;
    let caseReview5 = 0;
    let caseReview6 = 0;
    let caseReview7 = 0;
    let caseReview8 = 0;
    let caseReview9 = 0;
    let caseReview10 = 0;
    let caseReview11 = 0;
    let caseReview12 = 0;
    let caseError1 = 0;
    let caseError2 = 0;
    let caseError3 = 0;
    let caseError4 = 0;
    let caseError5 = 0;
    let caseError6 = 0;
    let caseError7 = 0;
    let caseError8 = 0;
    let caseError9 = 0;
    let caseError10 = 0;
    let caseError11 = 0;
    let caseError12 = 0;
    var accCount = 0;
    var accReviewTotal = 0;
    let accErrorTotal = 0;
    var accConsistency = 0;
//Reset MEDICAID Counters
    let MCacc1 = 0;
    let MCacc2 = 0;
    let MCacc3 = 0;
    let MCacc4 = 0;
    let MCacc5 = 0;
    let MCacc6 = 0;
    let MCacc7 = 0;
    let MCacc8 = 0;
    let MCacc9 = 0;
    let MCacc10 = 0;
    let MCacc11 = 0;
    let MCacc12 = 0;
    let MCcaseReview1 = 0;
    let MCcaseReview2 = 0;
    let MCcaseReview3 = 0;
    let MCcaseReview4 = 0;
    let MCcaseReview5 = 0;
    let MCcaseReview6 = 0;
    let MCcaseReview7 = 0;
    let MCcaseReview8 = 0;
    let MCcaseReview9 = 0;
    let MCcaseReview10 = 0;
    let MCcaseReview11 = 0;
    let MCcaseReview12 = 0;
    let MCcaseError1 = 0;
    let MCcaseError2 = 0;
    let MCcaseError3 = 0;
    let MCcaseError4 = 0;
    let MCcaseError5 = 0;
    let MCcaseError6 = 0;
    let MCcaseError7 = 0;
    let MCcaseError8 = 0;
    let MCcaseError9 = 0;
    let MCcaseError10 = 0;
    let MCcaseError11 = 0;
    let MCcaseError12 = 0;
    var MCaccCount = 0;
    var MCaccReviewTotal = 0;
    let MCaccErrorTotal = 0;
    var MCaccConsistency = 0;
//Reset TEA Counters
    let TEAacc1 = 0;
    let TEAacc2 = 0;
    let TEAacc3 = 0;
    let TEAacc4 = 0;
    let TEAacc5 = 0;
    let TEAacc6 = 0;
    let TEAacc7 = 0;
    let TEAacc8 = 0;
    let TEAacc9 = 0;
    let TEAacc10 = 0;
    let TEAacc11 = 0;
    let TEAacc12 = 0;
    let TEAcaseReview1 = 0;
    let TEAcaseReview2 = 0;
    let TEAcaseReview3 = 0;
    let TEAcaseReview4 = 0;
    let TEAcaseReview5 = 0;
    let TEAcaseReview6 = 0;
    let TEAcaseReview7 = 0;
    let TEAcaseReview8 = 0;
    let TEAcaseReview9 = 0;
    let TEAcaseReview10 = 0;
    let TEAcaseReview11 = 0;
    let TEAcaseReview12 = 0;
    let TEAcaseError1 = 0;
    let TEAcaseError2 = 0;
    let TEAcaseError3 = 0;
    let TEAcaseError4 = 0;
    let TEAcaseError5 = 0;
    let TEAcaseError6 = 0;
    let TEAcaseError7 = 0;
    let TEAcaseError8 = 0;
    let TEAcaseError9 = 0;
    let TEAcaseError10 = 0;
    let TEAcaseError11 = 0;
    let TEAcaseError12 = 0;
    var TEAaccCount = 0;
    var TEAaccReviewTotal = 0;
    let TEAaccErrorTotal = 0;
    var TEAaccConsistency = 0;
// --------------------
// LOAD UP DATA
// --------------------
    // --------------------SNAP ACCURACY--------------------
//Load the Mule 1
    caseReview1 = Number(document.getElementById("m1Acc").value);
    caseError1 = Number(document.getElementById("m1Err").value);
//CHECK OUTPUTS FOR ERROR 1
    if (caseError1 > 0) {
        caseError1
    } else {
        caseError1 = 0
    }
    console.log(caseReview1 + "," + caseError1);
//Load the Mule 2
    caseReview2 = Number(document.getElementById("m2Acc").value);
    caseError2 = Number(document.getElementById("m2Err").value);
//check outputs for ERROR2
    if (caseError2 > 0) {
        caseError2
    } else {
        caseError2 = 0
    }
    console.log(caseReview2 + "," + caseError2);
//Load the Mule 3
    caseReview3 = Number(document.getElementById("m3Acc").value);
    caseError3 = Number(document.getElementById("m3Err").value);
//check outputs for ERROR3
    if (caseError3 > 0) {
        caseError3
    } else {
        caseError3 = 0
    }
    console.log(caseReview3 + "," + caseError3);
//Load the Mule 4
    caseReview4 = document.getElementById("m4Acc").value;
    caseError4 = document.getElementById("m4Err").value;
//check outputs for ERROR4
    if (caseError4 > 0) {
        caseError4
    } else {
        caseError4 = 0
    }
    console.log(caseReview4 + "," + caseError4);
//Load the Mule 5
    caseReview5 = document.getElementById("m5Acc").value;
    caseError5 = document.getElementById("m5Err").value;
//check outputs for ERROR5
    if (caseError5 > 0) {
        caseError5
    } else {
        caseError5 = 0
    }
    console.log(caseReview5 + "," + caseError5);
//Load the Mule 6
    caseReview6 = document.getElementById("m6Acc").value;
    caseError6 = document.getElementById("m6Err").value;
//check outputs for ERROR6
    if (caseError6 > 0) {
        caseError6
    } else {
        caseError6 = 0
    }
    console.log(caseReview6 + "," + caseError6);
//Load the Mule 7
    caseReview7 = document.getElementById("m7Acc").value;
    caseError7 = document.getElementById("m7Err").value;
//check outputs for ERROR7
    if (caseError7 > 0) {
        caseError7
    } else {
        caseError7 = 0
    }
    console.log(caseReview7 + "," + caseError7);
//Load the Mule 8
    caseReview8 = document.getElementById("m8Acc").value;
    caseError8 = document.getElementById("m8Err").value;
//check outputs for ERROR8
    if (caseError8 > 0) {
        caseError8
    } else {
        caseError8 = 0
    }
    console.log(caseReview8 + "," + caseError8);
//Load the Mule 9
    caseReview9 = document.getElementById("m9Acc").value;
    caseError9 = document.getElementById("m9Err").value;
//check outputs for ERROR9
    if (caseError9 > 0) {
        caseError9
    } else {
        caseError9 = 0
    }
    console.log(caseReview9 + "," + caseError9);
//Load the Mule 10
    caseReview10 = document.getElementById("m10Acc").value;
    caseError10 = document.getElementById("m10Err").value;
//check outputs for ERROR10
    if (caseError10 > 0) {
        caseError10
    } else {
        caseError10 = 0
    }
    console.log(caseReview10 + "," + caseError10);
//Load the Mule 11
    caseReview11 = document.getElementById("m11Acc").value;
    caseError11 = document.getElementById("m11Err").value;
//check outputs for ERROR11
    if (caseError11 > 0) {
        caseError11
    } else {
        caseError11 = 0
    }
    console.log(caseReview11 + "," + caseError11);
//Load the Mule 12
    caseReview12 = document.getElementById("m12Acc").value;
    caseError12 = document.getElementById("m12Err").value;
//check outputs for ERROR12
    if (caseError12 > 0) {
        caseError12
    } else {
        caseError12 = 0
    }
    console.log(caseReview12 + "," + caseError12);
//-------------------DONE--------------------
//Set Accuracy Counters
    acc1 = (1 - (caseError1 / caseReview1)) * 100;
    if (acc1 >= 95) {
        accConsistency++;
        accCount++;
    } else if (acc1 > 0 && acc1 < 95) {
        accCount++;
    } else {
        acc1 = 0;
    }
    acc2 = (1 - (caseError2 / caseReview2)) * 100;
    if (acc2 >= 95) {
        accConsistency++;
        accCount++;
    } else if (acc2 > 0 && acc2 < 95) {
        accCount++;
    } else {
        acc2 = 0;
    }
    acc3 = (1 - (caseError3 / caseReview3)) * 100;
    if (acc3 >= 95) {
        accConsistency++;
        accCount++;
    } else if (acc3 > 0 && acc3 < 95) {
        accCount++;
    } else {
        acc3 = 0;
    }
    acc4 = (1 - (caseError4 / caseReview4)) * 100;
    if (acc4 >= 95) {
        accConsistency++;
        accCount++;
    } else if (acc4 > 0 && acc4 < 95) {
        accCount++;
    } else {
        acc4 = 0;
    }
    acc5 = (1 - (caseError5 / caseReview5)) * 100;
    if (acc5 >= 95) {
        accConsistency++;
        accCount++;
    } else if (acc5 > 0 && acc5 < 95) {
        accCount++;
    } else {
        acc5 = 0;
    }
    acc6 = (1 - (caseError6 / caseReview6)) * 100;
    if (acc6 >= 95) {
        accConsistency++;
        accCount++;
    } else if (acc6 > 0 && acc6 < 95) {
        accCount++;
    } else {
        acc6 = 0;
    }
    acc7 = (1 - (caseError7 / caseReview7)) * 100;
    if (acc7 >= 95) {
        accConsistency++;
        accCount++;
    } else if (acc7 > 0 && acc7 < 95) {
        accCount++;
    } else {
        acc7 = 0;
    }
    acc8 = (1 - (caseError8 / caseReview8)) * 100;
    if (acc8 >= 95) {
        accConsistency++;
        accCount++;
    } else if (acc8 > 0 && acc8 < 95) {
        accCount++;
    } else {
        acc8 = 0;
    }
    acc9 = (1 - (caseError9 / caseReview9)) * 100;
    if (acc9 >= 95) {
        accConsistency++;
        accCount++;
    } else if (acc9 > 0 && acc9 < 95) {
        accCount++;
    } else {
        acc9 = 0;
    }
    acc10 = (1 - (caseError10 / caseReview10)) * 100;
    if (acc10 >= 95) {
        accConsistency++;
        accCount++;
    } else if (acc10 > 0 && acc10 < 95) {
        accCount++;
    } else {
        acc10 = 0;
    }
    acc11 = (1 - (caseError11 / caseReview11)) * 100;
    if (acc11 >= 95) {
        accConsistency++;
        accCount++;
    } else if (acc11 > 0 && acc11 < 95) {
        accCount++;
    } else {
        acc11 = 0;
    }
    acc12 = (1 - (caseError12 / caseReview12)) * 100;
    if (acc12 >= 95) {
        accConsistency++;
        accCount++;
    } else if (acc12 > 0 && acc12 < 95) {
        accCount++;
    } else {
        acc12 = 0;
    }
    console.log(accConsistency + " Consistency Value");
    console.log(accCount + " Acc Count Value");
//--------------------DONE--------------------
// --------------------MEDICAID ACCURACY--------------------
//Load the Mule 1
    MCcaseReview1 = Number(document.getElementById("m1MCAcc").value);
    MCcaseError1 = Number(document.getElementById("m1MCErr").value);
//CHECK OUTPUTS FOR ERROR 1
    if (MCcaseError1 > 0) {
        MCcaseError1
    } else {
        MCcaseError1 = 0
    }
    console.log(MCcaseReview1 + "," + MCcaseError1);
//Load the Mule 2
    MCcaseReview2 = Number(document.getElementById("m2MCAcc").value);
    MCcaseError2 = Number(document.getElementById("m2MCErr").value);
//check outputs for ERROR2
    if (MCcaseError2 > 0) {
        MCcaseError2
    } else {
        MCcaseError2 = 0
    }
    console.log(MCcaseReview2 + "," + MCcaseError2);
//Load the Mule 3
    MCcaseReview3 = Number(document.getElementById("m3MCAcc").value);
    MCcaseError3 = Number(document.getElementById("m3MCErr").value);
//check outputs for ERROR3
    if (MCcaseError3 > 0) {
        MCcaseError3
    } else {
        MCcaseError3 = 0
    }
    console.log(MCcaseReview3 + "," + MCcaseError3);
//Load the Mule 4
    MCcaseReview4 = document.getElementById("m4MCAcc").value;
    MCcaseError4 = document.getElementById("m4MCErr").value;
//check outputs for ERROR4
    if (MCcaseError4 > 0) {
        MCcaseError4
    } else {
        MCcaseError4 = 0
    }
    console.log(MCcaseReview4 + "," + MCcaseError4);
//Load the Mule 5
    MCcaseReview5 = document.getElementById("m5MCAcc").value;
    MCcaseError5 = document.getElementById("m5MCErr").value;
//check outputs for ERROR5
    if (MCcaseError5 > 0) {
        MCcaseError5
    } else {
        MCcaseError5 = 0
    }
    console.log(MCcaseReview5 + "," + MCcaseError5);
//Load the Mule 6
    MCcaseReview6 = document.getElementById("m6MCAcc").value;
    MCcaseError6 = document.getElementById("m6MCErr").value;
//check outputs for ERROR6
    if (MCcaseError6 > 0) {
        MCcaseError6
    } else {
        MCcaseError6 = 0
    }
    console.log(MCcaseReview6 + "," + MCcaseError6);
//Load the Mule 7
    MCcaseReview7 = document.getElementById("m7MCAcc").value;
    MCcaseError7 = document.getElementById("m7MCErr").value;
//check outputs for ERROR7
    if (MCcaseError7 > 0) {
        MCcaseError7
    } else {
        MCcaseError7 = 0
    }
    console.log(MCcaseReview7 + "," + MCcaseError7);
//Load the Mule 8
    MCcaseReview8 = document.getElementById("m8MCAcc").value;
    MCcaseError8 = document.getElementById("m8MCErr").value;
//check outputs for ERROR8
    if (MCcaseError8 > 0) {
        MCcaseError8
    } else {
        MCcaseError8 = 0
    }
    console.log(MCcaseReview8 + "," + MCcaseError8);
//Load the Mule 9
    MCcaseReview9 = document.getElementById("m9MCAcc").value;
    MCcaseError9 = document.getElementById("m9MCErr").value;
//check outputs for ERROR9
    if (MCcaseError9 > 0) {
        MCcaseError9
    } else {
        MCcaseError9 = 0
    }
    console.log(MCcaseReview9 + "," + MCcaseError9);
//Load the Mule 10
    MCcaseReview10 = document.getElementById("m10MCAcc").value;
    MCcaseError10 = document.getElementById("m10MCErr").value;
//check outputs for ERROR10
    if (MCcaseError10 > 0) {
        MCcaseError10
    } else {
        MCcaseError10 = 0
    }
    console.log(MCcaseReview10 + "," + MCcaseError10);
//Load the Mule 11
    MCcaseReview11 = document.getElementById("m11MCAcc").value;
    MCcaseError11 = document.getElementById("m11MCErr").value;
//check outputs for ERROR11
    if (MCcaseError11 > 0) {
        MCcaseError11
    } else {
        MCcaseError11 = 0
    }
    console.log(MCcaseReview11 + "," + MCcaseError11);
//Load the Mule 12
    MCcaseReview12 = document.getElementById("m12MCAcc").value;
    MCcaseError12 = document.getElementById("m12MCErr").value;
//check outputs for ERROR12
    if (MCcaseError12 > 0) {
        MCcaseError12
    } else {
        MCcaseError12 = 0
    }
    console.log(MCcaseReview12 + "," + MCcaseError12);
    console.log(MCaccReviewTotal + " MC Case Reviews Complete");
//-------------------DONE--------------------
//Set Accuracy Counters
    MCacc1 = (1 - (MCcaseError1 / MCcaseReview1)) * 100;
    if (MCacc1 >= 90) {
        MCaccConsistency++;
        MCaccCount++;
    } else if (MCacc1 > 0 && MCacc1 < 90) {
        MCaccCount++;
    } else {
        MCacc1 = 0;
    }
    MCacc2 = (1 - (MCcaseError2 / MCcaseReview2)) * 100;
    if (MCacc2 >= 90) {
        MCaccConsistency++;
        MCaccCount++;
    } else if (MCacc2 > 0 && MCacc2 < 90) {
        MCaccCount++;
    } else {
        MCacc2 = 0;
    }
    MCacc3 = (1 - (MCcaseError3 / MCcaseReview3)) * 100;
    if (MCacc3 >= 90) {
        MCaccConsistency++;
        MCaccCount++;
    } else if (MCacc3 > 0 && MCacc3 < 90) {
        MCaccCount++;
    } else {
        MCacc3 = 0;
    }
    MCacc4 = (1 - (MCcaseError4 / MCcaseReview4)) * 100;
    if (MCacc4 >= 90) {
        MCaccConsistency++;
        MCaccCount++;
    } else if (MCacc4 > 0 && MCacc4 < 90) {
        MCaccCount++;
    } else {
        MCacc4 = 0;
    }
    MCacc5 = (1 - (MCcaseError5 / MCcaseReview5)) * 100;
    if (MCacc5 >= 90) {
        MCaccConsistency++;
        MCaccCount++;
    } else if (MCacc5 > 0 && MCacc5 < 90) {
        MCaccCount++;
    } else {
        MCacc5 = 0;
    }
    MCacc6 = (1 - (MCcaseError6 / MCcaseReview6)) * 100;
    if (MCacc6 >= 90) {
        MCaccConsistency++;
        MCaccCount++;
    } else if (MCacc6 > 0 && acc6 < 90) {
        MCaccCount++;
    } else {
        MCacc6 = 0;
    }
    MCacc7 = (1 - (MCcaseError7 / MCcaseReview7)) * 100;
    if (MCacc7 >= 90) {
        MCaccConsistency++;
        MCaccCount++;
    } else if (MCacc7 > 0 && MCacc7 < 90) {
        MCaccCount++;
    } else {
        MCacc7 = 0;
    }
    MCacc8 = (1 - (MCcaseError8 / MCcaseReview8)) * 100;
    if (MCacc8 >= 90) {
        MCaccConsistency++;
        MCaccCount++;
    } else if (MCacc8 > 0 && MCacc8 < 90) {
        MCaccCount++;
    } else {
        MCacc8 = 0;
    }
    MCacc9 = (1 - (MCcaseError9 / MCcaseReview9)) * 100;
    if (MCacc9 >= 90) {
        MCaccConsistency++;
        MCaccCount++;
    } else if (MCacc9 > 0 && MCacc9 < 90) {
        MCaccCount++;
    } else {
        MCacc9 = 0;
    }
    MCacc10 = (1 - (MCcaseError10 / MCcaseReview10)) * 100;
    if (MCacc10 >= 90) {
        MCaccConsistency++;
        MCaccCount++;
    } else if (MCacc10 > 0 && MCacc10 < 90) {
        MCaccCount++;
    } else {
        MCacc10 = 0;
    }
    MCacc11 = (1 - (MCcaseError11 / MCcaseReview11)) * 100;
    if (MCacc11 >= 90) {
        MCaccConsistency++;
        MCaccCount++;
    } else if (MCacc11 > 0 && MCacc11 < 90) {
        MCaccCount++;
    } else {
        MCacc11 = 0;
    }
    MCacc12 = (1 - (MCcaseError12 / MCcaseReview12)) * 100;
    if (MCacc12 >= 90) {
        MCaccConsistency++;
        MCaccCount++;
    } else if (MCacc12 > 0 && MCacc12 < 90) {
        MCaccCount++;
    } else {
        MCacc12 = 0;
    }
    console.log(accConsistency + " MC Consistency Value");
    console.log(accCount + " MC Acc Count Value");
//--------------------MEDICAID DONE--------------------
// ——————————TEA ACCURACY--------------------
//Load the Mule 1
    TEAcaseReview1 = Number(document.getElementById("m1TEAAcc").value);
    TEAcaseError1 = Number(document.getElementById("m1TEAErr").value);
//CHECK OUTPUTS FOR ERROR 1
    if (TEAcaseError1 > 0) {
        TEAcaseError1
    } else {
        TEAcaseError1 = 0
    }
    console.log(TEAcaseReview1 + "," + TEAcaseError1);
//Load the Mule 2
    TEAcaseReview2 = Number(document.getElementById("m2TEAAcc").value);
    TEAcaseError2 = Number(document.getElementById("m2TEAErr").value);
//check outputs for ERROR2
    if (TEAcaseError2 > 0) {
        TEAcaseError2
    } else {
        TEAcaseError2 = 0
    }
    console.log(TEAcaseReview2 + "," + TEAcaseError2);
//Load the Mule 3
    TEAcaseReview3 = Number(document.getElementById("m3TEAAcc").value);
    TEAcaseError3 = Number(document.getElementById("m3TEAErr").value);
//check outputs for ERROR3
    if (TEAcaseError3 > 0) {
        TEAcaseError3
    } else {
        TEAcaseError3 = 0
    }
    console.log(TEAcaseReview3 + "," + TEAcaseError3);
//Load the Mule 4
    TEAcaseReview4 = document.getElementById("m4TEAAcc").value;
    TEAcaseError4 = document.getElementById("m4TEAErr").value;
//check outputs for ERROR4
    if (TEAcaseError4 > 0) {
        TEAcaseError4
    } else {
        TEAcaseError4 = 0
    }
    console.log(TEAcaseReview4 + "," + TEAcaseError4);
//Load the Mule 5
    TEAcaseReview5 = document.getElementById("m5TEAAcc").value;
    TEAcaseError5 = document.getElementById("m5TEAErr").value;
//check outputs for ERROR5
    if (TEAcaseError5 > 0) {
        TEAcaseError5
    } else {
        TEAcaseError5 = 0
    }
    console.log(TEAcaseReview5 + "," + TEAcaseError5);
//Load the Mule 6
    TEAcaseReview6 = document.getElementById("m6TEAAcc").value;
    TEAcaseError6 = document.getElementById("m6TEAErr").value;
//check outputs for ERROR6
    if (TEAcaseError6 > 0) {
        TEAcaseError6
    } else {
        TEAcaseError6 = 0
    }
    console.log(TEAcaseReview6 + "," + TEAcaseError6);
//Load the Mule 7
    TEAcaseReview7 = document.getElementById("m7TEAAcc").value;
    TEAcaseError7 = document.getElementById("m7TEAErr").value;
//check outputs for ERROR7
    if (TEAcaseError7 > 0) {
        TEAcaseError7
    } else {
        TEAcaseError7 = 0
    }
    console.log(TEAcaseReview7 + "," + TEAcaseError7);
//Load the Mule 8
    TEAcaseReview8 = document.getElementById("m8TEAAcc").value;
    TEAcaseError8 = document.getElementById("m8TEAErr").value;
//check outputs for ERROR8
    if (TEAcaseError8 > 0) {
        TEAcaseError8
    } else {
        TEAcaseError8 = 0
    }
    console.log(TEAcaseReview8 + "," + TEAcaseError8);
//Load the Mule 9
    TEAcaseReview9 = document.getElementById("m9TEAAcc").value;
    TEAcaseError9 = document.getElementById("m9TEAErr").value;
//check outputs for ERROR9
    if (TEAcaseError9 > 0) {
        TEAcaseError9
    } else {
        TEAcaseError9 = 0
    }
    console.log(TEAcaseReview9 + "," + TEAcaseError9);
//Load the Mule 10
    TEAcaseReview10 = document.getElementById("m10TEAAcc").value;
    TEAcaseError10 = document.getElementById("m10TEAErr").value;
//check outputs for ERROR10
    if (TEAcaseError10 > 0) {
        TEAcaseError10
    } else {
        TEAcaseError10 = 0
    }
    console.log(TEAcaseReview10 + "," + TEAcaseError10);
//Load the Mule 11
    TEAcaseReview11 = document.getElementById("m11TEAAcc").value;
    TEAcaseError11 = document.getElementById("m11TEAErr").value;
//check outputs for ERROR11
    if (TEAcaseError11 > 0) {
        TEAcaseError11
    } else {
        TEAcaseError11 = 0
    }
    console.log(TEAcaseReview11 + "," + TEAcaseError11);
//Load the Mule 12
    TEAcaseReview12 = document.getElementById("m12TEAAcc").value;
    TEAcaseError12 = document.getElementById("m12TEAErr").value;
//check outputs for ERROR12
    if (TEAcaseError12 > 0) {
        TEAcaseError12
    } else {
        TEAcaseError12 = 0
    }
    console.log(TEAcaseReview12 + "," + TEAcaseError12);
    console.log(TEAaccReviewTotal + " TEA Case Reviews Complete");
//-------------------DONE--------------------
//Set Accuracy Counters
    TEAacc1 = (1 - (TEAcaseError1 / TEAcaseReview1)) * 100;
    if (TEAacc1 >= 97) {
        TEAaccConsistency++;
        TEAaccCount++;
    } else if (TEAacc1 > 0 && TEAacc1 < 97) {
        TEAaccCount++;
    } else {
        TEAacc1 = 0;
    }
    TEAacc2 = (1 - (TEAcaseError2 / TEAcaseReview2)) * 100;
    if (TEAacc2 >= 97) {
        TEAaccConsistency++;
        TEAaccCount++;
    } else if (TEAacc2 > 0 && TEAacc2 < 97) {
        TEAaccCount++;
    } else {
        TEAacc2 = 0;
    }
    TEAacc3 = (1 - (TEAcaseError3 / TEAcaseReview3)) * 100;
    if (TEAacc3 >= 97) {
        TEAaccConsistency++;
        TEAaccCount++;
    } else if (TEAacc3 > 0 && TEAacc3 < 97) {
        TEAaccCount++;
    } else {
        TEAacc3 = 0;
    }
    TEAacc4 = (1 - (TEAcaseError4 / TEAcaseReview4)) * 100;
    if (TEAacc4 >= 97) {
        TEAaccConsistency++;
        TEAaccCount++;
    } else if (TEAacc4 > 0 && TEAacc4 < 97) {
        TEAaccCount++;
    } else {
        TEAacc4 = 0;
    }
    TEAacc5 = (1 - (TEAcaseError5 / TEAcaseReview5)) * 100;
    if (TEAacc5 >= 97) {
        TEAaccConsistency++;
        TEAaccCount++;
    } else if (TEAacc5 > 0 && TEAacc5 < 97) {
        TEAaccCount++;
    } else {
        TEAacc5 = 0;
    }
    TEAacc6 = (1 - (TEAcaseError6 / TEAcaseReview6)) * 100;
    if (TEAacc6 >= 97) {
        TEAaccConsistency++;
        TEAaccCount++;
    } else if (TEAacc6 > 0 && acc6 < 97) {
        TEAaccCount++;
    } else {
        TEAacc6 = 0;
    }
    TEAacc7 = (1 - (TEAcaseError7 / TEAcaseReview7)) * 100;
    if (TEAacc7 >= 97) {
        TEAaccConsistency++;
        TEAaccCount++;
    } else if (TEAacc7 > 0 && TEAacc7 < 97) {
        TEAaccCount++;
    } else {
        TEAacc7 = 0;
    }
    TEAacc8 = (1 - (TEAcaseError8 / TEAcaseReview8)) * 100;
    if (TEAacc8 >= 97) {
        TEAaccConsistency++;
        TEAaccCount++;
    } else if (TEAacc8 > 0 && TEAacc8 < 97) {
        TEAaccCount++;
    } else {
        TEAacc8 = 0;
    }
    TEAacc9 = (1 - (TEAcaseError9 / TEAcaseReview9)) * 100;
    if (TEAacc9 >= 97) {
        TEAaccConsistency++;
        TEAaccCount++;
    } else if (TEAacc9 > 0 && TEAacc9 < 97) {
        TEAaccCount++;
    } else {
        TEAacc9 = 0;
    }
    TEAacc10 = (1 - (TEAcaseError10 / TEAcaseReview10)) * 100;
    if (TEAacc10 >= 97) {
        TEAaccConsistency++;
        TEAaccCount++;
    } else if (TEAacc10 > 0 && TEAacc10 < 97) {
        TEAaccCount++;
    } else {
        TEAacc10 = 0;
    }
    TEAacc11 = (1 - (TEAcaseError11 / TEAcaseReview11)) * 100;
    if (TEAacc11 >= 97) {
        TEAaccConsistency++;
        TEAaccCount++;
    } else if (TEAacc11 > 0 && TEAacc11 < 97) {
        TEAaccCount++;
    } else {
        TEAacc11 = 0;
    }
    TEAacc12 = (1 - (TEAcaseError12 / TEAcaseReview12)) * 100;
    if (TEAacc12 >= 97) {
        TEAaccConsistency++;
        TEAaccCount++;
    } else if (TEAacc12 > 0 && TEAacc12 < 97) {
        TEAaccCount++;
    } else {
        TEAacc12 = 0;
    }
    console.log(accConsistency + " TEA Consistency Value");
    console.log(accCount + " TEA Acc Count Value");
//——————————TEA DONE--------------------
// --------------------
// FILL REPORT FIELDS ON HTML PAGE
// --------------------

// log out SNAP accuracy data
    document.getElementById("month1-acc").innerHTML = (((acc1).toFixed(2)) + "%");
    if (acc1 > 0) {
        document.getElementById("m1AccTable").innerHTML = "S:" + caseReview1 + "\(" + caseError1 + "\):" + (((acc1).toFixed(2)) + "%");
    } else {
        document.getElementById("m1AccTable").innerHTML = "No Data";
    }

    document.getElementById("month2-acc").innerHTML = (((acc2).toFixed(2)) + "%");
    if (acc2 > 0) {
        document.getElementById("m2AccTable").innerHTML = "S:" + caseReview2 + "\(" + caseError2 + "\):" + (((acc2).toFixed(2)) + "%");
    } else {
        document.getElementById("m2AccTable").innerHTML = "No Data";
    }

    document.getElementById("month3-acc").innerHTML = (((acc3).toFixed(2)) + "%");
    if (acc3 > 0) {
        document.getElementById("m3AccTable").innerHTML = "S:" + caseReview3 + "\(" + caseError3 + "\):" + (((acc3).toFixed(2)) + "%");
    } else {
        document.getElementById("m3AccTable").innerHTML = "No Data";
    }

    document.getElementById("month4-acc").innerHTML = (((acc4).toFixed(2)) + "%");
    if (acc4 > 0) {
        document.getElementById("m4AccTable").innerHTML = "S:" + caseReview4 + "\(" + caseError4 + "\):" + (((acc4).toFixed(2)) + "%");
    } else {
        document.getElementById("m4AccTable").innerHTML = "No Data";
    }

    document.getElementById("month5-acc").innerHTML = (((acc5).toFixed(2)) + "%");
    if (acc5 > 0) {
        document.getElementById("m5AccTable").innerHTML = "S:" + caseReview5 + "\(" + caseError5 + "\):" + (((acc5).toFixed(2)) + "%");
    } else {
        document.getElementById("m5AccTable").innerHTML = "No Data";
    }

    document.getElementById("month6-acc").innerHTML = (((acc6).toFixed(2)) + "%");
    if (acc6 > 0) {
        document.getElementById("m6AccTable").innerHTML = "S:" + caseReview6 + "\(" + caseError6 + "\):" + (((acc6).toFixed(2)) + "%");
    } else {
        document.getElementById("m6AccTable").innerHTML = "No Data";
    }

    document.getElementById("month7-acc").innerHTML = (((acc7).toFixed(2)) + "%");
    if (acc7 > 0) {
        document.getElementById("m7AccTable").innerHTML = "S:" + caseReview7 + "\(" + caseError7 + "\):" + (((acc7).toFixed(2)) + "%");
    } else {
        document.getElementById("m7AccTable").innerHTML = "No Data";
    }

    document.getElementById("month8-acc").innerHTML = (((acc8).toFixed(2)) + "%");
    if (acc8 > 0) {
        document.getElementById("m8AccTable").innerHTML = "S:" + caseReview8 + "\(" + caseError8 + "\):" + (((acc8).toFixed(2)) + "%");
    } else {
        document.getElementById("m8AccTable").innerHTML = "No Data";
    }

    document.getElementById("month9-acc").innerHTML = (((acc9).toFixed(2)) + "%");
    if (acc9 > 0) {
        document.getElementById("m9AccTable").innerHTML = "S:" + caseReview9 + "\(" + caseError9 + "\):" + (((acc9).toFixed(2)) + "%");
    } else {
        document.getElementById("m9AccTable").innerHTML = "No Data";
    }

    document.getElementById("month10-acc").innerHTML = (((acc10).toFixed(2)) + "%");
    if (acc10 > 0) {
        document.getElementById("m10AccTable").innerHTML = "S:" + caseReview10 + "\(" + caseError10 + "\):" + (((acc10).toFixed(2)) + "%");
    } else {
        document.getElementById("m10AccTable").innerHTML = "No Data";
    }

    document.getElementById("month11-acc").innerHTML = (((acc11).toFixed(2)) + "%");
    if (acc11 > 0) {
        document.getElementById("m11AccTable").innerHTML = "S:" + caseReview11 + "\(" + caseError11 + "\):" + (((acc11).toFixed(2)) + "%");
    } else {
        document.getElementById("m11AccTable").innerHTML = "No Data";
    }

    document.getElementById("month12-acc").innerHTML = (((acc12).toFixed(2)) + "%");
    if (acc12 > 0) {
        document.getElementById("m12AccTable").innerHTML = "S:" + caseReview12 + "\(" + caseError12 + "\):" + (((acc12).toFixed(2)) + "%");
    } else {
        document.getElementById("m12AccTable").innerHTML = "No Data";
    }

// log out MEDICAID accuracy data
    document.getElementById("month1-MCacc").innerHTML = (((MCacc1).toFixed(2)) + "%");
    if (MCacc1 > 0) {
        document.getElementById("m1MedTable").innerHTML = "M:" + MCcaseReview1 + "\(" + MCcaseError1 + "\):" + (((MCacc1).toFixed(2)) + "%");
    } else {
        document.getElementById("m1MedTable").innerHTML = "No Data";
    }
    document.getElementById("month2-MCacc").innerHTML = (((MCacc2).toFixed(2)) + "%");
    if (MCacc2 > 0) {
        document.getElementById("m2MedTable").innerHTML = "M:" + MCcaseReview2 + "\(" + MCcaseError2 + "\):" + (((MCacc2).toFixed(2)) + "%");
    } else {
        document.getElementById("m2MedTable").innerHTML = "No Data";
    }
    document.getElementById("month3-MCacc").innerHTML = (((MCacc3).toFixed(2)) + "%");
    if (MCacc3 > 0) {
        document.getElementById("m3MedTable").innerHTML = "M:" + MCcaseReview3 + "\(" + MCcaseError3 + "\):" + (((MCacc3).toFixed(2)) + "%");
    } else {
        document.getElementById("m3MedTable").innerHTML = "No Data";
    }
    document.getElementById("month4-MCacc").innerHTML = (((MCacc4).toFixed(2)) + "%");
    if (MCacc4 > 0) {
        document.getElementById("m4MedTable").innerHTML = "M:" + MCcaseReview4 + "\(" + MCcaseError4 + "\):" + (((MCacc4).toFixed(2)) + "%");
    } else {
        document.getElementById("m4MedTable").innerHTML = "No Data";
    }
    document.getElementById("month5-MCacc").innerHTML = (((MCacc5).toFixed(2)) + "%");
    if (MCacc5 > 0) {
        document.getElementById("m5MedTable").innerHTML = "M:" + MCcaseReview5 + "\(" + MCcaseError5 + "\):" + (((MCacc5).toFixed(2)) + "%");
    } else {
        document.getElementById("m5MedTable").innerHTML = "No Data";
    }
    document.getElementById("month6-MCacc").innerHTML = (((MCacc6).toFixed(2)) + "%");
    if (MCacc6 > 0) {
        document.getElementById("m6MedTable").innerHTML = "M:" + MCcaseReview6 + "\(" + MCcaseError6 + "\):" + (((MCacc6).toFixed(2)) + "%");
    } else {
        document.getElementById("m6MedTable").innerHTML = "No Data";
    }
    document.getElementById("month7-MCacc").innerHTML = (((MCacc7).toFixed(2)) + "%");
    if (MCacc7 > 0) {
        document.getElementById("m7MedTable").innerHTML = "M:" + MCcaseReview7 + "\(" + MCcaseError7 + "\):" + (((MCacc7).toFixed(2)) + "%");
    } else {
        document.getElementById("m7MedTable").innerHTML = "No Data";
    }
    document.getElementById("month8-MCacc").innerHTML = (((MCacc8).toFixed(2)) + "%");
    if (MCacc8 > 0) {
        document.getElementById("m8MedTable").innerHTML = "M:" + MCcaseReview8 + "\(" + MCcaseError8 + "\):" + (((MCacc8).toFixed(2)) + "%");
    } else {
        document.getElementById("m8MedTable").innerHTML = "No Data";
    }
    document.getElementById("month9-MCacc").innerHTML = (((MCacc9).toFixed(2)) + "%");
    if (MCacc9 > 0) {
        document.getElementById("m9MedTable").innerHTML = "M:" + MCcaseReview9 + "\(" + MCcaseError9 + "\):" + (((MCacc9).toFixed(2)) + "%");
    } else {
        document.getElementById("m9MedTable").innerHTML = "No Data";
    }
    document.getElementById("month10-MCacc").innerHTML = (((MCacc10).toFixed(2)) + "%");
    if (MCacc10 > 0) {
        document.getElementById("m10MedTable").innerHTML = "M:" + MCcaseReview10 + "\(" + MCcaseError10 + "\):" + (((MCacc10).toFixed(2)) + "%");
    } else {
        document.getElementById("m10MedTable").innerHTML = "No Data";
    }
    document.getElementById("month11-MCacc").innerHTML = (((MCacc11).toFixed(2)) + "%");
    if (MCacc11 > 0) {
        document.getElementById("m11MedTable").innerHTML = "M:" + MCcaseReview11 + "\(" + MCcaseError11 + "\):" + (((MCacc11).toFixed(2)) + "%");
    } else {
        document.getElementById("m11MedTable").innerHTML = "No Data";
    }
    document.getElementById("month12-MCacc").innerHTML = (((MCacc12).toFixed(2)) + "%");
    if (MCacc12 > 0) {
        document.getElementById("m12MedTable").innerHTML = "M:" + MCcaseReview12 + "\(" + MCcaseError12 + "\):" + (((MCacc12).toFixed(2)) + "%");
    } else {
        document.getElementById("m12MedTable").innerHTML = "No Data";
    }
// log out TEA accuracy data
    document.getElementById("month1-TEAacc").innerHTML = (((TEAacc1).toFixed(2)) + "%");
    if (TEAacc1 > 0) {
        document.getElementById("m1TeaTable").innerHTML = "T:" + TEAcaseReview1 + "\(" + TEAcaseError1 + "\):" + (((TEAacc1).toFixed(2)) + "%");
    } else {
        document.getElementById("m1TeaTable").innerHTML = "No Data";
    }
    document.getElementById("month2-TEAacc").innerHTML = (((TEAacc2).toFixed(2)) + "%");
    if (TEAacc2 > 0) {
        document.getElementById("m2TeaTable").innerHTML = "T:" + TEAcaseReview2 + "\(" + TEAcaseError2 + "\):" + (((TEAacc2).toFixed(2)) + "%");
    } else {
        document.getElementById("m2TeaTable").innerHTML = "No Data";
    }
    document.getElementById("month3-TEAacc").innerHTML = (((TEAacc3).toFixed(2)) + "%");
    if (TEAacc3 > 0) {
        document.getElementById("m3TeaTable").innerHTML = "T:" + TEAcaseReview3 + "\(" + TEAcaseError3 + "\):" + (((TEAacc3).toFixed(2)) + "%");
    } else {
        document.getElementById("m3TeaTable").innerHTML = "No Data";
    }
    document.getElementById("month4-TEAacc").innerHTML = (((TEAacc4).toFixed(2)) + "%");
    if (TEAacc4 > 0) {
        document.getElementById("m4TeaTable").innerHTML = "T:" + TEAcaseReview4 + "\(" + TEAcaseError4 + "\):" + (((TEAacc4).toFixed(2)) + "%");
    } else {
        document.getElementById("m4TeaTable").innerHTML = "No Data";
    }
    document.getElementById("month5-TEAacc").innerHTML = (((TEAacc5).toFixed(2)) + "%");
    if (TEAacc5 > 0) {
        document.getElementById("m5TeaTable").innerHTML = "T:" + TEAcaseReview5 + "\(" + TEAcaseError5 + "\):" + (((TEAacc5).toFixed(2)) + "%");
    } else {
        document.getElementById("m5TeaTable").innerHTML = "No Data";
    }
    document.getElementById("month6-TEAacc").innerHTML = (((TEAacc6).toFixed(2)) + "%");
    if (TEAacc6 > 0) {
        document.getElementById("m6TeaTable").innerHTML = "T:" + TEAcaseReview6 + "\(" + TEAcaseError6 + "\):" + (((TEAacc6).toFixed(2)) + "%");
    } else {
        document.getElementById("m6TeaTable").innerHTML = "No Data";
    }
    document.getElementById("month7-TEAacc").innerHTML = (((TEAacc7).toFixed(2)) + "%");
    if (TEAacc7 > 0) {
        document.getElementById("m7TeaTable").innerHTML = "T:" + TEAcaseReview7 + "\(" + TEAcaseError7 + "\):" + (((TEAacc7).toFixed(2)) + "%");
    } else {
        document.getElementById("m7TeaTable").innerHTML = "No Data";
    }
    document.getElementById("month8-TEAacc").innerHTML = (((TEAacc8).toFixed(2)) + "%");
    if (TEAacc8 > 0) {
        document.getElementById("m8TeaTable").innerHTML = "T:" + TEAcaseReview8 + "\(" + TEAcaseError8 + "\):" + (((TEAacc8).toFixed(2)) + "%");
    } else {
        document.getElementById("m8TeaTable").innerHTML = "No Data";
    }
    document.getElementById("month9-TEAacc").innerHTML = (((TEAacc9).toFixed(2)) + "%");
    if (TEAacc9 > 0) {
        document.getElementById("m9TeaTable").innerHTML = "T:" + TEAcaseReview9 + "\(" + TEAcaseError9 + "\):" + (((TEAacc9).toFixed(2)) + "%");
    } else {
        document.getElementById("m9TeaTable").innerHTML = "No Data";
    }
    document.getElementById("month10-TEAacc").innerHTML = (((TEAacc10).toFixed(2)) + "%");
    if (TEAacc10 > 0) {
        document.getElementById("m10TeaTable").innerHTML = "T:" + TEAcaseReview10 + "\(" + TEAcaseError10 + "\):" + (((TEAacc10).toFixed(2)) + "%");
    } else {
        document.getElementById("m10TeaTable").innerHTML = "No Data";
    }
    document.getElementById("month11-TEAacc").innerHTML = (((TEAacc11).toFixed(2)) + "%");
    if (TEAacc11 > 0) {
        document.getElementById("m11TeaTable").innerHTML = "T:" + TEAcaseReview11 + "\(" + TEAcaseError11 + "\):" + (((TEAacc11).toFixed(2)) + "%");
    } else {
        document.getElementById("m11TeaTable").innerHTML = "No Data";
    }
    document.getElementById("month12-TEAacc").innerHTML = (((TEAacc12).toFixed(2)) + "%");
    if (TEAacc12 > 0) {
        document.getElementById("m12TeaTable").innerHTML = "T:" + TEAcaseReview12 + "\(" + TEAcaseError12 + "\):" + (((TEAacc12).toFixed(2)) + "%");
    } else {
        document.getElementById("m12TeaTable").innerHTML = "No Data";
    }


// --------------------
// PGCS RATING PREP
// --------------------

// SNAP accuracy calculations
    let sumAcc = 0;
    let sum = accCount;

    switch (sum) {
        case 12:
            sumAcc = (acc1 + acc2 + acc3 + acc4 + acc5 + acc6 + acc7 + acc8 + acc9 + acc10 + acc11 + acc12);
            console.log("Running 12");
            break;
        case 11:
            sumAcc = (acc1 + acc2 + acc3 + acc4 + acc5 + acc6 + acc7 + acc8 + acc9 + acc10 + acc11 + acc12);
            console.log("Running 11");
            break;
        case 10:
            sumAcc = (acc1 + acc2 + acc3 + acc4 + acc5 + acc6 + acc7 + acc8 + acc9 + acc10 + acc11 + acc12);
            console.log("Running 10");
            break;
        case 9:
            sumAcc = (acc1 + acc2 + acc3 + acc4 + acc5 + acc6 + acc7 + acc8 + acc9 + acc10 + acc11 + acc12);
            console.log("Running 9");
            break;
        case 8:
            sumAcc = (acc1 + acc2 + acc3 + acc4 + acc5 + acc6 + acc7 + acc8 + acc9 + acc10 + acc11 + acc12);
            console.log("Running 8");
            break;
        case 7:
            sumAcc = (acc1 + acc2 + acc3 + acc4 + acc5 + acc6 + acc7 + acc8 + acc9 + acc10 + acc11 + acc12);
            console.log("Running 7");
            break;
        case 6:
            sumAcc = (acc1 + acc2 + acc3 + acc4 + acc5 + acc6 + acc7 + acc8 + acc9 + acc10 + acc11 + acc12);
            console.log("Running 6");
            break;
        case 5:
            sumAcc = (acc1 + acc2 + acc3 + acc4 + acc5 + acc6 + acc7 + acc8 + acc9 + acc10 + acc11 + acc12);
            console.log("Running 5");
            break;
        case 4:
            sumAcc = (acc1 + acc2 + acc3 + acc4 + acc5 + acc6 + acc7 + acc8 + acc9 + acc10 + acc11 + acc12);
            console.log("Running 4");
            break;
        case 3:
            sumAcc = (acc1 + acc2 + acc3 + acc4 + acc5 + acc6 + acc7 + acc8 + acc9 + acc10 + acc11 + acc12);
            console.log("Running 3");
            break;
        case 2:
            sumAcc = (acc1 + acc2 + acc3 + acc4 + acc5 + acc6 + acc7 + acc8 + acc9 + acc10 + acc11 + acc12);
            console.log("Running 2");
            break;
        case 1:
            sumAcc = (acc1 + acc2 + acc3 + acc4 + acc5 + acc6 + acc7 + acc8 + acc9 + acc10 + acc11 + acc12);
            console.log("Running 1");
            break;
        default:
            console.log("Awaiting Input");
    }
    let aveAcc = sumAcc / sum;
    console.log("Sum = " + sum);
    console.log("Sum Acc = " + sumAcc);
    console.log("Ave Acc = " + aveAcc);
    document.getElementsByName("sum").value = aveAcc;
// MEDICAID accuracy calculations
    let MCsumAcc = 0;
    let MCsum = MCaccCount;
    switch (MCsum) {
        case 12:
            MCsumAcc = (MCacc1 + MCacc2 + MCacc3 + MCacc4 + MCacc5 + MCacc6 + MCacc7 + MCacc8 + MCacc9 + MCacc10 + MCacc11 + MCacc12);
            console.log("Running MC12");
            break;
        case 11:
            MCsumAcc = (MCacc1 + MCacc2 + MCacc3 + MCacc4 + MCacc5 + MCacc6 + MCacc7 + MCacc8 + MCacc9 + MCacc10 + MCacc11 + MCacc12);
            console.log("Running MC11");
            break;
        case 10:
            MCsumAcc = (MCacc1 + MCacc2 + MCacc3 + MCacc4 + MCacc5 + MCacc6 + MCacc7 + MCacc8 + MCacc9 + MCacc10 + MCacc11 + MCacc12);
            console.log("Running MC10");
            break;
        case 9:
            MCsumAcc = (MCacc1 + MCacc2 + MCacc3 + MCacc4 + MCacc5 + MCacc6 + MCacc7 + MCacc8 + MCacc9 + MCacc10 + MCacc11 + MCacc12);
            console.log("Running MC9");
            break;
        case 8:
            MCsumAcc = (MCacc1 + MCacc2 + MCacc3 + MCacc4 + MCacc5 + MCacc6 + MCacc7 + MCacc8 + MCacc9 + MCacc10 + MCacc11 + MCacc12);
            console.log("Running MC8");
            break;
        case 7:
            MCsumAcc = (MCacc1 + MCacc2 + MCacc3 + MCacc4 + MCacc5 + MCacc6 + MCacc7 + MCacc8 + MCacc9 + MCacc10 + MCacc11 + MCacc12);
            console.log("Running MC7");
            break;
        case 6:
            MCsumAcc = (MCacc1 + MCacc2 + MCacc3 + MCacc4 + MCacc5 + MCacc6 + MCacc7 + MCacc8 + MCacc9 + MCacc10 + MCacc11 + MCacc12);
            console.log("Running MC6");
            break;
        case 5:
            MCsumAcc = (MCacc1 + MCacc2 + MCacc3 + MCacc4 + MCacc5 + MCacc6 + MCacc7 + MCacc8 + MCacc9 + MCacc10 + MCacc11 + MCacc12);
            console.log("Running MC5");
            break;
        case 4:
            MCsumAcc = (MCacc1 + MCacc2 + MCacc3 + MCacc4 + MCacc5 + MCacc6 + MCacc7 + MCacc8 + MCacc9 + MCacc10 + MCacc11 + MCacc12);
            console.log("Running MC4");
            break;
        case 3:
            MCsumAcc = (MCacc1 + MCacc2 + MCacc3 + MCacc4 + MCacc5 + MCacc6 + MCacc7 + MCacc8 + MCacc9 + MCacc10 + MCacc11 + MCacc12);
            console.log("Running MC3");
            break;
        case 2:
            MCsumAcc = (MCacc1 + MCacc2 + MCacc3 + MCacc4 + MCacc5 + MCacc6 + MCacc7 + MCacc8 + MCacc9 + MCacc10 + MCacc11 + MCacc12);
            console.log("Running MC2");
            break;
        case 1:
            MCsumAcc = (MCacc1 + MCacc2 + MCacc3 + MCacc4 + MCacc5 + MCacc6 + MCacc7 + MCacc8 + MCacc9 + MCacc10 + MCacc11 + MCacc12);
            console.log("Running MC1");
            break;
        default:
            console.log("Awaiting MC Input");
    }
    let MCaveAcc = MCsumAcc / MCsum;
    console.log("MC Sum = " + MCsum);
    console.log("MC Sum Acc = " + MCsumAcc);
    console.log("MC Ave Acc = " + MCaveAcc);
    document.getElementsByName("MCsum").value = MCaveAcc;
// TEA accuracy calculations
    let TEAsumAcc = 0;
    let TEAsum = TEAaccCount;
    switch (TEAsum) {
        case 12:
            TEAsumAcc = (TEAacc1 + TEAacc2 + TEAacc3 + TEAacc4 + TEAacc5 + TEAacc6 + TEAacc7 + TEAacc8 + TEAacc9 + TEAacc10 + TEAacc11 + TEAacc12);
            console.log("Running TEA12");
            break;
        case 11:
            TEAsumAcc = (TEAacc1 + TEAacc2 + TEAacc3 + TEAacc4 + TEAacc5 + TEAacc6 + TEAacc7 + TEAacc8 + TEAacc9 + TEAacc10 + TEAacc11 + TEAacc12);
            console.log("Running TEA11");
            break;
        case 10:
            TEAsumAcc = (TEAacc1 + TEAacc2 + TEAacc3 + TEAacc4 + TEAacc5 + TEAacc6 + TEAacc7 + TEAacc8 + TEAacc9 + TEAacc10 + TEAacc11 + TEAacc12);
            console.log("Running TEA10");
            break;
        case 9:
            TEAsumAcc = (TEAacc1 + TEAacc2 + TEAacc3 + TEAacc4 + TEAacc5 + TEAacc6 + TEAacc7 + TEAacc8 + TEAacc9 + TEAacc10 + TEAacc11 + TEAacc12);
            console.log("Running TEA9");
            break;
        case 8:
            TEAsumAcc = (TEAacc1 + TEAacc2 + TEAacc3 + TEAacc4 + TEAacc5 + TEAacc6 + TEAacc7 + TEAacc8 + TEAacc9 + TEAacc10 + TEAacc11 + TEAacc12);
            console.log("Running TEA8");
            break;
        case 7:
            TEAsumAcc = (TEAacc1 + TEAacc2 + TEAacc3 + TEAacc4 + TEAacc5 + TEAacc6 + TEAacc7 + TEAacc8 + TEAacc9 + TEAacc10 + TEAacc11 + TEAacc12);
            console.log("Running TEA7");
            break;
        case 6:
            TEAsumAcc = (TEAacc1 + TEAacc2 + TEAacc3 + TEAacc4 + TEAacc5 + TEAacc6 + TEAacc7 + TEAacc8 + TEAacc9 + TEAacc10 + TEAacc11 + TEAacc12);
            console.log("Running TEA6");
            break;
        case 5:
            TEAsumAcc = (TEAacc1 + TEAacc2 + TEAacc3 + TEAacc4 + TEAacc5 + TEAacc6 + TEAacc7 + TEAacc8 + TEAacc9 + TEAacc10 + TEAacc11 + TEAacc12);
            console.log("Running TEA5");
            break;
        case 4:
            TEAsumAcc = (TEAacc1 + TEAacc2 + TEAacc3 + TEAacc4 + TEAacc5 + TEAacc6 + TEAacc7 + TEAacc8 + TEAacc9 + TEAacc10 + TEAacc11 + TEAacc12);
            console.log("Running TEA4");
            break;
        case 3:
            TEAsumAcc = (TEAacc1 + TEAacc2 + TEAacc3 + TEAacc4 + TEAacc5 + TEAacc6 + TEAacc7 + TEAacc8 + TEAacc9 + TEAacc10 + TEAacc11 + TEAacc12);
            console.log("Running TEA3");
            break;
        case 2:
            TEAsumAcc = (TEAacc1 + TEAacc2 + TEAacc3 + TEAacc4 + TEAacc5 + TEAacc6 + TEAacc7 + TEAacc8 + TEAacc9 + TEAacc10 + TEAacc11 + TEAacc12);
            console.log("Running TEA2");
            break;
        case 1:
            TEAsumAcc = (TEAacc1 + TEAacc2 + TEAacc3 + TEAacc4 + TEAacc5 + TEAacc6 + TEAacc7 + TEAacc8 + TEAacc9 + TEAacc10 + TEAacc11 + TEAacc12);
            console.log("Running TEA1");
            break;
        default:
            console.log("Awaiting TEA Input");
    }
    let TEAaveAcc = TEAsumAcc / TEAsum;
    console.log("TEA Sum = " + TEAsum);
    console.log("TEA Sum Acc = " + TEAsumAcc);
    console.log("TEA Ave Acc = " + TEAaveAcc);
    document.getElementsByName("TEAsum").value = TEAaveAcc;
//------------------
//OUTPUT TO PGCS SUMMARY SECTION
//------------------
//measure SNAP ACCURACY against the standard
    if (aveAcc <= 80 && sum > 0) {
        document.getElementById("AccuracyScore").innerHTML = (((aveAcc).toFixed(2)) + "% Accuracy");
    } else if (aveAcc < 95 && aveAcc > 80) {
        document.getElementById("AccuracyScore").innerHTML = (((aveAcc).toFixed(2)) + "% Accuracy");
    } else if (aveAcc >= 95) {
        console.log("Great Job!!!");
        document.getElementById("AccuracyScore").innerHTML = (((aveAcc).toFixed(2)) + "% Accuracy")
    } else if (acc1 < 95 && acc1 > 80) {
        console.log("Almost!")

    } else {
        console.log("No Data")
    }
// Measure Consistency for Star Value SNAP ACCURACY
    var accIsConsistent = (accConsistency / sum) * 100;
    if (accIsConsistent >= 95 && aveAcc >= 95) {
        document.getElementById("StarScore").innerHTML = "&#x2605 &#x2605 &#x2605"; //removed 4th star from consistency rule, deprecated by DCO procedural rules.
            // document.getElementById("prodSARStarDescriptor").innerHTML = "Highly Effective"
            document.getElementById("StarDescriptor").innerHTML = "Solid Performer"
        document.getElementById("AccuracyFinal").innerHTML = "Consistently Met Goal"
    } else if (accIsConsistent < 95 && aveAcc >= 95) {
        document.getElementById("StarScore").innerHTML = "&#x2605 &#x2605 &#x2605";
        document.getElementById("StarDescriptor").innerHTML = "Solid Performer";
        document.getElementById("AccuracyFinal").innerHTML = "Inconsistently Met Goal";
    } else if (aveAcc > 79.99 && aveAcc < 95) {
        document.getElementById("StarScore").innerHTML = "&#x2605 &#x2605";
        document.getElementById("StarDescriptor").innerHTML = "Needs Improvement";
        document.getElementById("AccuracyFinal").innerHTML = "Missed Goals";
    } else if (aveAcc > 0 && aveAcc <= 79.99) {
        document.getElementById("StarScore").innerHTML = "&#x2605";
        document.getElementById("StarDescriptor").innerHTML = "Unsatisfactory";
        document.getElementById("AccuracyFinal").innerHTML = "Missed Goals";
    }
// Add Up Total Reviews and Total Errors FOR SNAP ACCURACY

    var TotalAcc = Number(caseReview1) + Number(caseReview2) + Number(caseReview3) + Number(caseReview4) + Number(caseReview5) + Number(caseReview6) + Number(caseReview7) + Number(caseReview8) + Number(caseReview9) + Number(caseReview10) + Number(caseReview11) + Number(caseReview12);
    document.getElementById("AccReviewed").innerHTML = (TotalAcc + " Case Reviews");
    var TotalErr = Number(caseError1) + Number(caseError2) + Number(caseError3) + Number(caseError4) + Number(caseError5) + Number(caseError6) + Number(caseError7) + Number(caseError8) + Number(caseError9) + Number(caseError10) + Number(caseError11) + Number(caseError12);
    document.getElementById("AccError").innerHTML = (TotalErr + " Case Errors");

//measure MEDICAID ACCURACY against the standard
    if (MCaveAcc <= 80 && MCsum > 0) {
        document.getElementById("MCAccuracyScore").innerHTML = (((MCaveAcc).toFixed(2)) + "% Accuracy");
    } else if (MCaveAcc < 90 && MCaveAcc > 75) {
        document.getElementById("MCAccuracyScore").innerHTML = (((MCaveAcc).toFixed(2)) + "% Accuracy");
    } else if (MCaveAcc >= 90) {
        console.log("Great Job!!!");
        document.getElementById("MCAccuracyScore").innerHTML = (((MCaveAcc).toFixed(2)) + "% Accuracy")
    } else if (MCacc1 < 90 && MCacc1 > 75) {
        console.log("Almost!")

    } else {
        console.log("No Data")
    }
// Measure Consistency for Star Value MEDICAID ACCURACY
    var MCaccIsConsistent = (MCaccConsistency / MCsum) * 100;
    if (MCaccIsConsistent >= 95 && MCaveAcc > 90) {
        document.getElementById("MCStarScore").innerHTML = "&#x2605 &#x2605 &#x2605"; //removed 4th star from consistency rule, deprecated by DCO procedural rules.
            // document.getElementById("prodSARStarDescriptor").innerHTML = "Highly Effective"
            document.getElementById("MCStarDescriptor").innerHTML = "Solid Performer"
        document.getElementById("MCAccuracyFinal").innerHTML = "Consistently Met Goal"
    } else if (MCaccIsConsistent < 95 && MCaveAcc >= 90) {
        document.getElementById("MCStarScore").innerHTML = "&#x2605 &#x2605 &#x2605";
        document.getElementById("MCStarDescriptor").innerHTML = "Solid Performer";
        document.getElementById("MCAccuracyFinal").innerHTML = "Inconsistently Met Goal";
    } else if (MCaveAcc > 79.99 && MCaveAcc < 90) {
        document.getElementById("MCStarScore").innerHTML = "&#x2605 &#x2605";
        document.getElementById("MCStarDescriptor").innerHTML = "Needs Improvement";
        document.getElementById("MCAccuracyFinal").innerHTML = "Missed Goal";
    } else if (MCaveAcc > 0 && MCaveAcc <= 79.99) {
        document.getElementById("MCStarScore").innerHTML = "&#x2605";
        document.getElementById("MCStarDescriptor").innerHTML = "Unsatisfactory";
        document.getElementById("MCAccuracyFinal").innerHTML = "Missed Goal";
    }
// Add Up Total Reviews and Total Errors FOR MEDICAID ACCURACY

    var MCTotalAcc = Number(MCcaseReview1) + Number(MCcaseReview2) + Number(MCcaseReview3) + Number(MCcaseReview4) + Number(MCcaseReview5) + Number(MCcaseReview6) + Number(MCcaseReview7) + Number(MCcaseReview8) + Number(MCcaseReview9) + Number(MCcaseReview10) + Number(MCcaseReview11) + Number(MCcaseReview12);
    document.getElementById("MCAccReviewed").innerHTML = (MCTotalAcc + " Case Reviews");
    var MCTotalErr = Number(MCcaseError1) + Number(MCcaseError2) + Number(MCcaseError3) + Number(MCcaseError4) + Number(MCcaseError5) + Number(MCcaseError6) + Number(MCcaseError7) + Number(MCcaseError8) + Number(MCcaseError9) + Number(MCcaseError10) + Number(MCcaseError11) + Number(MCcaseError12);
    document.getElementById("MCAccError").innerHTML = (MCTotalErr + " Case Errors");

    //measure TEA ACCURACY against the standard
    if (TEAaveAcc <= 80 && TEAsum > 0) {
        document.getElementById("TEAAccuracyScore").innerHTML = (((TEAaveAcc).toFixed(2)) + "% Accuracy");
    } else if (TEAaveAcc < 90 && TEAaveAcc > 75) {
        document.getElementById("TEAAccuracyScore").innerHTML = (((TEAaveAcc).toFixed(2)) + "% Accuracy");
    } else if (TEAaveAcc >= 90) {
        document.getElementById("TEAAccuracyScore").innerHTML = (((TEAaveAcc).toFixed(2)) + "% Accuracy")
    } else if (TEAacc1 < 90 && TEAacc1 > 75) {
        console.log("Almost!")

    } else {
        console.log("No Data")
    }
// Measure Consistency for Star Value TEA ACCURACY
    var TEAaccIsConsistent = (TEAaccConsistency / TEAsum) * 100;
    if (TEAaccIsConsistent >= 90 && TEAaveAcc >= 95) {
        document.getElementById("TEAStarScore").innerHTML = "&#x2605 &#x2605 &#x2605"; //removed 4th star from consistency rule, deprecated by DCO procedural rules.
            // document.getElementById("prodSARStarDescriptor").innerHTML = "Highly Effective"
            document.getElementById("TEAStarDescriptor").innerHTML = "Solid Performer"
        document.getElementById("TEAAccuracyFinal").innerHTML = "Consistently Met Goal"
    } else if (TEAaccIsConsistent < 90 && TEAaveAcc >= 95) {
        document.getElementById("TEAStarScore").innerHTML = "&#x2605 &#x2605 &#x2605";
        document.getElementById("TEAStarDescriptor").innerHTML = "Solid Performer";
        document.getElementById("TEAAccuracyFinal").innerHTML = "Inconsistently Met Goal";
    } else if (TEAaveAcc > 79.99 && TEAaveAcc < 95) {
        document.getElementById("TEAStarScore").innerHTML = "&#x2605 &#x2605";
        document.getElementById("TEAStarDescriptor").innerHTML = "Needs Improvement";
        document.getElementById("TEAAccuracyFinal").innerHTML = "Missed Goal";
    } else if (TEAaveAcc > 0 && TEAaveAcc <= 79.99) {
        document.getElementById("TEAStarScore").innerHTML = "&#x2605";
        document.getElementById("TEAStarDescriptor").innerHTML = "Unsatisfactory";
        document.getElementById("TEAAccuracyFinal").innerHTML = "Missed Goal";
    }
// Add Up Total Reviews and Total Errors FOR TEA ACCURACY

    var TEATotalAcc = Number(TEAcaseReview1) + Number(TEAcaseReview2) + Number(TEAcaseReview3) + Number(TEAcaseReview4) + Number(TEAcaseReview5) + Number(TEAcaseReview6) + Number(TEAcaseReview7) + Number(TEAcaseReview8) + Number(TEAcaseReview9) + Number(TEAcaseReview10) + Number(TEAcaseReview11) + Number(TEAcaseReview12);
    document.getElementById("TEAAccReviewed").innerHTML = (TEATotalAcc + " Case Reviews");
    var TEATotalErr = Number(TEAcaseError1) + Number(TEAcaseError2) + Number(TEAcaseError3) + Number(TEAcaseError4) + Number(TEAcaseError5) + Number(TEAcaseError6) + Number(TEAcaseError7) + Number(TEAcaseError8) + Number(TEAcaseError9) + Number(TEAcaseError10) + Number(TEAcaseError11) + Number(TEAcaseError12);
    document.getElementById("TEAAccError").innerHTML = (TEATotalErr + " Case Errors");
// -----------------------------------------------------------------------
// -----------------------------------------------------------------------
// ------------------------ TIMELINESS SECTION BEGINS --------------------
// -----------------------------------------------------------------------
// -----------------------------------------------------------------------
// ------------SNAP ABCDE TIME--------------
//RESET SNAP TIME COUNTERS
    let snapTime1 = 0;
    let snapTime2 = 0;
    let snapTime3 = 0;
    let snapTime4 = 0;
    let snapTime5 = 0;
    let snapTime6 = 0;
    let snapTime7 = 0;
    let snapTime8 = 0;
    let snapTime9 = 0;
    let snapTime10 = 0;
    let snapTime11 = 0;
    let snapTime12 = 0;
    let snapWorked1 = 0;
    let snapWorked2 = 0;
    let snapWorked3 = 0;
    let snapWorked4 = 0;
    let snapWorked5 = 0;
    let snapWorked6 = 0;
    let snapWorked7 = 0;
    let snapWorked8 = 0;
    let snapWorked9 = 0;
    let snapWorked10 = 0;
    let snapWorked11 = 0;
    let snapWorked12 = 0;
    let snapTimeLate1 = 0;
    let snapTimeLate2 = 0;
    let snapTimeLate3 = 0;
    let snapTimeLate4 = 0;
    let snapTimeLate5 = 0;
    let snapTimeLate6 = 0;
    let snapTimeLate7 = 0;
    let snapTimeLate8 = 0;
    let snapTimeLate9 = 0;
    let snapTimeLate10 = 0;
    let snapTimeLate11 = 0;
    let snapTimeLate12 = 0;
    let snapTimeReassigned1 = 0;
    let snapTimeReassigned2 = 0;
    let snapTimeReassigned3 = 0;
    let snapTimeReassigned4 = 0;
    let snapTimeReassigned5 = 0;
    let snapTimeReassigned6 = 0;
    let snapTimeReassigned7 = 0;
    let snapTimeReassigned8 = 0;
    let snapTimeReassigned9 = 0;
    let snapTimeReassigned10 = 0;
    let snapTimeReassigned11 = 0;
    let snapTimeReassigned12 = 0;
    var snapTimeCount = 0;
    var snapWorkedCount = 0;
    let snapTimeLateCount = 0;
    var snapTimeConsistency = 0;
// --------------------
// LOAD UP DATA
// --------------------
    // --------------------SNAP TIMELINESS——————————
//Load the Mule 1
    snapWorked1 = Number(document.getElementById("m1Time").value);
    snapTimeLate1 = Number(document.getElementById("m1Late").value);
    snapTimeReassigned1 = Number(document.getElementById("m1reassigned").value);
//CHECK OUTPUTS FOR ERROR 1
    if (snapTimeLate1 > 0 && snapTimeReassigned1 > 0) {
        snapTimeLate1 + snapTimeReassigned1;
    } else if (snapTimeLate1 > 0 || snapTimeReassigned1 > 0) {
        snapTimeLate1 + snapTimeReassigned1;
    } else {
        snapTimeLate1 = 0
    }
    console.log(snapWorked1 + " worked, late" + snapTimeLate1 + ", reassigned " + snapTimeReassigned1);
//Load the Mule 2
    snapWorked2 = Number(document.getElementById("m2Time").value);
    snapTimeLate2 = Number(document.getElementById("m2Late").value);
    snapTimeReassigned2 = Number(document.getElementById("m2reassigned").value);
//CHECK OUTPUTS FOR ERROR 2
    if (snapTimeLate2 > 0 && snapTimeReassigned2 > 0) {
        snapTimeLate2 + snapTimeReassigned2;
    } else if (snapTimeLate2 > 0 || snapTimeReassigned2 > 0) {
        snapTimeLate2 + snapTimeReassigned2;
    } else {
        snapTimeLate2 = 0
    }
    console.log(snapWorked2 + " worked, late" + snapTimeLate2 + ", reassigned " + snapTimeReassigned2);
//Load the Mule 3
    snapWorked3 = Number(document.getElementById("m3Time").value);
    snapTimeLate3 = Number(document.getElementById("m3Late").value);
    snapTimeReassigned3 = Number(document.getElementById("m3reassigned").value);
//CHECK OUTPUTS FOR ERROR 3
    if (snapTimeLate3 > 0 && snapTimeReassigned3 > 0) {
        snapTimeLate3 + snapTimeReassigned3;
    } else if (snapTimeLate3 > 0 || snapTimeReassigned3 > 0) {
        snapTimeLate3 + snapTimeReassigned3;
    } else {
        snapTimeLate3 = 0
    }
    console.log(snapWorked3 + " worked, late" + snapTimeLate3 + ", reassigned " + snapTimeReassigned3);
//Load the Mule 4
    snapWorked4 = Number(document.getElementById("m4Time").value);
    snapTimeLate4 = Number(document.getElementById("m4Late").value);
    snapTimeReassigned4 = Number(document.getElementById("m4reassigned").value);
//CHECK OUTPUTS FOR ERROR 4
    if (snapTimeLate4 > 0 && snapTimeReassigned4 > 0) {
        snapTimeLate4 + snapTimeReassigned4;
    } else if (snapTimeLate4 > 0 || snapTimeReassigned4 > 0) {
        snapTimeLate4 + snapTimeReassigned4;
    } else {
        snapTimeLate4 = 0
    }
    console.log(snapWorked4 + " worked, late" + snapTimeLate4 + ", reassigned " + snapTimeReassigned4);
//Load the Mule 5
    snapWorked5 = Number(document.getElementById("m5Time").value);
    snapTimeLate5 = Number(document.getElementById("m5Late").value);
    snapTimeReassigned5 = Number(document.getElementById("m5reassigned").value);
//CHECK OUTPUTS FOR ERROR 5
    if (snapTimeLate5 > 0 && snapTimeReassigned5 > 0) {
        snapTimeLate5 + snapTimeReassigned5;
    } else if (snapTimeLate5 > 0 || snapTimeReassigned5 > 0) {
        snapTimeLate5 + snapTimeReassigned5;
    } else {
        snapTimeLate5 = 0
    }
    console.log(snapWorked5 + " worked, late" + snapTimeLate5 + ", reassigned " + snapTimeReassigned5);
//Load the Mule 6
    snapWorked6 = Number(document.getElementById("m6Time").value);
    snapTimeLate6 = Number(document.getElementById("m6Late").value);
    snapTimeReassigned6 = Number(document.getElementById("m6reassigned").value);
//CHECK OUTPUTS FOR ERROR 6
    if (snapTimeLate6 > 0 && snapTimeReassigned6 > 0) {
        snapTimeLate6 + snapTimeReassigned6;
    } else if (snapTimeLate6 > 0 || snapTimeReassigned6 > 0) {
        snapTimeLate6 + snapTimeReassigned6;
    } else {
        snapTimeLate6 = 0
    }
    console.log(snapWorked6 + " worked, late" + snapTimeLate6 + ", reassigned " + snapTimeReassigned6);
//Load the Mule 7
    snapWorked7 = Number(document.getElementById("m7Time").value);
    snapTimeLate7 = Number(document.getElementById("m7Late").value);
    snapTimeReassigned7 = Number(document.getElementById("m7reassigned").value);
//CHECK OUTPUTS FOR ERROR 7
    if (snapTimeLate7 > 0 && snapTimeReassigned7 > 0) {
        snapTimeLate7 + snapTimeReassigned7;
    } else if (snapTimeLate7 > 0 || snapTimeReassigned7 > 0) {
        snapTimeLate7 + snapTimeReassigned7;
    } else {
        snapTimeLate7 = 0
    }
    console.log(snapWorked7 + " worked, late" + snapTimeLate7 + ", reassigned " + snapTimeReassigned7);
//Load the Mule 8
    snapWorked8 = Number(document.getElementById("m8Time").value);
    snapTimeLate8 = Number(document.getElementById("m8Late").value);
    snapTimeReassigned8 = Number(document.getElementById("m8reassigned").value);
//CHECK OUTPUTS FOR ERROR 8
    if (snapTimeLate8 > 0 && snapTimeReassigned8 > 0) {
        snapTimeLate8 + snapTimeReassigned8;
    } else if (snapTimeLate8 > 0 || snapTimeReassigned8 > 0) {
        snapTimeLate8 + snapTimeReassigned8;
    } else {
        snapTimeLate8 = 0
    }
    console.log(snapWorked8 + " worked, late" + snapTimeLate8 + ", reassigned " + snapTimeReassigned8);
//Load the Mule 9
    snapWorked9 = Number(document.getElementById("m9Time").value);
    snapTimeLate9 = Number(document.getElementById("m9Late").value);
    snapTimeReassigned9 = Number(document.getElementById("m9reassigned").value);
//CHECK OUTPUTS FOR ERROR 9
    if (snapTimeLate9 > 0 && snapTimeReassigned9 > 0) {
        snapTimeLate9 + snapTimeReassigned9;
    } else if (snapTimeLate9 > 0 || snapTimeReassigned9 > 0) {
        snapTimeLate9 + snapTimeReassigned9;
    } else {
        snapTimeLate9 = 0
    }
    console.log(snapWorked9 + " worked, late" + snapTimeLate9 + ", reassigned " + snapTimeReassigned9);
//Load the Mule 10
    snapWorked10 = Number(document.getElementById("m10Time").value);
    snapTimeLate10 = Number(document.getElementById("m10Late").value);
    snapTimeReassigned10 = Number(document.getElementById("m10reassigned").value);
//CHECK OUTPUTS FOR ERROR 10
    if (snapTimeLate10 > 0 && snapTimeReassigned10 > 0) {
        snapTimeLate10 + snapTimeReassigned10;
    } else if (snapTimeLate10 > 0 || snapTimeReassigned10 > 0) {
        snapTimeLate10 + snapTimeReassigned10;
    } else {
        snapTimeLate10 = 0
    }
    console.log(snapWorked10 + " worked, late" + snapTimeLate10 + ", reassigned " + snapTimeReassigned10);
//Load the Mule 11
    snapWorked11 = Number(document.getElementById("m11Time").value);
    snapTimeLate11 = Number(document.getElementById("m11Late").value);
    snapTimeReassigned11 = Number(document.getElementById("m11reassigned").value);
//CHECK OUTPUTS FOR ERROR 11
    if (snapTimeLate11 > 0 && snapTimeReassigned11 > 0) {
        snapTimeLate11 + snapTimeReassigned11;
    } else if (snapTimeLate11 > 0 || snapTimeReassigned11 > 0) {
        snapTimeLate11 + snapTimeReassigned11;
    } else {
        snapTimeLate11 = 0
    }
    console.log(snapWorked11 + " worked, late" + snapTimeLate11 + ", reassigned " + snapTimeReassigned11);
//Load the Mule 12
    snapWorked12 = Number(document.getElementById("m12Time").value);
    snapTimeLate12 = Number(document.getElementById("m12Late").value);
    snapTimeReassigned12 = Number(document.getElementById("m12reassigned").value);
//CHECK OUTPUTS FOR ERROR 12
    if (snapTimeLate12 > 0 && snapTimeReassigned12 > 0) {
        snapTimeLate12 + snapTimeReassigned12;
    } else if (snapTimeLate12 > 0 || snapTimeReassigned12 > 0) {
        snapTimeLate12 + snapTimeReassigned12;
    } else {
        snapTimeLate12 = 0
    }
    console.log(snapWorked12 + " worked, late" + snapTimeLate12 + ", reassigned " + snapTimeReassigned12);
//-------------------DONE--------------------
//Set SNAP Time Counters
    snapTime1 = (1 - ((snapTimeLate1 + snapTimeReassigned1) / snapWorked1)) * 100;
    if (snapTime1 >= 95) {
        snapTimeConsistency++;
        snapTimeCount++;
    } else if (snapTime1 > 0 && snapTime1 < 95) {
        snapTimeCount++;
    } else {
        snapTime1 = 0;
    }
    snapTime2 = (1 - ((snapTimeLate2 + snapTimeReassigned2) / snapWorked2)) * 100;
    if (snapTime2 >= 95) {
        snapTimeConsistency++;
        snapTimeCount++;
    } else if (snapTime2 > 0 && snapTime2 < 95) {
        snapTimeCount++;
    } else {
        snapTime2 = 0;
    }
    snapTime3 = (1 - ((snapTimeLate3 + snapTimeReassigned3) / snapWorked3)) * 100;
    if (snapTime3 >= 95) {
        snapTimeConsistency++;
        snapTimeCount++;
    } else if (snapTime3 > 0 && snapTime3 < 95) {
        snapTimeCount++;
    } else {
        snapTime3 = 0;
    }
    snapTime4 = (1 - ((snapTimeLate4 + snapTimeReassigned4) / snapWorked4)) * 100;
    if (snapTime4 >= 95) {
        snapTimeConsistency++;
        snapTimeCount++;
    } else if (snapTime4 > 0 && snapTime4 < 95) {
        snapTimeCount++;
    } else {
        snapTime4 = 0;
    }
    snapTime5 = (1 - ((snapTimeLate5 + snapTimeReassigned5) / snapWorked5)) * 100;
    if (snapTime5 >= 95) {
        snapTimeConsistency++;
        snapTimeCount++;
    } else if (snapTime5 > 0 && snapTime5 < 95) {
        snapTimeCount++;
    } else {
        snapTime5 = 0;
    }
    snapTime6 = (1 - ((snapTimeLate6 + snapTimeReassigned6) / snapWorked6)) * 100;
    if (snapTime6 >= 95) {
        snapTimeConsistency++;
        snapTimeCount++;
    } else if (snapTime6 > 0 && snapTime6 < 95) {
        snapTimeCount++;
    } else {
        snapTime6 = 0;
    }
    snapTime7 = (1 - ((snapTimeLate7 + snapTimeReassigned7) / snapWorked7)) * 100;
    if (snapTime7 >= 95) {
        snapTimeConsistency++;
        snapTimeCount++;
    } else if (snapTime7 > 0 && snapTime7 < 95) {
        snapTimeCount++;
    } else {
        snapTime7 = 0;
    }
    snapTime8 = (1 - ((snapTimeLate8 + snapTimeReassigned8) / snapWorked8)) * 100;
    if (snapTime8 >= 95) {
        snapTimeConsistency++;
        snapTimeCount++;
    } else if (snapTime8 > 0 && snapTime8 < 95) {
        snapTimeCount++;
    } else {
        snapTime8 = 0;
    }
    snapTime9 = (1 - ((snapTimeLate9 + snapTimeReassigned9) / snapWorked9)) * 100;
    if (snapTime9 >= 95) {
        snapTimeConsistency++;
        snapTimeCount++;
    } else if (snapTime9 > 0 && snapTime9 < 95) {
        snapTimeCount++;
    } else {
        snapTime9 = 0;
    }
    snapTime10 = (1 - ((snapTimeLate10 + snapTimeReassigned10) / snapWorked10)) * 100;
    if (snapTime10 >= 95) {
        snapTimeConsistency++;
        snapTimeCount++;
    } else if (snapTime10 > 0 && snapTime10 < 95) {
        snapTimeCount++;
    } else {
        snapTime10 = 0;
    }
    snapTime11 = (1 - ((snapTimeLate11 + snapTimeReassigned11) / snapWorked11)) * 100;
    if (snapTime11 >= 95) {
        snapTimeConsistency++;
        snapTimeCount++;
    } else if (snapTime11 > 0 && snapTime11 < 95) {
        snapTimeCount++;
    } else {
        snapTime11 = 0;
    }
    snapTime12 = (1 - ((snapTimeLate12 + snapTimeReassigned12) / snapWorked12)) * 100;
    if (snapTime12 >= 95) {
        snapTimeConsistency++;
        snapTimeCount++;
    } else if (snapTime12 > 0 && snapTime12 < 95) {
        snapTimeCount++;
    } else {
        snapTime12 = 0;
    }
    console.log(snapTimeConsistency + " Consistency Value");
    console.log(snapTimeCount + " snapTime Count Value");
//--------------------DONE--------------------
// --------------------
// FILL REPORT FIELDS ON HTML PAGE
// --------------------

// log out SNAP timeliness data
    document.getElementById("month1-time").innerHTML = (((snapTime1).toFixed(2)) + "%");
    document.getElementById("month2-time").innerHTML = (((snapTime2).toFixed(2)) + "%");
    document.getElementById("month3-time").innerHTML = (((snapTime3).toFixed(2)) + "%");
    document.getElementById("month4-time").innerHTML = (((snapTime4).toFixed(2)) + "%");
    document.getElementById("month5-time").innerHTML = (((snapTime5).toFixed(2)) + "%");
    document.getElementById("month6-time").innerHTML = (((snapTime6).toFixed(2)) + "%");
    document.getElementById("month7-time").innerHTML = (((snapTime7).toFixed(2)) + "%");
    document.getElementById("month8-time").innerHTML = (((snapTime8).toFixed(2)) + "%");
    document.getElementById("month9-time").innerHTML = (((snapTime9).toFixed(2)) + "%");
    document.getElementById("month10-time").innerHTML = (((snapTime10).toFixed(2)) + "%");
    document.getElementById("month11-time").innerHTML = (((snapTime11).toFixed(2)) + "%");
    document.getElementById("month12-time").innerHTML = (((snapTime12).toFixed(2)) + "%");

// --------------------
// PGCS RATING PREP
// --------------------

// SNAP accuracy calculations
    let snapTimeTotal = 0;
    let snapTimeSum = snapTimeCount;

    switch (snapTimeSum) {
        case 12:
            snapTimeTotal = (snapTime1 + snapTime2 + snapTime3 + snapTime4 + snapTime5 + snapTime6 + snapTime7 + snapTime8 + snapTime9 + snapTime10 + snapTime11 + snapTime12);
            console.log("Running 12");
            break;
        case 11:
            snapTimeTotal = (snapTime1 + snapTime2 + snapTime3 + snapTime4 + snapTime5 + snapTime6 + snapTime7 + snapTime8 + snapTime9 + snapTime10 + snapTime11 + snapTime12);
            console.log("Running 11");
            break;
        case 10:
            snapTimeTotal = (snapTime1 + snapTime2 + snapTime3 + snapTime4 + snapTime5 + snapTime6 + snapTime7 + snapTime8 + snapTime9 + snapTime10 + snapTime11 + snapTime12);
            console.log("Running 10");
            break;
        case 9:
            snapTimeTotal = (snapTime1 + snapTime2 + snapTime3 + snapTime4 + snapTime5 + snapTime6 + snapTime7 + snapTime8 + snapTime9 + snapTime10 + snapTime11 + snapTime12);
            console.log("Running 9");
            break;
        case 8:
            snapTimeTotal = (snapTime1 + snapTime2 + snapTime3 + snapTime4 + snapTime5 + snapTime6 + snapTime7 + snapTime8 + snapTime9 + snapTime10 + snapTime11 + snapTime12);
            console.log("Running 8");
            break;
        case 7:
            snapTimeTotal = (snapTime1 + snapTime2 + snapTime3 + snapTime4 + snapTime5 + snapTime6 + snapTime7 + snapTime8 + snapTime9 + snapTime10 + snapTime11 + snapTime12);
            console.log("Running 7");
            break;
        case 6:
            snapTimeTotal = (snapTime1 + snapTime2 + snapTime3 + snapTime4 + snapTime5 + snapTime6 + snapTime7 + snapTime8 + snapTime9 + snapTime10 + snapTime11 + snapTime12);
            console.log("Running 6");
            break;
        case 5:
            snapTimeTotal = (snapTime1 + snapTime2 + snapTime3 + snapTime4 + snapTime5 + snapTime6 + snapTime7 + snapTime8 + snapTime9 + snapTime10 + snapTime11 + snapTime12);
            console.log("Running 5");
            break;
        case 4:
            snapTimeTotal = (snapTime1 + snapTime2 + snapTime3 + snapTime4 + snapTime5 + snapTime6 + snapTime7 + snapTime8 + snapTime9 + snapTime10 + snapTime11 + snapTime12);
            console.log("Running 4");
            break;
        case 3:
            snapTimeTotal = (snapTime1 + snapTime2 + snapTime3 + snapTime4 + snapTime5 + snapTime6 + snapTime7 + snapTime8 + snapTime9 + snapTime10 + snapTime11 + snapTime12);
            console.log("Running 3");
            break;
        case 2:
            snapTimeTotal = (snapTime1 + snapTime2 + snapTime3 + snapTime4 + snapTime5 + snapTime6 + snapTime7 + snapTime8 + snapTime9 + snapTime10 + snapTime11 + snapTime12);
            console.log("Running 2");
            break;
        case 1:
            snapTimeTotal = (snapTime1 + snapTime2 + snapTime3 + snapTime4 + snapTime5 + snapTime6 + snapTime7 + snapTime8 + snapTime9 + snapTime10 + snapTime11 + snapTime12);
            console.log("Running 1");
            break;
        default:
            console.log("Awaiting Input");
    }
    let aveSNAPTime = snapTimeTotal / snapTimeSum;
    console.log("Snap Time Sum = " + snapTimeSum);
    console.log("Sum SNAP Time = " + snapTimeTotal);
    console.log("Ave SNAP Time = " + aveSNAPTime);
    document.getElementsByName("sum").value = aveSNAPTime;

//------------------
//OUTPUT TO PGCS SUMMARY SECTION
//------------------
//measure SNAP TIMELINESS against the standard
    if (aveSNAPTime <= 80 && snapTimeSum > 0) {
        document.getElementById("TimeScore").innerHTML = (((aveSNAPTime).toFixed(2)) + "% Timeliness");
    } else if (aveSNAPTime < 95 && aveSNAPTime > 80) {
        document.getElementById("TimeScore").innerHTML = (((aveSNAPTime).toFixed(2)) + "% Timeliness");
    } else if (aveSNAPTime >= 95) {
        document.getElementById("TimeScore").innerHTML = (((aveSNAPTime).toFixed(2)) + "% Timeliness")
    } else {
        console.log("No Data")
    }

    // log out SNAP Time data to grid
    document.getElementById("month1-time").innerHTML = (((snapTime1).toFixed(2)) + "%");
    if (snapTime1 > 0) {
        document.getElementById("m1TimTable").innerHTML = "S:" + snapWorked1 + "\(" + snapTimeLate1 + "\):" + (((snapTime1).toFixed(2)) + "%");
    } else {
        document.getElementById("m1TimTable").innerHTML = "No Data";
    }
    document.getElementById("month2-time").innerHTML = (((snapTime2).toFixed(2)) + "%");
    if (snapTime2 > 0) {
        document.getElementById("m2TimTable").innerHTML = "S:" + snapWorked2 + "\(" + snapTimeLate2 + "\):" + (((snapTime2).toFixed(2)) + "%");
    } else {
        document.getElementById("m2TimTable").innerHTML = "No Data";
    }
    document.getElementById("month3-time").innerHTML = (((snapTime3).toFixed(2)) + "%");
    if (snapTime3 > 0) {
        document.getElementById("m3TimTable").innerHTML = "S:" + snapWorked3 + "\(" + snapTimeLate3 + "\):" + (((snapTime3).toFixed(2)) + "%");
    } else {
        document.getElementById("m3TimTable").innerHTML = "No Data";
    }
    document.getElementById("month4-time").innerHTML = (((snapTime4).toFixed(2)) + "%");
    if (snapTime4 > 0) {
        document.getElementById("m4TimTable").innerHTML = "S:" + snapWorked4 + "\(" + snapTimeLate4 + "\):" + (((snapTime4).toFixed(2)) + "%");
    } else {
        document.getElementById("m4TimTable").innerHTML = "No Data";
    }
    document.getElementById("month5-time").innerHTML = (((snapTime5).toFixed(2)) + "%");
    if (snapTime5 > 0) {
        document.getElementById("m5TimTable").innerHTML = "S:" + snapWorked5 + "\(" + snapTimeLate5 + "\):" + (((snapTime5).toFixed(2)) + "%");
    } else {
        document.getElementById("m5TimTable").innerHTML = "No Data";
    }
    document.getElementById("month6-time").innerHTML = (((snapTime6).toFixed(2)) + "%");
    if (snapTime6 > 0) {
        document.getElementById("m6TimTable").innerHTML = "S:" + snapWorked6 + "\(" + snapTimeLate6 + "\):" + (((snapTime6).toFixed(2)) + "%");
    } else {
        document.getElementById("m6TimTable").innerHTML = "No Data";
    }
    document.getElementById("month7-time").innerHTML = (((snapTime7).toFixed(2)) + "%");
    if (snapTime7 > 0) {
        document.getElementById("m7TimTable").innerHTML = "S:" + snapWorked7 + "\(" + snapTimeLate7 + "\):" + (((snapTime7).toFixed(2)) + "%");
    } else {
        document.getElementById("m7TimTable").innerHTML = "No Data";
    }
    document.getElementById("month8-time").innerHTML = (((snapTime8).toFixed(2)) + "%");
    if (snapTime8 > 0) {
        document.getElementById("m8TimTable").innerHTML = "S:" + snapWorked8 + "\(" + snapTimeLate8 + "\):" + (((snapTime8).toFixed(2)) + "%");
    } else {
        document.getElementById("m8TimTable").innerHTML = "No Data";
    }
    document.getElementById("month9-time").innerHTML = (((snapTime9).toFixed(2)) + "%");
    if (snapTime9 > 0) {
        document.getElementById("m9TimTable").innerHTML = "S:" + snapWorked9 + "\(" + snapTimeLate9 + "\):" + (((snapTime9).toFixed(2)) + "%");
    } else {
        document.getElementById("m9TimTable").innerHTML = "No Data";
    }
    document.getElementById("month10-time").innerHTML = (((snapTime10).toFixed(2)) + "%");
    if (snapTime10 > 0) {
        document.getElementById("m10TimTable").innerHTML = "S:" + snapWorked10 + "\(" + snapTimeLate10 + "\):" + (((snapTime10).toFixed(2)) + "%");
    } else {
        document.getElementById("m10TimTable").innerHTML = "No Data";
    }
    document.getElementById("month11-time").innerHTML = (((snapTime11).toFixed(2)) + "%");
    if (snapTime11 > 0) {
        document.getElementById("m11TimTable").innerHTML = "S:" + snapWorked11 + "\(" + snapTimeLate11 + "\):" + (((snapTime11).toFixed(2)) + "%");
    } else {
        document.getElementById("m11TimTable").innerHTML = "No Data";
    }
    document.getElementById("month12-time").innerHTML = (((snapTime12).toFixed(2)) + "%");
    if (snapTime12 > 0) {
        document.getElementById("m12TimTable").innerHTML = "S:" + snapWorked12 + "\(" + snapTimeLate12 + "\):" + (((snapTime12).toFixed(2)) + "%");
    } else {
        document.getElementById("m12TimTable").innerHTML = "No Data";
    }


// Measure Consistency for Star Value SNAP TIMELINESS
    var snapTimeIsConsistent = (snapTimeConsistency / snapTimeSum) * 100;
    if (snapTimeIsConsistent >= 95 && aveSNAPTime > 95) {
        document.getElementById("StarScoreTime").innerHTML = "&#x2605 &#x2605 &#x2605"; //removed 4th star from consistency rule, deprecated by DCO procedural rules.
            // document.getElementById("prodSARStarDescriptor").innerHTML = "Highly Effective"
            document.getElementById("StarDescriptorTime").innerHTML = "Solid Performer"
        document.getElementById("TimeFinal").innerHTML = "Consistently Met Goal"
    } else if (snapTimeIsConsistent < 95 && aveSNAPTime >= 95) {
        document.getElementById("StarScoreTime").innerHTML = "&#x2605 &#x2605 &#x2605";
        document.getElementById("StarDescriptorTime").innerHTML = "Solid Performer";
        document.getElementById("TimeFinal").innerHTML = "Inconsistently Met Goal";
    } else if (aveSNAPTime > 30 && aveSNAPTime < 95) {
        document.getElementById("StarScoreTime").innerHTML = "&#x2605 &#x2605";
        document.getElementById("StarDescriptorTime").innerHTML = "Needs Improvement";
        document.getElementById("TimeFinal").innerHTML = "Missed Goal";
    } else if (aveSNAPTime > 0 && aveSNAPTime <= 30) {
        document.getElementById("StarScoreTime").innerHTML = "&#x2605";
        document.getElementById("StarDescriptorTime").innerHTML = "Unsatisfactory";
        document.getElementById("TimeFinal").innerHTML = "Missed Goal";
    }
// Add Up Total Reviews and Total Errors FOR SNAP TIMELINESS

// Add Up Total Reviews and Total Errors FOR SNAP TimeSARLINESS AND ABCDE

    var TotalSnapTime = Number(snapWorked1) + Number(snapWorked2) + Number(snapWorked3) + Number(snapWorked4) + Number(snapWorked5) + Number(snapWorked6) + Number(snapWorked7) + Number(snapWorked8) + Number(snapWorked9) + Number(snapWorked10) + Number(snapWorked11) + Number(snapWorked12);
    document.getElementById("TimWorked").innerHTML = (TotalSnapTime + " Cases Worked");
    var TotalSnapLate = Number(snapTimeLate1) + Number(snapTimeLate2) + Number(snapTimeLate3) + Number(snapTimeLate4) + Number(snapTimeLate5) + Number(snapTimeLate6) + Number(snapTimeLate7) + Number(snapTimeLate8) + Number(snapTimeLate9) + Number(snapTimeLate10) + Number(snapTimeLate11) + Number(snapTimeLate12) + Number(snapTimeReassigned1) + Number(snapTimeReassigned2) + Number(snapTimeReassigned3) + Number(snapTimeReassigned4) + Number(snapTimeReassigned5) + Number(snapTimeReassigned6) + Number(snapTimeReassigned7) + Number(snapTimeReassigned8) + Number(snapTimeReassigned9) + Number(snapTimeReassigned10) + Number(snapTimeReassigned11) + Number(snapTimeReassigned12);
    document.getElementById("TimLate").innerHTML = (TotalSnapLate + " Late Cases");

//------------- SNAP EXPEDITE TIMELINESS --------------

//RESET SNAP TimeEXP COUNTERS
    let snapTimeEXP1 = 0;
    let snapTimeEXP2 = 0;
    let snapTimeEXP3 = 0;
    let snapTimeEXP4 = 0;
    let snapTimeEXP5 = 0;
    let snapTimeEXP6 = 0;
    let snapTimeEXP7 = 0;
    let snapTimeEXP8 = 0;
    let snapTimeEXP9 = 0;
    let snapTimeEXP10 = 0;
    let snapTimeEXP11 = 0;
    let snapTimeEXP12 = 0;
    let snapWorkedEXP1 = 0;
    let snapWorkedEXP2 = 0;
    let snapWorkedEXP3 = 0;
    let snapWorkedEXP4 = 0;
    let snapWorkedEXP5 = 0;
    let snapWorkedEXP6 = 0;
    let snapWorkedEXP7 = 0;
    let snapWorkedEXP8 = 0;
    let snapWorkedEXP9 = 0;
    let snapWorkedEXP10 = 0;
    let snapWorkedEXP11 = 0;
    let snapWorkedEXP12 = 0;
    let snapTimeEXPLate1 = 0;
    let snapTimeEXPLate2 = 0;
    let snapTimeEXPLate3 = 0;
    let snapTimeEXPLate4 = 0;
    let snapTimeEXPLate5 = 0;
    let snapTimeEXPLate6 = 0;
    let snapTimeEXPLate7 = 0;
    let snapTimeEXPLate8 = 0;
    let snapTimeEXPLate9 = 0;
    let snapTimeEXPLate10 = 0;
    let snapTimeEXPLate11 = 0;
    let snapTimeEXPLate12 = 0;
    let snapTimeEXPReassigned1 = 0;
    let snapTimeEXPReassigned2 = 0;
    let snapTimeEXPReassigned3 = 0;
    let snapTimeEXPReassigned4 = 0;
    let snapTimeEXPReassigned5 = 0;
    let snapTimeEXPReassigned6 = 0;
    let snapTimeEXPReassigned7 = 0;
    let snapTimeEXPReassigned8 = 0;
    let snapTimeEXPReassigned9 = 0;
    let snapTimeEXPReassigned10 = 0;
    let snapTimeEXPReassigned11 = 0;
    let snapTimeEXPReassigned12 = 0;
    var snapTimeEXPCount = 0;
    var snapWorkedEXPCount = 0;
    let snapTimeEXPLateCount = 0;
    var snapTimeEXPConsistency = 0;
// --------------------
// LOAD UP DATA
// --------------------
    // --------------------SNAP TimeEXPLINESS——————————
//Load the Mule 1
    snapWorkedEXP1 = Number(document.getElementById("m1TimeEXP").value);
    snapTimeEXPLate1 = Number(document.getElementById("m1LateEXP").value);
    snapTimeEXPReassigned1 = Number(document.getElementById("m1EXPReassigned").value);
//CHECK OUTPUTS FOR ERROR 1
    if (snapTimeEXPLate1 > 0 && snapTimeEXPReassigned1 > 0) {
        snapTimeEXPLate1 + snapTimeEXPReassigned1;
    } else if (snapTimeEXPLate1 > 0 || snapTimeEXPReassigned1 > 0) {
        snapTimeEXPLate1 + snapTimeEXPReassigned1;
    } else {
        snapTimeEXPLate1 = 0
    }
    console.log(snapWorkedEXP1 + " WorkedEXP, late" + snapTimeEXPLate1 + ", reassigned " + snapTimeEXPReassigned1);
//Load the Mule 2
    snapWorkedEXP2 = Number(document.getElementById("m2TimeEXP").value);
    snapTimeEXPLate2 = Number(document.getElementById("m2LateEXP").value);
    snapTimeEXPReassigned2 = Number(document.getElementById("m2EXPReassigned").value);
//CHECK OUTPUTS FOR ERROR 2
    if (snapTimeEXPLate2 > 0 && snapTimeEXPReassigned2 > 0) {
        snapTimeEXPLate2 + snapTimeEXPReassigned2;
    } else if (snapTimeEXPLate2 > 0 || snapTimeEXPReassigned2 > 0) {
        snapTimeEXPLate2 + snapTimeEXPReassigned2;
    } else {
        snapTimeEXPLate2 = 0
    }
    console.log(snapWorkedEXP2 + " WorkedEXP, late" + snapTimeEXPLate2 + ", reassigned " + snapTimeEXPReassigned2);
//Load the Mule 3
    snapWorkedEXP3 = Number(document.getElementById("m3TimeEXP").value);
    snapTimeEXPLate3 = Number(document.getElementById("m3LateEXP").value);
    snapTimeEXPReassigned3 = Number(document.getElementById("m3EXPReassigned").value);
//CHECK OUTPUTS FOR ERROR 3
    if (snapTimeEXPLate3 > 0 && snapTimeEXPReassigned3 > 0) {
        snapTimeEXPLate3 + snapTimeEXPReassigned3;
    } else if (snapTimeEXPLate3 > 0 || snapTimeEXPReassigned3 > 0) {
        snapTimeEXPLate3 + snapTimeEXPReassigned3;
    } else {
        snapTimeEXPLate3 = 0
    }
    console.log(snapWorkedEXP3 + " WorkedEXP, late" + snapTimeEXPLate3 + ", reassigned " + snapTimeEXPReassigned3);
//Load the Mule 4
    snapWorkedEXP4 = Number(document.getElementById("m4TimeEXP").value);
    snapTimeEXPLate4 = Number(document.getElementById("m4LateEXP").value);
    snapTimeEXPReassigned4 = Number(document.getElementById("m4EXPReassigned").value);
//CHECK OUTPUTS FOR ERROR 4
    if (snapTimeEXPLate4 > 0 && snapTimeEXPReassigned4 > 0) {
        snapTimeEXPLate4 + snapTimeEXPReassigned4;
    } else if (snapTimeEXPLate4 > 0 || snapTimeEXPReassigned4 > 0) {
        snapTimeEXPLate4 + snapTimeEXPReassigned4;
    } else {
        snapTimeEXPLate4 = 0
    }
    console.log(snapWorkedEXP4 + " WorkedEXP, late" + snapTimeEXPLate4 + ", reassigned " + snapTimeEXPReassigned4);
//Load the Mule 5
    snapWorkedEXP5 = Number(document.getElementById("m5TimeEXP").value);
    snapTimeEXPLate5 = Number(document.getElementById("m5LateEXP").value);
    snapTimeEXPReassigned5 = Number(document.getElementById("m5EXPReassigned").value);
//CHECK OUTPUTS FOR ERROR 5
    if (snapTimeEXPLate5 > 0 && snapTimeEXPReassigned5 > 0) {
        snapTimeEXPLate5 + snapTimeEXPReassigned5;
    } else if (snapTimeEXPLate5 > 0 || snapTimeEXPReassigned5 > 0) {
        snapTimeEXPLate5 + snapTimeEXPReassigned5;
    } else {
        snapTimeEXPLate5 = 0
    }
    console.log(snapWorkedEXP5 + " WorkedEXP, late" + snapTimeEXPLate5 + ", reassigned " + snapTimeEXPReassigned5);
//Load the Mule 6
    snapWorkedEXP6 = Number(document.getElementById("m6TimeEXP").value);
    snapTimeEXPLate6 = Number(document.getElementById("m6LateEXP").value);
    snapTimeEXPReassigned6 = Number(document.getElementById("m6EXPReassigned").value);
//CHECK OUTPUTS FOR ERROR 6
    if (snapTimeEXPLate6 > 0 && snapTimeEXPReassigned6 > 0) {
        snapTimeEXPLate6 + snapTimeEXPReassigned6;
    } else if (snapTimeEXPLate6 > 0 || snapTimeEXPReassigned6 > 0) {
        snapTimeEXPLate6 + snapTimeEXPReassigned6;
    } else {
        snapTimeEXPLate6 = 0
    }
    console.log(snapWorkedEXP6 + " WorkedEXP, late" + snapTimeEXPLate6 + ", reassigned " + snapTimeEXPReassigned6);
//Load the Mule 7
    snapWorkedEXP7 = Number(document.getElementById("m7TimeEXP").value);
    snapTimeEXPLate7 = Number(document.getElementById("m7LateEXP").value);
    snapTimeEXPReassigned7 = Number(document.getElementById("m7EXPReassigned").value);
//CHECK OUTPUTS FOR ERROR 7
    if (snapTimeEXPLate7 > 0 && snapTimeEXPReassigned7 > 0) {
        snapTimeEXPLate7 + snapTimeEXPReassigned7;
    } else if (snapTimeEXPLate7 > 0 || snapTimeEXPReassigned7 > 0) {
        snapTimeEXPLate7 + snapTimeEXPReassigned7;
    } else {
        snapTimeEXPLate7 = 0
    }
    console.log(snapWorkedEXP7 + " WorkedEXP, late" + snapTimeEXPLate7 + ", reassigned " + snapTimeEXPReassigned7);
//Load the Mule 8
    snapWorkedEXP8 = Number(document.getElementById("m8TimeEXP").value);
    snapTimeEXPLate8 = Number(document.getElementById("m8LateEXP").value);
    snapTimeEXPReassigned8 = Number(document.getElementById("m8EXPReassigned").value);
//CHECK OUTPUTS FOR ERROR 8
    if (snapTimeEXPLate8 > 0 && snapTimeEXPReassigned8 > 0) {
        snapTimeEXPLate8 + snapTimeEXPReassigned8;
    } else if (snapTimeEXPLate8 > 0 || snapTimeEXPReassigned8 > 0) {
        snapTimeEXPLate8 + snapTimeEXPReassigned8;
    } else {
        snapTimeEXPLate8 = 0
    }
    console.log(snapWorkedEXP8 + " WorkedEXP, late" + snapTimeEXPLate8 + ", reassigned " + snapTimeEXPReassigned8);
//Load the Mule 9
    snapWorkedEXP9 = Number(document.getElementById("m9TimeEXP").value);
    snapTimeEXPLate9 = Number(document.getElementById("m9LateEXP").value);
    snapTimeEXPReassigned9 = Number(document.getElementById("m9EXPReassigned").value);
//CHECK OUTPUTS FOR ERROR 9
    if (snapTimeEXPLate9 > 0 && snapTimeEXPReassigned9 > 0) {
        snapTimeEXPLate9 + snapTimeEXPReassigned9;
    } else if (snapTimeEXPLate9 > 0 || snapTimeEXPReassigned9 > 0) {
        snapTimeEXPLate9 + snapTimeEXPReassigned9;
    } else {
        snapTimeEXPLate9 = 0
    }
    console.log(snapWorkedEXP9 + " WorkedEXP, late" + snapTimeEXPLate9 + ", reassigned " + snapTimeEXPReassigned9);
//Load the Mule 10
    snapWorkedEXP10 = Number(document.getElementById("m10TimeEXP").value);
    snapTimeEXPLate10 = Number(document.getElementById("m10LateEXP").value);
    snapTimeEXPReassigned10 = Number(document.getElementById("m10EXPReassigned").value);
//CHECK OUTPUTS FOR ERROR 10
    if (snapTimeEXPLate10 > 0 && snapTimeEXPReassigned10 > 0) {
        snapTimeEXPLate10 + snapTimeEXPReassigned10;
    } else if (snapTimeEXPLate10 > 0 || snapTimeEXPReassigned10 > 0) {
        snapTimeEXPLate10 + snapTimeEXPReassigned10;
    } else {
        snapTimeEXPLate10 = 0
    }
    console.log(snapWorkedEXP10 + " WorkedEXP, late" + snapTimeEXPLate10 + ", reassigned " + snapTimeEXPReassigned10);
//Load the Mule 11
    snapWorkedEXP11 = Number(document.getElementById("m11TimeEXP").value);
    snapTimeEXPLate11 = Number(document.getElementById("m11LateEXP").value);
    snapTimeEXPReassigned11 = Number(document.getElementById("m11EXPReassigned").value);
//CHECK OUTPUTS FOR ERROR 11
    if (snapTimeEXPLate11 > 0 && snapTimeEXPReassigned11 > 0) {
        snapTimeEXPLate11 + snapTimeEXPReassigned11;
    } else if (snapTimeEXPLate11 > 0 || snapTimeEXPReassigned11 > 0) {
        snapTimeEXPLate11 + snapTimeEXPReassigned11;
    } else {
        snapTimeEXPLate11 = 0
    }
    console.log(snapWorkedEXP11 + " WorkedEXP, late" + snapTimeEXPLate11 + ", reassigned " + snapTimeEXPReassigned11);
//Load the Mule 12
    snapWorkedEXP12 = Number(document.getElementById("m12TimeEXP").value);
    snapTimeEXPLate12 = Number(document.getElementById("m12LateEXP").value);
    snapTimeEXPReassigned12 = Number(document.getElementById("m12EXPReassigned").value);
//CHECK OUTPUTS FOR ERROR 12
    if (snapTimeEXPLate12 > 0 && snapTimeEXPReassigned12 > 0) {
        snapTimeEXPLate12 + snapTimeEXPReassigned12;
    } else if (snapTimeEXPLate12 > 0 || snapTimeEXPReassigned12 > 0) {
        snapTimeEXPLate12 + snapTimeEXPReassigned12;
    } else {
        snapTimeEXPLate12 = 0
    }
    console.log(snapWorkedEXP12 + " WorkedEXP, late" + snapTimeEXPLate12 + ", reassigned " + snapTimeEXPReassigned12);
//-------------------DONE--------------------
//Set SNAP TimeEXP Counters
    snapTimeEXP1 = (1 - ((snapTimeEXPLate1 + snapTimeEXPReassigned1) / snapWorkedEXP1)) * 100;
    if (snapTimeEXP1 >= 95) {
        snapTimeEXPConsistency++;
        snapTimeEXPCount++;
    } else if (snapTimeEXP1 > 0 && snapTimeEXP1 < 95) {
        snapTimeEXPCount++;
    } else {
        snapTimeEXP1 = 0;
    }
    snapTimeEXP2 = (1 - ((snapTimeEXPLate2 + snapTimeEXPReassigned2) / snapWorkedEXP2)) * 100;
    if (snapTimeEXP2 >= 95) {
        snapTimeEXPConsistency++;
        snapTimeEXPCount++;
    } else if (snapTimeEXP2 > 0 && snapTimeEXP2 < 95) {
        snapTimeEXPCount++;
    } else {
        snapTimeEXP2 = 0;
    }
    snapTimeEXP3 = (1 - ((snapTimeEXPLate3 + snapTimeEXPReassigned3) / snapWorkedEXP3)) * 100;
    if (snapTimeEXP3 >= 95) {
        snapTimeEXPConsistency++;
        snapTimeEXPCount++;
    } else if (snapTimeEXP3 > 0 && snapTimeEXP3 < 95) {
        snapTimeEXPCount++;
    } else {
        snapTimeEXP3 = 0;
    }
    snapTimeEXP4 = (1 - ((snapTimeEXPLate4 + snapTimeEXPReassigned4) / snapWorkedEXP4)) * 100;
    if (snapTimeEXP4 >= 95) {
        snapTimeEXPConsistency++;
        snapTimeEXPCount++;
    } else if (snapTimeEXP4 > 0 && snapTimeEXP4 < 95) {
        snapTimeEXPCount++;
    } else {
        snapTimeEXP4 = 0;
    }
    snapTimeEXP5 = (1 - ((snapTimeEXPLate5 + snapTimeEXPReassigned5) / snapWorkedEXP5)) * 100;
    if (snapTimeEXP5 >= 95) {
        snapTimeEXPConsistency++;
        snapTimeEXPCount++;
    } else if (snapTimeEXP5 > 0 && snapTimeEXP5 < 95) {
        snapTimeEXPCount++;
    } else {
        snapTimeEXP5 = 0;
    }
    snapTimeEXP6 = (1 - ((snapTimeEXPLate6 + snapTimeEXPReassigned6) / snapWorkedEXP6)) * 100;
    if (snapTimeEXP6 >= 95) {
        snapTimeEXPConsistency++;
        snapTimeEXPCount++;
    } else if (snapTimeEXP6 > 0 && snapTimeEXP6 < 95) {
        snapTimeEXPCount++;
    } else {
        snapTimeEXP6 = 0;
    }
    snapTimeEXP7 = (1 - ((snapTimeEXPLate7 + snapTimeEXPReassigned7) / snapWorkedEXP7)) * 100;
    if (snapTimeEXP7 >= 95) {
        snapTimeEXPConsistency++;
        snapTimeEXPCount++;
    } else if (snapTimeEXP7 > 0 && snapTimeEXP7 < 95) {
        snapTimeEXPCount++;
    } else {
        snapTimeEXP7 = 0;
    }
    snapTimeEXP8 = (1 - ((snapTimeEXPLate8 + snapTimeEXPReassigned8) / snapWorkedEXP8)) * 100;
    if (snapTimeEXP8 >= 95) {
        snapTimeEXPConsistency++;
        snapTimeEXPCount++;
    } else if (snapTimeEXP8 > 0 && snapTimeEXP8 < 95) {
        snapTimeEXPCount++;
    } else {
        snapTimeEXP8 = 0;
    }
    snapTimeEXP9 = (1 - ((snapTimeEXPLate9 + snapTimeEXPReassigned9) / snapWorkedEXP9)) * 100;
    if (snapTimeEXP9 >= 95) {
        snapTimeEXPConsistency++;
        snapTimeEXPCount++;
    } else if (snapTimeEXP9 > 0 && snapTimeEXP9 < 95) {
        snapTimeEXPCount++;
    } else {
        snapTimeEXP9 = 0;
    }
    snapTimeEXP10 = (1 - ((snapTimeEXPLate10 + snapTimeEXPReassigned10) / snapWorkedEXP10)) * 100;
    if (snapTimeEXP10 >= 95) {
        snapTimeEXPConsistency++;
        snapTimeEXPCount++;
    } else if (snapTimeEXP10 > 0 && snapTimeEXP10 < 95) {
        snapTimeEXPCount++;
    } else {
        snapTimeEXP10 = 0;
    }
    snapTimeEXP11 = (1 - ((snapTimeEXPLate11 + snapTimeEXPReassigned11) / snapWorkedEXP11)) * 100;
    if (snapTimeEXP11 >= 95) {
        snapTimeEXPConsistency++;
        snapTimeEXPCount++;
    } else if (snapTimeEXP11 > 0 && snapTimeEXP11 < 95) {
        snapTimeEXPCount++;
    } else {
        snapTimeEXP11 = 0;
    }
    snapTimeEXP12 = (1 - ((snapTimeEXPLate12 + snapTimeEXPReassigned12) / snapWorkedEXP12)) * 100;
    if (snapTimeEXP12 >= 95) {
        snapTimeEXPConsistency++;
        snapTimeEXPCount++;
    } else if (snapTimeEXP12 > 0 && snapTimeEXP12 < 95) {
        snapTimeEXPCount++;
    } else {
        snapTimeEXP12 = 0;
    }
    console.log(snapTimeEXPConsistency + " Consistency Value");
    console.log(snapTimeEXPCount + " snapTimeEXP Count Value");
//--------------------DONE--------------------
// --------------------
// FILL REPORT FIELDS ON HTML PAGE
// --------------------


// log out SNAP TimeEXPliness data
    document.getElementById("month1-timeEXP").innerHTML = (((snapTimeEXP1).toFixed(2)) + "%");
    document.getElementById("month2-timeEXP").innerHTML = (((snapTimeEXP2).toFixed(2)) + "%");
    document.getElementById("month3-timeEXP").innerHTML = (((snapTimeEXP3).toFixed(2)) + "%");
    document.getElementById("month4-timeEXP").innerHTML = (((snapTimeEXP4).toFixed(2)) + "%");
    document.getElementById("month5-timeEXP").innerHTML = (((snapTimeEXP5).toFixed(2)) + "%");
    document.getElementById("month6-timeEXP").innerHTML = (((snapTimeEXP6).toFixed(2)) + "%");
    document.getElementById("month7-timeEXP").innerHTML = (((snapTimeEXP7).toFixed(2)) + "%");
    document.getElementById("month8-timeEXP").innerHTML = (((snapTimeEXP8).toFixed(2)) + "%");
    document.getElementById("month9-timeEXP").innerHTML = (((snapTimeEXP9).toFixed(2)) + "%");
    document.getElementById("month10-timeEXP").innerHTML = (((snapTimeEXP10).toFixed(2)) + "%");
    document.getElementById("month11-timeEXP").innerHTML = (((snapTimeEXP11).toFixed(2)) + "%");
    document.getElementById("month12-timeEXP").innerHTML = (((snapTimeEXP12).toFixed(2)) + "%");

// --------------------
// PGCS RATING PREP
// --------------------

// SNAP accuracy calculations
    let snapTimeEXPTotal = 0;
    let snapTimeEXPSum = snapTimeEXPCount;

    switch (snapTimeEXPSum) {
        case 12:
            snapTimeEXPTotal = (snapTimeEXP1 + snapTimeEXP2 + snapTimeEXP3 + snapTimeEXP4 + snapTimeEXP5 + snapTimeEXP6 + snapTimeEXP7 + snapTimeEXP8 + snapTimeEXP9 + snapTimeEXP10 + snapTimeEXP11 + snapTimeEXP12);
            console.log("Running 12");
            break;
        case 11:
            snapTimeEXPTotal = (snapTimeEXP1 + snapTimeEXP2 + snapTimeEXP3 + snapTimeEXP4 + snapTimeEXP5 + snapTimeEXP6 + snapTimeEXP7 + snapTimeEXP8 + snapTimeEXP9 + snapTimeEXP10 + snapTimeEXP11 + snapTimeEXP12);
            console.log("Running 11");
            break;
        case 10:
            snapTimeEXPTotal = (snapTimeEXP1 + snapTimeEXP2 + snapTimeEXP3 + snapTimeEXP4 + snapTimeEXP5 + snapTimeEXP6 + snapTimeEXP7 + snapTimeEXP8 + snapTimeEXP9 + snapTimeEXP10 + snapTimeEXP11 + snapTimeEXP12);
            console.log("Running 10");
            break;
        case 9:
            snapTimeEXPTotal = (snapTimeEXP1 + snapTimeEXP2 + snapTimeEXP3 + snapTimeEXP4 + snapTimeEXP5 + snapTimeEXP6 + snapTimeEXP7 + snapTimeEXP8 + snapTimeEXP9 + snapTimeEXP10 + snapTimeEXP11 + snapTimeEXP12);
            console.log("Running 9");
            break;
        case 8:
            snapTimeEXPTotal = (snapTimeEXP1 + snapTimeEXP2 + snapTimeEXP3 + snapTimeEXP4 + snapTimeEXP5 + snapTimeEXP6 + snapTimeEXP7 + snapTimeEXP8 + snapTimeEXP9 + snapTimeEXP10 + snapTimeEXP11 + snapTimeEXP12);
            console.log("Running 8");
            break;
        case 7:
            snapTimeEXPTotal = (snapTimeEXP1 + snapTimeEXP2 + snapTimeEXP3 + snapTimeEXP4 + snapTimeEXP5 + snapTimeEXP6 + snapTimeEXP7 + snapTimeEXP8 + snapTimeEXP9 + snapTimeEXP10 + snapTimeEXP11 + snapTimeEXP12);
            console.log("Running 7");
            break;
        case 6:
            snapTimeEXPTotal = (snapTimeEXP1 + snapTimeEXP2 + snapTimeEXP3 + snapTimeEXP4 + snapTimeEXP5 + snapTimeEXP6 + snapTimeEXP7 + snapTimeEXP8 + snapTimeEXP9 + snapTimeEXP10 + snapTimeEXP11 + snapTimeEXP12);
            console.log("Running 6");
            break;
        case 5:
            snapTimeEXPTotal = (snapTimeEXP1 + snapTimeEXP2 + snapTimeEXP3 + snapTimeEXP4 + snapTimeEXP5 + snapTimeEXP6 + snapTimeEXP7 + snapTimeEXP8 + snapTimeEXP9 + snapTimeEXP10 + snapTimeEXP11 + snapTimeEXP12);
            console.log("Running 5");
            break;
        case 4:
            snapTimeEXPTotal = (snapTimeEXP1 + snapTimeEXP2 + snapTimeEXP3 + snapTimeEXP4 + snapTimeEXP5 + snapTimeEXP6 + snapTimeEXP7 + snapTimeEXP8 + snapTimeEXP9 + snapTimeEXP10 + snapTimeEXP11 + snapTimeEXP12);
            console.log("Running 4");
            break;
        case 3:
            snapTimeEXPTotal = (snapTimeEXP1 + snapTimeEXP2 + snapTimeEXP3 + snapTimeEXP4 + snapTimeEXP5 + snapTimeEXP6 + snapTimeEXP7 + snapTimeEXP8 + snapTimeEXP9 + snapTimeEXP10 + snapTimeEXP11 + snapTimeEXP12);
            console.log("Running 3");
            break;
        case 2:
            snapTimeEXPTotal = (snapTimeEXP1 + snapTimeEXP2 + snapTimeEXP3 + snapTimeEXP4 + snapTimeEXP5 + snapTimeEXP6 + snapTimeEXP7 + snapTimeEXP8 + snapTimeEXP9 + snapTimeEXP10 + snapTimeEXP11 + snapTimeEXP12);
            console.log("Running 2");
            break;
        case 1:
            snapTimeEXPTotal = (snapTimeEXP1 + snapTimeEXP2 + snapTimeEXP3 + snapTimeEXP4 + snapTimeEXP5 + snapTimeEXP6 + snapTimeEXP7 + snapTimeEXP8 + snapTimeEXP9 + snapTimeEXP10 + snapTimeEXP11 + snapTimeEXP12);
            console.log("Running 1");
            break;
        default:
            console.log("Awaiting Input");
    }
    let aveSNAPTimeEXP = snapTimeEXPTotal / snapTimeEXPSum;
    console.log("Snap TimeEXP Sum = " + snapTimeEXPSum);
    console.log("Sum SNAP TimeEXP = " + snapTimeEXPTotal);
    console.log("Ave SNAP TimeEXP = " + aveSNAPTimeEXP);
    document.getElementsByName("sum").value = aveSNAPTimeEXP;

//------------------
//OUTPUT TO PGCS SUMMARY SECTION
//------------------
//measure SNAP TimeEXPLINESS against the standard
    if (aveSNAPTimeEXP <= 80 && snapTimeEXPSum > 0) {
        document.getElementById("TimeEXPScore").innerHTML = (((aveSNAPTimeEXP).toFixed(2)) + "% Timeliness");
    } else if (aveSNAPTimeEXP < 97 && aveSNAPTimeEXP > 80) {
        document.getElementById("TimeEXPScore").innerHTML = (((aveSNAPTimeEXP).toFixed(2)) + "% Timeliness");
    } else if (aveSNAPTimeEXP >= 97) {
        document.getElementById("TimeEXPScore").innerHTML = (((aveSNAPTimeEXP).toFixed(2)) + "% Timeliness")
    } else {
        console.log("No Data")
    }

    // log out SNAP EXP Time data to grid
    document.getElementById("month1-timeEXP").innerHTML = (((snapTimeEXP1).toFixed(2)) + "%");
    if (snapTimeEXP1 > 0) {
        document.getElementById("m1EXPTimTable").innerHTML = "E:" + snapWorkedEXP1 + "\(" + snapTimeEXPLate1 + "\):" + (((snapTimeEXP1).toFixed(2)) + "%");
    } else {
        document.getElementById("m1EXPTimTable").innerHTML = "No Data";
    }
    document.getElementById("month2-timeEXP").innerHTML = (((snapTimeEXP2).toFixed(2)) + "%");
    if (snapTimeEXP2 > 0) {
        document.getElementById("m2EXPTimTable").innerHTML = "E:" + snapWorkedEXP2 + "\(" + snapTimeEXPLate2 + "\):" + (((snapTimeEXP2).toFixed(2)) + "%");
    } else {
        document.getElementById("m2EXPTimTable").innerHTML = "No Data";
    }
    document.getElementById("month3-timeEXP").innerHTML = (((snapTimeEXP3).toFixed(2)) + "%");
    if (snapTimeEXP3 > 0) {
        document.getElementById("m3EXPTimTable").innerHTML = "E:" + snapWorkedEXP3 + "\(" + snapTimeEXPLate3 + "\):" + (((snapTimeEXP3).toFixed(2)) + "%");
    } else {
        document.getElementById("m3EXPTimTable").innerHTML = "No Data";
    }
    document.getElementById("month4-timeEXP").innerHTML = (((snapTimeEXP4).toFixed(2)) + "%");
    if (snapTimeEXP4 > 0) {
        document.getElementById("m4EXPTimTable").innerHTML = "E:" + snapWorkedEXP4 + "\(" + snapTimeEXPLate4 + "\):" + (((snapTimeEXP4).toFixed(2)) + "%");
    } else {
        document.getElementById("m4EXPTimTable").innerHTML = "No Data";
    }
    document.getElementById("month5-timeEXP").innerHTML = (((snapTimeEXP5).toFixed(2)) + "%");
    if (snapTimeEXP5 > 0) {
        document.getElementById("m5EXPTimTable").innerHTML = "E:" + snapWorkedEXP5 + "\(" + snapTimeEXPLate5 + "\):" + (((snapTimeEXP5).toFixed(2)) + "%");
    } else {
        document.getElementById("m5EXPTimTable").innerHTML = "No Data";
    }
    document.getElementById("month6-timeEXP").innerHTML = (((snapTimeEXP6).toFixed(2)) + "%");
    if (snapTimeEXP6 > 0) {
        document.getElementById("m6EXPTimTable").innerHTML = "E:" + snapWorkedEXP6 + "\(" + snapTimeEXPLate6 + "\):" + (((snapTimeEXP6).toFixed(2)) + "%");
    } else {
        document.getElementById("m6EXPTimTable").innerHTML = "No Data";
    }
    document.getElementById("month7-timeEXP").innerHTML = (((snapTimeEXP7).toFixed(2)) + "%");
    if (snapTimeEXP7 > 0) {
        document.getElementById("m7EXPTimTable").innerHTML = "E:" + snapWorkedEXP7 + "\(" + snapTimeEXPLate7 + "\):" + (((snapTimeEXP7).toFixed(2)) + "%");
    } else {
        document.getElementById("m7EXPTimTable").innerHTML = "No Data";
    }
    document.getElementById("month8-timeEXP").innerHTML = (((snapTimeEXP8).toFixed(2)) + "%");
    if (snapTimeEXP8 > 0) {
        document.getElementById("m8EXPTimTable").innerHTML = "E:" + snapWorkedEXP8 + "\(" + snapTimeEXPLate8 + "\):" + (((snapTimeEXP8).toFixed(2)) + "%");
    } else {
        document.getElementById("m8EXPTimTable").innerHTML = "No Data";
    }
    document.getElementById("month9-timeEXP").innerHTML = (((snapTimeEXP9).toFixed(2)) + "%");
    if (snapTimeEXP9 > 0) {
        document.getElementById("m9EXPTimTable").innerHTML = "E:" + snapWorkedEXP9 + "\(" + snapTimeEXPLate9 + "\):" + (((snapTimeEXP9).toFixed(2)) + "%");
    } else {
        document.getElementById("m9EXPTimTable").innerHTML = "No Data";
    }
    document.getElementById("month10-timeEXP").innerHTML = (((snapTimeEXP10).toFixed(2)) + "%");
    if (snapTimeEXP10 > 0) {
        document.getElementById("m10EXPTimTable").innerHTML = "E:" + snapWorkedEXP10 + "\(" + snapTimeEXPLate10 + "\):" + (((snapTimeEXP10).toFixed(2)) + "%");
    } else {
        document.getElementById("m10EXPTimTable").innerHTML = "No Data";
    }
    document.getElementById("month11-timeEXP").innerHTML = (((snapTimeEXP11).toFixed(2)) + "%");
    if (snapTimeEXP11 > 0) {
        document.getElementById("m11EXPTimTable").innerHTML = "E:" + snapWorkedEXP11 + "\(" + snapTimeEXPLate11 + "\):" + (((snapTimeEXP11).toFixed(2)) + "%");
    } else {
        document.getElementById("m11EXPTimTable").innerHTML = "No Data";
    }
    document.getElementById("month12-timeEXP").innerHTML = (((snapTimeEXP12).toFixed(2)) + "%");
    if (snapTimeEXP12 > 0) {
        document.getElementById("m12EXPTimTable").innerHTML = "E:" + snapWorkedEXP12 + "\(" + snapTimeEXPLate12 + "\):" + (((snapTimeEXP12).toFixed(2)) + "%");
    } else {
        document.getElementById("m12EXPTimTable").innerHTML = "No Data";
    }
// Measure Consistency for Star Value SNAP TimeEXPLINESS
    var snapTimeEXPIsConsistent = (snapTimeEXPConsistency / snapTimeEXPSum) * 100;
    if (snapTimeEXPIsConsistent >= 95 && aveSNAPTimeEXP > 97) {
        document.getElementById("StarScoreTimeEXP").innerHTML = "&#x2605 &#x2605 &#x2605"; //removed 4th star from consistency rule, deprecated by DCO procedural rules.
            // document.getElementById("prodSARStarDescriptor").innerHTML = "Highly Effective"
            document.getElementById("StarDescriptorTimeEXP").innerHTML = "Solid Performer"
        document.getElementById("TimeEXPFinal").innerHTML = "Consistently Met Goal"
    } else if (snapTimeEXPIsConsistent < 95 && aveSNAPTimeEXP >= 97) {
        document.getElementById("StarScoreTimeEXP").innerHTML = "&#x2605 &#x2605 &#x2605";
        document.getElementById("StarDescriptorTimeEXP").innerHTML = "Solid Performer";
        document.getElementById("TimeEXPFinal").innerHTML = "Inconsistently Met Goal";
    } else if (aveSNAPTimeEXP > 30 && aveSNAPTimeEXP < 97) {
        document.getElementById("StarScoreTimeEXP").innerHTML = "&#x2605 &#x2605";
        document.getElementById("StarDescriptorTimeEXP").innerHTML = "Needs Improvement";
        document.getElementById("TimeEXPFinal").innerHTML = "Missed Goal";
    } else if (aveSNAPTimeEXP > 0 && aveSNAPTimeEXP <= 30) {
        document.getElementById("StarScoreTimeEXP").innerHTML = "&#x2605";
        document.getElementById("StarDescriptorTimeEXP").innerHTML = "Unsatisfactory";
        document.getElementById("TimeEXPFinal").innerHTML = "Missed Goal";
    }
// Add Up Total Reviews and Total Errors FOR SNAP TimeEXPLINESS

    var TotalSnapTimeEXP = Number(snapWorkedEXP1) + Number(snapWorkedEXP2) + Number(snapWorkedEXP3) + Number(snapWorkedEXP4) + Number(snapWorkedEXP5) + Number(snapWorkedEXP6) + Number(snapWorkedEXP7) + Number(snapWorkedEXP8) + Number(snapWorkedEXP9) + Number(snapWorkedEXP10) + Number(snapWorkedEXP11) + Number(snapWorkedEXP12);
    document.getElementById("TimeWorkedEXP").innerHTML = (TotalSnapTimeEXP + " Cases Worked");
    var TotalSnapLateEXP = Number(snapTimeEXPLate1) + Number(snapTimeEXPLate2) + Number(snapTimeEXPLate3) + Number(snapTimeEXPLate4) + Number(snapTimeEXPLate5) + Number(snapTimeEXPLate6) + Number(snapTimeEXPLate7) + Number(snapTimeEXPLate8) + Number(snapTimeEXPLate9) + Number(snapTimeEXPLate10) + Number(snapTimeEXPLate11) + Number(snapTimeEXPLate12) + Number(snapTimeEXPReassigned1) + Number(snapTimeEXPReassigned2) + Number(snapTimeEXPReassigned3) + Number(snapTimeEXPReassigned4) + Number(snapTimeEXPReassigned5) + Number(snapTimeEXPReassigned6) + Number(snapTimeEXPReassigned7) + Number(snapTimeEXPReassigned8) + Number(snapTimeEXPReassigned9) + Number(snapTimeEXPReassigned10) + Number(snapTimeEXPReassigned11) + Number(snapTimeEXPReassigned12);
    document.getElementById("TimeLateEXP").innerHTML = (TotalSnapLateEXP + " Late Cases");

// ------------SNAP TimeSAR--------------
//RESET SNAP TimeSAR COUNTERS
    let snapTimeSAR1 = 0;
    let snapTimeSAR2 = 0;
    let snapTimeSAR3 = 0;
    let snapTimeSAR4 = 0;
    let snapTimeSAR5 = 0;
    let snapTimeSAR6 = 0;
    let snapTimeSAR7 = 0;
    let snapTimeSAR8 = 0;
    let snapTimeSAR9 = 0;
    let snapTimeSAR10 = 0;
    let snapTimeSAR11 = 0;
    let snapTimeSAR12 = 0;
    let snapSARWorked1 = 0;
    let snapSARWorked2 = 0;
    let snapSARWorked3 = 0;
    let snapSARWorked4 = 0;
    let snapSARWorked5 = 0;
    let snapSARWorked6 = 0;
    let snapSARWorked7 = 0;
    let snapSARWorked8 = 0;
    let snapSARWorked9 = 0;
    let snapSARWorked10 = 0;
    let snapSARWorked11 = 0;
    let snapSARWorked12 = 0;
    let snapTimeSARLate1 = 0;
    let snapTimeSARLate2 = 0;
    let snapTimeSARLate3 = 0;
    let snapTimeSARLate4 = 0;
    let snapTimeSARLate5 = 0;
    let snapTimeSARLate6 = 0;
    let snapTimeSARLate7 = 0;
    let snapTimeSARLate8 = 0;
    let snapTimeSARLate9 = 0;
    let snapTimeSARLate10 = 0;
    let snapTimeSARLate11 = 0;
    let snapTimeSARLate12 = 0;
    let snapTimeSARReassigned1 = 0;
    let snapTimeSARReassigned2 = 0;
    let snapTimeSARReassigned3 = 0;
    let snapTimeSARReassigned4 = 0;
    let snapTimeSARReassigned5 = 0;
    let snapTimeSARReassigned6 = 0;
    let snapTimeSARReassigned7 = 0;
    let snapTimeSARReassigned8 = 0;
    let snapTimeSARReassigned9 = 0;
    let snapTimeSARReassigned10 = 0;
    let snapTimeSARReassigned11 = 0;
    let snapTimeSARReassigned12 = 0;
    var snapTimeSARCount = 0;
    var snapSARWorkedCount = 0;
    let snapTimeSARLateCount = 0;
    var snapTimeSARConsistency = 0;
// --------------------
// LOAD UP DATA
// --------------------
    // --------------------SNAP TimeSARLINESS——————————
//Load the Mule 1
    snapSARWorked1 = Number(document.getElementById("m1TimeSAR").value);
    snapTimeSARLate1 = Number(document.getElementById("m1LateSAR").value);
    snapTimeSARReassigned1 = Number(document.getElementById("m1reassignedSAR").value);
//CHECK OUTPUTS FOR ERROR 1
    if (snapTimeSARLate1 > 0 && snapTimeSARReassigned1 > 0) {
        snapTimeSARLate1 + snapTimeSARReassigned1;
    } else if (snapTimeSARLate1 > 0 || snapTimeSARReassigned1 > 0) {
        snapTimeSARLate1 + snapTimeSARReassigned1;
    } else {
        snapTimeSARLate1 = 0
    }
    console.log(snapSARWorked1 + " worked, late" + snapTimeSARLate1 + ", reassigned " + snapTimeSARReassigned1);
//Load the Mule 2
    snapSARWorked2 = Number(document.getElementById("m2TimeSAR").value);
    snapTimeSARLate2 = Number(document.getElementById("m2LateSAR").value);
    snapTimeSARReassigned2 = Number(document.getElementById("m2reassignedSAR").value);
//CHECK OUTPUTS FOR ERROR 2
    if (snapTimeSARLate2 > 0 && snapTimeSARReassigned2 > 0) {
        snapTimeSARLate2 + snapTimeSARReassigned2;
    } else if (snapTimeSARLate2 > 0 || snapTimeSARReassigned2 > 0) {
        snapTimeSARLate2 + snapTimeSARReassigned2;
    } else {
        snapTimeSARLate2 = 0
    }
    console.log(snapSARWorked2 + " worked, late" + snapTimeSARLate2 + ", reassigned " + snapTimeSARReassigned2);
//Load the Mule 3
    snapSARWorked3 = Number(document.getElementById("m3TimeSAR").value);
    snapTimeSARLate3 = Number(document.getElementById("m3LateSAR").value);
    snapTimeSARReassigned3 = Number(document.getElementById("m3reassignedSAR").value);
//CHECK OUTPUTS FOR ERROR 3
    if (snapTimeSARLate3 > 0 && snapTimeSARReassigned3 > 0) {
        snapTimeSARLate3 + snapTimeSARReassigned3;
    } else if (snapTimeSARLate3 > 0 || snapTimeSARReassigned3 > 0) {
        snapTimeSARLate3 + snapTimeSARReassigned3;
    } else {
        snapTimeSARLate3 = 0
    }
    console.log(snapSARWorked3 + " worked, late" + snapTimeSARLate3 + ", reassigned " + snapTimeSARReassigned3);
//Load the Mule 4
    snapSARWorked4 = Number(document.getElementById("m4TimeSAR").value);
    snapTimeSARLate4 = Number(document.getElementById("m4LateSAR").value);
    snapTimeSARReassigned4 = Number(document.getElementById("m4reassignedSAR").value);
//CHECK OUTPUTS FOR ERROR 4
    if (snapTimeSARLate4 > 0 && snapTimeSARReassigned4 > 0) {
        snapTimeSARLate4 + snapTimeSARReassigned4;
    } else if (snapTimeSARLate4 > 0 || snapTimeSARReassigned4 > 0) {
        snapTimeSARLate4 + snapTimeSARReassigned4;
    } else {
        snapTimeSARLate4 = 0
    }
    console.log(snapSARWorked4 + " worked, late" + snapTimeSARLate4 + ", reassigned " + snapTimeSARReassigned4);
//Load the Mule 5
    snapSARWorked5 = Number(document.getElementById("m5TimeSAR").value);
    snapTimeSARLate5 = Number(document.getElementById("m5LateSAR").value);
    snapTimeSARReassigned5 = Number(document.getElementById("m5reassignedSAR").value);
//CHECK OUTPUTS FOR ERROR 5
    if (snapTimeSARLate5 > 0 && snapTimeSARReassigned5 > 0) {
        snapTimeSARLate5 + snapTimeSARReassigned5;
    } else if (snapTimeSARLate5 > 0 || snapTimeSARReassigned5 > 0) {
        snapTimeSARLate5 + snapTimeSARReassigned5;
    } else {
        snapTimeSARLate5 = 0
    }
    console.log(snapSARWorked5 + " worked, late" + snapTimeSARLate5 + ", reassigned " + snapTimeSARReassigned5);
//Load the Mule 6
    snapSARWorked6 = Number(document.getElementById("m6TimeSAR").value);
    snapTimeSARLate6 = Number(document.getElementById("m6LateSAR").value);
    snapTimeSARReassigned6 = Number(document.getElementById("m6reassignedSAR").value);
//CHECK OUTPUTS FOR ERROR 6
    if (snapTimeSARLate6 > 0 && snapTimeSARReassigned6 > 0) {
        snapTimeSARLate6 + snapTimeSARReassigned6;
    } else if (snapTimeSARLate6 > 0 || snapTimeSARReassigned6 > 0) {
        snapTimeSARLate6 + snapTimeSARReassigned6;
    } else {
        snapTimeSARLate6 = 0
    }
    console.log(snapSARWorked6 + " worked, late" + snapTimeSARLate6 + ", reassigned " + snapTimeSARReassigned6);
//Load the Mule 7
    snapSARWorked7 = Number(document.getElementById("m7TimeSAR").value);
    snapTimeSARLate7 = Number(document.getElementById("m7LateSAR").value);
    snapTimeSARReassigned7 = Number(document.getElementById("m7reassignedSAR").value);
//CHECK OUTPUTS FOR ERROR 7
    if (snapTimeSARLate7 > 0 && snapTimeSARReassigned7 > 0) {
        snapTimeSARLate7 + snapTimeSARReassigned7;
    } else if (snapTimeSARLate7 > 0 || snapTimeSARReassigned7 > 0) {
        snapTimeSARLate7 + snapTimeSARReassigned7;
    } else {
        snapTimeSARLate7 = 0
    }
    console.log(snapSARWorked7 + " worked, late" + snapTimeSARLate7 + ", reassigned " + snapTimeSARReassigned7);
//Load the Mule 8
    snapSARWorked8 = Number(document.getElementById("m8TimeSAR").value);
    snapTimeSARLate8 = Number(document.getElementById("m8LateSAR").value);
    snapTimeSARReassigned8 = Number(document.getElementById("m8reassignedSAR").value);
//CHECK OUTPUTS FOR ERROR 8
    if (snapTimeSARLate8 > 0 && snapTimeSARReassigned8 > 0) {
        snapTimeSARLate8 + snapTimeSARReassigned8;
    } else if (snapTimeSARLate8 > 0 || snapTimeSARReassigned8 > 0) {
        snapTimeSARLate8 + snapTimeSARReassigned8;
    } else {
        snapTimeSARLate8 = 0
    }
    console.log(snapSARWorked8 + " worked, late" + snapTimeSARLate8 + ", reassigned " + snapTimeSARReassigned8);
//Load the Mule 9
    snapSARWorked9 = Number(document.getElementById("m9TimeSAR").value);
    snapTimeSARLate9 = Number(document.getElementById("m9LateSAR").value);
    snapTimeSARReassigned9 = Number(document.getElementById("m9reassignedSAR").value);
//CHECK OUTPUTS FOR ERROR 9
    if (snapTimeSARLate9 > 0 && snapTimeSARReassigned9 > 0) {
        snapTimeSARLate9 + snapTimeSARReassigned9;
    } else if (snapTimeSARLate9 > 0 || snapTimeSARReassigned9 > 0) {
        snapTimeSARLate9 + snapTimeSARReassigned9;
    } else {
        snapTimeSARLate9 = 0
    }
    console.log(snapSARWorked9 + " worked, late" + snapTimeSARLate9 + ", reassigned " + snapTimeSARReassigned9);
//Load the Mule 10
    snapSARWorked10 = Number(document.getElementById("m10TimeSAR").value);
    snapTimeSARLate10 = Number(document.getElementById("m10LateSAR").value);
    snapTimeSARReassigned10 = Number(document.getElementById("m10reassignedSAR").value);
//CHECK OUTPUTS FOR ERROR 10
    if (snapTimeSARLate10 > 0 && snapTimeSARReassigned10 > 0) {
        snapTimeSARLate10 + snapTimeSARReassigned10;
    } else if (snapTimeSARLate10 > 0 || snapTimeSARReassigned10 > 0) {
        snapTimeSARLate10 + snapTimeSARReassigned10;
    } else {
        snapTimeSARLate10 = 0
    }
    console.log(snapSARWorked10 + " worked, late" + snapTimeSARLate10 + ", reassigned " + snapTimeSARReassigned10);
//Load the Mule 11
    snapSARWorked11 = Number(document.getElementById("m11TimeSAR").value);
    snapTimeSARLate11 = Number(document.getElementById("m11LateSAR").value);
    snapTimeSARReassigned11 = Number(document.getElementById("m11reassignedSAR").value);
//CHECK OUTPUTS FOR ERROR 11
    if (snapTimeSARLate11 > 0 && snapTimeSARReassigned11 > 0) {
        snapTimeSARLate11 + snapTimeSARReassigned11;
    } else if (snapTimeSARLate11 > 0 || snapTimeSARReassigned11 > 0) {
        snapTimeSARLate11 + snapTimeSARReassigned11;
    } else {
        snapTimeSARLate11 = 0
    }
    console.log(snapSARWorked11 + " worked, late" + snapTimeSARLate11 + ", reassigned " + snapTimeSARReassigned11);
//Load the Mule 12
    snapSARWorked12 = Number(document.getElementById("m12TimeSAR").value);
    snapTimeSARLate12 = Number(document.getElementById("m12LateSAR").value);
    snapTimeSARReassigned12 = Number(document.getElementById("m12reassignedSAR").value);
//CHECK OUTPUTS FOR ERROR 12
    if (snapTimeSARLate12 > 0 && snapTimeSARReassigned12 > 0) {
        snapTimeSARLate12 + snapTimeSARReassigned12;
    } else if (snapTimeSARLate12 > 0 || snapTimeSARReassigned12 > 0) {
        snapTimeSARLate12 + snapTimeSARReassigned12;
    } else {
        snapTimeSARLate12 = 0
    }
    console.log(snapSARWorked12 + " worked, late" + snapTimeSARLate12 + ", reassigned " + snapTimeSARReassigned12);
//-------------------DONE--------------------
//Set SNAP TimeSAR Counters
    snapTimeSAR1 = (1 - ((snapTimeSARLate1 + snapTimeSARReassigned1) / snapSARWorked1)) * 100;
    if (snapTimeSAR1 >= 95) {
        snapTimeSARConsistency++;
        snapTimeSARCount++;
    } else if (snapTimeSAR1 > 0 && snapTimeSAR1 < 95) {
        snapTimeSARCount++;
    } else {
        snapTimeSAR1 = 0;
    }
    snapTimeSAR2 = (1 - ((snapTimeSARLate2 + snapTimeSARReassigned2) / snapSARWorked2)) * 100;
    if (snapTimeSAR2 >= 95) {
        snapTimeSARConsistency++;
        snapTimeSARCount++;
    } else if (snapTimeSAR2 > 0 && snapTimeSAR2 < 95) {
        snapTimeSARCount++;
    } else {
        snapTimeSAR2 = 0;
    }
    snapTimeSAR3 = (1 - ((snapTimeSARLate3 + snapTimeSARReassigned3) / snapSARWorked3)) * 100;
    if (snapTimeSAR3 >= 95) {
        snapTimeSARConsistency++;
        snapTimeSARCount++;
    } else if (snapTimeSAR3 > 0 && snapTimeSAR3 < 95) {
        snapTimeSARCount++;
    } else {
        snapTimeSAR3 = 0;
    }
    snapTimeSAR4 = (1 - ((snapTimeSARLate4 + snapTimeSARReassigned4) / snapSARWorked4)) * 100;
    if (snapTimeSAR4 >= 95) {
        snapTimeSARConsistency++;
        snapTimeSARCount++;
    } else if (snapTimeSAR4 > 0 && snapTimeSAR4 < 95) {
        snapTimeSARCount++;
    } else {
        snapTimeSAR4 = 0;
    }
    snapTimeSAR5 = (1 - ((snapTimeSARLate5 + snapTimeSARReassigned5) / snapSARWorked5)) * 100;
    if (snapTimeSAR5 >= 95) {
        snapTimeSARConsistency++;
        snapTimeSARCount++;
    } else if (snapTimeSAR5 > 0 && snapTimeSAR5 < 95) {
        snapTimeSARCount++;
    } else {
        snapTimeSAR5 = 0;
    }
    snapTimeSAR6 = (1 - ((snapTimeSARLate6 + snapTimeSARReassigned6) / snapSARWorked6)) * 100;
    if (snapTimeSAR6 >= 95) {
        snapTimeSARConsistency++;
        snapTimeSARCount++;
    } else if (snapTimeSAR6 > 0 && snapTimeSAR6 < 95) {
        snapTimeSARCount++;
    } else {
        snapTimeSAR6 = 0;
    }
    snapTimeSAR7 = (1 - ((snapTimeSARLate7 + snapTimeSARReassigned7) / snapSARWorked7)) * 100;
    if (snapTimeSAR7 >= 95) {
        snapTimeSARConsistency++;
        snapTimeSARCount++;
    } else if (snapTimeSAR7 > 0 && snapTimeSAR7 < 95) {
        snapTimeSARCount++;
    } else {
        snapTimeSAR7 = 0;
    }
    snapTimeSAR8 = (1 - ((snapTimeSARLate8 + snapTimeSARReassigned8) / snapSARWorked8)) * 100;
    if (snapTimeSAR8 >= 95) {
        snapTimeSARConsistency++;
        snapTimeSARCount++;
    } else if (snapTimeSAR8 > 0 && snapTimeSAR8 < 95) {
        snapTimeSARCount++;
    } else {
        snapTimeSAR8 = 0;
    }
    snapTimeSAR9 = (1 - ((snapTimeSARLate9 + snapTimeSARReassigned9) / snapSARWorked9)) * 100;
    if (snapTimeSAR9 >= 95) {
        snapTimeSARConsistency++;
        snapTimeSARCount++;
    } else if (snapTimeSAR9 > 0 && snapTimeSAR9 < 95) {
        snapTimeSARCount++;
    } else {
        snapTimeSAR9 = 0;
    }
    snapTimeSAR10 = (1 - ((snapTimeSARLate10 + snapTimeSARReassigned10) / snapSARWorked10)) * 100;
    if (snapTimeSAR10 >= 95) {
        snapTimeSARConsistency++;
        snapTimeSARCount++;
    } else if (snapTimeSAR10 > 0 && snapTimeSAR10 < 95) {
        snapTimeSARCount++;
    } else {
        snapTimeSAR10 = 0;
    }
    snapTimeSAR11 = (1 - ((snapTimeSARLate11 + snapTimeSARReassigned11) / snapSARWorked11)) * 100;
    if (snapTimeSAR11 >= 95) {
        snapTimeSARConsistency++;
        snapTimeSARCount++;
    } else if (snapTimeSAR11 > 0 && snapTimeSAR11 < 95) {
        snapTimeSARCount++;
    } else {
        snapTimeSAR11 = 0;
    }
    snapTimeSAR12 = (1 - ((snapTimeSARLate12 + snapTimeSARReassigned12) / snapSARWorked12)) * 100;
    if (snapTimeSAR12 >= 95) {
        snapTimeSARConsistency++;
        snapTimeSARCount++;
    } else if (snapTimeSAR12 > 0 && snapTimeSAR12 < 95) {
        snapTimeSARCount++;
    } else {
        snapTimeSAR12 = 0;
    }
    console.log(snapTimeSARConsistency + " Consistency Value");
    console.log(snapTimeSARCount + " snapTimeSAR Count Value");
//--------------------DONE--------------------
// --------------------
// FILL REPORT FIELDS ON HTML PAGE
// --------------------

// log out SNAP TimeSARliness data
    document.getElementById("month1-SARtime").innerHTML = (((snapTimeSAR1).toFixed(2)) + "%");
    document.getElementById("month2-SARtime").innerHTML = (((snapTimeSAR2).toFixed(2)) + "%");
    document.getElementById("month3-SARtime").innerHTML = (((snapTimeSAR3).toFixed(2)) + "%");
    document.getElementById("month4-SARtime").innerHTML = (((snapTimeSAR4).toFixed(2)) + "%");
    document.getElementById("month5-SARtime").innerHTML = (((snapTimeSAR5).toFixed(2)) + "%");
    document.getElementById("month6-SARtime").innerHTML = (((snapTimeSAR6).toFixed(2)) + "%");
    document.getElementById("month7-SARtime").innerHTML = (((snapTimeSAR7).toFixed(2)) + "%");
    document.getElementById("month8-SARtime").innerHTML = (((snapTimeSAR8).toFixed(2)) + "%");
    document.getElementById("month9-SARtime").innerHTML = (((snapTimeSAR9).toFixed(2)) + "%");
    document.getElementById("month10-SARtime").innerHTML = (((snapTimeSAR10).toFixed(2)) + "%");
    document.getElementById("month11-SARtime").innerHTML = (((snapTimeSAR11).toFixed(2)) + "%");
    document.getElementById("month12-SARtime").innerHTML = (((snapTimeSAR12).toFixed(2)) + "%");

// --------------------
// PGCS RATING PREP
// --------------------

// SNAP accuracy calculations
    let snapTimeSARTotal = 0;
    let snapTimeSARSum = snapTimeSARCount;

    switch (snapTimeSARSum) {
        case 12:
            snapTimeSARTotal = (snapTimeSAR1 + snapTimeSAR2 + snapTimeSAR3 + snapTimeSAR4 + snapTimeSAR5 + snapTimeSAR6 + snapTimeSAR7 + snapTimeSAR8 + snapTimeSAR9 + snapTimeSAR10 + snapTimeSAR11 + snapTimeSAR12);
            console.log("Running 12");
            break;
        case 11:
            snapTimeSARTotal = (snapTimeSAR1 + snapTimeSAR2 + snapTimeSAR3 + snapTimeSAR4 + snapTimeSAR5 + snapTimeSAR6 + snapTimeSAR7 + snapTimeSAR8 + snapTimeSAR9 + snapTimeSAR10 + snapTimeSAR11 + snapTimeSAR12);
            console.log("Running 11");
            break;
        case 10:
            snapTimeSARTotal = (snapTimeSAR1 + snapTimeSAR2 + snapTimeSAR3 + snapTimeSAR4 + snapTimeSAR5 + snapTimeSAR6 + snapTimeSAR7 + snapTimeSAR8 + snapTimeSAR9 + snapTimeSAR10 + snapTimeSAR11 + snapTimeSAR12);
            console.log("Running 10");
            break;
        case 9:
            snapTimeSARTotal = (snapTimeSAR1 + snapTimeSAR2 + snapTimeSAR3 + snapTimeSAR4 + snapTimeSAR5 + snapTimeSAR6 + snapTimeSAR7 + snapTimeSAR8 + snapTimeSAR9 + snapTimeSAR10 + snapTimeSAR11 + snapTimeSAR12);
            console.log("Running 9");
            break;
        case 8:
            snapTimeSARTotal = (snapTimeSAR1 + snapTimeSAR2 + snapTimeSAR3 + snapTimeSAR4 + snapTimeSAR5 + snapTimeSAR6 + snapTimeSAR7 + snapTimeSAR8 + snapTimeSAR9 + snapTimeSAR10 + snapTimeSAR11 + snapTimeSAR12);
            console.log("Running 8");
            break;
        case 7:
            snapTimeSARTotal = (snapTimeSAR1 + snapTimeSAR2 + snapTimeSAR3 + snapTimeSAR4 + snapTimeSAR5 + snapTimeSAR6 + snapTimeSAR7 + snapTimeSAR8 + snapTimeSAR9 + snapTimeSAR10 + snapTimeSAR11 + snapTimeSAR12);
            console.log("Running 7");
            break;
        case 6:
            snapTimeSARTotal = (snapTimeSAR1 + snapTimeSAR2 + snapTimeSAR3 + snapTimeSAR4 + snapTimeSAR5 + snapTimeSAR6 + snapTimeSAR7 + snapTimeSAR8 + snapTimeSAR9 + snapTimeSAR10 + snapTimeSAR11 + snapTimeSAR12);
            console.log("Running 6");
            break;
        case 5:
            snapTimeSARTotal = (snapTimeSAR1 + snapTimeSAR2 + snapTimeSAR3 + snapTimeSAR4 + snapTimeSAR5 + snapTimeSAR6 + snapTimeSAR7 + snapTimeSAR8 + snapTimeSAR9 + snapTimeSAR10 + snapTimeSAR11 + snapTimeSAR12);
            console.log("Running 5");
            break;
        case 4:
            snapTimeSARTotal = (snapTimeSAR1 + snapTimeSAR2 + snapTimeSAR3 + snapTimeSAR4 + snapTimeSAR5 + snapTimeSAR6 + snapTimeSAR7 + snapTimeSAR8 + snapTimeSAR9 + snapTimeSAR10 + snapTimeSAR11 + snapTimeSAR12);
            console.log("Running 4");
            break;
        case 3:
            snapTimeSARTotal = (snapTimeSAR1 + snapTimeSAR2 + snapTimeSAR3 + snapTimeSAR4 + snapTimeSAR5 + snapTimeSAR6 + snapTimeSAR7 + snapTimeSAR8 + snapTimeSAR9 + snapTimeSAR10 + snapTimeSAR11 + snapTimeSAR12);
            console.log("Running 3");
            break;
        case 2:
            snapTimeSARTotal = (snapTimeSAR1 + snapTimeSAR2 + snapTimeSAR3 + snapTimeSAR4 + snapTimeSAR5 + snapTimeSAR6 + snapTimeSAR7 + snapTimeSAR8 + snapTimeSAR9 + snapTimeSAR10 + snapTimeSAR11 + snapTimeSAR12);
            console.log("Running 2");
            break;
        case 1:
            snapTimeSARTotal = (snapTimeSAR1 + snapTimeSAR2 + snapTimeSAR3 + snapTimeSAR4 + snapTimeSAR5 + snapTimeSAR6 + snapTimeSAR7 + snapTimeSAR8 + snapTimeSAR9 + snapTimeSAR10 + snapTimeSAR11 + snapTimeSAR12);
            console.log("Running 1");
            break;
        default:
            console.log("Awaiting Input");
    }
    let aveSNAPTimeSAR = snapTimeSARTotal / snapTimeSARSum;
    console.log("Snap TimeSAR Sum = " + snapTimeSARSum);
    console.log("Sum SNAP TimeSAR = " + snapTimeSARTotal);
    console.log("Ave SNAP TimeSAR = " + aveSNAPTimeSAR);
    document.getElementsByName("sum").value = aveSNAPTimeSAR;

//------------------
//OUTPUT TO PGCS SUMMARY SECTION
//------------------
//measure SNAP TimeSARLINESS against the standard
    if (aveSNAPTimeSAR <= 80 && snapTimeSARSum > 0) {
        document.getElementById("TimeSARScore").innerHTML = (((aveSNAPTimeSAR).toFixed(2)) + "% Timeliness");
    } else if (aveSNAPTimeSAR < 95 && aveSNAPTimeSAR > 80) {
        document.getElementById("TimeSARScore").innerHTML = (((aveSNAPTimeSAR).toFixed(2)) + "% Timeliness");
    } else if (aveSNAPTimeSAR >= 95) {
        document.getElementById("TimeSARScore").innerHTML = (((aveSNAPTimeSAR).toFixed(2)) + "% Timeliness")
    } else {
        console.log("No Data")
    }

    // log out SNAP SRCMP Time data to grid
    document.getElementById("month1-SARtime").innerHTML = (((snapTimeSAR1).toFixed(2)) + "%");
    if (snapTimeSAR1 > 0) {
        document.getElementById("m1SARTimTable").innerHTML = "SCM:" + snapSARWorked1 + "\(" + snapTimeSARLate1 + "\):" + (((snapTimeSAR1).toFixed(2)) + "%");
    } else {
        document.getElementById("m1SARTimTable").innerHTML = "No Data";
    }
    document.getElementById("month2-SARtime").innerHTML = (((snapTimeSAR2).toFixed(2)) + "%");
    if (snapTimeSAR2 > 0) {
        document.getElementById("m2SARTimTable").innerHTML = "SCM:" + snapSARWorked2 + "\(" + snapTimeSARLate2 + "\):" + (((snapTimeSAR2).toFixed(2)) + "%");
    } else {
        document.getElementById("m2SARTimTable").innerHTML = "No Data";
    }
    document.getElementById("month3-SARtime").innerHTML = (((snapTimeSAR3).toFixed(2)) + "%");
    if (snapTimeSAR3 > 0) {
        document.getElementById("m3SARTimTable").innerHTML = "SCM:" + snapSARWorked3 + "\(" + snapTimeSARLate3 + "\):" + (((snapTimeSAR3).toFixed(2)) + "%");
    } else {
        document.getElementById("m3SARTimTable").innerHTML = "No Data";
    }
    document.getElementById("month4-SARtime").innerHTML = (((snapTimeSAR4).toFixed(2)) + "%");
    if (snapTimeSAR4 > 0) {
        document.getElementById("m4SARTimTable").innerHTML = "SCM:" + snapSARWorked4 + "\(" + snapTimeSARLate4 + "\):" + (((snapTimeSAR4).toFixed(2)) + "%");
    } else {
        document.getElementById("m4SARTimTable").innerHTML = "No Data";
    }
    document.getElementById("month5-SARtime").innerHTML = (((snapTimeSAR5).toFixed(2)) + "%");
    if (snapTimeSAR5 > 0) {
        document.getElementById("m5SARTimTable").innerHTML = "SCM:" + snapSARWorked5 + "\(" + snapTimeSARLate5 + "\):" + (((snapTimeSAR5).toFixed(2)) + "%");
    } else {
        document.getElementById("m5SARTimTable").innerHTML = "No Data";
    }
    document.getElementById("month6-SARtime").innerHTML = (((snapTimeSAR6).toFixed(2)) + "%");
    if (snapTimeSAR6 > 0) {
        document.getElementById("m6SARTimTable").innerHTML = "SCM:" + snapSARWorked6 + "\(" + snapTimeSARLate6 + "\):" + (((snapTimeSAR6).toFixed(2)) + "%");
    } else {
        document.getElementById("m6SARTimTable").innerHTML = "No Data";
    }
    document.getElementById("month7-SARtime").innerHTML = (((snapTimeSAR7).toFixed(2)) + "%");
    if (snapTimeSAR7 > 0) {
        document.getElementById("m7SARTimTable").innerHTML = "SCM:" + snapSARWorked7 + "\(" + snapTimeSARLate7 + "\):" + (((snapTimeSAR7).toFixed(2)) + "%");
    } else {
        document.getElementById("m7SARTimTable").innerHTML = "No Data";
    }
    document.getElementById("month8-SARtime").innerHTML = (((snapTimeSAR8).toFixed(2)) + "%");
    if (snapTimeSAR8 > 0) {
        document.getElementById("m8SARTimTable").innerHTML = "SCM:" + snapSARWorked8 + "\(" + snapTimeSARLate8 + "\):" + (((snapTimeSAR8).toFixed(2)) + "%");
    } else {
        document.getElementById("m8SARTimTable").innerHTML = "No Data";
    }
    document.getElementById("month9-SARtime").innerHTML = (((snapTimeSAR9).toFixed(2)) + "%");
    if (snapTimeSAR9 > 0) {
        document.getElementById("m9SARTimTable").innerHTML = "SCM:" + snapSARWorked9 + "\(" + snapTimeSARLate9 + "\):" + (((snapTimeSAR9).toFixed(2)) + "%");
    } else {
        document.getElementById("m9SARTimTable").innerHTML = "No Data";
    }
    document.getElementById("month10-SARtime").innerHTML = (((snapTimeSAR10).toFixed(2)) + "%");
    if (snapTimeSAR10 > 0) {
        document.getElementById("m10SARTimTable").innerHTML = "SCM:" + snapSARWorked10 + "\(" + snapTimeSARLate10 + "\):" + (((snapTimeSAR10).toFixed(2)) + "%");
    } else {
        document.getElementById("m10SARTimTable").innerHTML = "No Data";
    }
    document.getElementById("month11-SARtime").innerHTML = (((snapTimeSAR11).toFixed(2)) + "%");
    if (snapTimeSAR11 > 0) {
        document.getElementById("m11SARTimTable").innerHTML = "SCM:" + snapSARWorked11 + "\(" + snapTimeSARLate11 + "\):" + (((snapTimeSAR11).toFixed(2)) + "%");
    } else {
        document.getElementById("m11SARTimTable").innerHTML = "No Data";
    }
    document.getElementById("month12-SARtime").innerHTML = (((snapTimeSAR12).toFixed(2)) + "%");
    if (snapTimeSAR12 > 0) {
        document.getElementById("m12SARTimTable").innerHTML = "SCM:" + snapSARWorked12 + "\(" + snapTimeSARLate12 + "\):" + (((snapTimeSAR12).toFixed(2)) + "%");
    } else {
        document.getElementById("m12SARTimTable").innerHTML = "No Data";
    }

// Measure Consistency for Star Value SNAP TimeSARLINESS
    var snapTimeSARIsConsistent = (snapTimeSARConsistency / snapTimeSARSum) * 100;
    if (snapTimeSARIsConsistent >= 95 && aveSNAPTimeSAR > 95) {
        document.getElementById("StarScoreTimeSAR").innerHTML = "&#x2605 &#x2605 &#x2605"; //removed 4th star from consistency rule, deprecated by DCO procedural rules.
            // document.getElementById("prodSARStarDescriptor").innerHTML = "Highly Effective"
            document.getElementById("StarDescriptorTimeSAR").innerHTML = "Solid Performer"
        document.getElementById("TimeSARFinal").innerHTML = "Consistently Met Goal"
    } else if (snapTimeSARIsConsistent < 95 && aveSNAPTimeSAR >= 95) {
        document.getElementById("StarScoreTimeSAR").innerHTML = "&#x2605 &#x2605 &#x2605";
        document.getElementById("StarDescriptorTimeSAR").innerHTML = "Solid Performer";
        document.getElementById("TimeSARFinal").innerHTML = "Inconsistently Met Goal";
    } else if (aveSNAPTimeSAR > 30 && aveSNAPTimeSAR < 95) {
        document.getElementById("StarScoreTimeSAR").innerHTML = "&#x2605 &#x2605";
        document.getElementById("StarDescriptorTimeSAR").innerHTML = "Needs Improvement";
        document.getElementById("TimeSARFinal").innerHTML = "Missed Goal";
    } else if (aveSNAPTimeSAR > 0 && aveSNAPTimeSAR <= 30) {
        document.getElementById("StarScoreTimeSAR").innerHTML = "&#x2605";
        document.getElementById("StarDescriptorTimeSAR").innerHTML = "Unsatisfactory";
        document.getElementById("TimeSARFinal").innerHTML = "Missed Goal";
    }
// Add Up Total Reviews and Total Errors FOR SNAP TimeSARLINESS AND ABCDE

    var TotalSnapSARTime = Number(snapSARWorked1) + Number(snapSARWorked2) + Number(snapSARWorked3) + Number(snapSARWorked4) + Number(snapSARWorked5) + Number(snapSARWorked6) + Number(snapSARWorked7) + Number(snapSARWorked8) + Number(snapSARWorked9) + Number(snapSARWorked10) + Number(snapSARWorked11) + Number(snapSARWorked12);
    document.getElementById("TimeWorkedSAR").innerHTML = (TotalSnapSARTime + " Cases Worked");
    var TotalSnapSARLate = Number(snapTimeSARReassigned1) + Number(snapTimeSARReassigned2) + Number(snapTimeSARReassigned3) + Number(snapTimeSARReassigned4) + Number(snapTimeSARReassigned5) + Number(snapTimeSARReassigned6) + Number(snapTimeSARReassigned7) + Number(snapTimeSARReassigned8) + Number(snapTimeSARReassigned9) + Number(snapTimeSARReassigned10) + Number(snapTimeSARReassigned11) + Number(snapTimeSARReassigned12);
    document.getElementById("TimeLateSAR").innerHTML = (TotalSnapSARLate + " Late Cases");

// ------------medicaid TIME--------------
//RESET medicaid TIME COUNTERS
    let medicaidTime1 = 0;
    let medicaidTime2 = 0;
    let medicaidTime3 = 0;
    let medicaidTime4 = 0;
    let medicaidTime5 = 0;
    let medicaidTime6 = 0;
    let medicaidTime7 = 0;
    let medicaidTime8 = 0;
    let medicaidTime9 = 0;
    let medicaidTime10 = 0;
    let medicaidTime11 = 0;
    let medicaidTime12 = 0;
    let medicaidWorked1 = 0;
    let medicaidWorked2 = 0;
    let medicaidWorked3 = 0;
    let medicaidWorked4 = 0;
    let medicaidWorked5 = 0;
    let medicaidWorked6 = 0;
    let medicaidWorked7 = 0;
    let medicaidWorked8 = 0;
    let medicaidWorked9 = 0;
    let medicaidWorked10 = 0;
    let medicaidWorked11 = 0;
    let medicaidWorked12 = 0;
    let medicaidTimeLate1 = 0;
    let medicaidTimeLate2 = 0;
    let medicaidTimeLate3 = 0;
    let medicaidTimeLate4 = 0;
    let medicaidTimeLate5 = 0;
    let medicaidTimeLate6 = 0;
    let medicaidTimeLate7 = 0;
    let medicaidTimeLate8 = 0;
    let medicaidTimeLate9 = 0;
    let medicaidTimeLate10 = 0;
    let medicaidTimeLate11 = 0;
    let medicaidTimeLate12 = 0;
    let medicaidTimeReassigned1 = 0;
    let medicaidTimeReassigned2 = 0;
    let medicaidTimeReassigned3 = 0;
    let medicaidTimeReassigned4 = 0;
    let medicaidTimeReassigned5 = 0;
    let medicaidTimeReassigned6 = 0;
    let medicaidTimeReassigned7 = 0;
    let medicaidTimeReassigned8 = 0;
    let medicaidTimeReassigned9 = 0;
    let medicaidTimeReassigned10 = 0;
    let medicaidTimeReassigned11 = 0;
    let medicaidTimeReassigned12 = 0;
    var medicaidTimeCount = 0;
    var medicaidWorkedCount = 0;
    let medicaidTimeLateCount = 0;
    var medicaidTimeConsistency = 0;
// --------------------
// LOAD UP DATA
// --------------------
    // --------------------medicaid TIMELINESS——————————
//Load the Mule 1
    medicaidWorked1 = Number(document.getElementById("m1MCTime").value);
    medicaidTimeLate1 = Number(document.getElementById("m1MCLate").value);
    medicaidTimeReassigned1 = Number(document.getElementById("m1MCReassigned").value);
//CHECK OUTPUTS FOR ERROR 1
    if (medicaidTimeLate1 > 0 && medicaidTimeReassigned1 > 0) {
        medicaidTimeLate1 + medicaidTimeReassigned1;
    } else if (medicaidTimeLate1 > 0 || medicaidTimeReassigned1 > 0) {
        medicaidTimeLate1 + medicaidTimeReassigned1;
    } else {
        medicaidTimeLate1 = 0
    }
    console.log(medicaidWorked1 + " worked, late" + medicaidTimeLate1 + ", reassigned " + medicaidTimeReassigned1);
//Load the Mule 2
    medicaidWorked2 = Number(document.getElementById("m2MCTime").value);
    medicaidTimeLate2 = Number(document.getElementById("m2MCLate").value);
    medicaidTimeReassigned2 = Number(document.getElementById("m2MCReassigned").value);
//CHECK OUTPUTS FOR ERROR 2
    if (medicaidTimeLate2 > 0 && medicaidTimeReassigned2 > 0) {
        medicaidTimeLate2 + medicaidTimeReassigned2;
    } else if (medicaidTimeLate2 > 0 || medicaidTimeReassigned2 > 0) {
        medicaidTimeLate2 + medicaidTimeReassigned2;
    } else {
        medicaidTimeLate2 = 0
    }
    console.log(medicaidWorked2 + " worked, late" + medicaidTimeLate2 + ", reassigned " + medicaidTimeReassigned2);
//Load the Mule 3
    medicaidWorked3 = Number(document.getElementById("m3MCTime").value);
    medicaidTimeLate3 = Number(document.getElementById("m3MCLate").value);
    medicaidTimeReassigned3 = Number(document.getElementById("m3MCReassigned").value);
//CHECK OUTPUTS FOR ERROR 3
    if (medicaidTimeLate3 > 0 && medicaidTimeReassigned3 > 0) {
        medicaidTimeLate3 + medicaidTimeReassigned3;
    } else if (medicaidTimeLate3 > 0 || medicaidTimeReassigned3 > 0) {
        medicaidTimeLate3 + medicaidTimeReassigned3;
    } else {
        medicaidTimeLate3 = 0
    }
    console.log(medicaidWorked3 + " worked, late" + medicaidTimeLate3 + ", reassigned " + medicaidTimeReassigned3);
//Load the Mule 4
    medicaidWorked4 = Number(document.getElementById("m4MCTime").value);
    medicaidTimeLate4 = Number(document.getElementById("m4MCLate").value);
    medicaidTimeReassigned4 = Number(document.getElementById("m4MCReassigned").value);
//CHECK OUTPUTS FOR ERROR 4
    if (medicaidTimeLate4 > 0 && medicaidTimeReassigned4 > 0) {
        medicaidTimeLate4 + medicaidTimeReassigned4;
    } else if (medicaidTimeLate4 > 0 || medicaidTimeReassigned4 > 0) {
        medicaidTimeLate4 + medicaidTimeReassigned4;
    } else {
        medicaidTimeLate4 = 0
    }
    console.log(medicaidWorked4 + " worked, late" + medicaidTimeLate4 + ", reassigned " + medicaidTimeReassigned4);
//Load the Mule 5
    medicaidWorked5 = Number(document.getElementById("m5MCTime").value);
    medicaidTimeLate5 = Number(document.getElementById("m5MCLate").value);
    medicaidTimeReassigned5 = Number(document.getElementById("m5MCReassigned").value);
//CHECK OUTPUTS FOR ERROR 5
    if (medicaidTimeLate5 > 0 && medicaidTimeReassigned5 > 0) {
        medicaidTimeLate5 + medicaidTimeReassigned5;
    } else if (medicaidTimeLate5 > 0 || medicaidTimeReassigned5 > 0) {
        medicaidTimeLate5 + medicaidTimeReassigned5;
    } else {
        medicaidTimeLate5 = 0
    }
    console.log(medicaidWorked5 + " worked, late" + medicaidTimeLate5 + ", reassigned " + medicaidTimeReassigned5);
//Load the Mule 6
    medicaidWorked6 = Number(document.getElementById("m6MCTime").value);
    medicaidTimeLate6 = Number(document.getElementById("m6MCLate").value);
    medicaidTimeReassigned6 = Number(document.getElementById("m6MCReassigned").value);
//CHECK OUTPUTS FOR ERROR 6
    if (medicaidTimeLate6 > 0 && medicaidTimeReassigned6 > 0) {
        medicaidTimeLate6 + medicaidTimeReassigned6;
    } else if (medicaidTimeLate6 > 0 || medicaidTimeReassigned6 > 0) {
        medicaidTimeLate6 + medicaidTimeReassigned6;
    } else {
        medicaidTimeLate6 = 0
    }
    console.log(medicaidWorked6 + " worked, late" + medicaidTimeLate6 + ", reassigned " + medicaidTimeReassigned6);
//Load the Mule 7
    medicaidWorked7 = Number(document.getElementById("m7MCTime").value);
    medicaidTimeLate7 = Number(document.getElementById("m7MCLate").value);
    medicaidTimeReassigned7 = Number(document.getElementById("m7MCReassigned").value);
//CHECK OUTPUTS FOR ERROR 7
    if (medicaidTimeLate7 > 0 && medicaidTimeReassigned7 > 0) {
        medicaidTimeLate7 + medicaidTimeReassigned7;
    } else if (medicaidTimeLate7 > 0 || medicaidTimeReassigned7 > 0) {
        medicaidTimeLate7 + medicaidTimeReassigned7;
    } else {
        medicaidTimeLate7 = 0
    }
    console.log(medicaidWorked7 + " worked, late" + medicaidTimeLate7 + ", reassigned " + medicaidTimeReassigned7);
//Load the Mule 8
    medicaidWorked8 = Number(document.getElementById("m8MCTime").value);
    medicaidTimeLate8 = Number(document.getElementById("m8MCLate").value);
    medicaidTimeReassigned8 = Number(document.getElementById("m8MCReassigned").value);
//CHECK OUTPUTS FOR ERROR 8
    if (medicaidTimeLate8 > 0 && medicaidTimeReassigned8 > 0) {
        medicaidTimeLate8 + medicaidTimeReassigned8;
    } else if (medicaidTimeLate8 > 0 || medicaidTimeReassigned8 > 0) {
        medicaidTimeLate8 + medicaidTimeReassigned8;
    } else {
        medicaidTimeLate8 = 0
    }
    console.log(medicaidWorked8 + " worked, late" + medicaidTimeLate8 + ", reassigned " + medicaidTimeReassigned8);
//Load the Mule 9
    medicaidWorked9 = Number(document.getElementById("m9MCTime").value);
    medicaidTimeLate9 = Number(document.getElementById("m9MCLate").value);
    medicaidTimeReassigned9 = Number(document.getElementById("m9MCReassigned").value);
//CHECK OUTPUTS FOR ERROR 9
    if (medicaidTimeLate9 > 0 && medicaidTimeReassigned9 > 0) {
        medicaidTimeLate9 + medicaidTimeReassigned9;
    } else if (medicaidTimeLate9 > 0 || medicaidTimeReassigned9 > 0) {
        medicaidTimeLate9 + medicaidTimeReassigned9;
    } else {
        medicaidTimeLate9 = 0
    }
    console.log(medicaidWorked9 + " worked, late" + medicaidTimeLate9 + ", reassigned " + medicaidTimeReassigned9);
//Load the Mule 10
    medicaidWorked10 = Number(document.getElementById("m10MCTime").value);
    medicaidTimeLate10 = Number(document.getElementById("m10MCLate").value);
    medicaidTimeReassigned10 = Number(document.getElementById("m10MCReassigned").value);
//CHECK OUTPUTS FOR ERROR 10
    if (medicaidTimeLate10 > 0 && medicaidTimeReassigned10 > 0) {
        medicaidTimeLate10 + medicaidTimeReassigned10;
    } else if (medicaidTimeLate10 > 0 || medicaidTimeReassigned10 > 0) {
        medicaidTimeLate10 + medicaidTimeReassigned10;
    } else {
        medicaidTimeLate10 = 0
    }
    console.log(medicaidWorked10 + " worked, late" + medicaidTimeLate10 + ", reassigned " + medicaidTimeReassigned10);
//Load the Mule 11
    medicaidWorked11 = Number(document.getElementById("m11MCTime").value);
    medicaidTimeLate11 = Number(document.getElementById("m11MCLate").value);
    medicaidTimeReassigned11 = Number(document.getElementById("m11MCReassigned").value);
//CHECK OUTPUTS FOR ERROR 11
    if (medicaidTimeLate11 > 0 && medicaidTimeReassigned11 > 0) {
        medicaidTimeLate11 + medicaidTimeReassigned11;
    } else if (medicaidTimeLate11 > 0 || medicaidTimeReassigned11 > 0) {
        medicaidTimeLate11 + medicaidTimeReassigned11;
    } else {
        medicaidTimeLate11 = 0
    }
    console.log(medicaidWorked11 + " worked, late" + medicaidTimeLate11 + ", reassigned " + medicaidTimeReassigned11);
//Load the Mule 12
    medicaidWorked12 = Number(document.getElementById("m12MCTime").value);
    medicaidTimeLate12 = Number(document.getElementById("m12MCLate").value);
    medicaidTimeReassigned12 = Number(document.getElementById("m12MCReassigned").value);
//CHECK OUTPUTS FOR ERROR 12
    if (medicaidTimeLate12 > 0 && medicaidTimeReassigned12 > 0) {
        medicaidTimeLate12 + medicaidTimeReassigned12;
    } else if (medicaidTimeLate12 > 0 || medicaidTimeReassigned12 > 0) {
        medicaidTimeLate12 + medicaidTimeReassigned12;
    } else {
        medicaidTimeLate12 = 0
    }
    console.log(medicaidWorked12 + " worked, late" + medicaidTimeLate12 + ", reassigned " + medicaidTimeReassigned12);
//-------------------DONE--------------------
//Set medicaid Time Counters
    medicaidTime1 = (1 - ((medicaidTimeLate1 + medicaidTimeReassigned1) / medicaidWorked1)) * 100;
    if (medicaidTime1 >= 90) {
        medicaidTimeConsistency++;
        medicaidTimeCount++;
    } else if (medicaidTime1 > 0 && medicaidTime1 < 90) {
        medicaidTimeCount++;
    } else {
        medicaidTime1 = 0;
    }
    medicaidTime2 = (1 - ((medicaidTimeLate2 + medicaidTimeReassigned2) / medicaidWorked2)) * 100;
    if (medicaidTime2 >= 90) {
        medicaidTimeConsistency++;
        medicaidTimeCount++;
    } else if (medicaidTime2 > 0 && medicaidTime2 < 90) {
        medicaidTimeCount++;
    } else {
        medicaidTime2 = 0;
    }
    medicaidTime3 = (1 - ((medicaidTimeLate3 + medicaidTimeReassigned3) / medicaidWorked3)) * 100;
    if (medicaidTime3 >= 90) {
        medicaidTimeConsistency++;
        medicaidTimeCount++;
    } else if (medicaidTime3 > 0 && medicaidTime3 < 90) {
        medicaidTimeCount++;
    } else {
        medicaidTime3 = 0;
    }
    medicaidTime4 = (1 - ((medicaidTimeLate4 + medicaidTimeReassigned4) / medicaidWorked4)) * 100;
    if (medicaidTime4 >= 90) {
        medicaidTimeConsistency++;
        medicaidTimeCount++;
    } else if (medicaidTime4 > 0 && medicaidTime4 < 90) {
        medicaidTimeCount++;
    } else {
        medicaidTime4 = 0;
    }
    medicaidTime5 = (1 - ((medicaidTimeLate5 + medicaidTimeReassigned5) / medicaidWorked5)) * 100;
    if (medicaidTime5 >= 90) {
        medicaidTimeConsistency++;
        medicaidTimeCount++;
    } else if (medicaidTime5 > 0 && medicaidTime5 < 90) {
        medicaidTimeCount++;
    } else {
        medicaidTime5 = 0;
    }
    medicaidTime6 = (1 - ((medicaidTimeLate6 + medicaidTimeReassigned6) / medicaidWorked6)) * 100;
    if (medicaidTime6 >= 90) {
        medicaidTimeConsistency++;
        medicaidTimeCount++;
    } else if (medicaidTime6 > 0 && medicaidTime6 < 90) {
        medicaidTimeCount++;
    } else {
        medicaidTime6 = 0;
    }
    medicaidTime7 = (1 - ((medicaidTimeLate7 + medicaidTimeReassigned7) / medicaidWorked7)) * 100;
    if (medicaidTime7 >= 90) {
        medicaidTimeConsistency++;
        medicaidTimeCount++;
    } else if (medicaidTime7 > 0 && medicaidTime7 < 90) {
        medicaidTimeCount++;
    } else {
        medicaidTime7 = 0;
    }
    medicaidTime8 = (1 - ((medicaidTimeLate8 + medicaidTimeReassigned8) / medicaidWorked8)) * 100;
    if (medicaidTime8 >= 90) {
        medicaidTimeConsistency++;
        medicaidTimeCount++;
    } else if (medicaidTime8 > 0 && medicaidTime8 < 90) {
        medicaidTimeCount++;
    } else {
        medicaidTime8 = 0;
    }
    medicaidTime9 = (1 - ((medicaidTimeLate9 + medicaidTimeReassigned9) / medicaidWorked9)) * 100;
    if (medicaidTime9 >= 90) {
        medicaidTimeConsistency++;
        medicaidTimeCount++;
    } else if (medicaidTime9 > 0 && medicaidTime9 < 90) {
        medicaidTimeCount++;
    } else {
        medicaidTime9 = 0;
    }
    medicaidTime10 = (1 - ((medicaidTimeLate10 + medicaidTimeReassigned10) / medicaidWorked10)) * 100;
    if (medicaidTime10 >= 90) {
        medicaidTimeConsistency++;
        medicaidTimeCount++;
    } else if (medicaidTime10 > 0 && medicaidTime10 < 90) {
        medicaidTimeCount++;
    } else {
        medicaidTime10 = 0;
    }
    medicaidTime11 = (1 - ((medicaidTimeLate11 + medicaidTimeReassigned11) / medicaidWorked11)) * 100;
    if (medicaidTime11 >= 90) {
        medicaidTimeConsistency++;
        medicaidTimeCount++;
    } else if (medicaidTime11 > 0 && medicaidTime11 < 90) {
        medicaidTimeCount++;
    } else {
        medicaidTime11 = 0;
    }
    medicaidTime12 = (1 - ((medicaidTimeLate12 + medicaidTimeReassigned12) / medicaidWorked12)) * 100;
    if (medicaidTime12 >= 90) {
        medicaidTimeConsistency++;
        medicaidTimeCount++;
    } else if (medicaidTime12 > 0 && medicaidTime12 < 90) {
        medicaidTimeCount++;
    } else {
        medicaidTime12 = 0;
    }
    console.log(medicaidTimeConsistency + " Consistency Value");
    console.log(medicaidTimeCount + " medicaidTime Count Value");
//--------------------DONE--------------------
// --------------------
// FILL REPORT FIELDS ON HTML PAGE
// --------------------

// log out medicaid timeliness data
    document.getElementById("month1-MCtime").innerHTML = (((medicaidTime1).toFixed(2)) + "%");
    document.getElementById("month2-MCtime").innerHTML = (((medicaidTime2).toFixed(2)) + "%");
    document.getElementById("month3-MCtime").innerHTML = (((medicaidTime3).toFixed(2)) + "%");
    document.getElementById("month4-MCtime").innerHTML = (((medicaidTime4).toFixed(2)) + "%");
    document.getElementById("month5-MCtime").innerHTML = (((medicaidTime5).toFixed(2)) + "%");
    document.getElementById("month6-MCtime").innerHTML = (((medicaidTime6).toFixed(2)) + "%");
    document.getElementById("month7-MCtime").innerHTML = (((medicaidTime7).toFixed(2)) + "%");
    document.getElementById("month8-MCtime").innerHTML = (((medicaidTime8).toFixed(2)) + "%");
    document.getElementById("month9-MCtime").innerHTML = (((medicaidTime9).toFixed(2)) + "%");
    document.getElementById("month10-MCtime").innerHTML = (((medicaidTime10).toFixed(2)) + "%");
    document.getElementById("month11-MCtime").innerHTML = (((medicaidTime11).toFixed(2)) + "%");
    document.getElementById("month12-MCtime").innerHTML = (((medicaidTime12).toFixed(2)) + "%");

// --------------------
// PGCS RATING PREP
// --------------------

// medicaid accuracy calculations
    let medicaidTimeTotal = 0;
    let medicaidTimeSum = medicaidTimeCount;

    switch (medicaidTimeSum) {
        case 12:
            medicaidTimeTotal = (medicaidTime1 + medicaidTime2 + medicaidTime3 + medicaidTime4 + medicaidTime5 + medicaidTime6 + medicaidTime7 + medicaidTime8 + medicaidTime9 + medicaidTime10 + medicaidTime11 + medicaidTime12);
            console.log("Running 12");
            break;
        case 11:
            medicaidTimeTotal = (medicaidTime1 + medicaidTime2 + medicaidTime3 + medicaidTime4 + medicaidTime5 + medicaidTime6 + medicaidTime7 + medicaidTime8 + medicaidTime9 + medicaidTime10 + medicaidTime11 + medicaidTime12);
            console.log("Running 11");
            break;
        case 10:
            medicaidTimeTotal = (medicaidTime1 + medicaidTime2 + medicaidTime3 + medicaidTime4 + medicaidTime5 + medicaidTime6 + medicaidTime7 + medicaidTime8 + medicaidTime9 + medicaidTime10 + medicaidTime11 + medicaidTime12);
            console.log("Running 10");
            break;
        case 9:
            medicaidTimeTotal = (medicaidTime1 + medicaidTime2 + medicaidTime3 + medicaidTime4 + medicaidTime5 + medicaidTime6 + medicaidTime7 + medicaidTime8 + medicaidTime9 + medicaidTime10 + medicaidTime11 + medicaidTime12);
            console.log("Running 9");
            break;
        case 8:
            medicaidTimeTotal = (medicaidTime1 + medicaidTime2 + medicaidTime3 + medicaidTime4 + medicaidTime5 + medicaidTime6 + medicaidTime7 + medicaidTime8 + medicaidTime9 + medicaidTime10 + medicaidTime11 + medicaidTime12);
            console.log("Running 8");
            break;
        case 7:
            medicaidTimeTotal = (medicaidTime1 + medicaidTime2 + medicaidTime3 + medicaidTime4 + medicaidTime5 + medicaidTime6 + medicaidTime7 + medicaidTime8 + medicaidTime9 + medicaidTime10 + medicaidTime11 + medicaidTime12);
            console.log("Running 7");
            break;
        case 6:
            medicaidTimeTotal = (medicaidTime1 + medicaidTime2 + medicaidTime3 + medicaidTime4 + medicaidTime5 + medicaidTime6 + medicaidTime7 + medicaidTime8 + medicaidTime9 + medicaidTime10 + medicaidTime11 + medicaidTime12);
            console.log("Running 6");
            break;
        case 5:
            medicaidTimeTotal = (medicaidTime1 + medicaidTime2 + medicaidTime3 + medicaidTime4 + medicaidTime5 + medicaidTime6 + medicaidTime7 + medicaidTime8 + medicaidTime9 + medicaidTime10 + medicaidTime11 + medicaidTime12);
            console.log("Running 5");
            break;
        case 4:
            medicaidTimeTotal = (medicaidTime1 + medicaidTime2 + medicaidTime3 + medicaidTime4 + medicaidTime5 + medicaidTime6 + medicaidTime7 + medicaidTime8 + medicaidTime9 + medicaidTime10 + medicaidTime11 + medicaidTime12);
            console.log("Running 4");
            break;
        case 3:
            medicaidTimeTotal = (medicaidTime1 + medicaidTime2 + medicaidTime3 + medicaidTime4 + medicaidTime5 + medicaidTime6 + medicaidTime7 + medicaidTime8 + medicaidTime9 + medicaidTime10 + medicaidTime11 + medicaidTime12);
            console.log("Running 3");
            break;
        case 2:
            medicaidTimeTotal = (medicaidTime1 + medicaidTime2 + medicaidTime3 + medicaidTime4 + medicaidTime5 + medicaidTime6 + medicaidTime7 + medicaidTime8 + medicaidTime9 + medicaidTime10 + medicaidTime11 + medicaidTime12);
            console.log("Running 2");
            break;
        case 1:
            medicaidTimeTotal = (medicaidTime1 + medicaidTime2 + medicaidTime3 + medicaidTime4 + medicaidTime5 + medicaidTime6 + medicaidTime7 + medicaidTime8 + medicaidTime9 + medicaidTime10 + medicaidTime11 + medicaidTime12);
            console.log("Running 1");
            break;
        default:
            console.log("Awaiting Input");
    }
    let avemedicaidTime = medicaidTimeTotal / medicaidTimeSum;
    console.log("medicaid Time Sum = " + medicaidTimeSum);
    console.log("Sum medicaid Time = " + medicaidTimeTotal);
    console.log("Ave medicaid Time = " + avemedicaidTime);
    document.getElementsByName("medicaidTimeSum").value = avemedicaidTime;

//------------------
//OUTPUT TO PGCS SUMMARY SECTION
//------------------
//measure medicaid TIMELINESS against the standard
    if (avemedicaidTime <= 80 && medicaidTimeSum > 0) {
        document.getElementById("mcTimeScore").innerHTML = (((avemedicaidTime).toFixed(2)) + "% Timeliness");
    } else if (avemedicaidTime < 90 && avemedicaidTime > 80) {
        document.getElementById("mcTimeScore").innerHTML = (((avemedicaidTime).toFixed(2)) + "% Timeliness");
    } else if (avemedicaidTime >= 90) {
        document.getElementById("mcTimeScore").innerHTML = (((avemedicaidTime).toFixed(2)) + "% Timeliness")
    } else {
        console.log("No Data")
    }
    // log out Medicaid Time data to grid
    document.getElementById("month1-MCtime").innerHTML = (((medicaidTime1).toFixed(2)) + "%");
    if (medicaidTime1 > 0) {
        document.getElementById("m1MCTimTable").innerHTML = "TM:" + medicaidWorked1 + "\(" + medicaidTimeLate1 + "\):" + (((medicaidTime1).toFixed(2)) + "%");
    } else {
        document.getElementById("m1MCTimTable").innerHTML = "No Data";
    }
    document.getElementById("month2-MCtime").innerHTML = (((medicaidTime2).toFixed(2)) + "%");
    if (medicaidTime2 > 0) {
        document.getElementById("m2MCTimTable").innerHTML = "TM:" + medicaidWorked2 + "\(" + medicaidTimeLate2 + "\):" + (((medicaidTime2).toFixed(2)) + "%");
    } else {
        document.getElementById("m2MCTimTable").innerHTML = "No Data";
    }
    document.getElementById("month3-MCtime").innerHTML = (((medicaidTime3).toFixed(2)) + "%");
    if (medicaidTime3 > 0) {
        document.getElementById("m3MCTimTable").innerHTML = "TM:" + medicaidWorked3 + "\(" + medicaidTimeLate3 + "\):" + (((medicaidTime3).toFixed(2)) + "%");
    } else {
        document.getElementById("m3MCTimTable").innerHTML = "No Data";
    }
    document.getElementById("month4-MCtime").innerHTML = (((medicaidTime4).toFixed(2)) + "%");
    if (medicaidTime4 > 0) {
        document.getElementById("m4MCTimTable").innerHTML = "TM:" + medicaidWorked4 + "\(" + medicaidTimeLate4 + "\):" + (((medicaidTime4).toFixed(2)) + "%");
    } else {
        document.getElementById("m4MCTimTable").innerHTML = "No Data";
    }
    document.getElementById("month5-MCtime").innerHTML = (((medicaidTime5).toFixed(2)) + "%");
    if (medicaidTime5 > 0) {
        document.getElementById("m5MCTimTable").innerHTML = "TM:" + medicaidWorked5 + "\(" + medicaidTimeLate5 + "\):" + (((medicaidTime5).toFixed(2)) + "%");
    } else {
        document.getElementById("m5MCTimTable").innerHTML = "No Data";
    }
    document.getElementById("month6-MCtime").innerHTML = (((medicaidTime6).toFixed(2)) + "%");
    if (medicaidTime6 > 0) {
        document.getElementById("m6MCTimTable").innerHTML = "TM:" + medicaidWorked6 + "\(" + medicaidTimeLate6 + "\):" + (((medicaidTime6).toFixed(2)) + "%");
    } else {
        document.getElementById("m6MCTimTable").innerHTML = "No Data";
    }
    document.getElementById("month7-MCtime").innerHTML = (((medicaidTime7).toFixed(2)) + "%");
    if (medicaidTime7 > 0) {
        document.getElementById("m7MCTimTable").innerHTML = "TM:" + medicaidWorked7 + "\(" + medicaidTimeLate7 + "\):" + (((medicaidTime7).toFixed(2)) + "%");
    } else {
        document.getElementById("m7MCTimTable").innerHTML = "No Data";
    }
    document.getElementById("month8-MCtime").innerHTML = (((medicaidTime8).toFixed(2)) + "%");
    if (medicaidTime8 > 0) {
        document.getElementById("m8MCTimTable").innerHTML = "TM:" + medicaidWorked8 + "\(" + medicaidTimeLate8 + "\):" + (((medicaidTime8).toFixed(2)) + "%");
    } else {
        document.getElementById("m8MCTimTable").innerHTML = "No Data";
    }
    document.getElementById("month9-MCtime").innerHTML = (((medicaidTime9).toFixed(2)) + "%");
    if (medicaidTime9 > 0) {
        document.getElementById("m9MCTimTable").innerHTML = "TM:" + medicaidWorked9 + "\(" + medicaidTimeLate9 + "\):" + (((medicaidTime9).toFixed(2)) + "%");
    } else {
        document.getElementById("m9MCTimTable").innerHTML = "No Data";
    }
    document.getElementById("month10-MCtime").innerHTML = (((medicaidTime10).toFixed(2)) + "%");
    if (medicaidTime10 > 0) {
        document.getElementById("m10MCTimTable").innerHTML = "TM:" + medicaidWorked10 + "\(" + medicaidTimeLate10 + "\):" + (((medicaidTime10).toFixed(2)) + "%");
    } else {
        document.getElementById("m10MCTimTable").innerHTML = "No Data";
    }
    document.getElementById("month11-MCtime").innerHTML = (((medicaidTime11).toFixed(2)) + "%");
    if (medicaidTime11 > 0) {
        document.getElementById("m11MCTimTable").innerHTML = "TM:" + medicaidWorked11 + "\(" + medicaidTimeLate11 + "\):" + (((medicaidTime11).toFixed(2)) + "%");
    } else {
        document.getElementById("m11MCTimTable").innerHTML = "No Data";
    }
    document.getElementById("month12-MCtime").innerHTML = (((medicaidTime12).toFixed(2)) + "%");
    if (medicaidTime12 > 0) {
        document.getElementById("m12MCTimTable").innerHTML = "TM:" + medicaidWorked12 + "\(" + medicaidTimeLate12 + "\):" + (((medicaidTime12).toFixed(2)) + "%");
    } else {
        document.getElementById("m12MCTimTable").innerHTML = "No Data";
    }
// Measure Consistency for Star Value medicaid TIMELINESS
    var medicaidTimeIsConsistent = (medicaidTimeConsistency / medicaidTimeSum) * 100;
    if (medicaidTimeIsConsistent >= 95 && avemedicaidTime > 90) {
        document.getElementById("mcStarScoreTime").innerHTML = "&#x2605 &#x2605 &#x2605"; //removed 4th star from consistency rule, deprecated by DCO procedural rules.
            // document.getElementById("prodSARStarDescriptor").innerHTML = "Highly Effective"
            document.getElementById("mcStarDescriptorTime").innerHTML = "Solid Performer"
        document.getElementById("mcTimeFinal").innerHTML = "Consistently Met Goal"
    } else if (medicaidTimeIsConsistent < 95 && avemedicaidTime >= 90) {
        document.getElementById("mcStarScoreTime").innerHTML = "&#x2605 &#x2605 &#x2605";
        document.getElementById("mcStarDescriptorTime").innerHTML = "Solid Performer";
        document.getElementById("mcTimeFinal").innerHTML = "Inconsistently Met Goal";
    } else if (avemedicaidTime > 30 && avemedicaidTime < 90) {
        document.getElementById("mcStarScoreTime").innerHTML = "&#x2605 &#x2605";
        document.getElementById("mcStarDescriptorTime").innerHTML = "Needs Improvement";
        document.getElementById("mcTimeFinal").innerHTML = "Missed Goal";
    } else if (avemedicaidTime > 0 && avemedicaidTime <= 30) {
        document.getElementById("mcStarScoreTime").innerHTML = "&#x2605";
        document.getElementById("mcStarDescriptorTime").innerHTML = "Unsatisfactory";
        document.getElementById("mcTimeFinal").innerHTML = "Missed Goal";
    }
    else {
        document.getElementById("mcStarScoreTime").innerHTML = "ERROR";
        document.getElementById("mcStarDescriptorTime").innerHTML = "ERROR";
        document.getElementById("mcTimeFinal").innerHTML = "ERROR";
        console.log("*********ave time = " + avemedicaidTime + ":" + medicaidTimeIsConsistent);
    }
// Add Up Total Reviews and Total Errors FOR medicaid TIMELINESS

    var TotalmedicaidTime = Number(medicaidWorked1) + Number(medicaidWorked2) + Number(medicaidWorked3) + Number(medicaidWorked4) + Number(medicaidWorked5) + Number(medicaidWorked6) + Number(medicaidWorked7) + Number(medicaidWorked8) + Number(medicaidWorked9) + Number(medicaidWorked10) + Number(medicaidWorked11) + Number(medicaidWorked12);
    document.getElementById("mcTimWorked").innerHTML = (TotalmedicaidTime + " Cases Worked");
    var TotalmedicaidLate = Number(medicaidTimeLate1) + Number(medicaidTimeLate2) + Number(medicaidTimeLate3) + Number(medicaidTimeLate4) + Number(medicaidTimeLate5) + Number(medicaidTimeLate6) + Number(medicaidTimeLate7) + Number(medicaidTimeLate8) + Number(medicaidTimeLate9) + Number(medicaidTimeLate10) + Number(medicaidTimeLate11) + Number(medicaidTimeLate12) + Number(medicaidTimeReassigned1) + Number(medicaidTimeReassigned2) + Number(medicaidTimeReassigned3) + Number(medicaidTimeReassigned4) + Number(medicaidTimeReassigned5) + Number(medicaidTimeReassigned6) + Number(medicaidTimeReassigned7) + Number(medicaidTimeReassigned8) + Number(medicaidTimeReassigned9) + Number(medicaidTimeReassigned10) + Number(medicaidTimeReassigned11) + Number(medicaidTimeReassigned12);
    document.getElementById("mcTimLate").innerHTML = (TotalmedicaidLate + " Late Cases");

// ------------magi TIME--------------
//RESET magi TIME COUNTERS
    let magiTime1 = 0;
    let magiTime2 = 0;
    let magiTime3 = 0;
    let magiTime4 = 0;
    let magiTime5 = 0;
    let magiTime6 = 0;
    let magiTime7 = 0;
    let magiTime8 = 0;
    let magiTime9 = 0;
    let magiTime10 = 0;
    let magiTime11 = 0;
    let magiTime12 = 0;
    let magiWorked1 = 0;
    let magiWorked2 = 0;
    let magiWorked3 = 0;
    let magiWorked4 = 0;
    let magiWorked5 = 0;
    let magiWorked6 = 0;
    let magiWorked7 = 0;
    let magiWorked8 = 0;
    let magiWorked9 = 0;
    let magiWorked10 = 0;
    let magiWorked11 = 0;
    let magiWorked12 = 0;
    let magiTimeLate1 = 0;
    let magiTimeLate2 = 0;
    let magiTimeLate3 = 0;
    let magiTimeLate4 = 0;
    let magiTimeLate5 = 0;
    let magiTimeLate6 = 0;
    let magiTimeLate7 = 0;
    let magiTimeLate8 = 0;
    let magiTimeLate9 = 0;
    let magiTimeLate10 = 0;
    let magiTimeLate11 = 0;
    let magiTimeLate12 = 0;
    let magiTimeReassigned1 = 0;
    let magiTimeReassigned2 = 0;
    let magiTimeReassigned3 = 0;
    let magiTimeReassigned4 = 0;
    let magiTimeReassigned5 = 0;
    let magiTimeReassigned6 = 0;
    let magiTimeReassigned7 = 0;
    let magiTimeReassigned8 = 0;
    let magiTimeReassigned9 = 0;
    let magiTimeReassigned10 = 0;
    let magiTimeReassigned11 = 0;
    let magiTimeReassigned12 = 0;
    var magiTimeCount = 0;
    var magiWorkedCount = 0;
    let magiTimeLateCount = 0;
    var magiTimeConsistency = 0;
// --------------------
// LOAD UP DATA
// --------------------
    // --------------------magi TIMELINESS——————————
//Load the Mule 1
    magiWorked1 = Number(document.getElementById("m1MAGITime").value);
    magiTimeLate1 = Number(document.getElementById("m1MAGILate").value);
    magiTimeReassigned1 = Number(document.getElementById("m1MAGIReassigned").value);
//CHECK OUTPUTS FOR ERROR 1
    if (magiTimeLate1 > 0 && magiTimeReassigned1 > 0) {
        magiTimeLate1 + magiTimeReassigned1;
    } else if (magiTimeLate1 > 0 || magiTimeReassigned1 > 0) {
        magiTimeLate1 + magiTimeReassigned1;
    } else {
        magiTimeLate1 = 0
    }
    console.log(magiWorked1 + " worked, late" + magiTimeLate1 + ", reassigned " + magiTimeReassigned1);
//Load the Mule 2
    magiWorked2 = Number(document.getElementById("m2MAGITime").value);
    magiTimeLate2 = Number(document.getElementById("m2MAGILate").value);
    magiTimeReassigned2 = Number(document.getElementById("m2MAGIReassigned").value);
//CHECK OUTPUTS FOR ERROR 2
    if (magiTimeLate2 > 0 && magiTimeReassigned2 > 0) {
        magiTimeLate2 + magiTimeReassigned2;
    } else if (magiTimeLate2 > 0 || magiTimeReassigned2 > 0) {
        magiTimeLate2 + magiTimeReassigned2;
    } else {
        magiTimeLate2 = 0
    }
    console.log(magiWorked2 + " worked, late" + magiTimeLate2 + ", reassigned " + magiTimeReassigned2);
//Load the Mule 3
    magiWorked3 = Number(document.getElementById("m3MAGITime").value);
    magiTimeLate3 = Number(document.getElementById("m3MAGILate").value);
    magiTimeReassigned3 = Number(document.getElementById("m3MAGIReassigned").value);
//CHECK OUTPUTS FOR ERROR 3
    if (magiTimeLate3 > 0 && magiTimeReassigned3 > 0) {
        magiTimeLate3 + magiTimeReassigned3;
    } else if (magiTimeLate3 > 0 || magiTimeReassigned3 > 0) {
        magiTimeLate3 + magiTimeReassigned3;
    } else {
        magiTimeLate3 = 0
    }
    console.log(magiWorked3 + " worked, late" + magiTimeLate3 + ", reassigned " + magiTimeReassigned3);
//Load the Mule 4
    magiWorked4 = Number(document.getElementById("m4MAGITime").value);
    magiTimeLate4 = Number(document.getElementById("m4MAGILate").value);
    magiTimeReassigned4 = Number(document.getElementById("m4MAGIReassigned").value);
//CHECK OUTPUTS FOR ERROR 4
    if (magiTimeLate4 > 0 && magiTimeReassigned4 > 0) {
        magiTimeLate4 + magiTimeReassigned4;
    } else if (magiTimeLate4 > 0 || magiTimeReassigned4 > 0) {
        magiTimeLate4 + magiTimeReassigned4;
    } else {
        magiTimeLate4 = 0
    }
    console.log(magiWorked4 + " worked, late" + magiTimeLate4 + ", reassigned " + magiTimeReassigned4);
//Load the Mule 5
    magiWorked5 = Number(document.getElementById("m5MAGITime").value);
    magiTimeLate5 = Number(document.getElementById("m5MAGILate").value);
    magiTimeReassigned5 = Number(document.getElementById("m5MAGIReassigned").value);
//CHECK OUTPUTS FOR ERROR 5
    if (magiTimeLate5 > 0 && magiTimeReassigned5 > 0) {
        magiTimeLate5 + magiTimeReassigned5;
    } else if (magiTimeLate5 > 0 || magiTimeReassigned5 > 0) {
        magiTimeLate5 + magiTimeReassigned5;
    } else {
        magiTimeLate5 = 0
    }
    console.log(magiWorked5 + " worked, late" + magiTimeLate5 + ", reassigned " + magiTimeReassigned5);
//Load the Mule 6
    magiWorked6 = Number(document.getElementById("m6MAGITime").value);
    magiTimeLate6 = Number(document.getElementById("m6MAGILate").value);
    magiTimeReassigned6 = Number(document.getElementById("m6MAGIReassigned").value);
//CHECK OUTPUTS FOR ERROR 6
    if (magiTimeLate6 > 0 && magiTimeReassigned6 > 0) {
        magiTimeLate6 + magiTimeReassigned6;
    } else if (magiTimeLate6 > 0 || magiTimeReassigned6 > 0) {
        magiTimeLate6 + magiTimeReassigned6;
    } else {
        magiTimeLate6 = 0
    }
    console.log(magiWorked6 + " worked, late" + magiTimeLate6 + ", reassigned " + magiTimeReassigned6);
//Load the Mule 7
    magiWorked7 = Number(document.getElementById("m7MAGITime").value);
    magiTimeLate7 = Number(document.getElementById("m7MAGILate").value);
    magiTimeReassigned7 = Number(document.getElementById("m7MAGIReassigned").value);
//CHECK OUTPUTS FOR ERROR 7
    if (magiTimeLate7 > 0 && magiTimeReassigned7 > 0) {
        magiTimeLate7 + magiTimeReassigned7;
    } else if (magiTimeLate7 > 0 || magiTimeReassigned7 > 0) {
        magiTimeLate7 + magiTimeReassigned7;
    } else {
        magiTimeLate7 = 0
    }
    console.log(magiWorked7 + " worked, late" + magiTimeLate7 + ", reassigned " + magiTimeReassigned7);
//Load the Mule 8
    magiWorked8 = Number(document.getElementById("m8MAGITime").value);
    magiTimeLate8 = Number(document.getElementById("m8MAGILate").value);
    magiTimeReassigned8 = Number(document.getElementById("m8MAGIReassigned").value);
//CHECK OUTPUTS FOR ERROR 8
    if (magiTimeLate8 > 0 && magiTimeReassigned8 > 0) {
        magiTimeLate8 + magiTimeReassigned8;
    } else if (magiTimeLate8 > 0 || magiTimeReassigned8 > 0) {
        magiTimeLate8 + magiTimeReassigned8;
    } else {
        magiTimeLate8 = 0
    }
    console.log(magiWorked8 + " worked, late" + magiTimeLate8 + ", reassigned " + magiTimeReassigned8);
//Load the Mule 9
    magiWorked9 = Number(document.getElementById("m9MAGITime").value);
    magiTimeLate9 = Number(document.getElementById("m9MAGILate").value);
    magiTimeReassigned9 = Number(document.getElementById("m9MAGIReassigned").value);
//CHECK OUTPUTS FOR ERROR 9
    if (magiTimeLate9 > 0 && magiTimeReassigned9 > 0) {
        magiTimeLate9 + magiTimeReassigned9;
    } else if (magiTimeLate9 > 0 || magiTimeReassigned9 > 0) {
        magiTimeLate9 + magiTimeReassigned9;
    } else {
        magiTimeLate9 = 0
    }
    console.log(magiWorked9 + " worked, late" + magiTimeLate9 + ", reassigned " + magiTimeReassigned9);
//Load the Mule 10
    magiWorked10 = Number(document.getElementById("m10MAGITime").value);
    magiTimeLate10 = Number(document.getElementById("m10MAGILate").value);
    magiTimeReassigned10 = Number(document.getElementById("m10MAGIReassigned").value);
//CHECK OUTPUTS FOR ERROR 10
    if (magiTimeLate10 > 0 && magiTimeReassigned10 > 0) {
        magiTimeLate10 + magiTimeReassigned10;
    } else if (magiTimeLate10 > 0 || magiTimeReassigned10 > 0) {
        magiTimeLate10 + magiTimeReassigned10;
    } else {
        magiTimeLate10 = 0
    }
    console.log(magiWorked10 + " worked, late" + magiTimeLate10 + ", reassigned " + magiTimeReassigned10);
//Load the Mule 11
    magiWorked11 = Number(document.getElementById("m11MAGITime").value);
    magiTimeLate11 = Number(document.getElementById("m11MAGILate").value);
    magiTimeReassigned11 = Number(document.getElementById("m11MAGIReassigned").value);
//CHECK OUTPUTS FOR ERROR 11
    if (magiTimeLate11 > 0 && magiTimeReassigned11 > 0) {
        magiTimeLate11 + magiTimeReassigned11;
    } else if (magiTimeLate11 > 0 || magiTimeReassigned11 > 0) {
        magiTimeLate11 + magiTimeReassigned11;
    } else {
        magiTimeLate11 = 0
    }
    console.log(magiWorked11 + " worked, late" + magiTimeLate11 + ", reassigned " + magiTimeReassigned11);
//Load the Mule 12
    magiWorked12 = Number(document.getElementById("m12MAGITime").value);
    magiTimeLate12 = Number(document.getElementById("m12MAGILate").value);
    magiTimeReassigned12 = Number(document.getElementById("m12MAGIReassigned").value);
//CHECK OUTPUTS FOR ERROR 12
    if (magiTimeLate12 > 0 && magiTimeReassigned12 > 0) {
        magiTimeLate12 + magiTimeReassigned12;
    } else if (magiTimeLate12 > 0 || magiTimeReassigned12 > 0) {
        magiTimeLate12 + magiTimeReassigned12;
    } else {
        magiTimeLate12 = 0
    }
    console.log(magiWorked12 + " worked, late" + magiTimeLate12 + ", reassigned " + magiTimeReassigned12);
//-------------------DONE--------------------
//Set magi Time Counters
    magiTime1 = (1 - ((magiTimeLate1 + magiTimeReassigned1) / magiWorked1)) * 100;
    if (magiTime1 >= 90) {
        magiTimeConsistency++;
        magiTimeCount++;
    } else if (magiTime1 > 0 && magiTime1 < 90) {
        magiTimeCount++;
    } else {
        magiTime1 = 0;
    }
    magiTime2 = (1 - ((magiTimeLate2 + magiTimeReassigned2) / magiWorked2)) * 100;
    if (magiTime2 >= 90) {
        magiTimeConsistency++;
        magiTimeCount++;
    } else if (magiTime2 > 0 && magiTime2 < 90) {
        magiTimeCount++;
    } else {
        magiTime2 = 0;
    }
    magiTime3 = (1 - ((magiTimeLate3 + magiTimeReassigned3) / magiWorked3)) * 100;
    if (magiTime3 >= 90) {
        magiTimeConsistency++;
        magiTimeCount++;
    } else if (magiTime3 > 0 && magiTime3 < 90) {
        magiTimeCount++;
    } else {
        magiTime3 = 0;
    }
    magiTime4 = (1 - ((magiTimeLate4 + magiTimeReassigned4) / magiWorked4)) * 100;
    if (magiTime4 >= 90) {
        magiTimeConsistency++;
        magiTimeCount++;
    } else if (magiTime4 > 0 && magiTime4 < 90) {
        magiTimeCount++;
    } else {
        magiTime4 = 0;
    }
    magiTime5 = (1 - ((magiTimeLate5 + magiTimeReassigned5) / magiWorked5)) * 100;
    if (magiTime5 >= 90) {
        magiTimeConsistency++;
        magiTimeCount++;
    } else if (magiTime5 > 0 && magiTime5 < 90) {
        magiTimeCount++;
    } else {
        magiTime5 = 0;
    }
    magiTime6 = (1 - ((magiTimeLate6 + magiTimeReassigned6) / magiWorked6)) * 100;
    if (magiTime6 >= 90) {
        magiTimeConsistency++;
        magiTimeCount++;
    } else if (magiTime6 > 0 && magiTime6 < 90) {
        magiTimeCount++;
    } else {
        magiTime6 = 0;
    }
    magiTime7 = (1 - ((magiTimeLate7 + magiTimeReassigned7) / magiWorked7)) * 100;
    if (magiTime7 >= 90) {
        magiTimeConsistency++;
        magiTimeCount++;
    } else if (magiTime7 > 0 && magiTime7 < 90) {
        magiTimeCount++;
    } else {
        magiTime7 = 0;
    }
    magiTime8 = (1 - ((magiTimeLate8 + magiTimeReassigned8) / magiWorked8)) * 100;
    if (magiTime8 >= 90) {
        magiTimeConsistency++;
        magiTimeCount++;
    } else if (magiTime8 > 0 && magiTime8 < 90) {
        magiTimeCount++;
    } else {
        magiTime8 = 0;
    }
    magiTime9 = (1 - ((magiTimeLate9 + magiTimeReassigned9) / magiWorked9)) * 100;
    if (magiTime9 >= 90) {
        magiTimeConsistency++;
        magiTimeCount++;
    } else if (magiTime9 > 0 && magiTime9 < 90) {
        magiTimeCount++;
    } else {
        magiTime9 = 0;
    }
    magiTime10 = (1 - ((magiTimeLate10 + magiTimeReassigned10) / magiWorked10)) * 100;
    if (magiTime10 >= 90) {
        magiTimeConsistency++;
        magiTimeCount++;
    } else if (magiTime10 > 0 && magiTime10 < 90) {
        magiTimeCount++;
    } else {
        magiTime10 = 0;
    }
    magiTime11 = (1 - ((magiTimeLate11 + magiTimeReassigned11) / magiWorked11)) * 100;
    if (magiTime11 >= 90) {
        magiTimeConsistency++;
        magiTimeCount++;
    } else if (magiTime11 > 0 && magiTime11 < 90) {
        magiTimeCount++;
    } else {
        magiTime11 = 0;
    }
    magiTime12 = (1 - ((magiTimeLate12 + magiTimeReassigned12) / magiWorked12)) * 100;
    if (magiTime12 >= 90) {
        magiTimeConsistency++;
        magiTimeCount++;
    } else if (magiTime12 > 0 && magiTime12 < 90) {
        magiTimeCount++;
    } else {
        magiTime12 = 0;
    }
    console.log(magiTimeConsistency + " Consistency Value");
    console.log(magiTimeCount + " magiTime Count Value");
//--------------------DONE--------------------
// --------------------
// FILL REPORT FIELDS ON HTML PAGE
// --------------------

// log out magi timeliness data
    document.getElementById("month1-MAGItime").innerHTML = (((magiTime1).toFixed(2)) + "%");
    document.getElementById("month2-MAGItime").innerHTML = (((magiTime2).toFixed(2)) + "%");
    document.getElementById("month3-MAGItime").innerHTML = (((magiTime3).toFixed(2)) + "%");
    document.getElementById("month4-MAGItime").innerHTML = (((magiTime4).toFixed(2)) + "%");
    document.getElementById("month5-MAGItime").innerHTML = (((magiTime5).toFixed(2)) + "%");
    document.getElementById("month6-MAGItime").innerHTML = (((magiTime6).toFixed(2)) + "%");
    document.getElementById("month7-MAGItime").innerHTML = (((magiTime7).toFixed(2)) + "%");
    document.getElementById("month8-MAGItime").innerHTML = (((magiTime8).toFixed(2)) + "%");
    document.getElementById("month9-MAGItime").innerHTML = (((magiTime9).toFixed(2)) + "%");
    document.getElementById("month10-MAGItime").innerHTML = (((magiTime10).toFixed(2)) + "%");
    document.getElementById("month11-MAGItime").innerHTML = (((magiTime11).toFixed(2)) + "%");
    document.getElementById("month12-MAGItime").innerHTML = (((magiTime12).toFixed(2)) + "%");

// --------------------
// PGCS RATING PREP
// --------------------

// magi accuracy calculations
    let magiTimeTotal = 0;
    let magiTimeSum = magiTimeCount;

    switch (magiTimeSum) {
        case 12:
            magiTimeTotal = (magiTime1 + magiTime2 + magiTime3 + magiTime4 + magiTime5 + magiTime6 + magiTime7 + magiTime8 + magiTime9 + magiTime10 + magiTime11 + magiTime12);
            console.log("Running 12");
            break;
        case 11:
            magiTimeTotal = (magiTime1 + magiTime2 + magiTime3 + magiTime4 + magiTime5 + magiTime6 + magiTime7 + magiTime8 + magiTime9 + magiTime10 + magiTime11 + magiTime12);
            console.log("Running 11");
            break;
        case 10:
            magiTimeTotal = (magiTime1 + magiTime2 + magiTime3 + magiTime4 + magiTime5 + magiTime6 + magiTime7 + magiTime8 + magiTime9 + magiTime10 + magiTime11 + magiTime12);
            console.log("Running 10");
            break;
        case 9:
            magiTimeTotal = (magiTime1 + magiTime2 + magiTime3 + magiTime4 + magiTime5 + magiTime6 + magiTime7 + magiTime8 + magiTime9 + magiTime10 + magiTime11 + magiTime12);
            console.log("Running 9");
            break;
        case 8:
            magiTimeTotal = (magiTime1 + magiTime2 + magiTime3 + magiTime4 + magiTime5 + magiTime6 + magiTime7 + magiTime8 + magiTime9 + magiTime10 + magiTime11 + magiTime12);
            console.log("Running 8");
            break;
        case 7:
            magiTimeTotal = (magiTime1 + magiTime2 + magiTime3 + magiTime4 + magiTime5 + magiTime6 + magiTime7 + magiTime8 + magiTime9 + magiTime10 + magiTime11 + magiTime12);
            console.log("Running 7");
            break;
        case 6:
            magiTimeTotal = (magiTime1 + magiTime2 + magiTime3 + magiTime4 + magiTime5 + magiTime6 + magiTime7 + magiTime8 + magiTime9 + magiTime10 + magiTime11 + magiTime12);
            console.log("Running 6");
            break;
        case 5:
            magiTimeTotal = (magiTime1 + magiTime2 + magiTime3 + magiTime4 + magiTime5 + magiTime6 + magiTime7 + magiTime8 + magiTime9 + magiTime10 + magiTime11 + magiTime12);
            console.log("Running 5");
            break;
        case 4:
            magiTimeTotal = (magiTime1 + magiTime2 + magiTime3 + magiTime4 + magiTime5 + magiTime6 + magiTime7 + magiTime8 + magiTime9 + magiTime10 + magiTime11 + magiTime12);
            console.log("Running 4");
            break;
        case 3:
            magiTimeTotal = (magiTime1 + magiTime2 + magiTime3 + magiTime4 + magiTime5 + magiTime6 + magiTime7 + magiTime8 + magiTime9 + magiTime10 + magiTime11 + magiTime12);
            console.log("Running 3");
            break;
        case 2:
            magiTimeTotal = (magiTime1 + magiTime2 + magiTime3 + magiTime4 + magiTime5 + magiTime6 + magiTime7 + magiTime8 + magiTime9 + magiTime10 + magiTime11 + magiTime12);
            console.log("Running 2");
            break;
        case 1:
            magiTimeTotal = (magiTime1 + magiTime2 + magiTime3 + magiTime4 + magiTime5 + magiTime6 + magiTime7 + magiTime8 + magiTime9 + magiTime10 + magiTime11 + magiTime12);
            console.log("Running 1");
            break;
        default:
            console.log("Awaiting Input");
    }
    let avemagiTime = magiTimeTotal / magiTimeSum;
    console.log("magi Time Sum = " + magiTimeSum);
    console.log("Sum magi Time = " + magiTimeTotal);
    console.log("Ave magi Time = " + avemagiTime);
    document.getElementsByName("magiTimeSum").value = avemagiTime;

//------------------
//OUTPUT TO PGCS SUMMARY SECTION
//------------------
//measure magi TIMELINESS against the standard
    if (avemagiTime <= 80 && magiTimeSum > 0) {
        document.getElementById("magiTimeScore").innerHTML = (((avemagiTime).toFixed(2)) + "% Timeliness");
    } else if (avemagiTime < 90 && avemagiTime > 80) {
        document.getElementById("magiTimeScore").innerHTML = (((avemagiTime).toFixed(2)) + "% Timeliness");
    } else if (avemagiTime >= 90) {
        document.getElementById("magiTimeScore").innerHTML = (((avemagiTime).toFixed(2)) + "% Timeliness")
    } else {
        console.log("No Data")
    }
    // log out MAGI Time data to grid
    document.getElementById("month1-MAGItime").innerHTML = (((magiTime1).toFixed(2)) + "%");
    if (magiTime1 > 0) {
        document.getElementById("m1MAGITimTable").innerHTML = "MG:" + magiWorked1 + "\(" + magiTimeLate1 + "\):" + (((magiTime1).toFixed(2)) + "%");
    } else {
        document.getElementById("m1MAGITimTable").innerHTML = "No Data";
    }
    document.getElementById("month2-MAGItime").innerHTML = (((magiTime2).toFixed(2)) + "%");
    if (magiTime2 > 0) {
        document.getElementById("m2MAGITimTable").innerHTML = "MG:" + magiWorked2 + "\(" + magiTimeLate2 + "\):" + (((magiTime2).toFixed(2)) + "%");
    } else {
        document.getElementById("m2MAGITimTable").innerHTML = "No Data";
    }
    document.getElementById("month3-MAGItime").innerHTML = (((magiTime3).toFixed(2)) + "%");
    if (magiTime3 > 0) {
        document.getElementById("m3MAGITimTable").innerHTML = "MG:" + magiWorked3 + "\(" + magiTimeLate3 + "\):" + (((magiTime3).toFixed(2)) + "%");
    } else {
        document.getElementById("m3MAGITimTable").innerHTML = "No Data";
    }
    document.getElementById("month4-MAGItime").innerHTML = (((magiTime4).toFixed(2)) + "%");
    if (magiTime4 > 0) {
        document.getElementById("m4MAGITimTable").innerHTML = "MG:" + magiWorked4 + "\(" + magiTimeLate4 + "\):" + (((magiTime4).toFixed(2)) + "%");
    } else {
        document.getElementById("m4MAGITimTable").innerHTML = "No Data";
    }
    document.getElementById("month5-MAGItime").innerHTML = (((magiTime5).toFixed(2)) + "%");
    if (magiTime5 > 0) {
        document.getElementById("m5MAGITimTable").innerHTML = "MG:" + magiWorked5 + "\(" + magiTimeLate5 + "\):" + (((magiTime5).toFixed(2)) + "%");
    } else {
        document.getElementById("m5MAGITimTable").innerHTML = "No Data";
    }
    document.getElementById("month6-MAGItime").innerHTML = (((magiTime6).toFixed(2)) + "%");
    if (magiTime6 > 0) {
        document.getElementById("m6MAGITimTable").innerHTML = "MG:" + magiWorked6 + "\(" + magiTimeLate6 + "\):" + (((magiTime6).toFixed(2)) + "%");
    } else {
        document.getElementById("m6MAGITimTable").innerHTML = "No Data";
    }
    document.getElementById("month7-MAGItime").innerHTML = (((magiTime7).toFixed(2)) + "%");
    if (magiTime7 > 0) {
        document.getElementById("m7MAGITimTable").innerHTML = "MG:" + magiWorked7 + "\(" + magiTimeLate7 + "\):" + (((magiTime7).toFixed(2)) + "%");
    } else {
        document.getElementById("m7MAGITimTable").innerHTML = "No Data";
    }
    document.getElementById("month8-MAGItime").innerHTML = (((magiTime8).toFixed(2)) + "%");
    if (magiTime8 > 0) {
        document.getElementById("m8MAGITimTable").innerHTML = "MG:" + magiWorked8 + "\(" + magiTimeLate8 + "\):" + (((magiTime8).toFixed(2)) + "%");
    } else {
        document.getElementById("m8MAGITimTable").innerHTML = "No Data";
    }
    document.getElementById("month9-MAGItime").innerHTML = (((magiTime9).toFixed(2)) + "%");
    if (magiTime9 > 0) {
        document.getElementById("m9MAGITimTable").innerHTML = "MG:" + magiWorked9 + "\(" + magiTimeLate9 + "\):" + (((magiTime9).toFixed(2)) + "%");
    } else {
        document.getElementById("m9MAGITimTable").innerHTML = "No Data";
    }
    document.getElementById("month10-MAGItime").innerHTML = (((magiTime10).toFixed(2)) + "%");
    if (magiTime10 > 0) {
        document.getElementById("m10MAGITimTable").innerHTML = "MG:" + magiWorked10 + "\(" + magiTimeLate10 + "\):" + (((magiTime10).toFixed(2)) + "%");
    } else {
        document.getElementById("m10MAGITimTable").innerHTML = "No Data";
    }
    document.getElementById("month11-MAGItime").innerHTML = (((magiTime11).toFixed(2)) + "%");
    if (magiTime11 > 0) {
        document.getElementById("m11MAGITimTable").innerHTML = "MG:" + magiWorked11 + "\(" + magiTimeLate11 + "\):" + (((magiTime11).toFixed(2)) + "%");
    } else {
        document.getElementById("m11MAGITimTable").innerHTML = "No Data";
    }
    document.getElementById("month12-MAGItime").innerHTML = (((magiTime12).toFixed(2)) + "%");
    if (magiTime12 > 0) {
        document.getElementById("m12MAGITimTable").innerHTML = "MG:" + magiWorked12 + "\(" + magiTimeLate12 + "\):" + (((magiTime12).toFixed(2)) + "%");
    } else {
        document.getElementById("m12MAGITimTable").innerHTML = "No Data";
    }
// Measure Consistency for Star Value magi TIMELINESS
    var magiTimeIsConsistent = (magiTimeConsistency / magiTimeSum) * 100;
    if (magiTimeIsConsistent >= 95 && avemagiTime > 90) {
        document.getElementById("magiStarScoreTime").innerHTML = "&#x2605 &#x2605 &#x2605"; //removed 4th star from consistency rule, deprecated by DCO procedural rules.
            // document.getElementById("prodSARStarDescriptor").innerHTML = "Highly Effective"
            document.getElementById("magiStarDescriptorTime").innerHTML = "Solid Performer"
        document.getElementById("magiTimeFinal").innerHTML = "Consistently Met Goal"
    } else if (magiTimeIsConsistent < 95 && avemagiTime >= 90) {
        document.getElementById("magiStarScoreTime").innerHTML = "&#x2605 &#x2605 &#x2605";
        document.getElementById("magiStarDescriptorTime").innerHTML = "Solid Performer";
        document.getElementById("magiTimeFinal").innerHTML = "Inconsistently Met Goal";
    } else if (avemagiTime > 30 && avemagiTime < 90) {
        document.getElementById("magiStarScoreTime").innerHTML = "&#x2605 &#x2605";
        document.getElementById("magiStarDescriptorTime").innerHTML = "Needs Improvement";
        document.getElementById("magiTimeFinal").innerHTML = "Missed Goal";
    } else if (avemagiTime > 0 && avemagiTime <= 30) {
        document.getElementById("magiStarScoreTime").innerHTML = "&#x2605";
        document.getElementById("magiStarDescriptorTime").innerHTML = "Unsatisfactory";
        document.getElementById("magiTimeFinal").innerHTML = "Missed Goal";
    }
// Add Up Total Reviews and Total Errors FOR magi TIMELINESS

    var TotalmagiTime = Number(magiWorked1) + Number(magiWorked2) + Number(magiWorked3) + Number(magiWorked4) + Number(magiWorked5) + Number(magiWorked6) + Number(magiWorked7) + Number(magiWorked8) + Number(magiWorked9) + Number(magiWorked10) + Number(magiWorked11) + Number(magiWorked12);
    document.getElementById("magiTimeWorked").innerHTML = (TotalmagiTime + " Cases Worked");
    var TotalmagiLate = Number(magiTimeLate1) + Number(magiTimeLate2) + Number(magiTimeLate3) + Number(magiTimeLate4) + Number(magiTimeLate5) + Number(magiTimeLate6) + Number(magiTimeLate7) + Number(magiTimeLate8) + Number(magiTimeLate9) + Number(magiTimeLate10) + Number(magiTimeLate11) + Number(magiTimeLate12) + Number(magiTimeReassigned1) + Number(magiTimeReassigned2) + Number(magiTimeReassigned3) + Number(magiTimeReassigned4) + Number(magiTimeReassigned5) + Number(magiTimeReassigned6) + Number(magiTimeReassigned7) + Number(magiTimeReassigned8) + Number(magiTimeReassigned9) + Number(magiTimeReassigned10) + Number(magiTimeReassigned11) + Number(magiTimeReassigned12);
    document.getElementById("magiTimeLate").innerHTML = (TotalmagiLate + " Late Cases");

// ------------TEA TIME--------------
//RESET TEA TIME COUNTERS
    let TEATime1 = 0;
    let TEATime2 = 0;
    let TEATime3 = 0;
    let TEATime4 = 0;
    let TEATime5 = 0;
    let TEATime6 = 0;
    let TEATime7 = 0;
    let TEATime8 = 0;
    let TEATime9 = 0;
    let TEATime10 = 0;
    let TEATime11 = 0;
    let TEATime12 = 0;
    let TEAWorked1 = 0;
    let TEAWorked2 = 0;
    let TEAWorked3 = 0;
    let TEAWorked4 = 0;
    let TEAWorked5 = 0;
    let TEAWorked6 = 0;
    let TEAWorked7 = 0;
    let TEAWorked8 = 0;
    let TEAWorked9 = 0;
    let TEAWorked10 = 0;
    let TEAWorked11 = 0;
    let TEAWorked12 = 0;
    let TEATimeLate1 = 0;
    let TEATimeLate2 = 0;
    let TEATimeLate3 = 0;
    let TEATimeLate4 = 0;
    let TEATimeLate5 = 0;
    let TEATimeLate6 = 0;
    let TEATimeLate7 = 0;
    let TEATimeLate8 = 0;
    let TEATimeLate9 = 0;
    let TEATimeLate10 = 0;
    let TEATimeLate11 = 0;
    let TEATimeLate12 = 0;
    let TEATimeReassigned1 = 0;
    let TEATimeReassigned2 = 0;
    let TEATimeReassigned3 = 0;
    let TEATimeReassigned4 = 0;
    let TEATimeReassigned5 = 0;
    let TEATimeReassigned6 = 0;
    let TEATimeReassigned7 = 0;
    let TEATimeReassigned8 = 0;
    let TEATimeReassigned9 = 0;
    let TEATimeReassigned10 = 0;
    let TEATimeReassigned11 = 0;
    let TEATimeReassigned12 = 0;
    var TEATimeCount = 0;
    var TEAWorkedCount = 0;
    let TEATimeLateCount = 0;
    var TEATimeConsistency = 0;
// --------------------
// LOAD UP DATA
// --------------------
    // --------------------TEA TIMELINESS——————————
//Load the Mule 1
    TEAWorked1 = Number(document.getElementById("m1TEATime").value);
    TEATimeLate1 = Number(document.getElementById("m1TEALate").value);
    TEATimeReassigned1 = Number(document.getElementById("m1TEAReassigned").value);
//CHECK OUTPUTS FOR ERROR 1
    if (TEATimeLate1 > 0 && TEATimeReassigned1 > 0) {
        TEATimeLate1 + TEATimeReassigned1;
    } else if (TEATimeLate1 > 0 || TEATimeReassigned1 > 0) {
        TEATimeLate1 + TEATimeReassigned1;
    } else {
        TEATimeLate1 = 0
    }
    console.log(TEAWorked1 + " worked, late" + TEATimeLate1 + ", reassigned " + TEATimeReassigned1);
//Load the Mule 2
    TEAWorked2 = Number(document.getElementById("m2TEATime").value);
    TEATimeLate2 = Number(document.getElementById("m2TEALate").value);
    TEATimeReassigned2 = Number(document.getElementById("m2TEAReassigned").value);
//CHECK OUTPUTS FOR ERROR 2
    if (TEATimeLate2 > 0 && TEATimeReassigned2 > 0) {
        TEATimeLate2 + TEATimeReassigned2;
    } else if (TEATimeLate2 > 0 || TEATimeReassigned2 > 0) {
        TEATimeLate2 + TEATimeReassigned2;
    } else {
        TEATimeLate2 = 0
    }
    console.log(TEAWorked2 + " worked, late" + TEATimeLate2 + ", reassigned " + TEATimeReassigned2);
//Load the Mule 3
    TEAWorked3 = Number(document.getElementById("m3TEATime").value);
    TEATimeLate3 = Number(document.getElementById("m3TEALate").value);
    TEATimeReassigned3 = Number(document.getElementById("m3TEAReassigned").value);
//CHECK OUTPUTS FOR ERROR 3
    if (TEATimeLate3 > 0 && TEATimeReassigned3 > 0) {
        TEATimeLate3 + TEATimeReassigned3;
    } else if (TEATimeLate3 > 0 || TEATimeReassigned3 > 0) {
        TEATimeLate3 + TEATimeReassigned3;
    } else {
        TEATimeLate3 = 0
    }
    console.log(TEAWorked3 + " worked, late" + TEATimeLate3 + ", reassigned " + TEATimeReassigned3);
//Load the Mule 4
    TEAWorked4 = Number(document.getElementById("m4TEATime").value);
    TEATimeLate4 = Number(document.getElementById("m4TEALate").value);
    TEATimeReassigned4 = Number(document.getElementById("m4TEAReassigned").value);
//CHECK OUTPUTS FOR ERROR 4
    if (TEATimeLate4 > 0 && TEATimeReassigned4 > 0) {
        TEATimeLate4 + TEATimeReassigned4;
    } else if (TEATimeLate4 > 0 || TEATimeReassigned4 > 0) {
        TEATimeLate4 + TEATimeReassigned4;
    } else {
        TEATimeLate4 = 0
    }
    console.log(TEAWorked4 + " worked, late" + TEATimeLate4 + ", reassigned " + TEATimeReassigned4);
//Load the Mule 5
    TEAWorked5 = Number(document.getElementById("m5TEATime").value);
    TEATimeLate5 = Number(document.getElementById("m5TEALate").value);
    TEATimeReassigned5 = Number(document.getElementById("m5TEAReassigned").value);
//CHECK OUTPUTS FOR ERROR 5
    if (TEATimeLate5 > 0 && TEATimeReassigned5 > 0) {
        TEATimeLate5 + TEATimeReassigned5;
    } else if (TEATimeLate5 > 0 || TEATimeReassigned5 > 0) {
        TEATimeLate5 + TEATimeReassigned5;
    } else {
        TEATimeLate5 = 0
    }
    console.log(TEAWorked5 + " worked, late" + TEATimeLate5 + ", reassigned " + TEATimeReassigned5);
//Load the Mule 6
    TEAWorked6 = Number(document.getElementById("m6TEATime").value);
    TEATimeLate6 = Number(document.getElementById("m6TEALate").value);
    TEATimeReassigned6 = Number(document.getElementById("m6TEAReassigned").value);
//CHECK OUTPUTS FOR ERROR 6
    if (TEATimeLate6 > 0 && TEATimeReassigned6 > 0) {
        TEATimeLate6 + TEATimeReassigned6;
    } else if (TEATimeLate6 > 0 || TEATimeReassigned6 > 0) {
        TEATimeLate6 + TEATimeReassigned6;
    } else {
        TEATimeLate6 = 0
    }
    console.log(TEAWorked6 + " worked, late" + TEATimeLate6 + ", reassigned " + TEATimeReassigned6);
//Load the Mule 7
    TEAWorked7 = Number(document.getElementById("m7TEATime").value);
    TEATimeLate7 = Number(document.getElementById("m7TEALate").value);
    TEATimeReassigned7 = Number(document.getElementById("m7TEAReassigned").value);
//CHECK OUTPUTS FOR ERROR 7
    if (TEATimeLate7 > 0 && TEATimeReassigned7 > 0) {
        TEATimeLate7 + TEATimeReassigned7;
    } else if (TEATimeLate7 > 0 || TEATimeReassigned7 > 0) {
        TEATimeLate7 + TEATimeReassigned7;
    } else {
        TEATimeLate7 = 0
    }
    console.log(TEAWorked7 + " worked, late" + TEATimeLate7 + ", reassigned " + TEATimeReassigned7);
//Load the Mule 8
    TEAWorked8 = Number(document.getElementById("m8TEATime").value);
    TEATimeLate8 = Number(document.getElementById("m8TEALate").value);
    TEATimeReassigned8 = Number(document.getElementById("m8TEAReassigned").value);
//CHECK OUTPUTS FOR ERROR 8
    if (TEATimeLate8 > 0 && TEATimeReassigned8 > 0) {
        TEATimeLate8 + TEATimeReassigned8;
    } else if (TEATimeLate8 > 0 || TEATimeReassigned8 > 0) {
        TEATimeLate8 + TEATimeReassigned8;
    } else {
        TEATimeLate8 = 0
    }
    console.log(TEAWorked8 + " worked, late" + TEATimeLate8 + ", reassigned " + TEATimeReassigned8);
//Load the Mule 9
    TEAWorked9 = Number(document.getElementById("m9TEATime").value);
    TEATimeLate9 = Number(document.getElementById("m9TEALate").value);
    TEATimeReassigned9 = Number(document.getElementById("m9TEAReassigned").value);
//CHECK OUTPUTS FOR ERROR 9
    if (TEATimeLate9 > 0 && TEATimeReassigned9 > 0) {
        TEATimeLate9 + TEATimeReassigned9;
    } else if (TEATimeLate9 > 0 || TEATimeReassigned9 > 0) {
        TEATimeLate9 + TEATimeReassigned9;
    } else {
        TEATimeLate9 = 0
    }
    console.log(TEAWorked9 + " worked, late" + TEATimeLate9 + ", reassigned " + TEATimeReassigned9);
//Load the Mule 10
    TEAWorked10 = Number(document.getElementById("m10TEATime").value);
    TEATimeLate10 = Number(document.getElementById("m10TEALate").value);
    TEATimeReassigned10 = Number(document.getElementById("m10TEAReassigned").value);
//CHECK OUTPUTS FOR ERROR 10
    if (TEATimeLate10 > 0 && TEATimeReassigned10 > 0) {
        TEATimeLate10 + TEATimeReassigned10;
    } else if (TEATimeLate10 > 0 || TEATimeReassigned10 > 0) {
        TEATimeLate10 + TEATimeReassigned10;
    } else {
        TEATimeLate10 = 0
    }
    console.log(TEAWorked10 + " worked, late" + TEATimeLate10 + ", reassigned " + TEATimeReassigned10);
//Load the Mule 11
    TEAWorked11 = Number(document.getElementById("m11TEATime").value);
    TEATimeLate11 = Number(document.getElementById("m11TEALate").value);
    TEATimeReassigned11 = Number(document.getElementById("m11TEAReassigned").value);
//CHECK OUTPUTS FOR ERROR 11
    if (TEATimeLate11 > 0 && TEATimeReassigned11 > 0) {
        TEATimeLate11 + TEATimeReassigned11;
    } else if (TEATimeLate11 > 0 || TEATimeReassigned11 > 0) {
        TEATimeLate11 + TEATimeReassigned11;
    } else {
        TEATimeLate11 = 0
    }
    console.log(TEAWorked11 + " worked, late" + TEATimeLate11 + ", reassigned " + TEATimeReassigned11);
//Load the Mule 12
    TEAWorked12 = Number(document.getElementById("m12TEATime").value);
    TEATimeLate12 = Number(document.getElementById("m12TEALate").value);
    TEATimeReassigned12 = Number(document.getElementById("m12TEAReassigned").value);
//CHECK OUTPUTS FOR ERROR 12
    if (TEATimeLate12 > 0 && TEATimeReassigned12 > 0) {
        TEATimeLate12 + TEATimeReassigned12;
    } else if (TEATimeLate12 > 0 || TEATimeReassigned12 > 0) {
        TEATimeLate12 + TEATimeReassigned12;
    } else {
        TEATimeLate12 = 0
    }
    console.log(TEAWorked12 + " worked, late" + TEATimeLate12 + ", reassigned " + TEATimeReassigned12);
//-------------------DONE--------------------
//Set TEA Time Counters
    TEATime1 = (1 - ((TEATimeLate1 + TEATimeReassigned1) / TEAWorked1)) * 100;
    if (TEATime1 >= 97) {
        TEATimeConsistency++;
        TEATimeCount++;
    } else if (TEATime1 > 0 && TEATime1 < 97) {
        TEATimeCount++;
    } else {
        TEATime1 = 0;
    }
    TEATime2 = (1 - ((TEATimeLate2 + TEATimeReassigned2) / TEAWorked2)) * 100;
    if (TEATime2 >= 97) {
        TEATimeConsistency++;
        TEATimeCount++;
    } else if (TEATime2 > 0 && TEATime2 < 97) {
        TEATimeCount++;
    } else {
        TEATime2 = 0;
    }
    TEATime3 = (1 - ((TEATimeLate3 + TEATimeReassigned3) / TEAWorked3)) * 100;
    if (TEATime3 >= 97) {
        TEATimeConsistency++;
        TEATimeCount++;
    } else if (TEATime3 > 0 && TEATime3 < 97) {
        TEATimeCount++;
    } else {
        TEATime3 = 0;
    }
    TEATime4 = (1 - ((TEATimeLate4 + TEATimeReassigned4) / TEAWorked4)) * 100;
    if (TEATime4 >= 97) {
        TEATimeConsistency++;
        TEATimeCount++;
    } else if (TEATime4 > 0 && TEATime4 < 97) {
        TEATimeCount++;
    } else {
        TEATime4 = 0;
    }
    TEATime5 = (1 - ((TEATimeLate5 + TEATimeReassigned5) / TEAWorked5)) * 100;
    if (TEATime5 >= 97) {
        TEATimeConsistency++;
        TEATimeCount++;
    } else if (TEATime5 > 0 && TEATime5 < 97) {
        TEATimeCount++;
    } else {
        TEATime5 = 0;
    }
    TEATime6 = (1 - ((TEATimeLate6 + TEATimeReassigned6) / TEAWorked6)) * 100;
    if (TEATime6 >= 97) {
        TEATimeConsistency++;
        TEATimeCount++;
    } else if (TEATime6 > 0 && TEATime6 < 97) {
        TEATimeCount++;
    } else {
        TEATime6 = 0;
    }
    TEATime7 = (1 - ((TEATimeLate7 + TEATimeReassigned7) / TEAWorked7)) * 100;
    if (TEATime7 >= 97) {
        TEATimeConsistency++;
        TEATimeCount++;
    } else if (TEATime7 > 0 && TEATime7 < 97) {
        TEATimeCount++;
    } else {
        TEATime7 = 0;
    }
    TEATime8 = (1 - ((TEATimeLate8 + TEATimeReassigned8) / TEAWorked8)) * 100;
    if (TEATime8 >= 97) {
        TEATimeConsistency++;
        TEATimeCount++;
    } else if (TEATime8 > 0 && TEATime8 < 97) {
        TEATimeCount++;
    } else {
        TEATime8 = 0;
    }
    TEATime9 = (1 - ((TEATimeLate9 + TEATimeReassigned9) / TEAWorked9)) * 100;
    if (TEATime9 >= 97) {
        TEATimeConsistency++;
        TEATimeCount++;
    } else if (TEATime9 > 0 && TEATime9 < 97) {
        TEATimeCount++;
    } else {
        TEATime9 = 0;
    }
    TEATime10 = (1 - ((TEATimeLate10 + TEATimeReassigned10) / TEAWorked10)) * 100;
    if (TEATime10 >= 97) {
        TEATimeConsistency++;
        TEATimeCount++;
    } else if (TEATime10 > 0 && TEATime10 < 97) {
        TEATimeCount++;
    } else {
        TEATime10 = 0;
    }
    TEATime11 = (1 - ((TEATimeLate11 + TEATimeReassigned11) / TEAWorked11)) * 100;
    if (TEATime11 >= 97) {
        TEATimeConsistency++;
        TEATimeCount++;
    } else if (TEATime11 > 0 && TEATime11 < 97) {
        TEATimeCount++;
    } else {
        TEATime11 = 0;
    }
    TEATime12 = (1 - ((TEATimeLate12 + TEATimeReassigned12) / TEAWorked12)) * 100;
    if (TEATime12 >= 97) {
        TEATimeConsistency++;
        TEATimeCount++;
    } else if (TEATime12 > 0 && TEATime12 < 97) {
        TEATimeCount++;
    } else {
        TEATime12 = 0;
    }
    console.log(TEATimeConsistency + " Consistency Value");
    console.log(TEATimeCount + " TEATime Count Value");
//--------------------DONE--------------------
// --------------------
// FILL REPORT FIELDS ON HTML PAGE
// --------------------

// log out TEA timeliness data
    document.getElementById("month1-TEAtime").innerHTML = (((TEATime1).toFixed(2)) + "%");
    document.getElementById("month2-TEAtime").innerHTML = (((TEATime2).toFixed(2)) + "%");
    document.getElementById("month3-TEAtime").innerHTML = (((TEATime3).toFixed(2)) + "%");
    document.getElementById("month4-TEAtime").innerHTML = (((TEATime4).toFixed(2)) + "%");
    document.getElementById("month5-TEAtime").innerHTML = (((TEATime5).toFixed(2)) + "%");
    document.getElementById("month6-TEAtime").innerHTML = (((TEATime6).toFixed(2)) + "%");
    document.getElementById("month7-TEAtime").innerHTML = (((TEATime7).toFixed(2)) + "%");
    document.getElementById("month8-TEAtime").innerHTML = (((TEATime8).toFixed(2)) + "%");
    document.getElementById("month9-TEAtime").innerHTML = (((TEATime9).toFixed(2)) + "%");
    document.getElementById("month10-TEAtime").innerHTML = (((TEATime10).toFixed(2)) + "%");
    document.getElementById("month11-TEAtime").innerHTML = (((TEATime11).toFixed(2)) + "%");
    document.getElementById("month12-TEAtime").innerHTML = (((TEATime12).toFixed(2)) + "%");

// --------------------
// PGCS RATING PREP
// --------------------

// TEA accuracy calculations
    let TEATimeTotal = 0;
    let TEATimeSum = TEATimeCount;

    switch (TEATimeSum) {
        case 12:
            TEATimeTotal = (TEATime1 + TEATime2 + TEATime3 + TEATime4 + TEATime5 + TEATime6 + TEATime7 + TEATime8 + TEATime9 + TEATime10 + TEATime11 + TEATime12);
            console.log("Running 12");
            break;
        case 11:
            TEATimeTotal = (TEATime1 + TEATime2 + TEATime3 + TEATime4 + TEATime5 + TEATime6 + TEATime7 + TEATime8 + TEATime9 + TEATime10 + TEATime11 + TEATime12);
            console.log("Running 11");
            break;
        case 10:
            TEATimeTotal = (TEATime1 + TEATime2 + TEATime3 + TEATime4 + TEATime5 + TEATime6 + TEATime7 + TEATime8 + TEATime9 + TEATime10 + TEATime11 + TEATime12);
            console.log("Running 10");
            break;
        case 9:
            TEATimeTotal = (TEATime1 + TEATime2 + TEATime3 + TEATime4 + TEATime5 + TEATime6 + TEATime7 + TEATime8 + TEATime9 + TEATime10 + TEATime11 + TEATime12);
            console.log("Running 9");
            break;
        case 8:
            TEATimeTotal = (TEATime1 + TEATime2 + TEATime3 + TEATime4 + TEATime5 + TEATime6 + TEATime7 + TEATime8 + TEATime9 + TEATime10 + TEATime11 + TEATime12);
            console.log("Running 8");
            break;
        case 7:
            TEATimeTotal = (TEATime1 + TEATime2 + TEATime3 + TEATime4 + TEATime5 + TEATime6 + TEATime7 + TEATime8 + TEATime9 + TEATime10 + TEATime11 + TEATime12);
            console.log("Running 7");
            break;
        case 6:
            TEATimeTotal = (TEATime1 + TEATime2 + TEATime3 + TEATime4 + TEATime5 + TEATime6 + TEATime7 + TEATime8 + TEATime9 + TEATime10 + TEATime11 + TEATime12);
            console.log("Running 6");
            break;
        case 5:
            TEATimeTotal = (TEATime1 + TEATime2 + TEATime3 + TEATime4 + TEATime5 + TEATime6 + TEATime7 + TEATime8 + TEATime9 + TEATime10 + TEATime11 + TEATime12);
            console.log("Running 5");
            break;
        case 4:
            TEATimeTotal = (TEATime1 + TEATime2 + TEATime3 + TEATime4 + TEATime5 + TEATime6 + TEATime7 + TEATime8 + TEATime9 + TEATime10 + TEATime11 + TEATime12);
            console.log("Running 4");
            break;
        case 3:
            TEATimeTotal = (TEATime1 + TEATime2 + TEATime3 + TEATime4 + TEATime5 + TEATime6 + TEATime7 + TEATime8 + TEATime9 + TEATime10 + TEATime11 + TEATime12);
            console.log("Running 3");
            break;
        case 2:
            TEATimeTotal = (TEATime1 + TEATime2 + TEATime3 + TEATime4 + TEATime5 + TEATime6 + TEATime7 + TEATime8 + TEATime9 + TEATime10 + TEATime11 + TEATime12);
            console.log("Running 2");
            break;
        case 1:
            TEATimeTotal = (TEATime1 + TEATime2 + TEATime3 + TEATime4 + TEATime5 + TEATime6 + TEATime7 + TEATime8 + TEATime9 + TEATime10 + TEATime11 + TEATime12);
            console.log("Running 1");
            break;
        default:
            console.log("Awaiting Input");
    }
    let aveTEATime = TEATimeTotal / TEATimeSum;
    console.log("TEA Time Sum = " + TEATimeSum);
    console.log("Sum TEA Time = " + TEATimeTotal);
    console.log("Ave TEA Time = " + aveTEATime);
    document.getElementsByName("TEATimeSum").value = aveTEATime;

//------------------
//OUTPUT TO PGCS SUMMARY SECTION
//------------------
//measure TEA TIMELINESS against the standard
    if (aveTEATime <= 80 && TEATimeSum > 0) {
        document.getElementById("TEATimeScore").innerHTML = (((aveTEATime).toFixed(2)) + "% Timeliness");
    } else if (aveTEATime < 97 && aveTEATime > 80) {
        document.getElementById("TEATimeScore").innerHTML = (((aveTEATime).toFixed(2)) + "% Timeliness");
    } else if (aveTEATime >= 97) {
        document.getElementById("TEATimeScore").innerHTML = (((aveTEATime).toFixed(2)) + "% Timeliness")
    } else {
        console.log("No Data")
    }
    // log out TEA Time data to grid
    document.getElementById("month1-TEAtime").innerHTML = (((TEATime1).toFixed(2)) + "%");
    if (TEATime1 > 0) {
        document.getElementById("m1TEATimTable").innerHTML = "T:" + TEAWorked1 + "\(" + TEATimeLate1 + "\):" + (((TEATime1).toFixed(2)) + "%");
    } else {
        document.getElementById("m1TEATimTable").innerHTML = "No Data";
    }
    document.getElementById("month2-TEAtime").innerHTML = (((TEATime2).toFixed(2)) + "%");
    if (TEATime2 > 0) {
        document.getElementById("m2TEATimTable").innerHTML = "T:" + TEAWorked2 + "\(" + TEATimeLate2 + "\):" + (((TEATime2).toFixed(2)) + "%");
    } else {
        document.getElementById("m2TEATimTable").innerHTML = "No Data";
    }
    document.getElementById("month3-TEAtime").innerHTML = (((TEATime3).toFixed(2)) + "%");
    if (TEATime3 > 0) {
        document.getElementById("m3TEATimTable").innerHTML = "T:" + TEAWorked3 + "\(" + TEATimeLate3 + "\):" + (((TEATime3).toFixed(2)) + "%");
    } else {
        document.getElementById("m3TEATimTable").innerHTML = "No Data";
    }
    document.getElementById("month4-TEAtime").innerHTML = (((TEATime4).toFixed(2)) + "%");
    if (TEATime4 > 0) {
        document.getElementById("m4TEATimTable").innerHTML = "T:" + TEAWorked4 + "\(" + TEATimeLate4 + "\):" + (((TEATime4).toFixed(2)) + "%");
    } else {
        document.getElementById("m4TEATimTable").innerHTML = "No Data";
    }
    document.getElementById("month5-TEAtime").innerHTML = (((TEATime5).toFixed(2)) + "%");
    if (TEATime5 > 0) {
        document.getElementById("m5TEATimTable").innerHTML = "T:" + TEAWorked5 + "\(" + TEATimeLate5 + "\):" + (((TEATime5).toFixed(2)) + "%");
    } else {
        document.getElementById("m5TEATimTable").innerHTML = "No Data";
    }
    document.getElementById("month6-TEAtime").innerHTML = (((TEATime6).toFixed(2)) + "%");
    if (TEATime6 > 0) {
        document.getElementById("m6TEATimTable").innerHTML = "T:" + TEAWorked6 + "\(" + TEATimeLate6 + "\):" + (((TEATime6).toFixed(2)) + "%");
    } else {
        document.getElementById("m6TEATimTable").innerHTML = "No Data";
    }
    document.getElementById("month7-TEAtime").innerHTML = (((TEATime7).toFixed(2)) + "%");
    if (TEATime7 > 0) {
        document.getElementById("m7TEATimTable").innerHTML = "T:" + TEAWorked7 + "\(" + TEATimeLate7 + "\):" + (((TEATime7).toFixed(2)) + "%");
    } else {
        document.getElementById("m7TEATimTable").innerHTML = "No Data";
    }
    document.getElementById("month8-TEAtime").innerHTML = (((TEATime8).toFixed(2)) + "%");
    if (TEATime8 > 0) {
        document.getElementById("m8TEATimTable").innerHTML = "T:" + TEAWorked8 + "\(" + TEATimeLate8 + "\):" + (((TEATime8).toFixed(2)) + "%");
    } else {
        document.getElementById("m8TEATimTable").innerHTML = "No Data";
    }
    document.getElementById("month9-TEAtime").innerHTML = (((TEATime9).toFixed(2)) + "%");
    if (TEATime9 > 0) {
        document.getElementById("m9TEATimTable").innerHTML = "T:" + TEAWorked9 + "\(" + TEATimeLate9 + "\):" + (((TEATime9).toFixed(2)) + "%");
    } else {
        document.getElementById("m9TEATimTable").innerHTML = "No Data";
    }
    document.getElementById("month10-TEAtime").innerHTML = (((TEATime10).toFixed(2)) + "%");
    if (TEATime10 > 0) {
        document.getElementById("m10TEATimTable").innerHTML = "T:" + TEAWorked10 + "\(" + TEATimeLate10 + "\):" + (((TEATime10).toFixed(2)) + "%");
    } else {
        document.getElementById("m10TEATimTable").innerHTML = "No Data";
    }
    document.getElementById("month11-TEAtime").innerHTML = (((TEATime11).toFixed(2)) + "%");
    if (TEATime11 > 0) {
        document.getElementById("m11TEATimTable").innerHTML = "T:" + TEAWorked11 + "\(" + TEATimeLate11 + "\):" + (((TEATime11).toFixed(2)) + "%");
    } else {
        document.getElementById("m11TEATimTable").innerHTML = "No Data";
    }
    document.getElementById("month12-TEAtime").innerHTML = (((TEATime12).toFixed(2)) + "%");
    if (TEATime12 > 0) {
        document.getElementById("m12TEATimTable").innerHTML = "T:" + TEAWorked12 + "\(" + TEATimeLate12 + "\):" + (((TEATime12).toFixed(2)) + "%");
    } else {
        document.getElementById("m12TEATimTable").innerHTML = "No Data";
    }
// Measure Consistency for Star Value TEA TIMELINESS
    var TEATimeIsConsistent = (TEATimeConsistency / TEATimeSum) * 100;
    if (TEATimeIsConsistent >= 95 && aveTEATime > 97) {
        document.getElementById("TEAStarScoreTime").innerHTML = "&#x2605 &#x2605 &#x2605"; //removed 4th star from consistency rule, deprecated by DCO procedural rules.
            // document.getElementById("prodSARStarDescriptor").innerHTML = "Highly Effective"
            document.getElementById("TEAStarDescriptorTime").innerHTML = "Solid Performer"
        document.getElementById("TEATimeFinal").innerHTML = "Consistently Met Goal"
    } else if (TEATimeIsConsistent < 95 && aveTEATime >= 97) {
        document.getElementById("TEAStarScoreTime").innerHTML = "&#x2605 &#x2605 &#x2605";
        document.getElementById("TEAStarDescriptorTime").innerHTML = "Solid Performer";
        document.getElementById("TEATimeFinal").innerHTML = "Inconsistently Met Goal";
    } else if (aveTEATime > 30 && aveTEATime < 97) {
        document.getElementById("TEAStarScoreTime").innerHTML = "&#x2605 &#x2605";
        document.getElementById("TEAStarDescriptorTime").innerHTML = "Needs Improvement";
        document.getElementById("TEATimeFinal").innerHTML = "Missed Goal";
    } else if (aveTEATime > 0 && aveTEATime <= 30) {
        document.getElementById("TEAStarScoreTime").innerHTML = "&#x2605";
        document.getElementById("TEAStarDescriptorTime").innerHTML = "Unsatisfactory";
        document.getElementById("TEATimeFinal").innerHTML = "Missed Goal";
    }
// Add Up Total Reviews and Total Errors FOR TEA TIMELINESS

    var TotalTEATime = Number(TEAWorked1) + Number(TEAWorked2) + Number(TEAWorked3) + Number(TEAWorked4) + Number(TEAWorked5) + Number(TEAWorked6) + Number(TEAWorked7) + Number(TEAWorked8) + Number(TEAWorked9) + Number(TEAWorked10) + Number(TEAWorked11) + Number(TEAWorked12);
    document.getElementById("TEATimWorked").innerHTML = (TotalTEATime + " Cases Worked");
    var TotalTEALate = Number(TEATimeLate1) + Number(TEATimeLate2) + Number(TEATimeLate3) + Number(TEATimeLate4) + Number(TEATimeLate5) + Number(TEATimeLate6) + Number(TEATimeLate7) + Number(TEATimeLate8) + Number(TEATimeLate9) + Number(TEATimeLate10) + Number(TEATimeLate11) + Number(TEATimeLate12) + Number(TEATimeReassigned1) + Number(TEATimeReassigned2) + Number(TEATimeReassigned3) + Number(TEATimeReassigned4) + Number(TEATimeReassigned5) + Number(TEATimeReassigned6) + Number(TEATimeReassigned7) + Number(TEATimeReassigned8) + Number(TEATimeReassigned9) + Number(TEATimeReassigned10) + Number(TEATimeReassigned11) + Number(TEATimeReassigned12);
    document.getElementById("TEATimLate").innerHTML = (TotalTEALate + " Late Cases");

//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------
//PRODUCTION SECTION
//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------
    console.log("--- PROD CALC BEGINS ---");
// GENERAL
//Set Initial App Value States
    let m1Apps = 0;
    let m2Apps = 0;
    let m3Apps = 0;
    let m4Apps = 0;
    let m5Apps = 0;
    let m6Apps = 0;
    let m7Apps = 0;
    let m8Apps = 0;
    let m9Apps = 0;
    let m10Apps = 0;
    let m11Apps = 0;
    let m12Apps = 0;
    let m1AppsProd = 0;
    let m2AppsProd = 0;
    let m3AppsProd = 0;
    let m4AppsProd = 0;
    let m5AppsProd = 0;
    let m6AppsProd = 0;
    let m7AppsProd = 0;
    let m8AppsProd = 0;
    let m9AppsProd = 0;
    let m10AppsProd = 0;
    let m11AppsProd = 0;
    let m12AppsProd = 0;
    let appsProdRating = 0;
//Load the Mule 1
    m1Apps = ((Number(document.getElementById("m1Time").value)) + (Number(document.getElementById("m1TimeEXP").value)) + (Number(document.getElementById("m1MCTime").value)) + (Number(document.getElementById("m1TEATime").value))) - ((Number(document.getElementById("m1reassigned").value)) + (Number(document.getElementById("m1EXPReassigned").value)) + (Number(document.getElementById("m1MCReassigned").value)) + (Number(document.getElementById("m1TEAReassigned").value)));
//Load the Mule 2
    m2Apps = ((Number(document.getElementById("m2Time").value)) + (Number(document.getElementById("m2TimeEXP").value)) + (Number(document.getElementById("m2MCTime").value)) + (Number(document.getElementById("m2TEATime").value))) - ((Number(document.getElementById("m2reassigned").value)) + (Number(document.getElementById("m2EXPReassigned").value)) + (Number(document.getElementById("m2MCReassigned").value)) + (Number(document.getElementById("m2TEAReassigned").value)));
//Load the Mule 3
    m3Apps = ((Number(document.getElementById("m3Time").value)) + (Number(document.getElementById("m3TimeEXP").value)) + (Number(document.getElementById("m3MCTime").value)) + (Number(document.getElementById("m3TEATime").value))) - ((Number(document.getElementById("m3reassigned").value)) + (Number(document.getElementById("m3EXPReassigned").value)) + (Number(document.getElementById("m3MCReassigned").value)) + (Number(document.getElementById("m3TEAReassigned").value)));
//Load the Mule 4
    m4Apps = ((Number(document.getElementById("m4Time").value)) + (Number(document.getElementById("m4TimeEXP").value)) + (Number(document.getElementById("m4MCTime").value)) + (Number(document.getElementById("m4TEATime").value))) - ((Number(document.getElementById("m4reassigned").value)) + (Number(document.getElementById("m4EXPReassigned").value)) + (Number(document.getElementById("m4MCReassigned").value)) + (Number(document.getElementById("m4TEAReassigned").value)));
//Load the Mule 5
    m5Apps = ((Number(document.getElementById("m5Time").value)) + (Number(document.getElementById("m5TimeEXP").value)) + (Number(document.getElementById("m5MCTime").value)) + (Number(document.getElementById("m5TEATime").value))) - ((Number(document.getElementById("m5reassigned").value)) + (Number(document.getElementById("m5EXPReassigned").value)) + (Number(document.getElementById("m5MCReassigned").value)) + (Number(document.getElementById("m5TEAReassigned").value)));
//Load the Mule 6
    m6Apps = ((Number(document.getElementById("m6Time").value)) + (Number(document.getElementById("m6TimeEXP").value)) + (Number(document.getElementById("m6MCTime").value)) + (Number(document.getElementById("m6TEATime").value))) - ((Number(document.getElementById("m6reassigned").value)) + (Number(document.getElementById("m6EXPReassigned").value)) + (Number(document.getElementById("m6MCReassigned").value)) + (Number(document.getElementById("m6TEAReassigned").value)));
//Load the Mule 7
    m7Apps = ((Number(document.getElementById("m7Time").value)) + (Number(document.getElementById("m7TimeEXP").value)) + (Number(document.getElementById("m7MCTime").value)) + (Number(document.getElementById("m7TEATime").value))) - ((Number(document.getElementById("m7reassigned").value)) + (Number(document.getElementById("m7EXPReassigned").value)) + (Number(document.getElementById("m7MCReassigned").value)) + (Number(document.getElementById("m7TEAReassigned").value)));
//Load the Mule 8
    m8Apps = ((Number(document.getElementById("m8Time").value)) + (Number(document.getElementById("m8TimeEXP").value)) + (Number(document.getElementById("m8MCTime").value)) + (Number(document.getElementById("m8TEATime").value))) - ((Number(document.getElementById("m8reassigned").value)) + (Number(document.getElementById("m8EXPReassigned").value)) + (Number(document.getElementById("m8MCReassigned").value)) + (Number(document.getElementById("m8TEAReassigned").value)));
//Load the Mule 9
    m9Apps = ((Number(document.getElementById("m9Time").value)) + (Number(document.getElementById("m9TimeEXP").value)) + (Number(document.getElementById("m9MCTime").value)) + (Number(document.getElementById("m9TEATime").value))) - ((Number(document.getElementById("m9reassigned").value)) + (Number(document.getElementById("m9EXPReassigned").value)) + (Number(document.getElementById("m9MCReassigned").value)) + (Number(document.getElementById("m9TEAReassigned").value)));
//Load the Mule 10
    m10Apps = ((Number(document.getElementById("m10Time").value)) + (Number(document.getElementById("m10TimeEXP").value)) + (Number(document.getElementById("m10MCTime").value)) + (Number(document.getElementById("m10TEATime").value))) - ((Number(document.getElementById("m10reassigned").value)) + (Number(document.getElementById("m10EXPReassigned").value)) + (Number(document.getElementById("m10MCReassigned").value)) + (Number(document.getElementById("m10TEAReassigned").value)));
//Load the Mule 11
    m11Apps = ((Number(document.getElementById("m11Time").value)) + (Number(document.getElementById("m11TimeEXP").value)) + (Number(document.getElementById("m11MCTime").value)) + (Number(document.getElementById("m11TEATime").value))) - ((Number(document.getElementById("m11reassigned").value)) + (Number(document.getElementById("m11EXPReassigned").value)) + (Number(document.getElementById("m11MCReassigned").value)) + (Number(document.getElementById("m11TEAReassigned").value)));
//Load the Mule 12
    m12Apps = ((Number(document.getElementById("m12Time").value)) + (Number(document.getElementById("m12TimeEXP").value)) + (Number(document.getElementById("m12MCTime").value)) + (Number(document.getElementById("m12TEATime").value))) - ((Number(document.getElementById("m12reassigned").value)) + (Number(document.getElementById("m12EXPReassigned").value)) + (Number(document.getElementById("m12MCReassigned").value)) + (Number(document.getElementById("m12TEAReassigned").value)));
    console.log(m1Apps);
    console.log(m2Apps);
    console.log(m3Apps);
    console.log(m4Apps);
    console.log(m5Apps);
    console.log(m6Apps);
    console.log(m7Apps);
    console.log(m8Apps);
    console.log(m9Apps);
    console.log(m10Apps);
    console.log(m11Apps);
    console.log(m12Apps);
    console.log("---- APP PROD LOADED -----");


//Set Initial SAR Value States
    let m1SRCMP = 0;
    let m2SRCMP = 0;
    let m3SRCMP = 0;
    let m4SRCMP = 0;
    let m5SRCMP = 0;
    let m6SRCMP = 0;
    let m7SRCMP = 0;
    let m8SRCMP = 0;
    let m9SRCMP = 0;
    let m10SRCMP = 0;
    let m11SRCMP = 0;
    let m12SRCMP = 0;
    let m1SRCMPProd = 0;
    let m2SRCMPProd = 0;
    let m3SRCMPProd = 0;
    let m4SRCMPProd = 0;
    let m5SRCMPProd = 0;
    let m6SRCMPProd = 0;
    let m7SRCMPProd = 0;
    let m8SRCMPProd = 0;
    let m9SRCMPProd = 0;
    let m10SRCMPProd = 0;
    let m11SRCMPProd = 0;
    let m12SRCMPProd = 0;
    let m1SRCMPRating = 0;
//Load the Mule 1
    console.log("--- LOAD SAR DATA ---");
    m1SRCMP = ((Number(document.getElementById("m1TimeSAR").value)) - (Number(document.getElementById("m1reassignedSAR").value)));
    m2SRCMP = ((Number(document.getElementById("m2TimeSAR").value)) - (Number(document.getElementById("m2reassignedSAR").value)));
    m3SRCMP = ((Number(document.getElementById("m3TimeSAR").value)) - (Number(document.getElementById("m3reassignedSAR").value)));
    m4SRCMP = ((Number(document.getElementById("m4TimeSAR").value)) - (Number(document.getElementById("m4reassignedSAR").value)));
    m5SRCMP = ((Number(document.getElementById("m5TimeSAR").value)) - (Number(document.getElementById("m5reassignedSAR").value)));
    m6SRCMP = ((Number(document.getElementById("m6TimeSAR").value)) - (Number(document.getElementById("m6reassignedSAR").value)));
    m7SRCMP = ((Number(document.getElementById("m7TimeSAR").value)) - (Number(document.getElementById("m7reassignedSAR").value)));
    m8SRCMP = ((Number(document.getElementById("m8TimeSAR").value)) - (Number(document.getElementById("m8reassignedSAR").value)));
    m9SRCMP = ((Number(document.getElementById("m9TimeSAR").value)) - (Number(document.getElementById("m9reassignedSAR").value)));
    m10SRCMP = ((Number(document.getElementById("m10TimeSAR").value)) - (Number(document.getElementById("m10reassignedSAR").value)));
    m11SRCMP = ((Number(document.getElementById("m11TimeSAR").value)) - (Number(document.getElementById("m11reassignedSAR").value)));
    m12SRCMP = ((Number(document.getElementById("m12TimeSAR").value)) - (Number(document.getElementById("m12reassignedSAR").value)));
    console.log(m1SRCMP);
    console.log(m2SRCMP);
    console.log(m3SRCMP);
    console.log(m4SRCMP);
    console.log(m5SRCMP);
    console.log(m6SRCMP);
    console.log(m7SRCMP);
    console.log(m8SRCMP);
    console.log(m9SRCMP);
    console.log(m10SRCMP);
    console.log(m11SRCMP);
    console.log(m12SRCMP);
    console.log("--- SAR DATA LOADED ---");
//Set Initial MAGI Value States
    let m1MAGI = 0;
    let m2MAGI = 0;
    let m3MAGI = 0;
    let m4MAGI = 0;
    let m5MAGI = 0;
    let m6MAGI = 0;
    let m7MAGI = 0;
    let m8MAGI = 0;
    let m9MAGI = 0;
    let m10MAGI = 0;
    let m11MAGI = 0;
    let m12MAGI = 0;
    let m1MAGIProd = 0;
    let m2MAGIProd = 0;
    let m3MAGIProd = 0;
    let m4MAGIProd = 0;
    let m5MAGIProd = 0;
    let m6MAGIProd = 0;
    let m7MAGIProd = 0;
    let m8MAGIProd = 0;
    let m9MAGIProd = 0;
    let m10MAGIProd = 0;
    let m11MAGIProd = 0;
    let m12MAGIProd = 0;
    let m1MAGIRating = 0;
//Load the Mule 1
    console.log("--- LOAD MAGI MULE ---");
    m1MAGI = ((Number(document.getElementById("m1MAGITime").value)) - (Number(document.getElementById("m1MAGIReassigned").value)));
    m2MAGI = ((Number(document.getElementById("m2MAGITime").value)) - (Number(document.getElementById("m2MAGIReassigned").value)));
    m3MAGI = ((Number(document.getElementById("m3MAGITime").value)) - (Number(document.getElementById("m3MAGIReassigned").value)));
    m4MAGI = ((Number(document.getElementById("m4MAGITime").value)) - (Number(document.getElementById("m4MAGIReassigned").value)));
    m5MAGI = ((Number(document.getElementById("m5MAGITime").value)) - (Number(document.getElementById("m5MAGIReassigned").value)));
    m6MAGI = ((Number(document.getElementById("m6MAGITime").value)) - (Number(document.getElementById("m6MAGIReassigned").value)));
    m7MAGI = ((Number(document.getElementById("m7MAGITime").value)) - (Number(document.getElementById("m7MAGIReassigned").value)));
    m8MAGI = ((Number(document.getElementById("m8MAGITime").value)) - (Number(document.getElementById("m8MAGIReassigned").value)));
    m9MAGI = ((Number(document.getElementById("m9MAGITime").value)) - (Number(document.getElementById("m9MAGIReassigned").value)));
    m10MAGI = ((Number(document.getElementById("m10MAGITime").value)) - (Number(document.getElementById("m10MAGIReassigned").value)));
    m11MAGI = ((Number(document.getElementById("m11MAGITime").value)) - (Number(document.getElementById("m11MAGIReassigned").value)));
    m12MAGI = ((Number(document.getElementById("m12MAGITime").value)) - (Number(document.getElementById("m12MAGIReassigned").value)));
    console.log("--- LOAD COMPLETE ---");
// Compute Unit Amount (Number of work slots for which tasks can be compelted)
    console.log("--- PREP DAY CALCS ---");
    let m1Days = 0;
    let m1AdjDays = 0;
    let m1ActualDays = 0;
    let m2Days = 0;
    let m2AdjDays = 0;
    let m2ActualDays = 0;
    let m3Days = 0;
    let m3AdjDays = 0;
    let m3ActualDays = 0;
    let m4Days = 0;
    let m4AdjDays = 0;
    let m4ActualDays = 0;
    let m5Days = 0;
    let m5AdjDays = 0;
    let m5ActualDays = 0;
    let m6Days = 0;
    let m6AdjDays = 0;
    let m6ActualDays = 0;
    let m7Days = 0;
    let m7AdjDays = 0;
    let m7ActualDays = 0;
    let m8Days = 0;
    let m8AdjDays = 0;
    let m8ActualDays = 0;
    let m9Days = 0;
    let m9AdjDays = 0;
    let m9ActualDays = 0;
    let m10Days = 0;
    let m10AdjDays = 0;
    let m10ActualDays = 0;
    let m11Days = 0;
    let m11AdjDays = 0;
    let m11ActualDays = 0;
    let m12Days = 0;
    let m12AdjDays = 0;
    let m12ActualDays = 0;

    m1ActualDays = Number(document.getElementById("m1AvailableDays").value);
    console.log(m1ActualDays + " m1 actual days");
    m1AdjDays = m1ActualDays * 7;
    console.log(m1AdjDays + " adjusted day value");
    m1Days = m1AdjDays / 8;
    console.log(m1Days + " Final Day Value");

    m2ActualDays = Number(document.getElementById("m2AvailableDays").value);
    console.log(m2ActualDays + " m2 actual days");
    m2AdjDays = m2ActualDays * 7;
    console.log(m2AdjDays + " adjusted day value");
    m2Days = m2AdjDays / 8;
    console.log(m2Days + " Final Day Value");

    m3ActualDays = Number(document.getElementById("m3AvailableDays").value);
    console.log(m3ActualDays + " m3 actual days");
    m3AdjDays = m3ActualDays * 7;
    console.log(m3AdjDays + " adjusted day value");
    m3Days = m3AdjDays / 8;
    console.log(m3Days + " Final Day Value");

    m4ActualDays = Number(document.getElementById("m4AvailableDays").value);
    console.log(m4ActualDays + " m4 actual days");
    m4AdjDays = m4ActualDays * 7;
    console.log(m4AdjDays + " adjusted day value");
    m4Days = m4AdjDays / 8;
    console.log(m4Days + " Final Day Value");

    m5ActualDays = Number(document.getElementById("m5AvailableDays").value);
    console.log(m5ActualDays + " m5 actual days");
    m5AdjDays = m5ActualDays * 7;
    console.log(m5AdjDays + " adjusted day value");
    m5Days = m5AdjDays / 8;
    console.log(m5Days + " Final Day Value");

    m6ActualDays = Number(document.getElementById("m6AvailableDays").value);
    console.log(m6ActualDays + " m6 actual days");
    m6AdjDays = m6ActualDays * 7;
    console.log(m6AdjDays + " adjusted day value");
    m6Days = m6AdjDays / 8;
    console.log(m6Days + " Final Day Value");

    m7ActualDays = Number(document.getElementById("m7AvailableDays").value);
    console.log(m7ActualDays + " m7 actual days");
    m7AdjDays = m7ActualDays * 7;
    console.log(m7AdjDays + " adjusted day value");
    m7Days = m7AdjDays / 8;
    console.log(m7Days + " Final Day Value");

    m8ActualDays = Number(document.getElementById("m8AvailableDays").value);
    console.log(m8ActualDays + " m8 actual days");
    m8AdjDays = m8ActualDays * 7;
    console.log(m8AdjDays + " adjusted day value");
    m8Days = m8AdjDays / 8;
    console.log(m8Days + " Final Day Value");

    m9ActualDays = Number(document.getElementById("m9AvailableDays").value);
    console.log(m9ActualDays + " m9 actual days");
    m9AdjDays = m9ActualDays * 7;
    console.log(m9AdjDays + " adjusted day value");
    m9Days = m9AdjDays / 8;
    console.log(m9Days + " Final Day Value");

    m10ActualDays = Number(document.getElementById("m10AvailableDays").value);
    console.log(m10ActualDays + " m10 actual days");
    m10AdjDays = m10ActualDays * 7;
    console.log(m10AdjDays + " adjusted day value");
    m10Days = m10AdjDays / 8;
    console.log(m10Days + " Final Day Value");

    m11ActualDays = Number(document.getElementById("m11AvailableDays").value);
    console.log(m11ActualDays + " m11 actual days");
    m11AdjDays = m11ActualDays * 7;
    console.log(m11AdjDays + " adjusted day value");
    m11Days = m11AdjDays / 8;
    console.log(m11Days + " Final Day Value");

    m12ActualDays = Number(document.getElementById("m12AvailableDays").value);
    console.log(m12ActualDays + " m12 actual days");
    m12AdjDays = m12ActualDays * 7;
    console.log(m12AdjDays + " adjusted day value");
    m12Days = m12AdjDays / 8;
    console.log(m12Days + " Final Day Value");

    console.log("--- DAY CALCS COMPLETED ---");
//Compute Adjustment for Work Assignment (area worker does more work in)
// First run will average ALL months to get the true %age of assignment across the rating cycle

    let appsScore = undefined;
    let sarScore = undefined;
    let magiScore = undefined;
    let appsTotal = 0;
    let sarTotal = 0;
    let magiTotal = 0;
    let appTotalValue = undefined;
    let sarTotalValue = undefined;
    let magiTotalValue = undefined;
    let totalProd = 0;

    appsTotal = m1Apps + m2Apps + m3Apps + m4Apps + m5Apps + m6Apps + m7Apps + m8Apps + m9Apps + m10Apps + m11Apps + m12Apps; //+ m2apps etc.....
    if (appsTotal > 0) {
        appTotalValue = 1;
    } else {
        appTotalValue = 0;
    }
    sarTotal = m1SRCMP + m2SRCMP + m3SRCMP + m4SRCMP + m5SRCMP + m6SRCMP + m7SRCMP + m8SRCMP + m9SRCMP + m10SRCMP + m11SRCMP + m12SRCMP; //+m2SRCMP etc.....
    if (sarTotal > 0) {
        sarTotalValue = 1;
        console.log(sarTotalValue + " sar total value");
    } else {
        sarTotalValue = 0;
    }
    magiTotal = m1MAGI + m2MAGI + m3MAGI + m4MAGI + m5MAGI + m6MAGI + m7MAGI + m8MAGI + m9MAGI + m10MAGI + m11MAGI + m12MAGI; //+m2MAGI etc.....
    if (magiTotal > 0) {
        magiTotalValue = 1;
    } else {
        magiTotalValue = 0;
    }

    totalProd = (appsTotal/0.75) + (sarTotal/1.25) + (magiTotal/2);
    appsScore = (appsTotal/0.75) / totalProd;
    sarScore = (sarTotal/1.25) / totalProd;
    magiScore = (magiTotal/2) / totalProd;


    console.log(appsScore + " total app score");
    console.log(sarScore + " total sar score");
    console.log(magiScore + " total magi score");

//------------------
//APPLICATIONS
//------------------


//output monthly production values
    console.log("Outputting App Daily Counts by Month");
    //apps
    //apps
    m1AppsProd = m1Apps / m1Days;
    if (m1AppsProd > 0) {
        document.getElementById("month1-apps").innerHTML = (((m1AppsProd).toFixed(2)) + "/day");
        document.getElementById("m1PRODapps").innerHTML = "Apps: " + (((m1AppsProd).toFixed(2)) + "/day");
    } else {
        document.getElementById("month1-apps").innerHTML = ("---");
        document.getElementById("m1PRODapps").innerHTML = "No Data";
    }
    m2AppsProd = m2Apps / m2Days;
    if (m2AppsProd > 0) {
        document.getElementById("month2-apps").innerHTML = (((m2AppsProd).toFixed(2)) + "/day");
        document.getElementById("m2PRODapps").innerHTML = "Apps: " + (((m2AppsProd).toFixed(2)) + "/day");
    } else {
        document.getElementById("month2-apps").innerHTML = ("---");
        document.getElementById("m2PRODapps").innerHTML = "No Data";
    }
    m3AppsProd = m3Apps / m3Days;
    if (m3AppsProd > 0) {
        document.getElementById("month3-apps").innerHTML = (((m3AppsProd).toFixed(2)) + "/day");
        document.getElementById("m3PRODapps").innerHTML = "Apps: " + (((m3AppsProd).toFixed(2)) + "/day");
    } else {
        document.getElementById("month3-apps").innerHTML = ("---");
        document.getElementById("m3PRODapps").innerHTML = "No Data";
    }
    m4AppsProd = m4Apps / m4Days;
    if (m4AppsProd > 0) {
        document.getElementById("month4-apps").innerHTML = (((m4AppsProd).toFixed(2)) + "/day");
        document.getElementById("m4PRODapps").innerHTML = "Apps: " + (((m4AppsProd).toFixed(2)) + "/day");
    } else {
        document.getElementById("month4-apps").innerHTML = ("---");
        document.getElementById("m4PRODapps").innerHTML = "No Data";
    }
    m5AppsProd = m5Apps / m5Days;
    if (m5AppsProd > 0) {
        document.getElementById("month5-apps").innerHTML = (((m5AppsProd).toFixed(2)) + "/day");
        document.getElementById("m5PRODapps").innerHTML = "Apps: " + (((m5AppsProd).toFixed(2)) + "/day");
    } else {
        document.getElementById("month5-apps").innerHTML = ("---");
        document.getElementById("m5PRODapps").innerHTML = "No Data";
    }
    m6AppsProd = m6Apps / m6Days;
    if (m6AppsProd > 0) {
        document.getElementById("month6-apps").innerHTML = (((m6AppsProd).toFixed(2)) + "/day");
        document.getElementById("m6PRODapps").innerHTML = "Apps: " + (((m6AppsProd).toFixed(2)) + "/day");
    } else {
        document.getElementById("month6-apps").innerHTML = ("---");
        document.getElementById("m6PRODapps").innerHTML = "No Data";
    }
    m7AppsProd = m7Apps / m7Days;
    if (m7AppsProd > 0) {
        document.getElementById("month7-apps").innerHTML = (((m7AppsProd).toFixed(2)) + "/day");
        document.getElementById("m7PRODapps").innerHTML = "Apps: " + (((m7AppsProd).toFixed(2)) + "/day");
    } else {
        document.getElementById("month7-apps").innerHTML = ("---");
        document.getElementById("m7PRODapps").innerHTML = "No Data";
    }
    m8AppsProd = m8Apps / m8Days;
    if (m8AppsProd > 0) {
        document.getElementById("month8-apps").innerHTML = (((m8AppsProd).toFixed(2)) + "/day");
        document.getElementById("m8PRODapps").innerHTML = "Apps: " + (((m8AppsProd).toFixed(2)) + "/day");
    } else {
        document.getElementById("month8-apps").innerHTML = ("---");
        document.getElementById("m8PRODapps").innerHTML = "No Data";
    }
    m9AppsProd = m9Apps / m9Days;
    if (m9AppsProd > 0) {
        document.getElementById("month9-apps").innerHTML = (((m9AppsProd).toFixed(2)) + "/day");
        document.getElementById("m9PRODapps").innerHTML = "Apps: " + (((m9AppsProd).toFixed(2)) + "/day");
    } else {
        document.getElementById("month9-apps").innerHTML = ("---");
        document.getElementById("m9PRODapps").innerHTML = "No Data";
    }
    m10AppsProd = m10Apps / m10Days;
    if (m10AppsProd > 0) {
        document.getElementById("month10-apps").innerHTML = (((m10AppsProd).toFixed(2)) + "/day");
        document.getElementById("m10PRODapps").innerHTML = "Apps: " + (((m10AppsProd).toFixed(2)) + "/day");
    } else {
        document.getElementById("month10-apps").innerHTML = ("---");
        document.getElementById("m10PRODapps").innerHTML = "No Data";
    }
    m11AppsProd = m11Apps / m11Days;
    if (m11AppsProd > 0) {
        document.getElementById("month11-apps").innerHTML = (((m11AppsProd).toFixed(2)) + "/day");
        document.getElementById("m11PRODapps").innerHTML = "Apps: " + (((m11AppsProd).toFixed(2)) + "/day");
    } else {
        document.getElementById("month11-apps").innerHTML = ("---");
        document.getElementById("m11PRODapps").innerHTML = "No Data";
    }
    m12AppsProd = m12Apps / m12Days;
    if (m12AppsProd > 0) {
        document.getElementById("month12-apps").innerHTML = (((m12AppsProd).toFixed(2)) + "/day");
        document.getElementById("m12PRODapps").innerHTML = "Apps: " + (((m12AppsProd).toFixed(2)) + "/day");
    } else {
        document.getElementById("month12-apps").innerHTML = ("---");
        document.getElementById("m12PRODapps").innerHTML = "No Data";
    }


    //sars
    console.log("Outputting SAR Daily Counts by Month");
    m1SRCMPProd = m1SRCMP / m1Days;
    if (m1SRCMPProd > 0) {
        document.getElementById("month1-SRCMP").innerHTML = (((m1SRCMPProd).toFixed(2)) + "/day");
        document.getElementById("m1SRCMPapps").innerHTML = "SCM: " + (((m1SRCMPProd).toFixed(2)) + "/day");
    } else {
        document.getElementById("month1-SRCMP").innerHTML = ("---");
        document.getElementById("m1SRCMPapps").innerHTML = "No Data";
    }
    m2SRCMPProd = m2SRCMP / m2Days;
    if (m2SRCMPProd > 0) {
        document.getElementById("month2-SRCMP").innerHTML = (((m2SRCMPProd).toFixed(2)) + "/day");
        document.getElementById("m2SRCMPapps").innerHTML = "SCM: " + (((m2SRCMPProd).toFixed(2)) + "/day");
    } else {
        document.getElementById("month2-SRCMP").innerHTML = ("---");
        document.getElementById("m2SRCMPapps").innerHTML = "No Data";
    }
    m3SRCMPProd = m3SRCMP / m3Days;
    if (m3SRCMPProd > 0) {
        document.getElementById("month3-SRCMP").innerHTML = (((m3SRCMPProd).toFixed(2)) + "/day");
        document.getElementById("m3SRCMPapps").innerHTML = "SCM: " + (((m3SRCMPProd).toFixed(2)) + "/day");
    } else {
        document.getElementById("month3-SRCMP").innerHTML = ("---");
        document.getElementById("m3SRCMPapps").innerHTML = "No Data";
    }
    m4SRCMPProd = m4SRCMP / m4Days;
    if (m4SRCMPProd > 0) {
        document.getElementById("month4-SRCMP").innerHTML = (((m4SRCMPProd).toFixed(2)) + "/day");
        document.getElementById("m4SRCMPapps").innerHTML = "SCM: " + (((m4SRCMPProd).toFixed(2)) + "/day");
    } else {
        document.getElementById("month4-SRCMP").innerHTML = ("---");
        document.getElementById("m4SRCMPapps").innerHTML = "No Data";
    }
    m5SRCMPProd = m5SRCMP / m5Days;
    if (m5SRCMPProd > 0) {
        document.getElementById("month5-SRCMP").innerHTML = (((m5SRCMPProd).toFixed(2)) + "/day");
        document.getElementById("m5SRCMPapps").innerHTML = "SCM: " + (((m5SRCMPProd).toFixed(2)) + "/day");
    } else {
        document.getElementById("month5-SRCMP").innerHTML = ("---");
        document.getElementById("m5SRCMPapps").innerHTML = "No Data";
    }
    m6SRCMPProd = m6SRCMP / m6Days;
    if (m6SRCMPProd > 0) {
        document.getElementById("month6-SRCMP").innerHTML = (((m6SRCMPProd).toFixed(2)) + "/day");
        document.getElementById("m6SRCMPapps").innerHTML = "SCM: " + (((m6SRCMPProd).toFixed(2)) + "/day");
    } else {
        document.getElementById("month6-SRCMP").innerHTML = ("---");
        document.getElementById("m6SRCMPapps").innerHTML = "No Data";
    }
    m7SRCMPProd = m7SRCMP / m7Days;
    if (m7SRCMPProd > 0) {
        document.getElementById("month7-SRCMP").innerHTML = (((m7SRCMPProd).toFixed(2)) + "/day");
        document.getElementById("m7SRCMPapps").innerHTML = "SCM: " + (((m7SRCMPProd).toFixed(2)) + "/day");
    } else {
        document.getElementById("month7-SRCMP").innerHTML = ("---");
        document.getElementById("m7SRCMPapps").innerHTML = "No Data";
    }
    m8SRCMPProd = m8SRCMP / m8Days;
    if (m8SRCMPProd > 0) {
        document.getElementById("month8-SRCMP").innerHTML = (((m8SRCMPProd).toFixed(2)) + "/day");
        document.getElementById("m8SRCMPapps").innerHTML = "SCM: " + (((m8SRCMPProd).toFixed(2)) + "/day");
    } else {
        document.getElementById("month8-SRCMP").innerHTML = ("---");
        document.getElementById("m8SRCMPapps").innerHTML = "No Data";
    }
    m9SRCMPProd = m9SRCMP / m9Days;
    if (m9SRCMPProd > 0) {
        document.getElementById("month9-SRCMP").innerHTML = (((m9SRCMPProd).toFixed(2)) + "/day");
        document.getElementById("m9SRCMPapps").innerHTML = "SCM: " + (((m9SRCMPProd).toFixed(2)) + "/day");
    } else {
        document.getElementById("month9-SRCMP").innerHTML = ("---");
        document.getElementById("m9SRCMPapps").innerHTML = "No Data";
    }
    m10SRCMPProd = m10SRCMP / m10Days;
    if (m10SRCMPProd > 0) {
        document.getElementById("month10-SRCMP").innerHTML = (((m10SRCMPProd).toFixed(2)) + "/day");
        document.getElementById("m10SRCMPapps").innerHTML = "SCM: " + (((m10SRCMPProd).toFixed(2)) + "/day");
    } else {
        document.getElementById("month10-SRCMP").innerHTML = ("---");
        document.getElementById("m10SRCMPapps").innerHTML = "No Data";
    }
    m11SRCMPProd = m11SRCMP / m11Days;
    if (m11SRCMPProd > 0) {
        document.getElementById("month11-SRCMP").innerHTML = (((m11SRCMPProd).toFixed(2)) + "/day");
        document.getElementById("m11SRCMPapps").innerHTML = "SCM: " + (((m11SRCMPProd).toFixed(2)) + "/day");
    } else {
        document.getElementById("month11-SRCMP").innerHTML = ("---");
        document.getElementById("m11SRCMPapps").innerHTML = "No Data";
    }
    m12SRCMPProd = m12SRCMP / m12Days;
    if (m12SRCMPProd > 0) {
        document.getElementById("month12-SRCMP").innerHTML = (((m12SRCMPProd).toFixed(2)) + "/day");
        document.getElementById("m12SRCMPapps").innerHTML = "SCM: " + (((m12SRCMPProd).toFixed(2)) + "/day");
    } else {
        document.getElementById("month12-SRCMP").innerHTML = ("---");
        document.getElementById("m12SRCMPapps").innerHTML = "No Data";
    }
    //magi
    m1MAGIProd = m1MAGI / m1Days;
    if (m1MAGIProd > 0) {
        document.getElementById("month1-MAGI").innerHTML = (((m1MAGIProd).toFixed(2)) + "/day");
        document.getElementById("m1MAGIapps").innerHTML = "MG: " + (((m1MAGIProd).toFixed(2)) + "/day");
    } else {
        document.getElementById("month1-MAGI").innerHTML = ("---");
        document.getElementById("m1MAGIapps").innerHTML = "No Data";
    }
    m2MAGIProd = m2MAGI / m2Days;
    if (m2MAGIProd > 0) {
        document.getElementById("month2-MAGI").innerHTML = (((m2MAGIProd).toFixed(2)) + "/day");
        document.getElementById("m2MAGIapps").innerHTML = "MG: " + (((m2MAGIProd).toFixed(2)) + "/day");
    } else {
        document.getElementById("month2-MAGI").innerHTML = ("---");
        document.getElementById("m2MAGIapps").innerHTML = "No Data";
    }
    m3MAGIProd = m3MAGI / m3Days;
    if (m3MAGIProd > 0) {
        document.getElementById("month3-MAGI").innerHTML = (((m3MAGIProd).toFixed(2)) + "/day");
        document.getElementById("m3MAGIapps").innerHTML = "MG: " + (((m3MAGIProd).toFixed(2)) + "/day");
    } else {
        document.getElementById("month3-MAGI").innerHTML = ("---");
        document.getElementById("m3MAGIapps").innerHTML = "No Data";
    }
    m4MAGIProd = m4MAGI / m4Days;
    if (m4MAGIProd > 0) {
        document.getElementById("month4-MAGI").innerHTML = (((m4MAGIProd).toFixed(2)) + "/day");
        document.getElementById("m4MAGIapps").innerHTML = "MG: " + (((m4MAGIProd).toFixed(2)) + "/day");
    } else {
        document.getElementById("month4-MAGI").innerHTML = ("---");
        document.getElementById("m4MAGIapps").innerHTML = "No Data";
    }
    m5MAGIProd = m5MAGI / m5Days;
    if (m5MAGIProd > 0) {
        document.getElementById("month5-MAGI").innerHTML = (((m5MAGIProd).toFixed(2)) + "/day");
        document.getElementById("m5MAGIapps").innerHTML = "MG: " + (((m5MAGIProd).toFixed(2)) + "/day");
    } else {
        document.getElementById("month5-MAGI").innerHTML = ("---");
        document.getElementById("m5MAGIapps").innerHTML = "No Data";
    }
    m6MAGIProd = m6MAGI / m6Days;
    if (m6MAGIProd > 0) {
        document.getElementById("month6-MAGI").innerHTML = (((m6MAGIProd).toFixed(2)) + "/day");
        document.getElementById("m6MAGIapps").innerHTML = "MG: " + (((m6MAGIProd).toFixed(2)) + "/day");
    } else {
        document.getElementById("month6-MAGI").innerHTML = ("---");
        document.getElementById("m6MAGIapps").innerHTML = "No Data";
    }
    m7MAGIProd = m7MAGI / m7Days;
    if (m7MAGIProd > 0) {
        document.getElementById("month7-MAGI").innerHTML = (((m7MAGIProd).toFixed(2)) + "/day");
        document.getElementById("m7MAGIapps").innerHTML = "MG: " + (((m7MAGIProd).toFixed(2)) + "/day");
    } else {
        document.getElementById("month7-MAGI").innerHTML = ("---");
        document.getElementById("m7MAGIapps").innerHTML = "No Data";
    }
    m8MAGIProd = m8MAGI / m8Days;
    if (m8MAGIProd > 0) {
        document.getElementById("month8-MAGI").innerHTML = (((m8MAGIProd).toFixed(2)) + "/day");
        document.getElementById("m8MAGIapps").innerHTML = "MG: " + (((m8MAGIProd).toFixed(2)) + "/day");
    } else {
        document.getElementById("month8-MAGI").innerHTML = ("---");
        document.getElementById("m8MAGIapps").innerHTML = "No Data";
    }
    m9MAGIProd = m9MAGI / m9Days;
    if (m9MAGIProd > 0) {
        document.getElementById("month9-MAGI").innerHTML = (((m9MAGIProd).toFixed(2)) + "/day");
        document.getElementById("m9MAGIapps").innerHTML = "MG: " + (((m9MAGIProd).toFixed(2)) + "/day");
    } else {
        document.getElementById("month9-MAGI").innerHTML = ("---");
        document.getElementById("m9MAGIapps").innerHTML = "No Data";
    }
    m10MAGIProd = m10MAGI / m10Days;
    if (m10MAGIProd > 0) {
        document.getElementById("month10-MAGI").innerHTML = (((m10MAGIProd).toFixed(2)) + "/day");
        document.getElementById("m10MAGIapps").innerHTML = "MG: " + (((m10MAGIProd).toFixed(2)) + "/day");
    } else {
        document.getElementById("month10-MAGI").innerHTML = ("---");
        document.getElementById("m10MAGIapps").innerHTML = "No Data";
    }
    m11MAGIProd = m11MAGI / m11Days;
    if (m11MAGIProd > 0) {
        document.getElementById("month11-MAGI").innerHTML = (((m11MAGIProd).toFixed(2)) + "/day");
        document.getElementById("m11MAGIapps").innerHTML = "MG: " + (((m11MAGIProd).toFixed(2)) + "/day");
    } else {
        document.getElementById("month11-MAGI").innerHTML = ("---");
        document.getElementById("m11MAGIapps").innerHTML = "No Data";
    }
    m12MAGIProd = m12MAGI / m12Days;
    if (m12MAGIProd > 0) {
        document.getElementById("month12-MAGI").innerHTML = (((m12MAGIProd).toFixed(2)) + "/day");
        document.getElementById("m12MAGIapps").innerHTML = "MG: " + (((m12MAGIProd).toFixed(2)) + "/day");
    } else {
        document.getElementById("month12-MAGI").innerHTML = ("---");
        document.getElementById("m12MAGIapps").innerHTML = "No Data";
    }

    console.log(m1Apps + " apps count, " + m1Days + " work days");
    console.log(m1AppsProd + "/day");
// math out the application production rating
    let appsDataHeld = 0;
    if (m1AppsProd > 0) {
        appsDataHeld++;
    } else {
        m1AppsProd = 0;
    }
    if (m2AppsProd > 0) {
        appsDataHeld++;
    } else {
        m2AppsProd = 0;
    }
    if (m3AppsProd > 0) {
        appsDataHeld++;
    } else {
        m3AppsProd = 0;
    }
    if (m4AppsProd > 0) {
        appsDataHeld++;
    } else {
        m4AppsProd = 0;
    }
    if (m5AppsProd > 0) {
        appsDataHeld++;
    } else {
        m5AppsProd = 0;
    }
    if (m6AppsProd > 0) {
        appsDataHeld++;
    } else {
        m6AppsProd = 0;
    }
    if (m7AppsProd > 0) {
        appsDataHeld++;
    } else {
        m7AppsProd = 0;
    }
    if (m8AppsProd > 0) {
        appsDataHeld++;
    } else {
        m8AppsProd = 0;
    }
    if (m9AppsProd > 0) {
        appsDataHeld++;
    } else {
        m9AppsProd = 0;
    }
    if (m10AppsProd > 0) {
        appsDataHeld++;
    } else {
        m10AppsProd = 0;
    }
    if (m11AppsProd > 0) {
        appsDataHeld++;
    } else {
        m11AppsProd = 0;
    }
    if (m12AppsProd > 0) {
        appsDataHeld++;
    } else {
        m12AppsProd = 0;
    }
    appsProdRating = Math.ceil((m1AppsProd + m2AppsProd + m3AppsProd + m4AppsProd + m5AppsProd + m6AppsProd + m7AppsProd + m8AppsProd + m9AppsProd + m10AppsProd + m11AppsProd + m12AppsProd) / appsDataHeld); // ;

    console.log("ceil");
    console.log(Math.ceil(appsProdRating));
    Math.ceil(appsProdRating);
// math out the SAR production rating
    let sarDataHeld = 0;
    if (m1SRCMPProd > 0) {
        sarDataHeld++;
    } else {
        m1SRCMPProd = 0;
    }
    if (m2SRCMPProd > 0) {
        sarDataHeld++;
    } else {
        m2SRCMPProd = 0;
    }
    if (m3SRCMPProd > 0) {
        sarDataHeld++;
    } else {
        m3SRCMPProd = 0;
    }
    if (m4SRCMPProd > 0) {
        sarDataHeld++;
    } else {
        m4SRCMPProd = 0;
    }
    if (m5SRCMPProd > 0) {
        sarDataHeld++;
    } else {
        m5SRCMPProd = 0;
    }
    if (m6SRCMPProd > 0) {
        sarDataHeld++;
    } else {
        m6SRCMPProd = 0;
    }
    if (m7SRCMPProd > 0) {
        sarDataHeld++;
    } else {
        m7SRCMPProd = 0;
    }
    if (m8SRCMPProd > 0) {
        sarDataHeld++;
    } else {
        m8SRCMPProd = 0;
    }
    if (m9SRCMPProd > 0) {
        sarDataHeld++;
    } else {
        m9SRCMPProd = 0;
    }
    if (m10SRCMPProd > 0) {
        sarDataHeld++;
    } else {
        m10SRCMPProd = 0;
    }
    if (m11SRCMPProd > 0) {
        sarDataHeld++;
    } else {
        m11SRCMPProd = 0;
    }
    if (m12SRCMPProd > 0) {
        sarDataHeld++;
    } else {
        m12SRCMPProd = 0;
    }
    m1SRCMPRating = Math.ceil((m1SRCMPProd + m2SRCMPProd + m3SRCMPProd + m4SRCMPProd + m5SRCMPProd + m6SRCMPProd + m7SRCMPProd + m8SRCMPProd + m9SRCMPProd + m10SRCMPProd + m11SRCMPProd + m12SRCMPProd) / sarDataHeld);
    console.log(m1SRCMPRating + " SAR RATING " + sarDataHeld + " SAR DATA HELD");

// math out the magi production rating
    let magiDataHeld = 0;
    if (m1MAGIProd > 0) {
        magiDataHeld++;
    } else {
        m1MAGIProd = 0;
    }
    if (m2MAGIProd > 0) {
        magiDataHeld++;
    } else {
        m2MAGIProd = 0;
    }
    if (m3MAGIProd > 0) {
        magiDataHeld++;
    } else {
        m3MAGIProd = 0;
    }
    if (m4MAGIProd > 0) {
        magiDataHeld++;
    } else {
        m4MAGIProd = 0;
    }
    if (m5MAGIProd > 0) {
        magiDataHeld++;
    } else {
        m5MAGIProd = 0;
    }
    if (m6MAGIProd > 0) {
        magiDataHeld++;
    } else {
        m6MAGIProd = 0;
    }
    if (m7MAGIProd > 0) {
        magiDataHeld++;
    } else {
        m7MAGIProd = 0;
    }
    if (m8MAGIProd > 0) {
        magiDataHeld++;
    } else {
        m8MAGIProd = 0;
    }
    if (m9MAGIProd > 0) {
        magiDataHeld++;
    } else {
        m9MAGIProd = 0;
    }
    if (m10MAGIProd > 0) {
        magiDataHeld++;
    } else {
        m10MAGIProd = 0;
    }
    if (m11MAGIProd > 0) {
        magiDataHeld++;
    } else {
        m11MAGIProd = 0;
    }
    if (m12MAGIProd > 0) {
        magiDataHeld++;
    } else {
        m12MAGIProd = 0;
    }
    m1MAGIRating = Math.ceil((m1MAGIProd + m2MAGIProd + m3MAGIProd + m4MAGIProd + m5MAGIProd + m6MAGIProd + m7MAGIProd + m8MAGIProd + m9MAGIProd + m10MAGIProd + m11MAGIProd + m12MAGIProd) / magiDataHeld);
    console.log(m1MAGIRating + " magi RATING " + magiDataHeld + " magi DATA HELD");

//------------------
//OUTPUT TO PGCS SUMMARY SECTION
//------------------
//measure APP PRODUCTION against the standard

// measure COMBINED app production and report score
    console.log(appsProdRating + " apps prod rating");
    console.log(6 * appsScore + " app score multplied valued");
    if (appTotalValue > 0) {
        if (appsProdRating > 0 && appsProdRating < (3.01 * appsScore)) {
            document.getElementById("prodAppStarScore").innerHTML = "&#x2605";
            document.getElementById("prodAppStarDescriptor").innerHTML = "Unsatisfactory"
        } else if (appsProdRating >= (3.01 * appsScore) && appsProdRating < (6 * appsScore)) {
            document.getElementById("prodAppStarScore").innerHTML = "&#x2605 &#x2605";
            document.getElementById("prodAppStarDescriptor").innerHTML = "Needs Improvement"
        } else if (appsProdRating >= (6 * appsScore) && appsProdRating < (10 * appsScore)) {
            document.getElementById("prodAppStarScore").innerHTML = "&#x2605 &#x2605 &#x2605";
            document.getElementById("prodAppStarDescriptor").innerHTML = "Solid Performer"
        } else if (appsProdRating >= (10 * appsScore)) {
            document.getElementById("prodAppStarScore").innerHTML = "&#x2605 &#x2605 &#x2605"; //removed 4th star from consistency rule, deprecated by DCO procedural rules.
            // document.getElementById("prodSARStarDescriptor").innerHTML = "Highly Effective"
            document.getElementById("prodSARStarDescriptor").innerHTML = "Solid Performer"
        } else {
            console.log("No Data")
        }
    } else {
        console.log("No Apps Production Reported")
    }
// MEASURE MONTHLY APP AGAINST PROD AND REPORT BACK
// MONTH 1
    if (appTotalValue > 0) {
        if (m1AppsProd > 0 && m1AppsProd >= (6 * appsScore)) {
            document.getElementById("m1AppProdMet").innerHTML = "Prod Met"
        } else if (m1AppsProd < (6 * appsScore) && m1AppsProd > 0) {
            document.getElementById("m1AppProdMet").innerHTML = "Prod NOT Met"
        } else {
            console.log("No Data")
        }
    } else {
        console.log("No Apps Production Reported")
    }
// MONTH 2
    if (appTotalValue > 0) {
        if (m2AppsProd > 0 && m2AppsProd >= (6 * appsScore)) {
            document.getElementById("m2AppProdMet").innerHTML = "Prod Met"
        } else if (m2AppsProd < (6 * appsScore) && m2AppsProd > 0) {
            document.getElementById("m2AppProdMet").innerHTML = "Prod NOT Met"
        } else {
            console.log("No Data")
        }
    } else {
        console.log("No Apps Production Reported")
    }
// MONTH 3
    if (appTotalValue > 0) {
        if (m3AppsProd > 0 && m3AppsProd >= (6 * appsScore)) {
            document.getElementById("m3AppProdMet").innerHTML = "Prod Met"
        } else if (m3AppsProd < (6 * appsScore) && m3AppsProd > 0) {
            document.getElementById("m3AppProdMet").innerHTML = "Prod NOT Met"
        } else {
            console.log("No Data")
        }
    } else {
        console.log("No Apps Production Reported")
    }
// MONTH 4
    if (appTotalValue > 0) {
        if (m4AppsProd > 0 && m4AppsProd >= (6 * appsScore)) {
            document.getElementById("m4AppProdMet").innerHTML = "Prod Met"
        } else if (m4AppsProd < (6 * appsScore) && m4AppsProd > 0) {
            document.getElementById("m4AppProdMet").innerHTML = "Prod NOT Met"
        } else {
            console.log("No Data")
        }
    } else {
        console.log("No Apps Production Reported")
    }
// MONTH 5
    if (appTotalValue > 0) {
        if (m5AppsProd > 0 && m5AppsProd >= (6 * appsScore)) {
            document.getElementById("m5AppProdMet").innerHTML = "Prod Met"
        } else if (m5AppsProd < (6 * appsScore) && m5AppsProd > 0) {
            document.getElementById("m5AppProdMet").innerHTML = "Prod NOT Met"
        } else {
            console.log("No Data")
        }
    } else {
        console.log("No Apps Production Reported")
    }
// MONTH 6
    if (appTotalValue > 0) {
        if (m6AppsProd > 0 && m6AppsProd >= (6 * appsScore)) {
            document.getElementById("m6AppProdMet").innerHTML = "Prod Met"
        } else if (m6AppsProd < (6 * appsScore) && m6AppsProd > 0) {
            document.getElementById("m6AppProdMet").innerHTML = "Prod NOT Met"
        } else {
            console.log("No Data")
        }
    } else {
        console.log("No Apps Production Reported")
    }
// MONTH 7
    if (appTotalValue > 0) {
        if (m7AppsProd > 0 && m7AppsProd >= (6 * appsScore)) {
            document.getElementById("m7AppProdMet").innerHTML = "Prod Met"
        } else if (m7AppsProd < (6 * appsScore) && m7AppsProd > 0) {
            document.getElementById("m7AppProdMet").innerHTML = "Prod NOT Met"
        } else {
            console.log("No Data")
        }
    } else {
        console.log("No Apps Production Reported")
    }
// MONTH 8
    if (appTotalValue > 0) {
        if (m8AppsProd > 0 && m8AppsProd >= (6 * appsScore)) {
            document.getElementById("m8AppProdMet").innerHTML = "Prod Met"
        } else if (m8AppsProd < (6 * appsScore) && m8AppsProd > 0) {
            document.getElementById("m8AppProdMet").innerHTML = "Prod NOT Met"
        } else {
            console.log("No Data")
        }
    } else {
        console.log("No Apps Production Reported")
    }
// MONTH 9
    if (appTotalValue > 0) {
        if (m9AppsProd > 0 && m9AppsProd >= (6 * appsScore)) {
            document.getElementById("m9AppProdMet").innerHTML = "Prod Met"
        } else if (m9AppsProd < (6 * appsScore) && m9AppsProd > 0) {
            document.getElementById("m9AppProdMet").innerHTML = "Prod NOT Met"
        } else {
            console.log("No Data")
        }
    } else {
        console.log("No Apps Production Reported")
    }
// MONTH 10
    if (appTotalValue > 0) {
        if (m10AppsProd > 0 && m10AppsProd >= (6 * appsScore)) {
            document.getElementById("m10AppProdMet").innerHTML = "Prod Met"
        } else if (m10AppsProd < (6 * appsScore) && m10AppsProd > 0) {
            document.getElementById("m10AppProdMet").innerHTML = "Prod NOT Met"
        } else {
            console.log("No Data")
        }
    } else {
        console.log("No Apps Production Reported")
    }
// MONTH 11
    if (appTotalValue > 0) {
        if (m11AppsProd > 0 && m11AppsProd >= (6 * appsScore)) {
            document.getElementById("m11AppProdMet").innerHTML = "Prod Met"
        } else if (m11AppsProd < (6 * appsScore) && m11AppsProd > 0) {
            document.getElementById("m11AppProdMet").innerHTML = "Prod NOT Met"
        } else {
            console.log("No Data")
        }
    } else {
        console.log("No Apps Production Reported")
    }
// MONTH 12
    if (appTotalValue > 0) {
        if (m12AppsProd > 0 && m12AppsProd >= (6 * appsScore)) {
            document.getElementById("m12AppProdMet").innerHTML = "Prod Met"
        } else if (m12AppsProd < (6 * appsScore) && m12AppsProd > 0) {
            document.getElementById("m12AppProdMet").innerHTML = "Prod NOT Met"
        } else {
            console.log("No Data")
        }
    } else {
        console.log("No Apps Production Reported")
    }
    console.log("--- Apps Prod Ratings Completed ---");
//------------------
//SARs MPs Changes
//------------------

    console.log(m1SRCMP + " SRCMP count, " + m1Days + " work days");
    console.log(m1SRCMPProd + "/day");
// math out the application production rating

//------------------
//OUTPUT TO PGCS SUMMARY SECTION
//------------------
//measure SAR PRODUCTION against the standard
    console.log(m1SRCMPRating + " sar prod rating");
    console.log(10 * sarScore + " sar score multplied valued");
    if (sarTotalValue > 0) {
        if (m1SRCMPRating > 0 && m1SRCMPRating < (7 * sarScore)) {
            document.getElementById("prodSARStarScore").innerHTML = "&#x2605";
            document.getElementById("prodSARStarDescriptor").innerHTML = "Unsatisfactory"
        } else if (m1SRCMPRating >= (7 * sarScore) && m1SRCMPRating < (10 * sarScore)) {
            document.getElementById("prodSARStarScore").innerHTML = "&#x2605 &#x2605";
            document.getElementById("prodSARStarDescriptor").innerHTML = "Needs Improvement"
        } else if (m1SRCMPRating >= (10 * sarScore) && m1SRCMPRating < (13 * sarScore)) {
            document.getElementById("prodSARStarScore").innerHTML = "&#x2605 &#x2605 &#x2605";
            document.getElementById("prodSARStarDescriptor").innerHTML = "Solid Performer"
        } else if (m1SRCMPRating >= (13 * sarScore)) {
            document.getElementById("prodSARStarScore").innerHTML = "&#x2605 &#x2605 &#x2605"; //removed 4th star from consistency rule, deprecated by DCO procedural rules.
            // document.getElementById("prodSARStarDescriptor").innerHTML = "Highly Effective"
            document.getElementById("prodSARStarDescriptor").innerHTML = "Solid Performer"
        } else {
            console.log("No Data")
        }
    } else {
        console.log("No SAR Data Reported")
    }

// MEASURE MONTHLY SAR AGAINST PROD AND REPORT BACK
// MONTH 1
    if (sarTotalValue > 0) {
        if (m1SRCMPProd > 0 && m1SRCMPProd >= (6 * sarScore)) {
            document.getElementById("m1SRCMPProdMet").innerHTML = "Prod Met"
        } else if (m1SRCMPProd < (6 * sarScore) && m1SRCMPProd > 0) {
            document.getElementById("m1SRCMPProdMet").innerHTML = "Prod NOT Met"
        } else {
            console.log("No Data SARM1")
        }
    } else {
        console.log("No SRCMP Production Reported")
    }
// MONTH 2
    if (sarTotalValue > 0) {
        if (m2SRCMPProd > 0 && m2SRCMPProd >= (6 * sarScore)) {
            document.getElementById("m2SRCMPProdMet").innerHTML = "Prod Met"
        } else if (m2SRCMPProd < (6 * sarScore) && m2SRCMPProd > 0) {
            document.getElementById("m2SRCMPProdMet").innerHTML = "Prod NOT Met"
        } else {
            console.log("No Data")
        }
    } else {
        console.log("No SRCMP Production Reported")
    }
// MONTH 3
    if (sarTotalValue > 0) {
        if (m3SRCMPProd > 0 && m3SRCMPProd >= (6 * sarScore)) {
            document.getElementById("m3SRCMPProdMet").innerHTML = "Prod Met"
        } else if (m3SRCMPProd < (6 * sarScore) && m3SRCMPProd > 0) {
            document.getElementById("m3SRCMPProdMet").innerHTML = "Prod NOT Met"
        } else {
            console.log("No Data")
        }
    } else {
        console.log("No SRCMP Production Reported")
    }
// MONTH 4
    if (sarTotalValue > 0) {
        if (m4SRCMPProd > 0 && m4SRCMPProd >= (6 * sarScore)) {
            document.getElementById("m4SRCMPProdMet").innerHTML = "Prod Met"
        } else if (m4SRCMPProd < (6 * sarScore) && m4SRCMPProd > 0) {
            document.getElementById("m4SRCMPProdMet").innerHTML = "Prod NOT Met"
        } else {
            console.log("No Data")
        }
    } else {
        console.log("No SRCMP Production Reported")
    }
// MONTH 5
    if (sarTotalValue > 0) {
        if (m5SRCMPProd > 0 && m5SRCMPProd >= (6 * sarScore)) {
            document.getElementById("m5SRCMPProdMet").innerHTML = "Prod Met"
        } else if (m5SRCMPProd < (6 * sarScore) && m5SRCMPProd > 0) {
            document.getElementById("m5SRCMPProdMet").innerHTML = "Prod NOT Met"
        } else {
            console.log("No Data")
        }
    } else {
        console.log("No SRCMP Production Reported")
    }
// MONTH 6
    if (sarTotalValue > 0) {
        if (m6SRCMPProd > 0 && m6SRCMPProd >= (6 * sarScore)) {
            document.getElementById("m6SRCMPProdMet").innerHTML = "Prod Met"
        } else if (m6SRCMPProd < (6 * sarScore) && m6SRCMPProd > 0) {
            document.getElementById("m6SRCMPProdMet").innerHTML = "Prod NOT Met"
        } else {
            console.log("No Data")
        }
    } else {
        console.log("No SRCMP Production Reported")
    }
// MONTH 7
    if (sarTotalValue > 0) {
        if (m7SRCMPProd > 0 && m7SRCMPProd >= (6 * sarScore)) {
            document.getElementById("m7SRCMPProdMet").innerHTML = "Prod Met"
        } else if (m7SRCMPProd < (6 * sarScore) && m7SRCMPProd > 0) {
            document.getElementById("m7SRCMPProdMet").innerHTML = "Prod NOT Met"
        } else {
            console.log("No Data")
        }
    } else {
        console.log("No SRCMP Production Reported")
    }
// MONTH 8
    if (sarTotalValue > 0) {
        if (m8SRCMPProd > 0 && m8SRCMPProd >= (6 * sarScore)) {
            document.getElementById("m8SRCMPProdMet").innerHTML = "Prod Met"
        } else if (m8SRCMPProd < (6 * sarScore) && m8SRCMPProd > 0) {
            document.getElementById("m8SRCMPProdMet").innerHTML = "Prod NOT Met"
        } else {
            console.log("No Data")
        }
    } else {
        console.log("No SRCMP Production Reported")
    }
// MONTH 9
    if (sarTotalValue > 0) {
        if (m9SRCMPProd > 0 && m9SRCMPProd >= (6 * sarScore)) {
            document.getElementById("m9SRCMPProdMet").innerHTML = "Prod Met"
        } else if (m9SRCMPProd < (6 * sarScore) && m9SRCMPProd > 0) {
            document.getElementById("m9SRCMPProdMet").innerHTML = "Prod NOT Met"
        } else {
            console.log("No Data")
        }
    } else {
        console.log("No SRCMP Production Reported")
    }
// MONTH 10
    if (sarTotalValue > 0) {
        if (m10SRCMPProd > 0 && m10SRCMPProd >= (6 * sarScore)) {
            document.getElementById("m10SRCMPProdMet").innerHTML = "Prod Met"
        } else if (m10SRCMPProd < (6 * sarScore) && m10SRCMPProd > 0) {
            document.getElementById("m10SRCMPProdMet").innerHTML = "Prod NOT Met"
        } else {
            console.log("No Data")
        }
    } else {
        console.log("No SRCMP Production Reported")
    }
// MONTH 11
    if (sarTotalValue > 0) {
        if (m11SRCMPProd > 0 && m11SRCMPProd >= (6 * sarScore)) {
            document.getElementById("m11SRCMPProdMet").innerHTML = "Prod Met"
        } else if (m11SRCMPProd < (6 * sarScore) && m11SRCMPProd > 0) {
            document.getElementById("m11SRCMPProdMet").innerHTML = "Prod NOT Met"
        } else {
            console.log("No Data")
        }
    } else {
        console.log("No SRCMP Production Reported")
    }
// MONTH 12
    if (sarTotalValue > 0) {
        if (m12SRCMPProd > 0 && m12SRCMPProd >= (6 * sarScore)) {
            document.getElementById("m12SRCMPProdMet").innerHTML = "Prod Met"
        } else if (m12SRCMPProd < (6 * sarScore) && m12SRCMPProd > 0) {
            document.getElementById("m12SRCMPProdMet").innerHTML = "Prod NOT Met"
        } else {
            console.log("No Data")
        }
    } else {
        console.log("No SRCMP Production Reported")
    }
    console.log("--- SRCMP Prod Ratings Completed ---");

//------------------
//MAGI Tasks
//------------------
    console.log("--- MAGI PROD RATING CALCS ---");
    console.log(m1MAGI + " MAGI count, " + m1Days + " work days");
    console.log(m1MAGIProd + "/day");
    console.log(magiTotalValue + " magi total value");
// math out the application production rating

//------------------
//OUTPUT TO PGCS SUMMARY SECTION
//------------------
//measure MAGI PRODUCTION against the standard
    console.log(m1MAGIRating + " sar prod rating");
    console.log(16 * magiScore + " sar score multplied valued");
    if (magiTotalValue > 0) {
        if (m1MAGIRating > 0 && m1MAGIRating < (13 * magiScore)) {
            document.getElementById("prodMAGIStarScore").innerHTML = "&#x2605";
            document.getElementById("prodMAGIStarDescriptor").innerHTML = "Unsatisfactory"
        } else if (m1MAGIRating >= (13 * magiScore) && m1MAGIRating < (16 * magiScore)) {
            document.getElementById("prodMAGIStarScore").innerHTML = "&#x2605 &#x2605";
            document.getElementById("prodMAGIStarDescriptor").innerHTML = "Needs Improvement"
        } else if (m1MAGIRating >= (16 * magiScore) && m1MAGIRating < (19 * magiScore)) {
            document.getElementById("prodMAGIStarScore").innerHTML = "&#x2605 &#x2605 &#x2605";
            document.getElementById("prodMAGIStarDescriptor").innerHTML = "Solid Performer"
        } else if (m1MAGIRating >= (19 * magiScore)) {
            document.getElementById("prodMAGIStarScore").innerHTML = "&#x2605 &#x2605 &#x2605"; //removed 4th star from consistency rule, deprecated by DCO procedural rules.
            // document.getElementById("prodSARStarDescriptor").innerHTML = "Highly Effective"
            document.getElementById("prodSARStarDescriptor").innerHTML = "Solid Performer"
        } else {
            console.log("No Data")
        }
    } else {
        console.log("No MAGI Data Reported");
    }
// MEASURE MONTHLY magi AGAINST PROD AND REPORT BACK
// MONTH 1
    if (magiTotalValue > 0) {
        if (m1MAGIProd > 0 && m1MAGIProd >= (16 * magiScore)) {
            document.getElementById("m1MAGIProdMet").innerHTML = "Prod Met"
        } else if (m1MAGIProd < (16 * magiScore) && m1MAGIProd > 0) {
            document.getElementById("m1MAGIProdMet").innerHTML = "Prod NOT Met"
        } else {
            console.log("No Data magiM1")
        }
    } else {
        console.log("No MAGI Production Reported")
    }
// MONTH 2
    if (magiTotalValue > 0) {
        if (m2MAGIProd > 0 && m2MAGIProd >= (16 * magiScore)) {
            document.getElementById("m2MAGIProdMet").innerHTML = "Prod Met"
        } else if (m2MAGIProd < (16 * magiScore) && m2MAGIProd > 0) {
            document.getElementById("m2MAGIProdMet").innerHTML = "Prod NOT Met"
        } else {
            console.log("No Data")
        }
    } else {
        console.log("No MAGI Production Reported")
    }
// MONTH 3
    if (magiTotalValue > 0) {
        if (m3MAGIProd > 0 && m3MAGIProd >= (16 * magiScore)) {
            document.getElementById("m3MAGIProdMet").innerHTML = "Prod Met"
        } else if (m3MAGIProd < (16 * magiScore) && m3MAGIProd > 0) {
            document.getElementById("m3MAGIProdMet").innerHTML = "Prod NOT Met"
        } else {
            console.log("No Data")
        }
    } else {
        console.log("No MAGI Production Reported")
    }
// MONTH 4
    if (magiTotalValue > 0) {
        if (m4MAGIProd > 0 && m4MAGIProd >= (16 * magiScore)) {
            document.getElementById("m4MAGIProdMet").innerHTML = "Prod Met"
        } else if (m4MAGIProd < (16 * magiScore) && m4MAGIProd > 0) {
            document.getElementById("m4MAGIProdMet").innerHTML = "Prod NOT Met"
        } else {
            console.log("No Data")
        }
    } else {
        console.log("No MAGI Production Reported")
    }
// MONTH 5
    if (magiTotalValue > 0) {
        if (m5MAGIProd > 0 && m5MAGIProd >= (16 * magiScore)) {
            document.getElementById("m5MAGIProdMet").innerHTML = "Prod Met"
        } else if (m5MAGIProd < (16 * magiScore) && m5MAGIProd > 0) {
            document.getElementById("m5MAGIProdMet").innerHTML = "Prod NOT Met"
        } else {
            console.log("No Data")
        }
    } else {
        console.log("No MAGI Production Reported")
    }
// MONTH 6
    if (magiTotalValue > 0) {
        if (m6MAGIProd > 0 && m6MAGIProd >= (16 * magiScore)) {
            document.getElementById("m6MAGIProdMet").innerHTML = "Prod Met"
        } else if (m6MAGIProd < (16 * magiScore) && m6MAGIProd > 0) {
            document.getElementById("m6MAGIProdMet").innerHTML = "Prod NOT Met"
        } else {
            console.log("No Data")
        }
    } else {
        console.log("No MAGI Production Reported")
    }
// MONTH 7
    if (magiTotalValue > 0) {
        if (m7MAGIProd > 0 && m7MAGIProd >= (16 * magiScore)) {
            document.getElementById("m7MAGIProdMet").innerHTML = "Prod Met"
        } else if (m7MAGIProd < (16 * magiScore) && m7MAGIProd > 0) {
            document.getElementById("m7MAGIProdMet").innerHTML = "Prod NOT Met"
        } else {
            console.log("No Data")
        }
    } else {
        console.log("No MAGI Production Reported")
    }
// MONTH 8
    if (magiTotalValue > 0) {
        if (m8MAGIProd > 0 && m8MAGIProd >= (16 * magiScore)) {
            document.getElementById("m8MAGIProdMet").innerHTML = "Prod Met"
        } else if (m8MAGIProd < (16 * magiScore) && m8MAGIProd > 0) {
            document.getElementById("m8MAGIProdMet").innerHTML = "Prod NOT Met"
        } else {
            console.log("No Data")
        }
    } else {
        console.log("No MAGI Production Reported")
    }
// MONTH 9
    if (magiTotalValue > 0) {
        if (m9MAGIProd > 0 && m9MAGIProd >= (16 * magiScore)) {
            document.getElementById("m9MAGIProdMet").innerHTML = "Prod Met"
        } else if (m9MAGIProd < (16 * magiScore) && m9MAGIProd > 0) {
            document.getElementById("m9MAGIProdMet").innerHTML = "Prod NOT Met"
        } else {
            console.log("No Data")
        }
    } else {
        console.log("No MAGI Production Reported")
    }
// MONTH 10
    if (magiTotalValue > 0) {
        if (m10MAGIProd > 0 && m10MAGIProd >= (16 * magiScore)) {
            document.getElementById("m10MAGIProdMet").innerHTML = "Prod Met"
        } else if (m10MAGIProd < (16 * magiScore) && m10MAGIProd > 0) {
            document.getElementById("m10MAGIProdMet").innerHTML = "Prod NOT Met"
        } else {
            console.log("No Data")
        }
    } else {
        console.log("No MAGI Production Reported")
    }
// MONTH 11
    if (magiTotalValue > 0) {
        if (m11MAGIProd > 0 && m11MAGIProd >= (16 * magiScore)) {
            document.getElementById("m11MAGIProdMet").innerHTML = "Prod Met"
        } else if (m11MAGIProd < (16 * magiScore) && m11MAGIProd > 0) {
            document.getElementById("m11MAGIProdMet").innerHTML = "Prod NOT Met"
        } else {
            console.log("No Data")
        }
    } else {
        console.log("No MAGI Production Reported")
    }
// MONTH 12
    if (magiTotalValue > 0) {
        if (m12MAGIProd > 0 && m12MAGIProd >= (16 * magiScore)) {
            document.getElementById("m12MAGIProdMet").innerHTML = "Prod Met"
        } else if (m12MAGIProd < (16 * magiScore) && m12MAGIProd > 0) {
            document.getElementById("m12MAGIProdMet").innerHTML = "Prod NOT Met"
        } else {
            console.log("No Data")
        }
    } else {
        console.log("No MAGI Production Reported")
    }
    console.log("--- MAGI Prod Ratings Completed ---");

    console.log("--- Case Management Rating Begins ---");

// DETERMINE NUMBER OF MONTHS CM DATA WAS RATED
// SET CM DATA EXISTS COUNTER
    var cmCounter = 0;
    var cmTotalValue = 0;

// get cm1-12 values

    let cm1 = Number(document.getElementById("cm1Set").value);
    let cm2 = Number(document.getElementById("cm2Set").value);
    let cm3 = Number(document.getElementById("cm3Set").value);
    let cm4 = Number(document.getElementById("cm4Set").value);
    let cm5 = Number(document.getElementById("cm5Set").value);
    let cm6 = Number(document.getElementById("cm6Set").value);
    let cm7 = Number(document.getElementById("cm7Set").value);
    let cm8 = Number(document.getElementById("cm8Set").value);
    let cm9 = Number(document.getElementById("cm9Set").value);
    let cm10 = Number(document.getElementById("cm10Set").value);
    let cm11 = Number(document.getElementById("cm11Set").value);
    let cm12 = Number(document.getElementById("cm12Set").value);
    // if 1+ increment counter by 1 and CM total by X

    if (cm1 >= 1) {
        cmCounter++;
        cmTotalValue = cmTotalValue + cm1;
        document.getElementById('cm1Text').innerHTML = document.getElementById('cm1TextBox').value;
        document.getElementById('h5CM1').innerHTML = "Case Management:1 - " + document.getElementById('cm1Set').value + "&#x2605";
    } else {
        cm1 = 0;
    }
    if (cm2 >= 1) {
        cmCounter++;
        cmTotalValue = cmTotalValue + cm2;
        document.getElementById('cm2Text').innerHTML = document.getElementById('cm2TextBox').value;
        document.getElementById('h5CM2').innerHTML = "Case Management:2 - " + document.getElementById('cm2Set').value + "&#x2605";
    } else {
        cm1 = 0;
    }
    if (cm3 >= 1) {
        cmCounter++;
        cmTotalValue = cmTotalValue + cm3;
        document.getElementById('cm3Text').innerHTML = document.getElementById('cm3TextBox').value;
        document.getElementById('h5CM3').innerHTML = "Case Management:3 - " + document.getElementById('cm3Set').value + "&#x2605";
    } else {
        cm1 = 0;
    }
    if (cm4 >= 1) {
        cmCounter++;
        cmTotalValue = cmTotalValue + cm4;
        document.getElementById('cm4Text').innerHTML = document.getElementById('cm4TextBox').value;
        document.getElementById('h5CM4').innerHTML = "Case Management:4 - " + document.getElementById('cm4Set').value + "&#x2605";
    } else {
        cm1 = 0;
    }
    if (cm5 >= 1) {
        cmCounter++;
        cmTotalValue = cmTotalValue + cm5;
        document.getElementById('cm5Text').innerHTML = document.getElementById('cm5TextBox').value;
        document.getElementById('h5CM5').innerHTML = "Case Management:5 - " + document.getElementById('cm5Set').value + "&#x2605";
    } else {
        cm1 = 0;
    }
    if (cm6 >= 1) {
        cmCounter++;
        cmTotalValue = cmTotalValue + cm6;
        document.getElementById('cm6Text').innerHTML = document.getElementById('cm6TextBox').value;
        document.getElementById('h5CM6').innerHTML = "Case Management:6 - " + document.getElementById('cm6Set').value + "&#x2605";
    } else {
        cm1 = 0;
    }
    if (cm7 >= 1) {
        cmCounter++;
        cmTotalValue = cmTotalValue + cm7;
        document.getElementById('cm7Text').innerHTML = document.getElementById('cm7TextBox').value;
        document.getElementById('h5CM7').innerHTML = "Case Management:7 - " + document.getElementById('cm7Set').value + "&#x2605";
    } else {
        cm1 = 0;
    }
    if (cm8 >= 1) {
        cmCounter++;
        cmTotalValue = cmTotalValue + cm8;
        document.getElementById('cm8Text').innerHTML = document.getElementById('cm8TextBox').value;
        document.getElementById('h5CM8').innerHTML = "Case Management:8 - " + document.getElementById('cm8Set').value + "&#x2605";
    } else {
        cm1 = 0;
    }
    if (cm9 >= 1) {
        cmCounter++;
        cmTotalValue = cmTotalValue + cm9;
        document.getElementById('cm9Text').innerHTML = document.getElementById('cm9TextBox').value;
        document.getElementById('h5CM9').innerHTML = "Case Management:9 - " + document.getElementById('cm9Set').value + "&#x2605";
    } else {
        cm1 = 0;
    }
    if (cm10 >= 1) {
        cmCounter++;
        cmTotalValue = cmTotalValue + cm10;
        document.getElementById('cm10Text').innerHTML = document.getElementById('cm10TextBox').value;
        document.getElementById('h5CM10').innerHTML = "Case Management:10 - " + document.getElementById('cm10Set').value + "&#x2605";
    } else {
        cm1 = 0;
    }
    if (cm11 >= 1) {
        cmCounter++;
        cmTotalValue = cmTotalValue + cm11;
        document.getElementById('cm11Text').innerHTML = document.getElementById('cm11TextBox').value;
        document.getElementById('h5CM11').innerHTML = "Case Management:11 - " + document.getElementById('cm11Set').value + "&#x2605";
    } else {
        cm1 = 0;
    }
    if (cm12 >= 1) {
        cmCounter++;
        cmTotalValue = cmTotalValue + cm12;
        document.getElementById('cm12Text').innerHTML = document.getElementById('cm12TextBox').value;
        document.getElementById('h5CM12').innerHTML = "Case Management:12 - " + document.getElementById('cm12Set').value + "&#x2605";
    } else {
        cm1 = 0;
    }

    console.log("CM1 = " + cm1 + "cmC = " + cmCounter + "cmTV = " + cmTotalValue);
// ADD CM RATINGS TOGETHER AND DIVIDE BY MONTHS ENTERED
    var cmFinalRating2 = cmTotalValue / cmCounter;
    var cmFinalRating = Math.round(cmFinalRating2);
    console.log("CM Final = " + cmFinalRating);

// OUTPUT CM OVERALL RATING TO PGCS.HTML

    switch (cmFinalRating) {
        case 4:
            document.getElementById("cmFinal").innerHTML = "&#x2605 &#x2605 &#x2605 &#x2605";
            break;
        case 3:
            document.getElementById("cmFinal").innerHTML = "&#x2605 &#x2605 &#x2605";
            break;
        case 2:
            document.getElementById("cmFinal").innerHTML = "&#x2605 &#x2605";
            break;
        case 1:
            document.getElementById("cmFinal").innerHTML = "&#x2605";
            break;
        default:
            console.log("No CM Data To Assess!!!")
    }

    console.log("--- Case Management Rating Completed ---");


    console.log("=== END OF LINE ===")
}


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        document.getElementById('super1').innerHTML = user;
        var tD = new Date();
        var datestr = (tD.getMonth() + 1) + "/" + tD.getDate() + "/" + tD.getFullYear();
        document.getElementById("reviewDate").innerHTML = datestr;
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
}
