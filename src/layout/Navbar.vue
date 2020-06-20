
<template>
  <div>
    <!-- outline-primary, success, danger, info -->
  <b-navbar toggleable="lg" type="light" variant="primary">
    <b-link :to="{name:'Home'}">
      <img class="logo" src="@/assets/img/gaiaLogo.png" alt="some text" >
    </b-link>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
      
       <b-nav-item :to="{name:'Home'}" >Inicio</b-nav-item>
       <b-nav-item :to="{name:'Instituicoes'}" >Instituições</b-nav-item>
       <b-nav-item :to="{name:'Cadastrar'}">Cadastrar</b-nav-item>
       <b-nav-item @click="doar">Fazer Doação</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown right v-if="this.logado">
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em >Usuario</em>
          </template>
          <b-dropdown-item @click="perfil">Perfil</b-dropdown-item>
          <b-dropdown-item @click="logout">Sair</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>

</template>

<script>
export default {
  data() {
    return {
      logado: true, 
    }
  },

  methods: {
    doar() {
      const isAuth = localStorage.getItem('user_id');
      if(isAuth) this.$router.push('/doacao');
      else this.$router.push('/login');

    },

    perfil() {
      const user_id = localStorage.getItem('user_id');
      if(user_id)
        this.$router.push(`/cadastrar/${user_id}`);
      else
        this.$router.push('/login');
    },

    logout() {
      localStorage.removeItem('user_id');
      // this.$router.push('/login');
    }
  }
  
}
</script>

<style>
  .logo{
    max-width: 60px;
    display:flex-start;
    padding:0px;
    margin:0px 20px 0px 0px;
  }
   ul.tb-social-links a {
  text-decoration:none;
}
article {
  margin-bottom: 200px;
}
.tb-social-links {
    list-style: none;
    text-align: center;
    margin-bottom: 0px;
}
ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}
.tb-social-links a {
    margin-right: 15px;
}
div {
    display: block;
}
.tb-container {
    display: center;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 20px;
} 
</style>