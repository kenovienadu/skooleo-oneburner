<template>
  <footer>
    <div class="flex-between">
      <img class="logo" src="../assets/logo.png" alt="" />
      <div class="language flex-between">
        <div>
          <i class="fas fa-globe"></i>
          <span>English</span>
        </div>
        <i class="fas fa-angle-down"></i>
      </div>
    </div>

    <br /><br />

    <div class="flex-between align-top">
      <div class="left">
        <p class="text-grey">No 1 CRM solution in Africa</p>
        <p class="text-light text-12">Terms of Use | Privacy Policy</p>
        <br />
        <br />
        <p class="text-light text-12">Get in Touch</p>
        <p class="text-grey">+234-80-000-0000</p>
        <br />
        <img src="../assets/footer/social-links.png" alt="" />
      </div>

      <div class="right text-12">
        <div>
          <p class="title">Product</p>
          <p class="link">Features</p>
          <p class="link">Enterprise</p>
          <p class="link">Security</p>
          <p class="link">Trust</p>
          <p class="link">Customer Sories</p>
          <p class="link">Pricing</p>
          <p class="link">Integrations</p>
        </div>
        <div>
          <p class="title">Company</p>
          <p class="link">About Us</p>
          <p class="link">Contact Us</p>
          <p class="link">Careers</p>
          <p class="link">In the News</p>
        </div>
        <div>
          <p class="title">OneBurner for Teams</p>
          <p class="link">Engineering</p>
          <p class="link">Financial Services</p>
          <p class="link">CRM and Sales</p>
          <p class="link">IT</p>
          <p class="link">Marketing</p>
          <p class="link">Customer Support</p>
          <p class="link">Human Resources</p>
          <p class="link">Project Management</p>
          <p class="link">Remote Work</p>
        </div>
        <div>
          <p class="title">Resources</p>
          <p class="link">Community</p>
          <p class="link">Guides</p>
          <p class="link">Templates</p>
          <p class="link">Video Tutorials</p>
          <p class="link">Professional Services</p>
          <p class="link">Knowledge Base</p>
          <p class="link">Blog</p>
          <p class="link">Webinars</p>
        </div>
      </div>
    </div>

    <div class="line"></div>

    <p class="copyright text-light">
      &copy; 2020 Oneburner.com. All Rights Reserved
    </p>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  padding: 50px 100px;

  .line {
    height: 2px;
    background: lightgrey;
    opacity: 0.5;
    margin: 30px 0;
  }

  img {
    width: auto;
    transform: translate(-10px);

    &.logo {
      transform: translate(-10px, 10px);
    }
  }

  .align-top {
    align-items: flex-start;
  }

  .language {
    display: inline-flex;
    width: 150px;
    padding: 0.5em 1em;
    border: 1.5px solid var(--primary-color);
    color: var(--primary-color);
    border-radius: 5px;

    span {
      padding-left: 0.5em;
      font-size: 12px;
    }
  }

  .left {
    p {
      line-height: 2em;
    }
  }

  .right {
    display: inline-flex;
    div {
      display: inline-block;
      width: 170px;

      &:last-child {
        transform: translate(50px);
      }

      .title {
        text-transform: uppercase;
        font-weight: 500;
        opacity: 0.8;
        margin-bottom: 1.5em;
      }

      .link {
        opacity: 0.5;
        margin-bottom: 0.5em;
      }
    }
  }
}
</style>