<template>
  <div class="container mt-3">
    <b-row>
      <div
        v-for="(doar, i) in doacoes"
        :key="i"
        class="col-md-4"
      >
        <b-link href="#" @click="$bvModal.show('modal-'+i)">
          <img :src="doar.path" alt="doar">
        </b-link>

        <b-modal :id="'modal-'+i" hide-footer>
          <template v-slot:modal-title>
            Doação
          </template>
          <div class="d-block text-center">
            <h3>Você quer R$ {{doar.valor}},00?</h3>
          </div>
          <b-button class="mt-3" variant="outline-success" block @click="confirmModal(i, doar.valor)">Sim</b-button>
          <b-button class="mt-3" variant="outline-secondary" block @click="negativeModal(i)">Não</b-button>
        </b-modal>
      </div>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      doacoes: [
        {
          valor: 20,
          path: require('@/assets/img/doar/doar20.svg')
        },
        {
          valor: 50,
          path: require('@/assets/img/doar/doar50.svg')
        },
        {
          valor: 100,
          path: require('@/assets/img/doar/doar100.svg')
        },
        {
          valor: 200,
          path: require('@/assets/img/doar/doar200.svg')
        }
      ]
    };
  },

  methods: {
    confirmModal(index, valor) {
      console.log('valor', valor);
      this.$bvModal.hide(`modal-${index}`);
    },

    negativeModal(index) {
      console.log('negative', index);
      this.$bvModal.hide(`modal-${index}`);
    }
  }
};
</script>

<style>
  .doacoes {
    display: flex;
    flex-direction: row;
  }
</style>
