if( typeof $ != 'function' && typeof jQuery != 'function' )
    throw new Error('jHerc is a jQuery plugin and therefore requires jQuery to run.');
else
{
    (function ( $ ) {
        $.fn.linkItUp = function() {
            var linkify = function( string ) {
                var re = /(?:^|\ )(((?:(?:http(?:s)?\:)?(?:\/\/))|(?:\/\/))?(?:(?=[a-z0-9\-\.]{1,255}(?=\/|\ |$|\:|\?|\,|\!))(?:(?:(?:[a-z0-9]{1}(?:[a-z0-9\-]{1,62})?\.){1,127})[a-z]{2,}(?:\.[a-z]{2})?))(?:[a-z0-9\/\-\_\%\?\&\!\$\'\,\(\)\*\+\=\;])*?)(?=$|\.(?=\ |$)|\:|\ |\?(?=\ |$)|\,|\!)/ig;

                return string.replace(re, function( match, p1, p2 ){
                    return '<a href="' + ( p2 ? '' : '//' ) + p1  + '">' + p1 + '</a>';
                });
            }

            this.html( linkify( this.html() ) );

            return this;
        };
    }( jQuery ));
}