<li class="list-group-item bg-dark">
    Namn: {{ $person->name }}
    <br>
    Rank: {{ $person->rank }}
    <br>
    Email:
    @if( $person->email )
        <a rel="noreferrer" class="link" href="mailto:{{ $person->email }}">{{ $person->email }}</a>
    @else
        <u>
            Ingen e-postadress tillagd
        </u>
    @endif
    <br>
    Telefonnummer:
    @if( $person->email )
        <a rel="noreferrer" class="link" href="tel:{{ $person->phone }}">{{ $person->phone }}</a>
    @else
        <u>
           Inget telefonnummer tillagt
        </u>
    @endif
</li>