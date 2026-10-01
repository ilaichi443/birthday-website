```javascript
/* =====================================
   CHANGE THESE DETAILS
===================================== */

const birthdayPerson = "Your Special Person";

// Change this to the birthday date
// Format: YYYY-MM-DDTHH:MM:SS
const birthdayDate = "2026-12-25T00:00:00";


/* =====================================
   PUT NAME ON WEBSITE
===================================== */

document.getElementById("name").innerText =
    birthdayPerson + " 💕";


/* =====================================
   COUNTDOWN
===================================== */

function updateCountdown() {

    const target = new Date(birthdayDate).getTime();

    const now = new Date().getTime();

    const difference = target - now;

    if (difference <= 0) {

        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";

        return;
    }

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );


    document.getElementById("days").innerText =
        String(days).padStart(2, "0");

    document.getElementById("hours").innerText =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").innerText =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").innerText =
        String(seconds).padStart(2, "0");
}

setInterval(updateCountdown, 1000);

updateCountdown();


/* =====================================
   GIFT
===================================== */

function openGift() {

    const gift = document.getElementById("gift");

    const text = document.getElementById("gift-text");

    gift.innerText = "🎉";

    gift.style.transform =
        "scale(1.3) rotate(10deg)";

    text.innerText =
        "Surprise! You deserve all the happiness in the world! 💖";

    showConfetti();
}


/* =====================================
   START CELEBRATION
===================================== */

function startCelebration() {

    showConfetti();

    window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
    });
}


/* =====================================
   CONFETTI
===================================== */

function showConfetti() {

    const canvas =
        document.getElementById("confetti");

    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let pieces = [];

    for (let i = 0; i < 150; i++) {

        pieces.push({

            x: Math.random() * canvas.width,

            y: Math.random() * canvas.height - canvas.height,

            size: Math.random() * 8 + 4,

            speed: Math.random() * 5 + 2,

            rotation: Math.random() * 360

        });
    }


    let frame = 0;


    function animate() {

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );


        pieces.forEach(piece => {

            piece.y += piece.speed;

            piece.rotation += 5;


            ctx.save();

            ctx.translate(
                piece.x,
                piece.y
            );

            ctx.rotate(
                piece.rotation * Math.PI / 180
            );

            ctx.fillStyle =
                "hsl(" +
                Math.random() * 360 +
                ", 80%, 60%)";

            ctx.fillRect(
                0,
                0,
                piece.size,
                piece.size
            );

            ctx.restore();

        });


        frame++;

        if (frame < 150) {

            requestAnimationFrame(animate);

        } else {

            ctx.clearRect(
                0,
                0,
                canvas.width,
                canvas.height
            );
        }
    }

    animate();
}


/* =====================================
   WINDOW RESIZE
===================================== */

window.addEventListener("resize", () => {

    const canvas =
        document.getElementById("confetti");

    canvas.width = window.innerWidth;

    canvas.height = window.innerHeight;

});
```
