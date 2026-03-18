import{p as we,f as _e,a as ye,s as e,h as ke,b as Se,c as xe,g as K,d as Q,e as r}from"./index-CBalJl4v.js";import{i as Fe,b as i,e as Ie}from"./navbar.js";import{C as t}from"./code.js";import{P as $e,T as o,R as Ce,F as Re}from"./right_sidebar.js";import{I as n}from"./inline_code.js";var We=_e(`<!> <span>You can use <!> and <!> in order to make your hyperlinks and forms adapt to the client’s browser capabilities and/or the server’s rendering
        configuration.</span> <!> <!> <span>When JavaScript is disabled, <!> will render as a traditional anchor, which by default will navigate the client away to /some-other-page</span> <br/> <span>On the other hand, when JavaScript is enabled, <!> will render to an anchor that overrides the default behavior of the browser. Instead of navigating away immediately, <a>fetch</a> is used to retrieve the contents of <!> and update the current state and view based on the server’s response.</span> <br/> <span>For example, given the following handler using <!></span> <!> <span>The view will ultimately render the following in the client’s browser.</span> <!> <span>But using <!> will instead render</span> <!> <!> <!> <span>When JavaScript is disabled, <!> will render as a traditional form, which by default will submit to <!> and navigate the client away.</span> <br/> <span>On the other hand, when JavaScript is enabled, <!> will render to a form that overrides
        the default behavior of the browser. Instead of navigating away immediately, <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"><span>fetch</span></a> is used to submit the form to <!> and update the current state and view based on the server’s response.</span> <br/> <span>For example, given the following handler using <!>.</span> <!> <span>The view will ultimately render the following in the client’s browser.</span> <!> <span>But using <!> will instead render.</span> <!> <span>Where <!> takes care of submitting the form and fetching the new state and view
        from <!>.</span> <!> <span>Frizzante provides a <!> component that captures pending and error states while navigating hyperlinks.</span> <br/> <span>It is a replacement for your <!> elements.</span> <br/> <span>In your project root directory, run the following</span> <!> <span>This will add the <!> component to your project.</span> <br/> <span>This component passes down <!> and <!> states through the <!> snippet.</span> <!> <!> <span>Frizzante provides a <!> component that captures pending and error states while submitting forms.</span> <br/> <span>It is a replacement for your <!> elements.</span> <br/> <span>In your project root directory, run the following</span> <!> <span>This will add the <!> component to your project.</span> <br/> <span>This component passes down pending and error states through the children snippet.</span> <!>`,1);function Je(X,Z){we(Z,!1),Fe(),$e(X,{title:"Web Standards",rightSidebar:a=>{Ce(a,{items:[{shift:0,text:"Web Standards"},{shift:0,text:"Adaptive Hyperlinks"},{shift:0,text:"Adaptive Forms"},{shift:0,text:"Link Component"},{shift:0,text:"Form Component"}]})},footer:a=>{{let p=Q(()=>({label:"Views",href:i("/views")})),s=Q(()=>({label:"Cli",href:i("/cli")}));Re(a,{get previous(){return K(p)},get next(){return K(s)}})}},children:(a,p)=>{var s=We(),d=ye(s);o(d,{text:"Web Standards"});var l=e(d,2),c=e(r(l));n(c,{source:"href()"});var ee=e(c,2);n(ee,{source:"action()"});var h=e(l,2);o(h,{text:"Adaptive Hyperlinks"});var m=e(h,2);t(m,{lang:"svelte",source:`
            <script lang="ts">
                import { href } from "$lib/scripts/core/href.ts"
            <\/script>

            <a {...href("/some-other-page")}> Go to some other page </a> <!-- Defines a link, which when triggered will either
                                                                              directly navigate to the given path, or do so using 
                                                                              fetch, depending on wether JavaScript is enabled or not. -->
        `});var v=e(m,2),ne=e(r(v));n(ne,{source:"<a>"});var u=e(v,4),f=e(r(u));n(f,{source:"<a>"});var g=e(f,2),re=e(g,2);n(re,{source:"/some-other-page"});var b=e(u,4),te=e(r(b));n(te,{source:"view.RenderModeServer"});var w=e(b,2);t(w,{lang:"go",source:`
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
        `});var _=e(w,4);t(_,{lang:"html",source:`
            <a href="/some-other-page"> Go to some other page </a>
        `});var y=e(_,2),ae=e(r(y));n(ae,{source:"view.RenderModeFull"});var k=e(y,2);t(k,{lang:"html",source:`
            <a href="/some-other-page" onclick="onclick(event)"> Go to some other page </a>
        `});var S=e(k,2);o(S,{text:"Adaptive Forms"});var x=e(S,2);t(x,{lang:"go",source:`
            <script lang="ts">
                import { action } from "$lib/scripts/core/action.ts"
            <\/script>

            <form {...action("/process")}>            <!-- Defines a form. -->
                <input type="text" name="name" />     <!-- Defines a text field. -->
                <button type="submit">Submit</button> <!-- Defines a button, which when triggered will either
                                                           directly submit the form, or do so using fetch(),
                                                           depending on wether JavaScript is enabled or not. -->
            </form>
        `});var F=e(x,2),I=e(r(F));n(I,{source:"<form>"});var oe=e(I,2);n(oe,{source:"/process"});var $=e(F,4),C=e(r($));n(C,{source:"<form>"});var se=e(C,4);n(se,{source:"/process"});var R=e($,4),ie=e(r(R));n(ie,{source:"view.RenderModeServer"});var W=e(R,2);t(W,{lang:"go",source:`
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
        `});var z=e(W,4);t(z,{lang:"html",source:`
            <form action="/process">
                <input type="text" name="name" />
                <button type="submit">Submit</button>
            </form>
        `});var D=e(z,2),pe=e(r(D));n(pe,{source:"view.RenderModeFull"});var L=e(D,2);t(L,{lang:"html",source:`
            <form action="/process" onsubmit="onsubmit(event)">
                <input type="text" name="name" />
                <button type="submit">Submit</button>
            </form>
        `});var T=e(L,2),M=e(r(T));n(M,{source:"onsubmit(event)"});var de=e(M,2);n(de,{source:"/process"});var V=e(T,2);o(V,{text:"Link Component"});var A=e(V,2),le=e(r(A));n(le,{source:"<Link>"});var J=e(A,4),ce=e(r(J));n(ce,{source:"<a>"});var P=e(J,6);t(P,{lang:"shell",source:"frizzante -glinks"});var j=e(P,2),he=e(r(j));n(he,{source:"<Link>"});var q=e(j,4),G=e(r(q));n(G,{source:"pending"});var O=e(G,2);n(O,{source:"error"});var me=e(O,2);n(me,{source:"children"});var B=e(q,2);t(B,{lang:"svelte",source:`
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
        `});var H=e(B,2);o(H,{text:"Form Component"});var N=e(H,2),ve=e(r(N));n(ve,{source:"<Form>"});var U=e(N,4),ue=e(r(U));n(ue,{source:"<form>"});var Y=e(U,6);t(Y,{lang:"shell",source:`
            frizzante -gforms
        `});var E=e(Y,2),fe=e(r(E));n(fe,{source:"<Form>"});var ge=e(E,6);t(ge,{lang:"svelte",source:`
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
        `}),ke(be=>Ie(g,"href",be),[()=>i("/some-other-page")]),Se(a,s)},$$slots:{rightSidebar:!0,footer:!0,default:!0}}),xe()}export{Je as default};
