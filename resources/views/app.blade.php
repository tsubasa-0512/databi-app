<!doctype html>
<html lang="ja">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="api-token" content="{{ session()->get('api_token') ?? '' }}">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Databi</title>
    <link rel="stylesheet" href="{{ mix('css/app.css') }}"></link>
</head> 
<body>
    <div id="app"></div>
</body>
    <script src="{{ mix('js/index.js')}}"defer ></script>
</html>