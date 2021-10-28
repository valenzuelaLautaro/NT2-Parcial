<template>

  <section class="src-components-choise">
    <div class="table-responsive jumbotron">
      <table class="table">
        <tr>
          <th>Numero de pregunta</th>
          <th>Respuesta/s</th>
        </tr>
        <tr v-for="(preg, index) in preguntas" :key="index">
          <td>{{ preg.pregunta }}</td>
          <td>{{ preg.respuestas }}</td>
        </tr>
      </table>
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-choise',
    props: [],
    mounted () {

    },
    data () {
      return {
        preguntas: [
          {pregunta: 1, respuestas:['b']},
          {pregunta: 2, respuestas:['c']},
          {pregunta: 3, respuestas:['e']}
        ]
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
.jumbotron{
  background-color: rgb(104, 114, 202);
}
</style>
