# Seamless Demo

Simulates a microservice architecture with 3 services that communicate with each other. The CI/CD pipeline enables us to update and deploy each one independently.

1. Payment Service
2. Notification Service

Both are intended to be deployed to a Fargate cluster and communicate via Service Connect.

## This Repo is Microservice 2: Notification Service

### Has an Express app with 1 route:

`/notifications`

Listens for POST request and responds with status 200:
```
{
    "message": "Notification was sent to customer"
}
```

Then sends a POST request to the customer (a RequestBin):
```
{
    "message": "Your payment is due: $42"
}
```
```
{
    "message": "You paid $42. Thanks for being a customer!"
}
```