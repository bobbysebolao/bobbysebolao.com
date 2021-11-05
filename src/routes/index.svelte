<script>
  import { getContext } from "svelte";
  import Aliens from "../lib/home/Aliens.svelte";
  import ContactForm from "../lib/home/ContactForm.svelte";
  import ProjectSummary from "../lib/home/ProjectSummary.svelte";
  export const prerender = true;
  const active_display_modes = getContext("active_display_modes");
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

<h1 class="intro {active_display_modes}">
  <span>Hi </span>-<span> I'm</span><br /><span>Bobby</span>
</h1>

<p class="intro {active_display_modes}">I tell stories with prose and code</p>

<Aliens {active_display_modes} alienCount={5} alienType="one" />

<hr class="home-separators" />

<h2>Web Projects</h2>

<ProjectSummary
  colour="green"
  projectType="Distributed Cloud Platform"
  projectName="Rate My Barber"
  projectDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
  blanditiis quisquam odit laborum minus, veniam aliquid, laboriosam atque
  a corrupti odio architecto."
  projectTech="Built with Node.js, React, and SQL."
  ctaUrl="https://github.com/bobbysebolao"
  ctaText="GitHub"
/>

<Aliens {active_display_modes} alienCount={5} alienType="two" />

<ProjectSummary
  colour="yellow"
  projectType="Distributed Cloud Platform"
  projectName="Rate My Barber"
  projectDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
  blanditiis quisquam odit laborum minus, veniam aliquid, laboriosam atque
  a corrupti odio architecto."
  projectTech="Built with Node.js, React, and SQL."
  ctaUrl="https://github.com/bobbysebolao"
  ctaText="GitHub"
/>

<Aliens {active_display_modes} alienCount={5} alienType="three" />

<ProjectSummary
  colour="blue"
  projectType="Distributed Cloud Platform"
  projectName="Rate My Barber"
  projectDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
  blanditiis quisquam odit laborum minus, veniam aliquid, laboriosam atque
  a corrupti odio architecto."
  projectTech="Built with Node.js, React, and SQL."
  ctaUrl="https://github.com/bobbysebolao"
  ctaText="GitHub"
/>

<Aliens {active_display_modes} alienCount={3} alienType="defense" />

<ProjectSummary
  colour="pink"
  projectType="Distributed Cloud Platform"
  projectName="Rate My Barber"
  projectDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
  blanditiis quisquam odit laborum minus, veniam aliquid, laboriosam atque
  a corrupti odio architecto."
  projectTech="Built with Node.js, React, and SQL."
  ctaUrl="https://github.com/bobbysebolao"
  ctaText="GitHub"
/>

<Aliens {active_display_modes} alienCount={3} alienType="player" />

<hr class="home-separators" />

<h2>Wanna Work Together?</h2>

<p class="contact-form-intro">
  I'm always happy to chat over ☕ - drop me a ✉️!
</p>

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
