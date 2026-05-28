function calculateGrade(qar, exam, examLimit) {

    // Convert exam score based on exam limit
    let convertedExam = (Number(exam) / examLimit) * 100;

    // Compute raw grade
    let rawGrade = (Number(qar) * 0.4) + (convertedExam * 0.6);

    // Convert to 70-100 grading scale
    let finalGrade = 70 + (rawGrade * 0.30);

    // Maximum grade is 100
    if (finalGrade > 100) {
        finalGrade = 100;
    }

    return finalGrade.toFixed(2);
}

function computeGrades() {

    let name = document.getElementById("studentName").value;

    // Prelim
    let prelimQAR = document.getElementById("prelimQAR").value;
    let prelimExam = document.getElementById("prelimExam").value;

    // Midterm
    let midtermQAR = document.getElementById("midtermQAR").value;
    let midtermExam = document.getElementById("midtermExam").value;

    // Final
    let finalQAR = document.getElementById("finalQAR").value;
    let finalExam = document.getElementById("finalExam").value;

    // Compute Grades
    let prelimGrade = calculateGrade(prelimQAR, prelimExam, 40);
    let midtermGrade = calculateGrade(midtermQAR, midtermExam, 50);
    let finalGrade = calculateGrade(finalQAR, finalExam, 60);

    // Display Student Name
    document.getElementById("reportName").innerText = name;

    // Prelim Report
    document.getElementById("rPrelimQAR").innerText = prelimQAR;
    document.getElementById("rPrelimExam").innerText = prelimExam + " / 40";
    document.getElementById("rPrelimGrade").innerText = prelimGrade;

    // Midterm Report
    document.getElementById("rMidtermQAR").innerText = midtermQAR;
    document.getElementById("rMidtermExam").innerText = midtermExam + " / 50";
    document.getElementById("rMidtermGrade").innerText = midtermGrade;

    // Final Report
    document.getElementById("rFinalQAR").innerText = finalQAR;
    document.getElementById("rFinalExam").innerText = finalExam + " / 60";
    document.getElementById("rFinalGrade").innerText = finalGrade;
}