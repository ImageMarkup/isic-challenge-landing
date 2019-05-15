<template>
  <div class="track-email">
    <div v-if="submitted" class="success">
      <b>Training Data</b><br>
      <div>
        <a href="https://s3.amazonaws.com/isic-challenge-2019/ISIC_2019_Training_Input.zip">ISIC_2019_Training_Input.zip</a><br>
        <a href="https://s3.amazonaws.com/isic-challenge-2019/ISIC_2019_Training_Metadata.csv">ISIC_2019_Training_Metadata.csv</a><br>
        <a href="https://s3.amazonaws.com/isic-challenge-2019/ISIC_2019_Training_GroundTruth.csv">ISIC_2019_Training_GroundTruth.csv</a><br>
      </div>
    </div>
    <div v-else>
      <div v-if="errorMessage" class="failure"><i class="material-icons">error</i> {{errorMessage}}</div>
      <div class="track-email-content">Provide your email address to download the Training Data</div>
      <form @submit.prevent="onSubmit">
        <input v-model="email" placeholder="Enter your email address" type="email">
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
        // Maintenance mode for stade
        this.success();
        return;
        
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
          this.success();
        } else {
          this.errorMessage = 'Something went wrong, try again later.';
        }
      },
      success () {
        this.submitted = true;

        try {
          window.localStorage.setItem('emailSubmitted', 'true');
        } catch (e) {
          // No local storage, so email submission will not persist
        }
      },
    },
    mounted () {
      if (window.localStorage.getItem('emailSubmitted') === 'true') {
        this.submitted = true;
      }
    },
  };
</script>

<style lang="stylus" scoped>
.track-email
  background: #e1e1e1
  //color: #ffffff
  //margin-top: -45px
  padding: 20px
  & > div
    align-items: center
    //display: flex
    //flex-wrap: wrap
    justify-content: center
    .failure
      align-items: center
      background: #FFCDD2
      box-shadow: 0 2px 5px rgba(0, 0, 0, .2)
      color: #F44336
      display: flex
      margin-bottom: 15px
      padding: 10px
      justify-content: center
      width: 100%
      .material-icons
        margin-right: 5px
    .track-email-content
      font-size: 18px
      font-weight: bold
      padding-right: 20px
      padding-bottom: 20px
    input[type=email]
      border: 0
      border-radius: 3px
      font-size: 16px
      outline: 0
      padding: 8px 10px
      transition: .5s
      min-width: 320px
      &:focus
        background: lighten(#3eaf7c, 85%)
        &::placeholder
          color: darken(#3eaf7c, 30%)
    input[type=submit]
      background: #2c3e50
      border: 0
      border-radius: 3px
      color: #ffffff
      cursor pointer
      font-size: 16px
      font-weight: bold
      outline: 0
      padding: 8px 10px
</style>
