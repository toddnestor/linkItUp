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

You can now use this in your project.  Just use it on any jQuery selector, even the body!

```
<script type=text/javascript">
  $('body').linkItUp();
</script>
```

You can also send in an options object:

```
<script type=text/javascript">
    $('body').linkItUp({
        new_tab: true,
        class: 'some-class and-other-class',
        style: 'color: red; text-decoration: none; font-weight: bold;'
    });
</script>
```

### Options

linkItUp accepts the following options:

- new_tab - set to true to add target="_blank" to the resulting links
- style - send in exact contents of style attribute like "color: red; font-weight: bold;"
- class - send in exact contents of the class attribute like "first-class second-class"
- title - send in contents of the title attribute, note that all the resulting links will have that same title
- ref - send in contents of the ref attribute, note that all the resulting links will have that same ref

You can use any or none of the options when calling linkItUp()

## Reference

You can view the regex that is used by this plugin here: https://regex101.com/r/hU0tJ2/2

## Authors

* **Todd Nestor** - *100% of the work* - [toddnestor](https://github.com/toddnestor)

## License

This project is licensed under the terms of the MIT license.
