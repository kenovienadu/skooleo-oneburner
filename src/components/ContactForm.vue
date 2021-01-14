<template>
  <div class="contact-form bg-white">
    <form>
      <div class="grid grid-50">
        <div class="group">
          <label>Last Name</label>
          <input type="text" />
        </div>
        <div class="group">
          <label>First Name</label>
          <input type="text" />
        </div>
      </div>
      <div class="group">
        <label>Work Email</label>
        <input type="text" />
      </div>
      <div class="group">
        <label>Phone Number</label>
        <input type="text" />
      </div>
      <div class="group">
        <label>Product of Interest</label>
        <select disabled>
          <option value="">Select an Option</option>
        </select>
        <span class="select-indicator">
          <i class="fas fa-angle-down"></i>
        </span>
      </div>
      <div class="grid grid-60">
        <div class="group">
          <label>Company Name</label>
          <input type="text" />
        </div>
        <div class="group">
          <label>Company Size</label>
          <select disabled>
            <option value="">Select an Option</option>
            <option value="">1-10</option>
            <option value="">11-30</option>
            <option value="">30-100</option>
            <option value="">>100</option>
          </select>
          <span class="select-indicator">
            <i class="fas fa-angle-down"></i>
          </span>
        </div>
      </div>
      <div class="group last">
        <label>How can our expert help you?</label>
        <input disabled type="text" />
      </div>

      <button class="bg-primary rounded">Contact Us</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.contact-form {
  padding: 80px;
  border-radius: 10px;
  box-shadow: 0 0 35px lightgray;
  min-height: 400px;

  button {
    font-size: 1em;
    border-radius: 30px;
    display: block;
    width: 100%;
  }

  form {
    .grid {
      display: grid;
      gap: 1em;

      &.grid-50 {
        grid-template-columns: repeat(2, 1fr);
      }

      &.grid-60 {
        grid-template-columns: auto 35%;
      }
    }

    .group {
      margin-bottom: 1em;
      position: relative;

      .select-indicator {
        position: absolute;
        bottom: 1em;
        right: 1em;
      }

      &.last {
        input {
          height: 140px;
        }
      }

      label,
      input,
      select {
        display: block;
        width: 100%;
      }

      label {
        font-size: 12px;
        padding-bottom: 0.5em;
        opacity: 0.8;
      }

      input,
      select {
        border: 1.5px solid black;
        border-radius: 5px;
        padding: 1.5em 1em;

        &:focus {
          outline: none;
        }

        &:disabled {
          background: none;
          color: rgb(173, 173, 173);
        }
      }

      select {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        position: relative;
      }
    }
  }
}
</style>