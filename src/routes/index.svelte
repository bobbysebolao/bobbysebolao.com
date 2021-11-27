<script context="module">
  export async function load({ fetch }) {
    const res = await fetch("/api/projects.json");

    if (res.ok) return { props: { projects_data: await res.json() } };

    return { error: new Error(await res.json()) };
  }
</script>

<script>
  import { active_display_modes as _active_display_modes } from "./stores";
  import Aliens from "../lib/home/Aliens.svelte";
  import ContactForm from "../lib/home/ContactForm.svelte";
  import ProjectSummary from "../lib/home/ProjectSummary.svelte";
  export const prerender = true;
  let active_display_modes = [];
  const COLOURS = ["green", "yellow", "blue", "pink"];

  _active_display_modes.subscribe((value) => {
    active_display_modes = value;
  });

  export let projects_data = [];
</script>

<svelte:head>
  <title>Home | Bobby Sebolao</title>
</svelte:head>

<!-- I added this div for webmentions, but can't remember exactly what it was for/if it worked... -->
<div class="h-entry" style="display:none">
  <div class="u-author h-card">
    <img
      src="https://console-blog.s3.amazonaws.com/user-avatars/bobby-250x250px-user-image.jpg"
      class="u-photo"
      width="40"
      alt="My user avatar"
    />
    <a href="https://www.bobbysebolao.com/" class="u-url p-name"
      >Bobby Sebolao</a
    >
  </div>
  <p>
    in reply to:
    <a
      class="u-in-reply-to"
      href="https://hwclondon.co.uk/meetups/20190807"
      rel="in-reply-to">an event invite on hwclondon.co.uk</a
    >
  </p>
  <p class="e-content"><span class="p-rsvp">yes</span></p>
  <a href="https://www.bobbysebolao.com/" class="u-url" />
</div>

<h1 class="intro {active_display_modes.join(' ')}">
  <span>Hi </span>-<span> I'm</span><br /><span>Bobby</span>
</h1>

<p class="intro {active_display_modes.join(' ')}">
  I tell stories with prose and code
</p>

<Aliens
  display_mode_classes={active_display_modes.join(" ")}
  alienCount={3}
  alienType="default"
/>

<hr class="home-separators {active_display_modes.join(' ')}" />

{#each projects_data as d, i}
  <ProjectSummary colour={COLOURS[i]} projectData={d} {active_display_modes} />
  <Aliens
    display_mode_classes={active_display_modes.join(" ")}
    alienCount={3}
    alienType="alien{i}"
  />
{/each}

<hr class="home-separators {active_display_modes.join(' ')}" />

<h2>Wanna Work Together?</h2>

<ContactForm {active_display_modes} />

<style lang="scss">
  .sprite {
    font-family: "VT323", monospace;
    position: relative;
    text-transform: uppercase;

    span {
      font-size: 1.5em;
      font-weight: bold;
      &:last-child {
        font-family: "Calculator";
      }
    }
  }

  h1.intro {
    text-transform: uppercase;
  }

  p.intro {
    font-size: 2em;
    margin-bottom: 0;
  }

  .home-separators {
    margin-top: 5em;
    &.night {
      border: 1px solid var(--neutral-white);
    }
    &.knight {
      overflow: visible;
      border: none;
      border-top: double #5d5d60;
      color: #5d5d60;
      text-align: center;
      &::after {
        content: "§";
        display: inline-block;
        position: relative;
        top: -0.7em;
        font-size: 1.5em;
        padding: 0 0.25em;
        background: var(--knight-off-white);
      }
    }
  }
</style>
