const r1All = ["https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A=",
    "https://media.istockphoto.com/id/1420755455/photo/grunge-dirty-background-overlay.webp?b=1&s=170667a&w=0&k=20&c=7wfOkV1I0RJVAsuZlCzMD8zRenjlWo1hUYCAIsGBckw=",
    "https://media.istockphoto.com/id/1426559579/photo/female-tourist-enjoying-watching-hot-air-balloons-flying-in-the-sky-at-rooftop-of-hotel-where.webp?b=1&s=170667a&w=0&k=20&c=3UHqaNl-0A91lLqknAUFiv9gcbHEx_GtLtvVKr6GH5c="]
const r2All = ["https://media.istockphoto.com/id/1434054606/photo/traveler-backpacker-girl-is-watching-hot-air-balloons-and-the-fairy-chimneys-at-cappadocia.webp?b=1&s=170667a&w=0&k=20&c=9eQP1EMSpMweCwGcc4uU6MV2y4CjnH2C82S7BYypIHk=",
    "https://media.istockphoto.com/id/1401980646/photo/3d-rendered-classic-sculpture-metaverse-avatar-with-network-of-low-poly-glowing-purple-lines.webp?b=1&s=170667a&w=0&k=20&c=nLf9fDcHVLZ9bPijP5QQrj0apVLdPXITVF6EAMqj1rg=",
    "https://media.istockphoto.com/id/1464561797/photo/artificial-intelligence-processor-unit-powerful-quantum-ai-component-on-pcb-motherboard-with.webp?b=1&s=170667a&w=0&k=20&c=AeBEFdsaJZmhbPHGocUkCutsQuR2rt828Aa8bDHyiOo="]
const r3All = ["https://media.istockphoto.com/id/513439341/photo/portrait-of-enthusiastic-business-people-in-circle.webp?b=1&s=170667a&w=0&k=20&c=yLjo3_jQ3_EmxoNWuZDfEZav4apiVQEFff0cCywkaVM=",
    "https://media.istockphoto.com/id/1403045742/photo/happy-mixed-race-father-and-son-brushing-their-teeth-together-in-a-bathroom-at-home-single.webp?b=1&s=170667a&w=0&k=20&c=siRQqYPxmZsWtoedb7eoQOzRvQl1GVg_ccCAOsICTCw=",
    "https://media.istockphoto.com/id/1468192804/photo/concept-of-generating-photo-realistic-image-by-ai-software.webp?b=1&s=170667a&w=0&k=20&c=px_Pa4eBloRCzkX5QwtSMpV_gnGbr9hqvE5ifclmsUk="]
const r4All = ["https://media.istockphoto.com/id/1472932742/photo/group-of-multigenerational-people-hugging-each-others-support-multiracial-and-diversity.webp?b=1&s=170667a&w=0&k=20&c=2wd6we1zl_dLHHFWfGU1su3Pi5cX-SiiVoNrNilorJg=",
    "https://media.istockphoto.com/id/1404630183/photo/usa-america-united-states-new-year-or-independence-day-celebration-holiday-background.webp?b=1&s=170667a&w=0&k=20&c=1mBvDdfuzEOyqsq_saGm5YQusi3fbyq0TNWMV1BvG-w=",
    "https://media.istockphoto.com/id/1406486493/photo/happy-labor-day-concept-american-flag-with-different-construction-tools-and-the-text-on-dark.webp?b=1&s=170667a&w=0&k=20&c=Rsw0iVWUXFkt4wm5TGlEhE1FauonTiRXZRHUdLsi5tE="]

let r1Image = document.getElementById("r1-img");
let r2Image = document.getElementById("r2-img");
let r3Image = document.getElementById("r3-img");
let r4Image = document.getElementById("r4-img");
let intervalId = new Array(4);
changeImg(0, r1Image, r1All);
changeImg(1, r2Image, r2All);
changeImg(2, r3Image, r3All);
changeImg(3, r4Image, r4All);

// reference: https://www.codeinwp.com/snippets/add-event-listener-to-multiple-elements-with-javascript/#gref
let btns = document.querySelectorAll('input');

for (i of btns) {
    (function(i) {
        i.addEventListener('click', function() {
            if (i.value == "Stop") {
                clearInterval(intervalId[parseInt(i.id)]);
                i.value = "Start";
            }
            else if (i.value == "Start") {
                let n = parseInt(i.id) + 1;
                let s = "r" + n + "-img";
                let cur = document.getElementById(s);
                if (n == 1) {
                    changeImg(parseInt(i.id), cur, r1All);
                } else if (n == 2) {
                    changeImg(parseInt(i.id), cur, r2All);
                } else if (n == 3) {
                    changeImg(parseInt(i.id), cur, r3All);
                } else {
                    changeImg(parseInt(i.id), cur, r4All);
                }
                i.value = "Stop";
            }
        });
    })(i);
}


function changeImg(idx, img, collection) {
    let random = Math.floor(Math.random() * 5 + 1);
    let i = 0;
    let id = setInterval(function(){
        if (i == 3) {
            i = 0;
        }
        img.src = collection[i];
        i++;
    }, random * 1000)
    intervalId[idx] = id;
}

