jQuery ('document').ready(function(){

var lpd = 0; lpi=0;
	
	
	/*Клик кнопки "Языки программирования"*/
$('.LP').on('click', function(e) {  /*Один клик и заменяем классы*/
		e.preventDefault; // отменяет стандартное событие	
		$('.imper_languages').toggleClass('imper_languages_active'); //заменяем класс Declarative_languages на Declarative_languages_active
		$('.declar_languages').toggleClass('declar_languages_active'); //заменяем класс Imperative_languages на Imperative_languages_active*/
});
	
	/*Клик кнопки "Декларативные"*/
$('.imper_languages').on('click', function(e) {  /*Один клик и заменяем классы*/
	lpd++;
		e.preventDefault; // отменяет стандартное событие
		/*Выводим кнопки*/
		$('.Procedural_languages').toggleClass('Procedural_languages_active'); //заменяем класс Procedural_languages на Procedural_languages_active
		$('.LPDOOP').toggleClass('LPDOOP_active'); //заменяем класс LPDOOP на LPDOOP_active	
		/*Выводим текст*/
		$(".PI").remove();
		$(".PD").remove();
	if(lpd%2!=0){	
		$('center').append('<div class="PI"><p>Императивной языки ориентированы на реализацию конкретного алгоритма решения задачи. С их точки зрения программа представляет собой определяемую алгоритмом последовательность операторов и предложений, управляющих последовательностью их исполнения. Основу такой программы составляет вычисление и присвоение переменным значений выражений вплоть до получения нужного значения. Первыми и наиболее многочисленными представителями императивной группы являются процедурно-ориентированные языки, например, Ada, Basic, C, Fortran, Pascal и т.п. Концепции, объединяющие объектно-ориентированные языки, возникли несколько позже. В данном случае программа состоит из объектов, взаимодей-ствующих посредством пересылки сообщений, а, значит, в программу вносится модульность – посредством абстрагирования данных и наследования. Это позволяет избежать дублирования и локализовать описания механизмов работы с информацией. Одним из первых языков такого типа стал Smalltalk. </p></div>');	
	}else if (lpd%2==0&&lpi%2!=0){
		$('center').append('<div class="PD"><p>Декларативные языки ориентированы главным образом на оптимальное представление знаний и организацию работы с декларативной (описательной) частью задачи. Подразделение декларативных языков на группы определяется доминирующей парадигмой программирования. С точки зрения функциональной парадигмы программа состоит из независимых функций, каждая из которых определяет правило преобразования своих аргументов в некоторый результат. Эти функции определяются путём композиции системных или определяемых программистом функций с использованием структур типа альтернативы или рекурсии. Понятие переменных и операция присвоения здесь отсутствуют. Наиболее известным языком, реализующим функциональную парадигму, является LISP. Логическая парадигма основана на механизме доказательства теорем, ко-торый позволяет выяснить,противоречиво ли некоторое множество логических формул. Программа может рассматриваться как набор логических формул совместно с теоремой (запросом), которая должна быть доказана. Формулы предназначены для представления различных фактов (знаний об окружающем мире) и правил вывода новых знаний. При этом программист избавляется от необходимости определения точной последовательности шагов для выполнения вычислений. Типичным представителем логической парадигмы является Prolog. В современной практике программирования «чистые» парадигмы встречаются редко. В частности концепции объектно-ориентированной парадигмы нашли своё применение в декларативном программировании, будучи реализо6ванными в таких языках, как Common LISP (CLOS – Common Lisp Object System), Visual Prolog и др. </p></div>');		
	}	
});
	/*Клик кнопки "Императтвные"*/
$('.declar_languages').on('click', function(e) {  /*Один клик и заменяем классы*/
	lpi++;	
		e.preventDefault; // отменяет стандартное событие
		$('.LPIF').toggleClass('LPIF_active'); //заменяем класс LPIF на LPIF_active
		$('.LPIL').toggleClass('LPIL_active'); //заменяем класс LPIL на LPIL_active
		/*Выводим текст*/
		$(".PI").remove();
		$(".PD").remove();
	if(lpi%2!=0){	
		$('center').append('<div class="PD"><p>Декларативные языки ориентированы главным образом на оптимальное представление знаний и организацию работы с декларативной (описательной) частью задачи. Подразделение декларативных языков на группы определяется доминирующей парадигмой программирования. С точки зрения функциональной парадигмы программа состоит из независимых функций, каждая из которых определяет правило преобразования своих аргументов в некоторый результат. Эти функции определяются путём композиции системных или определяемых программистом функций с использованием структур типа альтернативы или рекурсии. Понятие переменных и операция присвоения здесь отсутствуют. Наиболее известным языком, реализующим функциональную парадигму, является LISP. Логическая парадигма основана на механизме доказательства теорем, ко-торый позволяет выяснить,противоречиво ли некоторое множество логических формул. Программа может рассматриваться как набор логических формул совместно с теоремой (запросом), которая должна быть доказана. Формулы предназначены для представления различных фактов (знаний об окружающем мире) и правил вывода новых знаний. При этом программист избавляется от необходимости определения точной последовательности шагов для выполнения вычислений. Типичным представителем логической парадигмы является Prolog. В современной практике программирования «чистые» парадигмы встречаются редко. В частности концепции объектно-ориентированной парадигмы нашли своё применение в декларативном программировании, будучи реализо6ванными в таких языках, как Common LISP (CLOS – Common Lisp Object System), Visual Prolog и др. </p></div>');
	
	}else if(lpi%2==0&&lpd%2!=0){	
		$('center').append('<div class="PI"><p>Императивной языки ориентированы на реализацию конкретного алгоритма решения задачи. С их точки зрения программа представляет собой определяемую алгоритмом последовательность операторов и предложений, управляющих последовательностью их исполнения. Основу такой программы составляет вычисление и присвоение переменным значений выражений вплоть до получения нужного значения. Первыми и наиболее многочисленными представителями императивной группы являются процедурно-ориентированные языки, например, Ada, Basic, C, Fortran, Pascal и т.п. Концепции, объединяющие объектно-ориентированные языки, возникли несколько позже. В данном случае программа состоит из объектов, взаимодей-ствующих посредством пересылки сообщений, а, значит, в программу вносится модульность – посредством абстрагирования данных и наследования. Это позволяет избежать дублирования и локализовать описания механизмов работы с информацией. Одним из первых языков такого типа стал Smalltalk. </p></div>');			
	}

});

$('.menu-nav_list').on('click',function(e) {
		e.preventDefault;
	$('.list').toggleClass ('list_active')
	});

/*JS*/
menu.onclick=function myFuction() {
	// body...
	var x = document.getElementById ("myTopnav");
	if(x.className === "topnav"){
		x.className += " responsive";
	}else{
		x.className = "topnav";
	}
}

});
