var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var bgImg = ['https://tse3.mm.bing.net/th/id/OIP.-BKNV6CclEu9BNBqy7JOBQHaER?r=0&pid=Api&P=0&h=180', 'https://tse4.mm.bing.net/th/id/OIP.zBKiMIAFKR1of8Mbn5g-0AHaEP?r=0&pid=Api&P=0&h=180',
    'https://tse2.mm.bing.net/th/id/OIP.5fI8VxCcsJoQ2QL5stbS-gHaEJ?r=0&pid=Api&P=0&h=180', 'https://tse2.mm.bing.net/th/id/OIP.LB06U8hnsWrPGD-VHKDeWgHaHa?r=0&pid=Api&P=0&h=180'
];

var city = "Ahmedabad";
const WEATHER_API = `https://api.weatherapi.com/v1/current.json?key=e26ee2f87b994c98863100552231608&q=${city}`;

fetch(WEATHER_API).then((Res) => {
    Res.json().then((data) => {

        const code = data.current.condition.code;
        if (code == 1000) {
            document.querySelector("body").style.backgroundImage = `url(${bgImg[0]})`;
        }
        else if (
            code == 1003 ||
            code == 1006 ||
            code == 1009 ||
            code == 1030 ||
            code == 1135 ||
            code == 1147
        ) {
            document.querySelector("body").style.backgroundImage = `url(${bgImg[1]})`;
        }
        else if (
            code == 1063 ||
            code == 1069 ||
            code == 1072 ||
            code == 1087 ||
            (code >= 1150 && code <= 1201) ||
            (code >= 1240 && code <= 1246) ||
            (code >= 1273 && code <= 1282)
        ) {
            document.querySelector("body").style.backgroundImage = `url(${bgImg[2]})`;
        }
        else {
            document.querySelector("body").style.backgroundImage = `url(${bgImg[3]})`;
        }

        document.querySelector('.city-name').innerText = data.location.name;
        document.querySelector('h1').innerText = data.current.temp_c + "°";
        document.querySelector('.city-time p').innerText = data.location.localtime;

        document.querySelector('.p1').innerText = data.current.condition.text;
        document.querySelector('img').src = "https:" + data.current.condition.icon;

        document.querySelector(".row span:last-child").innerText =
            data.current.cloud + "%";

        document.querySelector(".row1 span:last-child").innerText =
            data.current.humidity + "%";

        document.querySelector(".row2 span:last-child").innerText =
            data.current.wind_kph + " km/h";

        document.querySelector(".row3 span:last-child").innerText =
            data.current.precip_mm + " mm";

        console.log(data);

    });
});


document.querySelector('.btnsearch').addEventListener('click', function () {

    var city = document.querySelector("input").value;

    const WEATHER_API = `https://api.weatherapi.com/v1/current.json?key=e26ee2f87b994c98863100552231608&q=${city}`;

    fetch(WEATHER_API).then((Res) => {
        Res.json().then((data) => {

            const code = data.current.condition.code;
            if (code == 1000) {
                document.querySelector("body").style.backgroundImage = `url(${bgImg[0]})`;
            }
            else if (
                code == 1003 ||
                code == 1006 ||
                code == 1009 ||
                code == 1030 ||
                code == 1135 ||
                code == 1147
            ) {
                document.querySelector("body").style.backgroundImage = `url(${bgImg[1]})`;
            }
            else if (
                code == 1063 ||
                code == 1069 ||
                code == 1072 ||
                code == 1087 ||
                (code >= 1150 && code <= 1201) ||
                (code >= 1240 && code <= 1246) ||
                (code >= 1273 && code <= 1282)
            ) {
                document.querySelector("body").style.backgroundImage = `url(${bgImg[2]})`;
            }
            else {
                document.querySelector("body").style.backgroundImage = `url(${bgImg[3]})`;
            }

            document.querySelector('.city-name').innerText = data.location.name;
            document.querySelector('h1').innerText = data.current.temp_c + "°";
            document.querySelector('.city-time p').innerText = data.location.localtime;

            document.querySelector('.p1').innerText = data.current.condition.text;
            document.querySelector('img').src = "https:" + data.current.condition.icon;

            document.querySelector(".row span:last-child").innerText = data.current.cloud + "%";
            document.querySelector(".row1 span:last-child").innerText = data.current.humidity + "%";
            document.querySelector(".row2 span:last-child").innerText = data.current.wind_kph + " km/h";
            document.querySelector(".row3 span:last-child").innerText = data.current.precip_mm + " mm";

            console.log(data);

        });
    });
});