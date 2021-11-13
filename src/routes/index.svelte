<script context="module">
  export async function load({ fetch }) {
    const res = await fetch("/api/projects.json");

    if (res.ok) return { props: { projects_data: await res.json() } };

    return { error: new Error(await res.json()) };
  }
</script>

<script>
  import { active_display_modes } from "./stores";
  import Aliens from "../lib/home/Aliens.svelte";
  import ContactForm from "../lib/home/ContactForm.svelte";
  import ProjectSummary from "../lib/home/ProjectSummary.svelte";
  export const prerender = true;
  let display_mode_classes = "";

  active_display_modes.subscribe((value) => {
    display_mode_classes = value.join(" ");
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

<h1 class="intro {display_mode_classes}">
  <span>Hi </span>-<span> I'm</span><br /><span>Bobby</span>
</h1>

<p class="intro {display_mode_classes}">I tell stories with prose and code</p>

<Aliens {display_mode_classes} alienCount={5} alienType="one" />

<hr class="home-separators" />

<h2>Web Projects</h2>

<ProjectSummary colour="green" projectData={projects_data[0]} />

<Aliens {display_mode_classes} alienCount={5} alienType="two" />

<ProjectSummary colour="yellow" projectData={projects_data[1]} />

<Aliens {display_mode_classes} alienCount={5} alienType="three" />

<ProjectSummary colour="blue" projectData={projects_data[2]} />

<Aliens {display_mode_classes} alienCount={3} alienType="defense" />

<ProjectSummary colour="pink" projectData={projects_data[3]} />

<Aliens {display_mode_classes} alienCount={3} alienType="player" />

<hr class="home-separators" />

<h2>Wanna Work Together?</h2>

<ContactForm />

<hr />

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
  }

  .home-separators {
    display: block;
    margin-top: 5em;
  }
</style>
