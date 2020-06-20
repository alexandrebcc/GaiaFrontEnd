<template>
  <div>
     <img id="imgFundo" class="img-fluid" src="@/assets/img/agora.png" alt="background-img">
    <h1> Seja bem vindo ao protótipo do Gaia </h1>
  </div>
</template>

<script>
export default {
  async created() {
    const resp = await this.$services.user.getAll();
    console.log('Usuários cadastrados', resp.docs);
  }
}
</script>

<style>
  #imgFundo{
    width: 100vw;
    height: 85vh;
  }

</style>