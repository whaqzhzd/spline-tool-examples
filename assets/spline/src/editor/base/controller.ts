import { js } from "cc";
import { Node } from "cc";
import { callGizmoFunction } from "../utils";
import _Gizmo from "./gizmo";

export default class Controller {
  //#region  TODO: change to declare
  public shape: Node | null = null;
  createShapeNode(name: string) {
    return window.cce.gizmos.ControllerBase.prototype.createShapeNode.call(
      this,
      name
    );
  }
  initAxis(node: Node, axisName: string ) {
    return window.cce.gizmos.ControllerBase.prototype.initHandle.call(
      this,
      node,
      axisName
    );
  }
  updateController() {
    return window.cce.gizmos.ControllerBase.prototype.updateController.call(
      this
    );
  }
  show() {
    return window.cce.gizmos.ControllerBase.prototype.show.call(this);
  }
  hide() {
    return window.cce.gizmos.ControllerBase.prototype.hide.call(this);
  }
  registerCameraMovedEvent() {
    return window.cce.gizmos.ControllerBase.prototype.registerCameraMovedEvent.call(
      this
    );
  }
  unregisterCameraMoveEvent() {
    return window.cce.gizmos.ControllerBase.prototype.unregisterCameraMoveEvent.call(
      this
    );
  }
  adjustControllerSize() {
    return window.cce.gizmos.ControllerBase.prototype.adjustControllerSize.call(
      this
    );
  }
  //#endregion

  constructor(rootNode: any) {
    js.addon(this, new window.cce.gizmos.ControllerBase(rootNode));
  }

  onControllerMouseDown(event: any) {}
  onControllerMouseMove(event: any) {}
  onControllerMouseUp(event: any) {}

  onMouseDown(event: any) {
    this.onControllerMouseDown(event);
  }
  onMouseMove(event: any) {
    this.onControllerMouseMove(event);
  }
  onMouseUp(event: any) {
    this.onControllerMouseUp(event);
  }
  onMouseLeave(event: any) {
    this.onMouseUp(event);
  }
}

if (CC_EDITOR) {
  callGizmoFunction(() => {
    Object.setPrototypeOf(
      Controller.prototype,
      window.cce.gizmos.ControllerBase.prototype
    );
  });
}
