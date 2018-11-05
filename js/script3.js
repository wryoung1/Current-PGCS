//MONTHLY SCRIPT
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
//set title
    let wkrName = document.getElementById("wkrName").value;
    let wkrNum = document.getElementById("wkrNum").value;
    document.getElementById("title-bar").innerHTML = ("PGCS Rating Form - " + wkrName + " : " + wkrNum);
//duplicate months reporting
    let m1 = document.getElementById("m1Set").value;
    document.getElementById("m1Dupe").innerHTML = m1;
    m1ActualDays = Number(document.getElementById("m1AvailableDays").value);

    if (m1ActualDays <= 0) {
        alert("You MUST key a value in the workday field to evaluate performance")
    } else {
        console.log("======= NEW RUN ======")
// --------------------
// PREPARE FOR USE
// --------------------
//ACCURACY

//Reset SNAP Counters
        let acc1 = 0;
        let caseReview1 = 0;
        var accCount = 0;
        var accReviewTotal = 0;
        let accErrorTotal = 0;
        var accConsistency = 0;
//Reset MEDICAID Counters
        let MCacc1 = 0;
        let MCcaseReview1 = 0;
        let MCcaseError1 = 0;
        var MCaccCount = 0;
        var MCaccReviewTotal = 0;
        let MCaccErrorTotal = 0;
        var MCaccConsistency = 0;
//Reset TEA Counters
        let TEAacc1 = 0;
        let TEAcaseReview1 = 0;
        let TEAcaseError1 = 0;
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

        console.log(accConsistency + " TEA Consistency Value");
        console.log(accCount + " TEA Acc Count Value");
//——————————TEA DONE--------------------
// --------------------
// FILL REPORT FIELDS ON HTML PAGE
// --------------------

// log out SNAP accuracy data
        document.getElementById("month1-acc").innerHTML = (((acc1).toFixed(2)) + "%");

// log out MEDICAID accuracy data
        document.getElementById("month1-MCacc").innerHTML = (((MCacc1).toFixed(2)) + "%");

// log out TEA accuracy data
        document.getElementById("month1-TEAacc").innerHTML = (((TEAacc1).toFixed(2)) + "%");

// --------------------
// PGCS RATING PREP
// --------------------

// SNAP accuracy calculations
        let sumAcc = 0;
        let sum = accCount;

        switch (sum) {
            case 1:
                sumAcc = acc1;
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
            case 1:
                MCsumAcc = MCacc1;
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
            case 1:
                TEAsumAcc = TEAacc1;
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
            console.log("Great Job!!!")
            document.getElementById("AccuracyScore").innerHTML = (((aveAcc).toFixed(2)) + "% Accuracy")
        } else if (acc1 < 95 && acc1 > 80) {
            console.log("Almost!")

        } else {
            console.log("No Data")
        }
// Measure Consistency for Star Value SNAP ACCURACY
        var accIsConsistent = (accConsistency / sum) * 100;
        if (accIsConsistent >= 95 && aveAcc >= 95) {
            document.getElementById("StarScore").innerHTML = "&#x2605 &#x2605 &#x2605"
            document.getElementById("StarDescriptor").innerHTML = "Solid Performer"
            document.getElementById("AccuracyFinal").innerHTML = "Met Goal"
        } else if (accIsConsistent < 95 && aveAcc >= 95) {
            document.getElementById("StarScore").innerHTML = "&#x2605 &#x2605 &#x2605"
            document.getElementById("StarDescriptor").innerHTML = "Solid Performer"
            document.getElementById("AccuracyFinal").innerHTML = "Met Goal";
        } else if (aveAcc > 79.99 && aveAcc < 95) {
            document.getElementById("StarScore").innerHTML = "&#x2605 &#x2605"
            document.getElementById("StarDescriptor").innerHTML = "Needs Improvement"
            document.getElementById("AccuracyFinal").innerHTML = "Missed Goals";
        } else if (aveAcc > 0 && aveAcc <= 79.99) {
            document.getElementById("StarScore").innerHTML = "&#x2605"
            document.getElementById("StarDescriptor").innerHTML = "Unsatisfactory"
            document.getElementById("AccuracyFinal").innerHTML = "Missed Goals";
        }
// Add Up Total Reviews and Total Errors FOR SNAP ACCURACY

        var TotalAcc = Number(caseReview1);
        document.getElementById("AccReviewed").innerHTML = (TotalAcc + " Case Reviews");
        var TotalErr = Number(caseError1);
        document.getElementById("AccError").innerHTML = (TotalErr + " Case Errors");

//measure MEDICAID ACCURACY against the standard
        if (MCaveAcc <= 80 && MCsum > 0) {
            document.getElementById("MCAccuracyScore").innerHTML = (((MCaveAcc).toFixed(2)) + "% Accuracy");
        } else if (MCaveAcc < 90 && MCaveAcc > 75) {
            document.getElementById("MCAccuracyScore").innerHTML = (((MCaveAcc).toFixed(2)) + "% Accuracy");
        } else if (MCaveAcc >= 90) {
            console.log("Great Job!!!")
            document.getElementById("MCAccuracyScore").innerHTML = (((MCaveAcc).toFixed(2)) + "% Accuracy")
        } else if (MCacc1 < 90 && MCacc1 > 75) {
            console.log("Almost!")

        } else {
            console.log("No Data")
        }
// Measure Consistency for Star Value MEDICAID ACCURACY
        var MCaccIsConsistent = (MCaccConsistency / MCsum) * 100;
        if (MCaccIsConsistent >= 95 && MCaveAcc > 90) {
            document.getElementById("MCStarScore").innerHTML = "&#x2605 &#x2605 &#x2605"
            document.getElementById("MCStarDescriptor").innerHTML = "Solid Performer"
            document.getElementById("MCAccuracyFinal").innerHTML = "Met Goal"
        } else if (MCaccIsConsistent < 95 && MCaveAcc >= 90) {
            document.getElementById("MCStarScore").innerHTML = "&#x2605 &#x2605 &#x2605"
            document.getElementById("MCStarDescriptor").innerHTML = "Solid Performer"
            document.getElementById("MCAccuracyFinal").innerHTML = "Met Goal";
        } else if (MCaveAcc > 79.99 && MCaveAcc < 90) {
            document.getElementById("MCStarScore").innerHTML = "&#x2605 &#x2605"
            document.getElementById("MCStarDescriptor").innerHTML = "Needs Improvement"
            document.getElementById("MCAccuracyFinal").innerHTML = "Missed Goal";
        } else if (MCaveAcc > 0 && MCaveAcc <= 79.99) {
            document.getElementById("MCStarScore").innerHTML = "&#x2605"
            document.getElementById("MCStarDescriptor").innerHTML = "Unsatisfactory"
            document.getElementById("MCAccuracyFinal").innerHTML = "Missed Goal";
        }
// Add Up Total Reviews and Total Errors FOR MEDICAID ACCURACY

        var MCTotalAcc = Number(MCcaseReview1);
        document.getElementById("MCAccReviewed").innerHTML = (MCTotalAcc + " Case Reviews");
        var MCTotalErr = Number(MCcaseError1);
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
        if (TEAaccIsConsistent >= 95 && TEAaveAcc > 90) {
            document.getElementById("TEAStarScore").innerHTML = "&#x2605 &#x2605 &#x2605"
            document.getElementById("TEAStarDescriptor").innerHTML = "Solid Performer"
            document.getElementById("TEAAccuracyFinal").innerHTML = "Met Goal"
        } else if (TEAaccIsConsistent < 95 && TEAaveAcc >= 90) {
            document.getElementById("TEAStarScore").innerHTML = "&#x2605 &#x2605 &#x2605"
            document.getElementById("TEAStarDescriptor").innerHTML = "Solid Performer"
            document.getElementById("TEAAccuracyFinal").innerHTML = "Met Goal";
        } else if (TEAaveAcc > 79.99 && TEAaveAcc < 90) {
            document.getElementById("TEAStarScore").innerHTML = "&#x2605 &#x2605"
            document.getElementById("TEAStarDescriptor").innerHTML = "Needs Improvement"
            document.getElementById("TEAAccuracyFinal").innerHTML = "Missed Goal";
        } else if (TEAaveAcc > 0 && TEAaveAcc <= 79.99) {
            document.getElementById("TEAStarScore").innerHTML = "&#x2605"
            document.getElementById("TEAStarDescriptor").innerHTML = "Unsatisfactory"
            document.getElementById("TEAAccuracyFinal").innerHTML = "Missed Goal";
        }
// Add Up Total Reviews and Total Errors FOR TEA ACCURACY

        var TEATotalAcc = Number(TEAcaseReview1);
        document.getElementById("TEAAccReviewed").innerHTML = (TEATotalAcc + " Case Reviews");
        var TEATotalErr = Number(TEAcaseError1);
        document.getElementById("TEAAccError").innerHTML = (TEATotalErr + " Case Errors");
// -----------------------------------------------------------------------
// -----------------------------------------------------------------------
// ------------------------ TIMELINESS SECTION BEGINS --------------------
// -----------------------------------------------------------------------
// -----------------------------------------------------------------------
// ------------SNAP ABCDE TIME--------------
//RESET SNAP TIME COUNTERS
        let snapTime1 = 0;
        let snapWorked1 = 0;
        let snapTimeLate1 = 0;
        let snapTimeReassigned1 = 0;
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

//-------------------DONE--------------------
//Set SNAP Time Counters
        snapTime1 = (1 - (snapTimeLate1 / snapWorked1)) * 100;
        if (snapTime1 >= 95) {
            snapTimeConsistency++;
            snapTimeCount++;
        } else if (snapTime1 > 0 && snapTime1 < 95) {
            snapTimeCount++;
        } else {
            snapTime1 = 0;
        }

        console.log(snapTimeConsistency + " Consistency Value");
        console.log(snapTimeCount + " snapTime Count Value");
//--------------------DONE--------------------
// --------------------
// FILL REPORT FIELDS ON HTML PAGE
// --------------------

// log out SNAP timeliness data
        document.getElementById("month1-time").innerHTML = (((snapTime1).toFixed(2)) + "%");


// --------------------
// PGCS RATING PREP
// --------------------

// SNAP accuracy calculations
        let snapTimeTotal = 0;
        let snapTimeSum = snapTimeCount;

        switch (snapTimeSum) {

            case 1:
                snapTimeTotal = snapTime1;
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
// Measure Consistency for Star Value SNAP TIMELINESS
        var snapTimeIsConsistent = (snapTimeConsistency / snapTimeSum) * 100;
        if (snapTimeIsConsistent >= 95 && aveSNAPTime > 95) {
            document.getElementById("StarScoreTime").innerHTML = "&#x2605 &#x2605 &#x2605"
            document.getElementById("StarDescriptorTime").innerHTML = "Solid Performer"
            document.getElementById("TimeFinal").innerHTML = "Met Goal"
        } else if (snapTimeIsConsistent < 95 && aveSNAPTime >= 95) {
            document.getElementById("StarScoreTime").innerHTML = "&#x2605 &#x2605 &#x2605"
            document.getElementById("StarDescriptorTime").innerHTML = "Solid Performer"
            document.getElementById("TimeFinal").innerHTML = "Met Goal";
        } else if (aveSNAPTime > 30 && aveSNAPTime < 95) {
            document.getElementById("StarScoreTime").innerHTML = "&#x2605 &#x2605"
            document.getElementById("StarDescriptorTime").innerHTML = "Needs Improvement"
            document.getElementById("TimeFinal").innerHTML = "Missed Goal";
        } else if (aveSNAPTime > 0 && aveSNAPTime <= 30) {
            document.getElementById("StarScoreTime").innerHTML = "&#x2605"
            document.getElementById("StarDescriptorTime").innerHTML = "Unsatisfactory"
            document.getElementById("TimeFinal").innerHTML = "Missed Goal";
        }
// Add Up Total Reviews and Total Errors FOR SNAP TIMELINESS

// Add Up Total Reviews and Total Errors FOR SNAP TimeSARLINESS AND ABCDE

        var TotalSnapTime = Number(snapWorked1);
        document.getElementById("TimWorked").innerHTML = (TotalSnapTime + " Cases Worked");
        var TotalSnapLate = Number(snapTimeLate1);
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

//-------------------DONE--------------------
//Set SNAP TimeEXP Counters
        snapTimeEXP1 = (1 - (snapTimeEXPLate1 / snapWorkedEXP1)) * 100;
        if (snapTimeEXP1 >= 95) {
            snapTimeEXPConsistency++;
            snapTimeEXPCount++;
        } else if (snapTimeEXP1 > 0 && snapTimeEXP1 < 95) {
            snapTimeEXPCount++;
        } else {
            snapTimeEXP1 = 0;
        }

        console.log(snapTimeEXPConsistency + " Consistency Value");
        console.log(snapTimeEXPCount + " snapTimeEXP Count Value");
//--------------------DONE--------------------
// --------------------
// FILL REPORT FIELDS ON HTML PAGE
// --------------------

// log out SNAP TimeEXPliness data
        document.getElementById("month1-timeEXP").innerHTML = (((snapTimeEXP1).toFixed(2)) + "%");


// --------------------
// PGCS RATING PREP
// --------------------

// SNAP accuracy calculations
        let snapTimeEXPTotal = 0;
        let snapTimeEXPSum = snapTimeEXPCount;

        switch (snapTimeEXPSum) {

            case 1:
                snapTimeEXPTotal = snapTimeEXP1;
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
// Measure Consistency for Star Value SNAP TimeEXPLINESS
        var snapTimeEXPIsConsistent = (snapTimeEXPConsistency / snapTimeEXPSum) * 100;
        if (snapTimeEXPIsConsistent >= 95 && aveSNAPTimeEXP > 97) {
            document.getElementById("StarScoreTimeEXP").innerHTML = "&#x2605 &#x2605 &#x2605"
            document.getElementById("StarDescriptorTimeEXP").innerHTML = "Solid Performer"
            document.getElementById("TimeEXPFinal").innerHTML = "Met Goal"
        } else if (snapTimeEXPIsConsistent < 95 && aveSNAPTimeEXP >= 97) {
            document.getElementById("StarScoreTimeEXP").innerHTML = "&#x2605 &#x2605 &#x2605"
            document.getElementById("StarDescriptorTimeEXP").innerHTML = "Solid Performer"
            document.getElementById("TimeEXPFinal").innerHTML = "Met Goal";
        } else if (aveSNAPTimeEXP > 30 && aveSNAPTimeEXP < 97) {
            document.getElementById("StarScoreTimeEXP").innerHTML = "&#x2605 &#x2605"
            document.getElementById("StarDescriptorTimeEXP").innerHTML = "Needs Improvement"
            document.getElementById("TimeEXPFinal").innerHTML = "Missed Goal";
        } else if (aveSNAPTimeEXP > 0 && aveSNAPTimeEXP <= 30) {
            document.getElementById("StarScoreTimeEXP").innerHTML = "&#x2605"
            document.getElementById("StarDescriptorTimeEXP").innerHTML = "Unsatisfactory"
            document.getElementById("TimeEXPFinal").innerHTML = "Missed Goal";
        }
// Add Up Total Reviews and Total Errors FOR SNAP TimeEXPLINESS

        var TotalSnapTimeEXP = Number(snapWorkedEXP1);
        document.getElementById("TimeWorkedEXP").innerHTML = (TotalSnapTimeEXP + " Cases Worked");
        var TotalSnapLateEXP = Number(snapTimeEXPLate1);
        document.getElementById("TimeLateEXP").innerHTML = (TotalSnapLateEXP + " Late Cases");

// ------------SNAP TimeSAR--------------
//RESET SNAP TimeSAR COUNTERS
        let snapTimeSAR1 = 0;
        let snapTimeSARLate1 = 0;
        let snapTimeSARReassigned1 = 0;
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

//-------------------DONE--------------------
//Set SNAP TimeSAR Counters
        snapTimeSAR1 = (1 - (snapTimeSARLate1 / snapSARWorked1)) * 100;
        if (snapTimeSAR1 >= 95) {
            snapTimeSARConsistency++;
            snapTimeSARCount++;
        } else if (snapTimeSAR1 > 0 && snapTimeSAR1 < 95) {
            snapTimeSARCount++;
        } else {
            snapTimeSAR1 = 0;
        }

        console.log(snapTimeSARConsistency + " Consistency Value");
        console.log(snapTimeSARCount + " snapTimeSAR Count Value");
//--------------------DONE--------------------
// --------------------
// FILL REPORT FIELDS ON HTML PAGE
// --------------------

// log out SNAP TimeSARliness data
        document.getElementById("month1-SARtime").innerHTML = (((snapTimeSAR1).toFixed(2)) + "%");

// --------------------
// PGCS RATING PREP
// --------------------

// SNAP accuracy calculations
        let snapTimeSARTotal = 0;
        let snapTimeSARSum = snapTimeSARCount;

        switch (snapTimeSARSum) {

            case 1:
                snapTimeSARTotal = snapTimeSAR1;
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
// Measure Consistency for Star Value SNAP TimeSARLINESS
        var snapTimeSARIsConsistent = (snapTimeSARConsistency / snapTimeSARSum) * 100;
        if (snapTimeSARIsConsistent >= 95 && aveSNAPTimeSAR > 95) {
            document.getElementById("StarScoreTimeSAR").innerHTML = "&#x2605 &#x2605 &#x2605"
            document.getElementById("StarDescriptorTimeSAR").innerHTML = "Solid Performer"
            document.getElementById("TimeSARFinal").innerHTML = "Met Goal"
        } else if (snapTimeSARIsConsistent < 95 && aveSNAPTimeSAR >= 95) {
            document.getElementById("StarScoreTimeSAR").innerHTML = "&#x2605 &#x2605 &#x2605"
            document.getElementById("StarDescriptorTimeSAR").innerHTML = "Solid Performer"
            document.getElementById("TimeSARFinal").innerHTML = "Met Goal";
        } else if (aveSNAPTimeSAR > 30 && aveSNAPTimeSAR < 95) {
            document.getElementById("StarScoreTimeSAR").innerHTML = "&#x2605 &#x2605"
            document.getElementById("StarDescriptorTimeSAR").innerHTML = "Needs Improvement"
            document.getElementById("TimeSARFinal").innerHTML = "Missed Goal";
        } else if (aveSNAPTimeSAR > 0 && aveSNAPTimeSAR <= 30) {
            document.getElementById("StarScoreTimeSAR").innerHTML = "&#x2605"
            document.getElementById("StarDescriptorTimeSAR").innerHTML = "Unsatisfactory"
            document.getElementById("TimeSARFinal").innerHTML = "Missed Goal";
        }
// Add Up Total Reviews and Total Errors FOR SNAP TimeSARLINESS AND ABCDE

        var TotalSnapSARTime = Number(snapSARWorked1);
        document.getElementById("TimeWorkedSAR").innerHTML = (TotalSnapSARTime + " Cases Worked");
        var TotalSnapSARLate = Number(snapTimeSARLate1);
        document.getElementById("TimeLateSAR").innerHTML = (TotalSnapSARLate + " Late Cases");

// ------------medicaid TIME--------------
//RESET medicaid TIME COUNTERS
        let medicaidTime1 = 0;
        let medicaidWorked1 = 0;
        let medicaidTimeLate1 = 0;
        let medicaidTimeReassigned1 = 0;
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

//-------------------DONE--------------------
//Set medicaid Time Counters
        medicaidTime1 = (1 - (medicaidTimeLate1 / medicaidWorked1)) * 100;
        if (medicaidTime1 >= 90) {
            medicaidTimeConsistency++;
            medicaidTimeCount++;
        } else if (medicaidTime1 > 0 && medicaidTime1 < 90) {
            medicaidTimeCount++;
        } else {
            medicaidTime1 = 0;
        }

        console.log(medicaidTimeConsistency + " Consistency Value");
        console.log(medicaidTimeCount + " medicaidTime Count Value");
//--------------------DONE--------------------
// --------------------
// FILL REPORT FIELDS ON HTML PAGE
// --------------------

// log out medicaid timeliness data
        document.getElementById("month1-MCtime").innerHTML = (((medicaidTime1).toFixed(2)) + "%");


// --------------------
// PGCS RATING PREP
// --------------------

// medicaid accuracy calculations
        let medicaidTimeTotal = 0;
        let medicaidTimeSum = medicaidTimeCount;

        switch (medicaidTimeSum) {

            case 1:
                medicaidTimeTotal = medicaidTime1;
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
// Measure Consistency for Star Value medicaid TIMELINESS
        var medicaidTimeIsConsistent = (medicaidTimeConsistency / medicaidTimeSum) * 100;
        if (medicaidTimeIsConsistent >= 95 && avemedicaidTime > 90) {
            document.getElementById("mcStarScoreTime").innerHTML = "&#x2605 &#x2605 &#x2605"
            document.getElementById("mcStarDescriptorTime").innerHTML = "Solid Performer"
            document.getElementById("mcTimeFinal").innerHTML = "Met Goal"
        } else if (medicaidTimeIsConsistent < 95 && avemedicaidTime >= 90) {
            document.getElementById("mcStarScoreTime").innerHTML = "&#x2605 &#x2605 &#x2605"
            document.getElementById("mcStarDescriptorTime").innerHTML = "Solid Performer"
            document.getElementById("mcTimeFinal").innerHTML = "Met Goal";
        } else if (avemedicaidTime > 30 && avemedicaidTime < 90) {
            document.getElementById("mcStarScoreTime").innerHTML = "&#x2605 &#x2605"
            document.getElementById("mcStarDescriptorTime").innerHTML = "Needs Improvement"
            document.getElementById("mcTimeFinal").innerHTML = "Missed Goal";
        } else if (avemedicaidTime > 0 && avemedicaidTime <= 30) {
            document.getElementById("mcStarScoreTime").innerHTML = "&#x2605"
            document.getElementById("mcStarDescriptorTime").innerHTML = "Unsatisfactory"
            document.getElementById("mcTimeFinal").innerHTML = "Missed Goal";
        }
// Add Up Total Reviews and Total Errors FOR medicaid TIMELINESS

        var TotalmedicaidTime = Number(medicaidWorked1);
        document.getElementById("mcTimWorked").innerHTML = (TotalmedicaidTime + " Cases Worked");
        var TotalmedicaidLate = Number(medicaidTimeLate1);
        document.getElementById("mcTimLate").innerHTML = (TotalmedicaidLate + " Late Cases");

// ------------magi TIME--------------
//RESET magi TIME COUNTERS
        let magiTime1 = 0;
        let magiTimeLate1 = 0;
        let magiTimeReassigned1 = 0;
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

//-------------------DONE--------------------
//Set magi Time Counters
        magiTime1 = (1 - (magiTimeLate1 / magiWorked1)) * 100;
        if (magiTime1 >= 90) {
            magiTimeConsistency++;
            magiTimeCount++;
        } else if (magiTime1 > 0 && magiTime1 < 90) {
            magiTimeCount++;
        } else {
            magiTime1 = 0;
        }

        console.log(magiTimeConsistency + " Consistency Value");
        console.log(magiTimeCount + " magiTime Count Value");
//--------------------DONE--------------------
// --------------------
// FILL REPORT FIELDS ON HTML PAGE
// --------------------

// log out magi timeliness data
        document.getElementById("month1-MAGItime").innerHTML = (((magiTime1).toFixed(2)) + "%");

// --------------------
// PGCS RATING PREP
// --------------------

// magi accuracy calculations
        let magiTimeTotal = 0;
        let magiTimeSum = magiTimeCount;

        switch (magiTimeSum) {

            case 1:
                magiTimeTotal = magiTime1;
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
// Measure Consistency for Star Value magi TIMELINESS
        var magiTimeIsConsistent = (magiTimeConsistency / magiTimeSum) * 100;
        if (magiTimeIsConsistent >= 95 && avemagiTime > 90) {
            document.getElementById("magiStarScoreTime").innerHTML = "&#x2605 &#x2605 &#x2605"
            document.getElementById("magiStarDescriptorTime").innerHTML = "Solid Performer"
            document.getElementById("magiTimeFinal").innerHTML = "Met Goal"
        } else if (magiTimeIsConsistent < 95 && avemagiTime >= 90) {
            document.getElementById("magiStarScoreTime").innerHTML = "&#x2605 &#x2605 &#x2605"
            document.getElementById("magiStarDescriptorTime").innerHTML = "Solid Performer"
            document.getElementById("magiTimeFinal").innerHTML = "Met Goal";
        } else if (avemagiTime > 30 && avemagiTime < 90) {
            document.getElementById("magiStarScoreTime").innerHTML = "&#x2605 &#x2605"
            document.getElementById("magiStarDescriptorTime").innerHTML = "Needs Improvement"
            document.getElementById("magiTimeFinal").innerHTML = "Missed Goal";
        } else if (avemagiTime > 0 && avemagiTime <= 30) {
            document.getElementById("magiStarScoreTime").innerHTML = "&#x2605"
            document.getElementById("magiStarDescriptorTime").innerHTML = "Unsatisfactory"
            document.getElementById("magiTimeFinal").innerHTML = "Missed Goal";
        }
// Add Up Total Reviews and Total Errors FOR magi TIMELINESS

        var TotalmagiTime = Number(magiWorked1);
        document.getElementById("magiTimeWorked").innerHTML = (TotalmagiTime + " Cases Worked");
        var TotalmagiLate = Number(magiTimeLate1);
        document.getElementById("magiTimeLate").innerHTML = (TotalmagiLate + " Late Cases");

// ------------TEA TIME--------------
//RESET TEA TIME COUNTERS
        let TEATime1 = 0;
        let TEAWorked1 = 0;
        let TEATimeLate1 = 0;
        let TEATimeReassigned1 = 0;
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

//-------------------DONE--------------------
//Set TEA Time Counters
        TEATime1 = (1 - (TEATimeLate1 / TEAWorked1)) * 100;
        if (TEATime1 >= 97) {
            TEATimeConsistency++;
            TEATimeCount++;
        } else if (TEATime1 > 0 && TEATime1 < 97) {
            TEATimeCount++;
        } else {
            TEATime1 = 0;
        }

        console.log(TEATimeConsistency + " Consistency Value");
        console.log(TEATimeCount + " TEATime Count Value");
//--------------------DONE--------------------
// --------------------
// FILL REPORT FIELDS ON HTML PAGE
// --------------------

// log out TEA timeliness data
        document.getElementById("month1-TEAtime").innerHTML = (((TEATime1).toFixed(2)) + "%");

// --------------------
// PGCS RATING PREP
// --------------------

// TEA accuracy calculations
        let TEATimeTotal = 0;
        let TEATimeSum = TEATimeCount;

        switch (TEATimeSum) {

            case 1:
                TEATimeTotal = TEATime1;
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
// Measure Consistency for Star Value TEA TIMELINESS
        var TEATimeIsConsistent = (TEATimeConsistency / TEATimeSum) * 100;
        if (TEATimeIsConsistent >= 95 && aveTEATime > 97) {
            document.getElementById("TEAStarScoreTime").innerHTML = "&#x2605 &#x2605 &#x2605"
            document.getElementById("TEAStarDescriptorTime").innerHTML = "Solid Performer"
            document.getElementById("TEATimeFinal").innerHTML = "Met Goal"
        } else if (TEATimeIsConsistent < 95 && aveTEATime >= 97) {
            document.getElementById("TEAStarScoreTime").innerHTML = "&#x2605 &#x2605 &#x2605"
            document.getElementById("TEAStarDescriptorTime").innerHTML = "Solid Performer"
            document.getElementById("TEATimeFinal").innerHTML = "Met Goal";
        } else if (aveTEATime > 30 && aveTEATime < 97) {
            document.getElementById("TEAStarScoreTime").innerHTML = "&#x2605 &#x2605"
            document.getElementById("TEAStarDescriptorTime").innerHTML = "Needs Improvement"
            document.getElementById("TEATimeFinal").innerHTML = "Missed Goal";
        } else if (aveTEATime > 0 && aveTEATime <= 30) {
            document.getElementById("TEAStarScoreTime").innerHTML = "&#x2605"
            document.getElementById("TEAStarDescriptorTime").innerHTML = "Unsatisfactory"
            document.getElementById("TEATimeFinal").innerHTML = "Missed Goal";
        }
// Add Up Total Reviews and Total Errors FOR TEA TIMELINESS

        var TotalTEATime = Number(TEAWorked1);
        document.getElementById("TEATimWorked").innerHTML = (TotalTEATime + " Cases Worked");
        var TotalTEALate = Number(TEATimeLate1);
        document.getElementById("TEATimLate").innerHTML = (TotalTEALate + " Late Cases");

//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------
//PRODUCTION SECTION
//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------
        console.log("--- PROD CALC BEGINS ---")
// GENERAL
//Set Initial App Value States
        let m1Apps = 0;
        let m1AppsProd = 0;
        let appsProdRating = 0;
//Load the Mule 1
        m1Apps = ((Number(document.getElementById("m1Time").value)) + (Number(document.getElementById("m1TimeEXP").value)) + (Number(document.getElementById("m1MCTime").value)) + (Number(document.getElementById("m1TEATime").value))) - ((Number(document.getElementById("m1reassigned").value)) + (Number(document.getElementById("m1EXPReassigned").value)) + (Number(document.getElementById("m1MCReassigned").value)) + (Number(document.getElementById("m1TEAReassigned").value)));
        console.log("APP Production Number = " + m1Apps)
        console.log("---- APP PROD LOADED -----");


//Set Initial SAR Value States
        let m1SRCMP = 0;
        let m1SRCMPProd = 0;
        let m1SRCMPRating = 0;
//Load the Mule 1
        console.log("--- LOAD SAR DATA ---")
        m1SRCMP = ((Number(document.getElementById("m1TimeSAR").value)) - (Number(document.getElementById("m1reassignedSAR").value)));
        console.log("SAR Production Number = " + m1SRCMP)
        console.log("--- SAR DATA LOADED ---")
//Set Initial MAGI Value States
        let m1MAGI = 0;
        let m1MAGIProd = 0;
        let m1MAGIRating = 0;
//Load the Mule 1
        console.log("--- LOAD MAGI MULE ---")
        m1MAGI = ((Number(document.getElementById("m1MAGITime").value)) - (Number(document.getElementById("m1MAGIReassigned").value)));
        console.log("MAGI Production Number = " + m1MAGI)
        console.log("--- LOAD COMPLETE ---")
// Compute Unit Amount (Number of work slots for which tasks can be compelted)
        console.log("--- PREP DAY CALCS ---")
        let m1Days = 0;
        let m1AdjDays = 0;
        let m1ActualDays = 0;


        m1ActualDays = Number(document.getElementById("m1AvailableDays").value);
        console.log(m1ActualDays + " m1 actual days");
        m1AdjDays = m1ActualDays * 7;
        console.log(m1AdjDays + " adjusted day value");
        m1Days = m1AdjDays / 8;
        console.log(m1Days + " Final Day Value")

        console.log("--- DAY CALCS COMPLETED ---")
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
        let totalProd;

        appsTotal = m1Apps
        if (appsTotal > 0) {
            appTotalValue = 1;
        } else {
            appTotalValue = 0;
        }
        sarTotal = m1SRCMP
        if (sarTotal > 0) {
            sarTotalValue = 1;
            console.log(sarTotalValue + " sar total value");
        } else {
            sarTotalValue = 0;
        }
        magiTotal = m1MAGI
        if (magiTotal > 0) {
            magiTotalValue = 1;
        } else {
            magiTotalValue = 0;
        }

        totalProd = (appsTotal/0.75) + (sarTotal/1.25) + (magiTotal/2);
        appsScore = (appsTotal/0.75) / totalProd;
        sarScore = (sarTotal/1.25) / totalProd;
        magiScore = (magiTotal/2) / totalProd;


        console.log(appsScore + " total pro-rated app daily need");
        console.log(sarScore + " total pro-rated sar daily need");
        console.log(magiScore + " total pro-rated magi daily need");

//------------------
//APPLICATIONS
//------------------


// output monthly production values
        console.log("Outputting App Daily Counts by Month")
        //apps
        //apps
        m1AppsProd = m1Apps / m1Days;
        // if (m1AppsProd > 0) {
        //     document.getElementById("month1-apps").innerHTML = (((m1AppsProd).toFixed(2)) + "/day");
        // } else {
        //     document.getElementById("month1-apps").innerHTML = ("---");
        // }
        console.log(m1AppsProd + "/day application production value");

        //sars
        console.log("Outputting SAR Daily Counts by Month");
        m1SRCMPProd = m1SRCMP / m1Days;
        // if (m1SRCMPProd > 0) {
        //     document.getElementById("month1-SRCMP").innerHTML = (((m1SRCMPProd).toFixed(2)) + "/day");
        // } else {
        //     document.getElementById("month1-SRCMP").innerHTML = ("---");
        // }
        console.log(m1SRCMPProd + "/day SAR production value");
        //magi
        m1MAGIProd = m1MAGI / m1Days;
        // if (m1MAGIProd > 0) {
        //     document.getElementById("month1-MAGI").innerHTML = (((m1MAGIProd).toFixed(2)) + "/day");
        // } else {
        //     document.getElementById("month1-MAGI").innerHTML = ("---");
        // }

        console.log(m1MAGIProd + "/day MAGI production value");
        console.log(m1Apps + " apps count, " + m1Days + " work days");
        console.log(m1AppsProd + "/day");
// math out the application production rating
        appsDataHeld = 0;
        if (m1AppsProd > 0) {
            appsDataHeld++;
        } else {
            m1AppsProd = 0;
        }

        appsProdRating = Math.ceil(m1AppsProd / appsDataHeld); // ;

// math out the SAR production rating
        sarDataHeld = 0;
        if (m1SRCMPProd > 0) {
            sarDataHeld++;
        } else {
            m1SRCMPProd = 0;
        }

        m1SRCMPRating = Math.ceil(m1SRCMPProd / sarDataHeld);
        console.log(m1SRCMPRating + " SAR RATING " + sarDataHeld + " SAR DATA HELD");

// math out the magi production rating
        magiDataHeld = 0;
        if (m1MAGIProd > 0) {
            magiDataHeld++;
        } else {
            m1MAGIProd = 0;
        }

        m1MAGIRating = Math.ceil(m1MAGIProd / magiDataHeld);
        console.log(m1MAGIRating + " magi RATING " + magiDataHeld + " magi DATA HELD");

//------------------
//OUTPUT TO PGCS SUMMARY SECTION
//------------------
//measure APP PRODUCTION against the standard
        console.log("--- Apps Prod Ratings Completed ---")
        appsProdRating = Math.ceil(m1AppsProd / appsDataHeld); // ;
        console.log((6*appsScore) + " daily app value for an S RATING")
        Math.ceil(appsProdRating);
        console.log(appsProdRating + " /day measured SNAP output");
// measure COMBINED app production and report score
        if (appTotalValue > 0) {
            if (appsProdRating > 0 && appsProdRating < (3.01 * appsScore)) {
                document.getElementById("prodAppStarScore").innerHTML = "&#x2605"
                document.getElementById("prodAppStarDescriptor").innerHTML = "Unsatisfactory"
            } else if (appsProdRating >= (3.01 * appsScore) && appsProdRating < (6 * appsScore)) {
                document.getElementById("prodAppStarScore").innerHTML = "&#x2605 &#x2605"
                document.getElementById("prodAppStarDescriptor").innerHTML = "Needs Improvement"
            } else if (appsProdRating >= (6 * appsScore) && appsProdRating < (10 * appsScore)) {
                document.getElementById("prodAppStarScore").innerHTML = "&#x2605 &#x2605 &#x2605"
                document.getElementById("prodAppStarDescriptor").innerHTML = "Solid Performer"
            } else if (appsProdRating >= (10 * appsScore)) {
                document.getElementById("prodAppStarScore").innerHTML = "&#x2605 &#x2605 &#x2605"
                document.getElementById("prodAppStarDescriptor").innerHTML = "Solid Performer"
            } else {
                console.log("No Data")
            }
        } else {
            console.log("No Apps Production Reported")
        }

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
        console.log(10 * sarScore + " daily SAR value for an S RATING");
        Math.ceil(m1SRCMPRating);
        console.log(m1SRCMPRating + " /day measured output");
        if (sarTotalValue > 0) {
            if (m1SRCMPRating > 0 && m1SRCMPRating < (7 * sarScore)) {
                document.getElementById("prodSARStarScore").innerHTML = "&#x2605"
                document.getElementById("prodSARStarDescriptor").innerHTML = "Unsatisfactory"
            } else if (m1SRCMPRating >= (7 * sarScore) && m1SRCMPRating < (10 * sarScore)) {
                document.getElementById("prodSARStarScore").innerHTML = "&#x2605 &#x2605"
                document.getElementById("prodSARStarDescriptor").innerHTML = "Needs Improvement"
            } else if (m1SRCMPRating >= (10 * sarScore) && m1SRCMPRating < (13 * sarScore)) {
                document.getElementById("prodSARStarScore").innerHTML = "&#x2605 &#x2605 &#x2605"
                document.getElementById("prodSARStarDescriptor").innerHTML = "Solid Performer"
            } else if (m1SRCMPRating >= (13 * sarScore)) {
                document.getElementById("prodSARStarScore").innerHTML = "&#x2605 &#x2605 &#x2605"
                document.getElementById("prodSARStarDescriptor").innerHTML = "Solid Performer"
            } else {
                console.log("No Data")
            }
        } else {
            console.log("No SAR Data Reported")
        }

// MEASURE MONTHLY SAR AGAINST PROD AND REPORT BACK
// MONTH 1
// if (sarTotalValue > 0) {
// if (m1SRCMPProd >0 && m1SRCMPProd >= (6 * sarScore)) {
//     document.getElementById("m1SRCMPProdMet").innerHTML = "Prod Met"
//   } else if(m1SRCMPProd < (6 * sarScore) && m1SRCMPProd > 0) {
//       document.getElementById("m1SRCMPProdMet").innerHTML = "Prod NOT Met"
//   } else {
//   console.log("No Data SARM1")
// }} else {
//     console.log("No SRCMP Production Reported")
// }

        console.log("--- SRCMP Prod Ratings Completed ---")

//------------------
//MAGI Tasks
//------------------
        console.log("--- MAGI PROD RATING CALCS ---")
        console.log(m1MAGI + " MAGI count, " + m1Days + " work days");
        console.log(m1MAGIProd + "/day");
        console.log(magiTotalValue + " magi total value");
// math out the application production rating

//------------------
//OUTPUT TO PGCS SUMMARY SECTION
//------------------
//measure MAGI PRODUCTION against the standard
        console.log(16 * magiScore + " daily MAGI score for an S RATING");
        console.log("Daily MAGI Production Value Being Assessed = " + m1MAGIRating);
        Math.ceil(m1MAGIRating);
        console.log(m1MAGIRating + " /day MAGI measured output");

        if (magiTotalValue > 0) {
            if (m1MAGIRating > 0 && m1MAGIRating < (13 * magiScore)) {
                document.getElementById("prodMAGIStarScore").innerHTML = "&#x2605"
                document.getElementById("prodMAGIStarDescriptor").innerHTML = "Unsatisfactory"
            } else if (m1MAGIRating >= (13 * magiScore) && m1MAGIRating < (16 * magiScore)) {
                document.getElementById("prodMAGIStarScore").innerHTML = "&#x2605 &#x2605"
                document.getElementById("prodMAGIStarDescriptor").innerHTML = "Needs Improvement"
            } else if (m1MAGIRating >= (16 * magiScore) && m1MAGIRating < (19 * magiScore)) {
                document.getElementById("prodMAGIStarScore").innerHTML = "&#x2605 &#x2605 &#x2605"
                document.getElementById("prodMAGIStarDescriptor").innerHTML = "Solid Performer"
            } else if (m1MAGIRating >= (19 * magiScore)) {
                document.getElementById("prodMAGIStarScore").innerHTML = "&#x2605 &#x2605 &#x2605"
                document.getElementById("prodMAGIStarDescriptor").innerHTML = "Solid Performer"
            } else {
                console.log("No Data")
            }
        } else {
            console.log("No MAGI Data Reported");
        }
// MEASURE MONTHLY magi AGAINST PROD AND REPORT BACK
// MONTH 1
// if (magiTotalValue > 0) {
// if (m1MAGIProd >0 && m1MAGIProd >= (16 * magiScore)) {
//     document.getElementById("m1MAGIProdMet").innerHTML = "Prod Met"
//   } else if(m1MAGIProd < (16 * magiScore) && m1MAGIProd > 0) {
//       document.getElementById("m1MAGIProdMet").innerHTML = "Prod NOT Met"
//   } else {
//   console.log("No Data magiM1")
// }} else {
//     console.log("No MAGI Production Reported")
// }

        console.log("--- MAGI Prod Ratings Completed ---")

        console.log("END OF LINE")
    }
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

