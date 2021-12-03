var historyRank = document.getElementsByClassName("history_R");
var historySelect = document.getElementsByClassName("history_X");

var cultureRank = document.getElementsByClassName("culture_R");
var cultureSelect = document.getElementsByClassName("culture_X");

var startupRank = document.getElementsByClassName("startup_R");
var startupSelect = document.getElementsByClassName("startup_X");

var scienceRank = document.getElementsByClassName("science_R");
var scienceSelect = document.getElementsByClassName("science_X");

var worldRank = document.getElementsByClassName("world_R");
var worldSelect = document.getElementsByClassName("world_X");

for (var j = 0; j < 31; j++){
    historySelect[j].addEventListener("click", movehistory);
    cultureSelect[j].addEventListener("click", moveculture);
    startupSelect[j].addEventListener("click", movestartup);
    scienceSelect[j].addEventListener("click", movescience);
    worldSelect[j].addEventListener("click", moveworld);
}

function movehistory(infor){
    for (var j = 0; j < 31; j++){
        var historytem = document.createElement("div");
        historytem.innerHTML = infor.target.innerHTML;
        historytem.style.color = "#34495e";
        historyRank[j].append(historytem);
    }
    infor.target.remove();
}

function moveculture(infor){
    for (var j = 0; j < 31; j++){
        var culturetem = document.createElement("div");
        culturetem.innerHTML = infor.target.innerHTML;
        culturetem.style.color = "#34495e";
        cultureRank[j].append(culturetem);
    }
    infor.target.remove();
}

function movestartup(infor){
    for (var j = 0; j < 31; j++){
        var startuptem = document.createElement("div");
        startuptem.innerHTML = infor.target.innerHTML;
        startuptem.style.color = "#34495e";
        startupRank[j].append(startuptem);
    }
    infor.target.remove();
}

function movescience(infor){
    for (var j = 0; j < 31; j++){
        var sciencetem = document.createElement("div");
        sciencetem.innerHTML = infor.target.innerHTML;
        sciencetem.style.color = "#34495e";
        scienceRank[j].append(sciencetem);
    }
    infor.target.remove();
}

function moveworld(infor){
    for (var j = 0; j < 31; j++){
        var worldtem = document.createElement("div");
        worldtem.innerHTML = infor.target.innerHTML;
        worldtem.style.color = "#34495e";
        worldRank[j].append(worldtem);
    }
    infor.target.remove();
}
