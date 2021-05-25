<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

use App\Models\Etudiant;

class EtudiantController extends Controller
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
//createEtudiant
    public function createEtudiant(Request $request){
        $etudiant = new Etudiant;
        $etudiant->firstname=$request->firstname;
        $etudiant->lastname=$request->lastname;
        $etudiant->email=$request->email;
        $etudiant->country=$request->country;
        $etudiant->save();
        return response()->json($etudiant);
    }
//updateEtudiant
public function updateEtudiant(Request $request,$id){
        $etudiant = Etudiant::find($id);
        $etudiant->firstname=$request->input('firstname');
        $etudiant->lastname=$request->input('lastname');
        $etudiant->email=$request->input('email');
        $etudiant->country=$request->input('country');
        
        $etudiant->save();
        return response()->json($etudiant);
    }
//findEtudiant
public function viewEtudiant($id){
        $etudiant = Etudiant::find($id);
        
        return response()->json($etudiant);
    }
//findEtudiant
public function deleteEtudiant($id){
        $etudiant = Etudiant::find($id);
        $etudiant->delete();
        return response()->json('Removed Successfully');
        
    } 
//findallEtudiants
public function grabAllEtudiants(){
        $etudiant = Etudiant::all();
        
        return response()->json($etudiant);
        
    } 
}
