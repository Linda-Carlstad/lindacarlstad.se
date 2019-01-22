<?php

namespace App\Mail;

use App\User;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class UserVerified extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct( User $user )
    {
        //
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from( 'no-reply@lindacarlstad.se', 'Linda Carlstad' )
                ->replyTo( 'no-reply@lindacarlstad.se' )
                ->subject( 'Användare verifierad' )
                ->view( 'mail.user.verified' );
    }
}
