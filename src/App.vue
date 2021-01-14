<template>
  <div>
    <div v-if="isMobile">
      <div class="mobile-content text-center">
        <p class="lead">
          This page is not optimized for mobile. <br />
          Please view this page on a desktop.
        </p>
        <button class="rounded bg-primary" @click="showInMobile">
          Show Webpage Anyway
        </button>
      </div>
    </div>

    <div v-if="!isMobile">
      <Navbar />
      <div class="route-content">
        <router-view></router-view>
      </div>
      <Footer v-if="$route.name !== 'login'" />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      isMobile: window.innerWidth < 700,
    };
  },
  mounted() {
    console.log(this.isMobile);
    console.log(window.innerWidth);
  },
  methods: {
    showInMobile() {
      this.isMobile = false;
    },
  },
};
</script>

<style lang="scss">
:root {
  --primary-color: #462686;
  --primary-color-light: #7837f8;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Roboto", sans-serif;
  color: #333333;
}

.mobile-content {
  margin-top: 30vh;

  button {
    margin: 40px auto;
  }
}

.title {
  font-family: "Rubik", sans-serif;
}

.debug {
  border: 1px solid red;
}

.bg-primary {
  background: var(--primary-color);
  color: white;
}

.bg-primary-light {
  background: var(--primary-color-light);
  color: white;
}

.bg-white {
  background: white;
}

.bg-light {
  background: #fafafa;
}

.flex-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.text-center {
  text-align: center;
}

.text-light {
  opacity: 0.5;
}

.text-grey {
  color: rgb(71, 71, 71);
}

.text-10 {
  font-size: 10px;
}

.text-12 {
  font-size: 12px;
}

.padding-100 {
  padding: 100px;
}

button {
  border: none;
  outline: none;
  padding: 1em 30px;
  cursor: pointer;
  box-shadow: 0 5px 15px #5c5c5c5e;

  i {
    margin-left: 1em;
  }

  &.rounded {
    border-radius: 20px;
  }
}

p {
  line-height: 1.5em;
}

.route-content {
  min-height: 300px;
}
</style>