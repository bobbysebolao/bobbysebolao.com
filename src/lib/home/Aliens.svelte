<script>
  export let active_display_modes = "";
  export let alienCount = 0;
  export let alienType = "one";
</script>

<div class="aliens {active_display_modes}">
  {#each Array(alienCount) as _}
    <div class="aliens__{alienType}" />
  {/each}
</div>

<style lang="scss">
  .sprite {
    &.aliens {
      display: flex;
      justify-content: space-around;
      margin-top: 5em;
      margin-bottom: 6.5em;
      div {
        width: 30px;
        height: 30px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: left center;
        animation: alienAnim 2s steps(2) infinite;
      }

      .aliens__one {
        background-image: url(/static/alien_1.svg);
      }

      .aliens__two {
        background-image: url(/static/alien_2.svg);
      }

      .aliens__three {
        background-image: url(/static/alien_3.svg);
      }

      .aliens__defense {
        background-image: url(/static/defense.svg);
      }

      .aliens__player {
        background-image: url(/static/player.svg);
      }

      @keyframes alienAnim {
        100% {
          background-position-x: 200%;
        }
      }
    }
  }
</style>
