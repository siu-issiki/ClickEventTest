var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.addToStage, _this);
        return _this;
    }
    Main.prototype.addToStage = function () {
        var _this = this;
        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) { return _this.tap(e); }, this);
    };
    Main.prototype.tap = function (e) {
        var _this = this;
        //Eventがあればtrueを返す
        var checkEvent = this.stage.hasEventListener(egret.TouchEvent.TOUCH_TAP);
        console.log("test");
        console.log(checkEvent);
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, function (e) { return _this.tap(e); }, this);
        console.log(checkEvent);
    };
    return Main;
}(eui.UILayer));
__reflect(Main.prototype, "Main");
//# sourceMappingURL=Main.js.map