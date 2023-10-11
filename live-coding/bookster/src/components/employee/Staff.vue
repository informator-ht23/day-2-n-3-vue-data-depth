<script>
import staffList from './../../data/stafflist';
import StaffInfo from './StaffInfo.vue';

export default {
  components: { StaffInfo },
  data() {
      return {
          staffList,
      };
  },
  methods: {
      pushStaffDetails: function (staff) {
          this.$router.push({name: "employeeInfo", params: {name: staff.name} });
      }
  }
}
</script>

<template>
  <div class="container">
    <div>
      <h2>Anställda</h2>
      <ul class="staff-list">
        <li v-for="staff in staffList" @click="pushStaffDetails(staff)"> 
          {{ staff.name }}
          <!-- <label v-show="staff.name == activeStaff.name">&gt;&gt;</label> -->
        </li>
      </ul>
    </div>

    <RouterView />
  </div>
</template>


<style>
.staff-list {
  list-style: none;
  margin: 0;
}

.staff-list li {
  padding: .5em;
}

.container {
  display: flex;
  gap: 2em;
}

.container > div {
  border: 1px solid white;
  padding: 1em;
}
</style>