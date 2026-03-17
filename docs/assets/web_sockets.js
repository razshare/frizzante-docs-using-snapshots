import{f as g,a as m,s,b as p,e as v}from"./index-DcfPEVm2.js";import"./navbar.js";import{C as t}from"./code.js";import{P as f,T as u,R as h,F as b}from"./right_sidebar.js";import{I as S}from"./inline_code.js";var _=g("<!> <span>Use <!> to upgrade the connection to web sockets.</span> <!> <!> <span>Then consume the web socket on the client.</span> <!>",1);function z(c){f(c,{title:"Web Sockets",rightSidebar:e=>{h(e,{items:[{shift:0,text:"Web Sockets"}]})},footer:e=>{b(e,{previous:{label:"Basics",href:"/frizzante-docs-using-snapshots/basics"},next:{label:"Server Sent Events",href:"/frizzante-docs-using-snapshots/server_sent_events"}})},children:(e,W)=>{var a=_(),n=m(a);u(n,{text:"Web Sockets"});var o=s(n,2),l=s(v(o));S(l,{source:"send.WsUpgrade()"});var i=s(o,2);t(i,{lang:"go",source:'routes.Route{Pattern: "GET /ws", Handler: welcome.View}'});var r=s(i,2);t(r,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/receive"
                "main/lib/core/send"
                "time"
            )

            func View(client *clients.Client) {
                alive := receive.IsAlive(client)          // Tracks request status.
                send.WsUpgrade(client)                    // Sends ws upgrade.
                for *alive {                              // Loops until cancellation.
                    name := receive.Message(client)       // Receives message.
                    send.Message(client, "Hello " + name) // Sends message.
                    time.Sleep(time.Second)               // Sleeps for 1 second.
                }
            }
        `});var d=s(r,4);t(d,{lang:"svelte",source:`
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

    `}),p(e,a)},$$slots:{rightSidebar:!0,footer:!0,default:!0}})}export{z as default};
