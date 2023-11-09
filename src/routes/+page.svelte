<script>

    import {createMenu} from "@grail-ui/svelte";
    import nairobiGophersLogo
        from '$lib/assets/images/nairobi-gophers-logo.png'

    const {useTrigger, triggerAttrs, useMenu, open, itemAttrs} = createMenu();

    const close = () => $open = false
</script>
<section id="hero-section">
    <nav class="border-b border-b-gray-300 lg:border-none lg:flex lg:flex-row lg:items-center lg:justify-between lg:p-3">
        <div class="flex flex-row items-center gap-2">

            <div class="flex flex-row items-center p-1 lg:p-0">
                <button {...$triggerAttrs}
                        class="text-primary-blue w-10 lg:hidden"
                        use:useTrigger>
                 <span class="material-symbols-outlined text-4xl block">
                menu
            </span>
                </button>

                <img alt="Nairobi gophers logo" class="w-11 h-auto lg:w-13"
                     src={nairobiGophersLogo}/>
            </div>

            <h1 class="text-primary-blue font-bold text-xl lg:text-lg">
                Nairobi Gophers
            </h1>
        </div>

        <div class="hidden  lg:flex flex-row gap-10 items-center text-primary-blue font-bold capitalize lg:text-lg">
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
    <div class="p-3 text-center mt-10 flex flex-col gap-5 md:pt-[100px]">
        <h1 class="text-secondary-blue text-4xl font-extrabold md:text-7xl ">
            We Are
            <br/>
            Nairobi Gophers
        </h1>
        <p class="text-justify text-secondary-blue lg:w-1/2 lg:mx-auto lg:font-extrabold">
            We are are the largest go community in Kenya with 1000+ members on
            meetup. We aim to create a community around the language and share
            experiences adopting the language.
        </p>

        <a class="my-5 p-5 bg-primary-blue text-white rounded mx-auto font-extrabold"
           href="https://www.meetup.com/Nairobi-Gophers/" target="_blank">
            Find us on Meetup
        </a>


    </div>
</section>


<style>
    #hero-section {
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 100vh;
        background-image: url("../lib/assets/images/background_image.svg");
    }
</style>