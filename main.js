// 버튼 불러오기
var button = document.querySelector('BT1');
var button_two_check1 = 0;
var button_two_check2 = 0;
var button_two_check3 = 0;
// 라디오 버튼 불러오기
var changeS1 = document.getElementById('changeS1');
var changeC1 = document.getElementById('changeC1');
var changeD1 = document.getElementById('changeD1');
var changeA1 = document.getElementById('changeA1');
var changeB1 = document.getElementById('changeB1');

// 라디오버튼과 그래프 연결
var graph1 = document.getElementById("graph1");
var graph2 = document.getElementById("graph2");
var graph3 = document.getElementById("graph3");

// 과 불러오기
var S = document.getElementById("change1");
var C = document.getElementById("change2");
var D = document.getElementById("change3");
var A = document.getElementById("change4");
var B = document.getElementById("change5");

//설정 영역 불러오기
var change_two = document.getElementById('change_two');
var change_one = document.getElementById('change_one');
var change_thr = document.getElementById('change_thr');

//prompt로 점수 변경


// 버튼 클릭시 select 열고 닫기
function onButtonClick() {

    switch (button_two_check1) {
        case 0:
            change_one.style.display = "block";
            button_two_check1 = 1;

            if (button_two_check2 == 1 || button_two_check3 == 1) {
                button_two_check2 = 0
                button_two_check3 = 0
                change_two.style.display = "none";
                change_thr.style.display = "none";
            }

            break;
        case 1:
            change_one.style.display = "none";
            button_two_check1 = 0;
            var i = document.getElementById("score1");
            var value3 = prompt("점수를 입력해");
            i.innerText = value3
            break;
    }
    // change.style.display = "block"        button_two_checks = false
    // change.style.display = "none"
}
function onButtonClick2() {

    switch (button_two_check2) {
        case 0:
            change_two.style.display = "block";
            button_two_check2 = 1;

            if (button_two_check1 == 1 || button_two_check3 == 1) {
                button_two_check1 = 0
                button_two_check3 = 0
                change_one.style.display = "none";
                change_thr.style.display = "none";
            }

            break;
        case 1:
            change_two.style.display = "none";
            button_two_check2 = 0;
            var i = document.getElementById("score2");
            var value3 = prompt("점수를 입력해");
            i.innerText = value3
            break;
    }
    // change.style.display = "block"        button_two_checks = false
    // change.style.display = "none"
}
function onButtonClick3() {
    
    switch (button_two_check3) {
        case 0:
            change_thr.style.display = "block";
            button_two_check3 = 1;

            if (button_two_check1 == 1 || button_two_check2 == 1) {
                button_two_check1 = 0
                button_two_check2 = 0
                change_one.style.display = "none";
                change_two.style.display = "none";
            }
            break;
        case 1:
            change_thr.style.display = "none";
            button_two_check3 = 0;
            var i = document.getElementById("score3");
            var value3 = prompt("점수를 입력해");
            i.innerText = value3
            break;
    }
    
    
    // change.style.display = "block"        button_two_checks = false
    // change.style.display = "none"
}

//색 변경 라디오 영역

function changeColor(id) {

    switch (id) {
            //소프트웨어과 막대 변경
        case 'S1':
            graph1.style.backgroundColor = "#50BCDF";
            break;
        case 'S2':
            graph2.style.backgroundColor = "#50BCDF";
            break;
        case 'S3':
            graph3.style.backgroundColor = "#50BCDF";
            break;

            //정보통신과 막대 변경
        case 'C1':
            graph1.style.backgroundColor = "#C3FA6E";
            break;
        case 'C2':
            graph2.style.backgroundColor = "#C3FA6E";
            break;
        case 'C3':
            graph3.style.backgroundColor = "#C3FA6E";
            break;

            //디자인과 막대 변경
        case 'D1':
            graph1.style.backgroundColor = "#ffd400";
            break;
        case 'D2':
            graph2.style.backgroundColor = "#ffd400";
            break;
        case 'D3':
            graph3.style.backgroundColor = "#ffd400 ";
            break;

            //만화영상과 막대 변경
        case 'A1':
            graph1.style.backgroundColor = "#8977AD";
            break;
        case 'A2':
            graph2.style.backgroundColor = "#8977AD";
            break;
        case 'A3':
            graph3.style.backgroundColor = "#8977AD";
            break;

            //바이오푸드 막대 변경
        case 'B1':
            graph1.style.backgroundColor = "#CE9E60";
            break;
        case 'B2':
            graph2.style.backgroundColor = "#CE9E60";
            break;
        case 'B3':
            graph3.style.backgroundColor = "#CE9E60";
            break;
    }
}

