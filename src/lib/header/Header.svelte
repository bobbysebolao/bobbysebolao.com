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
            <div class="home tabRibbonStylingBottom" />
          </a>
          <div class="tabRibbonStylingOuter" />
          <div class="home tabRibbonStylingInner" />
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
            <div class="about tabRibbonStylingBottom" />
          </a>
          <div class="tabRibbonStylingOuter" />
          <div class="about tabRibbonStylingInner" />
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
            <div class="work tabRibbonStylingBottom" />
          </a>
          <div class="tabRibbonStylingOuter" />
          <div class="work tabRibbonStylingInner" />
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
            <div class="blog tabRibbonStylingBottom" />
          </a>
          <div class="tabRibbonStylingOuter" />
          <div class="blog tabRibbonStylingInner" />
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
          <div class="{active_tab} tabRibbonStylingInner" />
          <div class="{active_tab} tabRibbonStylingBottom" />
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
          <div class="{active_tab} tabRibbonStylingInner" />
          <div class="{active_tab} tabRibbonStylingBottom" />
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
          <div class="{active_tab} tabRibbonStylingInner" />
          <div class="{active_tab} tabRibbonStylingBottom" />
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
      &.home {
        background: var(--postit-green);
      }
      &.about {
        background: var(--postit-yellow);
      }
      &.work {
        background: var(--postit-blue);
      }
      &.blog {
        background: var(--postit-pink);
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
      &.knight {
        border-radius: 0;
        font-size: 1.2rem;
        &::before,
        &::after {
          content: "";
          display: inline-block;
          position: absolute;
          top: -15px;
          width: 0px;
          height: 0px;
          border-top: 15px solid transparent;
          border-bottom: 0px solid transparent;
          border-radius: 0;
        }
        &::before {
          left: 0px;
        }
        &::after {
          left: 50px;
          z-index: -1;
        }
        &:hover,
        &.active {
          &::before,
          &::after {
            transform: translateY(0px);
          }
        }
        &.home {
          &::before {
            border-left: 50px solid var(--postit-green);
          }
          &::after {
            border-right: 50px solid var(--postit-green);
          }
        }
        &.about {
          &::before {
            border-left: 50px solid var(--postit-yellow);
          }
          &::after {
            border-right: 50px solid var(--postit-yellow);
          }
        }
        &.work {
          &::before {
            border-left: 50px solid var(--postit-blue);
          }
          &::after {
            border-right: 50px solid var(--postit-blue);
          }
        }
        &.blog {
          &::before {
            border-left: 50px solid var(--postit-pink);
          }
          &::after {
            border-right: 50px solid var(--postit-pink);
          }
        }
        a {
          padding: 25px 10px 15px;
          &:before {
            display: inline-block;
            position: absolute;
            left: 50px;
            top: -15px;
            content: "";
            width: 0px;
            height: 0px;
            border-top: 15px solid #7c7c7c;
            border-bottom: 15px solid transparent;
            border-right: 50px solid transparent;
            z-index: 5;
          }
          &:after {
            display: inline-block;
            position: absolute;
            left: 0px;
            top: -15px;
            content: "";
            width: 0px;
            height: 0px;
            border-top: 15px solid #7c7c7c;
            border-bottom: 15px solid transparent;
            border-left: 50px solid transparent;
            z-index: 5;
          }
        }

        .tabRibbonStylingOuter {
          &::before {
            display: inline-block;
            position: absolute;
            left: 5px;
            top: -8px;
            content: "";
            width: 0px;
            height: 0px;
            border-top: 15px solid transparent;
            border-bottom: 0px solid transparent;
            border-left: 50px solid white;
          }
          &::after {
            display: inline-block;
            position: absolute;
            left: 45px;
            top: -8px;
            content: "";
            width: 0px;
            height: 0px;
            border-top: 15px solid transparent;
            border-bottom: 0px solid transparent;
            border-right: 50px solid white;
          }
        }

        .tabRibbonStylingInner {
          &::before {
            display: inline-block;
            position: absolute;
            left: 10px;
            top: -1px;
            content: "";
            width: 0px;
            height: 0px;
            border-top: 15px solid transparent;
            border-bottom: 0px solid transparent;
          }
          &::after {
            display: inline-block;
            position: absolute;
            left: 40px;
            top: -1px;
            content: "";
            width: 0px;
            height: 0px;
            border-top: 15px solid transparent;
            border-bottom: 0px solid transparent;
          }
          &.home {
            &::before {
              border-left: 50px solid var(--postit-green);
            }
            &::after {
              border-right: 50px solid var(--postit-green);
            }
          }
          &.about {
            &::before {
              border-left: 50px solid var(--postit-yellow);
            }
            &::after {
              border-right: 50px solid var(--postit-yellow);
            }
          }
          &.work {
            &::before {
              border-left: 50px solid var(--postit-blue);
            }
            &::after {
              border-right: 50px solid var(--postit-blue);
            }
          }
          &.blog {
            &::before {
              border-left: 50px solid var(--postit-pink);
            }
            &::after {
              border-right: 50px solid var(--postit-pink);
            }
          }
        }
        .tabRibbonStylingBottom {
          &::before {
            display: inline-block;
            position: absolute;
            left: 5px;
            top: 50px;
            content: "";
            width: 90px;
            height: 40px;
            border-left: 5px solid white;
            border-right: 5px solid white;
            box-sizing: border-box;
          }
          &::after {
            content: "";
            display: inline-block;
            position: absolute;
            left: 0;
            top: 0;
            z-index: -1;
            width: 100px;
            height: 90px;
            // box-shadow: 5px 10px 10px 0px #000000;
          }
          &.home::before {
            background: var(--postit-green);
          }
          &.about::before {
            background: var(--postit-yellow);
          }
          &.work::before {
            background: var(--postit-blue);
          }
          &.blog::before {
            background: var(--postit-pink);
          }
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
        &.knight {
          font-family: "MedievalSharp", cursive;
          display: inline;
          vertical-align: middle;
          position: relative;
          top: 3px;
          margin: 0 2px;
          padding: 0 0 0 0;
          width: 100px;
          box-sizing: border-box;
          box-shadow: inset 0px 0px 0px 10px white;
          outline: 5px solid;
          outline-offset: -5px;
          &.home {
            outline-color: var(--postit-green);
          }
          &.about {
            outline-color: var(--postit-yellow);
          }
          &.work {
            outline-color: var(--postit-blue);
          }
          &.blog {
            outline-color: var(--postit-pink);
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
        &.knight {
          display: block;
          position: relative;
          top: 3px;
          margin: 0px 2px 0px 2px;
          padding: 20px 20px 20px 20px;
          background: #afec6a;
          border-top-left-radius: 0px;
          border-top-right-radius: 0px;
          cursor: pointer;
          //   box-shadow: 5px 0px 10px 1px #000000;
          box-sizing: border-box;
          box-shadow: inset 0px 0px 0px 10px white;
          outline: 5px solid;
          outline-offset: -5px;
          &::before {
            border-left-width: 35px;
          }
          &::after {
            left: 35px;
            border-right-width: 35px;
          }
          &.home {
            outline-color: var(--postit-green);
          }
          &.about {
            outline-color: var(--postit-yellow);
          }
          &.work {
            outline-color: var(--postit-blue);
          }
          &.blog {
            outline-color: var(--postit-pink);
          }

          .tabRibbonStylingInner {
            &::after {
              left: 25px;
            }
            &.home {
              &::before {
                border-left: 35px solid var(--postit-green);
              }
              &::after {
                border-right: 35px solid var(--postit-green);
              }
            }
            &.about {
              &::before {
                border-left: 35px solid var(--postit-yellow);
              }
              &::after {
                border-right: 35px solid var(--postit-yellow);
              }
            }
            &.work {
              &::before {
                border-left: 35px solid var(--postit-blue);
              }
              &::after {
                border-right: 35px solid var(--postit-blue);
              }
            }
            &.blog {
              &::before {
                border-left: 35px solid var(--postit-pink);
              }
              &::after {
                border-right: 35px solid var(--postit-pink);
              }
            }
          }

          .tabRibbonStylingOuter {
            &::before {
              border-left: 35px solid white;
            }
            &::after {
              left: 30px;
              border-right: 35px solid white;
            }
          }
          .tabRibbonStylingBottom {
            &::before {
              width: 60px;
            }
            &.home::before {
              background: var(--postit-green);
            }
            &.about {
              background: var(--postit-yellow);
            }
            &.work {
              background: var(--postit-blue);
            }
            &.blog {
              background: var(--postit-pink);
            }
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
      padding: 15px 10px;
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
    position: relative;

    &.home {
      background-color: var(--postit-green);
    }
    &.about {
      background-color: var(--postit-yellow);
    }
    &.work {
      background-color: var(--postit-blue);
    }
    &.blog {
      background-color: var(--postit-pink);
    }
    &.night {
      background-color: var(--night-medium);
    }
    &.knight {
      background-color: var(--knight-off-white);
      border-radius: 0;
      box-shadow: none;
      z-index: 1;
      &:before {
        content: "";
        display: inline-block;
        position: absolute;
        top: -15px;
        left: 0;
        width: 100%;
        height: 20px;
        background: transparent;
        background-image: url(/static/parchment-edge.svg);
        background-position: bottom;
        box-shadow: none;
      }
    }
  }
</style>
