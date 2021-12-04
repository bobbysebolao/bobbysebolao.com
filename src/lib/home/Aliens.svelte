<script>
  export let display_mode_classes = "";

  export let alienCount = 0;
  export let alienType = "default";
</script>

<div class="aliens {display_mode_classes}">
  {#each Array(alienCount) as _}
    <div class={alienType} />
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

      .default {
        background-image: url(/static/alien_1.svg);
      }

      .alien0 {
        background-image: url(/static/alien_2.svg);
      }

      .alien1 {
        background-image: url(/static/alien_3.svg);
      }

      .alien2 {
        background-image: url(/static/defense.svg);
      }

      .alien3 {
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
