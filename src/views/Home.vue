<template>
  <div>
    <navbar />
    <Main-homepage />
    <footer-homepage />
  </div>
</template>

<script>
import Navbar from "@/layout/Navbar";
import MainHomepage from "./home/Main";
import FooterHomepage from "@/layout/Footer";

export default {
  components: {
    Navbar,
    MainHomepage,
    FooterHomepage
  }
};
</script>