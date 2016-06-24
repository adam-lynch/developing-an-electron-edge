var scheme = window.location.protocol === 'file:' ? 'https:' : window.location.protocol;
fetch(scheme + '//s3.amazonaws.com/something/blah').then(() => {
    //...
});