<template>
  <div class="stomach-result">
    <ul>
      <li>작성일 : {{this.$store.state.stomach.created_at}}</li>
      <li
        v-if="`${this.$store.state.stomach.symptom_start} === 'less_than_month'`"
      >복통이 {{this.$store.state.stomach.symptom_start_less_than_month }}에 처음 발생하였습니다.</li>
      <li v-else>복통이 발생한지 {{this.$store.state.stomach.symptom_start}}</li>
      <li>통증이 {{this.$store.state.stomach.fast_or_slow}} 발생하였습니다</li>
      <li
        v-if="`${this.$store.state.stomach.symptom_situation}`"
      >처음 통증이 발생하였을 때 {{this.$store.state.stomach.created_at}}한 상황이었습니다.</li>
      <li>{{this.$store.state.stomach.symptom_location}}가 아픕니다.</li>
      <li
        v-if="`${this.$store.state.stomach.location_move}`"
      >아픈 부위가 {{this.$store.state.stomach.created_at}}로 이동했습니다.</li>
      <li v-else>아픈 부위가 이동하지 않았습니다.</li>
      <li
        v-if="`${this.$store.state.stomach.pain_spread}`"
      >통증이 {{this.$store.state.stomach.pain_spread_where}}로 퍼졌습니다.</li>
      <li>통증이 한 번 발생하면 {{this.$store.state.stomach.created_at}}만큼 지속됩니다.</li>
      <li
        v-if="`${this.$store.state.stomach.pain_repeated}`"
      >통증의 빈도는 하루에 {{this.$store.state.stomach.created_at}}입니다.</li>
      <li v-else>단발성 통증입니다.</li>
      <li>{{this.$store.state.stomach.created_at}}통증입니다.</li>
      <li>0~10 중 {{this.$store.state.stomach.pain_score}}에 해당하는 통증입니다.</li>
      <li v-if>작성일 : {{this.$store.state.stomach.created_at}}</li>
      <li>작성일 : {{this.$store.state.stomach.created_at}}</li>
      <li>작성일 : {{this.$store.state.stomach.created_at}}</li>
      <li>작성일 : {{this.$store.state.stomach.created_at}}</li>
      <li>작성일 : {{this.$store.state.stomach.created_at}}</li>
      <li>작성일 : {{this.$store.state.stomach.created_at}}</li>
      <li>작성일 : {{this.$store.state.stomach.created_at}}</li>
      <li>작성일 : {{this.$store.state.stomach.created_at}}</li>
      <li>작성일 : {{this.$store.state.stomach.created_at}}</li>
      <li>작성일 : {{this.$store.state.stomach.created_at}}</li>
      <li>작성일 : {{this.$store.state.stomach.created_at}}</li>
      <li>작성일 : {{this.$store.state.stomach.created_at}}</li>
      <li>작성일 : {{this.$store.state.stomach.created_at}}</li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
