let user = prompt(
  "Hi welcome to my CGPA calculator!, Can I have your name please?"
);
if (user !== "" && user !== null) {
  document.getElementById("name").textContent = `Current User: ${user}`;
} else {
  alert(
    "You did not enter your name!, You can refresh the page to enter your name"
  );
  document.getElementById("name").textContent = `Current User: ----`;
}

let gradePoints = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
  E: 1,
  F: 0,
};

// THE FIRST SEMESTER
let coursesFirst = [];
let unitsFirst = [];
let gradesFirst = [];

document.getElementById("submit").addEventListener("click", () => {
  let courseName = document.querySelector("#course-code").value;
  let courseUnits = parseInt(document.querySelector("#course-units").value);
  let gradeScores = document.querySelector("#grade").value.toUpperCase();

  if (courseName !== "" && courseUnits !== "" && gradeScores !== "") {
    coursesFirst.push(courseName);
    document.querySelector("#course-code").value = "";
    if (courseUnits <= 5 && courseUnits !== 0) {
      unitsFirst.push(courseUnits);
      document.querySelector("#course-units").value = "";
    } else {
      alert("Course units should be between 1 and 5");
      document.querySelector("#course-units").value = "";
    }

    gradesFirst.push(gradeScores);
    document.querySelector("#grade").value = "";
  } else {
    alert("Please complete all the fields in the First Semester");
  }
});

document.getElementById("calc").addEventListener("click", () => {
  // for (let grade of grades) {
  //   if (Object.keys(gradePoints).includes(grade)) {
  //     refined.push(gradePoints[grade]);
  //   }
  // }

  if (unitsFirst.length !== 0 && gradesFirst.length !== 0) {
    let total = [];
    // a more shorter code to get the same result of commented code above 🙂
    let refinedGrades = gradesFirst.map((value) => {
      return gradePoints[value];
    });

    for (let index = 0; index < unitsFirst.length; index++) {
      total.push(unitsFirst[index] * refinedGrades[index]);
    }
    // calculating the total units given for a semester
    const totalUnits = unitsFirst.reduce((cur, acc) => {
      return cur + acc;
    });
    const finalAns = total.reduce((cur, acc) => {
      return cur + acc;
    });
    document.getElementById("gpa_block").style.display = "block";
    document.querySelector(".gpa").textContent = finalAns / totalUnits;
  } else {
    alert("You have no data inputted yet for the 1st semester!");
  }
});

// THE SECOND SEMESTER
let coursesSecond = [];
let unitsSecond = [];
let gradesSecond = [];

document.getElementById("submit2").addEventListener("click", () => {
  let courseName = document.querySelector("#course-code2").value;
  let courseUnits = parseInt(document.querySelector("#course-units2").value);
  let gradeScores = document.querySelector("#grade2").value.toUpperCase();
  if (courseName !== "" && courseUnits !== "" && gradeScores !== "") {
    coursesSecond.push(courseName);
    document.querySelector("#course-code2").value = "";
    if (courseUnits <= 5 && courseUnits !== 0) {
      unitsSecond.push(courseUnits);
      document.querySelector("#course-units2").value = "";
    } else {
      alert("Course units should be between 1 and 5");
      document.querySelector("#course-units2").value = "";
    }

    gradesSecond.push(gradeScores);
    document.querySelector("#grade2").value = "";
  } else {
    alert("Please complete all the fields in the Second Semester");
  }
});

document.getElementById("calc2").addEventListener("click", () => {
  if (unitsSecond.length !== 0 && gradesSecond.length !== 0) {
    let total_second = [];
    // a more shorter code to get the same result of commented code above 🙂
    let refinedGrades = gradesSecond.map((value) => {
      return gradePoints[value];
    });

    for (let index = 0; index < unitsSecond.length; index++) {
      total_second.push(unitsSecond[index] * refinedGrades[index]);
    }
    const totalUnits2 = unitsSecond.reduce((cur, acc) => {
      return cur + acc;
    });
    const finalAns2 = total_second.reduce((cur, acc) => {
      return cur + acc;
    });
    document.getElementById("gpa_block2").style.display = "block";
    document.querySelector(".gpa2").textContent = finalAns2 / totalUnits2;
  } else {
    alert("You have no data inputted yet for the 2nd semester!");
  }
});

// CALCULATION OF CPGA
document.getElementById("cgpa").addEventListener("click", () => {
  let firstGpa = parseInt(document.querySelector(".gpa").textContent);
  let secondGpa = parseInt(document.querySelector(".gpa2").textContent);
  if (!isNaN(firstGpa) && !isNaN(secondGpa)) {
    document.querySelector(
      ".cgpa"
    ).textContent = `${user}, Your CGPA for this session is ${
      (firstGpa + secondGpa) / 2
    }`;
  } else {
    alert(
      "You need to calculate your GPA's in the 1st and 2nd semester first!"
    );
  }
});
