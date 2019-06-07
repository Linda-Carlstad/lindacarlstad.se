@section('title', 'Nyheter')
@extends('layouts.app')

@section('content')

<h1 class="text-center">Nyheter</h1>
<hr>
<div class="row">
    <div class="text-center">
        <p>Gå gärna in på vår Facebook, <a target="_blank" class="link" href="https://www.facebook.com/linda.carlstad/">Linda Carlstad</a>.</p>

    </div>
    {{-- @if( $facebookData->isEmpty() )
        <div class="text-center">
            <p>Inga nyheter hittade. </p>
        </div>
    @else
        @foreach ($facebookData as $post)
        <div class='col-sm-6 mb-5 justify-content-center mx-auto'>
            <div class='card bg-dark h-100'>
                <div class='card-header d-flex flex-column'>
                    @if ( !empty($post->getField('caption')) )
                        <h5 class="card-title">{{$post->getField('caption')}}</h5>
                    @else
                        <h5 class="card-title">Linda Carlstad</h5>
                    @endif

                    <small class="mb-3">{{$post->getField('created_time')->format('Y-m-d')}}</small>
                </div>
                <div class='card-body d-flex flex-column'>
                    <p>
                        @if( !empty( $post->getField('message') ) )
                            {{substr($post->getField('message'), 0, 200)}}...
                        @else
                            Klicka på länken nedan för att se inlägget på Facebook.
                        @endif
                    </p>
                    @if( !empty( $post->getField('permalink_url') ) )
                        <a class="btn btn-red mt-auto" href="{{$post->getField('permalink_url')}}">Läs mer</a>
                    @else
                        <a class="btn btn-red mt-auto" href="https://www.facebook.com/linda.carlstad">Läs mer</a>
                    @endif
                </div>
            </div>
        </div>
    @endforeach
    @endif --}}

</div>

<hr>
@endsection
