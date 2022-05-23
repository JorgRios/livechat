<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SystemController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth')->except('search');
    }

    public function home(){
        return view('home');
    }
}
