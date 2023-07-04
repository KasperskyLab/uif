export type DomainChanges = {
    unscopedChanges: {};
    scopedChanges: {};
}

export type VariableStore = {
    set: (name: string, value: any, isReadonly?: boolean) => void;
    get: (name: string) => any;
    offFor: (scope: string) => void;
    remove: (name: string) => void;
    clear: (name: string) => boolean;
    clearAll: () => void;
    onChange (name: string, handler: (value: any) => void): void,
    onChange (name: string, scope: any, handler: (value: any) => void): void,
    unsubscribe (name: string, callback?: (...args: unknown[]) => void): void
}

export type Domain = {
    name: string;
    pluginId: string;
    onChange: (...args: any[]) => Promise<void>;
    onSave: (...args: any[]) => Promise<void>;
    onInit: (...args: any[]) => Promise<void>;
    onRevert: (...args: any[]) => Promise<void>;
    readonly initialized: boolean;
    getChanges: () => DomainChanges;
    setChanges: (changes: DomainChanges) => void;
    clearState: () => void;
    change: (key: string, val: any, scope: string) => void;
    save: (additionalChanges: any) => Promise<any>;
    revert: () => Promise<void>;
    dispose: () => void;
    on: (evtName: string, cb: (...args: any[]) => void) => void;
    off: (evtName: string, cb: (...args: any[]) => void) => void;
    offScope: (evtName: any, cb: (...args: any[]) => void) => void;
    trigger: (evtName: string, ...args: any[]) => void;
    variable: VariableStore;
    initialize: () => Promise<void>;
};

export type RuntimeDomain = {
    readonly history: string[],
    getOrCreate (name: string): Domain,
    get (name: string): Domain,
    create (name: string): Domain,
    remove (name: string): boolean
}

export type RuntimeMember = {
    name: string;
    instance: any;
    expose: boolean;
    join(): void;
}

type MappedResolve<Mapped extends Record<string, any>, K extends string> = K extends keyof Mapped ? Mapped[K] : any;

export type GlobalRuntime<Mapped extends Record<string, any> = {}> = {
    id: number;
    get<K extends string> (...name: K[]): Promise<MappedResolve<Mapped, K>>,
    getSync<K extends string> (name: K, returnMemberAsIs?: boolean): MappedResolve<Mapped, K>,
    join (name: string, instance: any): void;
    join<T> (options: { scope?: string, name: string, member(...args: any): T  }): void;
    deleteMember (name: string): void;
    reserveMember (name: string, unlockKey: any): void;
    release (...scope: any[]): void;
    on (eventName: string, callback: (...args: any[]) => void): void,
    on (eventName: string, scope: any, callback: () => void): void,
    one (eventName: string, callback: () => void): void,
    off (eventName: string, callback: (...args: any[]) => void): void,
    trigger (eventName: string, ...args: any[]): void,
    triggerDelayed (eventName: string, ...args: any[]): void,
    execute (name: string, ...args: any[]): Promise<any>,
    getNode (nodeName: string): Promise<any>;
    trackPath (path: string, callback: (newMember: string) => void): void;
    clear (): void;
    member (name: string, instance: any, expose?: boolean): RuntimeMember;
    alias (originalName: string, alias: string): void;
    createSandbox <T extends Record<string, any>>(objToExtend: T, id: string): SandboxRuntime & T;
    getSandbox (id: string): SandboxRuntime;
    extend (name: string, value: any): void;
    memberSearch (query: string): string[];
    variable: VariableStore;
    domain: RuntimeDomain;
}

export type SandboxRuntime<Mapped extends Record<string, any> = {}> = GlobalRuntime<Mapped> & {
    ksc: Pick<GlobalRuntime, 'on' | 'off' | 'trigger' | 'getNode' | 'getSync'> & {
        variable: Pick<VariableStore, 'get'>
    }
}
