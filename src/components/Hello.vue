<template>
  <div class="hello">
    <pre v-text="fdata.fModel"></pre>
    <formation framework="bootstrap" :config="cfg" v-model="fdata.fModel"></formation>
  </div>
</template>

<script>
  import fdata from '../config'
  export default {
    name: 'hello',
    data () {
      return {
        fdata,
        cfg: {
          components: [
            {
              type: 'form-grid',
              config: {
                rows: [
                  {
                    columns: [
                      {
                        label: 'Text2',
                        type: 'text-input',
                        config: {
                          model: 'text2'
                        }
                      },
                      {
                        label: 'Text3',
                        type: 'text-input',
                        config: {
                          model: 'text3'
                        }
                      }
                    ]
                  }
                ]
              }
            },
            {
              type: 'button',
              config: {
                type: 'primary',
                text: 'click me'
              }
            }
          ]
        },
        mdl: {}
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
