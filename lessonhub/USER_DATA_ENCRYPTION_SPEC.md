# Lesson Hub user data encryption specification

This document describes the technique used to safely exchange Lesson Hub registration emails and user data with systems interacting with it. 

Email address is the unique identifier of the user interacting with Lesson Hub and it will be provided by a third party system. Users will be directed to a URL where they will specify a password for a given email address.

## Encrpytion method

Encryption of sent parameters is used to prevent [Directory Harvest Attack](http://en.wikipedia.org/wiki/Directory_Harvest_Attack) on user data.

User data is expected to consist of multiple [Base64](https://tools.ietf.org/html/rfc4648) encoded strings and sent as a parameter in the following format:

/register/:encoded_user_data

where `:encoded_user_data` is a string that contains user's email, user's first name and user's last name divided by the ampersand character (&).

For Mary Smith, whose email is *mary.smith@baileymiddleschool.com*, the correct URL would be

/register/bWFyeS5zbWl0aEBiYWlsZXltaWRkbGVzY2hvb2wuY29t&TWFyeQ==&U21pdGg=

## Base64 as compared to other encryption methods

Base64 is a very simple implementation of a two-way encryption algorithm. It's used to maintain simplicity while ensuring a basic form of email address masking. It's also assumed that any platform used on third party systems interacting with Lesson Hub will have Base64 encryption algorithm implemented in either standard or external libraries available to that platform.
AES-256-CBC encryption is an alternative that might be better for data that is more critical, but it introduces higher complexity and is disregarded for this scenario in favor of Base64.
