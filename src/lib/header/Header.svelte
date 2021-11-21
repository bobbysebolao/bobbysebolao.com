<script>
  import { active_display_modes as _active_display_modes } from "../../routes/stores";
  import { page } from "$app/stores";

  let active_tab = $page.path.split("/")[1].length
    ? $page.path.split("/")[1]
    : "home";

  let active_display_modes = [];

  function setActiveTab(tab_name) {
    active_tab = tab_name;
  }

  _active_display_modes.subscribe((value) => {
    active_display_modes = value;
  });

  function toggleMode(mode) {
    _active_display_modes.update((active_modes) => {
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
        <li
          class="home {active_display_modes.join(' ')}"
          class:active={active_tab === "home"}
        >
          <a sveltekit:prefetch href="/" on:click={() => setActiveTab("home")}
            >HOME
            <div class="tabRibbonStylingBottom" />
          </a>
          <div class="tabRibbonStylingOuter" />
          <div class="tabRibbonStylingInner" />
        </li>
        <li
          class="about {active_display_modes.join(' ')}"
          class:active={active_tab === "about"}
        >
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
        <li
          class="work {active_display_modes.join(' ')}"
          class:active={active_tab === "work"}
        >
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
        <li
          class="blog {active_display_modes.join(' ')}"
          class:active={active_tab === "blog"}
          style="margin-right: 11px;"
        >
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
      <ul class="tabGroup displayModes">
        <li
          class="nightModeControl {active_tab} {active_display_modes.join(' ')}"
          class:active={active_display_modes.includes("night")}
          on:click={() => toggleMode("night")}
        >
          <svg>
            <use xlink:href="#moonIcon" />
          </svg>
          <div class="tabRibbonStylingOuter" />
          <div class="tabRibbonStylingInner" />
          <div class="tabRibbonStylingBottom" />
        </li>
        <li
          class="knightModeControl {active_tab} {active_display_modes.join(
            ' '
          )}"
          class:active={active_display_modes.includes("knight")}
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
          class="spriteModeControl {active_tab} {active_display_modes.join(
            ' '
          )}"
          class:active={active_display_modes.includes("sprite")}
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
    <div class="fileDivider {active_tab} {active_display_modes.join(' ')}" />
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
      color: #111;
      margin: 0 2px;
      position: relative;
      top: 3px;
      z-index: 0;
      &::before,
      &::after {
        position: absolute;
        bottom: 2px;
        width: 6px;
        height: 6px;
        content: " ";
      }
      &::before {
        left: -5.5px;
        border-bottom-right-radius: 6px;
      }
      &::after {
        right: -5.7px;
        border-bottom-left-radius: 6px;
      }
      &:hover,
      &.active {
        transform: translateY(-3px);
      }
      &:hover::before,
      &:hover::after,
      &.active::before,
      &.active::after {
        transform: translateY(3px);
      }
      &.night {
        background-color: var(--night-light);
        color: #fdfdfd;
        &.active {
          background-color: var(--night-medium);
        }
        &::before {
          box-shadow: 2px 2px 0 var(--night-light);
        }
        &::after {
          box-shadow: -2px 2px 0 var(--night-light);
        }
      }
    }
    &.pages {
      li {
        font-family: "Permanent Marker", cursive;
        display: inline;
        vertical-align: middle;
        padding: 0 0 0 0;
        width: 100px;
        &.night {
          &.active {
            &::before {
              box-shadow: 2px 2px 0 var(--night-medium);
            }
            &::after {
              box-shadow: -2px 2px 0 var(--night-medium);
            }
          }
        }
      }
    }
    &.displayModes {
      li {
        display: block;
        padding: 20px 20px 10px 20px;
        cursor: pointer;
        &.night {
          background-color: var(--night-medium);
          &::before {
            box-shadow: 2px 2px 0 var(--night-medium);
          }
          &::after {
            box-shadow: -2px 2px 0 var(--night-medium);
          }
        }
      }
      li:nth-child(3) {
        margin-right: 6px;
      }
    }
    a {
      display: block;
      color: inherit;
      text-decoration: none;
      padding: 15px 10px 15px 10px;
      line-height: inherit;
    }
    svg {
      width: 30px;
      height: 30px;
    }
  }

  .nightModeControl {
    &.active,
    &:hover {
      fill: #fff197;
    }
  }

  .knightModeControl {
    &.active,
    &:hover {
      fill: #a24500;
    }
  }

  .spriteModeControl {
    &.active,
    &:hover {
      fill: #b500fa;
    }
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
    &.night {
      background-color: var(--night-medium);
    }
  }

  .home {
    background-color: var(--postit-green);
    color: var(--postit-green);
    &::before {
      box-shadow: 2px 2px 0 var(--postit-green);
    }
    &::after {
      box-shadow: -2px 2px 0 var(--postit-green);
    }
  }

  .about {
    background-color: var(--postit-yellow);
    &::before {
      box-shadow: 2px 2px 0 var(--postit-yellow);
    }
    &::after {
      box-shadow: -2px 2px 0 var(--postit-yellow);
    }
  }

  .work {
    background-color: var(--postit-blue);
    &::before {
      box-shadow: 2px 2px 0 var(--postit-blue);
    }
    &::after {
      box-shadow: -2px 2px 0 var(--postit-blue);
    }
  }

  .blog {
    background-color: var(--postit-pink);
    &::before {
      box-shadow: 2px 2px 0 var(--postit-pink);
    }
    &::after {
      box-shadow: -2px 2px 0 var(--postit-pink);
    }
  }
</style>
