<p class="contact-form-intro">
  I'm always happy to chat over ☕ - drop me a ✉️!
</p>

<form
  class="contact-form"
  action="/contact/send"
  method="post"
  enctype="multipart/form-data"
>
  <label for="contact-form-name" class="contact-form-name">
    <span>Name</span>
    <input type="text" name="name" placeholder="Ada Lovelace" required />
  </label>
  <label for="contact-form-email" class="contact-form-email">
    <span>Email</span>
    <input type="text" name="email" placeholder="ada@example.com" required />
  </label>

  <fieldset class="contact-form-about">
    <legend>About</legend>
    <div class="contact-form-checkboxes">
      <div class="contact-form-checkbox">
        <input
          type="checkbox"
          name="websiteCheckbox"
          id="contact-form-checkbox-one"
          class="green"
        />
        <label for="contact-form-checkbox-one">Website</label>
        <div />
        <div />
      </div>
      <div class="contact-form-checkbox">
        <input
          type="checkbox"
          name="contentCheckbox"
          id="contact-form-checkbox-two"
          class="yellow"
        />
        <label for="contact-form-checkbox-two">Content</label>
        <div />
        <div />
      </div>
      <div class="contact-form-checkbox">
        <input
          type="checkbox"
          name="seoCheckbox"
          id="contact-form-checkbox-three"
          class="blue"
        />
        <label for="contact-form-checkbox-three">SEO</label>
        <div />
        <div />
      </div>
      <div class="contact-form-checkbox">
        <input
          type="checkbox"
          name="otherCheckbox"
          id="contact-form-checkbox-four"
          class="pink"
        />
        <label for="contact-form-checkbox-four">Other</label>
        <div />
        <div />
      </div>
    </div>
  </fieldset>
  <label for="contact-form-message" class="contact-form-message">
    <span>Message</span>
    <textarea id="contact-form-message" name="message" rows="8" required />
  </label>
  <button type="submit" class="contact-form-button">Send</button>
</form>

<style lang="scss">
  .contact-form-intro {
    font-family: "Lato", sans-serif;
    text-align: left;
    margin-top: 0;
  }

  .contact-form {
    display: grid;
    grid-template-columns: 2fr 9fr;
    align-items: center;
    text-align: left;
    grid-template-areas:
      "name name"
      "email email"
      "about about"
      "message message"
      ". submit";
    grid-row-gap: 3em;
    width: 100%;
    max-width: 550px;
    margin-top: 4em;

    input {
      margin: 0;
      padding: 0;
      height: 100%;
      border-top: 0;
      border-left: 0;
      border-right: 0;
      border-bottom: 1px solid #cccccc;
      transition: all 0.25s ease;
      background: #fdfdfd;
      &:hover {
        border-color: black;
      }
    }

    span {
      display: flex;
      align-items: center;
    }

    .contact-form-name {
      grid-area: name;
      display: grid;
      grid-template-columns: 2fr 9fr;
    }

    .contact-form-email {
      grid-area: email;
      display: grid;
      grid-template-columns: 2fr 9fr;
    }

    .contact-form-about {
      grid-area: about;
      display: grid;
      grid-template-columns: 2fr 9fr;
      border: none;
      padding: 0;
      margin: 0;
      height: 100px;

      legend {
        float: left;
        line-height: 100px;
        padding: 0;
      }

      .contact-form-checkboxes {
        width: 100px;
        height: 100px;
        margin-right: 0;
        display: flex;

        .contact-form-checkbox {
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;

          input {
            /* visually hide the default radio button */
            border: 0;
            clip: rect(0 0 0 0);
            height: 1px;
            margin: -1px;
            overflow: hidden;
            padding: 0;
            position: absolute;
            width: 1px;
            &.green {
              + label:before {
                background-image: url(/static/desktop-icon.svg);
                background-repeat: no-repeat;
                background-size: contain;
                background-position: center;
              }
              &:checked + label:before {
                background: var(--postit-green);
                background-image: url(/static/desktop-icon.svg);
                background-repeat: no-repeat;
                background-size: contain;
                background-position: center;
                border: 1px solid var(--postit-green);
              }
            }
            &.yellow {
              + label:before {
                background-image: url(/static/file-icon.svg);
                background-repeat: no-repeat;
                background-size: contain;
                background-position: center;
              }
              &:checked + label:before {
                background: var(--postit-yellow);
                background-image: url(/static/file-icon.svg);
                background-repeat: no-repeat;
                background-size: contain;
                background-position: center;
                border: 1px solid var(--postit-yellow);
              }
            }
            &.blue {
              + label:before {
                background-image: url(/static/globe-icon.svg);
                background-repeat: no-repeat;
                background-size: contain;
                background-position: center;
              }
              &:checked + label:before {
                background: var(--postit-blue);
                background-image: url(/static/globe-icon.svg);
                background-repeat: no-repeat;
                background-size: contain;
                background-position: center;
                border: 1px solid var(--postit-blue);
              }
            }
            &.pink {
              + label:before {
                background-image: url(/static/cup-icon.svg);
                background-repeat: no-repeat;
                background-size: contain;
                background-position: center;
              }
              &:checked + label:before {
                background: var(--postit-pink);
                background-image: url(/static/cup-icon.svg);
                background-repeat: no-repeat;
                background-size: contain;
                background-position: center;
                border: 1px solid var(--postit-pink);
              }
            }
          }

          /* make the label relative, add padding to the left for adding the custom radio button */
          label {
            cursor: pointer;
            position: relative;
            width: 100px;
            height: 23px;
            text-align: center;
            margin-right: 17px;
            z-index: 0;
            font-family: "Lato", sans-serif;
            &:before {
              content: "";
              position: absolute;
              top: -77px;
              left: calc(50% - 50px);
              border-radius: 5px;
              box-sizing: border-box;
              width: 100px;
              height: 100px;
              z-index: -1;
              border: 1px solid #cccccc;
              transition: all 0.25s ease;
            }
            &:hover:before {
              background: #cccccc;
            }
          }
        }
      }
    }

    .contact-form-message {
      grid-area: message;
      display: grid;
      grid-template-columns: 2fr 9fr;

      textarea {
        margin: 0;
        padding: 0;
        border: 1px solid #cccccc;
        border-radius: 5px;
      }
    }

    .contact-form-button {
      grid-area: submit;
      margin: auto;
      margin-bottom: 3em;
      font-size: 1.25em;
      padding: 12px 12px;
      border-radius: 5px;
      border-color: black;
      text-transform: uppercase;
      font-family: "Permanent Marker", cursive;
      background: black;
      color: white;
      transition: all 0.25s ease;
      &:hover {
        background: white;
        color: black;
        border-color: #cccccc;
        cursor: pointer;
      }
    }
  }
  @media only screen and (max-width: 749px) {
    .contact-form {
      grid-template-rows: repeat(5, auto);
      grid-template-columns: 2.5fr 7.5fr;
      grid-template-areas:
        "name name"
        "email email"
        "about about"
        "message message"
        "submit submit";
      .contact-form-about {
        height: auto;
        legend {
          line-height: 217px;
        }
        .contact-form-checkboxes {
          position: initial;
          display: grid;
          grid-template-columns: 100px 100px;
          grid-template-rows: 100px 100px;
          grid-row-gap: 17px;
          grid-column-gap: 17px;
        }
      }
    }
  }
</style>
