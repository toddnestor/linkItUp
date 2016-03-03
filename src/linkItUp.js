if( typeof $ != 'function' && typeof jQuery != 'function' )
    throw new Error('jHerc is a jQuery plugin and therefore requires jQuery to run.');
else
{
    (function ( $ ) {
        $.fn.linkItUp = function(options) {
            options = options || {};

            var linkify = function( string, options ) {
                var re = /(?:^|\ )(((?:(?:http(?:s)?\:)?(?:\/\/))|(?:\/\/))?(?:(?=[a-z0-9\-\.]{1,255}(?=\/|\ |$|\:|\?|\,|\!))(?:(?:(?:[a-z0-9]{1}(?:[a-z0-9\-]{1,62})?\.){1,127})[a-z]{2,}(?:\.[a-z]{2})?))(?:[a-z0-9\/\-\_\%\?\&\!\$\'\,\(\)\*\+\=\;])*?)(?=$|\.(?=\ |$)|\:|\ |\?(?=\ |$)|\,|\!)/ig;

                return string.replace(re, function( match, p1, p2 ){
                    return ( match.split('')[0] == ' ' ? ' ' : '' ) + '<a ' + ( options && options.new_tab ? ' target="_blank" ' : '' ) + 'href="' + ( p2 ? '' : '//' ) + p1  + '">' + p1 + '</a>';
                });
            };

            this.html( linkify( this.html(), options ) );

            return this;
        };
    }( jQuery ));
}