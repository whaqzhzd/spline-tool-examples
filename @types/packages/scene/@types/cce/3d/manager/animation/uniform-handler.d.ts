/// <reference path="../../../../../../../../resources/3d/engine/bin/.declarations/cc.d.ts" />
/// <reference path="../../../public/gizmos/utils/engine/3d.d.ts" />
/// <reference path="../../../public/gizmos/3d/gizmo-manager.d.ts" />
/// <reference path="../asset/asset-watcher.d.ts" />
import { IDumpType } from '../../../../../@types/private';
import { animation, Material, renderer } from 'cc';
import { IPassDumpData, IPropData } from './type-defines';
declare class UniformHandler {
    isUniformCurve(valueAdapter?: animation.IValueProxyFactory): boolean;
    getValueToArrayIndexMapByType(type?: string): any;
    getArrayIndexToValuePartMapByType(type?: string): any;
    getUniformNameData(passIndex: number, uniformName: string): {
        key: string;
        displayName: string;
    };
    /**
     * 获得一个Uniform的dump数据
     * @param {*} pass
     * @param {*} uniformName
     */
    getDumpTypeOfUniform(pass: any, uniformName: string): IDumpType;
    getUniformDumpData(material: Material, valueAdapter: animation.UniformProxyFactory): {
        displayName: string;
        key: string;
        type: IDumpType | undefined;
    };
    getAnimablePropsFromMaterial(material: Material): IPassDumpData[] | null;
    getDefaultValue(type: string): unknown;
    getCurrentValue(material: Material, valueAdapter: animation.UniformProxyFactory, propData: IPropData): Promise<import("cc").Asset | renderer.MaterialProperty | undefined>;
    colorFloatToInt(values: number[]): number[];
}
declare const uniformHandler: UniformHandler;
export { uniformHandler };
//# sourceMappingURL=uniform-handler.d.ts.map