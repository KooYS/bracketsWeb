var hero = [];
var myObject = [];
var myObject2 = [];
var Score;
var Background;
var MenuBackground;
var MenuButton;
var MenuTitle;

var OverBackground;
var OverButton;
var OverTitle;

var ScoreImage;
var ScoreAnimation = [];
var Warn;
var fishNum = 7;
var fishDieNum = 5;
var currentType = 0;
var mousedownX = 0;
var count = 0;
var timerId = 0;
var once = true;
var once2 = true;
var heroInterval;

function StartGame() {
    Menu.init();
    Menu.start();
    // 
}

var alpha = 0.5,
    delta = 0.03;

function fade() {
    alpha += delta;
    if (alpha <= 0.5 || alpha >= 1) delta = -delta

    Area.context.clearRect(0, 0, Warn.width, Warn.height);
    Area.context.globalAlpha = alpha;
    Area.context.drawImage(Warn, 0, 0, 700, 480);
}

function Animation(width, height, row, col, framecount, src, delay, x, y, scale) //생성틀
{
    this.curFrame = 0;
    this.frameCount = framecount;
    this.x = x;
    this.y = y;
    this.srcX = 0;
    this.srcY = 0;
    this.left = false;
    this.right = true;
    this.spriteWidth = width;
    this.spriteHeight = height;
    this.rows = row;
    this.cols = col;
    this.delay = delay;
    this.trackRight = 0;
    this.trackLeft = 1;
    this.width = (this.spriteWidth / this.cols);
    this.height = (this.spriteHeight / this.rows);
    this.widthScale = this.width * scale;
    this.heightScale = this.height * scale;

    this.character = new Image();
    this.character.src = src;

    this.newPos = function () {
        this.gravitySpeed += this.gravity;
        this.x += this.speedX;
        this.y += this.speedY + this.gravitySpeed;
        this.hitBottom();
    }

    this.crash = function (other) {
        var left = this.x + this.widthScale / 4;
        var right = this.x + this.widthScale - this.widthScale / 4;
        var top = this.y + this.heightScale / 4;
        var bottom = this.y - this.heightScale / 4;


        var otherleft = other.x;
        var otherright = other.x + other.width;
        var othertop = other.y;
        var otherbottom = other.y + other.height;

        var crashflag = true;
        if ((bottom < othertop) || (top > otherbottom) || (right < otherleft) || (left > otherright)) {
            crashflag = false;
        }
        return crashflag;
    }



}

function Component(canvas, width, height, color, x, y, type) //생성틀
{
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.type = type;
    this.gravity = 0;
    this.gravitySpeed = 0;
    this.bounce = 0.0;


    if (type == "image" || this.type == "background") {
        this.image = new Image();
        this.image.src = color;
    }

    this.update = function () {
        ctx = canvas.context;
        if (this.type == "image" || this.type == "background") {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        } else if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }

    }
    this.hitBottom = function () {
        var bottom = Area.canvas.height - this.height;
        if (this.y > bottom) {
            this.y = bottom;
            this.gravitySpeed = -(this.gravitySpeed * this.bounce);
        }
    }
    this.newPos = function () {
        this.gravitySpeed += this.gravity;
        this.x += this.speedX;
        this.y += this.speedY + this.gravitySpeed;
        this.hitBottom();
    }
    this.down = function () {
        this.gravitySpeed += this.gravity;
        this.x += this.speedX;
        this.y += this.speedY + this.gravitySpeed;

        if (this.y > Area.canvas.height) {
            this.y = 0 - (Math.random() * 100) * 30;
            this.speedY = Math.random() * 6;
            this.gravitySpeed = 0;
        }
    }

    this.crash = function (other) {
        var left = this.x - this.width / 2;
        var right = this.x + this.width - this.width / 4;
        var top = this.y + this.height / 2;
        var bottom = this.y + this.height;


        var otherleft = other.x;
        var otherright = other.x + other.width;
        var othertop = other.y;
        var otherbottom = other.y + other.height;

        var crashflag = true;
        if ((bottom < othertop) || (top > otherbottom) || (right < otherleft) || (left > otherright)) {
            crashflag = false;
        }
        return crashflag;
    }
}

let MenuMouseDown;
var Menu = {
    init: function () {
        this.canvas = document.getElementById("cv");
        this.context = this.canvas.getContext("2d");

        MenuBackground = new Component(this, 700, 480, "/images/log2.jpg", 0, 0, "background");
        MenuButton = new Component(this, 128, 128, "/images/start.png", 350 - 64, 350, "image");
        MenuTitle = new Component(this, 256, 128, "/images/title.png", 350 - 128, 50, "image");

    },
    start: function () {
        this.interval = setInterval(updateMenu, 20);
        this.canvas.addEventListener("mousedown", MenuMouseDown = function (e) {
            var rect = document.getElementById("cv").getBoundingClientRect();
            var canvaslocalX = e.clientX - rect.left;
            var canvaslocalY = e.clientY - rect.top;
            
            if (canvaslocalX < MenuButton.x || canvaslocalX > MenuButton.x + MenuButton.width || canvaslocalY < MenuButton.y || canvaslocalY > MenuButton.y + MenuButton.height)
                return;
            
            Menu.clear();
            Menu.stop();
            Area.init();
            Area.start();
            
        });
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop: function () {
        this.canvas.removeEventListener("mousedown", MenuMouseDown);
        clearInterval(this.interval);
    }
}
let OverMouseDown;
var Over = {
    init: function () {
        this.canvas = document.getElementById("cv");
        this.context = this.canvas.getContext("2d");

        OverBackground = new Component(this, 700, 480, "/images/over.jpg", 0, 0, "background");
        OverButton = new Component(this, 128, 128, "/images/start.png", 350 - 64, 350, "image");
        OverTitle = new Component(this, 256, 128, "/images/title.png", 350 - 128, 50, "image");
    },
    start: function () {
        this.interval = setInterval(updateOver, 20);
        this.canvas.addEventListener("mousedown", OverMouseDown = function (e) {
            var rect = document.getElementById("cv").getBoundingClientRect();
            var canvaslocalX = e.clientX - rect.left;
            var canvaslocalY = e.clientY - rect.top;

            if (canvaslocalX < OverButton.x || canvaslocalX > OverButton.x + OverButton.width || canvaslocalY < OverButton.y || canvaslocalY > OverButton.y + OverButton.height)
                return;

            Over.clear();
            Over.stop();
            Area.init();
            Area.start();
        });
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop: function () {
        this.canvas.removeEventListener("mousedown", OverMouseDown);
        clearInterval(this.interval);
        this.interval = null;
    }
}

let AreaMouseDown;
let AreaMouseUp;
let AreaMouseMove;
var Area = { // 게임 캔버스      
    init: function () {
        this.canvas = document.getElementById("cv");
        this.context = this.canvas.getContext("2d");

        myObject = [];
        myObject2 = [];
        hero = [];
        Scroe = new Component(this, "10px", "Consolas", "black", 440, 20, "text");
        Background = new Component(this, 700, 480, "/images/log.jpg", 0, 0, "background");



        Warn = new Image();
        Warn.src = "/images/warn.png";
        ScoreImage = new Component(this, 120, 50, "/images/score.png", 0, 0, "image");

        for (var i = 0; i < fishNum; i++) {
            myObject.push(new Component(this, 78, 78, "/images/fish_1.png", 0 + i * 78, -100 - (Math.random() * 100) * 30, "image"));
        }
        for (var i = 0; i < fishDieNum; i++) {
            myObject2.push(new Component(this, 78, 78, "/images/fish_2.png", 0 + i * 78 * 2, -100 - (Math.random() * 100) * 20, "image"));
        }


        ScoreAnimation.push(new Animation(1090, 146, 1, 10, 10, "/images/number.png", 500, 120, 0, 0.35));
        ScoreAnimation.push(new Animation(1090, 146, 1, 10, 10, "/images/number.png", 500, 120 + 40, 0, 0.35));
        ScoreAnimation.push(new Animation(1090, 146, 1, 10, 10, "/images/number.png", 500, 120 + 80, 0, 0.35));
        hero.push(new Animation(2560, 512, 1, 5, 5, "/images/pe.png", 100, 350, 350, 0.25));
        hero.push(new Animation(2560, 512, 1, 5, 5, "/images/pe_l.png", 100, 350, 350, 0.25));
        hero.push(new Animation(2560, 512, 1, 5, 5, "/images/pe_1.png", 100, 350, 350, 0.25));
        hero.push(new Animation(2560, 512, 1, 5, 5, "/images/pe_1_l.png", 100, 350, 350, 0.25));

    },
    start: function () {
        fishNum = 7;
        fishDieNum = 5;
        currentType = 0;
        mousedownX = 0;
        count = 0;
        timerId = 0;
        once = true;
        once2 = true;
        AreaMouseDown = null;
        AreaMouseUp = null;
        AreaMouseMove = null;

        this.interval = setInterval(updateArea, 20);
        this.frameNo = 0;
        this.crashCheck = false;
        this.scoreCount = 0;
        this.canvas.addEventListener("mousedown", AreaMouseDown = function (e) {
            var rect = document.getElementById("cv").getBoundingClientRect();
            var canvaslocalX = e.clientX - rect.left;
            var canvaslocalY = e.clientY - rect.top;


            if (canvaslocalX < hero[currentType].x || canvaslocalX > hero[currentType].x + hero[currentType].width || canvaslocalY < hero[currentType].y || canvaslocalY > hero[currentType].y + hero[currentType].height)
                return;

            Area.click = true;
        });

        this.canvas.addEventListener("mouseup", AreaMouseUp = function (e) {
            Area.click = false;
        });

        this.canvas.addEventListener("mousemove", AreaMouseMove = function (e) {
            var rect = document.getElementById("cv").getBoundingClientRect();
            var canvaslocalX = e.clientX - rect.left;
            if (Area.click) {


                if (mousedownX > canvaslocalX)
                    currentType = 1;
                else
                    currentType = 0;
                mousedownX = canvaslocalX;


                hero[currentType].x = canvaslocalX - (hero[currentType].widthScale) / 2;
            }
        });

    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.beginPath();
    },
    stop: function () {
        this.canvas.removeEventListener("mousedown", AreaMouseDown);
        this.canvas.removeEventListener("mouseup", AreaMouseUp);
        this.canvas.removeEventListener("mousemove", AreaMouseMove);
        window.clearInterval(this.interval);
        this.interval = null;
        for (var i = 0; i < fishNum; i++) {
            delete myObject[i];
        }
        for (var i = 0; i < fishDieNum; i++) {
            delete myObject2[i];
        }
        for (var i = 0; i < 4; i++) {
            delete hero[i];

        }
        delete hero;
        delete myObject;

        delete myObject2;

        hero = null;
        myObject = null;
        myObject2 = null;
    }

}

function everyinterval(n) {
    if ((Area.frameNo / n) % 1 == 0) {
        return true;
    }
    return false;
}

function updateMenu() {
    MenuBackground.update();
    MenuButton.update();
    MenuTitle.update();
}

function updateOver() {
    OverBackground.update();
    OverButton.update();
    OverTitle.update();
}


function updateArea() {

    Area.clear();
    Area.frameNo += 1;
    if (Area.crashCheck) {
        fade();
    }
    //  accelerate(0.2);
    fishaccelerate(0.01);
    Background.update();


    for (var i = 0; i < fishNum; i++) {
        myObject[i].down();
        myObject[i].update();
    }
    for (var i = 0; i < fishDieNum; i++) {
        myObject2[i].down();
        myObject2[i].update();
    }



    for (var i = 0; i < fishNum; i++) {
        if (hero[currentType].crash(myObject[i]) && Area.crashCheck == false) {
            Area.scoreCount += 50;
            myObject[i].y = -100 - (Math.random() * 100) * 30;
            myObject[i].speedY = Math.random() * 6;
            myObject[i].gravitySpeed = 0;
        }
    }

    for (var i = 0; i < fishDieNum; i++) {
        if (hero[currentType].crash(myObject2[i]) && Area.crashCheck == false) {
            Area.scoreCount -= 50;
            myObject2[i].y = -100 - (Math.random() * 100) * 20;
            myObject2[i].speedY = Math.random() * 6;
            myObject2[i].gravitySpeed = 0;
            Area.crashCheck = true;
            setTimeout(function () {
                Area.crashCheck = false;
                Area.context.globalAlpha = 1;

            }, 3000);
            break;
        }
    }

    ScoreImage.update();

    for (var i = 0; i < 3; i++) {
        ScoreAnimation[i].curFrame = ScoreAnimation[i].curFrame % ScoreAnimation[i].frameCount;
        ScoreAnimation[i].srcX = ScoreAnimation[i].curFrame * ScoreAnimation[i].width;

        Area.context.drawImage(ScoreAnimation[i].character,
            ScoreAnimation[i].srcX,
            ScoreAnimation[i].srcY,
            ScoreAnimation[i].width,
            ScoreAnimation[i].height,
            ScoreAnimation[i].x,
            ScoreAnimation[i].y,
            ScoreAnimation[i].widthScale,
            ScoreAnimation[i].heightScale);
    }
    if (once) {
        heroInterval = setInterval(function () {
            for (var i = 0; i < 4; i++) {
                hero[i].curFrame = ++hero[i].curFrame % hero[i].frameCount;
                hero[i].srcX = hero[i].curFrame * hero[i].width;
            }
        }, hero[currentType].delay);
        once = false;
    }

    Area.context.drawImage(hero[currentType].character,
        hero[currentType].srcX,
        hero[currentType].srcY,
        hero[currentType].width,
        hero[currentType].height,
        hero[currentType].x,
        hero[currentType].y,
        hero[currentType].widthScale,
        hero[currentType].heightScale);

    if (Area.scoreCount < 300) {
        if (Area.scoreCount < 10) {
            ScoreAnimation[0].curFrame = 0;
            ScoreAnimation[1].curFrame = 0;
            ScoreAnimation[2].curFrame = Area.scoreCount;
        } else if (Area.scoreCount < 100 && Area.scoreCount >= 10) {
            var two = parseInt(Area.scoreCount / 10);
            var one = Area.scoreCount % 10;
            ScoreAnimation[0].curFrame = 0;
            ScoreAnimation[1].curFrame = two;
            ScoreAnimation[2].curFrame = one;
        } else {
            var three = parseInt(Area.scoreCount / 100);
            var tmep = Area.scoreCount - (three * 100);
            var two = parseInt(tmep / 10);
            var one = tmep % 10;
            ScoreAnimation[0].curFrame = three;
            ScoreAnimation[1].curFrame = two;
            ScoreAnimation[2].curFrame = one;
        }
    } else {
        if (once2) {
            setTimeout(function () {
                clearInterval(heroInterval);
                Area.clear();
                Area.stop();
                Over.init();
                Over.start();
            }, 300);
            once2 = false;
        }
    }
}

function fishaccelerate(n) {
    for (var i = 0; i < fishNum; i++) {
        myObject[i].gravity = n;
    }
    for (var i = 0; i < fishDieNum; i++) {
        myObject2[i].gravity = n;
    }

}
