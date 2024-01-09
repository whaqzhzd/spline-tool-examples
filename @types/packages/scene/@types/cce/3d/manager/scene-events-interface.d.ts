import { AssetInfo, IAssetMeta, IChangeNodeOptions, IOptionBase } from '../../../../@types/private';
import { Node, Component, ISizeLike, Asset } from 'cc';
interface ISceneEvents {
    onResize?(opts: ISizeLike): void;
    onSceneOpened?(scene: any): void;
    onSceneReload?(scene: any): void;
    onSceneClosed?(scene: any): void;
    onNodeBeforeChanged?(node: Node): void;
    onNodeChanged?(node: Node, opts: IChangeNodeOptions): void;
    onAddNode?(node: Node): void;
    onRemoveNode?(node: Node): void;
    onNodeAdded?(node: Node, opts: IOptionBase): void;
    onNodeRemoved?(node: Node, opts: IOptionBase): void;
    onAddComponent?(comp: Component): void;
    onRemoveComponent?(comp: Component): void;
    onComponentAdded?(comp: Component, opts?: IOptionBase): void;
    onComponentRemoved?(comp: Component, opts?: IOptionBase): void;
    onAssetDeleted?(uuid: string, info?: any): void;
    onSceneAssetChanged?(uuid: string, asset: Asset | null, info?: AssetInfo, meta?: IAssetMeta): void;
}
export { ISceneEvents };
//# sourceMappingURL=scene-events-interface.d.ts.map