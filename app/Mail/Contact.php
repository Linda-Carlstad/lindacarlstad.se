<?php

namespace App\Mail;

use Illuminate\Http\Request;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class Contact extends Mailable
{
    use Queueable, SerializesModels;

    public $information
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct( Request $request )
    {
        $this->information = $request;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from( $this->information->email, $this->information->name )
                ->replyTo( $this->information->email )
                ->subject( 'Kontaktformulär: ' . $this->information->subject )
                ->view( 'mail.contact.form' );
    }
}
