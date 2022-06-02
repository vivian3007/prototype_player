import { Game } from "./game"
import * as PIXI from 'pixi.js'

export class Girl extends PIXI.Sprite{
    private game: Game
    private xspeed: number = 0
    private yspeed: number = 0

    constructor(texture: PIXI.Texture, game: Game){
        super(texture)
        this.game = game
        this.texture = texture 
        this.x = 400
        this.y = 200
        this.scale.set(0.5, 0.5) 
        this.anchor.set(0.5)

        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))
    }

    onKeyDown(e: KeyboardEvent): void {
        switch (e.key.toUpperCase()) {
            case "A":
            case "ARROWLEFT":
                this.xspeed = -7
                this.scale.set(-0.5, 0.5) 
                break
            case "D":
            case "ARROWRIGHT":
                this.xspeed = 7
                this.scale.set(0.5, 0.5) 
                break
            case "W":
            case "ARROWUP":
                this.yspeed = -7
                break
            case "S":
            case "ARROWDOWN":
                this.yspeed = 7
                break
        }
    }

    private onKeyUp(e: KeyboardEvent): void {
        switch (e.key.toUpperCase()) {
            case "A":
            case "D":
            case "ARROWLEFT":
            case "ARROWRIGHT":
                this.xspeed = 0
                break
            case "W":
            case "S":
            case "ARROWUP":
            case "ARROWDOWN":
                this.yspeed = 0
                break
        }
    }

    public update(delta: number){
        this.x += this.xspeed * delta
        this.y += this.yspeed * delta

        this.keepInScreen()
    }

    private keepInScreen(){
        if(this.getBounds().left > this.game.pixi.screen.right){
            this.x =-this.getBounds().width
        }
    }
}