new Vue({
  el: '#app',
  data: {
    event: {
      eventDate: 'August 14th - 16th',
      eventTitle: 'Summer Festival!',
      eventDescription: "It's back! This years summer festival will be in the beautiful countryside featuring our best line up ever!",
      signupText: 'Add your name to the guest list <em>exclusive</em> offers:',
    },
    newNameText: '',
    guestName: ['James', 'Sam', 'Chris'],
    formSubmitClass: "",
    appStyles: {
      marginTop: '25px'
    }
  },
  methods: {
    formSubmitted: function() {
      if(this.newNameText.length > 0) {
        this.guestName.push(this.newNameText)
        this.newNameText = ''
        this.formSubmitClass = "submitted"
      }
    }
  }
});