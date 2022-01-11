# api
An Api for easy communication between jrp servers, and your website.

## Use

To use this api, include it in your head element:

```html
<script src="http://api.jrp.best/api.min.js"></script>
```

### Functions

## GetFav();

This function gets the requested favicon's base64 value, example:

```html
<script src="http://api.jrp.best/api.js"></script>
<script>
  var favb64 = GetFav('V1JmRzhJNkpBZHVXb0xuazMzb0paS2JRaFhtWjRhcnhLTnNyUmdvVTJOWT0=');
  conaolr.log(favb64); // logs: 
</script>
```
