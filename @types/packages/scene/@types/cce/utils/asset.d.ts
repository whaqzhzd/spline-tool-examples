import { Asset } from 'cc';
/**
 * 加载指定资源，不使用缓存。注意该方法不会清除旧的资源，你仍然需要自行释放旧的资源
 * @param uuid 资源 UUID。
 * @param type 资源类型，如果指定则判断指定资源是否为目标类型，若验证出错则抛出异常。
 * @returns 指定的资源。
 */
export declare function loadAssetUncached<TAsset extends Asset>(uuid: string, options?: {
    option?: any;
    onComplete?: (error: Error | null, asset: TAsset) => void;
    onProgress?: Function;
}, type?: new () => TAsset): Promise<TAsset>;
/**
 * 从缓存中获取资源，获取不到时再去加载，在大多数时候都可以使用该方法
 * @param uuid
 * @returns
 */
export declare function loadAssetFromCache<TAsset extends Asset>(uuid: string, options?: {
    option?: any;
    onComplete?: (error: Error | null, asset: TAsset) => void;
    onProgress?: Function;
}, type?: new () => TAsset): Promise<TAsset>;
export declare function loadAssetClone<TAsset extends Asset>(uuid: string, options?: {
    option?: any;
    onComplete?: (error: Error | null, asset: TAsset) => void;
    onProgress?: Function;
}, type?: new () => TAsset): Promise<TAsset>;
//# sourceMappingURL=asset.d.ts.map