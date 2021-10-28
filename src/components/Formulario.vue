<template>

  <section class="src-components-formulario">
    <div class="jumbotron">
      <vue-form :state="formState" @submit.prevent="enviar()">
      
        <validate tag="div">
          <label for="nombre">Nombre</label>
          <input type="text"
           id="nombre" 
           name="nombre" 
           class="form-control"
           v-model.trim="formData.nombre"
           autocomplete="off"
           required
           :minlength="nombreMinLength"
           :maxlength="nombreMaxLength"
           sin-espacios
          >
          <field-messages name="nombre" show="$dirty">
          
            <div slot="required" class="alert alert-danger mt-1">
              Campo requerido.
            </div>
  
            <div slot="no-espacios" class="alert alert-danger mt-1">
              El campo no puede contener espacios.
            </div>
  
            <div slot="minlength" class="alert alert-danger mt-1">
              Este campo requiere como mínimo {{ nombreMinLength }} caracteres.
            </div>
  
            <div v-if="formData.nombre.length == nombreMaxLength" class="alert alert-danger mt-1">
              Este campo acepta como máximo {{ nombreMaxLength }} caracteres.
            </div>
  
          </field-messages>
        </validate>
        <br>
        <validate tag="div">
          <label for="descripcion">Descripcion</label>
          <input type="text"
           id="descripcion" 
           name="descripcion" 
           class="form-control" 
           v-model="formData.descripcion"
           autocomplete="off"
           required
          >
          <field-messages name="descripcion" show="$dirty">
          
            <div slot="required" class="alert alert-danger mt-1">
              Campo requerido.
            </div>

          </field-messages>
        </validate>
        <br>
        <validate tag="div">
          <label for="importe">Importe</label>
          <input type="number"
           id="importe" 
           name="importe" 
           class="form-control" 
           v-model.number="formData.importe"
           autocomplete="off"
           required
           min="0"
          >
          <field-messages name="importe" show="$dirty">
          
            <div slot="required" class="alert alert-danger mt-1">
              Campo requerido
            </div>

            <div slot="min" class="alert alert-danger mt-1">
              Por favor, ingrese un numero positivo.
            </div>

          </field-messages>
        </validate>
        <br>
        <button class="btn btn-success my-3" :disabled="formState.$invalid">Enviar</button>
  
      </vue-form>

      <label for="input">Presupuesto</label>
      <input type="number" v-model.number="formData.input" class="form-control" id="input" name="input">

      <div v-if="presupuestos.length > 0" class="table-responsive">
        <table class="table">
          <tr>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Importe</th>
            <th>Fecha</th>
          </tr>
          <tr v-for="(pre, index) in presupuestos" :key="index">
            <td>{{ pre.nombre }}</td>
            <td>{{ pre.descripcion }}</td>
            <td>${{ pre.importe }}</td>
            <td>{{ pre.fecha }}</td>
          </tr>
          <tr>
            <td></td>
            <td :style="{ 'background-color':this.color()}">Total de importes: </td>
            <td :style="{ 'background-color':this.color()}">${{ this.sumar() }}</td>
            <td></td>
          </tr>
        </table>
      </div>
      <div v-else>
        <div class="alert alert-danger mt-1">No hay presupuestos cargados.</div>
      </div>
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-formulario',
    props: [],
    mounted () {
      this.sumar()
      this.color()
    },
    data () {
      return {
        formData: this.getInitialData(),
        formState: {},
        nombreMinLength: 3,
        nombreMaxLength: 15,
        presupuestos: [],
      }
    },
    methods: {
      enviar(){
        let fecha = new Date().toLocaleString()
        this.formData.fecha = fecha
        let presupuesto = {...this.formData}
        
        this.presupuestos.push(presupuesto)
        console.log(presupuesto.importe)
        this.formData = this.getInitialData()
        this.formState._reset()
      },
      getInitialData(){
        return {
          nombre: '',
          descripcion: '',
          importe: 0,
          fecha: null,
          input: 0
        }
      },
      sumar(){
        let total = 0
        for(let i = 0; i < this.presupuestos.length; i++){
          total += this.presupuestos[i].importe
        }
        return total
      },
      color(){
        let color= ''
        if(this.sumar() <= 1000){
          color= 'green'
        } else if(this.sumar() >= 1000 && this.sumar() <= 5000) {
          color= 'magenta'
        } else {
          color= 'orange'
        }
        if(this.formData.input != 0 && this.formData.input > this.sumar()){
          color = 'red'
        }
        return color
      }
    },
    computed: {

    }
}

</script>

<style scoped lang="css">
  .jumbotron{
    background-color: brown;
  }
</style>
