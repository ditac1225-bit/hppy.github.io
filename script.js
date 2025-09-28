function goToGreeting() {
    const name = document.getElementById("nameInput").value || "Teman";
    localStorage.setItem("name", name);
    window.location.href = "ucapan.html";
}

function startConfetti() {
    const canvas = document.getElementById('confetti');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const confetti = [];
    const colors = ['#FFC0CB','#FFD700','#ADFF2F','#00BFFF','#FF69B4'];

    for (let i=0;i<150;i++) {
        confetti.push({
            x: Math.random()*canvas.width,
            y: Math.random()*canvas.height,
            r: Math.random()*6+2,
            d: Math.random()*150,
            color: colors[Math.floor(Math.random()*colors.length)],
            tilt: Math.random()*10-10
        });
    }

    function drawConfetti() {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        confetti.forEach(c=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = c.color;
            ctx.moveTo(c.x+c.tilt+c.r/2,c.y);
            ctx.lineTo(c.x+c.tilt,c.y+c.r);
            ctx.stroke();
        });
        updateConfetti();
    }

    function updateConfetti() {
        confetti.forEach(c=>{
            c.y += Math.cos(0.01+c.d)+1+c.r/2;
            c.x += Math.sin(0.01);
            if(c.y>canvas.height) {
                c.y=-10;
                c.x=Math.random()*canvas.width;
            }
        });
    }

    setInterval(drawConfetti,20);
}
