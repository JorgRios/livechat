@extends('layouts.master')
@section('content')
<h5>logueado como:</h5>
<h2>{{Auth()->user()->name}}</h2>
@livewire("chat-form")
@livewire("chat-list")
@endsection
