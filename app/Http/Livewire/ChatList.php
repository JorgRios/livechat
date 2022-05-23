<?php

namespace App\Http\Livewire;

use Livewire\Component;

class ChatList extends Component
{
    public $messages;

    protected $listeners = ["actualizarLista"];
    public function mount(){
        $this->messages = \App\Models\Chat::orderBy("created_at", "desc")->take(15)->get();
    }

    public function actualizarLista(){
        $this->messages = \App\Models\Chat::orderBy("created_at", "desc")->take(15)->get();

    }

    public function render()
    {
        return view('livewire.chat-list');
    }
}
