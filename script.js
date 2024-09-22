const texts = [
    "Hello Future Panthers!",
    "Hail to Pitt!",
    "Go Panthers!",
    "Welcome!",
];

// Function to get a random text
function getRandomText() {
    const randomIndex = Math.floor(Math.random() * texts.length);
    return texts[randomIndex];
}

const randomSayingElement = document.getElementById('text');
randomSayingElement.innerHTML = `<strong style="color: #FFB81C">${getRandomText()}</strong>`;

function year1classes() {
    document.getElementById('changeTitle').innerHTML = '<strong>Freshman Classes:</strong>';
    document.getElementById('changeText').innerHTML = `
        Fall Sample Schedule:
        <ul>
         - CMPINF 0401 - INTERMEDIATE PROGRAMMING (4 cr) <br>
       - MATH 0220 - ANALYTIC GEOMETRY AND CALCULUS 1 (4 cr) <br>
           - CMPINF 0001 - SCI FIRST-YEAR SEMINAR (1 cr) <br>
            - CMPINF 0010 - BIG IDEAS IN COMPUTING AND INFORMATION (4 cr) <br>
            - ENGCMP 0200 - SEMINAR IN COMPOSITION (3 cr) <br>
        </ul>
 <br>
         Spring Sample Schedule:
        <ul>
            - CMPINF 0401 - INTERMEDIATE PROGRAMMING (4 cr) <br>
            - MATH 0220 - ANALYTIC GEOMETRY AND CALCULUS 1 (4 cr) <br>
           - CMPINF 0001 - SCI FIRST-YEAR SEMINAR (1 cr) <br>
            - CMPINF 0010 - BIG IDEAS IN COMPUTING AND INFORMATION (4 cr) <br>
            - ENGCMP 0200 - SEMINAR IN COMPOSITION (3 cr) <br>
        </ul>
    `;

    showMoreInfoButton();

}


function year2classes() {
    document.getElementById('changeTitle').innerHTML = '<strong>Sophomore Classes:</strong>'
    document.getElementById('changeText').innerHTML = `
    Fall Sample Schedule:
    <ul>
        - CS 1503 - MATHEMATICAL FOUNDATIONS OF MACHINE LEARNING
(4 cr) <br>
        - CS 0447 - COMPUTER ORGANIZATION AND ASSEMBLY LANGUAGE
 (3 cr) <br>
        - GER (3 cr) <br>
        - Elective (3 cr) <br>
        - Elective (3 cr) <br>
    </ul>
<br>
     Spring Sample Schedule:
    <ul>
        - CS 0449 - INTRODUCTION TO SYSTEMS SOFTWARE
 (3 cr)<br>
      - CS 1501 - ALGORITHMS AND DATA STRUCTURES 2 (3r)
 <br>
        - GER (3 cr) <br>
        - GER (3 cr)<br>
        - Elective (3 cr)<br>
    </ul>
    `;

    showMoreInfoButton();

}



function year3classes() {
    document.getElementById('changeTitle').innerHTML = '<strong>Junior Classes:</strong>'
    document.getElementById('changeText').innerHTML = `
    Fall Sample Schedule:
    <ul>
        - CS 1502  (3 cr) <br>
        - CS UL 1 (3 cr) <br>
        - GER (3 cr) <br>
        - GER (3 cr)  <br>
        - Elective (3 cr)<br> 
    </ul>
<br>
     Spring Sample Schedule:
    <ul>
        - CS UL 2 (3 cr)<br>
        - CS UL 3 (3 cr) <br>
            - GER (3 cr) <br>
        - GER (3 cr)  <br>
        - Elective (3 cr) <br>
    </ul>
    `;

    showMoreInfoButton();

}

function year4classes() {
    document.getElementById('changeTitle').innerHTML = '<strong>Senior Classes:</strong>'
    document.getElementById('changeText').innerHTML = `
    Fall Sample Schedule:
    <ul>
        - CS UL 4 (3 cr) <br>
       - CS UL 5 (3 cr) <br>
  - Capstone (3 cr) <br>
       - GER (3 cr)<br>
      - Elective (3 cr)<br>
    </ul>
<br>
     Spring Sample Schedule:
    <ul>
        - CS UL 6 (3 cr)  <br>
    - CS UL 7 or Elective (3 cr) <br>
     -  GER (3 cr) <br>
     - Elective (3 cr) <br>
       - Elective (3 cr)  <br>
    </ul>
    `;

    showMoreInfoButton();

}

function generalinfo() {
    document.getElementById('changeTitle').innerHTML = '<strong>Computer Science Information</strong>';
    document.getElementById('changeText').innerHTML = ` 
    The University of Pittsburgh offers over 100 majors. The department of Computer Science is part of the School of
     Computing and Information. The computer science major requires a total of 54 credits distributed across computer science courses, mathematics co-requisite
     courses, and a capstone experience. They must also take classes on systems, discrete math, and statistics as well as general education classes. 
       In addition, all Computer Science majors must complete a capstone experience prior to graduation. <br>
    Some of the faculty includes:
 <br> Dr. Amy Babay, an assistant professor who has a PhD from Johns Hopkins University.
<br> Dr. Jacob Biehl, a professor who was previously a research assistant.
<br> Dr. Childers, who is the dean of the School of Computing and Information.`

    hideMoreInfoButton();
}

function showMoreInfoButton() {
    document.getElementById('moreInfoButton').style.display = 'inline-block';
}

function hideMoreInfoButton() {
    document.getElementById('moreInfoButton').style.display = 'none';
}
