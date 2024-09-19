const texts = [
    "Hello Future Panthers!",
    "Hail to Pitt!",
    "Go Panthers!",
    "H2P!",
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
    document.getElementById('changeTitle').innerText = 'Freshman classes:';
    document.getElementById('changeText').innerHTML = `
        Fall Sample Schedule:
        <ul>
            <li> CMPINF 0401 - INTERMEDIATE PROGRAMMING (4 cr)</li>
            <li> MATH 0220 - ANALYTIC GEOMETRY AND CALCULUS 1 (4 cr) </li>
            <li> CMPINF 0001 - SCI FIRST-YEAR SEMINAR (1 cr)</li>
            <li> CMPINF 0010 - BIG IDEAS IN COMPUTING AND INFORMATION (4 cr)</li>
            <li> ENGCMP 0200 - SEMINAR IN COMPOSITION (3 cr)</li>
        </ul>
 <br>
         Spring Sample Schedule:
        <ul>
            <li> CMPINF 0401 - INTERMEDIATE PROGRAMMING (4 cr)</li>
            <li> MATH 0220 - ANALYTIC GEOMETRY AND CALCULUS 1 (4 cr) </li>
            <li> CMPINF 0001 - SCI FIRST-YEAR SEMINAR (1 cr)</li>
            <li> CMPINF 0010 - BIG IDEAS IN COMPUTING AND INFORMATION (4 cr)</li>
            <li> ENGCMP 0200 - SEMINAR IN COMPOSITION (3 cr)</li>
        </ul>
    `;
}


function year2classes() {
    document.getElementById('changeTitle').innerText = 'Sophomore classes'
    document.getElementById('changeText').innerHTML = `
    Fall Sample Schedule:
    <ul>
        <li> CMPINF 0401 - INTERMEDIATE PROGRAMMING (4 cr)</li>
        <li> MATH 0220 - ANALYTIC GEOMETRY AND CALCULUS 1 (4 cr) </li>
        <li> CMPINF 0001 - SCI FIRST-YEAR SEMINAR (1 cr)</li>
        <li> CMPINF 0010 - BIG IDEAS IN COMPUTING AND INFORMATION (4 cr)</li>
        <li> ENGCMP 0200 - SEMINAR IN COMPOSITION (3 cr)</li>
    </ul>
<br>
     Spring Sample Schedule:
    <ul>
        <li> CMPINF 0401 - INTERMEDIATE PROGRAMMING (4 cr)</li>
        <li> MATH 0220 - ANALYTIC GEOMETRY AND CALCULUS 1 (4 cr) </li>
        <li> CMPINF 0001 - SCI FIRST-YEAR SEMINAR (1 cr)</li>
        <li> CMPINF 0010 - BIG IDEAS IN COMPUTING AND INFORMATION (4 cr)</li>
        <li> ENGCMP 0200 - SEMINAR IN COMPOSITION (3 cr)</li>
    </ul>
    `;
}



function year3classes() {
    document.getElementById('changeTitle').innerText = 'Junior Classes'
    document.getElementById('changeText').innerHTML = `
    Fall Sample Schedule:
    <ul>
        <li> CMPINF 0401 - INTERMEDIATE PROGRAMMING (4 cr)</li>
        <li> MATH 0220 - ANALYTIC GEOMETRY AND CALCULUS 1 (4 cr) </li>
        <li> CMPINF 0001 - SCI FIRST-YEAR SEMINAR (1 cr)</li>
        <li> CMPINF 0010 - BIG IDEAS IN COMPUTING AND INFORMATION (4 cr)</li>
        <li> ENGCMP 0200 - SEMINAR IN COMPOSITION (3 cr)</li>
    </ul>
<br>
     Spring Sample Schedule:
    <ul>
        <li> CMPINF 0401 - INTERMEDIATE PROGRAMMING (4 cr)</li>
        <li> MATH 0220 - ANALYTIC GEOMETRY AND CALCULUS 1 (4 cr) </li>
        <li> CMPINF 0001 - SCI FIRST-YEAR SEMINAR (1 cr)</li>
        <li> CMPINF 0010 - BIG IDEAS IN COMPUTING AND INFORMATION (4 cr)</li>
        <li> ENGCMP 0200 - SEMINAR IN COMPOSITION (3 cr)</li>
    </ul>
    `;
}

function year4classes() {
    document.getElementById('changeTitle').innerText = 'Senior Classes'
    document.getElementById('changeText').innerHTML = `
    Fall Sample Schedule:
    <ul>
        <li> CMPINF 0401 - INTERMEDIATE PROGRAMMING (4 cr)</li>
        <li> MATH 0220 - ANALYTIC GEOMETRY AND CALCULUS 1 (4 cr) </li>
        <li> CMPINF 0001 - SCI FIRST-YEAR SEMINAR (1 cr)</li>
        <li> CMPINF 0010 - BIG IDEAS IN COMPUTING AND INFORMATION (4 cr)</li>
        <li> ENGCMP 0200 - SEMINAR IN COMPOSITION (3 cr)</li>
    </ul>
<br>
     Spring Sample Schedule:
    <ul>
        <li> CMPINF 0401 - INTERMEDIATE PROGRAMMING (4 cr)</li>
        <li> MATH 0220 - ANALYTIC GEOMETRY AND CALCULUS 1 (4 cr) </li>
        <li> CMPINF 0001 - SCI FIRST-YEAR SEMINAR (1 cr)</li>
        <li> CMPINF 0010 - BIG IDEAS IN COMPUTING AND INFORMATION (4 cr)</li>
        <li> ENGCMP 0200 - SEMINAR IN COMPOSITION (3 cr)</li>
    </ul>
    `;
}

function generalinfo() {
    document.getElementById('changeTitle').innerText = 'Major Info'
    document.getElementById('changeText').innerHTML = ` 
    The University of Pittsburgh offers over 100 majors. The department of Computer Science is part of the School of
     Computing and Information. The computer science major requires a total of 54 credits distributed across computer science courses, mathematics co-requisite
     courses, and a capstone experience. They must also take classes on systems, discrete math, and statistics as well as general education classes. 
       In addition, all Computer Science majors must complete a capstone experience prior to graduation. <br>
    Some of the faculty includes:
 <br> Dr. Amy Babay, an assistant professor who has a PhD from Johns Hopkins University.
<br> Dr. Jacob Biehl, a professor who was previously a research assistant.
<br> Dr. Childers, who is the dean of the School of Computing and Information.`
}