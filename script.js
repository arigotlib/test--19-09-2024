var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var btnGetData = document.getElementById("submitBtn");
function sendData() {
    return __awaiter(this, void 0, void 0, function () {
        var position, points, twoPercent, threePercent, data, dataList;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    position = document.getElementById("positionInput").value;
                    points = document.getElementById("pointsInput").value;
                    twoPercent = document.getElementById("twoPercentInput").value;
                    threePercent = document.getElementById("threePercentInput").value;
                    data = {
                        position: position,
                        points: Number(points),
                        twoPercent: Number(twoPercent),
                        threePercent: Number(threePercent)
                    };
                    return [4 /*yield*/, fetchData(data)];
                case 1:
                    dataList = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
btnGetData.addEventListener("click", sendData);
var data1 = {
    position: "PG",
    points: 0,
    twoPercent: 0,
    threePercent: 0
};
var data2 = {
    position: "PS",
    points: 10,
    twoPercent: 5,
    threePercent: 6
};
function fetchData(filterParameters) {
    return __awaiter(this, void 0, void 0, function () {
        var response, dataPlayer;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://nbaserver-q21u.onrender.com/api/filter/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(filterParameters)
                    })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    dataPlayer = _a.sent();
                    return [2 /*return*/, dataPlayer];
            }
        });
    });
}
//קוד לקבוע כי האינפוט לא עבד
function sendDataTest(dataTest) {
    return __awaiter(this, void 0, void 0, function () {
        var dataresult;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchData(dataTest)];
                case 1:
                    dataresult = _a.sent();
                    renderDataToTable(dataresult);
                    return [2 /*return*/];
            }
        });
    });
}
;
//קריאה לפונקציה אוטומטית בלי כפתור
sendDataTest(data1);
function renderDataToTable(data) {
    data.forEach(function (pl) {
        var tbody = document.getElementById("tbody");
        var tr = document.createElement("tr");
        var player = document.createElement("td");
        player.textContent = pl.playerName;
        tr.appendChild(player);
        var Position = document.createElement("td");
        Position.textContent = pl.position;
        tr.appendChild(Position);
        var Points = document.createElement("td");
        Points.textContent = pl.points;
        tr.appendChild(Points);
        var tdTwoPercent = document.createElement("td");
        tdTwoPercent.textContent = pl.twoPercent;
        tr.appendChild(tdTwoPercent);
        var tdThreePercent = document.createElement("td");
        tdThreePercent.textContent = pl.threePercent;
        tr.appendChild(tdThreePercent);
        var action = document.createElement("td");
        var addBbuutton = document.createElement("button");
        addBbuutton.textContent = "Add James to Current Team";
        addBbuutton.onclick = function () { return (addPlayerToCard(pl)); };
        action.appendChild(addBbuutton);
        tr.appendChild(action);
        tbody === null || tbody === void 0 ? void 0 : tbody.appendChild(tr);
    });
}
function addPlayerToCard(player) {
    var card = document.getElementById(player.position + "PlayerCard");
    card === null || card === void 0 ? void 0 : card.classList.add("active");
    console.log(player);
}
