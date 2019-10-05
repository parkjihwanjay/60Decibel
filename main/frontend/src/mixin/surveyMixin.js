export default {
	methods: {
		button_click(model, value) {
			this.survey_data[model] = value;
			// console.log(this.is_symptom_start_checked);
			// console.log(this.survey_data);
		},
		button_click_multiple(model, value) {
			this.survey_data[model].push(value);
			this.survey_data[model] = Array.from(new Set(this.survey_data[model]));
			// console.log(model,value)
		},
		send(survey_data) {
			this.$store.dispatch('setSurveyData', survey_data);
		},
	},
};
