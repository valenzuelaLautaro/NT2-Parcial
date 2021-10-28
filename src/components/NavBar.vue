<template lang="html">

  <section class="src-components-nav-bar">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

        <a class="navbar-brand" href="#">Inicio</a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">

            <router-link to="/formulario">
              <li class="nav-item">
                <a class="nav-link" href="#">Formulario</a>
              </li>
            </router-link>

            <router-link to="/choise">
              <li class="nav-item">
                <a class="nav-link" href="#">Choise</a>
              </li>
            </router-link>

          </ul>
        </div>

      </nav>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-nav-bar',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">

</style>
