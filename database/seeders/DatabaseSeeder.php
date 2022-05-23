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
            'name'  => 'Yosue Camacho',
            'username'  => 'kashorako',
            'password'  => bcrypt('123456'),
        ]);
        User::create([
            'name'  => 'lenny Sempertegui',
            'username'  => 'lenny',
            'password'  => bcrypt('123456'),
        ]);
        User::create([
            'name'  => 'Benjamin Cacasaca',
            'username'  => 'benjamin',
            'password'  => bcrypt('123456'),
        ]);
        User::create([
            'name'  => 'Daniel Pinto',
            'username'  => 'daniel',
            'password'  => bcrypt('123456'),
        ]);
        User::create([
            'name'  => 'Gabriel Mamani',
            'username'  => 'gabo',
            'password'  => bcrypt('123456'),
        ]);
    }
}
