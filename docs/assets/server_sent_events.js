import{p as u,f as h,a as S,s,b,c as _,g as d,u as g,h as x}from"./index-D0lsslyH.js";import{C as a}from"./code.js";import{P as w,T as k,R as E,F as T}from"./right_sidebar.js";import{I as C}from"./inline_code.js";import{b as m}from"./navbar.js";var H=h("<!> <span>Use <!> to upgrade the connection to server sent events.</span> <!> <!> <span>Then consume the stream on the client.</span> <!>",1);function G(v,t){u(t,!0),w(v,{title:"Server Sent Events",get prefix(){return t.prefix},rightSidebar:e=>{E(e,{items:[{shift:0,text:"Server Sent Events"}]})},footer:e=>{{let r=g(()=>({label:"Web Sockets",href:m("/web_sockets",{prefix:t.prefix})})),n=g(()=>({label:"Guards",href:m("/guards",{prefix:t.prefix})}));T(e,{get previous(){return d(r)},get next(){return d(n)}})}},children:(e,r)=>{var n=H(),o=S(n);k(o,{text:"Server Sent Events"});var i=s(o,2),p=s(x(i));C(p,{source:"send.SseUpgrade()"});var l=s(i,2);a(l,{lang:"go",source:'routes.Route{Pattern: "GET /sse", Handler: welcome.View}'});var c=s(l,2);a(c,{lang:"go",source:`
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
        `});var f=s(c,4);a(f,{lang:"svelte",source:`
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
    `}),b(e,n)},$$slots:{rightSidebar:!0,footer:!0,default:!0}}),_()}export{G as default};
