Let theme =localStorage.getItem('theme');


Let themeDots=document.getElementByClassName('theme-dot')

for (var i = 0; themeDots.length >= i; i++) {
	themeDots[i].addEventListener('click',function() {
		Let mode = this.dataset.mode;
		// body...
	})
}

function setTheme(mode){
	if(mode=='light')
	{
		document.getElementById('theme-style').href='default.css';

	}
	if(mode=='blue')
	{
		document.getElementById('theme-style').href='blue.css';
		
	}
	if(mode=='green')
	{
		document.getElementById('theme-style').href='green.css';
		
	}
	if(mode=='purple')
	{
		document.getElementById('theme-style').href='purple.css';
		
	}

}