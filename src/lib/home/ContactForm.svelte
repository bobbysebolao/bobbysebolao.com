<form
  class="contact-form"
  action="/contact/send"
  method="post"
  enctype="multipart/form-data"
>
  <input
    type="text"
    name="name"
    placeholder="Ada Lovelace"
    id="contact-form-name"
    required
  />
  <label for="contact-form-name">Name</label>
  <input
    type="text"
    name="email"
    placeholder="ada@example.com"
    id="contact-form-email"
    required
  />
  <label for="contact-form-email">Email</label>

  <fieldset class="contact-form-about">
    <legend>About</legend>
    <div class="contact-form-checkboxes">
      <div>
        <input
          class="contact-form-checkbox"
          type="checkbox"
          name="websiteCheckbox"
          id="contact-form-checkbox-one"
        />
        <label for="contact-form-checkbox-one">Website</label>
        <div />
        <div />
      </div>
      <div>
        <input
          class="contact-form-checkbox"
          type="checkbox"
          name="contentCheckbox"
          id="contact-form-checkbox-two"
        />
        <label for="contact-form-checkbox-two">Content</label>
        <div />
        <div />
      </div>
      <div>
        <input
          class="contact-form-checkbox"
          type="checkbox"
          name="seoCheckbox"
          id="contact-form-checkbox-three"
        />
        <label for="contact-form-checkbox-three">SEO</label>
        <div />
        <div />
      </div>
      <div>
        <input
          class="contact-form-checkbox"
          type="checkbox"
          name="otherCheckbox"
          id="contact-form-checkbox-four"
        />
        <label for="contact-form-checkbox-four">Other</label>
        <div />
        <div />
      </div>
    </div>
  </fieldset>
  <textarea id="contact-form-message" name="message" rows="8" required />
  <label for="contact-form-message">Message</label>

  <button type="submit" id="contact-form-button">Send</button>
</form>
