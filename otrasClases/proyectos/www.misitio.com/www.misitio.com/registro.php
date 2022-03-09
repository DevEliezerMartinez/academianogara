
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

<?php
    if(isset($_POST['btnGuardar'])){
        $servidor="localhost";
        $usuario="root";
        $password="";
        $BD="DAW2022";
        //función para conexión
        $mysqli = new mysqli($servidor,$usuario,$password,$BD);
        $mysqli->set_charset("utf8");
        $ncontrol=$_POST['ncontrol'];
        $nombre=$_POST['nombre'];
        $apaterno=$_POST['apaterno'];
        $amaterno=$_POST['amaterno'];
        $genero=$_POST['genero'];
        $email=$_POST['email'];
        if($nombre!='' && $apaterno!='' && $amaterno!='' && $genero!=''){
            $consulta="insert into estudiantes(ncontrol,nombre,apaterno,amaterno,genero,email) values ('$ncontrol','$nombre','$apaterno','$amaterno','$genero','$email')";
            $resultado= $mysqli->query($consulta) or die("Ocurrió un Error");
            echo "<h2 align='center'>Los datos han sido guardados correctamente</h2><br><h1 align='center'>¡Gracias ".$nombre." por Resgistrarte!</h1>";
        }
        else{
            echo"<h1 align='center'>¡Favor de rellanar todos los campos!</h1>";
        }
    }
    else{?>
        <h1 align="center">Bienvenido al Sistema de</h1>
<h1 align="center"> Registro de la asignatura</h1>
<h2 align="center">-Fundamentos de Programación-</h2>
<h3 align="center">Docente: M.C.C. Antonio Rodríguez Vázquez</h3>

<!-- ######################### FORMULARIO PARA EL REGISTRO DE ESTUDIANTES #########-->
<div id="stylized" class="myform">
    <form id="form" name="form" method="post" action="#">
    <p>Por favor, Registra tus Datos</p><br /><br />
    
        <label>No. Control:<span class="small">10 digitos</span></label><input type="number" name="ncontrol" required />
        <label>Nombre:<span class="small">Nombre Completo</span></label><input type="text" name="nombre" required="required"/>
        <label>A. Paterno:<span class="small">Solo texto</span></label> <input type="text" name="apaterno" required="required"/>
        <label>A. Materno:<span class="small">Solo texto</span></label> <input type="text" name="amaterno" required="required"/>
        <label>Género:</label><select name="genero" required="required"><option selected></option><option value="Masculino">Masculino</option><option value="Femenino">Femenino</option><option value="Otro">Otro</option></select>
        <label>Nombre:<span class="small">Nombre Completo</span></label><input type="text" name="nombre" required="required"/>

        <label>Fecha de nacimiento<span class="small">ejemplo@dominio.mx</span></label> <input type="text" name="text" required="required"/>
        <label>CURP:<span class="small">Solo texto</span></label> <input type="text" name="curp" required="required"/>
        <label>Telefono:<span class="small">Solo texto</span></label> <input type="number" name="telefono" />
        <label>Calle:<span class="small">Solo texto</span></label> <input type="text" name="calle" required="required"/>
        <label>Colonia:<span class="small">Solo texto</span></label> <input type="text" name="colonia" required="required"/>
        <label>C.P:<span class="small">Solo texto</span></label> <input type="text" name="cp"/>
        <label>Municipio:<span class="small">Solo texto</span></label> <input type="text" name="municipio" required="required"/>
        <label>Entidad:<span class="small">Solo texto</span></label> <input type="text" name="entidad" required="required"/>







        

        <button type="submit" name="btnGuardar">Guardar</button>
     
</form>
</div>
<?php } ?>

<br>

</body>
</html>
