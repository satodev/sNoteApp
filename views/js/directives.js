app.directive('snadir', ()=>{
	return {
		restrict :'AEC',
		template : '<span deletebutton class="btn-delete" href="#">x</span><span addupdatebutton class="btn-edit">Edit</span>'
	}
});
app.directive('addupdatebutton', ($compile)=>{
	return (scope, element, attr)=>{
		element.bind('click', ($event)=>{
			$event.preventDefault();
			var container = $event.currentTarget.parentNode.parentNode;
			var btn_value = $event.currentTarget.innerHTML;
			if(btn_value == 'Edit'){
				var titleElem = container.getElementsByTagName('h3')[0];
				var titleValue = titleElem.innerHTML;
				var textElem = container.getElementsByTagName('p')[0];
				var textValue = textElem.innerHTML;
				var inputTitle = document.createElement('input');
				inputTitle.setAttribute('name', 'iTitle');
				inputTitle.setAttribute('placeholder', titleValue);
				inputTitle.setAttribute('value', titleValue);
				var inputText = document.createElement('input');
				inputText.setAttribute('name', 'iText');
				inputText.setAttribute('placeholder', textValue);
				inputText.setAttribute('value', textValue);
				titleElem.parentNode.replaceChild(inputTitle, titleElem);
				textElem.parentNode.replaceChild(inputText, textElem);
				$event.currentTarget.innerHTML = 'Update';
			}
			if(btn_value == 'Update'){
				//get object id (verif token)
				var objId = container.getElementsByClassName('objId')[0].innerHTML;
				//change html tags to default
				var titleInput = container.getElementsByTagName('input')[0];
				var titleElem = document.createElement('h3');
				var textInput = container.getElementsByTagName('input')[1];
				var textElem = document.createElement('p');
				if(!titleInput.value || titleInput.value == titleInput.placeholder){
					titleElem.innerHTML = titleInput.placeholder;
				}else{
					titleElem.innerHTML = titleInput.value;
				}
				if(!textInput.value || textInput.value == textInput.placeholder){
					textElem.innerHTML = textInput.placeholder;
				}else{
					textElem.innerHTML =  textInput.value;
				}
				titleInput.parentNode.replaceChild(titleElem, titleInput);
				textInput.parentNode.replaceChild(textElem, textInput);
				$event.currentTarget.innerHTML = 'Edit';
				scope.update(objId, titleElem.innerHTML, textElem.innerHTML)
			}
		});
	}
});
app.directive('deletebutton', ()=>{
	return (scope, element)=>{
		element.bind('click', ($event)=>{
			$event.preventDefault;
			var objId = $event.currentTarget.parentNode.parentNode.getElementsByClassName('objId')[0].innerHTML;
			scope.remove(objId)
		});
	}
});
