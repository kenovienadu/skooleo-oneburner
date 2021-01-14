<template>
  <div class="flex-center wrapper">
    <div class="content">
      <form>
        <p class="heading">Sign In</p>
        <p class="subtitle">Welcome Back!</p>

        <div class="group">
          <label>Email / Username</label>
          <input />
        </div>

        <div class="group">
          <label>Password</label>
          <input :type="showPassword ? 'text' : 'password'" />

          <span
            class="show-password-indicator"
            @click="showPassword = !showPassword"
          >
            <fa v-if="!showPassword" class="far fa-eye"></fa>
            <fa v-if="showPassword" class="far fa-eye-slash"></fa>
          </span>
        </div>

        <button class="bg-primary submit">Log In</button>

        <p>Forgot Password</p>
      </form>

      <div class="sign-in-options">
        <span>- Or Sign In With</span>
        <img src="../assets/login-page/sign-in-options.png" alt="" />
      </div>

      <p class="copyright text-center">
        &copy; 2020 Oneburner.com. All Rights Reserved
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPassword: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  height: calc(100vh - 120px);
  margin: 0 auto;

  .content {
    display: inline-block;
    width: 500px;
  }

  .sign-in-options {
    margin: 50px 0;
    font-size: 12px;
    display: flex;
    align-items: center;
  }

  .copyright {
    opacity: 0.5;
  }

  form {
    p {
      text-align: center;
      line-height: 2em;

      &.heading {
        font-size: 1.8em;
      }

      &.subtitle {
        opacity: 0.5;
        margin-top: 10px;
        margin-bottom: 50px;
      }

      &:last-child {
        color: var(--primary-color);
        margin-top: 1em;
      }
    }

    button.submit {
      display: block;
      width: 100%;
      border-radius: 30px;
      padding: 1em;
      font-size: 1em;
    }

    .group {
      position: relative;
      margin-bottom: 20px;

      .show-password-indicator {
        position: absolute;
        right: 1em;
        top: 2.2em;
        cursor: pointer;
      }

      label {
        display: block;
        width: 100%;
        font-size: 12px;
        padding-bottom: 0.5em;
        opacity: 0.8;
      }

      input {
        display: block;
        width: 100%;
        border: 1.5px solid black;
        border-radius: 5px;
        padding: 1.5em 1em;

        &:focus {
          outline: none;
        }
      }
    }
  }
}
</style>