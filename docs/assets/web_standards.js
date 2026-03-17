import{f as he,a as me,s as e,b as ve,e as r}from"./index-DcfPEVm2.js";import"./navbar.js";import{C as t}from"./code.js";import{P as ue,T as o,R as fe,F as ge}from"./right_sidebar.js";import{I as n}from"./inline_code.js";var we=he(`<!> <span>You can use <!> and <!> in order to make your hyperlinks and forms adapt to the client’s browser capabilities and/or the server’s rendering
        configuration.</span> <!> <!> <span>When JavaScript is disabled, <!> will render as a traditional anchor, which by default will navigate the client away to /some-other-page</span> <br/> <span>On the other hand, when JavaScript is enabled, <!> will render to an anchor that overrides the default behavior of the browser. Instead of navigating away immediately, <a href="/frizzante-docs-using-snapshots/some-other-page">fetch</a> is used to retrieve the contents of <!> and update the current state and view based on the server’s response.</span> <br/> <span>For example, given the following handler using <!></span> <!> <span>The view will ultimately render the following in the client’s browser.</span> <!> <span>But using <!> will instead render</span> <!> <!> <!> <span>When JavaScript is disabled, <!> will render as a traditional form, which by default will submit to <!> and navigate the client away.</span> <br/> <span>On the other hand, when JavaScript is enabled, <!> will render to a form that overrides
        the default behavior of the browser. Instead of navigating away immediately, <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"><span>fetch</span></a> is used to submit the form to <!> and update the current state and view based on the server’s response.</span> <br/> <span>For example, given the following handler using <!>.</span> <!> <span>The view will ultimately render the following in the client’s browser.</span> <!> <span>But using <!> will instead render.</span> <!> <span>Where <!> takes care of submitting the form and fetching the new state and view
        from <!>.</span> <!> <span>Frizzante provides a <!> component that captures pending and error states while navigating hyperlinks.</span> <br/> <span>It is a replacement for your <!> elements.</span> <br/> <span>In your project root directory, run the following</span> <!> <span>This will add the <!> component to your project.</span> <br/> <span>This component passes down <!> and <!> states through the <!> snippet.</span> <!> <!> <span>Frizzante provides a <!> component that captures pending and error states while submitting forms.</span> <br/> <span>It is a replacement for your <!> elements.</span> <br/> <span>In your project root directory, run the following</span> <!> <span>This will add the <!> component to your project.</span> <br/> <span>This component passes down pending and error states through the children snippet.</span> <!>`,1);function Ie(U){ue(U,{title:"Web Standards",rightSidebar:a=>{fe(a,{items:[{shift:0,text:"Web Standards"},{shift:0,text:"Adaptive Hyperlinks"},{shift:0,text:"Adaptive Forms"},{shift:0,text:"Link Component"},{shift:0,text:"Form Component"}]})},footer:a=>{ge(a,{previous:{label:"Views",href:"/frizzante-docs-using-snapshots/views"},next:{label:"Cli",href:"/frizzante-docs-using-snapshots/cli"}})},children:(a,ye)=>{var s=we(),i=me(s);o(i,{text:"Web Standards"});var p=e(i,2),d=e(r(p));n(d,{source:"href()"});var Y=e(d,2);n(Y,{source:"action()"});var l=e(p,2);o(l,{text:"Adaptive Hyperlinks"});var c=e(l,2);t(c,{lang:"svelte",source:`
            <script lang="ts">
                import { href } from "$lib/scripts/core/href.ts"
            <\/script>

            <a {...href("/some-other-page")}> Go to some other page </a> <!-- Defines a link, which when triggered will either
                                                                              directly navigate to the given path, or do so using 
                                                                              fetch, depending on wether JavaScript is enabled or not. -->
        `});var h=e(c,2),E=e(r(h));n(E,{source:"<a>"});var m=e(h,4),v=e(r(m));n(v,{source:"<a>"});var K=e(v,4);n(K,{source:"/some-other-page"});var u=e(m,4),Q=e(r(u));n(Q,{source:"view.RenderModeServer"});var f=e(u,2);t(f,{lang:"go",source:`
            package welcome
            
            import (
                "main/lib/core/clients"
                "main/lib/core/send"
                "main/lib/core/views"
            )

            func View(client *clients.Client)  {
                send.View(client, views.View{          // Sends view.
                    Name: "Welcome",                   // Sets name of the view.
                    RenderMode: view.RenderModeServer, // Renders view only on the server.
                })
            }
        `});var g=e(f,4);t(g,{lang:"html",source:`
            <a href="/some-other-page"> Go to some other page </a>
        `});var w=e(g,2),X=e(r(w));n(X,{source:"view.RenderModeFull"});var b=e(w,2);t(b,{lang:"html",source:`
            <a href="/some-other-page" onclick="onclick(event)"> Go to some other page </a>
        `});var _=e(b,2);o(_,{text:"Adaptive Forms"});var y=e(_,2);t(y,{lang:"go",source:`
            <script lang="ts">
                import { action } from "$lib/scripts/core/action.ts"
            <\/script>

            <form {...action("/process")}>            <!-- Defines a form. -->
                <input type="text" name="name" />     <!-- Defines a text field. -->
                <button type="submit">Submit</button> <!-- Defines a button, which when triggered will either
                                                           directly submit the form, or do so using fetch(),
                                                           depending on wether JavaScript is enabled or not. -->
            </form>
        `});var k=e(y,2),S=e(r(k));n(S,{source:"<form>"});var Z=e(S,2);n(Z,{source:"/process"});var x=e(k,4),F=e(r(x));n(F,{source:"<form>"});var ee=e(F,4);n(ee,{source:"/process"});var z=e(x,4),ne=e(r(z));n(ne,{source:"view.RenderModeServer"});var I=e(z,2);t(I,{lang:"go",source:`
            package welcome

            import (
                "main/lib/core/clients"
                "main/lib/core/send"
                "main/lib/core/views"
            )

            func View(client *clients.Client)  {
                send.View(client, views.View{          // Sends view.
                    Name: "Welcome",                   // Sets name of the view.
                    RenderMode: view.RenderModeServer, // Renders view only on the server.
                })
            }
        `});var C=e(I,4);t(C,{lang:"html",source:`
            <form action="/process">
                <input type="text" name="name" />
                <button type="submit">Submit</button>
            </form>
        `});var R=e(C,2),re=e(r(R));n(re,{source:"view.RenderModeFull"});var $=e(R,2);t($,{lang:"html",source:`
            <form action="/process" onsubmit="onsubmit(event)">
                <input type="text" name="name" />
                <button type="submit">Submit</button>
            </form>
        `});var W=e($,2),D=e(r(W));n(D,{source:"onsubmit(event)"});var te=e(D,2);n(te,{source:"/process"});var L=e(W,2);o(L,{text:"Link Component"});var T=e(L,2),ae=e(r(T));n(ae,{source:"<Link>"});var M=e(T,4),oe=e(r(M));n(oe,{source:"<a>"});var V=e(M,6);t(V,{lang:"shell",source:"frizzante -glinks"});var A=e(V,2),se=e(r(A));n(se,{source:"<Link>"});var J=e(A,4),P=e(r(J));n(P,{source:"pending"});var j=e(P,2);n(j,{source:"error"});var ie=e(j,2);n(ie,{source:"children"});var G=e(J,2);t(G,{lang:"svelte",source:`
            <script lang="ts">
                import Link from "$lib/components/links/link.svelte"
            <\/script>

            <Link href="/some-path">                               <!-- Defines a link. -->
                {#snippet children({pending, error})}              <!-- Captures the link's pending and error states. -->
                    {#if pending}                                  <!-- If the underlying http request is pending... -->
                        <span>Loading...</span>                    <!-- ...renders a loading hint. -->
                    {:else if error}                               <!-- If there's been some sort of error... -->
                        <span>Something went wrong: {error}</span> <!-- ...renders the error. -->
                    {:else}                                        <!-- If the link is idle... -->
                        <span>Click me</span>                      <!-- ...renders the link's idle content. -->
                    {/if}
                {/snippet}
            </Link>
        `});var O=e(G,2);o(O,{text:"Form Component"});var q=e(O,2),pe=e(r(q));n(pe,{source:"<Form>"});var B=e(q,4),de=e(r(B));n(de,{source:"<form>"});var H=e(B,6);t(H,{lang:"shell",source:`
            frizzante -gforms
        `});var N=e(H,2),le=e(r(N));n(le,{source:"<Form>"});var ce=e(N,6);t(ce,{lang:"svelte",source:`
            <script lang="ts">
                import Form from "$lib/components/forms/form.svelte"
            <\/script>

            <Form method="POST" action="/login">                            <!-- Defines a form. -->
                {#snippet children({pending, error})}                       <!-- Captures the forms's pending and error states. -->
                    <input type="email" name="email">                       <!-- Defines an email field. -->
                    <input type="password" name="password">                 <!-- Defines an password field. -->
                    <button disabled={pending} type="submit">Login</button> <!-- Defines a button, which is disabled when the form request is pending. -->

                    {#if error}                                             <!-- If there's been some sort of error... -->
                        <span>Something went wrong: {error}</span>          <!-- ...renders the error. -->
                    {/if}
                {/snippet}
            </Form>
        `}),ve(a,s)},$$slots:{rightSidebar:!0,footer:!0,default:!0}})}export{Ie as default};
