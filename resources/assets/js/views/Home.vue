<template>
    <div class="container">
        <div class="columns">
            <div class="column">
                <div class="message" v-for="status in statuses">
                    <div class="message-header">
                        <p>
                            {{ status.user.name }} said ...
                        </p>
                        <p>
                            {{ status.created_at | ago }}
                        </p>
                    </div>

                    <div class="message-body" v-text="status.body">

                    </div>
                </div>
            </div>
            <add-to-stream @completed="addStatus"></add-to-stream>
        </div>
    </div>
</template>

<script>
    import moment from 'moment';
    import statusModel from '../models/Status';
    import AddToStream from '../components/AddToStream.vue';

    export default {
        components: {
            AddToStream
        },
        data() {
            return {
                statuses: []
            };
        },

        filters: {
            ago(date) {
                return moment(date).fromNow();
            }
        },

        created() {
            statusModel.all(statuses => this.statuses = statuses)
        },

        methods: {
            addStatus(status) {
                this.statuses.unshift(status);
                alert('completed!');

                window.scrollTo(0, 0);
            }
        }
    }
</script>
