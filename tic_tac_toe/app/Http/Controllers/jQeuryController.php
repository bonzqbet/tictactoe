<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class jQeuryController extends Controller
{
    function index(Request $req){
        // return $req->data;
        if(!empty($req->id)){
            $data = DB::table('gametable')
            ->select('id', 'history','size','status','created_at')
            ->where('id', '=', $req->id)
            ->get();
            // return $users;
            return view('layouts.homeReplay',compact('data'));

        }
        // $data = DB::first()->paginate(5);
        $data = DB::table('gametable')->get();

        return view('layouts.home',compact('data'))->with('i',(request()->input('page',1)-1)*5);
    }

    //
    function create(Request $req){
        $data =  serialize($req->input('QueArr'));
        $status =  $req->input('status');
        $size =  $req->input('size');

        DB::table('gametable')->insert([
            'history' => $data,
            'status' => $status,
            'size' => $size
        ]);
        // return print_pre($data);
        // return redirect()->route('web.show','1');
        return redirect()->route('web.show','1')->with('success','add successfully');

    }

    public function show()
    {
        //
        // return 'his';
        $data = DB::table('gametable')->latest()->paginate(5);
        // $data = DB::table('gametable')->get();

        return view('layouts.his',compact('data'))->with('i',(request()->input('page',1)-1)*5);
    }

    public function destroy($request)
    {
        DB::table('gametable')->delete($request);

        // return view('layouts.his',compact('data'))->with('i',(request()->input('page',1)-1)*5);
        return redirect()->route('web.show','1')->with('success','deleted successfully');

    }
}
