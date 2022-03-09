
<?php
//include("abrir_conexion.php");
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Registro de estudiantes - Docente: Antonio Rodríguez Vázquez</title>
<LINK REL="stylesheet" TYPE="text/css" HREF="mi_estilo.css">
</head>
<body>
<h1 align="center">Tecnológico Nacional de México</h1>
<h1 align="center">Instituto Tecnológico de San Marcos</h1>
<h2 align="center">-Fundamentos de Programación-</h2>
<h3 align="center">Docente: M.C.C. Antonio Rodríguez Vázquez</h3>
<div align="center"><label name="fecha" id="fecha" ><?php echo date("m/d/Y"); ?></label></div>
<br>
	<form method="post" action="#">
	<table align="center">
    	<tr>
        	<td><button type="submit" name="btnMostrarTodo">Mostrar Estudintes</button></td>        	
        </tr>
	</table>
	</form>

<?php	
	if(isset($_POST['btnMostrarTodo'])){
		$servidor="localhost";
        $usuario="root";
        $password="";
        $BD="DAW2022";
        //función para conexión
        $mysqli = new mysqli($servidor,$usuario,$password,$BD);
        $mysqli->set_charset("utf8");
	
		$con ="select apaterno,amaterno,nombre,ncontrol,genero,email from estudiantes order by apaterno,amaterno asc";	
		$res=$mysqli->query($con) or die("¡Error en la ejecución de la consulta!");
		$nfilas=mysqli_num_rows($res)or die ("¡Error en conseguir la cantidad de filas devueltas!");   
   
?>

<table align="center" border="1">
	<tr>
 		<td><label>No.</label></td>
 		<td><label>A. Paterno</label></td>
    	<td><label>A. Materno</label></td>
    	<td><label>Nombre</label></td>
    	<td><label>No. Control</label></td>
    	<td><label>Género</label></td>
    	<td><label>Email</label></td>    	
    </tr>
<?php
	 $i=0;
     while ($reg=mysqli_fetch_array($res))
	{
		$i++;
?>
	<tr>
		<td><?php echo $i; ?></td>	
    	<td><?php echo $reg[0]; ?></td>
        <td><?php echo $reg[1]; ?></td>
        <td><?php echo $reg[2]; ?></td>
        <td><?php echo $reg[3]; ?></td>
        <td><?php echo $reg[4]; ?></td>
        <td><?php echo $reg[5]; ?></td>
    </tr>
<?php		
	}
?>
</table>
<br>
<div align="center"><input type="image" src="img/descarga.jpg" name="Submit" onclick="javascript:window.print()">  </div>
<?php
}// AQUI CIERRA IF 
?>


</body>
</html>
