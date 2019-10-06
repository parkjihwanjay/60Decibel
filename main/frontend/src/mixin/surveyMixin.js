export default {
	methods: {
		button_click(model, value) {
			this.survey_data[model] = value;
		},
		button_click_multiple(model, value) {
			this.survey_data[model].push(value);
			this.survey_data[model] = Array.from(new Set(this.survey_data[model]));
		},
		send(survey_data) {
			this.$store.dispatch('setSurveyData', survey_data);
		},
	},
};
