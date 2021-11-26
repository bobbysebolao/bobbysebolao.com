<script>
  export let active_display_modes = [];
</script>

<footer class={active_display_modes.join(" ")}>
  <div class="social-icons">
    <a href="https://github.com/bobbysebolao" rel="me" target="_blank">
      <svg class="icon"><use xlink:href="#github" /></svg>
    </a>

    <a href="https://twitter.com/bobbysebolao" rel="me" target="_blank">
      <svg class="icon"><use xlink:href="#twitter" /></svg>
    </a>

    <a
      href="https://www.linkedin.com/in/bobby-sebolao-90651559/"
      target="_blank"
    >
      <svg class="icon">
        <use xlink:href="#linkedin" />
      </svg>
    </a>
  </div>
  <p class="credit">
    <sub style="opacity: 0.5;">Powered by Svelte</sub>
  </p>
</footer>

<style lang="scss">
  footer {
    width: 100%;
    position: relative;
    background: #fdfdfd;
    box-shadow: 5px 10px 10px 0px #000000;
    &.night {
      background: var(--night-light);
      color: var(--neutral-white);
    }

    .social-icons {
      width: 300px;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      padding-top: 2em;

      a {
        width: calc(20% - 1em);
        height: 45px;
        margin-right: 1em;

        &:last-child {
          margin-right: 0em;
        }

        .icon {
          fill: #111;
          opacity: 0.5;
          transition: all 0.25s ease;
          cursor: pointer;
          margin-right: 1em;
          width: 100%;
          height: 100%;

          &:hover {
            fill: #191717;
            opacity: 1;
            cursor: pointer;
          }
        }
      }
    }

    .credit {
      padding-bottom: 1em;
      margin-bottom: 0;
    }
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 600px) {
    footer {
      padding: 2.5em 2.5em 1em 2.5em;
    }
  }
</style>
