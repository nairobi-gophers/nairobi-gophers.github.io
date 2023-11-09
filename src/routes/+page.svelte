<script>

    import {createMenu} from "@grail-ui/svelte";
    import nairobiGophersLogo
        from '$lib/assets/images/nairobi-gophers-logo.png'

    const {useTrigger, triggerAttrs, useMenu, open, itemAttrs} = createMenu();

    const close = () => $open = false
</script>
<nav class="border-b border-b-gray-300 lg:border-none lg:flex lg:flex-row lg:items-center lg:justify-between lg:p-3">
    <div class="flex flex-row items-center gap-2">

        <div class="flex flex-row items-center p-1 lg:p-0">
            <button {...$triggerAttrs} class="text-primary-blue w-10 lg:hidden"
                    use:useTrigger>
                 <span class="material-symbols-outlined text-4xl block">
                menu
            </span>
            </button>

            <img alt="Nairobi gophers logo" class="w-11 h-auto lg:w-13"
                 src={nairobiGophersLogo}/>
        </div>

        <h1 class="text-primary-blue font-bold text-xl">
            Nairobi Gophers
        </h1>
    </div>

    <div class="hidden  lg:flex flex-row gap-4 items-center text-primary-blue font-bold capitalize">
        <a class="border-b-2 border-b-primary-blue" href="/">Home</a>
        <a class="border-b border-white" href="/">About</a>
        <a class="border-b border-white" href="/">Contact</a>
        <a class="border-b border-white" href="/">Nairobigophercon 2024</a>
    </div>
</nav>

{#if $open}
    <div use:useMenu>
        <div class="fixed top-0 left-0 gap-3 h-full flex flex-col p-3 bg-white w-[300px] items-center shadow-lg">
            <a href="/"
               {...$itemAttrs}
               on:click={close}
            >Home</a>

            <a href="/"
               {...$itemAttrs}
               on:click={close}
            >About</a>

            <a href="/"
               {...$itemAttrs}
               on:click={close}
            >Contact</a>

            <a href="/"
               {...$itemAttrs}
               on:click={close}
            >Nairobigophercon 2024</a>

        </div>
    </div>
{/if}

<slot/>
<h1>We Are <br/> Nairobi Gophers</h1>
<p>We are a group is for Go Enthusiasts. We aim to create a community
    around the language and share experiences adopting the language.</p>


<button type="button">Find us on meetup</button>