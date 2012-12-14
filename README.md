# placeholder2000

A quick and dirty placeholder plugin for jQuery.

* Works in IE8, IE9, Chrome etc
* Works with jQuery validate and jQuery unobtrusive validation

## Usage

Simple usage:

    <script>
	    $(function() {
	        $('input[placeholder]').placeholder();
        });
	</script>
	
With options:

    <script>
	    $(function() {
	        $('input[placeholder]').placeholder({ cssClass: 'myPlaceHolderClass', idPrefix: 'myInput' });
        });
	</script>
	
### Options

**cssClass**	-	CSS class of placeholder

**idPrefix**	-	prefix for generated IDs when missing on the inputs

## License

MIT license - http://www.opensource.org/licenses/mit-license.php