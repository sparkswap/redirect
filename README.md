# Now Redirect
Simple microservice to redirect to an url

## Usage

If you haven't installed `now` already, start by following [these instructions](https://zeit.co/docs/getting-started/installation)

To deploy the service use the following command:

```
now now-examples/redirect
```

You'll be asked to provide `REDIRECT_URL`.
An example `REDIRECT_URL` is: `https://www.example.com`

After the deployment is complete you can create an alias for your custom domain:

```
now alias <unique-deployment-url> example.com
```

In this example you've made a redirect from:
```
https://example.com ⟶ https://www.example.com
```


> On `now` every subdomain is unique. So `example.com` and `www.example.com` can be 2 different instances. This is useful when you want to, for example, redirect from non-www to www.

## Authors

- Tim Neutkens ([@timneutkens](https://github.com/timneutkens))
- Nathan Rajlich ([@TooTallNate](https://twitter.com/TooTallNate) – ▲ZEIT)
