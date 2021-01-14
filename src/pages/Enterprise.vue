<template>
  <div class="wrapper">
    <div class="hero flex-between">
      <img src="../assets/enterprise/boy.png" alt="" />
      <div class="content text-center">
        <h1 class="lead">
          Modern solution built for your <br />
          enterprise growth
        </h1>
        <p class="subtext">
          Centralize your team in a secure, flexible and managed platform.
        </p>
        <button class="rounded bg-primary">
          Request a demo <i class="fas fa-angle-right"></i>
        </button>
      </div>
      <img src="../assets/enterprise/girl.png" alt="" />
    </div>

    <div>
      <p class="text-center lead">
        Over 500+ companies bond teams together with Oneburner
      </p>
      <br />
      <div class="flex-center">
        <img src="../assets/supported_brands.png" alt="" />
      </div>
    </div>

    <div class="colored bg-primary-light text-white">
      <p class="lead text-center">How Oneburner help enterprises grow</p>
      <div class="grid-wrapper">
        <div>
          <p>
            Oneburner software solution helps your business to create an
            enabling environment <br />
            for easy communication and feedbacks in real time. Oneburner brings
            all your users <br />
            and teams in a single place with 99.99% uptime SLA and Data security
          </p>
        </div>

        <div class="">
          <div class="grid-inner">
            <div>
              <img src="../assets/enterprise/check.png" alt="" />
            </div>
            <p>Data protection and Control</p>
          </div>
          <div class="grid-inner">
            <div>
              <img src="../assets/enterprise/check.png" alt="" />
            </div>
            <p>Reporting and Analytics</p>
          </div>
          <div class="grid-inner">
            <div>
              <img src="../assets/enterprise/check.png" alt="" />
            </div>
            <p>
              Use single sign-on and multi-factor authentication to secure
              accounts
            </p>
          </div>
          <div class="grid-inner">
            <div>
              <img src="../assets/enterprise/check.png" alt="" />
            </div>
            <p>Enterprise integration with other tools</p>
          </div>
        </div>
      </div>
    </div>

    <div class="awards bg-white flex-center">
      <div class="flex-center">
        <img src="../assets/enterprise/award.png" alt="" />
        <div>
          <p class="lead">Best Collaboration Software</p>
          <p>Africa tech coalition award 2020</p>
        </div>
      </div>
    </div>

    <div>
      <p class="lead text-center">
        Integrate with your favorite tools <br />
        easily in one click
      </p>
      <br />
      <div class="flex-center">
        <img src="../assets/brands.png" alt="" />
      </div>
    </div>

    <div class="region bg-light">
      <p class="lead text-center">Our Regional Presence</p>
      <p class="subtext text-center">
        Lorem ipsum is simply dummy text of the printing and typesetting
        industry. Lorem ipsum has <br />
        been the industrys standard dummy text ever since the 1500s, when an
        unknown printer
      </p>

      <div class="flex-center map-wrapper">
        <img src="../assets/enterprise/map.png" alt="" />
      </div>
    </div>

    <div class="testimonial">
      <p class="lead text-center">
        Best. Product. Ever! We like Oneburner more and more each day because it
        makes our work a lot <br />
        easier. It's just amazing. Very easy to use, impressed us on multiple
        levels. Thank you so much for <br />
        your help and is worth so much more than we paid. We are treated like
        royalty.
      </p>

      <div class="line"></div>

      <div class="flex-center">
        <div class="flex-center author bg-white">
          <img src="../assets/enterprise/ceo.png" alt="" />
          <div class="bg-white">
            <p class="name">Kemi Hassan</p>
            <p class="title">CEO, Saharaa Inc.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="section padding-100 bg-light text-center">
      <h2 class="lead">
        Want to learn more on how we can <br />
        impact your enterprise?
      </h2>

      <button class="bg-primary rounded">
        Contact Sales <i class="fas fa-angle-right"></i>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  .lead {
    font-family: "Rubik", sans-serif;
    font-size: 1.9em;
  }
  .hero {
    padding: 150px 100px;

    img {
      width: 150px;

      &:first-child {
        transform: translateY(150px);
      }

      &:last-child {
        transform: translateY(-130px);
      }
    }

    .content {
      display: inline-block;
      width: calc(100% - 240px);
      padding: 40px;

      h1 {
        font-size: 50px;
        font-weight: 900;
      }

      .subtext {
        margin: 30px 0;
      }

      button {
        font-size: 1em;
        border-radius: 30px;
      }
    }
  }

  .colored {
    margin: 50px 0;
    margin-bottom: 0;
    padding: 100px;
    min-height: 300px;

    .lead {
      font-size: 1.9em;
    }

    .grid-wrapper {
      margin: 100px 0;
      display: grid;
      grid-template-columns: auto 550px;

      p {
        max-width: 600px;
        font-weight: 300;
        font-size: 14px;
        line-height: 1.8em;
        letter-spacing: 1px;
      }

      .grid-inner {
        display: inline-grid;
        width: 100%;
        grid-template-columns: 40px auto;
        align-items: center;
        gap: 1em;
      }
    }
  }

  .awards {
    width: 900px;
    margin: 1em auto;
    min-height: 250px;
    transform: translateY(-150px);
    border-radius: 15px;
    box-shadow: 0 5px 30px #8080804f;

    div:last-child {
      padding-left: 30px;

      .lead {
        margin-bottom: 0.3em;
      }
    }
  }

  .region {
    margin-top: 100px;
    padding: 100px;

    .subtext {
      opacity: 0.75;
      font-size: 14px;
      margin-top: 1em;
    }

    .map-wrapper {
      margin: 50px 0;
    }
  }

  .testimonial {
    padding: 100px;
    padding-bottom: 20px;

    .lead {
      font-weight: 300;
      font-size: 1.5em;
      opacity: 0.75;
      line-height: 1.8em;
    }

    .line {
      margin-top: 130px;
      height: 2px;
      background: rgb(211, 211, 211);
    }

    .author {
      transform: translateY(-80px);
      padding: 30px;

      div {
        padding-left: 1em;

        .name {
          font-weight: 500;
          color: black;
        }

        .title {
          opacity: 0.7;
        }
      }
    }
  }

  .section {
    .lead {
      line-height: 1.3em;
      font-size: 2em;
    }
    button {
      margin-top: 30px;
      font-size: 1em;
      border-radius: 30px;
      width: 250px;
    }
  }
}
</style>