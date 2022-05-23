<div>
    <div class="input-group" >
        {!! Form::hidden('user_id', auth()->user()->id) !!}
        <div class="input-group" role="group" >
            {!! Form::text('message', '', ['class'=>'form-control','id'=>'message','wire:model'=>'message','wire:keydown.enter'=>'enviarMensaje']) !!}

            <button class="btn btn-primary"
            wire:click="enviarMensaje"
            wire:loading.attr="disabled"
            wire:offline.attr="disabled" type="submit">Enviar mensaje</button>

        </div>
        @error("message")
            <small class="text-danger">{{$message}}</small>
        @enderror
    </div>
    <div style="position: absolute; top:10px; right:10px;" class="alert alert-success collapse mt-3" role="alert" id="avisoSuccess">
        Mensaje enviado
    </div>
    <script>
        window.livewire.on('mensajeEnviado',function(){
            $("#avisoSuccess").fadeIn('slow');
            setTimeout(function(){
                $("#avisoSuccess").fadeOut('slow');
            },3000);
        });
    </script>
</div>
