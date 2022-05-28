<?php

namespace App\Http\Controllers\Shared;

use App\Http\Controllers\Controller;
use App\Http\Requests\HomepageSearchRequest;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class Homepage extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function search(HomepageSearchRequest $request)
    {
        $base_query = Student::query()
            ->where('student_id','=', $request->validated('query'));
        if ($request->validated('batch')){
            $base_query->orWhere('batch','=',$request->validated('batch'));
        }
        if ($request->validated('dept')){
            $base_query->orWhere('department_id','=',$request->validated('dept'));
        }
        /*if ($request->validated('batch')){
            $base_query->where('batch','=',$request->validated('batch'));
        }*/
        /*
         * Lastly
         */
        $query = str_replace(['%', '_'], '', $request->validated('query'));

        $base_query->orWhere('full_name','like',"%{$query}%");

        try {
            $result = $base_query
                ->with('department')
                ->paginate(50);
            return response()->json(['status'=>'ok','message'=>'success','data'=>$result]);
        }catch (\Exception $e){
            return response()->json(['status'=>'error','message'=>'failed '.$e->getMessage(),'data'=>null], Response::HTTP_UNPROCESSABLE_ENTITY);
        }



    }
}
