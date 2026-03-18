import { base } from "$lib/scripts/base"
import type { Suggestion } from "$lib/scripts/searchbar/suggestion"
import { textToAnchor } from "$lib/scripts/text_to_anchor"
import Fuse from "fuse.js"
const suggestions: Suggestion[] = [
    // Get Started.
    {
        page: "Get Started",
        section: "Install frizzante",
        description: "Install frizzante and get started",
        href(dev: boolean): string {
            return base(`/get_started#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Get Started",
        section: "Create project",
        description: "Create a new frizzante project using the cli",
        href(dev: boolean): string {
            return base(`/get_started#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Get Started",
        section: "Configure project",
        description: "Configure the project after creating it",
        href(dev: boolean): string {
            return base(`/get_started#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Get Started",
        section: "Start development",
        description: "Start development watcher",
        href(dev: boolean): string {
            return base(`/get_started#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Get Started",
        section: "Build",
        description: "Build the project to a standalone binary",
        href(dev: boolean): string {
            return base(`/get_started#${textToAnchor(this.section)}`, { dev })
        },
    },
    // Basics.
    {
        page: "Basics",
        section: "Basics",
        description: "Basic concepts of frizzante",
        href(dev: boolean): string {
            return base(`/basics#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Basics",
        section: "Server",
        description: "Create a new server",
        href(dev: boolean): string {
            return base(`/basics#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Basics",
        section: "Routes",
        description: "Manage server routes",
        href(dev: boolean): string {
            return base(`/basics#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Basics",
        section: "Path Fields",
        description: "Define variable path fields and retrieve them in your route handler",
        href(dev: boolean): string {
            return base(`/basics#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Basics",
        section: "Messages",
        description: "Send and receives messages",
        href(dev: boolean): string {
            return base(`/basics#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Basics",
        section: "Headers",
        description: "Send and receive header fields",
        href(dev: boolean): string {
            return base(`/basics#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Basics",
        section: "Status",
        description: "Send status code to the client",
        href(dev: boolean): string {
            return base(`/basics#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Basics",
        section: "Order of Operations",
        description: "The order in which data is sent to the client is important",
        href(dev: boolean): string {
            return base(`/basics#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Basics",
        section: "Queries",
        description: "Receive query strings from the client",
        href(dev: boolean): string {
            return base(`/basics#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Basics",
        section: "Forms",
        description: "Receive and unmarshal form payloads from the client",
        href(dev: boolean): string {
            return base(`/basics#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Basics",
        section: "Json",
        description: "Receive and unmarshal json payloads from the client",
        href(dev: boolean): string {
            return base(`/basics#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Basics",
        section: "Cookies",
        description: "Send and receive cookies",
        href(dev: boolean): string {
            return base(`/basics#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Basics",
        section: "Session Id",
        description: "Receive (and initialize) a client's session id",
        href(dev: boolean): string {
            return base(`/basics#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Basics",
        section: "Session",
        description: "Receive (and initialize) a client's session",
        href(dev: boolean): string {
            return base(`/basics#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Basics",
        section: "Redirect",
        description: "Redirect the client to a different page",
        href(dev: boolean): string {
            return base(`/basics#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Basics",
        section: "Navigate",
        description: "Redirect the client to a different page using status code 302",
        href(dev: boolean): string {
            return base(`/basics#${textToAnchor(this.section)}`, { dev })
        },
    },
    // Web Sockets.
    {
        page: "Web Sockets",
        section: "Web Sockets",
        description: "Upgrade the connection to web sockets",
        href(dev: boolean): string {
            return base(`/web_sockets#${textToAnchor(this.section)}`, { dev })
        },
    },
    // Serve Sent Events.
    {
        page: "Server Sent Events",
        section: "Server Sent Events",
        description: "Upgrade the connection to server sent events",
        href(dev: boolean): string {
            return base(`/server_sent_events#${textToAnchor(this.section)}`, { dev })
        },
    },
    // Guards.
    {
        page: "Guards",
        section: "Guards",
        description: "Protect your routes using custom rules",
        href(dev: boolean): string {
            return base(`/guards#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Guards",
        section: "Composition",
        description: "Compose guards to create advances rules",
        href(dev: boolean): string {
            return base(`/guards#${textToAnchor(this.section)}`, { dev })
        },
    },
    // Views
    {
        page: "Views",
        section: "Views",
        description: "Manage views",
        href(dev: boolean): string {
            return base(`/views#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Views",
        section: "Server Exports",
        description: "Views that are meant to be rendered on the server",
        href(dev: boolean): string {
            return base(`/views#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Views",
        section: "Client Exports",
        description: "Views that are meant to be rendered on the client",
        href(dev: boolean): string {
            return base(`/views#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Views",
        section: "Send Views",
        description: "Send views from a route handler",
        href(dev: boolean): string {
            return base(`/views#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Views",
        section: "Default View",
        description: 'How to setup a "default" view',
        href(dev: boolean): string {
            return base(`/views#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Views",
        section: "View Properties",
        description: "Pass properties to views",
        href(dev: boolean): string {
            return base(`/views#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Views",
        section: "Render Modes",
        description: "Switch between render modes at runtime",
        href(dev: boolean): string {
            return base(`/views#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Views",
        section: "RenderModeFull",
        description: "The view is rendered on both the server and the client",
        href(dev: boolean): string {
            return base(`/views#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Views",
        section: "RenderModeServer",
        description: "The view is rendered only on the server",
        href(dev: boolean): string {
            return base(`/views#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Views",
        section: "RenderModeClient",
        description: "The view is rendered only on the client",
        href(dev: boolean): string {
            return base(`/views#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Views",
        section: "Disabling server-side JavaScript runtime",
        description: "Disable the server-side JavaScript runtime in order to reduce memory footprint and binary size",
        href(dev: boolean): string {
            return base(`/views#${textToAnchor(this.section)}`, { dev })
        },
    },
    // Web Standards.
    {
        page: "Web Standards",
        section: "Web Standards",
        description: "",
        href(dev: boolean): string {
            return base(`/web_standards#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Web Standards",
        section: "Adaptive Hyperlinks",
        description: "",
        href(dev: boolean): string {
            return base(`/web_standards#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Web Standards",
        section: "Adaptive Forms",
        description: "",
        href(dev: boolean): string {
            return base(`/web_standards#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Web Standards",
        section: "Link Component",
        description: "",
        href(dev: boolean): string {
            return base(`/web_standards#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Web Standards",
        section: "Form Component",
        description: "",
        href(dev: boolean): string {
            return base(`/web_standards#${textToAnchor(this.section)}`, { dev })
        },
    },
    // Type Definitions.
    {
        page: "Type Definitions",
        section: "Type Definitions",
        description: "",
        href(dev: boolean): string {
            return base(`/type_definitions#${textToAnchor(this.section)}`, { dev })
        },
    },
    // Todos Example.
    {
        page: "Todos Example",
        section: "Todos Example",
        description: "",
        href(dev: boolean): string {
            return base(`/todos_example#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Todos Example",
        section: "Main",
        description: "",
        href(dev: boolean): string {
            return base(`/todos_example#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Todos Example",
        section: "Fallback",
        description: "",
        href(dev: boolean): string {
            return base(`/todos_example#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Todos Example",
        section: "Welcome View",
        description: "",
        href(dev: boolean): string {
            return base(`/todos_example#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Todos Example",
        section: "Todos View",
        description: "",
        href(dev: boolean): string {
            return base(`/todos_example#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Todos Example",
        section: "List Todos",
        description: "",
        href(dev: boolean): string {
            return base(`/todos_example#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Todos Example",
        section: "Remove Todos",
        description: "",
        href(dev: boolean): string {
            return base(`/todos_example#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Todos Example",
        section: "Toggle Todos",
        description: "",
        href(dev: boolean): string {
            return base(`/todos_example#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Todos Example",
        section: "Add Todos",
        description: "",
        href(dev: boolean): string {
            return base(`/todos_example#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Todos Example",
        section: "More Examples",
        description: "",
        href(dev: boolean): string {
            return base(`/todos_example#${textToAnchor(this.section)}`, { dev })
        },
    },
    // Cli.
    {
        page: "Cli",
        section: "Cli",
        description: "",
        href(dev: boolean): string {
            return base(`/cli#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Cli",
        section: "Create Project",
        description: "",
        href(dev: boolean): string {
            return base(`/cli#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Cli",
        section: "Generate",
        description: "",
        href(dev: boolean): string {
            return base(`/cli#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Cli",
        section: "Configure",
        description: "",
        href(dev: boolean): string {
            return base(`/cli#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Cli",
        section: "Configure",
        description: "",
        href(dev: boolean): string {
            return base(`/cli#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Cli",
        section: "Plugins",
        description: "",
        href(dev: boolean): string {
            return base(`/cli#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Cli",
        section: "Update",
        description: "",
        href(dev: boolean): string {
            return base(`/cli#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Cli",
        section: "Package",
        description: "",
        href(dev: boolean): string {
            return base(`/cli#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Cli",
        section: "Package Watch",
        description: "",
        href(dev: boolean): string {
            return base(`/cli#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Cli",
        section: "Build",
        description: "",
        href(dev: boolean): string {
            return base(`/cli#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Cli",
        section: "Check",
        description: "",
        href(dev: boolean): string {
            return base(`/cli#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Cli",
        section: "Touch",
        description: "",
        href(dev: boolean): string {
            return base(`/cli#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Cli",
        section: "Clean Project",
        description: "",
        href(dev: boolean): string {
            return base(`/cli#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Cli",
        section: "Reset",
        description: "",
        href(dev: boolean): string {
            return base(`/cli#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Cli",
        section: "Strict",
        description: "",
        href(dev: boolean): string {
            return base(`/cli#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Cli",
        section: "Version",
        description: "",
        href(dev: boolean): string {
            return base(`/cli#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Cli",
        section: "Help",
        description: "",
        href(dev: boolean): string {
            return base(`/cli#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Cli",
        section: "Interactive Mode",
        description: "",
        href(dev: boolean): string {
            return base(`/cli#${textToAnchor(this.section)}`, { dev })
        },
    },
    // Snapshots.
    {
        page: "Snapshots",
        section: "Snapshots",
        description: "",
        href(dev: boolean): string {
            return base(`/snapshots#${textToAnchor(this.section)}`, { dev })
        },
    },
    // Docker.
    {
        page: "Docker",
        section: "Docker",
        description: "",
        href(dev: boolean): string {
            return base(`/docker#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Docker",
        section: "Create a new container",
        description: "",
        href(dev: boolean): string {
            return base(`/docker#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Docker",
        section: "Start the container",
        description: "",
        href(dev: boolean): string {
            return base(`/docker#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Docker",
        section: "Attach to this container with your IDE or directly with a shell",
        description: "",
        href(dev: boolean): string {
            return base(`/docker#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Docker",
        section: "Configure project",
        description: "",
        href(dev: boolean): string {
            return base(`/docker#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Docker",
        section: "Start development",
        description: "",
        href(dev: boolean): string {
            return base(`/docker#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Docker",
        section: "Build",
        description: "",
        href(dev: boolean): string {
            return base(`/docker#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Docker",
        section: "Build and run production binary inside container",
        description: "",
        href(dev: boolean): string {
            return base(`/docker#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Docker",
        section: "Build production Docker image",
        description: "",
        href(dev: boolean): string {
            return base(`/docker#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Docker",
        section: "Use Docker Compose for production",
        description: "",
        href(dev: boolean): string {
            return base(`/docker#${textToAnchor(this.section)}`, { dev })
        },
    },
    // Issues.
    {
        page: "Issues",
        section: "Reporting a Bug",
        description: "",
        href(dev: boolean): string {
            return base(`/issues#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Issues",
        section: "Requesting a Feature",
        description: "",
        href(dev: boolean): string {
            return base(`/issues#${textToAnchor(this.section)}`, { dev })
        },
    },
    // Contributing.
    {
        page: "Contributing",
        section: "Contributing",
        description: "",
        href(dev: boolean): string {
            return base(`/contributing#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Contributing",
        section: "Clone Repository",
        description: "",
        href(dev: boolean): string {
            return base(`/contributing#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Contributing",
        section: "Create Branch",
        description: "",
        href(dev: boolean): string {
            return base(`/contributing#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Contributing",
        section: "Coding Standards",
        description: "",
        href(dev: boolean): string {
            return base(`/contributing#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Contributing",
        section: "Export Everything",
        description: "",
        href(dev: boolean): string {
            return base(`/contributing#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Contributing",
        section: "Data & Logic",
        description: "",
        href(dev: boolean): string {
            return base(`/contributing#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Contributing",
        section: "Pull Requests",
        description: "",
        href(dev: boolean): string {
            return base(`/contributing#${textToAnchor(this.section)}`, { dev })
        },
    },
    // Faq.
    {
        page: "Faq",
        section: "Why doesn't frizzante have middleware?",
        description: "",
        href(dev: boolean): string {
            return base(`/faq#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Faq",
        section: "Middleware Implementation",
        description: "",
        href(dev: boolean): string {
            return base(`/faq#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Faq",
        section: "Middleware Usage",
        description: "",
        href(dev: boolean): string {
            return base(`/faq#${textToAnchor(this.section)}`, { dev })
        },
    },
    {
        page: "Faq",
        section: "Can I use Frizzante with other frontend frameworks?",
        description: "",
        href(dev: boolean): string {
            return base(`/faq#${textToAnchor(this.section)}`, { dev })
        },
    },
]
const fuse = new Fuse(suggestions, {
    keys: ["page", "section", "description"],
})
export function find(query: string): Suggestion[] {
    const results = fuse.search(query)
    const suggestions: Suggestion[] = []
    for (const result of results) {
        suggestions.push(result.item)
    }
    return suggestions
}
