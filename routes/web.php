<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});
$router->group(['prefix'=>'api/'],function() use ($router) {
$router->get('etudiants/view/{id}','EtudiantController@viewEtudiant');
$router->post('etudiants/add','EtudiantController@createEtudiant');
$router->put('etudiants/update/{id}','EtudiantController@updateEtudiant');
$router->delete('etudiants/delete/{id}','EtudiantController@deleteEtudiant');
$router->get('etudiants/index','EtudiantController@grabAllEtudiants');
$router->post('users/add','UserController@createUser');
$router->get('users/check/{username}','UserController@checkUser');
$router->post('users/login','UserController@loginUser');
});