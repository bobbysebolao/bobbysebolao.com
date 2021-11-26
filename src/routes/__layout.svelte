<script>
  import { onMount, beforeUpdate } from "svelte";
  import { active_display_modes as _active_display_modes } from "./stores";
  import Head from "$lib/head/Head.svelte";
  import Icons from "$lib/icons/Icons.svelte";
  import Header from "$lib/header/Header.svelte";
  import Footer from "$lib/footer/Footer.svelte";
  import "../app.css";

  let active_display_modes = [];

  _active_display_modes.subscribe((value) => {
    active_display_modes = value;
  });

  let root;

  onMount(() => {
    root = document.body;
  });

  beforeUpdate(() => {
    if (root) {
      root.className = active_display_modes.join(" ");
    }
  });
</script>

<Head />

<Icons />

<Header />

<main class={active_display_modes.join(" ")}>
  <slot />
</main>

<Footer {active_display_modes} />

<style global lang="scss">
  body {
    background-color: #c18e67;
    background-image: url(/static/desk_background.svg);
    &.night {
      background-color: #10161d;
      background-image: url(/static/desk_background_night.svg);
      &.knight {
        background-image: url(/static/desk_background_night_knight.svg);
      }
    }
    &.knight {
      background-image: url(/static/desk_background_knight.svg);
    }
    &.sprite {
      background-image: url(/static/desk_background_pixellated.jpg);
    }
  }
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
    &.night {
      background-color: var(--night-light);
      color: var(--neutral-white);
    }
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
