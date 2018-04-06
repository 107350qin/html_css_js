/**
 * Created by Administrator on 2017/12/26.
 */

var inter;
var interToRight;
var teacherContent = document.getElementById('teacherContent');
var marketContent = document.getElementById('marketContent');
var codeContent = document.getElementById('codeContent');
window.onload = function () {
    inter = setInterval(function () {
        move(teacherContent);
    }, 10);

    interToRight = setInterval(function () {
        moveToRight(marketContent);
        moveToRight(codeContent);
    }, 10);
}

//实现market的向有滑动
function moveToRight(marketContent) {
    var left = marketContent.style.marginLeft;
    left = (left == '' ? 0 : parseInt(left));
    left++;
    //left=left+765;
    if (left == 765) {
        clearInterval(interToRight);
    }
    marketContent.style.marginLeft = left + 'px';
}

//实现老师的轮播
function move(teacherContent) {
    var left = teacherContent.style.marginLeft;
    left = (left == '' ? 0 : parseInt(left));
    left--;
    if (left == -1700) {
        left = 0;
    }
    teacherContent.style.marginLeft = left + 'px';
}
function next() {
    var content = document.getElementById('homeContent');
    var left = content.style.marginLeft;
    var er = document.getElementById('er');
    var yi = document.getElementById('yi');
    left = (left == "" ? 0 : parseInt(left));
    if (left == 0) {
        content.style.marginLeft = left - 1400 + "px";
        yi.style.display = 'none';
        er.style.display = 'block';
    }
    if (left == -1400) {
        content.style.marginLeft = 0 + "px";
        yi.style.display = 'block';
        er.style.display = 'none';
    }
}

//鼠标悬停老师
function stopShowTeacher1() {
    clearInterval(inter);
    var teacherP1 = document.getElementById('teacherP1');
    teacherP1.style.display = 'block';
    teacherP1.style.background = 'rgba(134,137,135,0.5)';
}

//鼠标移开开始移动
function startShowTeacher1() {
    var teacherP1 = document.getElementById('teacherP1');
    teacherP1.style.display = 'none';
    inter = setInterval(function () {
        move(teacherContent);
    }, 10);
}

function stopShowTeacher2() {
    clearInterval(inter);
    var teacherP1 = document.getElementById('teacherP2');
    teacherP1.style.display = 'block';
    teacherP1.style.background = 'rgba(134,137,135,0.5)';
}

//鼠标移开开始移动
function startShowTeacher2() {
    var teacherP1 = document.getElementById('teacherP2');
    teacherP1.style.display = 'none';
    inter = setInterval(function () {
        move(teacherContent);
    }, 10);
}

function stopShowTeacher3() {
    clearInterval(inter);
    var teacherP1 = document.getElementById('teacherP3');
    teacherP1.style.display = 'block';
    teacherP1.style.background = 'rgba(134,137,135,0.5)';
}

//鼠标移开开始移动
function startShowTeacher3() {
    var teacherP1 = document.getElementById('teacherP3');
    teacherP1.style.display = 'none';
    inter = setInterval(function () {
        move(teacherContent);
    }, 10);
}
function stopShowTeacher4() {
    clearInterval(inter);
    var teacherP1 = document.getElementById('teacherP4');
    teacherP1.style.display = 'block';
    teacherP1.style.background = 'rgba(134,137,135,0.5)';
}
//鼠标移开开始移动
function startShowTeacher4() {
    var teacherP1 = document.getElementById('teacherP4');
    teacherP1.style.display = 'none';
    inter = setInterval(function () {
        move(teacherContent);
    }, 10);
}
function stopShowTeacher5() {
    clearInterval(inter);
    var teacherP1 = document.getElementById('teacherP5');
    teacherP1.style.display = 'block';
    teacherP1.style.background = 'rgba(134,137,135,0.5)';
}
//鼠标移开开始移动
function startShowTeacher5() {
    var teacherP1 = document.getElementById('teacherP5');
    teacherP1.style.display = 'none';
    inter = setInterval(function () {
        move(teacherContent);
    }, 10);
}

//---------------------------------------------------------
function stopShowTeacher6() {
    clearInterval(inter);
    var teacherP1 = document.getElementById('teacherP6');
    teacherP1.style.display = 'block';
    teacherP1.style.background = 'rgba(134,137,135,0.5)';
}
//鼠标移开开始移动
function startShowTeacher6() {
    var teacherP1 = document.getElementById('teacherP6');
    teacherP1.style.display = 'none';
    inter = setInterval(function () {
        move(teacherContent);
    }, 10);
}

function stopShowTeacher7() {
    clearInterval(inter);
    var teacherP1 = document.getElementById('teacherP7');
    teacherP1.style.display = 'block';
    teacherP1.style.background = 'rgba(134,137,135,0.5)';
}
//鼠标移开开始移动
function startShowTeacher7() {
    var teacherP1 = document.getElementById('teacherP7');
    teacherP1.style.display = 'none';
    inter = setInterval(function () {
        move(teacherContent);
    }, 10);
}

function stopShowTeacher8() {
    clearInterval(inter);
    var teacherP1 = document.getElementById('teacherP8');
    teacherP1.style.display = 'block';
    teacherP1.style.background = 'rgba(134,137,135,0.5)';
}
//鼠标移开开始移动
function startShowTeacher8() {
    var teacherP1 = document.getElementById('teacherP8');
    teacherP1.style.display = 'none';
    inter = setInterval(function () {
        move(teacherContent);
    }, 10);
}
function stopShowTeacher9() {
    clearInterval(inter);
    var teacherP1 = document.getElementById('teacherP9');
    teacherP1.style.display = 'block';
    teacherP1.style.background = 'rgba(134,137,135,0.5)';
}
//鼠标移开开始移动
function startShowTeacher9() {
    var teacherP1 = document.getElementById('teacherP9');
    teacherP1.style.display = 'none';
    inter = setInterval(function () {
        move(teacherContent);
    }, 10);
}
function stopShowTeacher10() {
    clearInterval(inter);
    var teacherP1 = document.getElementById('teacherP10');
    teacherP1.style.display = 'block';
    teacherP1.style.background = 'rgba(134,137,135,0.5)';
}
//鼠标移开开始移动
function startShowTeacher10() {
    var teacherP1 = document.getElementById('teacherP10');
    teacherP1.style.display = 'none';
    inter = setInterval(function () {
        move(teacherContent);
    }, 10);
}


//----------------------------------------------------------------------
//页面加载之后划到右边
function slideRight() {
    alert("he");
}






















