<template>
  <div class="wrapper">
    <div class="hero flex-between">
      <div>
        <h1>
          Collaborate with your <br />
          team and get more done
        </h1>
        <br /><br />
        <p class="text-light">
          Communicate effectively with Oneburner for easy <br />
          collaboration, team work, and remote work
        </p>
        <br /><br />
        <button class="bg-primary rounded">
          Start Free Trial <i class="fas fa-angle-right"></i>
        </button>
      </div>

      <img src="../assets/home/hero.png" alt="" />
    </div>

    <div>
      <p class="text-center">
        Over 500+ companies bond teams together with Oneburner
      </p>
      <br />
      <div class="flex-center">
        <img src="../assets/supported_brands.png" alt="" />
      </div>
    </div>

    <div class="shadowed-box">
      <div class="flex-between text-grey">
        <span class="bg-primary">CRM & Sales</span>
        <span>Human Resources</span>
        <span>Marketing</span>
        <span>Remote Work</span>
        <span>Project Management</span>
        <span>Social Media</span>
      </div>

      <div class="flex-between">
        <div class="extra-padding">
          <p class="lead">
            Manage team activities <br />
            all in one place
          </p>
          <p class="subtext">
            Keep your team organized and informed with activites that are <br />
            up to date.
          </p>
        </div>

        <img src="../assets/home/video.png" alt="" />
      </div>
    </div>

    <div class="sectioned flex-between">
      <img src="../assets/home/speed.png" alt="" />

      <div class="extra-padding">
        <p class="lead">Bring your team up to speed</p>
        <p class="subtext">
          Collaborate on project from start to finish, see information at a
          glance, add comment, attachment and more with Oneburner.
        </p>
      </div>
    </div>

    <div class="sectioned flex-between">
      <div class="">
        <p class="lead">Automated task timeline</p>
        <p class="subtext">
          View dates, projects, calendar, sprint and more with reliability.
        </p>
      </div>

      <img src="../assets/home/timeline.png" alt="" />
    </div>

    <div class="sectioned">
      <p class="lead text-center">
        Integrate with your favorite tools <br />
        easily in one click
      </p>
      <div class="flex-center">
        <img src="../assets/brands.png" alt="" />
      </div>
    </div>

    <div class="sectioned flex-between">
      <img src="../assets/home/report.png" alt="" />

      <div class="extra-padding-left">
        <p class="lead">Timeless report generator</p>
        <p class="subtext">
          You can generate quick report of activities of all that has to do with
          the daily running of your business and teams.
        </p>
      </div>
    </div>

    <div class="sectioned flex-between">
      <div class="extra-padding-left">
        <p class="lead">Efficient Lead Management</p>
        <p class="subtext">
          Track and manage prospective customers. Manage their notes, emails,
          <br />
          meetings, calls, contacts, and files.
        </p>
      </div>

      <img src="../assets/home/chart.png" alt="" />
    </div>

    <div class="sectioned flex-between">
      <img src="../assets/home/support.png" alt="" />

      <div class="extra-padding-left">
        <p class="lead">24/7 customer support</p>
        <p class="subtext">
          Our team of responsible member is always avialable to help you all day
          long <br />
          and ready to meet your demand. Reach out to us and we will always be
          there.
        </p>
      </div>
    </div>

    <div class="bg-primary-light colored text-center">
      <h3 class="lead">Choose a better way to work</h3>
      <p class="">
        No credit card details | No additional installations | No time wasting
      </p>
      <button class="rounded bg-primary">
        Start my free trial <i class="fas fa-angle-right"></i>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  img {
    width: auto;
    margin-bottom: 30px;
    cursor: pointer;
  }

  .extra-padding {
    padding: 0 50px;
  }

  .lead {
    font-size: 2em;
    margin-bottom: 0.7em;
    font-family: "Rubik", sans-serif;
    line-height: 1.3em;
  }

  p.subtext {
    opacity: 0.7;
    font-size: 14px;
  }

  button i {
    margin-left: 0.5em;
  }
}
.hero {
  padding: 30px 150px;

  h1 {
    font-size: 2.5em;
  }

  img {
    width: auto;
  }

  button {
    padding: 1.1em 4em;
    font-size: 1em;
    border-radius: 30px;
  }
}

.shadowed-box {
  margin: 40px 0;
  min-height: 400px;
  box-shadow: 0 20px 35px #a8a8a85e;
  padding: 100px;

  > div:first-child {
    margin-bottom: 40px;
    padding-right: 50px;
    border-radius: 5px;
    border: 2px solid var(--primary-color);

    span:first-child {
      padding: 1em 1.5em;
    }
  }

  > div:last-child {
    margin-top: 130px;
  }
}

.sectioned {
  padding: 50px 150px;

  .extra-padding-left {
    padding-left: 50px;
  }
}

.colored {
  padding: 100px;

  .lead {
    text-shadow: 0 5px 5px #0006;
    font-size: 2.5em;
    margin-bottom: 0.4em;
  }

  button {
    margin-top: 40px;
    font-size: 1em;
    padding: 1em 3em;
    border-radius: 30px;
  }
}
</style>