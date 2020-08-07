var btn=document.querySelector('button');
var add=document.querySelector('.add');
var box=document.querySelector('.top');
var noColor=document.querySelector('.noColor');
var addAll=document.querySelector('.addAll');
var delAll=document.querySelector('.delAll');
var bot=document.querySelector('.bottom');
var con=document.querySelectorAll('.con');
var addP=document.querySelector('.addP');
var allCheck = document.querySelector('.allCheck')
var n = 0

on(document.body,'click','.check',function (){
	var selectArr = [];//存储勾选状态
	var checks = document.querySelectorAll('.check');
	// 遍历所有任务的勾选状态
	for (var i = 0, len = checks.length; i < len; i++){
		if ( checks[i].checked ) {
			selectArr.push('a');
		} else {
			selectArr.push('b');
		}
	}
	// 判断全选是否需要选中
	if ( has(selectArr,'b') ) {
		allCheck.checked = false;
		console.log('11');
	} else {
		allCheck.checked = true;
		console.log('22');
	}
})

allCheck.onclick = function (){
    var checks = document.querySelectorAll('.check');
    for (var i = 0, len = checks.length; i < len; i++){
        if ( this.checked ) {
            checks[i].checked = true;
        } else {
            checks[i].checked = false;
        }
    }
}


btn.onclick=function(){
	if(add.value===''){
		alert("添加内容不能为空！");
		return;
	}
	var p=document.createElement('p');
	p.innerHTML='<input type="checkbox" class="check" id="check"/>'+'<span>'+add.value+'</span>'
	+'<input type="text" class="con"/>'+'<i class="del">删除</i><i class="edit">编辑</i>';
	addP.appendChild(p);
	add.value='';
	// if(allCheck.checked){
	// 	p.firstElementChild.checked=true;
	// }
	  if ( allCheck.checked ){
	        var checks = document.querySelectorAll('.check');
	        for (var i = 0, len = checks.length; i < len; i++){
	            checks[i].checked = true;
	        }
	    }
}

on(document.body,'click','.edit',function(e){
		var sp=e.target.parentNode.childNodes[1];
		var a=e.target.parentNode.childNodes[2];
		setTimeout(function(){
			a.value=sp.innerText;
			sp.style.display='none';
			a.style.display='inline-block';
			a.focus();
		},20)
})
for(var i=0;i<con.length;i++){
	con[i].onblur=function(){
		this.style.display='none';
		this.previousElementSibling.innerText=this.value;
		this.previousElementSibling.style.display='inline-block';
	}
}
on(document.body,'click','.del',function(e){
	e.target.parentNode.remove();
})
addAll.onclick=function(){
	var check=document.querySelectorAll('.check');
	for(var i=0;i<check.length;i++){
			if(check[i].checked){
				var p=document.createElement('p');	
				p.innerHTML=check[i].nextElementSibling.innerHTML;
				bot.appendChild(p);
				check[i].parentNode.remove();
				}
			}
	if(addP.children.length===0){
		allCheck.checked=false;
	}	
}
delAll.onclick=function(){
	var check=document.querySelectorAll('.check');
	for(var i=0;i<check.length;i++){
		if(check[i].checked){
			check[i].parentNode.remove();
		}
	}
	if(addP.children.length===0){
		allCheck.checked=false;
	}
}