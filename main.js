//3. Revealing Module Pattern 

var people = (function(){
	var people = ['Prageeth', 'Indika'];

	//cache dom
	var $el = $('#peopleModule');
	var $button =  $el.find('button');
	var $input =  $el.find('input');
	var $ul =  $el.find('ul');
	var template =  $el.find('#people-template').html();

	//bind events
	$button.on('click', addPerson);
	$ul.delegate('i.del', 'click', deletePerson);

	_render();

	function _render(){
		var tempHtml = "";
		$.each(people, function(key, value){
			tempHtml += "<li><span>"+value+"</span><i class='del'>X</i></li> ";
		});
		$ul.html(tempHtml);
	}

	function addPerson(value){
		var name = (typeof value === "string") ? value : $input.val();
		people.push(name);
		_render();
		$input.val('');
	}

	function deletePerson(event){
		var i;
		if(typeof event === "number"){
			i == event;
		} else{
			var $remove = $(event.target).closest('li');
			i = $ul.find('li').index($remove);
		}		
		people.splice(i,1);
		_render();
	}

	return{
		addPerson : addPerson,
		deletePerson: deletePerson
	};

})();


//2. object litrral module 

/*(function(){
	var people = {
		people: ['Prageeth', 'Indika'],
		init: function(){
			this.cachDom();
			this.bindEvents();
			this.render();
		},
		cachDom: function(){
			this.$el = $('#peopleModule');
			this.$button = this.$el.find('button');
			this.$input = this.$el.find('input');
			this.$ul = this.$el.find('ul');
			this.template = this.$el.find('#people-template').html();
		},
		bindEvents: function(){
			this.$button.on('click', this.addPerson.bind(this));
			this.$ul.delegate('i.del', 'click', this.deletePerson.bind(this));
		},
		render: function(){
			var data = {
				people: this.people,
			};
			var tempHtml = "";
			$.each(data.people, function(key, value){
				tempHtml += "<li><span>"+value+"</span><i class='del'>X</i></li> ";
			});
			this.$ul.html(tempHtml);
		},
		addPerson: function(){
			this.people.push(this.$input.val());
			this.render();
			this.$input.val('');
		},
		deletePerson: function(event){
			var $remove = $(event.target).closest('li');
			var i = this.$ul.find('li').index($remove);
			this.people.splice(i,1);
			this.render();
		}
	};

	people.init();

})();*/


//1. object litrral
/*var myModule = {
	name: "Indika",
	address: "Kandy",
	sayName: function(){
		alert(this.name);
	},
	setName: function(newName){
		this.name = newName;
	}
}

myModule.setName("Prageeth");
myModule.sayName();*/