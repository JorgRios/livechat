<?php

namespace App\Http\Livewire;

use \App\Models\Chat;
use Livewire\Component;

class ChatForm extends Component
{
    public $user_id;
    public $message;

    public function mount(){
        $this->user_id = Auth()->user()->id;
        $this->message = "";
    }

    public function render()
    {
        return view('livewire.chat-form');
    }

    public function updated($field){
        $this->validateOnly($field,[
            "message" => "required"
        ]);
    }

    public function enviarMensaje(){
        $this->validate([
            "message" => "required"
        ]);
        $chat = new Chat;
        $chat->user_id = $this->user_id;
        $chat->message = $this->message;
        $chat->save();
        event(new \App\Events\SendMessage($this->user_id,$this->message));
        $this->emit('mensajeEnviado');
        $this->message="";
    }
}
