<template>
  <section class="hero bg-dark position-relative">
    <div class="hero-content section-padding text-white">
      <h1 class="text-xl" data-aos="zoom-in">Designed for people,
        <br class="desktop-br">built for business
      </h1>
      <h2 class="text-md font-weight-normal mb-3">We create software, websites, and apps
        <br class="desktop-br">that power successful businesses
      </h2>
      <div>
        <a class="btn btn-primary btn-rounded" href="/case-studies">View case studies</a>
      </div>
      <div class="hero-image" data-aos="zoom-in">
        <img
          src="https://res.cloudinary.com/webscope/image/upload/q_auto/f_auto/v1535343199/webscope.co.nz/homepage-hero.png"
        >
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  min-height: 800px;
  display: flex;
}
.hero-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.hero-image {
  position: absolute;
  width: 70%;
  right: 0;
  bottom: 0;
  text-align: right;
}
</style>
