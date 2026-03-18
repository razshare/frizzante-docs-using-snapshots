import{p as _e,f as ye,a as ke,s as e,h as Se,b as xe,c as Fe,g as Q,d as X,e as n}from"./index-CBalJl4v.js";import{i as Ie,b as i,e as $e}from"./navbar.js";import{C as t}from"./code.js";import{P as Ce,T as o,R as Re,F as We}from"./right_sidebar.js";import{I as r}from"./inline_code.js";var ze=ye(`<!> <span>You can use <!> and <!> in order to make your hyperlinks and forms adapt to the client’s browser capabilities and/or the server’s rendering
        configuration.</span> <!> <!> <span>When JavaScript is disabled, <!> will render as a traditional anchor, which by default will navigate the client away to <!>.</span> <br/> <span>On the other hand, when JavaScript is enabled, <!> will render to an anchor that overrides the default behavior of the browser. Instead of navigating away immediately, <a>fetch</a> is used to retrieve the contents of <!> and update the current state and view based on the server’s response.</span> <br/> <span>For example, given the following handler using <!></span> <!> <span>The view will ultimately render the following in the client’s browser.</span> <!> <span>But using <!> will instead render</span> <!> <!> <!> <span>When JavaScript is disabled, <!> will render as a traditional form, which by default will submit to <!> and navigate the client away.</span> <br/> <span>On the other hand, when JavaScript is enabled, <!> will render to a form that overrides
        the default behavior of the browser. Instead of navigating away immediately, <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"><span>fetch</span></a> is used to submit the form to <!> and update the current state and view based on the server’s response.</span> <br/> <span>For example, given the following handler using <!>.</span> <!> <span>The view will ultimately render the following in the client’s browser.</span> <!> <span>But using <!> will instead render.</span> <!> <span>Where <!> takes care of submitting the form and fetching the new state and view
        from <!>.</span> <!> <span>Frizzante provides a <!> component that captures pending and error states while navigating hyperlinks.</span> <br/> <span>It is a replacement for your <!> elements.</span> <br/> <span>In your project root directory, run the following</span> <!> <span>This will add the <!> component to your project.</span> <br/> <span>This component passes down <!> and <!> states through the <!> snippet.</span> <!> <!> <span>Frizzante provides a <!> component that captures pending and error states while submitting forms.</span> <br/> <span>It is a replacement for your <!> elements.</span> <br/> <span>In your project root directory, run the following</span> <!> <span>This will add the <!> component to your project.</span> <br/> <span>This component passes down pending and error states through the children snippet.</span> <!>`,1);function Pe(Z,ee){_e(ee,!1),Ie(),Ce(Z,{title:"Web Standards",rightSidebar:a=>{Re(a,{items:[{shift:0,text:"Web Standards"},{shift:0,text:"Adaptive Hyperlinks"},{shift:0,text:"Adaptive Forms"},{shift:0,text:"Link Component"},{shift:0,text:"Form Component"}]})},footer:a=>{{let p=X(()=>({label:"Views",href:i("/views")})),s=X(()=>({label:"Cli",href:i("/cli")}));We(a,{get previous(){return Q(p)},get next(){return Q(s)}})}},children:(a,p)=>{var s=ze(),d=ke(s);o(d,{text:"Web Standards"});var l=e(d,2),c=e(n(l));r(c,{source:"href()"});var re=e(c,2);r(re,{source:"action()"});var h=e(l,2);o(h,{text:"Adaptive Hyperlinks"});var m=e(h,2);t(m,{lang:"svelte",source:`
            <script lang="ts">
                import { href } from "$lib/scripts/core/href.ts"
            <\/script>

            <a {...href("/some-other-page")}> Go to some other page </a> <!-- Defines a link, which when triggered will either
                                                                              directly navigate to the given path, or do so using 
                                                                              fetch, depending on wether JavaScript is enabled or not. -->
        `});var v=e(m,2),u=e(n(v));r(u,{source:"<a>"});var ne=e(u,2);r(ne,{source:"/some-other-page"});var f=e(v,4),g=e(n(f));r(g,{source:"<a>"});var b=e(g,2),te=e(b,2);r(te,{source:"/some-other-page"});var w=e(f,4),ae=e(n(w));r(ae,{source:"view.RenderModeServer"});var _=e(w,2);t(_,{lang:"go",source:`
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
        `});var y=e(_,4);t(y,{lang:"html",source:`
            <a href="/some-other-page"> Go to some other page </a>
        `});var k=e(y,2),oe=e(n(k));r(oe,{source:"view.RenderModeFull"});var S=e(k,2);t(S,{lang:"html",source:`
            <a href="/some-other-page" onclick="onclick(event)"> Go to some other page </a>
        `});var x=e(S,2);o(x,{text:"Adaptive Forms"});var F=e(x,2);t(F,{lang:"go",source:`
            <script lang="ts">
                import { action } from "$lib/scripts/core/action.ts"
            <\/script>

            <form {...action("/process")}>            <!-- Defines a form. -->
                <input type="text" name="name" />     <!-- Defines a text field. -->
                <button type="submit">Submit</button> <!-- Defines a button, which when triggered will either
                                                           directly submit the form, or do so using fetch(),
                                                           depending on wether JavaScript is enabled or not. -->
            </form>
        `});var I=e(F,2),$=e(n(I));r($,{source:"<form>"});var se=e($,2);r(se,{source:"/process"});var C=e(I,4),R=e(n(C));r(R,{source:"<form>"});var ie=e(R,4);r(ie,{source:"/process"});var W=e(C,4),pe=e(n(W));r(pe,{source:"view.RenderModeServer"});var z=e(W,2);t(z,{lang:"go",source:`
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
        `});var D=e(z,4);t(D,{lang:"html",source:`
            <form action="/process">
                <input type="text" name="name" />
                <button type="submit">Submit</button>
            </form>
        `});var L=e(D,2),de=e(n(L));r(de,{source:"view.RenderModeFull"});var T=e(L,2);t(T,{lang:"html",source:`
            <form action="/process" onsubmit="onsubmit(event)">
                <input type="text" name="name" />
                <button type="submit">Submit</button>
            </form>
        `});var M=e(T,2),V=e(n(M));r(V,{source:"onsubmit(event)"});var le=e(V,2);r(le,{source:"/process"});var A=e(M,2);o(A,{text:"Link Component"});var J=e(A,2),ce=e(n(J));r(ce,{source:"<Link>"});var P=e(J,4),he=e(n(P));r(he,{source:"<a>"});var j=e(P,6);t(j,{lang:"shell",source:"frizzante g links"});var q=e(j,2),me=e(n(q));r(me,{source:"<Link>"});var G=e(q,4),O=e(n(G));r(O,{source:"pending"});var B=e(O,2);r(B,{source:"error"});var ve=e(B,2);r(ve,{source:"children"});var H=e(G,2);t(H,{lang:"svelte",source:`
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
        `});var N=e(H,2);o(N,{text:"Form Component"});var U=e(N,2),ue=e(n(U));r(ue,{source:"<Form>"});var Y=e(U,4),fe=e(n(Y));r(fe,{source:"<form>"});var E=e(Y,6);t(E,{lang:"shell",source:`
            frizzante g forms
        `});var K=e(E,2),ge=e(n(K));r(ge,{source:"<Form>"});var be=e(K,6);t(be,{lang:"svelte",source:`
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
        `}),Se(we=>$e(b,"href",we),[()=>i("/some-other-page")]),xe(a,s)},$$slots:{rightSidebar:!0,footer:!0,default:!0}}),Fe()}export{Pe as default};
