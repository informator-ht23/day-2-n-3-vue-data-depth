<script>

export default {
  data() {
    return {
      ticket: {}
    }
  },
  mounted: function() {
    let travelInfo = sessionStorage.getItem("ticket-info");
    this.ticket = JSON.parse(travelInfo);
  }
}

</script>

<template>
  <h2>Du har köpt en biljett!!! wooh</h2>

  <p>Destination: {{ ticket.destination }}</p>
  <p>Origin: {{ ticket.origin }}</p>
  <p>Travel class: {{ ticket.travelClass }}</p>
  <p>First name: {{ ticket.firstName }}</p>
  <p>Surname: {{ ticket.surname }}</p>
</template>