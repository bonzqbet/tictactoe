@extends('layouts.layout')

@section('content')

    @foreach($data as $key => $value)
    @endforeach
    <div class="row">
        <div class="container">
            <h2><div id="msg">Tic Tac Toe</div></h2>
            <div id="">Log date {{ DateFormat($value->created_at) }}</div>
            <div id="msg-status" >Player {{ $value->status }} @if($value->status!='Tie')Win @endif !!</div>
            <div class="form-control-1" style="display:none;">
                Enter your number:<input type="number" id="gentable" value="{{ $value->size }}">
                <button onclick="GenTable($('#gentable').val())" >submit</button>
            </div>
            <div class="row md-5">
                <div class="col md-12 my-3">
                    <a href="{{ route('web.show','1') }}" class="btn btn-secondary">Back</a>
                    <button onclick="AutoPlay(js_array)" class="btn btn-success"><div id="btnPlay">Replay</div></button>
                </div>
            </div>
            <div id="msg-wait" class="RemoveClass">Replaying <img src="{{asset('assets/img/ajax-loaderstatus.gif')}}" alt="waiting" style="width:20px;height:20px" id="" /></div>
            <table  id="tablex" >
            </table>
        </div>
        <div id="tableHis" class="RemoveClass">
            <h2>บันทึกประวัติการเล่น</h2>
            <h5 id="h5"></h5>
            <form action="{{ route('web.create') }}" method="get">
                <input type="text" name="QueArr[]" id="inputQue" style="display: none;">
                <input type="text" name="status" id="status" style="display: none;">
                <input type="text" name="size" id="size" style="display: none;">
                <input type="submit" value="submit">
            </form>
        </div>
    </div>

@endsection

@section('ready')

    <script>
        $(document).ready(function(){
            $('#msg-status').addClass('RemoveClass');
            GenTable($('#gentable').val());
            SetDisable($('#gentable').val());
            js_array = [];
            // convert php array to JS array
            <?php
            $php_array = unserialize($value->history);
            for ($i=0; $i < count($php_array); $i++) {  ?>
                js_array.push(<?php echo $php_array[$i] ?>)
            <?php }
            ?>
            // AutoPlay(js_array);
        });
        </script>
@endsection
