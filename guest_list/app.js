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
    guestName: [],
    eventCapacity: 25,
    eventCapacityPercentage: 0
  },
  methods: {
    formSubmitted: function() {
      if(this.newNameText.length > 0 && this.eventCapacityPercentage < 100) {
        this.guestName.push(this.newNameText)
        this.newNameText = ''
        this.eventCapacityPercentage = this.guestName.length * 100 / this.eventCapacity
      }
    },
    keyPressed: function() {
      console.log('key pressed')
    }
  },
  computed: {
    sortNames: function () {
      return this.guestName.sort()
    }
  },
  watch: {
    guestName: function(data) {
    }
  },
  filters: {
    formatName: function(value) {
      return value.slice(0, 1).toUpperCase() + value.slice(1).toLowerCase()
    }
  }
});

new Vue({
  el: '#navigation',
  data: {
    appName: 'Guest List',
    navLinks: [
      {name: "Home", id: 1, url: "www.duckduckgo.com"},
      {name: "Upcoming events", id: 2, url: "www.duckduckgo.com"},
      {name: "Guest Benefits", id: 3, url: "www.duckduckgo.com"},
      {name: "Latest News", id: 4, url: "www.duckduckgo.com"},
    ]
  }
})