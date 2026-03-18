import{p as u,f as h,a as b,s,b as S,c as _,g as l,d,e as k}from"./index-CBalJl4v.js";import{i as w,b as g}from"./navbar.js";import{C as a}from"./code.js";import{P as $,T as W,R as T,F as x}from"./right_sidebar.js";import{I as C}from"./inline_code.js";var R=h("<!> <span>Use <!> to upgrade the connection to web sockets.</span> <!> <!> <span>Then consume the web socket on the client.</span> <!>",1);function A(m,p){u(p,!1),w(),$(m,{title:"Web Sockets",rightSidebar:e=>{T(e,{items:[{shift:0,text:"Web Sockets"}]})},footer:e=>{{let n=d(()=>({label:"Basics",href:g("/basics")})),t=d(()=>({label:"Server Sent Events",href:g("/server_sent_events")}));x(e,{get previous(){return l(n)},get next(){return l(t)}})}},children:(e,n)=>{var t=R(),o=b(t);W(o,{text:"Web Sockets"});var r=s(o,2),v=s(k(r));C(v,{source:"send.WsUpgrade()"});var i=s(r,2);a(i,{lang:"go",source:'routes.Route{Pattern: "GET /ws", Handler: welcome.View}'});var c=s(i,2);a(c,{lang:"go",source:`
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

    `}),S(e,t)},$$slots:{rightSidebar:!0,footer:!0,default:!0}}),_()}export{A as default};
