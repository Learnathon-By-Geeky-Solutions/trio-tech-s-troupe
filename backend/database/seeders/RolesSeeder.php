<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class RolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        DB::table('roles')->insertOrIgnore([
            [
                'name' => 'doctor',
                'display_name' => 'Doctor',
                'description' => 'Medical practitioner role',
            ],
            [
                'name' => 'patient',
                'display_name' => 'Patient',
                'description' => 'Patient role',
            ]
        ]);
    }
}
