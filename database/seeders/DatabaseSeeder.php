<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name'  => 'Jorge Rios',
            'username'  => 'jrios',
            'password'  => bcrypt('123456'),
        ]);
        User::create([
            'name'  => 'Yosue camacho',
            'username'  => 'kashorako',
            'password'  => bcrypt('123456'),
        ]);
    }
}
