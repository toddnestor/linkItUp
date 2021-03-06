var linkItUp = function( string, options ) {
    var re = /(?:^|\ |\n)(((?:(?:http(?:s)?\:)?(?:\/\/))|(?:\/\/))?(?:(?=[a-z0-9\-\.]{1,255}(?=\/|\ |$|\:|\n|\?|\,|\!))(?:(?:(?:[a-z0-9]{1}(?:[a-z0-9\-]{1,62})?\.){1,127})[a-z]{2,}(?:\.[a-z]{2})?))(?:[a-z0-9\/\-\_\%\?\&\!\$\'\,\.\(\)\*\+\=\;])*?)(?=$|\.(?=\ |$)|\:|\n|\ |\?(?=\ |$)|\,|\!)/ig;

    return string.replace(re, function( match, p1, p2 ){
        return ( match.split('')[0] == ' ' ? ' ' : '' ) + '<a ' + ( options && options.new_tab ? ' target="_blank" ' : '' ) + ( options && options.style ? ' style="' + options.style + '" ' : '' ) + ( options && options.class ? ' class="' + options.class + '" ' : '' ) + ( options && options.title ? ' title="' + options.title + '" ' : '' ) + ( options && options.rel ? ' rel="' + options.rel + '" ' : '' ) + 'href="' + ( p2 ? '' : '//' ) + p1  + '">' + p1 + '</a>';
    });
};

if( typeof $ != 'function' && typeof jQuery != 'function' )
    throw new Error('linkItUp is a requires jQuery to run.');
else
{
    (function ( $ ) {
        $.fn.linkItUp = function(options) {
            options = options || {};

            this.html( linkItUp( this.html(), options ) );

            return this;
        };
    }( jQuery ));
}