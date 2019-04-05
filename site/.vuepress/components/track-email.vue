<template>
  <div>
    <div v-if="submitted">
      You will be notified about updates
    </div>
    <div v-else>
      <div v-if="errorMessage">{{errorMessage}}</div>
      Notify me about updates to the challenge!
      <form @submit.prevent="onSubmit">
        <input v-model="email" placeholder="jane.doe@gmail.com" type="email">
        <input type="submit" value="Submit">
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        email: '',
        submitted: false,
        errorMessage: '',
      }
    },
    methods: {
      async onSubmit() {
        let fetchResult;

        try {
          fetchResult = await fetch('https://stade.challenge.isic-archive.com/api/tracker/emails', {
            method: 'POST',
            body: JSON.stringify({
              'email': this.email
            }),
            headers: {
              'Content-Type': 'application/json'
            }
          });
        } catch (error) {
          this.errorMessage = 'Something went wrong, try again later.';
          return;
        }

        // Treat the 409 "email already exists" error message as a success
        if (fetchResult.ok || fetchResult.status === 409) {
          this.submitted = true;
        } else {
          this.errorMessage = 'Something went wrong, try again later.';
        }
      },
    }
  };
</script>
