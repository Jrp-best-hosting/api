# api
An Api for easy communication between jrp servers, and your website.

[![Minimify api.js](https://github.com/Jrp-best-hosting/api/actions/workflows/auto-min.yaml/badge.svg)](https://github.com/Jrp-best-hosting/api/actions/workflows/auto-min.yaml)

## Use

To use this api, include it in your head element:

```html
<script src="http://api.jrp.best/minified_files/include-apis.min.js"></script>
```

### Functions

## GetB64File(key, filename);

This function gets the requested files base64 value, example:

```html
<script src="http://api.jrp.best/minified_files/include-apis.min.js"></script>
<script>
  async function jrpfav() {
    var favb64 = GetB64File(accesskey, 'favicon-jrp.best');
    console.log(favb64);
  };
  jrpfav();
</script>
```
