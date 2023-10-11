<script>
import staffList from '../../data/stafflist';

  export default {
    props: [ "name" ],
    data() {
      return {
        staff: {}
      }
    },
    beforeMount: function () {
      const name = this.$route.params.name;
      this.staff = staffList.find(staff => staff.name === name);
    },
    beforeUpdate: function() {
      const name = this.$route.params.name;
      this.staff = staffList.find(staff => staff.name === name);
    }
  }
</script>

<template>
  <div>
    <h2>Detaljer</h2>
    <p>{{ staff.name }}</p>
    <p>{{ staff.phone }}</p>
    <p>{{ staff.email }}</p>
  </div>
</template>