<?php $__env->startSection( 'title', 'Profil' ); ?>

<?php $__env->startSection( 'content' ); ?>

    <?php if(auth()->guard()->check()): ?>
        <div class="">
            <h1>Welcome back <?php echo e(Auth::user()->name); ?></h1>
        </div>
    <?php endif; ?>

<?php $__env->stopSection(); ?>

<?php echo $__env->make( 'layouts.app' , \Illuminate\Support\Arr::except(get_defined_vars(), array('__data', '__path')))->render(); ?>