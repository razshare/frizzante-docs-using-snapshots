import{p as v,f as h,a as b,s,b as S,c as _,g as d,u as g,h as k}from"./index-CQxZXpNM.js";import{C as r}from"./code.js";import{P as x,T as w,R as W,F as T}from"./right_sidebar.js";import{I as C}from"./inline_code.js";import{b as m}from"./navbar.js";var R=h("<!> <span>Use <!> to upgrade the connection to web sockets.</span> <!> <!> <span>Then consume the web socket on the client.</span> <!>",1);function F(p,t){v(t,!0),x(p,{title:"Web Sockets",get prefix(){return t.prefix},rightSidebar:e=>{W(e,{items:[{shift:0,text:"Web Sockets"}]})},footer:e=>{{let n=g(()=>({label:"Basics",href:m("/basics",{prefix:t.prefix})})),a=g(()=>({label:"Server Sent Events",href:m("/server_sent_events",{prefix:t.prefix})}));T(e,{get previous(){return d(n)},get next(){return d(a)}})}},children:(e,n)=>{var a=R(),i=b(a);w(i,{text:"Web Sockets"});var o=s(i,2),f=s(k(o));C(f,{source:"send.WsUpgrade()"});var c=s(o,2);r(c,{lang:"go",source:'routes.Route{Pattern: "GET /ws", Handler: welcome.View}'});var l=s(c,2);r(l,{lang:"go",source:`
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
        `});var u=s(l,4);r(u,{lang:"svelte",source:`
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

    `}),S(e,a)},$$slots:{rightSidebar:!0,footer:!0,default:!0}}),_()}export{F as default};
