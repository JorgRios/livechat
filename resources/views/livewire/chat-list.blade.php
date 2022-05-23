<div>
    <h4>Chat</h4>
    <div class="row">
        <div class="col">
            <div style="display: block;
                width: 100%;
                height: 700px;
                overflow-y: scroll;
                scroll-behavior: smooth;">
                @foreach ($messages as $mensaje)
                <div>
                    <div class="alert alert-{{($mensaje->user_id== auth()->user()->id)?'success':'warning'}}" style="margin-{{($mensaje->user_id== auth()->user()->id)?'left':'right'}}: 80px;">
                        <strong style="color: #{{$mensaje->user->color}}">{{$mensaje->user->name}}</strong> <small class="float-right">[{{$mensaje->created_at->diffforhumans()}}]</small>
                        <br><span class="text-muted">{{$mensaje->message}}</span>
                    </div>
                </div>
                @endforeach
            </div>
        </div>
    </div>
    <script>
    // Enable pusher logging - don't include this in production
    Pusher.logToConsole = true;
    var pusher = new Pusher('{{env('PUSHER_APP_KEY')}}', {
        cluster: '{{env('PUSHER_APP_CLUSTER')}}',
        forceTLS: true
    });

    var channel = pusher.subscribe('chat-channel');
    channel.bind('chat-event', function(data) {
        //alert(JSON.stringify(data));
        window.livewire.emit('actualizarLista',data);
    });
  </script>
</div>
