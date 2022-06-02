import * as PIXI from 'pixi.js'
import girlImage from "./images/cute-girl.png"
import { Application } from 'pixi.js'
import { Girl } from './girl'
 
export class Game{
    pixi: PIXI.Application
    loader: PIXI.Loader
    girl: Girl

    private pixiWidth = 800
    private pixiHeight = 500

    constructor(){
        this.pixi = new PIXI.Application({ width: this.pixiWidth, height: this.pixiHeight })
        document.body.appendChild(this.pixi.view)

        this.loader = new PIXI.Loader()
        this.loader.add('girlTexture', girlImage)
        this.loader.load(() => this.loadCompleted())
    }

    loadCompleted(){
        for (let i = 0; i < 1; i++) {
            this.girl = new Girl(this.loader.resources["girlTexture"].texture!, this)   
            this.pixi.stage.addChild(this.girl)  
        }

        this.pixi.ticker.add((delta: number) => this.update(delta))    
    }

    update(delta: number){
            this.girl.update(delta)
    }
}

new Game()
