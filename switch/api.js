<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
var app = new Vue({
	el: '#members',
	data:{

		members: []
	},

	mounted: function(){
		this.getAllMembers();
	},

	methods:{
		getAllMembers: function(){
			axios.get("api.php")
				.then(function(response){
					//console.log(response);
					app.members = response.data.members;
				});
		}
	}
});
