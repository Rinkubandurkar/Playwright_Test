const environment = "staging";

const devUrl = "https://dev.example.com";
const stagingUrl = "https://staging.example.com";
const qaUrl = "https://qa.example.com";
const prodUrl = "https://api.example.com";

let config;

switch (environment.toLowerCase()) {

    case "dev":
        config = {
            baseUrl: devUrl,
            apiKeyPattern: "DEV-API-KEY-XXXX",
            timeout: 5000,
            description: "Development environment"
        };
        break;

    case "staging":
        config = {
            baseUrl: stagingUrl,
            apiKeyPattern: "STG-API-KEY-XXXX",
            timeout: 10000,
            description: "Staging environment"
        };
        break;

    case "qa":
        config = {
            baseUrl: qaUrl,
            apiKeyPattern: "QA-API-KEY-XXXX",
            timeout: 8000,
            description: "QA testing environment"
        };
        break;

    case "production":
    case "prod":
        config = {
            baseUrl: prodUrl,
            apiKeyPattern: "PROD-API-KEY-XXXX",
            timeout: 15000,
            description: "Production environment"
        };
        break;

    default:
        console.log("Invalid environment:", environment);
        break;
}

if (config) {
    console.log("----- ENVIRONMENT CONFIG -----");
    console.log("Environment:", environment);
    console.log("Base URL:", config.baseUrl);
    console.log("API Key Pattern:", config.apiKeyPattern);
    console.log("Timeout:", config.timeout + " ms");
    console.log("Description:", config.description);
}