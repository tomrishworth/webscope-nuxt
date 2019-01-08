<template>
  <section class="py-5">
    <div class="client-logos text-center">
      <h4 class="text-uppercase font-weight-bold text-muted text-sm">Some of our clients</h4>
      <ul class="list-unstyled d-flex justify-content-center align-items-center">
        <li class="hireplants">
          <a href="/case-studies/hire-plants">
            <img
              src="https://res.cloudinary.com/webscope/image/upload/q_auto/f_auto/v1456179016/hire-plants-logo_a62cxu.png"
              alt="Hireplants logo"
            >
          </a>
        </li>
        <li class="fuso">
          <a target="_blank" href="https://www.fuso.co.nz/">
            <img
              src="https://res.cloudinary.com/webscope/image/upload/q_auto/f_auto/v1537224455/fuso_u6exwo.png"
              alt="Fuso Logo"
            >
          </a>
        </li>
        <li class="lms">
          <a href="/case-studies/link-market-services-innovating-first-and-disrupting-the-market">
            <img
              src="https://res.cloudinary.com/webscope/image/upload/q_auto/f_auto/v1456179213/lms-logo_o0x5wj.png"
              alt="Link Market Services"
            >
          </a>
        </li>
        <li class="caci">
          <a href="/case-studies/promoting-empathy-and-understanding">
            <img
              src="https://res.cloudinary.com/webscope/image/upload/q_auto/f_auto/v1456180588/caci-logo_mjzkrz.png"
              alt="Caci logo"
            >
          </a>
        </li>
        <li class="aka">
          <a
            href="case-studies/auckland-kindergarten-association-reflecting-akas-safe-and-fun-environment-online"
          >
            <img
              src="https://res.cloudinary.com/webscope/image/upload/q_auto/f_auto/v1464901872/aka-logo_1_dhxjqc.png"
              alt="AKA logo"
            >
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.client-logos {
  h4 {
    margin-bottom: 0;
    @include media-breakpoint-down(sm) {
      margin-bottom: 25px;
    }
  }
  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: center;
    @include media-breakpoint-down(sm) {
      flex-wrap: wrap;
    }
  }
  li {
    padding: 0 25px;
    margin-bottom: 20px;
    @include media-breakpoint-down(sm) {
      width: 50% !important;
    }
    @include media-breakpoint-up(sm) {
      margin-bottom: 20px;
    }
    &::before {
      content: "";
    }
  }
  img {
    height: auto;
    max-width: 100%;
    filter: grayscale(1);
    opacity: 0.7;
    transition: all 500ms ease-in-out;
    &:hover {
      opacity: 1;
      filter: grayscale(0);
    }
  }
  .hireplants {
    @include media-breakpoint-up(sm) {
      width: 220px;
    }
  }
  .fuso {
    width: 220px;
    @include media-breakpoint-up(sm) {
      margin-top: 22px;
    }
  }
  .lms {
    @include media-breakpoint-up(sm) {
      width: 190px;
      margin-top: 45px;
    }
  }
  .caci {
    @include media-breakpoint-up(sm) {
      width: 180px;
    }
  }
  .aka {
    @include media-breakpoint-up(sm) {
      width: 200px;
      margin-top: 25px;
    }
  }
}
</style>
