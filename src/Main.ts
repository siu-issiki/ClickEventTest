class Main extends eui.UILayer {

    public constructor() {
        super();
        this.once(egret.Event.ADDED_TO_STAGE, this.addToStage, this);
    }
 
    private addToStage() {
        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => this.tap(e), this);

    }

    tap(e : egret.TouchEvent){

        //Eventがあればtrueを返す
        let checkEvent : boolean = this.stage.hasEventListener(egret.TouchEvent.TOUCH_TAP);

        console.log("test");
        console.log(checkEvent)
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => this.tap(e), this);
        console.log(checkEvent)

        
    }


}


