<template>
  <div class="contact bg-light">
    <div class="form-wrapper">
      <ContactForm />
    </div>

    <div class="details">
      <p class="lead">Request a call from an expert</p>
      <p class="subtext text-light">
        Having thoughts on which products works best for you? Fill the form and
        our expert will reach out to you.
      </p>

      <p class="lead second">Our offices around Africa</p>

      <div class="location-grid-wrapper">
        <div class="text-12">
          <p class="country">Nigeria</p>
          <p class="subtext text-light">
            33a, Adeola Odeku, Victoria Island, Lagos
          </p>
          <p class="subtext text-light">+234-(0)-80000000000</p>
        </div>

        <div class="text-12">
          <p class="country">Ghana</p>
          <p class="subtext text-light">44, El-Senoussi Street, Accra</p>
          <p class="subtext text-light">+233-(0)-277619819</p>
        </div>

        <div class="text-12">
          <p class="country">South Africa</p>
          <p class="subtext text-light">
            474, Cheriton drive, port shepstone, Kwazulu-natal
          </p>
          <p class="subtext text-light">+27-(0)-857926978</p>
        </div>

        <div class="text-12">
          <p class="country">Egypt</p>
          <p class="subtext text-light">
            77, gameat el-dewal <br />
            el-arabia St. giza.
          </p>
          <p class="subtext text-light">+20-(0)-35924295</p>
        </div>

        <div class="text-12">
          <p class="country">Kenya</p>
          <p class="subtext text-light">
            41, Enterprise Rd., Industrial <br />
            Area, Nairobi
          </p>
          <p class="subtext text-light">+254-(0)-20536766</p>
        </div>

        <div class="text-12">
          <p class="country">Tunisia</p>
          <p class="subtext text-light">
            13, Rue de Makthar, Dhraa <br />
            Governorate Kasserine
          </p>
          <p class="subtext text-light">+216-(0)-77367410</p>
        </div>

        <div class="text-12">
          <p class="country">mali</p>
          <p class="subtext text-light">
            22, badalabougou est., <br />
            bamako.
          </p>
          <p class="subtext text-light">+223-(0)-78175387</p>
        </div>

        <div class="text-12">
          <p class="country">tanzania</p>
          <p class="subtext text-light">
            mbezi beach, P.O.B: 70339, <br />
            dar salaam
          </p>
          <p class="subtext text-light">+255-(0)-222120119</p>
        </div>
        <div class="text-12">
          <p class="country">togo</p>
          <p class="subtext text-light">
            10, e rue des echis, <br />
            lame
          </p>
          <p class="subtext text-light">+228-(0)-22229600</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContactForm from "../components/ContactForm";

export default {
  components: {
    ContactForm,
  },
};
</script>

<style lang="scss" scoped>
.contact {
  padding: 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  align-items: center;

  .lead {
    font-family: "Rubik", sans-serif;
    font-size: 1.9em;
    margin-bottom: 1em;

    &.second {
      margin-top: 50px;
    }
  }

  .details {
    padding-left: 50px;

    .location-grid-wrapper {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1em;

      p {
        line-height: 1.7em;

        &.subtext {
          text-transform: capitalize;
        }
      }

      .country {
        text-transform: uppercase;
        font-weight: 500;
        margin: 1.2em 0;
        opacity: 0.7;
      }
    }
  }
}
</style>