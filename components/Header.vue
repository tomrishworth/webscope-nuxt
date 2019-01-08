<template>
  <b-navbar toggleable="md" fixed="top" type="dark" variant="dark">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="/">
      <img width="180" src="../assets/images/logo.svg">
    </b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav class="ml-auto text-uppercase font-weight-bold">
        <b-nav-item to="/services">Services</b-nav-item>
        <b-nav-item to="/about-us">About</b-nav-item>
        <b-nav-item to="/case-studies">Case Studies</b-nav-item>
        <b-nav-item to="/blog">Blog</b-nav-item>
        <b-nav-item class="contact-link" to="/contact">Contact</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<style lang="scss" scoped>
.navbar {
  padding-left: 100px;
  padding-right: 100px;
  max-width: 1540px;
  margin-left: auto;
  margin-right: auto;
}

.nav-item {
  margin-left: 10px;
}

.nav-link {
  padding: 8px 15px 7px !important;
  line-height: 1;
}

.contact-link {
  a.nav-link {
    background-color: #fff;
    border-radius: 25px;
    color: $pink;
  }
}
</style>
