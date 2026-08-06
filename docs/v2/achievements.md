<script setup>
import SampleRequest from '../components/SampleRequest.vue';
import spec from './retroachievements.json'
</script>

<OAOperation :spec="spec" operation-id="achievements.index" />
