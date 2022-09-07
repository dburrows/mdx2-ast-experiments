export function traverse(o: any, fn: (obj: any, prop: string, value: any) => void) {
    for (const i in o) {
        fn.apply(this, [o, i, o[i]]);
        if (o[i] !== null && typeof(o[i]) === 'object') {
            traverse(o[i], fn);
        }
    }
}