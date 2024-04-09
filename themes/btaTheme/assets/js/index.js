const images = 6;

function mulberry32(a) {
    return function () {
        let t = (a += 0x6d2b79f5);
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

var now = new Date();
var startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
var timestamp = startOfDay / 1000;

const prng = mulberry32(timestamp);

rand = Math.floor(prng() * 6) + 1;
imagePath = "images/thaboar/btatip" + rand + ".gif";

document.getElementById("thaboar-img").src = imagePath;
