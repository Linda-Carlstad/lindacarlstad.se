@section('title', 'Dokument')
@extends('layouts.app')

@section('content')

	<h1>Dokument</h1>

	<ul class="nav nav-tabs nav-fill" id="documentTab" role="tablist">
		<li class="nav-item">
			<a class="nav-link active" id="statues-tab" data-toggle="tab" href="#statues" role="tab" aria-controls="statues" aria-selected="true">Stadgar</a>
		</li>
		<li class="nav-item">
			<a class="nav-link" id="meetingprotocol-tab" data-toggle="tab" href="#meetingprotocol" role="tab" aria-controls="profile" aria-selected="false">Mötesprotokoll</a>
		</li>
		<li class="nav-item">
			<a class="nav-link" id="other-tab" data-toggle="tab" href="#other" role="tab" aria-controls="other" aria-selected="false">Övrigt</a>
		</li>
	</ul>

	<div id="documentli">
		<div class="tab-pane fade show active collapse multi-collapse" id="statues" role="tabpanel" aria-labelledby="statues-tab">
			<div class="tabUl p-4">
			<a href="{{url('/')}}/{{ Storage::disk('local')->url('Stadgar-antagna-2018-11-07.pdf')}}">Download File</a>
			<!--
				- <a class="link" href="{{ asset( '/storage/Stadgar-antagna-2018-11-07.pdf' ) }}" target="_blank">
					Stadgar antagna 2018 11 07
				</a>
			-->
			</div>
		</div>
		<div class="tab-pane fade  collapse multi-collapse" id="meetingprotocol" role="tabpanel" aria-labelledby="meetingprotocol-tab">
			<div class="tabUl p-4">
				Inga dokument finns att se på, än så länge ;)
			</div>
		</div>
		<div class="tab-pane fade collapse multi-collapse" id="other" role="tabpanel" aria-labelledby="other-tab">
			<div class="tabUl p-4">
				- <a class="link" href="{{ asset( '/storage/Linda-Carlstads-personuppgiftspolicy.pdf' ) }}" target="_blank">
					Linda Carlstads personuppgiftspolicy
				</a>
			</div>
		</div>


@endsection
