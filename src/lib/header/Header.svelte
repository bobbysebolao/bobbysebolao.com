<script>
  import { active_display_modes } from "../../routes/stores";
  import { page } from "$app/stores";

  let active_tab = $page.path.split("/")[1].length
    ? $page.path.split("/")[1]
    : "home";

  const setActiveTab = (tab_name) => {
    active_tab = tab_name;
  };

  function toggleMode(mode) {
    active_display_modes.update((active_modes) => {
      return active_modes.includes(mode)
        ? active_modes.filter((d) => d !== mode)
        : [...active_modes, mode];
    });
  }
</script>

<header>
  <nav>
    <div class="tabs">
      <ul class="tabGroup pages">
        <li class="home">
          <a sveltekit:prefetch href="/" on:click={() => setActiveTab("home")}
            >HOME
            <div class="tabRibbonStylingBottom" />
          </a>
          <div class="tabRibbonStylingOuter" />
          <div class="tabRibbonStylingInner" />
        </li>
        <li class="about">
          <a
            sveltekit:prefetch
            href="/about"
            on:click={() => setActiveTab("about")}
            >ABOUT
            <div class="tabRibbonStylingBottom" />
          </a>
          <div class="tabRibbonStylingOuter" />
          <div class="tabRibbonStylingInner" />
        </li>
        <li class="work">
          <a
            sveltekit:prefetch
            href="/work"
            on:click={() => setActiveTab("work")}
            >WORK
            <div class="tabRibbonStylingBottom" />
          </a>
          <div class="tabRibbonStylingOuter" />
          <div class="tabRibbonStylingInner" />
        </li>
        <li class="blog" style="margin-right: 11px;">
          <a
            sveltekit:prefetch
            href="/blog"
            on:click={() => setActiveTab("blog")}
            >BLOG
            <div class="tabRibbonStylingBottom" />
          </a>
          <div class="tabRibbonStylingOuter" />
          <div class="tabRibbonStylingInner" />
        </li>
      </ul>
      <ul class="tabGroup modes">
        <li class="nightMode {active_tab}" on:click={() => toggleMode("night")}>
          <svg>
            <use xlink:href="#moonIcon" />
          </svg>
          <div class="tabRibbonStylingOuter" />
          <div class="tabRibbonStylingInner" />
          <div class="tabRibbonStylingBottom" />
        </li>
        <li
          class="knightMode {active_tab}"
          on:click={() => toggleMode("knight")}
        >
          <svg>
            <use xlink:href="#knightIcon" />
          </svg>
          <div class="tabRibbonStylingOuter" />
          <div class="tabRibbonStylingInner" />
          <div class="tabRibbonStylingBottom" />
        </li>
        <li
          class="spriteMode {active_tab}"
          on:click={() => toggleMode("sprite")}
        >
          <svg>
            <use xlink:href="#tetrisSprite" />
          </svg>
          <div class="tabRibbonStylingOuter" />
          <div class="tabRibbonStylingInner" />
          <div class="tabRibbonStylingBottom" />
        </li>
      </ul>
    </div>
    <div class="fileDivider {active_tab}" />
  </nav>
</header>

<style lang="scss">
  nav {
    display: flex;
    flex-direction: column;
  }
  .tabs {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .tabGroup {
    position: relative;
    display: flex;
    padding: 0;
    margin: 0 10px;
    list-style: none;
    font-size: 1.4em;
    &:before {
      z-index: 1;
    }
    &:after {
      position: absolute;
      content: "";
      width: 100%;
      bottom: 0;
      left: 0;
      z-index: 1;
    }
    li {
      box-shadow: 5px 10px 10px 0px #000000;
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
      margin: 0 2px;
      position: relative;
      top: 3px;
      z-index: 0;
      &:before,
      &:after {
        position: absolute;
        bottom: 2px;
        width: 6px;
        height: 6px;
        content: " ";
      }
      &:before {
        left: -5.5px;
        border-bottom-right-radius: 6px;
      }
      &:after {
        right: -5.7px;
        border-bottom-left-radius: 6px;
      }
      &:hover {
        transform: translateY(-3px);
      }
      &:hover::before {
        box-shadow: 2px 2px 0;
        transform: translateY(3px);
      }
      &:hover::after {
        box-shadow: -2px 2px 0;
        transform: translateY(3px);
      }
    }
    &.pages {
      li {
        font-family: "Permanent Marker", cursive;
        display: inline;
        vertical-align: middle;
        padding: 0 0 0 0;
        width: 100px;
      }
    }
    &.modes {
      li {
        display: block;
        padding: 20px 20px 10px 20px;
        cursor: pointer;
      }
      li:nth-child(3) {
        margin-right: 6px;
      }
    }
    a {
      display: block;
      color: #111;
      text-decoration: none;
      padding: 15px 10px 15px 10px;
      line-height: inherit;
    }
    svg {
      width: 30px;
      height: 30px;
    }
  }

  .nightMode:hover {
    fill: #fff197;
  }

  .knightMode:hover {
    fill: #a24500;
  }

  .spriteMode:hover {
    fill: #b500fa;
  }

  .fileDivider {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px 5px 0 0;
    padding: 10px 25px 10px 25px;
    z-index: 0;
    box-shadow: 5px 10px 10px 0px #000000;
  }

  .home {
    background: var(--postit-green);
    &::before {
      box-shadow: 2px 2px 0 var(--postit-green);
    }
    &::after {
      box-shadow: -2px 2px 0 var(--postit-green);
    }
    &:hover {
      color: var(--postit-green);
    }
  }

  .about {
    background: var(--postit-yellow);
    &::before {
      box-shadow: 2px 2px 0 var(--postit-yellow);
    }
    &::after {
      box-shadow: -2px 2px 0 var(--postit-yellow);
    }
    &:hover {
      color: var(--postit-yellow);
    }
  }

  .work {
    background: var(--postit-blue);
    &::before {
      box-shadow: 2px 2px 0 var(--postit-blue);
    }
    &::after {
      box-shadow: -2px 2px 0 var(--postit-blue);
    }
    &:hover {
      color: var(--postit-blue);
    }
  }

  .blog {
    background: var(--postit-pink);
    &::before {
      box-shadow: 2px 2px 0 var(--postit-pink);
    }
    &::after {
      box-shadow: -2px 2px 0 var(--postit-pink);
    }
    &:hover {
      color: var(--postit-pink);
    }
  }
</style>
