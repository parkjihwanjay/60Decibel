<template>
	<div class="container2">
		<div class="under-line">
			<p class="txt-main">
				<span class="span-bottom">About 60DB</span>
			</p>
		</div>
		<div class="txt-body">
			60DB는 청각장애인이 듣지 못하는
			<br />
			<span class="txt-bold">60db이하의 소리</span>를 채워주는 서비스를 제공합니다.
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.container2 {
	/* background-color: #0d4d8d; */
	min-height: 170px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.txt-head {
	font-size: 1.6rem;
}
.txt-bold {
	font-weight: bolder;
	font-weight: 800;
	color: #0d4d8d;
}
.txt-main {
	font-size: 1.05rem;
}
.under-line {
	text-align: center;
}
span {
	color: #0d4d8d;
	font-weight: 700;
}
.span-bottom {
	/* display: inline-block; */
	/* vertical-align: center; */
	border-bottom: 1px solid;
}
.txt-body {
	padding-top: 0.6rem;
	text-align: center;
	line-height: 140%;
}
</style>
