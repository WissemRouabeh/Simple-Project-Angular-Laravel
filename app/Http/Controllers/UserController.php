<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

use App\Models\Us;

class UserController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }
//createuser
    public function createUser(Request $request){
        $user = new Us;
        $user->username=$request->username;
        $user->password=$request->password;
        $user->save();
        return response()->json($user);
    }
//updateuser

//finduser
public function viewuser($id){
        $user = Us::find($id);
        
        return response()->json($user);
    }
//finduser
public function deleteUser($id){
        $user = Us::find($id);
        $user->delete();
        return response()->json('Removed Successfully');
        
    } 

public function loginUser(Request $request){
        $user = Us::where('username',$request->input('username'))->first();
        if($user!=null)
            if($user->password==$request->input('password'))
                return response()->json('Login Successfully');
            else {
                return response()->json('Password incorrect');
            }
        else {
            return response()->json('Username doesn t exist');
        }
    } 
public function checkUser($username){
        $user = Us::where('username',$username)->first();
        return response()->json($user);
   } 

//findallusers
public function grabAllUsers(){
        $user = Us::all();
        return response()->json($user);
        
    } 
}
