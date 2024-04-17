<?php
session_start();

function initSession()
{
    if (!isset($_SESSION['tasks'])) {
        $_SESSION['tasks'] = [];
    }
}

initSession();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['add_task'])) {
        $task = [
            'description' => $_POST['task'],
            'details' => $_POST['details'], 
            'completed' => false
        ];
        array_push($_SESSION['tasks'], $task);
    } elseif (isset($_POST['complete_task'])) {
        $index = $_POST['index'];
        $_SESSION['tasks'][$index]['completed'] = true;
    } elseif (isset($_POST['delete_task'])) {
        $index = $_POST['index'];
        unset($_SESSION['tasks'][$index]);
    } elseif (isset($_POST['edit_task'])) {
        $index = $_POST['index'];
        $_SESSION['tasks'][$index]['description'] = $_POST['new_task'];
        $_SESSION['tasks'][$index]['details'] = $_POST['new_details'];
    }
}

?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Tareas</title>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            margin: 20px;
        }
    </style>
</head>

<body>

    <div class="container">
        <h1>Lista de Tareas</h1>
        <form method="POST">
            <div class="form-group">
                <input type="text" class="form-control" name="task" placeholder="Nueva tarea" required>
            </div>
            <div class="form-group">
                <textarea class="form-control" name="details" placeholder="Detalles de la tarea"></textarea>
            </div>
            <button type="submit" name="add_task" class="btn btn-primary">Agregar tarea</button>
        </form>

        <h2>Tareas Pendientes</h2>
        <ul class="list-group">
            <?php foreach ($_SESSION['tasks'] as $key => $task): ?>
                <?php if (!$task['completed']): ?>
                    <li class="list-group-item">
                        <form method="POST" style="display: inline;">
                            <input type="hidden" name="index" value="<?php echo $key; ?>">
                            <input type="text" name="new_task" value="<?php echo $task['description']; ?>">
                            <textarea name="new_details"><?php echo $task['details']; ?></textarea>
                            <button type="submit" name="edit_task" class="btn btn-primary btn-sm float-right">Editar</button>
                        </form>
                        <form method="POST" style="display: inline;">
                            <input type="hidden" name="index" value="<?php echo $key; ?>">
                            <button type="submit" name="complete_task"
                                class="btn btn-success btn-sm float-right">Completar</button>
                        </form>
                        <form method="POST" style="display: inline;">
                            <input type="hidden" name="index" value="<?php echo $key; ?>">
                            <button type="submit" name="delete_task"
                                class="btn btn-danger btn-sm float-right mr-2">Eliminar</button>
                        </form>
                    </li>
                <?php endif; ?>
            <?php endforeach; ?>
        </ul>

        <h2>Tareas Completadas</h2>
        <ul class="list-group">
            <?php foreach ($_SESSION['tasks'] as $key => $task): ?>
                <?php if ($task['completed']): ?>
                    <li class="list-group-item">
                        <strong><?php echo $task['description']; ?></strong>
                        <p><?php echo $task['details']; ?></p>
                        <form method="POST" style="display: inline;">
                            <input type="hidden" name="index" value="<?php echo $key; ?>">
                            <button type="submit" name="delete_task" class="btn btn-danger btn-sm float-right">Eliminar</button>
                        </form>
                    </li>
                <?php endif; ?>
            <?php endforeach; ?>
        </ul>
    </div>

</body>

</html>
