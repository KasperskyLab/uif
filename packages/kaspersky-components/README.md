## Testing

### Screenshot testing

- tests are placed in [./screenshots](./screenshots) 
- tests are running via `docker-compose`
- for new tests please use `Jest` and `Puppeteer`

Component stories with animation are not suitable for visual testing due to their inconsistency between launches. To exclude such components from visual testing, such `stories` must have the word "animation" in their name. For example - `ButtonLoadingAnimation`.

To start tests run the command:

```
docker-compose up -d screenshots
```

To update screenshots run the command:

```
docker-compose up -d screenshots-update
```
