import{f as m,a as g,s,b as p,e as v}from"./index-elLOZMZZ.js";import"./navbar-DCDF4cA1.js";import{C as t}from"./code-CHySw2ew.js";import{P as f,T as u,R as h,F as b}from"./right_sidebar-DSOKDO70.js";import{I as S}from"./inline_code-w6SJIKYc.js";var _=m("<!> <span>Use <!> to upgrade the connection to web sockets.</span> <!> <!> <span>Then consume the web socket on the client.</span> <!>",1);function E(c){f(c,{title:"Web Sockets",rightSidebar:e=>{h(e,{items:[{shift:0,text:"Web Sockets"}]})},footer:e=>{b(e,{previous:{label:"Basics",href:"/basics"},next:{label:"Server Sent Events",href:"/server_sent_events"}})},children:(e,W)=>{var a=_(),o=g(a);u(o,{text:"Web Sockets"});var n=s(o,2),l=s(v(n));S(l,{source:"send.WsUpgrade()"});var r=s(n,2);t(r,{lang:"go",source:'routes.Route{Pattern: "GET /ws", Handler: welcome.View}'});var i=s(r,2);t(i,{lang:"go",source:`
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

    `}),p(e,a)},$$slots:{rightSidebar:!0,footer:!0,default:!0}})}export{E as default};
