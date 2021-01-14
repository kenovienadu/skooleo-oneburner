<template>
  <nav class="flex-between bg-white">
    <div class="flex-between nav-links-wrapper">
      <router-link to="/">
        <img src="../assets/logo.png" alt="" />
      </router-link>
      <div v-if="$route.name !== 'login'">
        <span
          @mouseenter="backdropContentShown = true"
          @click="toggleBackdropContent"
          >Product
          <i v-if="!backdropContentShown" class="fas fa-angle-down"></i>
          <i v-if="backdropContentShown" class="fas fa-angle-up"></i>
        </span>
        <span>Pricing</span>
        <span>
          <router-link to="/enterprise">Enterprise</router-link>
        </span>
        <span>Support</span>
      </div>
    </div>

    <div class="nav-links-wrapper">
      <span v-if="$route.name !== 'login'">
        <router-link to="/contact">Contact Sales</router-link>
      </span>
      <span v-if="$route.name !== 'login'">
        <router-link to="/login">Login</router-link>
      </span>
      <span v-if="$route.name === 'login'">New Customer?</span>
      <button class="rounded bg-primary">
        Try For Free <i class="fas fa-angle-right"></i>
      </button>
    </div>

    <div class="backdrop" v-if="backdropContentShown">
      <div class="content bg-white">
        <div class="inner">
          <div class="box">
            <span class="">
              <i class="fas fa-briefcase"></i>
            </span>

            <div>
              <p class="title">Clients</p>
              <p class="subtext">See the amazing team that uses Oneburner.</p>
            </div>
          </div>

          <div class="box">
            <span class="">
              <i class="fas fa-soap"></i>
            </span>

            <div>
              <p class="title">Oneburner stores</p>
              <p class="subtext">
                Explore our ready made solutions to expand your business.
              </p>
            </div>
          </div>

          <div class="box">
            <span class="">
              <i class="fas fa-plug"></i>
            </span>

            <div>
              <p class="title">Integrations</p>
              <p class="subtext">
                Connect different solution to Oneburner and get more done.
              </p>
            </div>
          </div>

          <div class="box">
            <span class="">
              <i class="fas fa-sticky-note"></i>
            </span>

            <div>
              <p class="title">Why Oneburner?</p>
              <p class="subtext">
                Learn more about our features, success rates, benefits and demo.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="empty"
        @click="toggleBackdropContent"
        @mouseenter="backdropContentShown = false"
      ></div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      backdropContentShown: false,
    };
  },
  methods: {
    toggleBackdropContent() {
      this.backdropContentShown = !this.backdropContentShown;
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  width: auto;
  transform: translate(-10px, -3px);
}

a {
  color: inherit;
  text-decoration: none;

  &:visited {
    color: inherit;
    outline: none;
  }

  &:active {
    outline: none;
  }
}

nav {
  margin: 1em 100px;
  z-index: 100;

  &:hover {
    .backdrop {
      display: block;
    }
  }

  .nav-links-wrapper {
    span {
      padding: 0.5em 1em;
      opacity: 0.8;

      &:hover {
        color: var(--primary-color-light);
        cursor: pointer;
      }
    }

    button {
      margin-left: 30px;

      i {
        margin-left: 1em;
      }
    }
  }
}

.backdrop {
  background: rgba(0, 0, 0, 0.144);
  position: fixed;
  top: 100px;
  left: 0;
  height: calc(100vh - 100px);
  width: 100vw;
  z-index: 200;

  .empty {
    height: calc(100vh - 100px - 170px - 20px);
  }

  .content {
    height: 170px;
    padding: 2em 100px;
    box-shadow: 0 10px 10px #a8a8a85e;

    .inner {
      display: grid;
      gap: 1em;
      grid-template-columns: repeat(4, 1fr);
      width: min(70vw, 1000px);
    }

    .box {
      display: inline-grid;
      grid-template-columns: 30px auto;

      i {
        color: var(--primary-color);
        transform: translate(4px, -2px);
      }

      div {
        padding-left: 1em;
        font-size: 14px;

        .title {
          font-weight: 500;
          padding-bottom: 1em;
        }

        .subtext {
          opacity: 0.5;
          line-height: 1.8em;
          font-size: 12px;
        }
      }
    }
  }
}
</style>