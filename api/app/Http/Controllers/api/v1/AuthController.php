<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    //
   

    public function user()
    {
        $user = Auth::user()->load('role');
        return response()->json([
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
            'role' => $user->role->name,
        ]);
    }

    public function login(Request $request){
        if(!Auth::attempt($request->only('email','password'))){
            return response()->json(['message'=> "Invalid Credentials"],Response::HTTP_UNAUTHORIZED);
        }

        $user = Auth::user()->load('role');
        $token = $user->createToken('jwt')->plainTextToken;

        return response()->json([
            'message'=> "Login Successfully",
            'token' => $token,	
            "user" => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'role' => $user->role->name,
            ]
        ],Response::HTTP_OK);
    }

    public function logout(Request $request){
        $request->user()->currentAccessToken()->delete();
        return response()->json(['message'=> "Logout Successfully"],Response::HTTP_OK);
    }

    
    public function getUser()
    {
        $user = Auth::user()->load('role');
        if (!$user) {
            return response()->json(['error' => 'User not authenticated'], 401);
        }
        return [
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
            'role' => $user->role->name,
        ];
    }
}
