import{f as g,a as m,s,b as v,e as p}from"./index-t6nqv6G7.js";import"./navbar.js";import{C as t}from"./code.js";import{P as h,T as f,R as u,F as S}from"./right_sidebar.js";import{I as b}from"./inline_code.js";var _=g("<!> <span>Use <!> to upgrade the connection to server sent events.</span> <!> <!> <span>Then consume the stream on the client.</span> <!>",1);function I(l){h(l,{title:"Server Sent Events",rightSidebar:e=>{u(e,{items:[{shift:0,text:"Server Sent Events"}]})},footer:e=>{S(e,{previous:{label:"Web Sockets",href:"/web_sockets"},next:{label:"Guards",href:"/guards"}})},children:(e,E)=>{var n=_(),a=m(n);f(a,{text:"Server Sent Events"});var r=s(a,2),c=s(p(r));b(c,{source:"send.SseUpgrade()"});var o=s(r,2);t(o,{lang:"go",source:'routes.Route{Pattern: "GET /sse", Handler: welcome.View}'});var i=s(o,2);t(i,{lang:"go",source:`
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
    `}),v(e,n)},$$slots:{rightSidebar:!0,footer:!0,default:!0}})}export{I as default};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyX3NlbnRfZXZlbnRzLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvdmlld3Mvc2VydmVyX3NlbnRfZXZlbnRzLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGxhbmc9XCJ0c1wiPlxuICAgIGltcG9ydCBDb2RlIGZyb20gXCIkbGliL2NvbXBvbmVudHMvY29kZS5zdmVsdGVcIlxuICAgIGltcG9ydCBGb290ZXIgZnJvbSBcIiRsaWIvY29tcG9uZW50cy9mb290ZXIuc3ZlbHRlXCJcbiAgICBpbXBvcnQgSW5saW5lQ29kZSBmcm9tIFwiJGxpYi9jb21wb25lbnRzL2lubGluZV9jb2RlLnN2ZWx0ZVwiXG4gICAgaW1wb3J0IFBhZ2UgZnJvbSBcIiRsaWIvY29tcG9uZW50cy9wYWdlLnN2ZWx0ZVwiXG4gICAgaW1wb3J0IFJpZ2h0U2lkZWJhciBmcm9tIFwiJGxpYi9jb21wb25lbnRzL3JpZ2h0X3NpZGViYXIuc3ZlbHRlXCJcbiAgICBpbXBvcnQgVGl0bGUgZnJvbSBcIiRsaWIvY29tcG9uZW50cy90aXRsZS5zdmVsdGVcIlxuPC9zY3JpcHQ+XG5cbjxQYWdlIHRpdGxlPVwiU2VydmVyIFNlbnQgRXZlbnRzXCI+XG4gICAgPFRpdGxlIHRleHQ9XCJTZXJ2ZXIgU2VudCBFdmVudHNcIiAvPlxuICAgIDxzcGFuPlVzZSA8SW5saW5lQ29kZSBzb3VyY2U9XCJzZW5kLlNzZVVwZ3JhZGUoKVwiIC8+IHRvIHVwZ3JhZGUgdGhlIGNvbm5lY3Rpb24gdG8gc2VydmVyIHNlbnQgZXZlbnRzLjwvc3Bhbj5cbiAgICA8Q29kZSBsYW5nPVwiZ29cIiBzb3VyY2U9e2Byb3V0ZXMuUm91dGV7UGF0dGVybjogXCJHRVQgL3NzZVwiLCBIYW5kbGVyOiB3ZWxjb21lLlZpZXd9YH0gLz5cbiAgICA8Q29kZVxuICAgICAgICBsYW5nPVwiZ29cIlxuICAgICAgICBzb3VyY2U9e2BcbiAgICAgICAgICAgIHBhY2thZ2Ugd2VsY29tZVxuXG4gICAgICAgICAgICBpbXBvcnQgKFxuICAgICAgICAgICAgICAgIFwibWFpbi9saWIvY29yZS9jbGllbnRzXCJcbiAgICAgICAgICAgICAgICBcIm1haW4vbGliL2NvcmUvcmVjZWl2ZVwiXG4gICAgICAgICAgICAgICAgXCJtYWluL2xpYi9jb3JlL3NlbmRcIlxuICAgICAgICAgICAgICAgIFwidGltZVwiXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIGZ1bmMgVmlldyhjbGllbnQgKmNsaWVudHMuQ2xpZW50KSB7XG4gICAgICAgICAgICAgICAgYWxpdmUgOj0gcmVjZWl2ZS5Jc0FsaXZlKGNsaWVudCkgICAgLy8gVHJhY2tzIHJlcXVlc3Qgc3RhdHVzLlxuICAgICAgICAgICAgICAgIGV2ZW50IDo9IHNlbmQuU3NlVXBncmFkZShjbGllbnQpICAgIC8vIFNlbmRzIHNzZSB1cGdyYWRlLlxuICAgICAgICAgICAgICAgIGZvciAqYWxpdmUgeyAgICAgICAgICAgICAgICAgICAgICAgIC8vIExvb3BzIHVudGlsIGNhbmNlbGxhdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgZXZlbnQoXCJjaGFubmVsLTFcIikgICAgICAgICAgICAgIC8vIFN3aXRjaGVzIHRvIFwiY2hhbm5lbC0xXCIuXG4gICAgICAgICAgICAgICAgICAgIHNlbmQuTWVzc2FnZShjbGllbnQsIFwiSGVsbG8gMVwiKSAvLyBTZW5kcyBtZXNzYWdlLlxuICAgICAgICAgICAgICAgICAgICBldmVudChcImNoYW5uZWwtMlwiKSAgICAgICAgICAgICAgLy8gU3dpdGNoZXMgdG8gXCJjaGFubmVsLTJcIi5cbiAgICAgICAgICAgICAgICAgICAgc2VuZC5NZXNzYWdlKGNsaWVudCwgXCJIZWxsbyAyXCIpIC8vIFNlbmRzIG1lc3NhZ2UuXG4gICAgICAgICAgICAgICAgICAgIHRpbWUuU2xlZXAodGltZS5TZWNvbmQpICAgICAgICAgLy8gU2xlZXBzIGZvciAxIHNlY29uZC5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgLz5cbiAgICA8c3Bhbj5UaGVuIGNvbnN1bWUgdGhlIHN0cmVhbSBvbiB0aGUgY2xpZW50Ljwvc3Bhbj5cbiAgICA8Q29kZVxuICAgICAgICBsYW5nPVwic3ZlbHRlXCJcbiAgICAgICAgc291cmNlPXtgXG4gICAgICAgICR7XCI8XCJ9c2NyaXB0IGxhbmc9XCJ0c1wiPlxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZXM6IHN0cmluZ1tdID0gJHN0YXRlKFtdKSAvLyBDcmVhdGVzIHJlYWN0aXZlIGxpc3Qgb2YgbWVzc2FnZXMuXG4gICAgICAgICAgICBjb25zdCBzb2NrZXQgPSBuZXcgV2ViU29ja2V0KFwiL3dzXCIpICAgLy8gQ29ubmVjdHMgdG8gaGFuZGxlci5cbiAgICAgICAgICAgIHNvY2tldC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBmdW5jdGlvbiBsaXN0ZW4oZXZlbnQ6TWVzc2FnZUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZXMucHVzaChldmVudC5kYXRhKSAgICAgICAgIC8vIEFwcGVuZHMgaW5jb21pbmcgbWVzc2FnZXMgdG8gdGhlIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZWFjdGl2ZSBsaXN0IG9mIG1lc3NhZ2VzIGZvciBsYXRlciB1c2UuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgc29ja2V0LnNlbmQoXCJIZWxsb1wiKSAgICAgICAgICAgICAgICAgIC8vIFNlbmRzIG1lc3NhZ2UuXG4gICAgICAgIDwvc2NyaXB0PlxuXG4gICAgICAgIDxUaXRsZSAgdGV4dD1cIk1lc3NhZ2VzXCIvPlxuICAgICAgICB7I2VhY2ggbWVzc2FnZXMgYXMgbWVzc2FnZSwgaWQgKGlkKX0gICAgICA8IS0tIEl0ZXJhdGVzIHRoZSBsaXN0IG9mIG1lc3NhZ2VzLiAtLT5cbiAgICAgICAgICAgIDxkaXY+e21lc3NhZ2V9PC9kaXY+ICAgICAgICAgICAgICAgICAgPCEtLSBSZW5kZXJzIG1lc3NhZ2UuIC0tPlxuICAgICAgICB7L2VhY2h9XG4gICAgYH1cbiAgICAvPlxuICAgIHsjc25pcHBldCByaWdodFNpZGViYXIoKX1cbiAgICAgICAgPFJpZ2h0U2lkZWJhciBpdGVtcz17W3sgc2hpZnQ6IDAsIHRleHQ6IFwiU2VydmVyIFNlbnQgRXZlbnRzXCIgfV19IC8+XG4gICAgey9zbmlwcGV0fVxuICAgIHsjc25pcHBldCBmb290ZXIoKX1cbiAgICAgICAgPEZvb3RlciBwcmV2aW91cz17eyBsYWJlbDogXCJXZWIgU29ja2V0c1wiLCBocmVmOiBcIi93ZWJfc29ja2V0c1wiIH19IG5leHQ9e3sgbGFiZWw6IFwiR3VhcmRzXCIsIGhyZWY6IFwiL2d1YXJkc1wiIH19IC8+XG4gICAgey9zbmlwcGV0fVxuPC9QYWdlPlxuIl0sIm5hbWVzIjpbIlBhZ2UiLCIkJGFuY2hvciIsIlJpZ2h0U2lkZWJhciIsIkZvb3RlciIsIlRpdGxlIiwibm9kZSIsInNwYW4iLCIkLnNpYmxpbmciLCJJbmxpbmVDb2RlIiwibm9kZV8xIiwiQ29kZSIsIm5vZGVfMiIsIm5vZGVfMyIsIm5vZGVfNCJdLCJtYXBwaW5ncyI6InNYQUFBLENBU0NBLEVBQUlDLEVBQUEsNEJBaURTLGFBQVlBLEdBQUEsQ0FDakJDLGFBQXVCLE1BQU8sRUFBRyxLQUFNLG9CQUFvQixDQUFBLEVBQUEsR0FFdEQsT0FBTUQsR0FBQSxDQUNYRSxFQUFNRixFQUFBLENBQWEsU0FBQSxDQUFBLE1BQU8sY0FBZSxLQUFNLGNBQWMsRUFBWSxLQUFBLENBQUEsTUFBTyxTQUFVLEtBQU0sU0FBUyx1Q0FwRDdHRyxFQUFLQyxFQUFBLENBQUEsS0FBQSxvQkFBQSxDQUFBLE1BQ0xDLEVBQUlDLEVBQUFGLEVBQUEsQ0FBQSxRQUFKQyxDQUFJLENBQUEsRUFBTUUsRUFBVUMsRUFBQSxDQUFBLE9BQUEsbUJBQUEsQ0FBQSxVQUFwQkgsRUFBSSxDQUFBLEVBQ0pJLEVBQUlDLEVBQUEsNEZBQ0pELEVBQUFFLEVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5QkEwQkFGLEVBQUFHLEVBQUE7Ozs7Ozs7Ozs7Ozs7OztnRUFoQ0cifQ==
