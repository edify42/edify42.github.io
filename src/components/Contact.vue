// Contact.vue

<template>
    <div class="main">
        <div class="title">
            <h1>Contact Us</h1>
        </div>
        <div class="container">
            <form method="post" action="action_url">

                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name..">

                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name..">

                <label for="email">Email</label>
                <input type="text" id="email" name="email" placeholder="">

                <label for="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Please write your request here.." style="height:200px"></textarea>
                <div class="question">Are you a robot?</div>
                 <div class="g-recaptcha" data-sitekey="RECAPTCHA_KEY" data-callback="recaptcha_callback">
                    <vue-recaptcha :loadRecaptchaScript="true"
                      sitekey="6Lc_r64UAAAAAAdkzoJb3giBe9RutmzX0dyWRZe3"
                      @verify="recaptcha_callback"
                      @expired="recaptcha_timeout">
                    </vue-recaptcha>
                </div>
                <div class="nothing">
                <input :disabled="btnActive ? null : true" type="submit" value="Submit">
                </div>
            </form>
        </div>
        <button @click='debugClick()'>Open/Close {{ btnActive }}</button>
    </div>
    
</template>
<script>
import VueRecaptcha from 'vue-recaptcha';

export default {
  components: { VueRecaptcha },
  data: () => {
    return {
        btnActive: false,
        captchaVerify: ""
    }
  },

  methods: {
    debugClick: function() {
        if (this.btnActive) {
            this.btnActive = false
        } else {
            this.btnActive = true
        }
    },
    recaptcha_callback: function(event) {
      // eslint-disable-next-line
      console.log("we got the captcha back")
      this.captchaVerify = event
      if (event.length > 1) {
        this.btnActive = true
      }
      this.btnActive = true
    },
    recaptcha_timeout: function() {
      // eslint-disable-next-line
      console.log("timeout occurred. Please refresh the page ")
      this.btnActive = false
    }
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.question {
  align-content: center;
  text-align: center;
  position: relative;
  padding: 5px;
}

/* Style inputs with type="text", select elements and textareas */
input[type=text], select, textarea {
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */  
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded borders */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical /* Allow the user to vertically resize the textarea (not horizontally) */
}

/* Style the submit button with a specific background color etc */


input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: 2px;
  border-radius: 4px;
  cursor: pointer;
}

/* When moving the mouse over the submit button, add a darker green color */
input[type=submit]:hover {
  background-color: #45a049;
}

input[disabled=disabled], button:disabled {
  background-color: rgb(159, 163, 160);
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
}

/* Add a background color and some padding around the form */
.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 10px;
}

.g-recaptcha {
  align-content: center;
  text-align: center;
  padding: 3px;
  display: inline-block;
  display: -moz-inline-stack;
}

.main {
  max-width: 38rem;
  padding: 1rem;
  margin: auto;
  min-width: 400px; 
}
</style>