export type Suggestion = {
    page: string
    section: string
    description: string
    href: (dev: boolean) => string
}
