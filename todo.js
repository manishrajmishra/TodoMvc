//var todos = ['item 1', 'item 2', 'item 3'];

		var todos = [
			{todoText: 'Item 1', completed: false},
			{todoText: 'Item 2', completed: false},
			{todoText: 'Item 3', completed: false}
			];
		displayTodos();

		//Add to Todos
		/*function add(todo){
			todos.push(todo);
			console.log(todos);
		}*/

		//Add Todo using object
		/*function add(intialtodoText){
			todos.push({todoText: intialtodoText, completed: false});
			displayTodos();
		}*/
		function add(){
			var intialtodoText = addinput.value;
			todos.push({todoText: intialtodoText, completed: false});
			addinput.value = '';
			displayTodos();
		}

		//add('item 4');

		//Edit Function
		/*function edit(pos, item){
			todos[pos] = item;
			console.log(todos);
		}*/

		//Edit Using Object
		/*function edit(pos, newItem){
			todos[pos].todoText = newItem;
			displayTodos();
		}*/
		/*function edit(){
			var pos = editpos.value;
			var newItem = edittext.value;
			editpos.value = '';
			edittext.value = '';
			todos[pos].todoText = newItem;
			displayTodos();
		}*/

		function edit(event){
			var newItem = prompt();
			/*if(newItem === null){

			}else if(newItem === ""){

			}else{
				var pos = event.currentTarget.id.split('-')[1];
				todos[pos].todoText = newItem;
				displayTodos();
			}*/
			if(newItem !== null){
				if(newItem !== ""){
					var pos = event.currentTarget.id.split('-')[1];
					todos[pos].todoText = newItem;
					displayTodos();
				}
			}
		}
		//edit(0, 'Start');

		//Remove the element
		/*function remove(pos1, pos2){
			todos.splice(pos1, pos2);
			displayTodos();
		}*/
		//using object
		/*function remove(){
			var pos1 = removepos.value;
			var pos2 = removepos1.value;
			removepos.value = '';
			removepos1.value = '';
			todos.splice(pos1, pos2);
			displayTodos();
		}*/
		function remove(event){
			var position = event.currentTarget.id.split('-')[1];
			todos.splice(position, 1);
			displayTodos();
		}
		//remove(0,1);

		//toggle between elements
		/*function toggle(pos){
			if(todos[pos].completed === false){
				todos[pos].completed = true;
			}else{
				todos[pos].completed = false;
			}
			displayTodos();
		}*/
		function toggle(event){
			//var pos = togglepos.value;
			var pos = event.currentTarget.id.split('-')[1];
			if(todos[pos].completed === false){
				todos[pos].completed = true;
			}else{
				todos[pos].completed = false;
			}
			/*togglepos.value = '';*/
			displayTodos();
		}

		//toggleAll of the elements
		function toggleAll(){
			var completedTodos = 0;

			for(var i=0;i<todos.length;i++){
				if(todos[i].completed === true){
					completedTodos++;
				}
			}

			if(completedTodos === todos.length){
				for(var i=0;i<todos.length;i++){
					todos[i].completed = false;
				}
			}else{
				for(var i=0;i<todos.length;i++){
					todos[i].completed = true;
				}
			}

			displayTodos();
		}

		function displayTodos(){
			//console.log(todos);

			for(var i=0;i<todos.length;i++){
				console.log(todos[i]);
			}

			var todoul = document.getElementById("todo-list-ul");
			todoul.innerHTML = '';
			for(var i=0;i<todos.length;i++){
				var todoli = document.createElement("li");
				/*todoli.innerHTML = todos[i].todoText + ' ' + todos[i].completed;*/
				if(todos[i].completed === true){
					todoli.innerHTML = '[x] ' + todos[i].todoText + ' ';
				}else{
					todoli.innerHTML = '[] ' + todos[i].todoText + ' ';
				}

				var removeButton = document.createElement('button');
				removeButton.innerHTML = 'Remove';
				removeButton.addEventListener('click', remove);
				removeButton.id = 'remove-' + i;
				todoli.appendChild(removeButton);

				var toggleButton_ = document.createElement('button');
				toggleButton_.innerHTML = 'Toggle';
				toggleButton_.addEventListener('click', toggle);
				toggleButton_.id = 'toggle-' + i;
				todoli.appendChild(toggleButton_);

				var editButton = document.createElement('button');
				editButton.innerHTML = 'Edit';
				editButton.addEventListener('click', edit);
				editButton.id = 'edit-' + i;
				todoli.appendChild(editButton);

				todoul.appendChild(todoli);
			}
		}

		/*var todosdisplaybutton = document.getElementById("display-todos-button");
		todosdisplaybutton.addEventListener('click', displayTodos);*/

		var toggleAllbutton = document.getElementById("toggleAll-button");
		toggleAllbutton.addEventListener('click', toggleAll);

		var addbutton = document.getElementById("add-button");
		var addinput = document.getElementById("add-input");
		addbutton.addEventListener('click', add);


		/*var editbutton = document.getElementById("edit-button");
		var editpos = document.getElementById("pos-edit");
		var edittext = document.getElementById("pos-edit-text");
		editbutton.addEventListener('click', edit);*/

		/*var removebutton = document.getElementById("remove-button");
		var removepos = document.getElementById("remove-pos");
		var removepos1 = document.getElementById("remove-pos-1");
		removebutton.addEventListener('click', remove);*/

		/*var toggleButton = document.getElementById("toggle-button");
		var togglepos = document.getElementById("toggle-pos");
		toggleButton.addEventListener('click', toggle);*/
