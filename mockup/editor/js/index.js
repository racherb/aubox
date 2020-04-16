(function() {
  var $removeLinkage = $('.js-remove-linkage');
  var $runtimePanel = $('.js-runtime-panel');
  var $toggleRuntime = $('.js-toggle-runtime');
  var $jobPanel = $('.js-job-panel');
  var $toggleJob = $('.js-toggle-job');
  var $lnkPanel = $('.js-lnk-panel');
  var $toggleLnk = $('.js-toggle-lnk');
  var $removeCond = $('.js-remove-cond');
  var $appendPanel = $('.js-append-panel');
  var $toggleAppend = $('.js-toggle-append');
  var $outputPanel = $('.js-output-panel');
  var $toggleOutput = $('.js-toggle-output');
  var $exitPanel = $('.js-exit-panel');
  var $toggleExit = $('.js-toggle-exit');
  var $code = $('.js-code');
  var $toggleCode = $('.js-toggle-code');
  var $cond_ifref = $('.js-cond_ifref');
  var $cond_ifop = $('.js-cond_ifop');
  var $ifvar = $('.js-ifvar');
  var $ifitem = $('.js-ifitem');
  var $panelConds = $('.js-panel-conds');
  var $toggleConds = $('.js-toggle-conds');
  var $description = $('.js-description');
  var $panelDesc = $('.js-panel-desc');
  var $toggleDesc = $('.js-toggle-desc');
  var $postexec = $('.js-postexec');
  var $exec = $('.js-exec');
  var $preexec = $('.js-preexec');


  $toggleConds.on('click', {index: 1}, toggleConds);
  $toggleCode.on('click', {index: 1}, toggleCode);
  $toggleDesc.on('click', {index: 1}, toggleDesc);
  $toggleLnk.on('click', {index: 1}, toggleLnk);
  $toggleJob.on('click', {index: 1}, toggleJob);
  $toggleRuntime.on('click', {index: 1}, toggleRuntime);
  $toggleExit.on('click', {index: 1}, toggleExit);
  $toggleOutput.on('click', {index: 1}, toggleOutput);
  $toggleAppend.on('click', {index: 1}, toggleAppend);

  function toggleConds(e){
  	$panelConds.toggle('fast');
  }

  function toggleCode(e){
  	$code.toggle('fast');
  }

  function toggleDesc(e){
  	$panelDesc.toggle('fast');
  }

  function toggleLnk(e){
  	$lnkPanel.toggle('fast');
  }

  function toggleJob(e){
    $jobPanel.toggle('fast');
  }

  function toggleRuntime(e){
    $runtimePanel.toggle('fast');
  }

  function toggleExit(e){
    $exitPanel.toggle('fast');
  }

  function toggleOutput(e){
    $outputPanel.toggle('fast');
  }

  function toggleAppend(e){
    $appendPanel.toggle('fast')
  }

})();