@extends( 'errors.layouts' )
@section( 'title', $exception->getStatusCode() )
@section( 'code', $exception->getStatusCode() )