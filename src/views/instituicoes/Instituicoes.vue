<template>
  <div class="container mt-3">
    <b-row>
      <div
        v-for="(institution, i) in institutions" :key="i"
        class="col-md-4"
      >
        <b-card
          :img-src="logo"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 15rem;"
        >
        <div class="card-body">
           <h5 class="card-title">{{institution.nome}}</h5>
           <h6 class="card-subtitle mb-2 text-muted">Endereço: {{institution.cidade}} - {{institution.estado}}, {{institution.logradouro}}, CEP: {{institution.cep}} </h6>
           <p class="card-text">{{institution.descricao}}</p>
       </div>
        
        
        </b-card>
      </div>
    </b-row>
  </div>
</template>

<script>
/* eslint-disable */ 
export default {
  name: "app",
  components: {
  },
  data() {
    return {
      logo:require('../../assets/logo.png'),
      institutions: []
    }
  },
  methods: {
    async obterInstituicoes(){
     
     let response = await this.$services.user.getAll();
     if(response){
       this.institutions = response.docs;
     }
      console.log(this.institutions);
    } 
  },
  created() {
    this.obterInstituicoes();
  },
  mounted() {
    this.obterInstituicoes();
  }}
</script>

<style scopded>
#page-custom h2 {
  font-weight: 300;
}
#page-custom .container-lines,
#page-custom .img-line {
  position: relative;
  height: 27.5rem;
  margin-bottom: 30px;
}
#page-custom .container-lines:hover {
  top: -1px;
  transition: all 3s ease;
}
#page-custom .img-line {
  background-position-x: center;
  background-repeat: no-repeat;
  
}
#page-custom .title-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  background-color: rgba(0, 0, 0, 0.4);
  color: #fff;
  font-size: 1.375rem;
  text-transform: uppercase;
  font-weight: 600;
}
#page-custom .title-lines:hover {
  color: #fff;
}
#page-custom .lines {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
#page-custom h1 {
  font-size: 22px;
  text-transform: uppercase;
}
#page-custom h2 {
  font-size: 18px;
  text-transform: uppercase;
}
#page-custom p {
  padding-bottom: 30px;
}
#page-custom .title-line {
  margin: 0;
}
#page-custom .title-line:after {
  background-color: #f93;
  content: "";
  display: block;
  height: 0.125rem;
  margin: 10px 0 30px;
  width: 3.75rem;
}
#page-custom .title-line-center {
  margin: 0;
  text-align: center;
  margin: 60px 0 50px;
}
#page-custom .title-line-center:after {
  background-color: #f93;
  content: "";
  display: block;
  height: 0.125rem;
  margin: 10px auto 30px;
  width: 3.75rem;
}
/* Lists */
#page-custom ul {
  max-width: none;
  padding: 0 0 30px 0;
}
/* Lists */
/* Contents */
#page-custom .max-center {
  /*max-width: 840px;*/
  max-width: 48.75rem;
}
.btn-xyjz {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #f93;
  border: none;
  color: #fff !important;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-family: "Lato", sans-serif;
  font-size: 0.875rem;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  line-height: 1.25rem;
  max-width: 15rem;
  padding: 0.625rem 1.25rem;
  text-transform: uppercase;
  -webkit-transition: all 305ms ease;
  transition: all 305ms ease;
  white-space: nowrap;
}
.btn-xyjz:not(:disabled):hover {
  background-color: #ff7c34;
  color: #fff;
  text-decoration: none;
}
.center-xyjz {
  /* margin: 1.25rem auto 0; */
  margin: 3.25rem auto;
}
</style>
}