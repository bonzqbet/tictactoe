<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Replay List</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css">
</head>
<body>
    

    
    <div class="container my-5">
    <div class="content-header">
    <div class="row md-5">
        <div class="col md-12 my-3">
            <h2>Replay List</h2>
            <a href="{{ route('web.index') }}" class="btn btn-secondary">Back</a>
        </div>
    </div>
</div>
    @if($message = Session::get('success'))
      <div class="alert alert-success">
        {{ $message }}
      </div>
    @endif

    <table class="table table-bordered">
      <tr>
        <th>No.</th>
        <th>Status</th>
        <th>Size</th>
        <th>Log date</th>
        <th width="280px">Action</th>
      </tr>
      @foreach ($data as $key =>$value)
        <tr>
          <td>{{ ++$i }}</td>
          <td>Player {{ $value->status }}<a href=""></a></td>
          <td>{{ $value->size }} x {{ $value->size }}</td>
          <td>{{ DateFormat($value->created_at) }}</td>
          <td>
            <form action="{{ route('web.destroy',$value->id) }}"  method="post">
              <a href="{{ route('web.index',['id'=>$value->id]) }}" class="btn btn-secondary">Replay</a>
              @csrf
              @method('DELETE')
              <button href="" class="btn btn-danger">Delete</button>
            </form>
          </td>
        </tr>
      @endforeach
      @if(empty($value->id))
        <tr><td colspan="7" align="center"  valign="middle"  class="divRightContantTbRL" style="padding-top:150px; padding-bottom:150px;" >None</td></tr>
        @endif
    </table>
    {!! $data->links() !!}

    </div>


</body>
</html>

