<script>
  export let active_display_modes = [];
  export let colour = "grey";
  export let projectData = {
    Type: "Distributed Cloud Platform",
    Title: "Rate My Barber",
    Description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
        blanditiis quisquam odit laborum minus, veniam aliquid, laboriosam atque
        a corrupti odio architecto.`,
    "Tech Stack": "Built with Node.js, React, and SQL.",
    "Link URL": "https://github.com/bobbysebolao",
    "Link Text": "GitHub",
    Image:
      "https://files.worldwildlife.org/wwfcmsprod/images/Baby_Sloth_Hanging_iStock_3_12_2014/portrait_overview/4zhzw2pmf0_iStock_000016816803XLarge_mini.jpg",
  };
  const {
    ["Type"]: type,
    ["Title"]: title,
    ["Description"]: description,
    ["Tech Stack"]: tech_stack,
    ["Link URL"]: cta_url,
    ["Link Text"]: cta_text,
    ["Image"]: [image],
  } = projectData;

  const img_url = image.url;
</script>

<section class="portfolio-project {active_display_modes.join(' ')}">
  <div
    class="project-image {active_display_modes.join(' ')} {colour}"
    style="background-image: url({img_url})"
  >
    <div
      class="project-image-pseudo {active_display_modes.join(' ')} {colour}"
    />
  </div>
  <div class="project-bg {active_display_modes.join(' ')} {colour}">
    <div class="project-description {active_display_modes.join(' ')}">
      <p class="project-type {active_display_modes.join(' ')}">{type}</p>
      <h2 class="project-title {active_display_modes.join(' ')}">{title}</h2>
      <p class="project-summary {active_display_modes.join(' ')}">
        {description}
      </p>
      <p class="project-tech {active_display_modes.join(' ')}">{tech_stack}</p>
    </div>
  </div>

  <a
    href={cta_url}
    target="_blank"
    class="project-cta {active_display_modes.join(' ')} {colour}">{cta_text}</a
  >
</section>

<style lang="scss">
  .portfolio-project {
    font-family: "Lato", sans-serif;
    margin-top: 6.5em;
    position: relative;
    z-index: 0;

    &.knight {
      &::after {
        display: inline-block;
        position: absolute;
        bottom: 20px;
        left: 0;
        content: "";
        width: 100%;
        height: 20px;
        background-image: url(/static/parchment-edge.svg);
        z-index: -1;
      }
    }

    .project-image {
      width: 360px;
      height: 448px;
      margin-top: 0px;
      background: #cccccc;
      background-repeat: no-repeat;
      background-position: center center;
      z-index: 1;
      border-radius: 5px;
      &.night {
        background-color: var(--night-hover-light);
        background-blend-mode: multiply;
      }
      &.knight {
        &::before {
          display: inline-block;
          position: absolute;
          bottom: 0;
          left: 0;
          content: "";
          width: 25px;
          height: 100%;
          background-image: url(/static/portfolio-edge-side.svg);
          background-size: 100% auto;
          z-index: 5;
        }
        &::after {
          display: inline-block;
          position: absolute;
          top: 0;
          left: 0;
          content: "";
          transform: rotate(180deg);
          width: 360px;
          height: 20px;
        }
        &.green::after {
          background-image: url(/static/portfolio-edge-green.svg);
        }
        &.yellow::after {
          background-image: url(/static/portfolio-edge-yellow.svg);
        }
        &.blue::after {
          background-image: url(/static/portfolio-edge-blue.svg);
        }
        &.pink::after {
          background-image: url(/static/portfolio-edge-pink.svg);
        }
        .project-image-pseudo {
          position: relative;
          height: 100%;
          &::before,
          &::after {
            display: inline-block;
            position: absolute;
            right: 0;
            content: "";
            transform: rotate(180deg);
          }
          &::before {
            top: 0;
            width: 20px;
            height: calc(100% - 1.7em);
            background-size: 100% auto;
            z-index: 5;
          }
          &.green::before {
            background-image: url(/static/portfolio-edge-side-green.svg);
          }
          &.yellow::before {
            background-image: url(/static/portfolio-edge-side-yellow.svg);
          }
          &.blue::before {
            background-image: url(/static/portfolio-edge-side-blue.svg);
          }
          &.pink::before {
            background-image: url(/static/portfolio-edge-side-pink.svg);
          }
          &::after {
            bottom: 0;
            width: 100%;
            height: 30px;
            background-image: url(/static/portfolio-edge.svg);
            background-size: cover;
          }
        }
      }
    }

    .project-bg {
      position: absolute;
      top: -1.5em;
      left: 1.5em;
      width: calc(100% - 1.5em);
      height: 448px;
      z-index: -1;
      border-radius: 5px;

      &.grey {
        background: var(--neutral-grey);
      }

      &.green {
        background: var(--postit-green);
      }

      &.yellow {
        background: var(--postit-yellow);
      }

      &.blue {
        background: var(--postit-blue);
      }

      &.pink {
        background: var(--postit-pink);
      }
      &.night {
        background: var(--night-medium);
      }
      &.knight {
        &::before,
        &::after {
          display: inline-block;
          position: absolute;
          top: 0;
          content: "";
          transform: rotate(180deg);
        }
        &::before {
          left: 0;
          width: 100%;
          height: 20px;
          background-image: url(/static/parchment-edge.svg);
        }
        &::after {
          left: calc(100% - 20px);
          width: 20px;
          height: 100%;
          background-image: url(/static/parchment-edge-side.svg);
          background-size: 100% auto;
          z-index: 5;
        }
      }
    }

    .project-description {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 0em;
      right: 0;
      width: 280px;
      z-index: 0;
      padding: 2em 1.25em 0em 1.25em;

      .project-type {
        font-family: "Permanent Marker", cursive;
        align-self: flex-end;
        text-align: right;
        width: 70%;
        margin: 0 0 0 0;
        &.knight {
          font-family: MedievalSharp, cursive;
        }
      }

      .project-title {
        font-family: "Permanent Marker", cursive;
        margin-top: 24px;
        margin-bottom: 8px;
        text-align: left;
        &.knight {
          font-family: MedievalSharp, cursive;
        }
      }

      .project-summary {
        text-align: left;
        &.knight {
          font-family: MedievalSharp, cursive;
        }
      }

      .project-tech {
        text-align: left;
        &.knight {
          font-family: MedievalSharp, cursive;
        }
      }
    }

    .project-cta {
      position: absolute;
      bottom: 0px;
      right: 20px;
      font-family: "Permanent Marker", cursive;
      font-size: 1.25em;
      padding: 12px 12px;
      text-transform: uppercase;
      background: var(--night-dark);
      text-decoration: none;
      color: white;
      transition: all 0.25s ease;
      border-radius: 5px;

      &.night:hover {
        background: var(--night-hover-light);
        color: var(--night-hover-dark);
      }
      &.green:hover {
        background: var(--postit-green-hover);
        color: black;
      }
      &.yellow:hover {
        background: var(--postit-yellow-hover);
        color: black;
      }

      &.blue:hover {
        background: var(--postit-blue-hover);
        color: black;
      }

      &.pink:hover {
        background: var(--postit-pink-hover);
        color: black;
      }
      &.knight {
        font-family: MedievalSharp, cursive;
      }
    }
  }
</style>
