import{p as ke,f as Se,a as xe,s as e,i as Fe,b as Ie,c as Ce,g as Z,u as ee,h as n}from"./index-CQxZXpNM.js";import{b as d,e as Re}from"./navbar.js";import{C as t}from"./code.js";import{P as We,T as s,R as ze,F as De}from"./right_sidebar.js";import{I as r}from"./inline_code.js";var Le=Se(`<!> <span>You can use <!> and <!> in order to make your hyperlinks and forms adapt to the client’s browser capabilities and/or the server’s rendering
        configuration.</span> <!> <!> <span>When JavaScript is disabled, <!> will render as a traditional anchor, which by default will navigate the client away to <!>.</span> <br/> <span>On the other hand, when JavaScript is enabled, <!> will render to an anchor that overrides the default behavior of the browser. Instead of navigating away immediately, <a>fetch</a> is used to retrieve the contents of <!> and update the current state and view based on the server’s response.</span> <br/> <span>For example, given the following handler using <!></span> <!> <span>The view will ultimately render the following in the client’s browser.</span> <!> <span>But using <!> will instead render</span> <!> <!> <!> <span>When JavaScript is disabled, <!> will render as a traditional form, which by default will submit to <!> and navigate the client away.</span> <br/> <span>On the other hand, when JavaScript is enabled, <!> will render to a form that overrides
        the default behavior of the browser. Instead of navigating away immediately, <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"><span>fetch</span></a> is used to submit the form to <!> and update the current state and view based on the server’s response.</span> <br/> <span>For example, given the following handler using <!>.</span> <!> <span>The view will ultimately render the following in the client’s browser.</span> <!> <span>But using <!> will instead render.</span> <!> <span>Where <!> takes care of submitting the form and fetching the new state and view
        from <!>.</span> <!> <span>Frizzante provides a <!> component that captures pending and error states while navigating hyperlinks.</span> <br/> <span>It is a replacement for your <!> elements.</span> <br/> <span>In your project root directory, run the following</span> <!> <span>This will add the <!> component to your project.</span> <br/> <span>This component passes down <!> and <!> states through the <!> snippet.</span> <!> <!> <span>Frizzante provides a <!> component that captures pending and error states while submitting forms.</span> <br/> <span>It is a replacement for your <!> elements.</span> <br/> <span>In your project root directory, run the following</span> <!> <span>This will add the <!> component to your project.</span> <br/> <span>This component passes down pending and error states through the <!> snippet.</span> <!>`,1);function je(re,a){ke(a,!0),We(re,{title:"Web Standards",get dev(){return a.dev},rightSidebar:o=>{ze(o,{items:[{shift:0,text:"Web Standards"},{shift:0,text:"Adaptive Hyperlinks"},{shift:0,text:"Adaptive Forms"},{shift:0,text:"Link Component"},{shift:0,text:"Form Component"}]})},footer:o=>{{let p=ee(()=>({label:"Views",href:d("/views",{dev:a.dev})})),i=ee(()=>({label:"Cli",href:d("/cli",{dev:a.dev})}));De(o,{get previous(){return Z(p)},get next(){return Z(i)}})}},children:(o,p)=>{var i=Le(),l=xe(i);s(l,{text:"Web Standards"});var c=e(l,2),h=e(n(c));r(h,{source:"href()"});var ne=e(h,2);r(ne,{source:"action()"});var m=e(c,2);s(m,{text:"Adaptive Hyperlinks"});var v=e(m,2);t(v,{lang:"svelte",source:`
            <script lang="ts">
                import { href } from "$lib/scripts/core/href.ts"
            <\/script>

            <a {...href("/some-other-page")}> Go to some other page </a> <!-- Defines a link, which when triggered will either
                                                                              directly navigate to the given path, or do so using 
                                                                              fetch, depending on wether JavaScript is enabled or not. -->
        `});var u=e(v,2),f=e(n(u));r(f,{source:"<a>"});var te=e(f,2);r(te,{source:"/some-other-page"});var g=e(u,4),b=e(n(g));r(b,{source:"<a>"});var w=e(b,2),ae=e(w,2);r(ae,{source:"/some-other-page"});var _=e(g,4),oe=e(n(_));r(oe,{source:"view.RenderModeServer"});var y=e(_,2);t(y,{lang:"go",source:`
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
        `});var k=e(y,4);t(k,{lang:"html",source:`
            <a href="/some-other-page"> Go to some other page </a>
        `});var S=e(k,2),se=e(n(S));r(se,{source:"view.RenderModeFull"});var x=e(S,2);t(x,{lang:"html",source:`
            <a href="/some-other-page" onclick="onclick(event)"> Go to some other page </a>
        `});var F=e(x,2);s(F,{text:"Adaptive Forms"});var I=e(F,2);t(I,{lang:"go",source:`
            <script lang="ts">
                import { action } from "$lib/scripts/core/action.ts"
            <\/script>

            <form {...action("/process")}>            <!-- Defines a form. -->
                <input type="text" name="name" />     <!-- Defines a text field. -->
                <button type="submit">Submit</button> <!-- Defines a button, which when triggered will either
                                                           directly submit the form, or do so using fetch(),
                                                           depending on wether JavaScript is enabled or not. -->
            </form>
        `});var C=e(I,2),R=e(n(C));r(R,{source:"<form>"});var ie=e(R,2);r(ie,{source:"/process"});var W=e(C,4),z=e(n(W));r(z,{source:"<form>"});var de=e(z,4);r(de,{source:"/process"});var D=e(W,4),pe=e(n(D));r(pe,{source:"view.RenderModeServer"});var L=e(D,2);t(L,{lang:"go",source:`
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
        `});var T=e(L,4);t(T,{lang:"html",source:`
            <form action="/process">
                <input type="text" name="name" />
                <button type="submit">Submit</button>
            </form>
        `});var M=e(T,2),le=e(n(M));r(le,{source:"view.RenderModeFull"});var V=e(M,2);t(V,{lang:"html",source:`
            <form action="/process" onsubmit="onsubmit(event)">
                <input type="text" name="name" />
                <button type="submit">Submit</button>
            </form>
        `});var A=e(V,2),J=e(n(A));r(J,{source:"onsubmit(event)"});var ce=e(J,2);r(ce,{source:"/process"});var P=e(A,2);s(P,{text:"Link Component"});var $=e(P,2),he=e(n($));r(he,{source:"<Link>"});var j=e($,4),me=e(n(j));r(me,{source:"<a>"});var G=e(j,6);t(G,{lang:"shell",source:"frizzante g links"});var O=e(G,2),ve=e(n(O));r(ve,{source:"<Link>"});var q=e(O,4),B=e(n(q));r(B,{source:"pending"});var H=e(B,2);r(H,{source:"error"});var ue=e(H,2);r(ue,{source:"children"});var N=e(q,2);t(N,{lang:"svelte",source:`
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
        `});var U=e(N,2);s(U,{text:"Form Component"});var Y=e(U,2),fe=e(n(Y));r(fe,{source:"<Form>"});var E=e(Y,4),ge=e(n(E));r(ge,{source:"<form>"});var K=e(E,6);t(K,{lang:"shell",source:`
            frizzante g forms
        `});var Q=e(K,2),be=e(n(Q));r(be,{source:"<Form>"});var X=e(Q,4),we=e(n(X));r(we,{source:"children"});var _e=e(X,2);t(_e,{lang:"svelte",source:`
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
        `}),Fe(ye=>Re(w,"href",ye),[()=>d("/some-other-page",{dev:a.dev})]),Ie(o,i)},$$slots:{rightSidebar:!0,footer:!0,default:!0}}),Ce()}export{je as default};
