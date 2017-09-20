# Now Redirect
Simple microservice to redirect to an url

## Usage

```
now -e REDIRECT_URL=https://www.example.com now-examples/now-redirect
```

This will spin up an instance and give you an unique url, which redirects `<unique-url-here>` to `http://www.example.com`.

To link the instance to your domain use:

```
now alias <unique-url-here> example.com
```

In this example you've made a redirect from `https://example.com` to `https://www.example.com`.

On `now` every subdomain is unique. So `example.com` and `www.example.com` can be 2 different instances. This is useful when you want to, for example, redirect from non-www to www.

#### Alternatives

https://github.com/vdanchenkov/now-redirect

## Authors

- Tim Neutkens ([@timneutkens](https://github.com/timneutkens))
- Nathan Rajlich ([@TooTallNate](https://twitter.com/TooTallNate) – ▲ZEIT
