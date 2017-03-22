new Vue({
    el: '#events',
    data: {
        event: { name: '', description: '', date: '' },
        events: []
    },
    mounted: function() {
        this.fetchEvents();
    },
    methods: {
        fetchEvents: function() {
            var events_hardcoded = [
            {
                id: 1,
                name: 'TIFF',
                description: 'Toronto International Film Festival',
                date: '2015-09-10'
            },
            {
                id: 2,
                name: 'The Martian Premiere',
                description: 'The Martian comes to theatres.',
                date: '2015-10-02'
            },
            {
                id: 3,
                name: 'SXSW',
                description: 'Music, film and interactive festival in Austin, TX.',
                date: '2016-03-11'
            }];
            // this.events = events_hardcoded;

            this.$http.get('/events.json').then(response => {

                console.log("success:");
                console.log(response.body);
                this.events = response.body;

            }, response => {
                console.log("error");
                console.log(response);
            });

            // this.$http.get('/events.json').success(function(events) {
            //     this.events = events;
            // }).error(function(error) {
            //    console.log(error); 
            // });

            // this.events = events;
        },

        // Adds an event to the existing events array
        addEvent: function() {
            if(this.event.name) {
                this.events.push(this.event);
                this.event = { name: '', description: '', date: '' };
            }
        },

        deleteEvent: function(event) {
            if(confirm("Are you sure you want to delete this event?")) {
                // $remove is a Vue convenience method similar to splice
                // this.events.$remove(index_item);
                var index = this.events.indexOf(event);
                if(index != -1) {
                    this.events.splice( index, 1 );
                }
            }
        }
    }
});
