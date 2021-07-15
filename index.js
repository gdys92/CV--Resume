const langEl = document.querySelector('.langWrap');
		const link = document.querySelectorAll('a');
		const titleEl = document.querySelector('.title');
		const descrEl = document.querySelector('.description');

		link.forEach(el => {
			el.addEventListener('click', () => {
				langEl.querySelector('.active').classList.remove('active');
				el.classList.add('active');

				const attr = el.getAttribute('language');

				titleEl.textContent = data[attr].title;
				descrEl.textContent = data[attr].description;
			});
		});
		
		var data = {
			  "english": 
			  {
			    "title": "Hello World",
			    "description": 
				    "hello"
			  },
			  "spanish": 
			  {
			    "title": "hola",
			    "description": 
				    "hola"
			  },
			}