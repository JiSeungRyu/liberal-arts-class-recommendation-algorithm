var historyRank = document.getElementsByClassName("history_R");
var historySelect = document.getElementsByClassName("history_X");
var textHistory = [];
var historyData = [
    {교과목명: "채플2"},
    {교과목명: "채플4"},
    {교과목명: "동양의철학사상"},
    {교과목명: "진로설정과자기계발"},
    {교과목명: "세종사회봉사2"},
    {교과목명: "세종리더십"},
    {교과목명: "천문학의세계"},
    {교과목명: "동양고전강독2"},
    {교과목명: "서양고전강독2"},
    {교과목명: "서양고전강독4"},
    {교과목명: "동양종교의이해"},
    {교과목명: "동양의철학사상-공맹과성리학"},
    {교과목명: "동서양고전문학강독"},
    {교과목명: "동서양종교의이해"},
    {교과목명: "SHP고전강좌:Building Intellectus 2"},
    {교과목명: "한국전쟁을통해보는한국의이해"},
    {교과목명: "한국현대사의이해"}
];

    for (var i = 0; i < 5; i++){
        textHistory[i] = historyData[Math.floor(Math.random() * historyData.length)];
        
        if (i === 0){
            continue;
        }

        else{
            for (var k = i - 1; k >= 0; k--){
                if (textHistory[k] === textHistory[i])
                i--;
            }
        }
    }

    for (var j = 0; j < 31; j++){
        for (var i = 0; i < 5; i++){
            var historyText = document.createElement("div");
            historyText.innerHTML = textHistory[i].교과목명;
            historyRank[j].appendChild(historyText)
        }
        historyRank[j].style = "cursor: pointer;";
        historySelect[j].style = "cursor: pointer;";
    }

    for (var j = 0; j < 31; j++){
        historyRank[j].addEventListener("click", moveHistory);
    }

    function moveHistory(infor){
        for (var j = 0; j < 31; j++){
            var historytem = document.createElement("div");
            historytem.innerHTML = infor.target.innerHTML;
            historytem.style.color = "red";
            historySelect[j].append(historytem);
        }
        infor.target.remove();
    }


var cultureRank = document.getElementsByClassName("culture_R");
var cultureSelect = document.getElementsByClassName("culture_X");
var textCulture = [];
var cultureData = [
    {교과목명: "미래사회와사회변동"},
    {교과목명: "정보사회와정보이용"},
    {교과목명: "세계경제의이해"},
    {교과목명: "지구환경과학입문"},
    {교과목명: "취업과진로"},
    {교과목명: "인도의정치경제와사회"},
    {교과목명: "21세기외교전쟁"},
    {교과목명: "세종사회봉사1"},
    {교과목명: "인류학과현대사회"},
    {교과목명: "취업전략및사회진출"},
    {교과목명: "Relations between North and South Korea"},
    {교과목명: "융합적사고"},
    {교과목명: "인문지리학의이해"},
    {교과목명: "영화산업의이해"},
    {교과목명: "미디어속한국문화"},
    {교과목명: "경제학의이해"}
];

    for (var i = 0; i < 5; i++){
        textCulture[i] = cultureData[Math.floor(Math.random() * cultureData.length)];
        
        if (i === 0)
            continue;

        else{
            for (var k = i - 1; k >= 0; k--){
                if (textCulture[k] === textCulture[i])
                i--;
            }
        }
    }
    for (var j = 0; j < 31; j++){
        for (var i = 0; i < 5; i++){
            var cultureText = document.createElement("div");
            cultureText.innerHTML = textCulture[i].교과목명;
            cultureRank[j].appendChild(cultureText)
        }
        cultureRank[j].style = "cursor: pointer;";
        cultureSelect[j].style = "cursor: pointer;";
    }

    for (var j = 0; j < 31; j++){
        cultureRank[j].addEventListener("click", moveCulture);
    }

    function moveCulture(infor){
        for (var j = 0; j < 31; j++){
            var culturetem = document.createElement("div");
            culturetem.innerHTML = infor.target.innerHTML;
            culturetem.style.color = "red";
            cultureSelect[j].append(culturetem);
        }
        infor.target.remove();
    }

var startupRank = document.getElementsByClassName("startup_R");
var startupSelect = document.getElementsByClassName("startup_X");
var textStartup = [];
var startupData = [
    {교과목명: "영상스토리텔링"},
    {교과목명: "공간과인간:인문,예술,공학의융합"},
    {교과목명: "수요집현강좌"},
    {교과목명: "K-MOOC:웨어러블컴퓨터디자인"},
    {교과목명: "K-MOOC:콘텐츠산업의비즈니스전략"},
    {교과목명: "애지헌강좌2"},
    {교과목명: "SHP고전강좌:Writing Intellectus 2"},
    {교과목명: "진로오딧세이"},
    {교과목명: "융합적사고에기반한인문사회계글쓰기"},
    {교과목명: "기후변화와지속가능발전"},
    {교과목명: "디자인이노베이션"}
];

    for (var i = 0; i < 5; i++){
        textStartup[i] = startupData[Math.floor(Math.random() * startupData.length)];
        
        if (i === 0)
            continue;

        else{
            for (var k = i - 1; k >= 0; k--){
                if (textStartup[k] === textStartup[i])
                i--;
            }
        }
    }
    for (var j = 0; j < 31; j++){
        for (var i = 0; i < 5; i++){
            var startupText = document.createElement("div");
            startupText.innerHTML = textStartup[i].교과목명;
            startupRank[j].appendChild(startupText)
        }
        startupRank[j].style = "cursor: pointer;";
        startupSelect[j].style = "cursor: pointer;";
    }

    for (var j = 0; j < 31; j++){
        startupRank[j].addEventListener("click", moveStartup);
    }

    function moveStartup(infor){
        for (var j = 0; j < 31; j++){
            var startuptem = document.createElement("div");
            startuptem.innerHTML = infor.target.innerHTML;
            startuptem.style.color = "red";
            startupSelect[j].append(startuptem);
        }
        infor.target.remove();
    }



var scienceRank = document.getElementsByClassName("science_R");
var scienceSelect = document.getElementsByClassName("science_X");
var textScience = [];
var scienceData = [
    {교과목명: "과학사"},
    {교과목명: "현대과학으로의여행"},
    {교과목명: "동서양의윤리"},
    {교과목명: "천문학의세계"},
    {교과목명: "현대과학기술의이해"},
    {교과목명: "유니스토리"},
    {교과목명: "K-MOOC:정보보호와보안의기초"},
    {교과목명: "SHP고전강좌:Reading Intellectus 2"},
    {교과목명: "애지헌강좌2"},
    {교과목명: "K-MOOC:코딩과스토리텔링"},
    {교과목명: "우주자연인간"}
];

    for (var i = 0; i < 5; i++){
        textScience[i] = scienceData[Math.floor(Math.random() * scienceData.length)];
        
        if (i === 0)
            continue;

        else{
            for (var k = i - 1; k >= 0; k--){
                if (textScience[k] === textScience[i])
                i--;
            }
        }
    }
    for (var j = 0; j < 31; j++){
        for (var i = 0; i < 5; i++){
            var scienceText = document.createElement("div");
            scienceText.innerHTML = textScience[i].교과목명;
            scienceRank[j].appendChild(scienceText)
        }
        scienceRank[j].style = "cursor: pointer;";
        scienceSelect[j].style = "cursor: pointer;";
    }

    for (var j = 0; j < 31; j++){
        scienceRank[j].addEventListener("click", moveScience);
    }

    function moveScience(infor){
        for (var j = 0; j < 31; j++){
            var sciencetem = document.createElement("div");
            sciencetem.innerHTML = infor.target.innerHTML;
            sciencetem.style.color = "red";
            scienceSelect[j].append(sciencetem);
        }
        infor.target.remove();
    }



var worldRank = document.getElementsByClassName("world_R");
var worldSelect = document.getElementsByClassName("world_X");
var textWorld = [];
var worldData = [
    {교과목명: "철학과인간이해"},
    {교과목명: "현대인의정신건강과자기발견"},
    {교과목명: "K-Pop Music 2"},
    {교과목명: "K-Pop Dance 2"},
    {교과목명: "한류문화의이해"}
];

    for (var i = 0; i < 5; i++){
        textWorld[i] = worldData[Math.floor(Math.random() * worldData.length)];
        
        if (i === 0)
            continue;

        else{
            for (var k = i - 1; k >= 0; k--){
                if (textWorld[k] === textWorld[i])
                i--;
            }
        }
    }
    for (var j = 0; j < 31; j++){
        for (var i = 0; i < 5; i++){
            var worldText = document.createElement("div");
            worldText.innerHTML = textWorld[i].교과목명;
            worldRank[j].appendChild(worldText)
        }
        worldRank[j].style = "cursor: pointer;";
        worldSelect[j].style = "cursor: pointer;";
    }
    for (var j = 0; j < 31; j++){
        worldRank[j].addEventListener("click", moveWorld);
    }

    function moveWorld(infor){
        for (var j = 0; j < 31; j++){
            var worldtem = document.createElement("div");
            worldtem.innerHTML = infor.target.innerHTML;
            worldtem.style.color = "red";
            worldSelect[j].append(worldtem);
        }
        infor.target.remove();
    }
