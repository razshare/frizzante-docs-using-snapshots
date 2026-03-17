import{f as g,a as m,s,b as v,e as p}from"./index-DcfPEVm2.js";import"./navbar.js";import{C as t}from"./code.js";import{P as h,T as f,R as u,F as S}from"./right_sidebar.js";import{I as b}from"./inline_code.js";var _=g("<!> <span>Use <!> to upgrade the connection to server sent events.</span> <!> <!> <span>Then consume the stream on the client.</span> <!>",1);function H(c){h(c,{title:"Server Sent Events",rightSidebar:e=>{u(e,{items:[{shift:0,text:"Server Sent Events"}]})},footer:e=>{S(e,{previous:{label:"Web Sockets",href:"/frizzante-docs-using-snapshots/web_sockets"},next:{label:"Guards",href:"/frizzante-docs-using-snapshots/guards"}})},children:(e,E)=>{var n=_(),a=m(n);f(a,{text:"Server Sent Events"});var r=s(a,2),l=s(p(r));b(l,{source:"send.SseUpgrade()"});var o=s(r,2);t(o,{lang:"go",source:'routes.Route{Pattern: "GET /sse", Handler: welcome.View}'});var i=s(o,2);t(i,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/receive"
                "main/lib/core/send"
                "time"
            )

            func View(client *clients.Client) {
                alive := receive.IsAlive(client)    // Tracks request status.
                event := send.SseUpgrade(client)    // Sends sse upgrade.
                for *alive {                        // Loops until cancellation.
                    event("channel-1")              // Switches to "channel-1".
                    send.Message(client, "Hello 1") // Sends message.
                    event("channel-2")              // Switches to "channel-2".
                    send.Message(client, "Hello 2") // Sends message.
                    time.Sleep(time.Second)         // Sleeps for 1 second.
                }
            }
        `});var d=s(i,4);t(d,{lang:"svelte",source:`
        <script lang="ts">
            const messages: string[] = $state([]) // Creates reactive list of messages.
            const socket = new WebSocket("/ws")   // Connects to handler.
            socket.addEventListener("message", function listen(event:MessageEvent) {
                messages.push(event.data)         // Appends incoming messages to the 
                                                  // reactive list of messages for later use.
            })
            socket.send("Hello")                  // Sends message.
        <\/script>

        <Title  text="Messages"/>
        {#each messages as message, id (id)}      <!-- Iterates the list of messages. -->
            <div>{message}</div>                  <!-- Renders message. -->
        {/each}
    `}),v(e,n)},$$slots:{rightSidebar:!0,footer:!0,default:!0}})}export{H as default};
