import{p as f,f as h,a as S,s,b,c as _,g as c,d,e as w}from"./index-CBalJl4v.js";import{i as k,b as g}from"./navbar.js";import{C as a}from"./code.js";import{P as $,T as E,R as T,F as x}from"./right_sidebar.js";import{I as C}from"./inline_code.js";var H=h("<!> <span>Use <!> to upgrade the connection to server sent events.</span> <!> <!> <span>Then consume the stream on the client.</span> <!>",1);function F(m,v){f(v,!1),k(),$(m,{title:"Server Sent Events",rightSidebar:e=>{T(e,{items:[{shift:0,text:"Server Sent Events"}]})},footer:e=>{{let n=d(()=>({label:"Web Sockets",href:g("/web_sockets")})),t=d(()=>({label:"Guards",href:g("/guards")}));x(e,{get previous(){return c(n)},get next(){return c(t)}})}},children:(e,n)=>{var t=H(),r=S(t);E(r,{text:"Server Sent Events"});var o=s(r,2),p=s(w(o));C(p,{source:"send.SseUpgrade()"});var i=s(o,2);a(i,{lang:"go",source:'routes.Route{Pattern: "GET /sse", Handler: welcome.View}'});var l=s(i,2);a(l,{lang:"go",source:`
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
        `});var u=s(l,4);a(u,{lang:"svelte",source:`
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
    `}),b(e,t)},$$slots:{rightSidebar:!0,footer:!0,default:!0}}),_()}export{F as default};
