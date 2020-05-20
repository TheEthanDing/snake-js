function Snake() {
    this.x = 0;
    this.y = 0;
    this.xSpeed = scale * 1;
    this.ySpeed = 0;
    this.size = 0;
    this.body = [];

    this.draw = function () {
        ctx.fillStyle = "#FFFFFF";

        for (let i = 0; i < this.body.length; i++) {
            ctx.fillRect(this.body[i].x, this.body[i].y, scale, scale)
        }
        ctx.fillRect(this.x, this.y, scale, scale)
    }

    this.update = function () {
        for (let i = 0; i < this.body.length - 1; i++) {
            this.body[i] = this.body[i + 1];
        }

        this.body[this.size - 1] = { x: this.x, y: this.y };

        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (this.x > canvas.width) {
            // reset if the snake hits the side
            this.reset();
        }
        if (this.y > canvas.height) {
            this.reset();
        }
        if (this.x < 0) {
            this.reset();
        }
        if (this.y < 0) {
            this.reset();
        }
    }

    // call this to reset the whole game with speed 0
    this.reset = function () {
        this.x = 0;
        this.y = 0;
        this.size = 0;
        this.body = [];
        this.xSpeed = 0;
        this.ySpeed = 0;
    }

    this.changeDirection = function (direction) {
        switch (direction) {
            case 'Up':
                this.xSpeed = 0;
                this.ySpeed = - scale * 1;
                break;
            case 'Down':
                this.xSpeed = 0;
                this.ySpeed = scale * 1;
                break;
            case 'Left':
                this.xSpeed = - scale * 1;
                this.ySpeed = 0;
                break;
            case 'Right':
                this.xSpeed = scale * 1;
                this.ySpeed = 0;
                break;
        }
    }

    this.eat = function (fruit) {
        if (fruit.x == this.x && fruit.y == this.y) {
            this.size++;
            return true;
        }
        return false;
    }

    this.checkCollision = function () {
        for (let i = 0; i < this.body.length; i++) {
            if (this.x == this.body[i].x && this.y == this.body[i].y) {
                print("Your score was");
                this.reset();
            }
        }
    }

}