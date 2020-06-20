<template>
  <div class="container">
    <b-card id="cardLogin" title="Login" class="text-center mt-5">
      <b-card-body>
        <b-form-group id="input-user" label="Usuário" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.user"
            type="text"
            required
            placeholder="Digite seu usuário"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-senha" label="Senha" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.senha"
            type="password"
            required
            placeholder="Digite sua senha"
          ></b-form-input>
        </b-form-group>
      </b-card-body>
      <div class="d-flex justify-content-end">
        <b-button class="mx-1" type="submit" variant="primary" @click="login"
          >Login</b-button
        >
        <b-button
          type="reset"
          variant="secondary"
          @click="() => $router.push('/cadastrar')"
          >Cadastrar</b-button
        >
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      form: {
        user: "",
        senha: "",
      },
    };
  },

  methods: {
    async login() {
      try {
        const resp = await this.$services.user.login(this.form);
        console.log('resp', resp);
        if (!resp) {
          this.$toast.error('Login incorreto, tente novamente!', {
            position: 'top'
          })
          return;
        }
        this.$router.push("/");
        localStorage.setItem('user_id', resp._id);
      } catch (error) {
        console.log("DEU RUIM!", error);
      }
    },
  },
};
</script>

<style>
#cardLogin {
  max-width: 30rem;
  display: flex;
  margin: auto;
}
</style>
