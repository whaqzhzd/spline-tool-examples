export default class Event {
  _listeners: any[][] = [];

  public addListener(cb: Function, target?: Object) {
    let listeners = this._listeners;
    for (let i = 0; i < listeners.length; i++) {
      if (listeners[i][0] === cb && listeners[i][1] === target) {
        return;
      }
    }
    this._listeners.push([cb, target]);
  }

  public removeListener(cb: Function, target?: Object) {
    let listeners = this._listeners;
    for (let i = 0; i < listeners.length; i++) {
      if (listeners[i][0] === cb) {
        listeners.splice(i, 1);
        return;
      }
    }
  }

  public invoke(a1?: any, a2?: any, a3?: any, a4?: any, a5?: any, a6?: any) {
    var args: any[] = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    let listeners = this._listeners;
    for (let i = 0; i < listeners.length; i++) {
      let l = listeners[i];
      l[0].apply(l[1], args);
    }
  }
}
