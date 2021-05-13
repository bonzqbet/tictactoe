@extends('layouts.layout')

@section('content')
    <div class="row-1">
        <div class="container my-5">
        <h2><div id="msg">Tic Tac Toe</div></h2>
    <div class="form-control-1">
    Enter your number of Table: <input type="number" id="gentable" >
    <button onclick="GenTable($('#gentable').val())" class="btn btn-primary"><div id="btnGen">ยืนยัน</div></button>
    <div id="curPlay">Turn player x</div>
    </div>
    <table  id="tablex" >
    </table>
    </div>
    <div class="container">
    <div id="tableHis" class="RemoveClass">
        <h2>information state</h2>
        <h5 id="h5"></h5>
        <form action="{{ route('web.create') }}" method="get">
            <input type="text" name="QueArr[]" id="inputQue" style="display: none;">
            <input type="text" name="status" id="status" style="display: none;">
            <input type="text" name="size" id="size" style="display: none;">
            <a href="{{ route('web.show','1') }}" class="btn btn-primary">View Replay</a>
            <input type="submit" value="Save Replay" class="btn btn-success">
        </form>
    </div>
    <div class="col-md-12" id="btnReplay">
        <a href="{{ route('web.show','1') }}" class="btn btn-primary">View Replay</a>
    </div>
    </div>
</div>
@endsection

@section('ready')
    <script>
        $(document).ready(function(){
            GenTable(3);
            $('#gentable').val(3);
        });
    </script>
@endsection
