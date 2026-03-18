export function base(path: string): string {
    if (path.startsWith("./")) {
        return path
    }
    if (path.startsWith("/")) {
        return `.${path}`
    }
    return `./${path}`
}
