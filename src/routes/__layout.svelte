<script>
  import { setContext, getContext } from "svelte";
  import Head from "$lib/head/Head.svelte";
  import Icons from "$lib/icons/Icons.svelte";
  import Header from "$lib/header/Header.svelte";
  import Footer from "$lib/footer/Footer.svelte";
  import "../app.css";
  const active_display_modes = "sprite";
  setContext("active_display_modes", active_display_modes);
</script>

<Head />

<Icons />

<Header />

<main class={active_display_modes}>
  <slot />
</main>

<Footer />

<style lang="scss">
  main {
    background: #fdfdfd;
    padding: 80px 80px 0em 80px;
    box-shadow: 5px 10px 10px 0px #000000;
    font-family: "Permanent Marker", cursive;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 840px;
    z-index: 0;
    position: relative;
    &.sprite {
      font-family: "VT323", monospace;
    }
  }
  @media only screen and (min-device-width: 320px) and (max-device-width: 600px) {
    main {
      padding: 2.5em 2.5em 0em 2.5em;
    }
  }
</style>
