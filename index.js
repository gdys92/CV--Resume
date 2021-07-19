const langEl = document.querySelector('.langWrap');
	const link = document.querySelectorAll('a');
	const ResumeTitleEl1 = document.querySelector('.resume_title1');
	const ResumeSubtitleEl = document.querySelector('.resume_subtitle');
	const ResumeTitleEl2 = document.querySelector('.resume_title2');
	const ResumeTitleEl3 = document.querySelector('.resume_title3');
	const Role = document.querySelector('h2');
	const ResumeTitleEl4 = document.querySelector('.resume_title4');
	const ResumeTitleEl5 = document.querySelector('.resume_title5');
	const ResumeTitleEl6 = document.querySelector('.resume_title6');
	const Worksub = document.querySelector('h4');
	const Edusub = document.querySelector('h5');
	

		link.forEach(el => {
			el.addEventListener('click', () => {
				langEl.querySelector('.active').classList.remove('active');
				el.classList.add('active');

				const attr = el.getAttribute('language');

				ResumeTitleEl1.textContent = data[attr].resume_title1;
				ResumeSubtitleEl.textContent = data[attr].resume_subtitle;
				ResumeTitleEl2.textContent = data[attr].resume_title2;
				ResumeTitleEl3.textContent = data[attr].resume_title3;
				Role.textContent = data[attr].h2;
				ResumeTitleEl4.textContent = data[attr].resume_title4;
				ResumeTitleEl5.textContent = data[attr].resume_title5;
				ResumeTitleEl6.textContent = data[attr].resume_title6;
				Worksub.textContent = data[attr].h4;
				Edusub.textContent = data[attr].h5;
			});
		});
		
		var data = {
			  "english": 
			  {
			    "resume_title1": "Contact",
			    "resume_subtitle": "Phone",
				"resume_title2": "Address",
				"resume_title3": "Skills",
				"h2": "Frontend Developer",
				"resume_title4": "Experience",
				"resume_title5": "Education",
				"resume_title6": "INTERESTS",
				"h4": "Assemble the visual presentation of the template in PSD or some other format for vector graphics. MEAN application development (Angular, Express.js, Node.js and MongoDB).MERN application development (React.js, Express.js, Next.js, Node.js and MongoDB) .Testing in multiple browsers and devices. Responsive/ mobile design.",
				"h5":"HTML AND CSS: Website layout using HTML and apply the styles you want with CSS. JavaScript: Each behavior that happens on a website, define actions, and communicate with external services is captured. BACK-END: Applications that persistently store data will be performed using database management."


			  },
			  "spanish": 
			  {
			    "resume_title1": "Contacto",
			    "resume_subtitle": "Telefono",
				"resume_title2": "Dirección",
				"resume_title3": "Habilidades",
				"h2": "Desarrollador Frontend",
				"resume_title4": "Experiencia",
				"resume_title5": "Educación",
				"resume_title6": "Pasatiempos",
				"h4": "Armar la presentación visual de la plantilla en PSD o en algún otro formato para gráficos vectoriales. Desarrollo de aplicaciones MEAN (Angular, Express.js, Node.js y MongoDB). Desarrollo de aplicaciones MERN (React.js, Express.js, Next.js, Node.js y MongoDB). Testeo en múltiples navegadores y dispositivos. Diseño responsive/mobile.",
				"h5": "HTML Y CSS Se aprende a estructurar tu sitio web mediante HTML y a aplicar los estilos que desees con CSS. JAVASCRIPT Se aprende a capturar cada comportamiento que suceda en tu sitio web, definir acciones y comunicarte con servicios externos. BACK-END Se aprende a a realizar aplicaciones que almacenen los datos de forma persistente mediante la administración de bases de datos."
			  },
			}