class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
        this.leftHandX = this.bodyX - 80;
        this.lefthandY = this.bodyY + 20;

        this.rightHandX = this.bodyX + 100;
        this.rightHandY = this.bodyY + 20;

    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
        this.load.image("body", "body_greenD.png")
        // this.load.image("legright", "leg_redA.png")
        // this.load.image("legleft", "leg_darkC.png")
        // this.load.image("armright", "arm_whiteE.png")
        // this.load.image("armleft", "arm_redB.png")
        // this.load.image("eye", "eye_cute_dark.png")
        // this.load.image("mouth", "mouthA.png")
        // this.load.image("nose", "nose_red.png")
        // this.load.image("horn", "detail_green_horn_large.png")
    }


    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");
        my.sprite.rightarm = this.add.sprite(this.rightHandX, this.rightHandY, "monsterParts", "arm_whiteE.png");
        my.sprite.leftarm = this.add.sprite(this.leftHandX, this.lefthandY, "monsterParts", "arm_redB.png");
        my.sprite.leftarm.flipX = true;
        my.sprite.rightleg = this.add.sprite(this.bodyX+50, this.bodyY + 150, "monsterParts", "leg_redA.png");
        my.sprite.leftleg = this.add.sprite(this.bodyX-50, this.bodyY + 120, "monsterParts", "leg_darkC.png");
        my.sprite.leftleg.flipX = true;
        my.sprite.eye = this.add.sprite(this.bodyX, this.bodyY-50, "monsterParts", "eye_cute_dark.png");
        my.sprite.mouth = this.add.sprite(this.bodyX, this.bodyY+50, "monsterParts", "mouthA.png");
        my.sprite.nose = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "nose_red.png");
        my.sprite.horn = this.add.sprite(this.bodyX+50, this.bodyY-80, "monsterParts", "detail_green_horn_large.png");
        my.sprite.horn2 = this.add.sprite(this.bodyX-50, this.bodyY-80, "monsterParts", "detail_green_horn_large.png");
        my.sprite.horn2.flipX = true;
        my.sprite.fangs = this.add.sprite(this.bodyX, this.bodyY+50, "monsterParts", "mouthJ.png");
        my.sprite.fangs.visible = false;

        this.input.keyboard.on("keydown", function (event) {
            if (event.code == "KeyF") {
                my.sprite.mouth.visible = false;
                my.sprite.fangs.visible = true;
            }
        });
        this.input.keyboard.on("keydown", function (event) {
            if (event.code == "KeyS") {
                my.sprite.mouth.visible = true;
                my.sprite.fangs.visible = false;
            }
        });
        this.input.keyboard.on("keydown", function (event) {
            if (event.code == "KeyA") {
                for (const i in my.sprite){
                    my.sprite[i].x -= 10;
                }
            }
        });
        this.input.keyboard.on("keydown", function (event) {
            if (event.code == "KeyD") {
                for (const i in my.sprite){
                    my.sprite[i].x += 10;
                }
            }
        });
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

       
    }

}