<template>
  <div class="color3">
    <v-toolbar flat dense class="color4">
      <v-toolbar-title flat dark class="color2--text">{{ title }}</v-toolbar-title>
      <slot name="action" />
    </v-toolbar>

    <div class="color5--text pl-4 pr-4 pt-2 pb-2">
      <slot>
        <p>This is a test.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur non, itaque odit corrupti maxime earum sit obcaecati eligendi quibusdam beatae et, dolorum voluptate nulla dignissimos alias doloremque neque nemo quo!</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur non, itaque odit corrupti maxime earum sit obcaecati eligendi quibusdam beatae et, dolorum voluptate nulla dignissimos alias doloremque neque nemo quo!</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur non, itaque odit corrupti maxime earum sit obcaecati eligendi quibusdam beatae et, dolorum voluptate nulla dignissimos alias doloremque neque nemo quo!</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur non, itaque odit corrupti maxime earum sit obcaecati eligendi quibusdam beatae et, dolorum voluptate nulla dignissimos alias doloremque neque nemo quo!</p>
      <v-btn>
        show button
      </v-btn>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>

<style scoped>

</style>
