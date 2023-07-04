## Testing

### Screenshot testing

Tests is running with Jest & Puppeteer.
Tests is placed in [./screenshots](./screenshots).
Tests are run via docker-compose.

Stories of components with animation are not suitable for visual testing due to their inconsistency between launches. To exclude such components from visual testing, such `stories` must have the word "animation" in their name. For example - `ButtonLoadingAnimation`.

To test run the command

```
docker-compose up -d screenshots
```

To update screenshots run the command:

```
docker-compose up -d screenshots-update
```
