$(document).ready(function() {
	$("#tarea").keypress(function(e){
		
		var tarea = $('#tarea').val();
		if(e.keyCode == 13){
			
			$('#lista-de-tareas').append(`
                                    <span class='todo_item row'>
                                        <input type='checkbox' class='input_checkbox col s3' name=''>
                                        <p class='col s4'>`+tarea+`</p>
                                        <button class='boton_remover col s4 .right-align' id=''>Remover</button>
                                    <span>`);

			$("#tarea").val("")
		}
	});
});
