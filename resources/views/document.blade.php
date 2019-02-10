@section('title', 'Dokument')
@extends('layouts.app')

@section('content')

<div class="text-center">
	<h1>Dokument</h1>
</div>
<div class="row">
	<div class="col-lg-6 offset-md-3">
		<ul class="nav nav-tabs nav-fill" id="documentTab" role="tablist">
			<li class="nav-item">
				<a class="nav-link active" id="statues-tab" data-toggle="tab" href="#statues" role="tab" aria-controls="statues" aria-selected="true">Stadgar</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" id="meetingprotocol-tab" data-toggle="tab" href="#meetingprotocol" role="tab" aria-controls="profile" aria-selected="false">Mötesprotokoll</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" id="songs-tab" data-toggle="tab" href="#songs" role="tab" aria-controls="songs" aria-selected="false">Sånger</a>
			</li>
		</ul>
	</div>
</div>
<div class="row">
	<div class="col-lg-6 offset-md-3">
		<div id="documentli">
			<div class="tab-pane fade show active collapse multi-collapse" id="statues" role="tabpanel" aria-labelledby="statues-tab">
				<div class="tabUl">
					<ul>
						<div class="tabLi">
							<li>
            Li 1
            </li>
						</div>
					</ul>
				</div>
			</div>
			<div class="tab-pane fade  collapse multi-collapse" id="meetingprotocol" role="tabpanel" aria-labelledby="meetingprotocol-tab">
				<div class="tabUl">
					<ul>
						<div class="tabLi">
							<li>
            Li 2
            </li>
						</div>
					</ul>
				</div>
			</div>
			<div class="tab-pane fade collapse multi-collapse" id="songs" role="tabpanel" aria-labelledby="songs-tab">
				<div class="tabUl">
					<ul>
						<div class="tabLi">
							<li>
            Li 3
            </li>
						</div>
					</ul>
				</div>
			</div>
		</div>
	</div>

@endsection
