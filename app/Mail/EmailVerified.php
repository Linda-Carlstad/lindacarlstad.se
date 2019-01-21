<?php

namespace App\Mail;

use App\User;
use App\EmailVerification;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class EmailVerified extends Mailable
{
    use Queueable, SerializesModels;

    public $user;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct( User $user )
    {
        $this->user  = $user;
    }

    /**
     * Build the message.
     *
     * @return $this
     */

    public function build()
    {
        return $this->from( 'no-reply@lindacarlstad.com', 'Linda Carlstad' )
                ->replyTo( 'no-reply@lindacarlstad.com' )
                ->subject( 'Email verifierad' )
                ->view( 'mail.email.verified' );
    }
}
