// bind methods fired on React events
this.setAudioElementRef = this.setAudioElementRef.bind(this);
this.togglePause = this.togglePause.bind(this);
this.selectTrackIndex = this.selectTrackIndex.bind(this);
this.forwardSkip = this.forwardSkip.bind(this);
this.backSkip = this.backSkip.bind(this);
this.seekPreview = this.seekPreview.bind(this);
this.seekComplete = this.seekComplete.bind(this);
this.setVolume = this.setVolume.bind(this);
this.setVolumeComplete = this.setVolumeComplete.bind(this);
this.toggleMuted = this.toggleMuted.bind(this);
this.toggleShuffle = this.toggleShuffle.bind(this);
this.setRepeatStrategy = this.setRepeatStrategy.bind(this);
this.setPlaybackRate = this.setPlaybackRate.bind(this);

// bind audio event listeners to add on mount and remove on unmount
this.handleAudioPlay = this.handleAudioPlay.bind(this);
this.handleAudioPause = this.handleAudioPause.bind(this);
this.handleAudioSrcrequest = this.handleAudioSrcrequest.bind(this);
this.handleAudioEnded = this.handleAudioEnded.bind(this);
this.handleAudioStalled = this.handleAudioStalled.bind(this);
this.handleAudioCanplaythrough = this.handleAudioCanplaythrough.bind(this);
this.handleAudioTimeupdate = this.handleAudioTimeupdate.bind(this);
this.handleAudioLoadedmetadata = this.handleAudioLoadedmetadata.bind(this);
this.handleAudioVolumechange = this.handleAudioVolumechange.bind(this);
this.handleAudioDurationchange = this.handleAudioDurationchange.bind(this);
this.handleAudioProgress = this.handleAudioProgress.bind(this);
this.handleAudioLoopchange = this.handleAudioLoopchange.bind(this);
this.handleAudioRatechange = this.handleAudioRatechange.bind(this);
