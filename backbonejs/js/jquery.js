model =new Backbone.Model({ 
	data:[{text:"google",href:""},  
	{text:"youtube",href:""},
	{text:"facebook",href:""}
	]});
	var View = Backbone.View.extend({
	initialize: function(){
								this.template = $("#list").children();
																				},
	el :"#container",               
	events:{"click button":"render"}  
	},
	render: function(){
	var data = this.model.get('data');
	for(var i=0,l=data.length;i<;i++){
	var li = this.template.clone().find('a').attr('href',data[i].href.text).end();}
	this.$el.find('ul').append('li');}}
	}