import{f as m,a as g,s,b as p,e as v}from"./index-CyUB-u5I.js";import"./navbar-Bq-wZn0a.js";import{C as t}from"./code-Bjcp1zbm.js";import{P as f,T as u,R as h,F as b}from"./right_sidebar-CEup7F2R.js";import{I as S}from"./inline_code-CCsj0dtc.js";var _=m("<!> <span>Use <!> to upgrade the connection to web sockets.</span> <!> <!> <span>Then consume the web socket on the client.</span> <!>",1);function E(c){f(c,{title:"Web Sockets",rightSidebar:e=>{h(e,{items:[{shift:0,text:"Web Sockets"}]})},footer:e=>{b(e,{previous:{label:"Basics",href:"/basics"},next:{label:"Server Sent Events",href:"/server_sent_events"}})},children:(e,W)=>{var a=_(),o=g(a);u(o,{text:"Web Sockets"});var n=s(o,2),l=s(v(n));S(l,{source:"send.WsUpgrade()"});var r=s(n,2);t(r,{lang:"go",source:'routes.Route{Pattern: "GET /ws", Handler: welcome.View}'});var i=s(r,2);t(i,{lang:"go",source:`
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViX3NvY2tldHMtQ1J5ODRWY1AuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi92aWV3cy93ZWJfc29ja2V0cy5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBsYW5nPVwidHNcIj5cbiAgICBpbXBvcnQgQ29kZSBmcm9tIFwiJGxpYi9jb21wb25lbnRzL2NvZGUuc3ZlbHRlXCJcbiAgICBpbXBvcnQgRm9vdGVyIGZyb20gXCIkbGliL2NvbXBvbmVudHMvZm9vdGVyLnN2ZWx0ZVwiXG4gICAgaW1wb3J0IElubGluZUNvZGUgZnJvbSBcIiRsaWIvY29tcG9uZW50cy9pbmxpbmVfY29kZS5zdmVsdGVcIlxuICAgIGltcG9ydCBQYWdlIGZyb20gXCIkbGliL2NvbXBvbmVudHMvcGFnZS5zdmVsdGVcIlxuICAgIGltcG9ydCBSaWdodFNpZGViYXIgZnJvbSBcIiRsaWIvY29tcG9uZW50cy9yaWdodF9zaWRlYmFyLnN2ZWx0ZVwiXG4gICAgaW1wb3J0IFRpdGxlIGZyb20gXCIkbGliL2NvbXBvbmVudHMvdGl0bGUuc3ZlbHRlXCJcbjwvc2NyaXB0PlxuXG48UGFnZSB0aXRsZT1cIldlYiBTb2NrZXRzXCI+XG4gICAgPFRpdGxlIHRleHQ9XCJXZWIgU29ja2V0c1wiIC8+XG4gICAgPHNwYW4+VXNlIDxJbmxpbmVDb2RlIHNvdXJjZT1cInNlbmQuV3NVcGdyYWRlKClcIiAvPiB0byB1cGdyYWRlIHRoZSBjb25uZWN0aW9uIHRvIHdlYiBzb2NrZXRzLjwvc3Bhbj5cbiAgICA8Q29kZSBsYW5nPVwiZ29cIiBzb3VyY2U9e2Byb3V0ZXMuUm91dGV7UGF0dGVybjogXCJHRVQgL3dzXCIsIEhhbmRsZXI6IHdlbGNvbWUuVmlld31gfSAvPlxuICAgIDxDb2RlXG4gICAgICAgIGxhbmc9XCJnb1wiXG4gICAgICAgIHNvdXJjZT17YFxuICAgICAgICAgICAgcGFja2FnZSB3ZWxjb21lXG5cbiAgICAgICAgICAgIGltcG9ydCAoXG4gICAgICAgICAgICAgICAgXCJtYWluL2xpYi9jb3JlL2NsaWVudHNcIlxuICAgICAgICAgICAgICAgIFwibWFpbi9saWIvY29yZS9yZWNlaXZlXCJcbiAgICAgICAgICAgICAgICBcIm1haW4vbGliL2NvcmUvc2VuZFwiXG4gICAgICAgICAgICAgICAgXCJ0aW1lXCJcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgZnVuYyBWaWV3KGNsaWVudCAqY2xpZW50cy5DbGllbnQpIHtcbiAgICAgICAgICAgICAgICBhbGl2ZSA6PSByZWNlaXZlLklzQWxpdmUoY2xpZW50KSAgICAgICAgICAvLyBUcmFja3MgcmVxdWVzdCBzdGF0dXMuXG4gICAgICAgICAgICAgICAgc2VuZC5Xc1VwZ3JhZGUoY2xpZW50KSAgICAgICAgICAgICAgICAgICAgLy8gU2VuZHMgd3MgdXBncmFkZS5cbiAgICAgICAgICAgICAgICBmb3IgKmFsaXZlIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBMb29wcyB1bnRpbCBjYW5jZWxsYXRpb24uXG4gICAgICAgICAgICAgICAgICAgIG5hbWUgOj0gcmVjZWl2ZS5NZXNzYWdlKGNsaWVudCkgICAgICAgLy8gUmVjZWl2ZXMgbWVzc2FnZS5cbiAgICAgICAgICAgICAgICAgICAgc2VuZC5NZXNzYWdlKGNsaWVudCwgXCJIZWxsbyBcIiArIG5hbWUpIC8vIFNlbmRzIG1lc3NhZ2UuXG4gICAgICAgICAgICAgICAgICAgIHRpbWUuU2xlZXAodGltZS5TZWNvbmQpICAgICAgICAgICAgICAgLy8gU2xlZXBzIGZvciAxIHNlY29uZC5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgLz5cbiAgICA8c3Bhbj5UaGVuIGNvbnN1bWUgdGhlIHdlYiBzb2NrZXQgb24gdGhlIGNsaWVudC48L3NwYW4+XG4gICAgPENvZGVcbiAgICAgICAgbGFuZz1cInN2ZWx0ZVwiXG4gICAgICAgIHNvdXJjZT17YFxuICAgICAgICAke1wiPFwifXNjcmlwdCBsYW5nPVwidHNcIj5cbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VzOiBzdHJpbmdbXSA9ICRzdGF0ZShbXSkgLy8gQ3JlYXRlcyByZWFjdGl2ZSBsaXN0IG9mIG1lc3NhZ2VzLlxuICAgICAgICAgICAgY29uc3Qgc29ja2V0ID0gbmV3IFdlYlNvY2tldChcIi93c1wiKSAgIC8vIENvbm5lY3RzIHRvIGhhbmRsZXIuXG4gICAgICAgICAgICBzb2NrZXQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgZnVuY3Rpb24gbGlzdGVuKGV2ZW50Ok1lc3NhZ2VFdmVudCkge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VzLnB1c2goZXZlbnQuZGF0YSkgICAgICAgICAvLyBBcHBlbmRzIGluY29taW5nIG1lc3NhZ2VzIHRvIHRoZSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVhY3RpdmUgbGlzdCBvZiBtZXNzYWdlcyBmb3IgbGF0ZXIgdXNlLlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHNvY2tldC5zZW5kKFwiSGVsbG9cIikgICAgICAgICAgICAgICAgICAvLyBTZW5kcyBtZXNzYWdlLlxuICAgICAgICA8L3NjcmlwdD5cblxuICAgICAgICA8VGl0bGUgIHRleHQ9XCJNZXNzYWdlc1wiLz5cbiAgICAgICAgeyNlYWNoIG1lc3NhZ2VzIGFzIG1lc3NhZ2UsIGlkIChpZCl9ICAgICAgPCEtLSBJdGVyYXRlcyB0aGUgbGlzdCBvZiBtZXNzYWdlcy4gLS0+XG4gICAgICAgICAgICA8ZGl2PnttZXNzYWdlfTwvZGl2PiAgICAgICAgICAgICAgICAgIDwhLS0gUmVuZGVycyBtZXNzYWdlLiAtLT5cbiAgICAgICAgey9lYWNofVxuXG4gICAgYH1cbiAgICAvPlxuICAgIHsjc25pcHBldCByaWdodFNpZGViYXIoKX1cbiAgICAgICAgPFJpZ2h0U2lkZWJhciBpdGVtcz17W3sgc2hpZnQ6IDAsIHRleHQ6IFwiV2ViIFNvY2tldHNcIiB9XX0gLz5cbiAgICB7L3NuaXBwZXR9XG4gICAgeyNzbmlwcGV0IGZvb3RlcigpfVxuICAgICAgICA8Rm9vdGVyXG4gICAgICAgICAgICBwcmV2aW91cz17eyBsYWJlbDogXCJCYXNpY3NcIiwgaHJlZjogXCIvYmFzaWNzXCIgfX1cbiAgICAgICAgICAgIG5leHQ9e3sgbGFiZWw6IFwiU2VydmVyIFNlbnQgRXZlbnRzXCIsIGhyZWY6IFwiL3NlcnZlcl9zZW50X2V2ZW50c1wiIH19XG4gICAgICAgIC8+XG4gICAgey9zbmlwcGV0fVxuPC9QYWdlPlxuIl0sIm5hbWVzIjpbIlBhZ2UiLCIkJGFuY2hvciIsIlJpZ2h0U2lkZWJhciIsIkZvb3RlciIsIlRpdGxlIiwibm9kZSIsInNwYW4iLCIkLnNpYmxpbmciLCJJbmxpbmVDb2RlIiwibm9kZV8xIiwiQ29kZSIsIm5vZGVfMiIsIm5vZGVfMyIsIm5vZGVfNCJdLCJtYXBwaW5ncyI6InVaQUFBLENBU0NBLEVBQUlDLEVBQUEscUJBZ0RTLGFBQVlBLEdBQUEsQ0FDakJDLGFBQXVCLE1BQU8sRUFBRyxLQUFNLGFBQWEsQ0FBQSxFQUFBLEdBRS9DLE9BQU1ELEdBQUEsQ0FDWEUsRUFBQUYsRUFBQSxDQUNlLFNBQUEsQ0FBQSxNQUFPLFNBQVUsS0FBTSxTQUFTLEVBQ3BDLEtBQUEsQ0FBQSxNQUFPLHFCQUFzQixLQUFNLHFCQUFxQix1Q0FyRHZFRyxFQUFLQyxFQUFBLENBQUEsS0FBQSxhQUFBLENBQUEsTUFDTEMsRUFBSUMsRUFBQUYsRUFBQSxDQUFBLFFBQUpDLENBQUksQ0FBQSxFQUFNRSxFQUFVQyxFQUFBLENBQUEsT0FBQSxrQkFBQSxDQUFBLFVBQXBCSCxFQUFJLENBQUEsRUFDSkksRUFBSUMsRUFBQSwyRkFDSkQsRUFBQUUsRUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5QkF3QkFGLEVBQUFHLEVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Z0VBOUJHIn0=
