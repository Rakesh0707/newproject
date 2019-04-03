 window.onload= function(){

	var quickAddBtn=document.getElementById("QuickAdd");
	var AddBtn=document.getElementById("Add");
	var cancelBtn=document.getElementById("Cancel");
	var quickAddFromDiv=document.querySelector('.quickaddForm');

	var name=document.getElementById("name");
	var phone=document.getElementById("phone");
	var email=document.getElementById("email");
	
	var addBookDiv=document.querySelector(".addbook");
	var addressBook = [];

	quickAddBtn.addEventListener("click", function(){
		quickAddFormDiv.style.display = "block";
	});
		

	cancel.Btn.addEventListener("click", function(){
		quickAddFormDiv.style.display = "none";
	});

	AddBtn.addEventListener("click", addToBook);
	addBookDiv.addEventListener("click",removeEntry);
	function jsonStructure(name,phone,email){
			this.name=name;
			this.phone=phone;
			this.email=email;
	}

	function addToBook(){
		var isnull = name.value!= '' && phone.value!= '' && email.value!= '';
			if(isNull){
				var obj=new jsonStructure(name.value,phone.value,email.value);
				addressBook.push(obj);
				localStorage['addbook'] =JSON.stringfy(addressBook);
				quickAddForm.style.display= "none";	
				clearForm();
				showAddressBook();
			}
	}
				function clearForm(){
				var frm=document.querySelectorAll("formField");
				for(var i in frm)
					{
						frm[i].value = '';
					}
		}
		function removeEntry(e)
		{
			if(e.target.classList.contains("delButton"))
			{
				var remID=e.target.getAttribute("data-id");
				addBook.spllice(remID,1);
				localStorage['addbook']= JSOn.stringify(addressBook);
				showAddressBook();
			}
			
		}
		function showAddresssBook()
		{
			if(localStorage['addbook'] === undefined){
				localStorage['addBook']="[]";
			}
			else{
				addressBook = JSOn.parse(localStorage['addBook']);
				addBookDiv.inerHTMl ='';
				for(var n in addressBook){
					var str ='<! <div class ="entry">';
					    str += '<div class ="name"><p>' + addressBook[n].name + '</p></div>';	
						str += '<div class ="phone"><p>'+ addressBook[n].phone  + '</p><div>';
						
						str += '<div class ="email"><p>' + addressBook[n].email +'</p><div>';
						str += '<div class= "del"><a href= "#" class= "delbutton" data-id="' + n + '">Delete</a</div>>';
						str += '</div>';
						addBookDic.innerHTML += str
				}
			}
		}
};