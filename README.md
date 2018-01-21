`ip-test`
=========

> Get your public IPv4 and IPv6 addresses

Live version: https://ip-test.ludovic-muller.fr/

## Getting started

### Server part

The server part is just used to print the current IP used by the user, that's
why in the [`server directory`](./server) you will see a simple `index.php` file
which print the IP address.

### Client part

The client part is used to retrieve the requests to get the IPv4 and IPv6
addresses of the user. It's a basic user-friendly interface.

### DNS part

The hack will be there. How to get the IPv4 and the IPv6 addresses of the
current user? The answer is very easy to understand: use DNS!

So we need three sub-domains, in my case:
  - `ip-test.ludovic-muller.fr`: just point to the client part using `CNAME` or
    a combination of a `A` and `AAAA` records,
  - `ipv4-test.ludovic-muller.fr`: only use a `A` record pointing to the server
    part,
  - `ipv6-test.ludovic-muller.fr`: only use a `AAAA` record pointing to the
    server part.

## How it works?

The user loads the `ip-test` page. The page will make two requests using
JavaScript to the two other subdomains: `ipv4-test` and `ipv6-test`. If a
request fails, it would say that the IP version isn't supported by the client.
In the other way, the request will directly give the good version of the user
IP.
