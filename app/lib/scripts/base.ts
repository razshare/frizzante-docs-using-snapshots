export function base(path: string): string {
    if (!path.startsWith("/")) {
        path = `/${path}`
    }
    return `/frizzante-docs-using-snapshots${path}`
}
