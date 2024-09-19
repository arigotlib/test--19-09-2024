const btnGetData = document.getElementById("submitBtn") as HTMLButtonElement

interface Iplayer {
    position: string;
    playerName?: String;
    twoPercent: Number;
    threePercent: Number;
    points: Number;
}

async function sendData() {
    const position = (document.getElementById("positionInput") as HTMLSelectElement).value;
    const points  = (document.getElementById("pointsInput") as HTMLInputElement).value;
    const twoPercent = (document.getElementById("twoPercentInput") as HTMLInputElement).value;
    const threePercent = (document.getElementById("threePercentInput") as HTMLInputElement).value;

    

    const data: Iplayer = {
        position: position,
        points: Number(points),
        twoPercent: Number(twoPercent),
        threePercent: Number(threePercent)
    }

    const dataList = await fetchData(data);

    
}
btnGetData.addEventListener("click", sendData);


const data1: Iplayer = {
    position: "PG",
    points: 0,
    twoPercent: 0,
    threePercent: 0
}
const data2: Iplayer = {
    position: "PS",
    points: 10,
    twoPercent: 5,
    threePercent: 6
}

 
async function fetchData(filterParameters: Iplayer): Promise<Iplayer> {
    const response = await fetch("https://nbaserver-q21u.onrender.com/api/filter/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(filterParameters)
    })

    const dataPlayer = await response.json();
    
    return dataPlayer
}

//קוד לקבוע כי האינפוט לא עבד
async function sendDataTest(dataTest : Iplayer): Promise<void> {
    let dataresult = await fetchData(dataTest);
renderDataToTable(dataresult)

};
//קריאה לפונקציה אוטומטית בלי כפתור
sendDataTest(data1);


function renderDataToTable(data:any): void {
    data.forEach((pl) => {
        const tbody = document.getElementById("tbody");
        const tr = document.createElement("tr");
        const player = document.createElement("td");
        player.textContent = pl.playerName;
        tr.appendChild(player);
        const Position = document.createElement("td");
        Position.textContent = pl.position;
        tr.appendChild(Position);
        const Points = document.createElement("td");
        Points.textContent = pl.points;
        tr.appendChild(Points);
        const tdTwoPercent = document.createElement("td");
        tdTwoPercent.textContent = pl.twoPercent;
        tr.appendChild(tdTwoPercent);
        const tdThreePercent = document.createElement("td");
        tdThreePercent.textContent = pl.threePercent;
        tr.appendChild(tdThreePercent);
        const action = document.createElement("td");
        const addBbuutton = document.createElement("button");
        addBbuutton.textContent = "Add James to Current Team";
        addBbuutton.onclick = () => (addPlayerToCard(pl));
        action.appendChild(addBbuutton);
        tr.appendChild(action);
        tbody?.appendChild(tr);
    })
   
}
function addPlayerToCard(player: Iplayer): void {
   const card = document.getElementById(player.position + "PlayerCard");
   const p = document.createElement("p");
   p.innerText = player.playerName;
   card?.appendChild(p);
    console.log(player);
}


