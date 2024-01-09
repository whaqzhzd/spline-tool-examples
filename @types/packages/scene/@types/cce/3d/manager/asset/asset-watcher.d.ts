import { Asset } from 'cc';
import { AssetInfo, IAssetMeta } from '../../../../../@types/private';
import { CallbacksInvoker } from '../../../utils/callbacks-invoker';
declare module 'cc' {
    interface AssetManager {
        assetListener: CallbacksInvoker;
    }
}
declare class AssetUpdater {
    lockNum: number;
    timer: any;
    parent: AssetWatcherManager;
    constructor(parent: AssetWatcherManager);
    lock(): void;
    unlock(): void;
    onClear: {
        [key: string]: Function[];
    };
    private update;
    queue: Map<string, {
        asset: Asset | null;
        info: AssetInfo;
        meta: IAssetMeta;
    }>;
    add(uuid: string, asset: Asset | null, info: AssetInfo, meta: IAssetMeta): void;
    remove(uuid: string): void;
}
declare class AssetWatcherManager {
    updater: AssetUpdater;
    initHandle(obj: any): void;
    startWatch(obj: any): void;
    stopWatch(obj: any): void;
    eventListenerMap: Map<string, {
        [key: string]: Function;
    }>;
    once(event: string, uuid: string, func: Function): void;
    emit(event: string, uuid: string, asset: Asset): void;
    assetUpdateArray: Set<String>;
    onDBAssetChanged(uuid: string, info: AssetInfo, meta: IAssetMeta): Promise<Asset>;
    onAssetDeleted(uuid: string, url: any): void;
}
declare const assetWatcherManager: AssetWatcherManager;
export { assetWatcherManager };
//# sourceMappingURL=asset-watcher.d.ts.map