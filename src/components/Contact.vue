// Contact.vue

<template>
    <div class="main">
        <div class="title">
            <h1>Contact Us</h1>
        </div>
        <div class="container">
            <form method="post" action="javascript:void(0);">

                <label for="fname">First Name</label>
                <input type="text" id="fname" v-model="fname" name="firstname" placeholder="Your name..">

                <label for="lname">Last Name</label>
                <input type="text" id="lname" v-model="lname" name="lastname" placeholder="Your last name..">

                <label for="email">Email</label>
                <input type="text" id="email" v-model="email" name="email" placeholder="">
                <div class="invalid-email" v-if="email.length > 0 && !validEmail(email)">Email is not valid</div>

                <label for="subject">Subject</label>
                <b-form-textarea id="subject" name="subject" v-model="message" placeholder="Please write your request here.." style="height:200px"></b-form-textarea>
                <div class="question">Are you a robot?</div>
                 <div class="g-recaptcha" data-sitekey="RECAPTCHA_KEY" data-callback="recaptcha_callback">
                    <vue-recaptcha :loadRecaptchaScript="true"
                      sitekey="6Lc_r64UAAAAAAdkzoJb3giBe9RutmzX0dyWRZe3"
                      @verify="recaptcha_callback"
                      @expired="recaptcha_timeout">
                    </vue-recaptcha>
                </div>
                <div class="button-spinner">
                  <button-spinner
                      :is-loading="isLoading" 
                      :disabled="isLoading"
                      :status="status">
                      <span :disabled="btnActive ? null : true" @click="submit" type="submit" value="Submit">Submit</span>
                  </button-spinner>
                </div>
                <div class="final-message" v-if="finalMessage.length > 0">{{ this.finalMessage }}</div>
                <div class="final-message" v-if="errorMessage.length > 0">{{ this.errorMessage }}</div>
            </form>
        </div>
        <!-- <button @click='debugClick()'>Open/Close {{ btnActive }}</button> -->
    </div>
    
</template>
<script>

export function validEmail(email) {
  // eslint-disable-next-line
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
import VueRecaptcha from 'vue-recaptcha';
import axios from 'axios';
import VueButtonSpinner from 'vue-button-spinner';

export default {
  components: {
    VueRecaptcha,
    buttonSpinner: VueButtonSpinner
  },
  data: () => {
    return {
        btnActive: false,
        captchaVerify: "",
        isLoading: false,
        fname: "",
        lname: "",
        email: "",
        message: "",
        status: '',
        finalMessage: '',
        errorMessage: '',
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
      this.isLoading = false
      this.status = ''
      this.captchaVerify = ''
      this.finalMessage = ''
      this.errorMessage = ''
    },
    submit: function() {
      if (!validEmail(this.email)) {
        // eslint-disable-next-line
        console.log("invalid email" + this.email)
        return
      }
      this.isLoading = true
      // eslint-disable-next-line
      console.log(`The person ${this.fname} ${this.lname} from email ${this.email} said ${this.message}`)
       axios({ 
          method: "POST",
          url: `${process.env.VUE_APP_ROOT_API}`, 
          data: {
            firstname: this.fname,
            lastname: this.lname,
            email: this.email,
            message: this.message,
            captcha: this.captchaVerify,
          },
          timeout: 10000
          })
          // eslint-disable-next-line
          .then(res => {
            this.isLoading = false
            this.status = true
            this.finalMessage = 'Your request was received. We\'ll get back to you shortly.'
          })
          // eslint-disable-next-line
          .catch(err => {
            this.isLoading = false
            this.status = false
            this.errorMessage = 'Your request could not be processsed at this time. Try again later.'
          });
    },
    validEmail: function (email) {
      // eslint-disable-next-line
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email);
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
  width: 100%;
  text-align: center;
  padding: 3px;
  display: inline-block;
  display: -moz-inline-stack;
}

.invalid-email {
  color: red;
  margin-top: 1px;
  margin-bottom: 3px;
}

.button-spinner {
  text-align: center;
}

vue-recaptcha {
  text-align: center;
}

.main {
  max-width: 38rem;
  padding: 1rem;
  margin: auto;
  min-width: 400px; 
}
</style>