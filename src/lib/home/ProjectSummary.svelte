<script>
  export let colour = "#cccccc";
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

<section class="portfolio-project">
  <div class="project-image" style="background-image: url({img_url})" />
  <div class="project-bg {colour}">
    <div class="project-description">
      <p class="project-type">{type}</p>
      <h2 class="project-title">{title}</h2>
      <p class="project-summary">{description}</p>
      <p class="project-tech">{tech_stack}</p>
    </div>
  </div>

  <a href={cta_url} target="_blank" class="project-cta {colour}">{cta_text}</a>
</section>

<style lang="scss">
  .portfolio-project {
    margin-bottom: 10em;
    position: relative;
    z-index: 0;

    .project-image {
      width: 360px;
      height: 448px;
      margin-top: 0px;
      background: #cccccc;
      background-repeat: no-repeat;
      background-position: center center;
      z-index: 1;
      border-radius: 5px;
    }

    .project-bg {
      position: absolute;
      top: -1.5em;
      left: 1.5em;
      width: calc(100% - 1.5em);
      height: 448px;
      z-index: -1;
      border-radius: 5px;

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
    }

    .project-description {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 0em;
      right: 0;
      width: 280px;
      z-index: 0;
      padding: 2em 1.25em 0em 1.25em;

      .project-type {
        align-self: flex-end;
        text-align: right;
        width: 70%;
        margin: 0 0 0 0;
      }

      .project-title {
        margin-top: 24px;
        margin-bottom: 8px;
        text-align: left;
      }

      .project-summary {
        font-family: "Lato", sans-serif;
        text-align: left;
      }

      .project-tech {
        font-family: "Lato", sans-serif;
        text-align: left;
      }
    }

    .project-cta {
      position: absolute;
      bottom: 0px;
      right: 20px;
      font-size: 1.25em;
      padding: 12px 12px;
      text-transform: uppercase;
      background: black;
      text-decoration: none;
      color: white;
      transition: all 0.25s ease;
      border-radius: 5px;

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
    }
  }
</style>
