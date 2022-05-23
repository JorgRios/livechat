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
                @if($mensaje->user_id== auth()->user()->id)
                    <div class="alert alert-success" style="margin-left: 50px;">
                        <strong>{{$mensaje->user->name}}</strong> <small class="float-right">[{{$mensaje->created_at->diffforhumans()}}]</small>
                        <br><span class="text-muted">{{$mensaje->message}}</span>
                    </div>
                @else
                    <div class="alert alert-warning" style="margin-right: 50px;">
                        <strong>{{$mensaje->user->name}}</strong> <small class="float-right">[{{$mensaje->created_at->diffForhumans()}}]</small>
                        <br><span class="text-muted">{{$mensaje->message}}</span>
                    </div>
                @endif
            </div>
            @endforeach
        </div>
        </div>
    </div>
    <script>
    // Enable pusher logging - don't include this in production
    Pusher.logToConsole = true;

    var pusher = new Pusher('d1e9546ef7d931338861', {
        cluster: 'sa1'
    });

    var channel = pusher.subscribe('chat-channel');
    channel.bind('chat-event', function(data) {
        //alert(JSON.stringify(data));
        window.livewire.emit('actualizarLista',data);
    });
  </script>
</div>
