<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\Role;
use App\Models\User;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //role
        $adminRole = Role::create([
            "name" => "admin",
            "label" => "Admin",
            "description" => "Admin role",
        ]);

        $admin = User::firstOrCreate(
            ['email' => 'admin@carhub.com'],
            [
                'name' => 'Super Admin',
                'password' => Hash::make('admin123'),
                'role_id' => $adminRole->id
            ]
        );
    }
}
