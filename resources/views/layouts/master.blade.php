<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Live chat</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    @livewireStyles()
    @livewireScripts()
    <script src="https://js.pusher.com/7.0/pusher.min.js"></script>
    @toastr_css
</head>
<body>
    <div class="container">
        <a class="dropdown-item" href="/logout">Salir</a>
        @yield('content')
    </div>
    @toastr_js
    @toastr_render
</body>
</html>
