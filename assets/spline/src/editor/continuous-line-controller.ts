import Controller from "./base/controller";
import { createLineShape } from "./utils";

export default class ContinuousLineController extends Controller {
  _lineShape: any = null;

  constructor(rootNode: any) {
    super(rootNode);
    this.initShape();
  }

  initShape() {
    this.createShapeNode("ContinuousLineController");

    this._lineShape = createLineShape("Continuous Line");
    this._lineShape.parent = this.shape;
  }

  updatePoints(points: any) {
    this._lineShape.updatePoints(points);
  }
}
