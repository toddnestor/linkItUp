# linkItUp

A jQuery plugin to turn raw urls into links.

## Getting Started

These instructions will get you up and running using the linkItUp script.

### Prerequisities

This is a jQuery plugin, so it requires that you include jQuery first.

You can include jQuery by downloading it and including it in your project, or just include the CDN to it like this:
```
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
```

### Installing

Either download this repository and include linkItUp.min.js in your project, or include the CDN like this:

```
<script type="text/javascript" src="http://herc-scripts.objects.cdn.dream.io/linkItUp.min.js"></script>
```

That's it!  Now you can use it anywhere you want.

### Usage

You can now use this in your project.  Just use it on any jQuery selector.

```
<script type=text/javascript">
  $('.container').linkItUp();
</script>
```

You can also send in an options object:

```
<script type=text/javascript">
    $('.container').linkItUp({
        new_tab: true,
        class: 'some-class and-other-class',
        style: 'color: red; text-decoration: none; font-weight: bold;'
    });
</script>
```

Though this is mainly a jQuery plugin, you can also use the linkItUp() function by itself (even if you haven't included jQuery).

It accepts two arguments, the first is the string you want to turn into, and the second is the same options object the jQuery version of the method accepts.

It returns the resulting string with the links in it.

```
<script type="text/javascript">
    var string = 'I like google.com';
    var options = {new_tab: true};
    var result = linkItUp( string, options );
    //result now equals: 'I like <a target="_blank" href="//google.com">google.com</a>'
</script>
```

### Options

linkItUp accepts the following options:

- new_tab - set to true to add target="_blank" to the resulting links
- style - send in exact contents of style attribute like "color: red; font-weight: bold;"
- class - send in exact contents of the class attribute like "first-class second-class"
- title - send in contents of the title attribute, note that all the resulting links will have that same title
- rel - send in contents of the rel attribute, note that all the resulting links will have that same rel

You can use any or none of the options when calling linkItUp()

## Reference

You can view the regex that is used by this plugin here: https://regex101.com/r/hU0tJ2/3

## Authors

* **Todd Nestor** - *100% of the work* - [toddnestor](https://github.com/toddnestor)

## License

This project is licensed under the terms of the MIT license.
