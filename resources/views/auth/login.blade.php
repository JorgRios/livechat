<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Chat</title>
        <link href="https://startbootstrap.github.io/startbootstrap-sb-admin/css/styles.css" rel="stylesheet" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/all.min.js" crossorigin="anonymous"></script>
    </head>
    <body class="bg-secundary">
        <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col">
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-lg-5">
                                <div class="card shadow-lg border-0 rounded-lg mt-5">
                                    <div class="card-header"><h3 class="text-center font-weight-light my-4">Ingreso</h3></div>
                                    <div class="card-body">
                                        {!! Form::open([ 'route' => 'login']) !!}
                                            <div class="form-floating mb-3">
                                                {!! Form::text('username', null, ['class'=>'form-control','id'=>'username','placeholder'=>'Usuario']) !!}
                                                {!! Form::label('username','Usuario') !!}
                                            </div>
                                            <div class="form-floating mb-3">
                                                {!! Form::password('password', ['id'=>'password','class'=>'form-control','id'=>'password','placeholder'=>'Contraseña']) !!}

                                                {!! Form::label('password','Contraseña') !!}
                                            </div>
                                            <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                                                <button type="submit" class="btn btn-primary">Ingresar</button>
                                            </div>
                                        {!! Form::close() !!}
                                    </div>
                                    <div class="card-footer text-center py-3">
                                        <div class="small"><a href="#">JorgServer</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <div id="layoutAuthentication_footer">
                <footer class="py-4 bg-light mt-auto">
                    <div class="container-fluid px-4">
                        <div class="d-flex align-items-center justify-content-between small">
                            <div class="text-muted">Grupo 49</div>

                        </div>
                    </div>
                </footer>
            </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
        <script src="{{asset('vendor\template\startbootstrap-sb-admin-gh-pages\startbootstrap-sb-admin-gh-pages\js\scripts.js')}}"></script>
    </body>
</html>
