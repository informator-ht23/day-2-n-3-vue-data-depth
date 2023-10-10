<script>
export default {
  data() {
    return {
      travelInfo: {
        origin: '',
        destination: '',
        travelClass: 0,
        firstName: '',
        surname: '',
        acceptTerms: false,
      },
    };
  },
  methods: {
    handleFormSubmit: function() {      
      console.table(this.travelInfo);

      this.$router.push("/details");
    },
    swapDestinations: function() {
      const temp = this.travelInfo.origin;
      
      this.travelInfo.origin = this.travelInfo.destination;
      this.travelInfo.destination = temp;
    }
  }
};
</script>

<template>
  <form class="travel-form">
    <div class="form-row row-justify">
      <div>
        <label>Från</label>
        <input 
          :class="{'warning': travelInfo.origin.length == 0}" 
          v-model="travelInfo.origin" type="text" />
      </div>
      <button @click.prevent="swapDestinations" class="exchange-btn">Byt</button>
      <div>
        <label>Till</label>
        <input 
          :class="{'warning': travelInfo.destination.length == 0}"
          v-model="travelInfo.destination" 
          type="text" />
      </div>
    </div>

    <div class="form-row">
      <input v-model="travelInfo.travelClass" type="radio" value="2" name="travelClass" /> <label>2:a Klass</label>
      <input v-model="travelInfo.travelClass" type="radio" value="1" name="travelClass" /> <label>1:a Klass</label>
    </div>

    <div class="form-row--col">
      <label>Förnamn</label>
      <input v-model="travelInfo.firstName" type="text" />
    </div>

    <div class="form-row--col">
      <label>Efternamn</label>
      <input v-model="travelInfo.surname" type="text" />
    </div>

    <div class="form-row">
      <input v-model="travelInfo.acceptTerms" type="checkbox" /> <label>Godkänner <a href="#">villkoren</a></label>
    </div>

    <button :disabled="!travelInfo.acceptTerms" @click.prevent="handleFormSubmit" class="form-submit-btn">Boka Biljetter</button>
  </form>
</template>

<style>
.travel-form {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5em;
  margin: 0 auto;
}

.form-row,
.form-row--col {
  display: flex;
}

.form-row--col {
  flex-direction: column;
}

.row-justify > * {
  display: flex;
  flex-direction: column;
}

.exchange-btn {
  margin: 0 .3em;
  line-height: 2em;
}

.warning {
  border-color: orange;
}
</style>
